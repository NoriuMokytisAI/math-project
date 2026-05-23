from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
GEN = ROOT / "content" / "generated"
OUT = ROOT / "frontend" / "src" / "content.generated.js"
SPLIT_OUT = ROOT / "frontend" / "src" / "generated"


def js(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def text_value(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, str):
        return value
    if isinstance(value, (int, float, bool)):
        return str(value)
    if isinstance(value, list):
        return " ".join(part for part in (text_value(item) for item in value) if part)
    if isinstance(value, dict):
        preferred = [
            "text",
            "content",
            "latex",
            "equation",
            "description",
            "conceptualContext",
            "wrongPattern",
            "whyItHappens",
            "correction",
            "exampleWrong",
            "exampleCorrect",
            "title",
        ]
        parts = [text_value(value.get(key)) for key in preferred if value.get(key)]
        for key in ("items", "rows", "steps"):
            if value.get(key):
                parts.append(text_value(value[key]))
        return " ".join(part for part in parts if part)
    return str(value)


def plain_block(block: dict) -> str:
    kind = block.get("type")
    text = block.get("text") or block.get("content") or ""
    if kind == "paragraph":
        return text
    if kind in ("definition", "definitionCallout"):
        return text
    if kind == "theorem":
        return f"Teorema. {text}"
    if kind == "property":
        return f"Savybė. {text}"
    if kind == "note":
        return f"Pastaba. {text}"
    if kind in ("warning", "warningCallout"):
        return f"Įspėjimas. {text}"
    if kind in ("method", "strategy"):
        return f"Metodas. {text}"
    if kind in ("formula", "formulaCallout"):
        formula = block.get("latex") or block.get("equation") or text
        explanation = block.get("description") or block.get("conceptualContext") or ""
        return " ".join(part for part in (f"Formulė: {formula}", explanation) if part)
    if kind == "mistake":
        return f"Klaida. {text_value(block)}"
    if kind == "example":
        return f"Pavyzdys. {text_value(block)}"
    if kind == "list":
        return text_value(block.get("items", []))
    if kind == "table":
        return text_value(block.get("rows", []))
    return text or text_value(block)


def section_body(section: dict) -> list[str]:
    body: list[str] = []
    if section.get("content"):
        body.append(section["content"])
    body.extend(plain_block(block) for block in section.get("blocks", []))
    return [item for item in body if str(item).strip()]


def solution_text(example: dict) -> str:
    steps = []
    for step in example.get("steps", []):
        text = step.get("text")
        latex = step.get("latex")
        if text and latex and text not in latex:
            steps.append(f"{text} {latex}")
        elif text:
            steps.append(text)
        elif latex:
            steps.append(latex)
    if steps:
        return " ".join(steps)
    return text_value(example.get("solution") or example.get("solutionSteps") or "")


def formula_latex(item: dict) -> str:
    return item.get("latex") or item.get("equation") or item.get("formula") or ""


def formula_explanation(item: dict) -> str:
    return item.get("explanation") or item.get("description") or item.get("conceptualContext") or item.get("title", "")


def answer_data(raw_answer: Any) -> tuple[str, list[str], float, list[str]]:
    if not isinstance(raw_answer, dict):
        value = "" if raw_answer is None else str(raw_answer)
        return value, [value] if value else [], 0, []

    kind = raw_answer.get("kind")
    if kind == "choice":
        choices = [str(choice.get("text", "")) for choice in raw_answer.get("choices", [])]
        correct_ids = set(raw_answer.get("correctChoiceIds", []))
        correct = next(
            (str(choice.get("text", "")) for choice in raw_answer.get("choices", []) if choice.get("id") in correct_ids),
            choices[0] if choices else "",
        )
        return correct, [correct] if correct else [], 0, choices
    if kind == "numeric":
        value = str(raw_answer.get("value", ""))
        return value, [value] if value else [], raw_answer.get("tolerance", 0), []
    if kind == "structuredReasoning":
        value = raw_answer.get("expectedConclusion") or raw_answer.get("canonical") or "Sprendimas pateiktas savikontrolei."
        return str(value), [str(value)], 0, []
    if kind == "expression":
        value = str(raw_answer.get("canonical", ""))
        accepted = [value, *[str(item) for item in raw_answer.get("acceptedEquivalentForms", []) if str(item)]]
        return value, accepted, 0, []

    value = str(raw_answer.get("canonical") or raw_answer.get("value") or raw_answer.get("expectedConclusion") or "")
    return value, [value] if value else [], 0, []


def exercise_solution(exercise: dict) -> str:
    from_steps = " ".join(text_value(step) for step in exercise.get("solutionSteps", []))
    if from_steps.strip():
        return from_steps
    direct = text_value(exercise.get("solution") or exercise.get("fullSolution") or exercise.get("answerText"))
    if direct.strip():
        return direct
    return " ".join(text_value(method.get("steps", [])) for method in exercise.get("solutionMethods", []) if isinstance(method, dict))


def exercise_difficulty(exercise: dict) -> str:
    if exercise.get("olympiadTier"):
        return exercise["olympiadTier"]
    raw = str(exercise.get("difficulty") or exercise.get("level") or "").lower()
    if raw in {"easy", "lengvas", "lengvi", "1", "2"}:
        return "easy"
    if raw in {"hard", "sunkus", "sunkūs", "4", "5"}:
        return "hard"
    if raw in {"mixed", "misrus", "mišrus"}:
        return "mixed"
    if raw in {"test", "testinis"}:
        return "test"
    if raw == "olympiad":
        return exercise.get("olympiadTier") or "standard"
    return "medium"


def statement_preview(text: str, limit: int = 140) -> str:
    clean = " ".join(str(text).split())
    return clean if len(clean) <= limit else clean[: limit - 1].rstrip() + "…"


def render_content() -> str:
    topics_files = sorted(path for path in GEN.glob("*/*.json") if not path.name.endswith((".bak", ".tmp", ".old")))
    topics_by_grade = defaultdict(list)
    topic_titles: dict[str, str] = {}
    concepts: dict[str, dict] = {}
    topics: dict[str, dict] = {}
    exercises: list[dict] = []
    exercises_by_grade = defaultdict(list)
    tests: list[dict] = []
    achievements = {
        "onboarded": "Pirmas žingsnis",
        "firstTheory": "Teorijos startas",
        "firstSrs": "Atminties ratas",
        "firstExercise": "Pirmas išspręstas",
        "noHints": "Be užuominų",
        "topicMastered": "Tema įveikta",
        "testAced": "Testas be panikos",
    }

    for path in topics_files:
        data = json.loads(path.read_text(encoding="utf-8"))
        topic = data["topic"]
        topic_titles[topic["id"]] = topic["title"]
        topics_by_grade[str(topic["grade"])].append((topic.get("order", 999), topic["title"]))

        topic_concept_ids: list[str] = []
        for item in data.get("concepts", []):
            cid = item["id"]
            topic_concept_ids.append(cid)
            existing = concepts.get(cid, {
                "title": item["title"],
                "type": item.get("type", "concept"),
                "definition": item.get("shortDefinition", ""),
                "intuition": item.get("intuition", ""),
                "formal": item.get("formal", ""),
                "related": [],
                "topics": [],
            })
            existing["title"] = item["title"]
            existing["type"] = item.get("type", "concept")
            existing["definition"] = item.get("shortDefinition", "")
            existing["intuition"] = item.get("intuition", "")
            existing["formal"] = item.get("formal", "")
            existing["related"] = item.get("relatedConceptIds", [])
            topics_list = set(existing.get("topics", []))
            topics_list.add(topic["id"])
            existing["topics"] = sorted(topics_list)
            concepts[cid] = existing

        for item in data.get("formulas", []):
            fid = item["id"]
            explanation = formula_explanation(item)
            formula = formula_latex(item)
            concepts[fid] = {
                "title": item["title"],
                "type": item.get("type", "formula"),
                "definition": explanation,
                "intuition": explanation,
                "formal": formula,
                "related": item.get("relatedConceptIds", []),
                "topics": [topic["id"]],
            }

        for item in data.get("mistakes", []):
            mid = item["id"]
            concepts[mid] = {
                "title": item["title"],
                "type": item.get("type", "mistake"),
                "definition": item.get("whyItHappens", item.get("title", "")),
                "intuition": item.get("wrongPattern", ""),
                "formal": item.get("correction", ""),
                "related": item.get("conceptIds", []),
                "topics": [topic["id"]],
            }

        topic_exercises = data.get("exercises", [])
        topics[topic["id"]] = {
            "id": topic["id"],
            "grade": topic["grade"],
            "title": topic["title"],
            "strand": topic["strand"],
            "level": topic.get("level", "curriculum"),
            "prerequisites": [topic_titles.get(pr, pr) for pr in topic.get("prerequisiteTopicIds", [])],
            "prerequisiteTopicIds": topic.get("prerequisiteTopicIds", []),
            "nextTopicIds": topic.get("nextTopicIds", []),
            "concepts": topic_concept_ids,
            "sections": [
                {
                    "title": section["title"],
                    "body": section_body(section),
                }
                for section in data.get("theory", [])
            ],
            "formulas": [formula_latex(item) for item in data.get("formulas", []) if formula_latex(item)],
            "mistakes": [f"{m['title']} — {m.get('correction', '')}" for m in data.get("mistakes", [])],
            "examples": [
                {
                    "title": ex["title"],
                    "text": ex.get("problem") or ex.get("statement", ""),
                    "solution": solution_text(ex),
                    "answer": text_value(ex.get("answer", "")),
                }
                for ex in data.get("workedExamples", [])
            ],
            "exerciseIds": [ex.get("id") for ex in topic_exercises if isinstance(ex, dict) and ex.get("id")],
        }

        for ex in topic_exercises:
            if not isinstance(ex, dict):
                continue
            answer_value, accepted_answers, answer_tolerance, choices = answer_data(ex.get("answer"))
            concepts_for_exercise = ex.get("conceptIds") or ex.get("concepts") or []
            difficulty = exercise_difficulty(ex)
            ex_obj = {
                "id": ex.get("id", "missing-id"),
                "topicId": ex.get("topicId", topic["id"]),
                "type": ex.get("type", "numeric"),
                "level": ex.get("level", "curriculum"),
                "difficulty": difficulty,
                "statement": ex.get("statement", ""),
                "statementPreview": ex.get("statementPreview") or statement_preview(ex.get("statement", "")),
                "selectableTitle": ex.get("title") or ex.get("selectableTitle") or "",
                "answer": answer_value,
                "acceptedAnswers": accepted_answers,
                "answerTolerance": answer_tolerance,
                "choices": choices,
                "concepts": concepts_for_exercise,
                "mistakeTags": ex.get("mistakeTags") or ex.get("mistakes") or [],
                "hints": [hint["text"] for hint in ex.get("hints", []) if isinstance(hint, dict) and "text" in hint],
                "solution": exercise_solution(ex),
                "alternate": " ".join(text_value(method) for method in ex.get("alternateMethods", [])) or "",
                "estimatedSeconds": ex.get("estimatedSeconds", 60),
            }
            if ex.get("level") == "olympiad":
                ex_obj.update({
                    "olympiadTrack": ex.get("olympiadTrack"),
                    "olympiadTier": ex.get("olympiadTier") or difficulty,
                    "requiredPrerequisiteMastery": ex.get("requiredPrerequisiteMastery"),
                    "coreIdea": ex.get("coreIdea"),
                    "strategyTags": ex.get("strategyTags", []),
                    "prerequisiteTopicIds": ex.get("prerequisiteTopicIds", []),
                    "prerequisiteConceptIds": ex.get("prerequisiteConceptIds", []),
                    "expectedMethodIds": ex.get("expectedMethodIds", []),
                    "solutionMethods": ex.get("solutionMethods", []),
                    "commonTraps": ex.get("commonTraps", []),
                    "reflectionPrompts": ex.get("reflectionPrompts", []),
                    "extensionQuestions": ex.get("extensionQuestions", []),
                    "srsSeeds": ex.get("srsSeeds", []),
                    "hintsRaw": ex.get("hints", []),
                })
            exercises.append(ex_obj)
            exercises_by_grade[f"{topic['grade']:02d}"].append(ex_obj)

        actual_ids = {ex.get("id") for ex in topic_exercises if isinstance(ex, dict)}
        for test in data.get("tests", []):
            tests.append({
                "id": test["id"],
                "title": test["title"],
                "topicIds": test["topicIds"],
                "exerciseIds": [exercise_id for exercise_id in test.get("exerciseIds", []) if exercise_id in actual_ids],
                "masteryWeight": test.get("masteryWeight", 1.0),
            })

    curriculum = {int(grade): [title for _, title in sorted(items, key=lambda item: item[0])] for grade, items in sorted(topics_by_grade.items(), key=lambda item: int(item[0]))}
    goals = [
        "Noriu sustiprinti 9 klasės matematiką",
        "Ruošiuosi kontroliniui",
        "Ruošiuosi PUPP / VBE ateičiai",
        "Noriu olimpiadinio iššūkio",
        "Nežinau nuo ko pradėti",
    ]
    output = "\n".join([
        "export const curriculum = " + js(curriculum) + ";",
        "export const concepts = " + js(concepts) + ";",
        "export const topics = " + js(topics) + ";",
        "export const exercises = " + js(exercises) + ";",
        "export const tests = " + js(tests) + ";",
        "export const goals = " + js(goals) + ";",
        "export const achievements = " + js(achievements) + ";",
    ])
    OUT.write_text(output + "\n", encoding="utf-8")

    SPLIT_OUT.mkdir(parents=True, exist_ok=True)
    (SPLIT_OUT / "curriculum.generated.js").write_text(
        "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
        "export const curriculum = " + js(curriculum) + ";\n",
        encoding="utf-8",
    )
    (SPLIT_OUT / "concepts.generated.js").write_text(
        "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
        "export const concepts = " + js(concepts) + ";\n",
        encoding="utf-8",
    )
    (SPLIT_OUT / "topics.generated.js").write_text(
        "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
        "export const topics = " + js(topics) + ";\n",
        encoding="utf-8",
    )
    (SPLIT_OUT / "tests.generated.js").write_text(
        "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
        "export const tests = " + js(tests) + ";\n",
        encoding="utf-8",
    )
    (SPLIT_OUT / "goals.generated.js").write_text(
        "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
        "export const goals = " + js(goals) + ";\n",
        encoding="utf-8",
    )
    (SPLIT_OUT / "achievements.generated.js").write_text(
        "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
        "export const achievements = " + js(achievements) + ";\n",
        encoding="utf-8",
    )

    exercise_imports = []
    exercise_exports = []
    for grade in sorted(exercises_by_grade.keys(), key=int):
        name = f"exercises_{grade}"
        exercise_imports.append(f"import {{ {name} }} from './{name}.generated.js';")
        exercise_exports.append(f"...{name}")
        (SPLIT_OUT / f"{name}.generated.js").write_text(
            "// Generated split content chunk. Source: scripts/build_frontend_content.py\n"
            f"export const {name} = " + js(exercises_by_grade[grade]) + ";\n",
            encoding="utf-8",
        )
    (SPLIT_OUT / "exercises.generated.js").write_text(
        "\n".join(exercise_imports)
        + "\n\nexport const exercises = ["
        + ", ".join(exercise_exports)
        + "];\n",
        encoding="utf-8",
    )
    return f"Wrote {len(topics)} topics, {len(concepts)} concepts, {len(exercises)} exercises"


if __name__ == "__main__":
    print(render_content())
