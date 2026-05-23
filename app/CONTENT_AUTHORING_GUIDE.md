# Content Authoring Guide for Generation Agents

## Purpose

This file tells a content-generation agent how to write Lithuanian math learning content so it can be injected into the app with minimal cleanup.

Use this file for the exact topic JSON structure and authoring rules. Use `CONTENT_EXPANSION_STRATEGY.md` to decide what content to add next, how to expand beyond the minimum, how to prioritize topics, and how to track coverage so no official topic is forgotten.

The agent should generate structured content, not prose-only notes. The output must be easy to convert into app data for:

- curriculum topic pages,
- clickable glossary concepts,
- SRS cards,
- worked examples,
- exercises,
- hints,
- mistake tracking,
- mastery scoring,
- tests.

## Output Format

Generate one JSON file per topic.

Recommended path:

```txt
content/generated/{grade}/{topic_id}.json
```

Example:

```txt
content/generated/09/funkcijos.json
content/generated/09/kvadratine-funkcija.json
```

The file must contain valid UTF-8 JSON only. Do not include Markdown fences, comments, or explanatory text outside JSON.

Olympiad content must be split into specific grade-and-track topic files, not one whole-grade mega-topic. Grade is a grouping/filter in the app; the actual learning unit is a concrete olympiad topic such as number theory, algebra, geometry, combinatorics, inequalities, functions, or proof strategies.

Canonical olympiad topic paths use this pattern:

```txt
content/generated/{grade}/olimpiada-{grade}-{track_slug}.json
```

Examples:

```txt
content/generated/09/olimpiada-09-skaiciu-teorija.json
content/generated/09/olimpiada-09-algebra.json
content/generated/09/olimpiada-09-funkcijos.json
content/generated/09/olimpiada-09-geometrija.json
content/generated/09/olimpiada-09-kombinatorika.json
```

Do not author a visible primary topic such as `olimpiada-09` that contains all olympiad content for the grade. A whole-grade olympiad overview may exist only as a lightweight navigation/summary object or as a migration alias; it must not be the default Teorija or Praktika destination.

When a task asks for app content, write finished JSON content files directly. Do not create generator scripts, parser scripts, extraction scripts, or temporary automation as a substitute for the content.

## ID Rules

All IDs must be stable and lowercase.

Use Lithuanian ASCII slugs where possible:

- good: `funkcijos`, `kvadratine-funkcija`, `apibrezimo-sritis`
- bad: `Topic 1`, `funkcija_1`, `new-topic-final`

Allowed ID characters:

```txt
a-z
0-9
-
```

Do not rename IDs after they exist, because user progress and SRS cards may reference them.

## Top-Level Topic JSON

Each topic file must follow this shape:

```json
{
  "contentVersion": "0.1.0",
  "source": {
    "curriculum": "matematikaPrograma.pdf",
    "textbook": "matematika_k12.pdf",
    "notes": "Short note about what source pages or sections were used."
  },
  "topic": {
    "id": "funkcijos",
    "title": "Funkcijos ir jų savybės",
    "grade": 9,
    "strand": "Modeliai ir sąryšiai",
    "level": "curriculum",
    "order": 1,
    "estimatedStudyMinutes": 120,
    "prerequisiteTopicIds": [],
    "nextTopicIds": ["kvadratine-funkcija"],
    "conceptIds": ["funkcija", "argumentas"],
    "formulaIds": [],
    "mistakeIds": [],
    "exerciseIds": []
  },
  "theory": [],
  "concepts": [],
  "formulas": [],
  "mistakes": [],
  "workedExamples": [],
  "exercises": [],
  "tests": []
}
```

## Strand Values

Use exactly one of:

```txt
Skaičiai ir skaičiavimai
Modeliai ir sąryšiai
Geometrija ir matavimai
Duomenys ir tikimybės
```

## Level Values

Use exactly one of:

```txt
curriculum
olympiad
```

## Olympiad Topic Layout

Olympiad content follows the same topic schema as curriculum content, but it is organized more narrowly.

Required rules:

- one olympiad JSON file equals one specific topic/track within one grade or grade band,
- `topic.id` must include the grade and track, for example `olimpiada-09-geometrija`,
- `topic.title` should be the topic name, for example `Geometrija`, not `Olimpiadine matematika (9 klase)`,
- `topic.level` must be `olympiad`,
- `topic.strand` should use the olympiad track shown to the learner,
- all theory, concepts, worked examples, exercises, tests, mistakes, and SRS seeds in the file must belong to that same topic,
- exercises in the file must use the same `topicId` as the topic,
- exercises must include `olympiadTrack` matching the topic track,
- grade-level cards may group these topics visually, but clicking a Teorija or Praktika card must open a specific olympiad topic, not an entire grade dump.

Recommended olympiad track slugs:

```txt
skaiciu-teorija
algebra
funkcijos
nelygybes
geometrija
kombinatorika
strategijos-ir-irodymai
```

If a grade uses several tracks, create several files. For example, grade 9 should be represented as multiple topic cards such as `olimpiada-09-skaiciu-teorija`, `olimpiada-09-algebra`, `olimpiada-09-funkcijos`, `olimpiada-09-geometrija`, and `olimpiada-09-kombinatorika`.

## Theory Sections

Theory must be expansive enough for independent learning.

Each topic should have 4-8 theory sections. Use short paragraphs, not textbook walls of text.

Schema:

```json
{
  "id": "funkcijos-kas-yra-funkcija",
  "title": "Kas yra funkcija?",
  "blocks": [
    {
      "type": "paragraph",
      "text": "Funkcija yra taisyklė, kuri kiekvienai [[funkcija|leistinai argumento reikšmei]] priskiria tiksliai vieną reikšmę."
    },
    {
      "type": "definition",
      "conceptId": "funkcija",
      "text": "Funkcija yra atitikimas, kai kiekvienam argumento pasirinkimui priskiriama viena funkcijos reikšmė."
    },
    {
      "type": "formula",
      "formulaId": "funkcijos-zymejimas",
      "latex": "y=f(x)"
    },
    {
      "type": "note",
      "text": "Svarbiausia tikrinti, ar tam pačiam x nėra priskirtos dvi skirtingos y reikšmės."
    }
  ]
}
```

Allowed block types:

```txt
paragraph
definition
formula
theorem
property
note
warning
method
table
diagramPrompt
```

For now, diagrams should be described as `diagramPrompt`; do not generate images.

## Clickable Concept Links

Use this inline syntax inside theory text:

```txt
[[concept_id|visible Lithuanian text]]
```

Example:

```txt
Funkcijos [[apibrezimo-sritis|apibrėžimo sritis]] nurodo, kokias x reikšmes galima naudoti.
```

Every linked `concept_id` must exist in the same topic file or in a previously generated shared glossary file. Never invent concept links without defining the concept.

## Concepts

Every important term must become a concept object.

Schema:

```json
{
  "id": "apibrezimo-sritis",
  "title": "Apibrėžimo sritis",
  "type": "concept",
  "shortDefinition": "Visų leistinų argumento reikšmių aibė.",
  "intuition": "Tai x reikšmės, kurias funkcijai leidžiama naudoti.",
  "formal": "Funkcijos f apibrėžimo sritis D(f) yra visų x, kuriems f(x) apibrėžta, aibė.",
  "notation": ["D(f)"],
  "relatedConceptIds": ["funkcija", "argumentas", "reiksmiu-sritis"],
  "prerequisiteConceptIds": ["aibe"],
  "appearsInTopicIds": ["funkcijos"],
  "defaultSrs": true
}
```

Concept `type` values:

```txt
concept
formula
theorem
method
notation
mistake
```

## Formulas

Formulas must be separate objects when they should be searchable, clickable, or reviewed in SRS.

Schema:

```json
{
  "id": "kvadratines-funkcijos-virsune-x",
  "title": "Parabolės viršūnės x koordinatė",
  "latex": "x_v=-\\frac{b}{2a}",
  "conditions": ["Funkcija yra f(x)=ax^2+bx+c", "a != 0"],
  "variables": {
    "a": "kvadratinio nario koeficientas",
    "b": "tiesinio nario koeficientas",
    "x_v": "viršūnės abscisė"
  },
  "explanation": "Ši formulė nurodo simetrijos ašį ir parabolės viršūnės x koordinatę.",
  "relatedConceptIds": ["kvadratine-funkcija", "virsune", "simetrijos-asis"],
  "defaultSrs": true
}
```

Use LaTeX strings for formulas. Escape backslashes correctly in JSON.

## Common Mistakes

Common mistakes are important because they become SRS and practice review material.

Schema:

```json
{
  "id": "painioja-apibrezimo-ir-reiksmiu-sriti",
  "title": "Painioja apibrėžimo ir reikšmių sritis",
  "conceptIds": ["apibrezimo-sritis", "reiksmiu-sritis"],
  "wrongPattern": "Mokinys nurodo y reikšmes, kai prašoma x reikšmių.",
  "whyItHappens": "Abi sąvokos apibūdina galimas reikšmes, bet skirtingoms ašims.",
  "correction": "Apibrėžimo sritis yra x reikšmės, reikšmių sritis yra y reikšmės.",
  "wrongExample": "D(f) = [0; 5], kai grafike tai yra y intervalas.",
  "correctExample": "D(f) randame žiūrėdami, kokioms x reikšmėms grafikas egzistuoja.",
  "defaultSrs": true
}
```

## Worked Examples

Each topic should include at least 5 worked examples:

- 2 easy,
- 2 medium,
- 1 hard.

Schema:

```json
{
  "id": "funkcijos-reiksmes-radimas-1",
  "title": "Funkcijos reikšmės radimas",
  "level": "easy",
  "problem": "Duota f(x)=2x-3. Rask f(4).",
  "conceptIds": ["funkcija", "funkcijos-reiksme"],
  "formulaIds": [],
  "steps": [
    {
      "text": "Į funkcijos formulę vietoje x įrašome 4.",
      "latex": "f(4)=2\\cdot 4-3"
    },
    {
      "text": "Apskaičiuojame.",
      "latex": "f(4)=8-3=5"
    }
  ],
  "answer": "f(4)=5"
}
```

## Exercises

Each topic should include enough exercises for production-quality learning:

- 6 easy,
- 8 medium,
- 4 hard,
- 2 test-style or olympiad-extension if appropriate.

Schema:

```json
{
  "id": "funkcijos-ex-001",
  "topicId": "funkcijos",
  "grade": 9,
  "level": "easy",
  "type": "numericInput",
  "statement": "Duota f(x)=3x+1. Rask f(2).",
  "answer": {
    "kind": "numeric",
    "value": 7,
    "tolerance": 0
  },
  "hints": [
    {
      "order": 1,
      "text": "Vietoje x įrašyk 2.",
      "revealsConceptIds": ["funkcijos-reiksme"],
      "penalty": 0.12
    },
    {
      "order": 2,
      "text": "Apskaičiuok 3·2+1.",
      "penalty": 0.12
    }
  ],
  "solutionSteps": [
    {
      "text": "Įrašome x=2.",
      "latex": "f(2)=3\\cdot 2+1"
    },
    {
      "text": "Apskaičiuojame.",
      "latex": "f(2)=7"
    }
  ],
  "answerText": "7",
  "alternateMethods": [],
  "conceptIds": ["funkcija", "funkcijos-reiksme"],
  "formulaIds": [],
  "mistakeIds": [],
  "estimatedSeconds": 45
}
```

Exercise `type` values:

```txt
multipleChoice
numericInput
expressionInput
orderedSteps
matching
graphInterpretation
formulaSelection
nextStep
structuredReasoning
```

For the current production app, prefer:

```txt
multipleChoice
numericInput
expressionInput
```

## Answer Types

Multiple choice:

```json
{
  "kind": "choice",
  "choices": [
    { "id": "a", "text": "5" },
    { "id": "b", "text": "7" },
    { "id": "c", "text": "9" }
  ],
  "correctChoiceIds": ["b"]
}
```

Numeric:

```json
{
  "kind": "numeric",
  "value": 7,
  "tolerance": 0
}
```

Expression:

```json
{
  "kind": "expression",
  "canonical": "2*x+3",
  "acceptedEquivalentForms": ["3+2*x"]
}
```

## SRS Seeds

The app can generate concept cards automatically, but content agents should still provide recommended SRS seeds.

Schema:

```json
{
  "id": "srs-apibrezimo-sritis-definition",
  "deck": "theory",
  "cardType": "concept",
  "front": "Kas yra funkcijos apibrėžimo sritis?",
  "back": "Tai visų leistinų argumento x reikšmių aibė.",
  "conceptIds": ["apibrezimo-sritis"],
  "formulaIds": [],
  "mistakeIds": [],
  "defaultEnabled": true
}
```

Deck values:

```txt
theory
practice
```

Card type values:

```txt
concept
formula
mistake
method
exercisePattern
```

## Tests

Each topic should include at least one topic test.

Schema:

```json
{
  "id": "funkcijos-topic-test-1",
  "title": "Funkcijos ir jų savybės: temos testas",
  "scope": "topic",
  "topicIds": ["funkcijos"],
  "exerciseIds": ["funkcijos-ex-001", "funkcijos-ex-002"],
  "timeLimitSeconds": 1200,
  "masteryWeight": 1.5,
  "passingThreshold": 0.75
}
```

## Language Rules

Use Lithuanian as the primary and only learner-facing language.

Tone:

- clear,
- serious,
- student-friendly,
- not childish,
- occasional lightness is fine, but do not overdo jokes.

Use Lithuanian mathematical terminology consistently.

Avoid English phrases such as:

- "Explore other possible solution methods",
- "submit",
- "quiz",
- "flashcard".

Use:

- `Kiti sprendimo būdai`,
- `Tikrinti`,
- `testas`,
- `kortelė`.

## Math Formatting

Use LaTeX only inside JSON strings.

Inline formulas should still be stored as plain strings:

```json
"latex": "f(x)=ax^2+bx+c"
```

Do not use Markdown math delimiters in JSON fields unless the field explicitly expects display text.

Correct:

```json
"text": "Kvadratinė funkcija turi formą f(x)=ax^2+bx+c."
```

Incorrect:

```json
"text": "Kvadratinė funkcija turi formą \\(f(x)=ax^2+bx+c\\)."
```

## Quality Checklist

Before returning content, verify:

- JSON parses successfully.
- Every ID is unique inside the file.
- Every referenced concept ID exists.
- Every referenced formula ID exists.
- Every referenced mistake ID exists.
- Every exercise has at least 2 hints.
- Every exercise has a full solution.
- Every exercise has concept tags.
- Every topic has theory, concepts, examples, exercises, and at least one test.
- Every learner-facing field is Lithuanian.
- The topic follows the official curriculum source.

## Minimum Topic Completeness

For each curriculum topic, generate at minimum:

- 4 theory sections,
- 8 concepts,
- 2 formulas if the topic uses formulas,
- 4 common mistakes,
- 5 worked examples,
- 20 exercises,
- 1 topic test,
- 10 SRS seeds.

For olympiad extension topics, generate at minimum:

- 3 theory/method sections,
- 5 concepts or methods,
- 5 worked examples,
- 15 exercises,
- 1 challenge test.

## Current App Compatibility

The current web app may use a simplified runtime shape while the content pipeline matures. When generating new content, still use the richer schema in this guide. A conversion script can flatten it into the runtime shape:

- `topic.title` -> `topics[id].title`
- `topic.strand` -> `topics[id].strand`
- `theory[].blocks[type="paragraph"]` -> `topics[id].sections[].body`
- `concepts[]` -> `concepts`
- `formulas[].latex` -> `topics[id].formulas`
- `mistakes[].correction` or `title` -> `topics[id].mistakes`
- `workedExamples[]` -> `topics[id].examples`
- `exercises[]` -> `exercises`
- `tests[]` -> `tests`

Do not write directly into `frontend/src/content.js` unless specifically asked. Generate structured JSON first.


> **Language Constraint:** All the content on the app must be strictly in Lithuanian. No other language should be visible in the production app.
