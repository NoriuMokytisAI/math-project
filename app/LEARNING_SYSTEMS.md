# Learning Systems

## Overview

The learning engine has four connected systems:

1. diagnostics,
2. spaced repetition,
3. exercise scoring,
4. mastery and recommendations.

All systems run locally and offline.

## Diagnostics

The diagnostic should estimate what the student knows and where to start.

The long-term diagnostic system is not a short onboarding quiz. It should be the root of the app: an extensive cognitive diagnosis model assessment that replaces grade selection and manual topic selection as the main placement mechanism.

Canonical implementation details are defined in [Cognitive diagnosis model implementation guide](./CDM_IMPLEMENTATION_GUIDE.md).

The app may still ask the student's goal, but the learning path should be generated from diagnostic evidence:

- concept and skill mastery,
- prerequisite gaps,
- misconception patterns,
- confidence of classification,
- official curriculum strands,
- olympiad extension readiness.

## Prerequisite Graph

Every topic and concept should link to prerequisites.

Example:

```txt
Tiesines funkcijos
  -> Koordinaciu plokstuma
  -> Raidinis reiskinys
  -> Tiesine lygtis

Kvadratine funkcija
  -> Funkcijos savybes
  -> Kvadratines lygtys
  -> Daugianariu pertvarkiai
```

Recommendations should use this graph. If work in a later curriculum stage fails because an earlier prerequisite is weak, the app should recommend that earlier topic.

## SRS Decks

There are two decks:

- theory deck,
- practice deck.

Theory deck contains:

- concepts,
- definitions,
- formulas,
- theorems,
- methods,
- common mistakes.

Practice deck contains:

- failed exercise patterns,
- weak concepts from exercises,
- mistake cards,
- problem-type cards.

## SRS Buttons

Memory reviews have only two buttons:

- `Pakartoti`
- `Moku gerai`

Behavior:

- The front of the card is shown first.
- The student thinks before seeing the answer.
- The answer and rating buttons appear only after the card is flipped.
- `Pakartoti` returns the card soon.
- `Moku gerai` advances the card through learning or review intervals.

The production implementation must use the SM-2 style Anki scheduler described in [SRS implementation plan](./SRS_IMPLEMENTATION_PLAN.md). FSRS is intentionally deferred, but the scheduler interface must allow it to be adopted later without rewriting the review UI or card storage.

Practice SRS should not ask for Again/Good. It should update automatically from performance.

## Exercise Scoring

Exercise score should consider:

- correctness,
- time,
- hints used,
- number of attempts,
- solution revealed or not,
- difficulty,
- previous history,
- mistake type.

Suggested scoring:

```ts
base = correct ? 1 : 0
timeFactor = clamp(expectedSeconds / actualSeconds, 0.4, 1.2)
hintPenalty = hintsUsed * 0.12
attemptPenalty = (attempts - 1) * 0.15
solutionPenalty = solutionViewed ? 0.4 : 0

score = clamp(base * timeFactor - hintPenalty - attemptPenalty - solutionPenalty, 0, 1)
```

If the student uses hints:

- mastery gain decreases,
- related SRS interval shortens,
- hinted concept may be added to review.

If the student makes a tagged mistake:

- add or strengthen mistake card,
- lower concept confidence,
- recommend related theory section.

## Mastery Model

Track mastery at multiple levels:

- concept mastery,
- topic mastery,
- strand mastery,
- grade mastery,
- olympiad extension mastery.

Topic mastery components:

- theory completion,
- theory SRS accuracy,
- exercise accuracy,
- hard exercise success,
- test performance,
- recency,
- hint dependence,
- mistake frequency.

Suggested production formula:

```txt
topicMastery =
  0.15 * theoryCompletion +
  0.20 * theorySrsScore +
  0.30 * practiceScore +
  0.25 * testScore +
  0.10 * recencyScore
  - hintPenalty
  - mistakePenalty
```

Mastery labels:

- 0-24: `Pradzia`
- 25-49: `Silpna`
- 50-69: `Stipreja`
- 70-84: `Gera`
- 85-100: `Tvirta`

## LeetCode-Inspired Practice Tracking

Each topic should show:

- solved exercises,
- attempted exercises,
- unsolved exercises,
- easy/medium/hard/olympiad counts,
- accepted first try,
- hint-assisted,
- failed,
- average time,
- streak by topic,
- weak tags.

Use compact grids and filters:

- all,
- unsolved,
- failed,
- needs review,
- easy,
- medium,
- hard,
- olympiad.

## Recommendations

The app should recommend:

- next theory section,
- due SRS review,
- weak concept to review,
- exercise set,
- test,
- prerequisite topic from lower grade,
- olympiad extension if mastery is high.

Recommendation order:

1. urgent due SRS,
2. blocking prerequisite,
3. current topic weak concept,
4. current topic exercises,
5. topic test,
6. next curriculum topic,
7. olympiad extension.

## Achievements

Achievements are local.

Examples:

- `Pirmas zingsnis`: completed onboarding.
- `Teorijos startas`: completed first theory section.
- `Atminties ratas`: completed first SRS session.
- `Be uzuominu`: solved 10 exercises without hints.
- `Tema iveikta`: reached 85 mastery in a topic.
- `Kvadratine pergale`: completed quadratic function topic test.
- `Sugrizau stipresnis`: fixed a previously weak concept.

Achievement popups should be small and dismissible.

