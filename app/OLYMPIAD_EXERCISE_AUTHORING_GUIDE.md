# Olympiad Exercise Authoring Guide

## Purpose

This guide defines how olympiad-level mathematics exercises must be authored and how the olympiad exercise page should present them in the app.

Olympiad content is not just harder practice. The exercise itself is usually the easiest part to generate. The value comes from the surrounding learning structure:

- what the student must know before attempting it,
- what method or insight the problem is designed to teach,
- how hints reveal thinking without giving the solution too early,
- how the full solution explains every important move,
- how alternate methods help transfer the idea,
- what mistakes the student is likely to make,
- what should enter SRS after the student engages with the problem.

This guide extends `CONTENT_AUTHORING_GUIDE.md`. The general topic, concept, exercise, SRS, and test schemas still apply.

## Product Role

Olympiad exercises are extension content.

They must:

- use `level: "olympiad"`,
- be clearly separate from required curriculum mastery,
- never block ordinary curriculum completion,
- contribute to separate olympiad progress,
- still link back to official curriculum prerequisites,
- be available in the `Noriu sustiprinti matematiką` starting mode,
- remain accessible from other modes when the student chooses extension content.

Olympiad content should feel serious, challenging, and teachable. It should not feel like a random hard problem dump.

## Required Learner-Facing Labels

Use these Lithuanian labels consistently in the olympiad exercise page:

- `Uždavinys`
- `Ką verta prisiminti`
- `Pirmas pastebėjimas`
- `Užuominos`
- `Pilnas sprendimas`
- `Kiti sprendimo būdai`
- `Dažnos klaidos`
- `Ką išmokti iš šio uždavinio`
- `Panašūs uždaviniai`

Avoid English labels such as `challenge`, `solution`, `hint`, `alternate methods`, or `reflection`.

## Olympiad Exercise Schema Extension

Use the standard exercise schema from `CONTENT_AUTHORING_GUIDE.md`, then add the olympiad-specific fields below.

```json
{
  "id": "olympiad-parity-001",
  "topicId": "dalumas-ir-liekanos",
  "grade": 7,
  "level": "olympiad",
  "type": "structuredReasoning",
  "olympiadTrack": "Skaičių teorija",
  "olympiadTier": "introductory",
  "requiredPrerequisiteMastery": 70,
  "statement": "Įrodyk, kad dviejų nelyginių skaičių suma yra lyginis skaičius.",
  "answer": {
    "kind": "structuredReasoning",
    "expectedConclusion": "Suma yra lyginė."
  },
  "coreIdea": {
    "title": "Nelyginį skaičių užrašyk formule",
    "text": "Nelyginį skaičių galima užrašyti kaip 2k+1. Tada dviejų tokių skaičių suma turi bendrą daugiklį 2."
  },
  "strategyTags": ["parity", "algebraic-representation", "proof"],
  "prerequisiteTopicIds": ["dalumas-ir-liekanos", "raidiniai-reiskiniai"],
  "prerequisiteConceptIds": ["lyginis-skaicius", "nelyginis-skaicius", "dalumas", "irodymas"],
  "expectedMethodIds": ["parity-representation"],
  "hints": [],
  "solutionMethods": [],
  "commonTraps": [],
  "reflectionPrompts": [],
  "extensionQuestions": [],
  "srsSeeds": [],
  "teacherNotes": ""
}
```

## Field Rules

### `olympiadTrack`

Use a stable Lithuanian track name.

Recommended values:

- `Skaičių teorija`
- `Algebra`
- `Geometrija`
- `Kombinatorika`
- `Nelygybės`
- `Funkcijos`
- `Strategijos ir įrodymai`

### `olympiadTier`

Use one of:

- `introductory` - first olympiad-style problems for the topic,
- `standard` - normal olympiad training problem,
- `advanced` - difficult problem needing combined ideas,
- `selection` - very hard contest-selection style problem.

This is separate from ordinary curriculum difficulty.

### `requiredPrerequisiteMastery`

Number from `0` to `100`.

Recommended defaults:

- `50` for introductory olympiad problems,
- `70` for standard problems,
- `85` for advanced or selection-style problems.

If the student is below this value on key prerequisite topics, the page should show a visible prerequisite warning and offer `Kartoti prielaidas`.

### `coreIdea`

The core idea is the hidden strategic insight of the problem.

It must:

- be short,
- be collapsed by default before solving,
- not reveal the full solution immediately,
- explain the turning point after the student chooses to reveal it.

Good:

```json
{
  "title": "Žiūrėk į paritetą",
  "text": "Svarbu ne tik skaičių dydžiai, bet ir tai, ar jie lyginiai ar nelyginiai."
}
```

Bad:

```json
{
  "title": "Sprendimas",
  "text": "Atsakymas yra 14, nes viską suskaičiavus gauname 14."
}
```

### `strategyTags`

Every olympiad problem must teach at least one named strategy.

Recommended strategy tags:

- `invariant`
- `parity`
- `modular-arithmetic`
- `extremal-principle`
- `bounding`
- `construction`
- `contradiction`
- `induction`
- `symmetry`
- `graph-interpretation`
- `combinatorial-counting`
- `casework`
- `pigeonhole-principle`
- `algebraic-transformation`
- `geometric-auxiliary-line`
- `reverse-thinking`

Strategy tags power filtering, recommendations, SRS method cards, and olympiad progress.

### `prerequisiteTopicIds` and `prerequisiteConceptIds`

Every olympiad exercise must state what the student needs before attempting it.

Use prerequisite topic IDs for larger curriculum dependencies.
Use prerequisite concept IDs for precise knowledge.

Do not list basic arithmetic unless it is genuinely the point of the problem. Prefer non-trivial dependencies such as:

- divisibility,
- modular arithmetic,
- parity,
- factorization,
- equations,
- similar triangles,
- Pythagorean theorem,
- area transformations,
- combinatorial counting,
- proof by contradiction.

### `expectedMethodIds`

List the method concepts the problem is meant to teach or reinforce.

Examples:

- `parity-representation`
- `modular-counting`
- `extremal-choice`
- `draw-auxiliary-line`
- `count-two-ways`
- `prove-by-contradiction`

Each method ID should exist as a glossary concept or be generated with the olympiad topic.

## Hints

Hints must be shown only when requested and one at a time.

Olympiad hints should be more strategic than normal hints. They should guide attention before computation.

Each olympiad problem should have at least 3 hints. Use 4 hints for hard problems.

Required progression:

1. Orientation only.
2. Key observation.
3. Method direction.
4. Near-solution scaffold.

Example:

```json
"hints": [
  {
    "order": 1,
    "kind": "orientation",
    "text": "Pabandyk nustatyti, kas uždavinyje nekinta, kai atliekami leidžiami veiksmai.",
    "revealsConceptIds": ["invariantas"],
    "penalty": 0.06
  },
  {
    "order": 2,
    "kind": "observation",
    "text": "Atkreipk dėmesį į lyginių ir nelyginių skaičių skaičių.",
    "revealsConceptIds": ["paritetas"],
    "penalty": 0.08
  },
  {
    "order": 3,
    "kind": "method",
    "text": "Užrašyk nelyginį skaičių forma 2k+1.",
    "revealsConceptIds": ["nelyginis-skaicius"],
    "penalty": 0.10
  },
  {
    "order": 4,
    "kind": "scaffold",
    "text": "Jei skaičiai yra 2a+1 ir 2b+1, sudėk juos ir iškelk 2 prieš skliaustus.",
    "penalty": 0.12
  }
]
```

Hint penalties should affect olympiad mastery, but less harshly than ordinary practice because strategic hints are part of training. The app should still record hint dependence.

## Full Solution Requirements

The full solution must not jump over reasoning.

Each step must include:

- `title`,
- `action`,
- `reason`,
- optional `latex`,
- `result`.

Schema:

```json
{
  "id": "method-1",
  "title": "Pariteto užrašymas",
  "methodType": "main",
  "strategyTags": ["parity", "algebraic-representation"],
  "steps": [
    {
      "title": "Užrašome pirmą nelyginį skaičių",
      "action": "Tarkime, pirmas nelyginis skaičius yra 2a+1.",
      "reason": "Kiekvienas nelyginis skaičius dalijant iš 2 duoda liekaną 1.",
      "latex": "x=2a+1",
      "result": "Pirmas skaičius išreikštas per sveikąjį a."
    }
  ],
  "finalAnswer": "Dviejų nelyginių skaičių suma yra lyginis skaičius."
}
```

For proof problems, the final answer should state what was proven, not only a numeric result.

## Alternate Solution Methods

Alternate solutions are required when the problem naturally supports meaningfully different approaches.

Good alternate methods:

- algebraic proof and modular arithmetic proof,
- synthetic geometry and coordinate geometry,
- direct counting and complementary counting,
- construction and contradiction,
- invariant and coloring argument.

If no meaningful alternate method is included, explicitly store:

```json
"alternateMethodNote": "Šiam uždaviniui nepateikiamas atskiras alternatyvus metodas, nes pagrindinė idėja yra viena: pariteto užrašymas."
```

Do not invent shallow alternate methods that merely rewrite the same solution with different words.

## Common Traps

Every olympiad exercise should include common traps.

Each trap must explain:

- the wrong move,
- why it is tempting,
- how to correct it,
- which concept or method should be reviewed.

Schema:

```json
{
  "id": "trap-checking-examples-only",
  "title": "Tikrinami tik keli pavyzdžiai",
  "wrongMove": "Mokinys patikrina 3+5=8 ir 7+9=16, bet nepateikia bendro įrodymo.",
  "whyTempting": "Pavyzdžiai greitai parodo, kad teiginys atrodo teisingas.",
  "correction": "Reikia įrodyti visiems nelyginiams skaičiams, todėl naudok bendrą formą 2k+1.",
  "reviewConceptIds": ["irodymas", "nelyginis-skaicius"],
  "srsRecommended": true
}
```

## Reflection Prompts

Reflection turns a solved problem into transferable knowledge.

Each olympiad exercise should include 2-4 reflection prompts.

Examples:

```json
"reflectionPrompts": [
  "Kuris uždavinio sakinys parodė, kad verta žiūrėti į paritetą?",
  "Kaip būtum atpažinęs šią idėją, jei skaičiai būtų paslėpti ilgesniame tekste?",
  "Kokį panašų uždavinį galima sukurti pakeitus nelyginius skaičius liekanomis moduliu 3?"
]
```

These prompts should appear after the solution, not before the attempt.

## Extension Questions

Extension questions are optional for introductory problems and recommended for standard or harder problems.

They should ask the student to generalize, vary, or strengthen the result.

Examples:

```json
"extensionQuestions": [
  {
    "prompt": "Kas pasikeistų, jei sudėtume tris nelyginius skaičius?",
    "expectedIdea": "Trijų nelyginių skaičių suma yra nelyginė.",
    "difficulty": "medium"
  }
]
```

Extension questions may become separate related olympiad exercises later.

## SRS Seeds

Olympiad SRS should focus on methods, traps, and strategic insights, not memorizing whole solutions.

Each olympiad exercise should include SRS seeds for at least one of:

- method,
- mistake,
- core idea,
- useful representation,
- proof pattern.

Example:

```json
"srsSeeds": [
  {
    "id": "srs-method-parity-representation",
    "deck": "theory",
    "cardType": "method",
    "front": "Kada verta skaičių užrašyti forma 2k arba 2k+1?",
    "back": "Kai uždavinyje svarbus lyginumas, nelyginumas, dalumas iš 2 arba veiksmų poveikis paritetui.",
    "conceptIds": ["paritetas"],
    "methodIds": ["parity-representation"],
    "defaultEnabled": true
  },
  {
    "id": "srs-trap-examples-are-not-proof",
    "deck": "practice",
    "cardType": "mistake",
    "front": "Kodėl keli pavyzdžiai nėra įrodymas?",
    "back": "Pavyzdžiai tik patikrina atvejus. Įrodymas turi paaiškinti, kodėl teiginys galioja visiems leidžiamiems atvejams.",
    "conceptIds": ["irodymas"],
    "mistakeIds": ["trap-checking-examples-only"],
    "defaultEnabled": true
  }
]
```

SRS cards should enter the user's queue only after engagement with the exercise, concept, method, or mistake. Do not pre-create all olympiad SRS cards for a fresh user.

## Olympiad Page Layout

The olympiad exercise page should be a serious problem-solving workspace. It should not reuse the normal quick-practice layout without changes.

### Top Area

Show:

- exercise title,
- olympiad track,
- olympiad tier,
- estimated solving time,
- prerequisite status,
- current olympiad progress impact.

Primary actions:

- `Spręsti`
- `Rodyti teoriją`
- `Kartoti prielaidas`

`Kartoti prielaidas` should appear prominently when prerequisite mastery is below `requiredPrerequisiteMastery`.

### Before Solving

Show:

- `Ką verta prisiminti` checklist,
- prerequisite topic links,
- glossary concept links,
- method tags,
- collapsed `Pirmas pastebėjimas`.

`Pirmas pastebėjimas` must be collapsed by default because it can reveal the key insight.

### Solving Area

Show:

- `Uždavinys`,
- answer input when the answer format supports it,
- optional scratch/notes area,
- one-at-a-time `Užuominos`,
- button to reveal full solution after an attempt or deliberate reveal.

For proof-style problems, the app may use structured reasoning or self-check mode instead of strict automatic validation.

### After Attempt Or Reveal

Show:

- `Pilnas sprendimas`,
- named steps,
- reasons for each step,
- formulas or theorems used,
- `Kiti sprendimo būdai` when present,
- `Dažnos klaidos`,
- `Ką išmokti iš šio uždavinio`,
- `Panašūs uždaviniai`.

Do not show the complete solution before the student attempts, requests enough hints, or explicitly chooses to reveal it.

### Completion Area

After completion, the page should:

- update olympiad progress separately from curriculum mastery,
- record hint count and reveal behavior,
- offer SRS additions for methods, traps, and insights,
- recommend one of:
  - similar problem,
  - prerequisite repair,
  - harder extension,
  - related theory.

## Mastery And Scoring Guidance

Olympiad mastery should be separate from ordinary curriculum mastery.

Recommended signals:

- solved without hints,
- solved with hints,
- solution revealed,
- reflection completed,
- related method SRS reviewed,
- repeated success on the same strategy tag,
- success on harder tier problems.

Hint use should reduce mastery gain, but should not be treated as failure. Learning to use strategic hints is part of olympiad training.

Solution reveal should record engagement but should not count as solved.

## Quality Checklist

Before accepting an olympiad exercise, verify:

- JSON parses successfully.
- `level` is exactly `"olympiad"`.
- `olympiadTrack` is present.
- `olympiadTier` is present.
- `requiredPrerequisiteMastery` is present.
- `coreIdea` is present.
- `strategyTags` has at least one item.
- `prerequisiteTopicIds` or `prerequisiteConceptIds` are present.
- At least 3 progressive hints exist.
- Full solution has named steps.
- Every solution step has a reason.
- Alternate methods are present when meaningful, or `alternateMethodNote` explains why not.
- Common traps explain why the wrong move is tempting.
- Reflection prompts are included.
- SRS seeds include at least one method, mistake, or core idea.
- Learner-facing text is Lithuanian.
- No generic placeholder statements are present.
- Olympiad progress is separate from curriculum mastery.

## Minimal Completeness Standard

For each olympiad topic, generate at minimum:

- 3 theory or method sections,
- 5 olympiad concepts or methods,
- 5 worked examples,
- 15 olympiad exercises,
- 1 challenge test,
- SRS seeds for major methods and traps.

For each olympiad exercise, generate at minimum:

- 1 core idea,
- 1 strategy tag,
- 3 hints,
- 1 full solution method,
- 2 common traps,
- 2 reflection prompts,
- 1 SRS seed.

Harder problems should exceed this minimum.

