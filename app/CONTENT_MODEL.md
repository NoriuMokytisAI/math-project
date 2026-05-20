# Content Model and Schemas

## Content Principles

Content must be:

- curriculum-aligned,
- Lithuanian-first,
- local/offline,
- versioned in GitHub,
- structured enough to power glossary links, SRS, recommendations, and mastery.

Every topic should be a data object, not hard-coded UI.

## Grade Structure

Target grades:

- 5
- 6
- 7
- 8
- 9
- 10
- 11
- 12

Each grade contains official curriculum topics plus optional olympiad extensions.

Example:

```txt
content/curriculum/grades/09/funkcijos-ir-ju-savybes.json
content/curriculum/grades/09/kvadratine-funkcija.json
content/olympiad/grades/09/funkcijos-olimpiada.json
```

## Topic Schema

```ts
type Topic = {
  id: string;
  slug: string;
  title: string;
  grade: 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  strand: "skaiciai" | "modeliai" | "geometrija" | "duomenys";
  level: "curriculum" | "olympiad";
  curriculumRefs: CurriculumRef[];
  prerequisites: string[];
  nextTopics: string[];
  concepts: string[];
  formulas: string[];
  mistakes: string[];
  theory: TheorySection[];
  examples: WorkedExample[];
  srsCards: SrsCardSeed[];
  exerciseSets: string[];
  tests: string[];
};
```

## Theory Section Schema

```ts
type TheorySection = {
  id: string;
  title: string;
  body: RichContentBlock[];
  conceptLinks: string[];
  callouts?: Callout[];
};
```

Rich content blocks should support:

- paragraph,
- definition,
- theorem,
- property,
- formula,
- example,
- note,
- warning,
- diagram,
- interactiveGraph,
- table.

## Glossary Concept Schema

```ts
type Concept = {
  id: string;
  slug: string;
  title: string;
  type: "concept" | "formula" | "theorem" | "method" | "notation" | "mistake";
  shortDefinition: string;
  intuitiveExplanation: string;
  formalExplanation?: string;
  notation?: string[];
  examples: string[];
  relatedConcepts: string[];
  prerequisiteConcepts: string[];
  appearsInTopics: string[];
  usedInExercises: string[];
  defaultSrs: boolean;
};
```

## Formula Schema

```ts
type Formula = {
  id: string;
  title: string;
  latex: string;
  conditions: string[];
  variables: Record<string, string>;
  explanation: string;
  examples: string[];
  relatedConcepts: string[];
};
```

## Common Mistake Schema

```ts
type Mistake = {
  id: string;
  title: string;
  topicId: string;
  conceptIds: string[];
  wrongPattern: string;
  whyItHappens: string;
  correction: string;
  exampleWrong: string;
  exampleCorrect: string;
  defaultSrs: boolean;
};
```

## Exercise Schema

```ts
type Exercise = {
  id: string;
  topicId: string;
  grade: number;
  level: "easy" | "medium" | "hard" | "olympiad";
  type:
    | "multipleChoice"
    | "numericInput"
    | "expressionInput"
    | "orderedSteps"
    | "matching"
    | "graphInterpretation"
    | "formulaSelection"
    | "nextStep"
    | "structuredReasoning";
  statement: RichContentBlock[];
  answer: AnswerSpec;
  hints: Hint[];
  solution: SolutionStep[];
  alternateMethods?: SolutionMethod[];
  conceptIds: string[];
  formulaIds: string[];
  mistakeTags: string[];
  estimatedSeconds: number;
  source?: string;
};
```

## Answer Spec

```ts
type AnswerSpec =
  | {
      kind: "choice";
      correctChoiceIds: string[];
      choices: { id: string; text: string }[];
    }
  | {
      kind: "numeric";
      value: number;
      tolerance?: number;
      unit?: string;
    }
  | {
      kind: "expression";
      canonical: string;
      acceptedEquivalentForms?: string[];
    }
  | {
      kind: "orderedSteps";
      correctStepIds: string[];
      availableSteps: { id: string; text: string }[];
    };
```

## Hint Schema

Hints are shown only when requested and one at a time.

```ts
type Hint = {
  order: number;
  text: string;
  revealsConceptIds?: string[];
  penalty: number;
};
```

## SRS Card Seed Schema

```ts
type SrsCardSeed = {
  id: string;
  deck: "theory" | "practice";
  cardType: "concept" | "formula" | "mistake" | "method" | "exercisePattern";
  front: string;
  back: string;
  conceptIds: string[];
  formulaIds?: string[];
  mistakeIds?: string[];
  defaultEnabled: boolean;
};
```

## Test Schema

```ts
type Test = {
  id: string;
  title: string;
  scope: "topic" | "grade" | "strand" | "diagnostic" | "olympiad";
  topicIds: string[];
  exerciseIds: string[];
  timeLimitSeconds?: number;
  masteryWeight: number;
  passingThreshold: number;
};
```

## Content Versioning

Each content build should have:

```ts
type ContentManifest = {
  version: string;
  generatedAt: string;
  curriculumSource: string;
  textbookSource: string;
  topics: string[];
  concepts: string[];
  exercises: string[];
};
```

Progress export must include content version. Import should warn if versions differ.

