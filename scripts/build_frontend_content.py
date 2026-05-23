from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GEN = ROOT / "content" / "generated"
OUT = ROOT / "frontend" / "src" / "content.generated.js"
SPLIT_OUT = ROOT / "frontend" / "src" / "generated"


def js(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def plain_block(block: dict) -> str:
    kind = block.get("type")
    text = block.get("text", "")
    if kind == "paragraph":
        return text
    if kind == "definition":
        return f"{text}"
    if kind == "theorem":
        return f"Teorema. {text}"
    if kind == "property":
        return f"Savybė. {text}"
    if kind == "note":
        return f"Pastaba. {text}"
    if kind == "warning":
        return f"Įspėjimas. {text}"
    if kind == "method":
        return f"Metodas. {text}"
    if kind == "formula":
        return f"Formulė: {block.get('latex', '')}"
    return text


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
    return " ".join(steps)


def render_content() -> str:
    topics_files = sorted(GEN.glob("*/*.json"))
    topics_by_grade = defaultdict(list)
    topic_titles = {}
    concepts = {}
    topics = {}
    exercises = []
    exercises_by_grade = defaultdict(list)
    tests = []
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
        topics_by_grade[str(topic["grade"])].append((topic["order"], topic["title"]))

        topic_concept_ids = []
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
            explanation = item.get("explanation", item.get("title", ""))
            concepts[fid] = {
                "title": item["title"],
                "type": item.get("type", "formula"),
                "definition": explanation,
                "intuition": explanation,
                "formal": item.get("latex", ""),
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
                    "body": [plain_block(block) for block in section.get("blocks", [])],
                }
                for section in data.get("theory", [])
            ],
            "formulas": [item.get("latex", "") for item in data.get("formulas", [])],
            "mistakes": [f"{m['title']} — {m.get('correction', '')}" for m in data.get("mistakes", [])],
            "examples": [
                {
                    "title": ex["title"],
                    "text": ex.get("problem") or ex.get("statement", ""),
                    "solution": solution_text(ex) or ex.get("solution", ""),
                    "answer": ex.get("answer", ""),
                }
                for ex in data.get("workedExamples", [])
            ],
        }

        for ex in data.get("exercises", []):
            if not isinstance(ex, dict): continue
            answer = ex.get("answer")
            if not isinstance(answer, dict):
                answer = {"kind": "numeric", "value": 0}
            
            if answer.get("kind") == "choice":
                choices = [choice["text"] for choice in answer["choices"]]
                correct = next((choice["text"] for choice in answer["choices"] if choice["id"] in answer["correctChoiceIds"]), answer["choices"][0]["text"])
                answer_value = correct
                accepted_answers = [correct]
            elif answer["kind"] == "numeric":
                answer_value = str(answer["value"])
                accepted_answers = [answer_value]
                answer_tolerance = answer.get("tolerance", 0)
                choices = []
            elif answer["kind"] == "structuredReasoning":
                answer_value = answer.get("expectedConclusion", "")
                accepted_answers = [answer_value]
                answer_tolerance = 0
                choices = []
            else:
                answer_value = answer["canonical"]
                accepted_answers = [answer["canonical"], *answer.get("acceptedEquivalentForms", [])]
                answer_tolerance = 0
                choices = []
            if answer["kind"] == "choice":
                answer_tolerance = 0
            ex_obj = {
                "id": ex.get("id", "missing-id"),
                "topicId": ex.get("topicId", topic["id"]),
                "type": ex.get("type", "numeric"),
                "level": ex.get("level", "curriculum"),
                "statement": ex.get("statement", ""),
                "answer": answer_value,
                "acceptedAnswers": accepted_answers,
                "answerTolerance": answer_tolerance,
                "choices": choices,
                "concepts": ex.get("conceptIds", []),
                "hints": [hint["text"] for hint in ex.get("hints", []) if "text" in hint],
                "solution": " ".join(step.get("text", "") for step in ex.get("solutionSteps", [])),
                "alternate": " ".join(method.get("text", "") for method in ex.get("alternateMethods", [])) or "",
                "estimatedSeconds": ex.get("estimatedSeconds", 60),
            }
            if ex.get("level") == "olympiad":
                ex_obj.update({
                    "olympiadTrack": ex.get("olympiadTrack"),
                    "olympiadTier": ex.get("olympiadTier"),
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


        for test in data.get("tests", []):
            tests.append({
                "id": test["id"],
                "title": test["title"],
                "topicIds": test["topicIds"],
                "exerciseIds": test["exerciseIds"],
                "masteryWeight": test.get("masteryWeight", 1.0),
            })

    achievements = {
        "onboarded": "Pirmas žingsnis",
        "firstTheory": "Teorijos startas",
        "firstSrs": "Atminties ratas",
        "firstExercise": "Pirmas išspręstas",
        "noHints": "Be užuominų",
        "topicMastered": "Tema įveikta",
        "testAced": "Testas be panikos",
    }
    goals = [
        "Noriu sustiprinti 9 klasės matematiką",
        "Ruošiuosi kontroliniui",
        "Ruošiuosi PUPP / VBE ateičiai",
        "Noriu olimpiadinio iššūkio",
        "Nežinau nuo ko pradėti",
    ]
    curriculum = {int(grade): [title for _, title in sorted(items, key=lambda item: item[0])] for grade, items in sorted(topics_by_grade.items(), key=lambda item: int(item[0]))}
    output = "\n".join([
        "export const curriculum = " + js(curriculum) + ";",
        "export const concepts = " + js(concepts) + ";",
        "export const topics = " + js(topics) + ";",
        "export const exercises = " + js(exercises) + ";",
        "export const tests = " + js(tests) + ";",
        "export const goals = " + js([
            "Noriu sustiprinti 9 klasės matematiką",
            "Ruošiuosi kontroliniui",
            "Ruošiuosi PUPP / VBE ateičiai",
            "Noriu olimpiadinio iššūkio",
            "Nežinau nuo ko pradėti",
        ]) + ";",
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
    goals = [
        "Noriu sustiprinti 9 klasės matematiką",
        "Ruošiuosi kontroliniui",
        "Ruošiuosi PUPP / VBE ateičiai",
        "Noriu olimpiadinio iššūkio",
        "Nežinau nuo ko pradėti",
    ]
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
