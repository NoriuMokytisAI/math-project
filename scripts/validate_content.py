from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any


if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content" / "generated"
BACKUP_SUFFIXES = (".bak", ".tmp", ".old")


def text_value(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, str):
        return value
    if isinstance(value, (int, float, bool)):
        return str(value)
    if isinstance(value, list):
        return " ".join(text_value(item) for item in value)
    if isinstance(value, dict):
        parts = []
        for key in ("text", "content", "latex", "equation", "description", "conceptualContext", "solution", "answerText"):
            if value.get(key):
                parts.append(text_value(value[key]))
        for key in ("items", "rows", "steps"):
            if value.get(key):
                parts.append(text_value(value[key]))
        return " ".join(parts)
    return str(value)


def theory_words(data: dict) -> int:
    chunks = []
    for section in data.get("theory", []):
        chunks.append(text_value(section.get("content")))
        chunks.extend(text_value(block) for block in section.get("blocks", []))
    return len(re.findall(r"\S+", " ".join(chunks)))


def answer_valid(answer: Any) -> bool:
    if isinstance(answer, str) and answer.strip():
        return True
    if not isinstance(answer, dict):
        return False
    kind = answer.get("kind")
    if kind == "choice":
        return bool(answer.get("choices")) and bool(answer.get("correctChoiceIds"))
    if kind == "numeric":
        return "value" in answer
    if kind == "expression":
        return bool(answer.get("canonical"))
    if kind == "structuredReasoning":
        return bool(answer.get("expectedConclusion") or answer.get("canonical"))
    return bool(answer.get("canonical") or answer.get("value") or answer.get("expectedConclusion"))


def exercise_has_solution(exercise: dict) -> bool:
    if exercise.get("solutionSteps"):
        return True
    if str(exercise.get("solution") or exercise.get("fullSolution") or exercise.get("answerText") or "").strip():
        return True
    return any(text_value(method.get("steps", "")).strip() for method in exercise.get("solutionMethods", []) if isinstance(method, dict))


def main() -> None:
    backup_files = [
        path.relative_to(ROOT).as_posix()
        for path in CONTENT_DIR.rglob("*")
        if path.is_file() and path.name.endswith(BACKUP_SUFFIXES)
    ]
    topic_files = sorted(path for path in CONTENT_DIR.glob("*/*.json") if path.name != "manifest.json")
    topics = []
    topic_ids = set()
    exercise_ids = set()
    concept_ids = set()
    issues: list[str] = []
    warnings: list[str] = []

    for backup_file in backup_files:
        issues.append(f"{backup_file}: backup/temporary file must not be tracked in content")

    for path in topic_files:
        data = json.loads(path.read_text(encoding="utf-8"))
        topic = data["topic"]
        topics.append((path, data))
        if topic["id"] in topic_ids:
            issues.append(f"{path.relative_to(ROOT).as_posix()}: duplicate topic id {topic['id']}")
        topic_ids.add(topic["id"])
        for item in data.get("concepts", []):
            concept_ids.add(item["id"])
        for item in data.get("formulas", []):
            concept_ids.add(item["id"])
        for item in data.get("mistakes", []):
            concept_ids.add(item["id"])
        for item in data.get("exercises", []):
            if item.get("id") in exercise_ids:
                issues.append(f"{path.relative_to(ROOT).as_posix()}: duplicate exercise id {item.get('id')}")
            exercise_ids.add(item.get("id"))

    for path, data in topics:
        topic = data["topic"]
        prefix = path.relative_to(ROOT).as_posix()
        exercises = data.get("exercises", [])
        actual_exercise_ids = {exercise.get("id") for exercise in exercises}
        listed_exercise_ids = set(topic.get("exerciseIds", []))

        for key in ("prerequisiteTopicIds", "nextTopicIds"):
            for topic_id in topic.get(key, []):
                if topic_id not in topic_ids:
                    issues.append(f"{prefix}: {key} references missing topic {topic_id}")

        missing_listed = listed_exercise_ids - actual_exercise_ids
        extra_actual = actual_exercise_ids - listed_exercise_ids
        if missing_listed:
            issues.append(f"{prefix}: topic.exerciseIds references missing exercises: {sorted(missing_listed)[:8]}")
        if extra_actual:
            issues.append(f"{prefix}: exercises[] contains ids not listed in topic.exerciseIds: {sorted(extra_actual)[:8]}")

        words = theory_words(data)
        if exercises and words == 0:
            issues.append(f"{prefix}: topic has exercises but no displayable theory")
        if topic.get("level") == "curriculum" and words < 800:
            warnings.append(f"{prefix}: curriculum theory below mature target ({words}/800 words)")
        if topic.get("level") == "olympiad" and words < 1000:
            warnings.append(f"{prefix}: olympiad theory below mature target ({words}/1000 words)")
        if len(data.get("theory", [])) < 4 and topic.get("level") != "overview":
            warnings.append(f"{prefix}: fewer than 4 theory sections")
        if topic.get("level") == "olympiad" and not data.get("workedExamples"):
            warnings.append(f"{prefix}: olympiad topic has no worked examples")

        for concept_id in topic.get("conceptIds", []):
            if concept_id not in concept_ids:
                issues.append(f"{prefix}: topic concept missing from glossary {concept_id}")

        tracks = {exercise.get("olympiadTrack") for exercise in exercises if exercise.get("olympiadTrack")}
        if topic.get("level") == "olympiad" and len(tracks) > 1 and "strategijos" not in topic["id"]:
            issues.append(f"{prefix}: olympiad topic contains multiple tracks: {sorted(tracks)}")

        for exercise in exercises:
            exercise_id = exercise.get("id", "<missing-id>")
            if exercise.get("topicId") != topic["id"]:
                issues.append(f"{prefix}: exercise {exercise_id} has wrong topicId")
            if not answer_valid(exercise.get("answer")):
                issues.append(f"{prefix}: exercise {exercise_id} has invalid answer object")
            if not exercise_has_solution(exercise):
                issues.append(f"{prefix}: exercise {exercise_id} has no displayable solution")
            if not (exercise.get("difficulty") or exercise.get("level") or exercise.get("olympiadTier")):
                issues.append(f"{prefix}: exercise {exercise_id} has no difficulty/tier metadata")
            if not (exercise.get("conceptIds") or exercise.get("concepts")):
                warnings.append(f"{prefix}: exercise {exercise_id} has no concept tags")
            for concept_id in exercise.get("conceptIds", []):
                if concept_id not in concept_ids:
                    issues.append(f"{prefix}: exercise {exercise_id} references missing concept {concept_id}")

        for test in data.get("tests", []):
            for exercise_id in test.get("exerciseIds", []):
                if exercise_id not in actual_exercise_ids:
                    issues.append(f"{prefix}: test {test['id']} references missing exercise {exercise_id}")

    summary = {
        "topics": len(topic_files),
        "concepts": len(concept_ids),
        "exercises": len(exercise_ids),
        "issues": len(issues),
        "warnings": len(warnings),
    }
    print(json.dumps(summary, ensure_ascii=False, indent=2))
    for warning in warnings[:120]:
        print(f"WARNING: {warning}")
    if len(warnings) > 120:
        print(f"WARNING: ... {len(warnings) - 120} more warnings omitted")
    if issues:
        for issue in issues:
            print(issue)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
