# SRS Implementation Plan

## Purpose

The app should use spaced repetition to help students remember concepts, formulas, methods, and recurring mistakes from the Lithuanian mathematics curriculum. SRS must feel like a focused memory tool, not another exercise screen.

The production implementation will use an Anki-style SM-2 scheduler first. The code must be structured so FSRS can be adopted later without replacing the review UI, card storage, or engagement rules.

## Fixed Product Decisions

- SRS cards are not created automatically for the whole curriculum.
- A theory card enters SRS only after the user engages with the concept, formula, method, or mistake.
- Engagement means one of:
  - the user clicks a concept or glossary item,
  - the user marks a theory topic as finished,
  - the user attempts an exercise linked to that concept, formula, method, or mistake.
- The student sees only two review buttons:
  - `Pakartoti`
  - `Moku gerai`
- Review buttons appear only after the answer side of the card is revealed.
- Practice weakness cards may be created automatically from exercise performance, but they must use the same scheduler interface.
- All SRS logic must work offline and must persist through app restart and progress export/import.

## Scheduler Strategy

### Production Scheduler: SM-2 Style

The first implementation should use an SM-2 style scheduler because it is lightweight, transparent, offline-friendly, and fits the two-button review model.

Each card should store enough scheduling state to reproduce Anki-like behavior:

```ts
type SrsSchedulerType = "sm2";

type SrsQueue = "new" | "learning" | "review" | "relearning" | "suspended";

type SrsRating = "again" | "good";

type SrsCard = {
  id: string;
  deck: "theory" | "practice";
  cardType: "concept" | "formula" | "mistake" | "method" | "practice";
  sourceId: string;
  topicId?: string;
  front: string;
  back: string;
  schedulerType: SrsSchedulerType;
  queue: SrsQueue;
  dueAt: string;
  intervalDays: number;
  easeFactor: number;
  learningStepIndex: number;
  repetitions: number;
  lapses: number;
  createdAt: string;
  firstEngagedAt: string;
  lastEngagedAt: string;
  lastReviewedAt?: string;
  enabled: boolean;
};
```

The exact TypeScript shape may be adjusted to fit the final state model, but these fields are required conceptually.

### Future Scheduler: FSRS

FSRS should not be implemented first. The production SM-2 implementation must still prepare for it by routing all scheduling through a scheduler interface.

The scheduler boundary should look like this conceptually:

```ts
type SrsScheduler = {
  createInitialCard(input: SrsCardInput, settings: SrsSettings, now: Date): SrsCard;
  review(card: SrsCard, rating: SrsRating, settings: SrsSettings, now: Date): SrsCard;
  isDue(card: SrsCard, now: Date): boolean;
  normalize(card: unknown, settings: SrsSettings, now: Date): SrsCard;
};
```

When FSRS is added later, the app should add a new scheduler implementation and a migration path, not rewrite SRS screens or engagement code.

## SM-2 Behavior

Default settings should match Anki-inspired behavior while staying understandable:

```ts
type SrsSettings = {
  schedulerType: "sm2";
  newCardsPerDay: number;
  reviewsPerDay: number;
  learningStepsMinutes: number[];
  relearningStepsMinutes: number[];
  graduatingIntervalDays: number;
  startingEaseFactor: number;
  minimumEaseFactor: number;
  easePenaltyOnAgain: number;
  intervalModifier: number;
  maximumIntervalDays: number;
  enabledCardTypes: {
    concept: boolean;
    formula: boolean;
    mistake: boolean;
    method: boolean;
    practice: boolean;
  };
};
```

Production defaults:

- `newCardsPerDay`: `20`
- `reviewsPerDay`: `200`
- `learningStepsMinutes`: `[1, 10]`
- `relearningStepsMinutes`: `[10]`
- `graduatingIntervalDays`: `1`
- `startingEaseFactor`: `2.5`
- `minimumEaseFactor`: `1.3`
- `easePenaltyOnAgain`: `0.2`
- `intervalModifier`: `1`
- `maximumIntervalDays`: `36500`

### New and Learning Cards

When a card is first created, it starts in `new`.

When reviewed:

- `Pakartoti`
  - moves the card into `learning`,
  - schedules it at the first learning step,
  - keeps or resets `learningStepIndex` to `0`.
- `Moku gerai`
  - moves the card forward through learning steps,
  - after the final learning step, graduates it into `review`,
  - sets `intervalDays` to `graduatingIntervalDays`.

### Review Cards

When a `review` card is reviewed:

- `Pakartoti`
  - increments `lapses`,
  - reduces `easeFactor`,
  - moves the card to `relearning`,
  - schedules it using the first relearning step.
- `Moku gerai`
  - keeps the card in `review`,
  - increases the interval using:

```ts
nextIntervalDays = clamp(
  Math.round(previousIntervalDays * easeFactor * intervalModifier),
  1,
  maximumIntervalDays
);
```

The initial production interface does not need Anki's `Hard` or `Easy` buttons. Their settings should not be shown to the student unless a future version adds those buttons.

### Relearning Cards

When a `relearning` card is reviewed:

- `Pakartoti`
  - schedules the first relearning step again.
- `Moku gerai`
  - returns the card to `review`,
  - uses at least `1` day as the next interval unless a safer preserved interval is chosen.

## Card Creation Rules

SRS should be engagement-based.

### Concept Click

When the user clicks a concept in theory or opens a glossary entry:

1. Resolve the concept ID.
2. Check whether a theory concept card already exists.
3. If no card exists, create one.
4. If a card exists, update `lastEngagedAt`.
5. Do not make duplicate cards.

### Theory Finished

When the user marks a theory topic as finished:

1. Create missing concept cards for concepts directly used in that topic.
2. Create missing formula cards for formulas directly used in that topic.
3. Create missing method cards for methods directly taught in that topic.
4. Create missing mistake cards only for mistakes explicitly listed as common in that topic.
5. Update `lastEngagedAt` for existing cards.

This represents the user saying they engaged with the full theory topic.

### Exercise Attempt

When the user attempts an exercise:

1. Create or update cards for tagged concepts.
2. Create or update formula/method cards if the exercise requires them.
3. If the answer is wrong or hints are used, create or strengthen mistake/practice cards.
4. Do not create unrelated topic cards.

Exercise performance may also shorten intervals for related weak cards through the scheduler interface, but only if the user has already engaged with that card or the exercise directly introduces that card.

## Review UI

The SRS review screen should copy the basic Anki card flow.

Before reveal:

- show deck/type metadata,
- show the card front,
- do not show rating buttons,
- allow clicking the card to reveal the answer,
- allow `Enter` or `Space` to reveal the answer.

After reveal:

- show the card back,
- show `Pakartoti` and `Moku gerai`,
- allow keyboard shortcuts:
  - `1` for `Pakartoti`,
  - `2` for `Moku gerai`,
  - `Enter` for `Moku gerai` only after reveal.

The empty SRS state should explain that cards appear after the student reads theory, clicks concepts, or solves exercises. It should not say or imply that all curriculum cards are already waiting.

## Settings

Settings should include a dedicated `SRS` tab.

The SRS tab should include:

- scheduler label: `SM-2`
- explanation that FSRS can be adopted later,
- new cards per day,
- reviews per day,
- learning steps in minutes,
- relearning steps in minutes,
- graduating interval in days,
- maximum interval in days,
- enabled card types,
- reset to Anki-style defaults.

Advanced numeric settings should be grouped under an expandable advanced area:

- starting ease factor,
- minimum ease factor,
- ease penalty on `Pakartoti`,
- interval modifier.

Validation rules:

- minute steps must be positive numbers,
- day intervals must be positive numbers,
- ease factor cannot go below the minimum ease factor,
- daily limits cannot be negative,
- at least one card type should remain enabled unless SRS is globally disabled.

## Migration

The current implementation creates all theory cards at startup. This must be removed.

Migration should:

1. bump the local state version,
2. stop initial state creation from generating the full theory deck,
3. stop normalization from recreating the full theory deck,
4. remove unreviewed auto-created theory cards from existing sessions,
5. preserve reviewed cards and practice cards,
6. normalize preserved cards into the new scheduler shape,
7. preserve user card-type preferences where possible.

Cards with review history should not be deleted, even if they came from the old automatic deck creation.

## Acceptance Criteria

- A fresh user has zero due theory SRS cards before engaging with content.
- Clicking a concept creates one concept card.
- Clicking the same concept again does not create a duplicate.
- Marking theory finished creates only cards related to that topic.
- Attempting an exercise creates or updates only related cards.
- Rating buttons are hidden until the card is revealed.
- `Pakartoti` schedules a near-term repeat.
- `Moku gerai` advances learning or review intervals.
- SRS settings persist after refresh.
- Resetting SRS settings restores the production defaults.
- Existing reviewed cards survive migration.
- Existing unreviewed auto-created theory cards are removed during migration.
- The app remains fully offline.
- Export/import preserves SRS cards, settings, and review history.

## Implementation Order

1. Add SRS settings defaults and state migration.
2. Add scheduler interface.
3. Implement SM-2 scheduler behind the interface.
4. Replace automatic full-deck creation with engagement-based card creation.
5. Update concept, glossary, theory-finished, and exercise-attempt events to call card creation helpers.
6. Rebuild SRS review UI with front/reveal/back/rating flow.
7. Add the `SRS` settings tab.
8. Update smoke tests and add scheduler tests.
9. Verify fresh session, migrated session, SRS review, and export/import behavior.


> **Language Constraint:** All the content on the app must be strictly in Lithuanian. No other language should be visible in the production app.
