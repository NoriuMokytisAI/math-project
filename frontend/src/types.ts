export type StartMode = 'olympiad' | 'targeted' | 'full-course';
export type PreparationType = 'control' | 'pupp' | 'vbe';
export type TargetedStartChoice = 'diagnostic' | 'topic';

export interface Profile {
  onboarded: boolean;
  goal: string;
  startMode?: StartMode;
  preparationType?: PreparationType;
  targetedStartChoice?: TargetedStartChoice;
  targetTopicId?: string;
  relevantTopicIds: string[];
  grade: number;
  gradeBand: string;
  confidence: string;
  dailyMinutes: number;
  olympiad: boolean;
  diagnostic: boolean;
  libraryToggle?: 'school' | 'olympiad';
}

export type DiagnosticStatus = 'not_started' | 'in_progress' | 'paused' | 'complete';
export type DiagnosticConfidence = 'unknown' | 'low' | 'medium' | 'high';
export type DiagnosticAnswerConfidence = 'guessed' | 'unsure' | 'confident';

export interface AttributeDiagnosis {
  attributeId: string;
  pMastery: number;
  evidenceCount: number;
  correctEvidence: number;
  incorrectEvidence: number;
  lastUpdatedAt: number;
  confidence: DiagnosticConfidence;
}

export interface DiagnosticResponse {
  itemId: string;
  value: string;
  correct: boolean;
  seconds: number;
  confidence: DiagnosticAnswerConfidence;
  createdAt: number;
}

export interface DiagnosticModuleSummary {
  moduleId: string;
  answered: number;
  correct: number;
  skipped: number;
  status: 'locked' | 'active' | 'complete';
  confidence: DiagnosticConfidence;
}

export interface LearningPathNode {
  id: string;
  kind: 'attribute' | 'concept' | 'topic' | 'practice_set' | 'test';
  targetId: string;
  title: string;
  reason: string;
  priority: number;
  unlocks: string[];
  status: 'locked' | 'recommended' | 'active' | 'complete';
}

export interface DiagnosticState {
  version: number;
  status: DiagnosticStatus;
  startedAt?: number;
  completedAt?: number;
  currentModuleId?: string;
  answeredItemIds: string[];
  skippedItemIds: string[];
  responses: DiagnosticResponse[];
  attributeDiagnoses: Record<string, AttributeDiagnosis>;
  moduleSummaries: Record<string, DiagnosticModuleSummary>;
  recommendedLearningPath: LearningPathNode[];
}

export interface SrsSettings {
  startingEaseFactor: number;
  minimumEaseFactor: number;
  intervalModifier: number;
  easePenaltyOnAgain: number;
  learningStepsMinutes: number[];
  graduatingIntervalDays: number;
  maximumIntervalDays: number;
  dailyNewLimit: number;
  dailyReviewLimit: number;
  enabledCardTypes: Record<string, boolean>;
}

export interface Preferences {
  srs: SrsSettings;
}

export interface SrsCard {
  id: string;
  deck: string;
  sourceId: string;
  topicId: string;
  cardType: string;
  front: string;
  back: string;
  queue: string;
  due: number;
  dueAt: string;
  intervalDays: number;
  easeFactor: number;
  learningStepIndex: number;
  repetitions: number;
  lapses: number;
  createdAt: string;
  firstEngagedAt: string;
  lastEngagedAt: string;
  enabled: boolean;
}

export interface Attempt {
  id: string;
  exerciseId: string;
  topicId: string;
  correct: boolean;
  seconds: number;
  hintsUsed: number;
  attempts: number;
  score: number;
  createdAt: number;
  revealed?: boolean;
}

export interface TestAttempt {
  id: string;
  testId: string;
  topicIds: string[];
  exerciseIds: string[];
  correct: number;
  total: number;
  score: number;
  createdAt: number;
}

export interface TopicMastery {
  value: number;
  solved: number;
  total: number;
  attempts: number;
  tests: number;
  label: string;
  olympiadValue?: number;
  olympiadSolved?: number;
  olympiadTotal?: number;
}

export interface State {
  version: number;
  contentVersion: string;
  profile: Profile;
  activeTopicId: string;
  diagnosticState: DiagnosticState;
  srsCards: SrsCard[];
  attempts: Attempt[];
  testAttempts?: TestAttempt[];
  mastery: Record<string, TopicMastery>;
  achievements: string[];
  preferences?: Preferences;
  updatedAt?: number;
}

// Content types
export interface Concept {
  title: string;
  type: 'concept' | 'method' | 'formula';
  definition: string;
  intuition: string;
  formal: string;
  related?: string[];
  topics?: string[];
}

export interface WorkedExample {
  statement: string;
  solution: string[];
}

export interface Topic {
  id: string;
  title: string;
  grade: number;
  strand: string;
  level?: string;
  order: number;
  prerequisites: string[];
  nextTopicIds?: string[];
  concepts: string[];
  formulas: string[];
  mistakes: string[];
  exerciseIds?: string[];
  sections: Array<{
    title: string;
    body: string[];
  }>;
  examples: Array<{
    title: string;
    text: string;
    solution: string;
    answer: string;
  }>;
}

export interface Exercise {
  id: string;
  topicId: string;
  strand: string;
  level?: string;
  grade: number;
  type?: string;
  difficulty?: string;
  statementPreview?: string;
  selectableTitle?: string;
  mistakeTags?: string[];
  statement: string;
  estimatedSeconds?: number;
  hints: string[];
  solution: string;
  choices?: string[]; // Multiple choice options
  answer: string; // Correct answer value
  concepts?: string[];
  olympiadTrack?: string;
  olympiadTier?: 'introductory' | 'standard' | 'advanced' | 'selection';
  requiredPrerequisiteMastery?: number;
  coreIdea?: { title: string; text: string };
  strategyTags?: string[];
  prerequisiteTopicIds?: string[];
  prerequisiteConceptIds?: string[];
  expectedMethodIds?: string[];
  solutionMethods?: Array<{
    id: string;
    title: string;
    methodType: string;
    strategyTags?: string[];
    steps: Array<{
      title: string;
      action: string;
      reason: string;
      latex?: string;
      result: string;
    }>;
    finalAnswer: string;
  }>;
  commonTraps?: Array<{
    id: string;
    title: string;
    wrongMove: string;
    whyTempting: string;
    correction: string;
    reviewConceptIds: string[];
    srsRecommended: boolean;
  }>;
  reflectionPrompts?: string[];
  extensionQuestions?: Array<{
    prompt: string;
    expectedIdea: string;
    difficulty: string;
  }>;
  srsSeeds?: Array<{
    id: string;
    deck: string;
    cardType: string;
    front: string;
    back: string;
    conceptIds: string[];
    methodIds?: string[];
    mistakeIds?: string[];
    defaultEnabled: boolean;
  }>;
  hintsRaw?: Array<{
    order: number;
    kind?: string;
    text: string;
    revealsConceptIds?: string[];
    penalty?: number;
  }>;
}


export interface Test {
  id: string;
  title: string;
  topicIds: string[];
  exerciseIds: string[];
}

export interface GradeBand {
  label: string;
  value: string;
  grades: number[];
}

export interface DiagnosticAttribute {
  id: string;
  title: string;
  description: string;
  strand: string;
  level?: string;
  stage: '5-6' | '7-8' | '9-10' | '11' | '12' | 'olympiad';
  prerequisiteAttributeIds: string[];
  relatedConceptIds: string[];
  relatedTopicIds: string[];
}

export interface DiagnosticItem {
  id: string;
  moduleId: string;
  sourceExerciseId?: string;
  topicId: string;
  prompt: string;
  answerType: 'multipleChoice' | 'numeric' | 'expression' | 'interval' | 'graph' | 'matching';
  answer: string;
  acceptedAnswers?: string[];
  choices?: string[];
  requiredAttributeIds: string[];
  misconceptionAttributeIds?: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  representation: 'symbolic' | 'numeric' | 'graph' | 'table' | 'verbal' | 'mixed';
  slip: number;
  guess: number;
  estimatedSeconds: number;
}

export interface DiagnosticModule {
  id: string;
  title: string;
  description: string;
  strand?: string;
  stageCoverage: string[];
  targetAttributeIds: string[];
  minItems: number;
  maxItems: number;
  stopWhenConfidenceReached: boolean;
}
