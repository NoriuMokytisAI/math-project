from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content" / "generated"


def main() -> None:
    topic_files = sorted(CONTENT_DIR.glob("*/*.json"))
    topics = []
    topic_ids = set()
    exercise_ids = set()
    concept_ids = set()
    issues: list[str] = []

    for path in topic_files:
        data = json.loads(path.read_text(encoding="utf-8"))
        topic = data["topic"]
        topics.append((path, data))
        topic_ids.add(topic["id"])
        concept_ids.update(item["id"] for item in data.get("concepts", []))
        exercise_ids.update(item["id"] for item in data.get("exercises", []))

    for path, data in topics:
        topic = data["topic"]
        prefix = path.relative_to(ROOT).as_posix()
        for key in ("prerequisiteTopicIds", "nextTopicIds"):
            for topic_id in topic.get(key, []):
                if topic_id not in topic_ids:
                    issues.append(f"{prefix}: {key} references missing topic {topic_id}")
        if len(data.get("exercises", [])) < 20:
            issues.append(f"{prefix}: expected at least 20 exercises")
        if not data.get("tests"):
            issues.append(f"{prefix}: expected at least one test")
        for concept_id in topic.get("conceptIds", []):
            if concept_id not in concept_ids:
                issues.append(f"{prefix}: topic concept missing from glossary {concept_id}")
        for exercise in data.get("exercises", []):
            if exercise.get("topicId") != topic["id"]:
                issues.append(f"{prefix}: exercise {exercise['id']} has wrong topicId")
            if not str(exercise.get("answerText") or "").strip():
                issues.append(f"{prefix}: exercise {exercise['id']} has empty answerText")
            for concept_id in exercise.get("conceptIds", []):
                if concept_id not in concept_ids:
                    issues.append(f"{prefix}: exercise {exercise['id']} references missing concept {concept_id}")
        for test in data.get("tests", []):
            for exercise_id in test.get("exerciseIds", []):
                if exercise_id not in exercise_ids:
                    issues.append(f"{prefix}: test {test['id']} references missing exercise {exercise_id}")

    summary = {
        "topics": len(topic_files),
        "concepts": len(concept_ids),
        "exercises": len(exercise_ids),
        "issues": len(issues),
    }
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    if issues:
        for issue in issues:
            print(issue)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
