import { topics } from "./content";
import { GradeBand, PreparationType, Profile, StartMode, Topic } from "./types";

export const START_MODE_LABELS: Record<StartMode, string> = {
  olympiad: "Olimpiadinis stiprinimas",
  targeted: "Kontrolinis arba egzaminas",
  "full-course": "Pilnas kursas su diagnostika"
};

export const PREPARATION_LABELS: Record<PreparationType, string> = {
  control: "Kontrolinis",
  pupp: "PUPP",
  vbe: "VBE"
};

export const GRADE_BANDS: GradeBand[] = [
  { label: "5-6 klasės", value: "5-6", grades: [5, 6] },
  { label: "7-8 klasės", value: "7-8", grades: [7, 8] },
  { label: "9-10 klasės", value: "9-10", grades: [9, 10] },
  { label: "11 klasė", value: "11", grades: [11] },
  { label: "12 klasė", value: "12", grades: [12] }
];

export function bandForGrade(grade: number): string {
  return GRADE_BANDS.find((band) => band.grades.includes(grade))?.value || "9-10";
}

export function gradesForBand(value: string): number[] {
  return GRADE_BANDS.find((band) => band.value === value)?.grades || [9, 10];
}

export function formatGradeBand(value: string): string {
  return GRADE_BANDS.find((band) => band.value === value)?.label || "9-10 klasės";
}

export function topicsForBand(value: string): Topic[] {
  const gradeSet = new Set(gradesForBand(value));
  return Object.values(topics)
    .filter((topic) => gradeSet.has(topic.grade))
    .sort(sortTopics);
}

export function topicsForExam(type?: PreparationType): Topic[] {
  if (type === "pupp") return topicsForBand("9-10");
  if (type === "vbe") {
    return Object.values(topics)
      .filter((topic) => topic.grade === 11 || topic.grade === 12)
      .sort(sortTopics);
  }
  return Object.values(topics).sort(sortTopics);
}

export function firstTopicForBand(value: string): string {
  return topicsForBand(value)[0]?.id || Object.keys(topics)[0];
}

export function firstTopicForProfile(profile: Partial<Profile>): string {
  if (profile.targetTopicId && topics[profile.targetTopicId]) return profile.targetTopicId;
  if (profile.startMode === "targeted" && profile.preparationType) {
    return topicsForExam(profile.preparationType)[0]?.id || firstTopicForBand(profile.gradeBand || "9-10");
  }
  return firstTopicForBand(profile.gradeBand || "9-10");
}

export function inferStartMode(profile: Partial<Profile>): StartMode {
  if (profile.startMode) return profile.startMode;
  const goal = profile.goal || "";
  if (goal.includes("sustiprinti") || goal.includes("olimpiad")) return "olympiad";
  if (goal.includes("kontroliniui") || goal.includes("egzaminui") || goal.includes("PUPP") || goal.includes("VBE")) return "targeted";
  return "full-course";
}

export function defaultGradeBandForPreparation(type?: PreparationType): string {
  if (type === "pupp") return "9-10";
  if (type === "vbe") return "12";
  return "9-10";
}

export function sortTopics(a: Topic, b: Topic): number {
  return a.grade - b.grade || a.order - b.order || a.title.localeCompare(b.title, "lt");
}

