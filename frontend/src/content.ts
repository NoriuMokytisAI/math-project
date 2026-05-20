import {
  curriculum as rawCurriculum,
  concepts as rawConcepts,
  exercises as rawExercises,
  tests as rawTests,
  goals as rawGoals,
  achievements as rawAchievements,
  topics as rawTopics
} from "./content.generated.js";
import { Topic, Concept, Exercise, Test } from "./types";

export const curriculum: Record<string, string[]> = rawCurriculum;
export const concepts: Record<string, Concept> = rawConcepts as any;
export const exercises: Exercise[] = rawExercises as any;
export const tests: Test[] = rawTests as any;
export const goals: string[] = rawGoals;
export const achievements: Record<string, string> = rawAchievements;
export const topics: Record<string, Topic> = rawTopics as any;
