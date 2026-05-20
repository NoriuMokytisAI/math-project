import { concepts, exercises, topics } from "./content";
import { DiagnosticAttribute, DiagnosticItem, DiagnosticModule, Exercise, Topic } from "./types";

const STAGES = ["5-6", "7-8", "9-10", "11", "12"] as const;
const STRANDS = [
  "Skaičiai ir skaičiavimai",
  "Modeliai ir sąryšiai",
  "Geometrija ir matavimai",
  "Duomenys ir tikimybės"
];

const stageForGrade = (grade: number): DiagnosticAttribute["stage"] => {
  if (grade <= 6) return "5-6";
  if (grade <= 8) return "7-8";
  if (grade <= 10) return "9-10";
  if (grade === 11) return "11";
  return "12";
};

const normalizeStrand = (strand: string): string => {
  if (strand === "Duomenys ir tikimybė") return "Duomenys ir tikimybės";
  return strand || "Modeliai ir sąryšiai";
};

const slug = (value: string): string => {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

const topicAttributeId = (topicId: string) => `topic-${topicId}`;
const conceptAttributeId = (conceptId: string) => `concept-${conceptId}`;

function topicPrerequisiteAttributes(topic: Topic): string[] {
  const rawPrerequisites = [
    ...((topic as any).prerequisiteTopicIds || []).map((id: string) => topicAttributeId(id)),
    ...(topic.prerequisites || []).map((id: string) => {
      if (topics[id]) return topicAttributeId(id);
      if (concepts[id]) return conceptAttributeId(id);
      return "";
    })
  ];
  return [...new Set(rawPrerequisites.filter(Boolean))];
}

function createAttributes(): Record<string, DiagnosticAttribute> {
  const attributes: Record<string, DiagnosticAttribute> = {};

  for (const topic of Object.values(topics)) {
    const stage = stageForGrade(topic.grade);
    const topicAttrId = topicAttributeId(topic.id);
    attributes[topicAttrId] = {
      id: topicAttrId,
      title: topic.title,
      description: `Gebėjimas dirbti su tema „${topic.title}“ pagal Bendrąją programą.`,
      strand: normalizeStrand(topic.strand),
      stage,
      prerequisiteAttributeIds: topicPrerequisiteAttributes(topic),
      relatedConceptIds: topic.concepts || [],
      relatedTopicIds: [topic.id]
    };

    for (const conceptId of topic.concepts || []) {
      const concept = concepts[conceptId];
      if (!concept) continue;
      const id = conceptAttributeId(conceptId);
      const existing = attributes[id];
      attributes[id] = {
        id,
        title: concept.title,
        description: concept.definition || `Sąvoka naudojama temoje „${topic.title}“.`,
        strand: existing?.strand || normalizeStrand(topic.strand),
        stage: existing?.stage || stage,
        prerequisiteAttributeIds: [...new Set([...(existing?.prerequisiteAttributeIds || []), ...topicPrerequisiteAttributes(topic)])],
        relatedConceptIds: [...new Set([...(existing?.relatedConceptIds || []), conceptId])],
        relatedTopicIds: [...new Set([...(existing?.relatedTopicIds || []), topic.id])]
      };
    }
  }

  return attributes;
}

export const diagnosticAttributes: Record<string, DiagnosticAttribute> = createAttributes();

function requiredAttributesForExercise(exercise: Exercise): string[] {
  const topic = topics[exercise.topicId];
  const conceptIds = (exercise.concepts || []).filter((id) => diagnosticAttributes[conceptAttributeId(id)]);
  const conceptAttributeIds = conceptIds.map(conceptAttributeId);
  const topicAttr = topic && diagnosticAttributes[topicAttributeId(topic.id)] ? [topicAttributeId(topic.id)] : [];
  const required = [...conceptAttributeIds, ...topicAttr].slice(0, 4);
  return required.length ? required : topicAttr;
}

function answerTypeForExercise(exercise: Exercise): DiagnosticItem["answerType"] {
  if (Array.isArray(exercise.choices) && exercise.choices.length > 0) return "multipleChoice";
  if (/interval|sritis|x\s*[∈]|x\s*\\in/i.test(exercise.statement)) return "interval";
  if (/[a-z]\^|\^2|sqrt|\\sqrt|[a-z][=+\-*]/i.test(exercise.answer)) return "expression";
  if (Number.isFinite(Number(String(exercise.answer).replace(",", ".")))) return "numeric";
  return "expression";
}

function representationForExercise(exercise: Exercise): DiagnosticItem["representation"] {
  const text = `${exercise.statement} ${exercise.solution}`.toLowerCase();
  if (text.includes("graf") || text.includes("koordina")) return "graph";
  if (text.includes("lentel")) return "table";
  if (/[a-z]\^|\^2|\\sqrt|sqrt|=/.test(text)) return "symbolic";
  if (/\d/.test(text)) return "numeric";
  return "verbal";
}

function difficultyForExercise(exercise: Exercise): DiagnosticItem["difficulty"] {
  const raw = String((exercise as any).difficulty || (exercise as any).level || "").toLowerCase();
  if (raw.includes("olympiad") || raw.includes("olimpiad") || raw.includes("hard") || raw.includes("sunku")) return 5;
  if (raw.includes("medium") || raw.includes("vidut")) return 3;
  const topic = topics[exercise.topicId];
  if ((topic?.grade || 0) >= 11) return 4;
  if ((topic?.grade || 0) >= 9) return 3;
  return 2;
}

function moduleIdForExercise(exercise: Exercise): string {
  const topic = topics[exercise.topicId];
  const stage = stageForGrade(topic?.grade || 9);
  const strand = slug(normalizeStrand(topic?.strand || ""));
  return `diag-${stage}-${strand}`;
}

function createDiagnosticItems(): DiagnosticItem[] {
  const items: DiagnosticItem[] = [];
  for (const exercise of exercises) {
      const diagnosticExercise = normalizeExerciseForDiagnostic(exercise);
      if (!diagnosticExercise) continue;
      const requiredAttributeIds = requiredAttributesForExercise(exercise);
      if (!requiredAttributeIds.length) continue;
      const difficulty = difficultyForExercise(exercise);
      items.push({
        id: `diag-${exercise.id}`,
        moduleId: moduleIdForExercise(exercise),
        sourceExerciseId: exercise.id,
        topicId: exercise.topicId,
        prompt: diagnosticExercise.prompt,
        answerType: diagnosticExercise.choices?.length ? "multipleChoice" : answerTypeForExercise(exercise),
        answer: diagnosticExercise.answer,
        acceptedAnswers: diagnosticExercise.acceptedAnswers,
        choices: diagnosticExercise.choices,
        requiredAttributeIds,
        misconceptionAttributeIds: (exercise as any).mistakes || [],
        difficulty,
        representation: representationForExercise(exercise),
        slip: Math.min(0.25, 0.10 + difficulty * 0.025),
        guess: Array.isArray(exercise.choices) && exercise.choices.length > 0 ? Math.max(0.15, 1 / exercise.choices.length) : 0.18,
        estimatedSeconds: exercise.estimatedSeconds || Math.max(45, 35 + difficulty * 25)
      });
  }
  return items.sort((a, b) => {
      const topicA = topics[a.topicId];
      const topicB = topics[b.topicId];
      return (topicA?.grade || 0) - (topicB?.grade || 0)
        || normalizeStrand(topicA?.strand || "").localeCompare(normalizeStrand(topicB?.strand || ""))
        || a.difficulty - b.difficulty
        || a.id.localeCompare(b.id);
    });
}

function normalizeExerciseForDiagnostic(exercise: Exercise): {
  prompt: string;
  answer: string;
  acceptedAnswers?: string[];
  choices?: string[];
} | null {
  const plain = removeLithuanianMarks(exercise.statement).toLowerCase();
  if (plain.includes("papildomas uzdavinys nr.")) return null;

  const answer = String(exercise.answer);
  const acceptedAnswers = Array.isArray((exercise as any).acceptedAnswers) && (exercise as any).acceptedAnswers.length
    ? (exercise as any).acceptedAnswers.map(String)
    : [answer];
  const choices = Array.isArray(exercise.choices) && exercise.choices.length ? exercise.choices.map(String) : undefined;

  const divisibilityMatch = exercise.statement.match(/^Kuris skaičius dalijasi iš (\d+) ir \d+\?$/);
  if (divisibilityMatch) {
    return {
      prompt: `Kuris pateiktas skaičius dalijasi iš ${divisibilityMatch[1]} be liekanos?`,
      answer,
      acceptedAnswers,
      choices
    };
  }

  if (plain.includes("kurios sklaida didesne?") && answer === "2") {
    return {
      prompt: exercise.statement.replace("Kurios sklaida didesnė?", "Kurios duomenų aibės sklaida didesnė? Įrašyk A arba B."),
      answer: "B",
      acceptedAnswers: ["B", "b"],
      choices: ["A", "B"]
    };
  }

  const sequenceMatch = exercise.statement.match(/^Jei a_n=2n-1, rask a_(\d+)\.$/);
  if (sequenceMatch) {
    const n = Number(sequenceMatch[1]);
    const correctedAnswer = String(2 * n - 1);
    return {
      prompt: exercise.statement,
      answer: correctedAnswer,
      acceptedAnswers: [correctedAnswer],
      choices
    };
  }

  return {
    prompt: exercise.statement,
    answer,
    acceptedAnswers,
    choices
  };
}

function removeLithuanianMarks(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ąčęėįšųūž]/g, (char) => ({
      "ą": "a",
      "č": "c",
      "ę": "e",
      "ė": "e",
      "į": "i",
      "š": "s",
      "ų": "u",
      "ū": "u",
      "ž": "z"
    }[char] || char));
}

export const diagnosticItems: DiagnosticItem[] = createDiagnosticItems();

function createModules(): DiagnosticModule[] {
  const modules: DiagnosticModule[] = [];
  for (const stage of STAGES) {
    for (const strand of STRANDS) {
      const id = `diag-${stage}-${slug(strand)}`;
      const items = diagnosticItems.filter((item) => item.moduleId === id);
      if (!items.length) continue;
      const targetAttributeIds = [...new Set(items.flatMap((item) => item.requiredAttributeIds))];
      modules.push({
        id,
        title: `${stage} · ${strand}`,
        description: `Diagnostika tikrina srities „${strand}“ gebėjimus ${stage} programos pakopoje.`,
        strand,
        stageCoverage: [stage],
        targetAttributeIds,
        minItems: Math.min(18, items.length),
        maxItems: Math.min(45, Math.max(18, items.length)),
        stopWhenConfidenceReached: true
      });
    }
  }
  return modules;
}

export const diagnosticModules: DiagnosticModule[] = createModules();
