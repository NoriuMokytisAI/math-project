import {
  curriculum as rawCurriculum
} from "./generated/curriculum.generated.js";
import {
  concepts as rawConcepts
} from "./generated/concepts.generated.js";
import {
  exercises as rawExercises
} from "./generated/exercises.generated.js";
import {
  tests as rawTests
} from "./generated/tests.generated.js";
import {
  goals as rawGoals
} from "./generated/goals.generated.js";
import {
  achievements as rawAchievements
} from "./generated/achievements.generated.js";
import {
  topics as rawTopics
} from "./generated/topics.generated.js";
import { Topic, Concept, Exercise, Test } from "./types";

export const curriculum: Record<string, string[]> = rawCurriculum;
export const concepts: Record<string, Concept> = rawConcepts as any;
export const exercises: Exercise[] = rawExercises as any;
export const tests: Test[] = rawTests as any;
export const goals: string[] = rawGoals;
export const achievements: Record<string, string> = rawAchievements;
export const topics: Record<string, Topic> = rawTopics as any;
