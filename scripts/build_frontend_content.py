from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GEN = ROOT / "content" / "generated"
OUT = ROOT / "frontend" / "src" / "content.generated.js"


def js(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def plain_block(block: dict) -> str:
    kind = block.get("type")
    if kind == "paragraph":
        return block["text"]
    if kind == "definition":
        return f"{block['text']}"
    if kind == "theorem":
        return f"Teorema. {block['text']}"
    if kind == "property":
        return f"Savybė. {block['text']}"
    if kind == "note":
        return f"Pastaba. {block['text']}"
    if kind == "warning":
        return f"Įspėjimas. {block['text']}"
    if kind == "method":
        return f"Metodas. {block['text']}"
    if kind == "formula":
        return f"Formulė: {block['latex']}"
    return block.get("text", "")


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
            concepts[fid] = {
                "title": item["title"],
                "type": item.get("type", "formula"),
                "definition": item["explanation"],
                "intuition": item["explanation"],
                "formal": item["latex"],
                "related": item.get("relatedConceptIds", []),
                "topics": [topic["id"]],
            }

        for item in data.get("mistakes", []):
            mid = item["id"]
            concepts[mid] = {
                "title": item["title"],
                "type": item.get("type", "mistake"),
                "definition": item["whyItHappens"],
                "intuition": item["wrongPattern"],
                "formal": item["correction"],
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
            "formulas": [item["latex"] for item in data.get("formulas", [])],
            "mistakes": [f"{m['title']} — {m['correction']}" for m in data.get("mistakes", [])],
            "examples": [
                {
                    "title": ex["title"],
                    "text": ex["problem"],
                    "solution": solution_text(ex),
                    "answer": ex["answer"],
                }
                for ex in data.get("workedExamples", [])
            ],
        }

        for ex in data.get("exercises", []):
            answer = ex["answer"]
            if answer["kind"] == "choice":
                choices = [choice["text"] for choice in answer["choices"]]
                correct = next((choice["text"] for choice in answer["choices"] if choice["id"] in answer["correctChoiceIds"]), answer["choices"][0]["text"])
                answer_value = correct
                accepted_answers = [correct]
            elif answer["kind"] == "numeric":
                answer_value = str(answer["value"])
                accepted_answers = [answer_value]
                answer_tolerance = answer.get("tolerance", 0)
                choices = []
            else:
                answer_value = answer["canonical"]
                accepted_answers = [answer["canonical"], *answer.get("acceptedEquivalentForms", [])]
                answer_tolerance = 0
                choices = []
            if answer["kind"] == "choice":
                answer_tolerance = 0
            ex_obj = {
                "id": ex["id"],
                "topicId": ex["topicId"],
                "type": ex["type"],
                "level": ex.get("level", "curriculum"),
                "statement": ex["statement"],
                "answer": answer_value,
                "acceptedAnswers": accepted_answers,
                "answerTolerance": answer_tolerance,
                "choices": choices,
                "concepts": ex.get("conceptIds", []),
                "hints": [hint["text"] for hint in ex.get("hints", [])],
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


        for test in data.get("tests", []):
            tests.append({
                "id": test["id"],
                "title": test["title"],
                "topicIds": test["topicIds"],
                "exerciseIds": test["exerciseIds"],
                "masteryWeight": test["masteryWeight"],
            })

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
    return f"Wrote {len(topics)} topics, {len(concepts)} concepts, {len(exercises)} exercises"


if __name__ == "__main__":
    print(render_content())
