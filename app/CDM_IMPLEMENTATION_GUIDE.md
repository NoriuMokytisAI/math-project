# Cognitive Diagnosis Model Implementation Guide

## Purpose

The app must not rely on the student choosing a grade and a topic as the main starting point. The long-term root of the app should be a deep diagnostic assessment that estimates what the student knows, what they are missing, and what they should learn next.

This guide defines the implementation target for that diagnostic engine.

The diagnostic should be extensive. A full initial diagnostic may take multiple hours and may be completed across several sessions. It replaces:

- grade selection as the main placement mechanism,
- "what topic do you want to learn" as the main planning mechanism,
- shallow onboarding quizzes,
- manual starting-topic choice.

The student may still choose a goal, such as exam preparation or general strengthening, but the app should decide the learning plan from evidence.

## Model Choice

### Production Recommendation

Implement a cognitive diagnosis system based on:

1. expert-defined knowledge components,
2. a Q-matrix mapping every diagnostic item to required skills,
3. a simple DINA-style inference engine first,
4. an extensible model interface so G-DINA or other models can be adopted later.

DINA is the right first model because it is interpretable, light enough to run fully offline, and well suited to prerequisite-heavy mathematics where an item often requires all listed skills. G-DINA should be treated as the later research-grade extension because it can model more flexible interactions between skills, but it is heavier and needs more calibration data.

### Why CDM

Cognitive diagnosis models estimate mastery of fine-grained latent attributes, not only a total score. In math, those attributes should be things like:

- adding fractions with unlike denominators,
- recognizing linear function rate of change,
- solving a quadratic equation by factoring,
- applying Pythagorean theorem,
- interpreting frequency tables,
- using exponent rules,
- distinguishing domain and range.

The output is not "student is grade 9." The output is:

```txt
Student likely knows:
- linear equation solving
- coordinate plane reading
- simple function value substitution

Student likely lacks:
- function domain/range vocabulary
- interval notation
- quadratic expression factoring
- interpreting graphs of nonlinear functions

Recommended path:
1. Review interval notation.
2. Learn function domain and range.
3. Practice function properties from graphs.
4. Then start quadratic function prerequisites.
```

## Core Concepts

### Attribute

An attribute is a skill, concept, misconception absence, or method that can be diagnosed.

Attributes must be smaller than topics. A topic can depend on many attributes.

Example:

```json
{
  "id": "alg-factoring-common-factor",
  "title": "Bendrojo daugiklio iškėlimas",
  "strand": "Modeliai ir sąryšiai",
  "level": "curriculum",
  "prerequisiteAttributeIds": [
    "alg-like-terms",
    "num-integer-multiplication"
  ]
}
```

### Q-Matrix

The Q-matrix defines which attributes are required by each diagnostic item.

Example:

```json
{
  "itemId": "diag-funkcija-domain-graph-001",
  "requiredAttributeIds": [
    "func-coordinate-plane",
    "func-domain-from-graph",
    "int-interval-notation"
  ]
}
```

If the Q-matrix is wrong, the diagnosis will be wrong. Q-matrix authoring and validation must be treated as content work, not as a small implementation detail.

### Slip and Guess

For DINA-style inference:

- `slip`: probability that a student who has all required attributes still answers incorrectly.
- `guess`: probability that a student who lacks at least one required attribute still answers correctly.

Defaults for uncalibrated items:

```json
{
  "slip": 0.15,
  "guess": 0.20
}
```

These values should later be calibrated from real anonymized local datasets only if analytics ever become an explicit opt-in feature. Until then, they should be expert-estimated and versioned with content.

## Diagnostic Assessment Design

## Full Initial Diagnostic

The initial diagnostic should be a multi-hour placement test that can be paused and resumed.

Expected duration:

- minimum meaningful diagnostic: 60-90 minutes,
- strong full placement: 2-4 hours,
- complete cross-grade diagnostic: 4-6 hours split across sessions.

The app must not force completion in one sitting. It should save progress after every answer.

### Diagnostic Structure

The diagnostic should be split into modules:

1. Number and computation foundations.
2. Algebraic expressions and equations.
3. Functions and relationships.
4. Geometry and measurement.
5. Data and probability.
6. Advanced algebra and analysis readiness.
7. Olympiad extension probe.

Each module should contain:

- anchor items,
- prerequisite chain items,
- mixed multi-skill items,
- misconception-detecting items,
- transfer items where the same skill appears in a new representation.

### Item Count Targets

For reliable initial diagnosis:

- each core attribute should appear in at least 3 diagnostic items,
- critical prerequisite attributes should appear in 4-6 items,
- each item should usually require 1-4 attributes,
- a full diagnostic pool should contain far more items than any one student sees.

Minimum useful pool:

```txt
Grades 5-8 foundations:      250-400 diagnostic items
Grades 9-10 curriculum:      250-400 diagnostic items
Grades 11-12 curriculum:     250-400 diagnostic items
Olympiad extension probe:    150-300 diagnostic items
```

The student should see a selected subset, but the first full diagnostic can still be long.

### Item Types

Use multiple answer formats:

- multiple choice for quick misconception detection,
- numeric input,
- algebraic expression input,
- interval input,
- coordinate/table interpretation,
- graph interpretation,
- proof-step selection,
- matching equivalent forms,
- short structured answer where auto-validation is possible.

No free document submission is required.

### Hints During Diagnostic

Diagnostic items should not provide ordinary teaching hints.

Allowed:

- "I don't know" option,
- skip and return later,
- optional formula sheet if the diagnostic module explicitly allows it.

Not allowed:

- step-by-step hints,
- solution reveal before final submission,
- retries that erase diagnostic evidence.

The point is diagnosis, not practice.

## Inference Model

## DINA-Style First Implementation

For each item and student mastery vector:

```txt
eta = 1 if all required attributes are mastered
eta = 0 otherwise

P(correct | eta = 1) = 1 - slip
P(correct | eta = 0) = guess
```

For implementation, do not enumerate every possible mastery vector when there are hundreds of attributes. Instead:

1. maintain per-attribute mastery probabilities,
2. update item-required attributes after each response,
3. propagate evidence through the prerequisite graph,
4. use diagnostic confidence thresholds to decide what to test next.

This is an approximation of full CDM inference, but it is practical offline and understandable.

### Mastery Probability

Each attribute should store:

```ts
type AttributeDiagnosis = {
  attributeId: string;
  pMastery: number;
  evidenceCount: number;
  correctEvidence: number;
  incorrectEvidence: number;
  lastUpdatedAt: number;
  confidence: "unknown" | "low" | "medium" | "high";
};
```

Initial probability:

- `0.50` for unknown attributes,
- higher if strong prerequisites are known,
- lower if prerequisites are weak.

Update logic:

- correct answer raises probability for required attributes,
- wrong answer lowers probability for required attributes,
- wrong answer especially lowers the weakest prerequisite candidates,
- mixed-skill wrong answers should not over-punish every listed skill equally.

### Required Evidence Before Classification

Do not classify an attribute as mastered or lacking from one item.

Default thresholds:

```txt
Mastered:
  pMastery >= 0.85
  evidenceCount >= 3
  at least 2 correct responses on items requiring the attribute

Likely mastered:
  pMastery >= 0.70
  evidenceCount >= 2

Likely lacking:
  pMastery <= 0.35
  evidenceCount >= 3

Unknown:
  otherwise
```

Critical attributes should require stronger evidence.

## Adaptive Item Selection

The diagnostic should start broad and become targeted.

### Phase 1: Broad Placement

Ask anchor items across the curriculum strands:

- easy foundation items,
- middle curriculum items,
- high curriculum items,
- one or two challenge probes.

Goal:

- estimate rough range,
- detect obvious gaps,
- avoid wasting hours on material clearly too easy or too advanced.

### Phase 2: Prerequisite Search

When a student fails an item, test prerequisite attributes directly.

Example:

```txt
Fails: Find domain of function from graph.

Probe:
1. Can read x-values from coordinate graph?
2. Understands interval endpoints?
3. Knows inclusive/exclusive interval notation?
4. Understands that domain means allowed input values?
```

### Phase 3: Confirmation

Before declaring a gap, ask a second or third item using a different representation.

Example:

- one symbolic item,
- one graph item,
- one word-problem item.

### Phase 4: Learning Plan Generation

Generate the smallest useful learning path:

1. missing prerequisites first,
2. then target topic attributes,
3. then mixed practice,
4. then SRS seeding,
5. then mastery tests.

## Diagnostic State

Add diagnostic state to local progress.

```ts
type DiagnosticState = {
  version: number;
  status: "not_started" | "in_progress" | "paused" | "complete";
  startedAt?: number;
  completedAt?: number;
  currentModuleId?: string;
  answeredItemIds: string[];
  skippedItemIds: string[];
  attributeDiagnoses: Record<string, AttributeDiagnosis>;
  moduleSummaries: Record<string, DiagnosticModuleSummary>;
  recommendedLearningPath: LearningPathNode[];
};
```

Each diagnostic response:

```ts
type DiagnosticResponse = {
  itemId: string;
  value: string;
  correct: boolean;
  seconds: number;
  confidence?: "guessed" | "unsure" | "confident";
  createdAt: number;
};
```

The diagnostic must persist after every response.

## Content Schema

### Attribute Schema

```ts
type DiagnosticAttribute = {
  id: string;
  title: string;
  description: string;
  strand: "Skaičiai ir skaičiavimai" | "Modeliai ir sąryšiai" | "Geometrija ir matavimai" | "Duomenys ir tikimybės";
  stage: "5-6" | "7-8" | "9-10" | "11" | "12" | "olympiad";
  prerequisiteAttributeIds: string[];
  relatedConceptIds: string[];
  relatedTopicIds: string[];
};
```

### Diagnostic Item Schema

```ts
type DiagnosticItem = {
  id: string;
  moduleId: string;
  prompt: string;
  answerType: "multipleChoice" | "numeric" | "expression" | "interval" | "graph" | "matching";
  answer: string;
  acceptedAnswers?: string[];
  choices?: string[];
  requiredAttributeIds: string[];
  misconceptionAttributeIds?: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  representation: "symbolic" | "numeric" | "graph" | "table" | "verbal" | "mixed";
  slip?: number;
  guess?: number;
  estimatedSeconds: number;
};
```

### Module Schema

```ts
type DiagnosticModule = {
  id: string;
  title: string;
  strand?: string;
  stageCoverage: string[];
  targetAttributeIds: string[];
  minItems: number;
  maxItems: number;
  stopWhenConfidenceReached: boolean;
};
```

## Replacing Onboarding

The canonical start flow should be:

1. welcome,
2. goal selection,
3. diagnostic explanation,
4. diagnostic start.

Remove as primary placement tools:

- grade-band selection,
- topic selection,
- self-reported starting level.

The app may still ask optional context questions, but those answers must not override diagnostic evidence.

### Student-Facing Explanation

The app should explain:

```txt
Pirmiausia atliksime diagnostiką. Ji gali trukti kelias valandas, bet gali sustoti ir tęsti vėliau.
Tikslas nėra gauti pažymį. Tikslas yra rasti, kokių sąvokų ir įgūdžių trūksta, kad programa galėtų sudaryti mokymosi kelią.
```

## Learning Plan Generation

After diagnostic completion, generate:

- recommended first topic,
- prerequisite review topics,
- concept list for SRS,
- practice sequence,
- test checkpoints,
- optional olympiad extension route.

Learning path node:

```ts
type LearningPathNode = {
  id: string;
  kind: "attribute" | "concept" | "topic" | "practice_set" | "test";
  targetId: string;
  reason: string;
  priority: number;
  unlocks: string[];
  status: "locked" | "recommended" | "active" | "complete";
};
```

Rules:

- never recommend a topic if critical prerequisites are likely lacking,
- prefer the shortest path that repairs blocking gaps,
- use official curriculum strands for grouping,
- clearly separate olympiad additions from mandatory curriculum,
- update the plan after practice and tests.

## UI Requirements

Diagnostic UI must support:

- resume later,
- progress by module,
- "I don't know",
- skip and return later,
- no immediate teaching solution,
- clear estimate of remaining time,
- calm serious test environment,
- keyboard-friendly input,
- mobile layout,
- offline persistence.

Dashboard after diagnostic:

- show "what to do next",
- show missing prerequisites,
- show diagnosed strengths,
- show confidence, not only percent,
- show why the app recommends the current step.

## Implementation Phases

### Phase 1: Data Model

- Add diagnostic attributes.
- Add diagnostic item schema.
- Add Q-matrix field to every diagnostic item.
- Add prerequisite graph between attributes.
- Add local diagnostic state.

### Phase 2: Fixed Long Diagnostic

- Build a non-adaptive multi-module diagnostic first.
- Save every answer.
- Compute attribute probabilities after each answer.
- Generate a learning plan at the end.

### Phase 3: Adaptive Selection

- Add broad placement.
- Add prerequisite probes.
- Add confirmation items.
- Stop modules early only when confidence is high.

### Phase 4: Plan-Driven App

- Replace grade/topic onboarding with diagnostic start.
- Dashboard uses learning path as the source of truth.
- Practice and SRS update attribute diagnosis over time.

### Phase 5: Calibration

- Review item quality manually.
- Detect items that misclassify too often.
- Adjust slip/guess values.
- Validate and revise the Q-matrix.

## Testing Requirements

Unit tests:

- Q-matrix validation rejects missing attributes.
- DINA update raises probability after correct evidence.
- DINA update lowers probability after incorrect evidence.
- one wrong multi-skill item does not mark all attributes as lacking.
- prerequisite propagation works.
- learning plan orders prerequisites before dependent topics.

Integration tests:

- start diagnostic,
- answer several items,
- pause,
- reload app,
- resume at the same module,
- complete diagnostic,
- receive learning path,
- dashboard follows learning path instead of grade/topic choice.

Content validation tests:

- every diagnostic item has at least one required attribute,
- every critical attribute has at least 3 diagnostic items,
- every topic has linked attributes,
- every attribute has prerequisite links checked for cycles,
- no olympiad attribute is required for standard curriculum mastery.

## Important Risks

### Q-Matrix Quality

The Q-matrix is the heart of the system. Bad mappings will create bad recommendations. Every diagnostic item should be reviewed by a human or a specialized content agent.

### Overdiagnosis

Do not tell a student they "cannot" learn a topic. Say:

```txt
Šiai temai pirmiausia verta sustiprinti...
```

### Test Fatigue

The diagnostic is intentionally long, but it must be resumable, visibly purposeful, and broken into modules.

### False Confidence

Show confidence bands:

- high confidence,
- medium confidence,
- low confidence,
- unknown.

Do not show fine-grained mastery percentages as if they are exact truth.

## Research Notes

The implementation should be guided by the following ideas from the CDM literature:

- CDMs classify mastery of latent attributes rather than producing only a total score.
- The Q-matrix is a required expert mapping between items and attributes.
- DINA assumes conjunctive mastery: all required attributes are needed for full success.
- DINO assumes compensatory/disjunctive mastery: any listed attribute may be enough.
- G-DINA generalizes several CDMs and can model more flexible item-attribute interactions.
- Q-matrix misspecification can seriously harm classification accuracy.
- Cognitive diagnostic computerized adaptive testing can use item selection to gather diagnostic evidence more efficiently.

Primary references:

- Junker and Sijtsma, DINA foundations: https://doi.org/10.1177/01466210122032064
- de la Torre, G-DINA framework: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/93B2EF3A71833F12E8D8CFD9FEC23287/S0033312300020585a.pdf/the-generalized-dina-model-framework.pdf
- CDMs and Q-matrix use in large-scale assessment: https://largescaleassessmentsineducation.springeropen.com/articles/10.1186/s40536-022-00138-4
- Q-matrix misspecification risk: https://www.frontiersin.org/articles/10.3389/fpsyg.2020.02120/full
- CD-CAT item selection overview: https://pmc.ncbi.nlm.nih.gov/articles/PMC7433381/
