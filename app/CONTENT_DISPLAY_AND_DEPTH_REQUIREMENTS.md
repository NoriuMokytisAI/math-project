# Content Display And Depth Requirements

## Purpose

This document defines the repair plan for content display, theory depth, and exercise selection.

The app must not feel like a random exercise dispenser. `Teorija` must support deep independent study, and `Praktika` must support deliberate choice: the student should be able to pick a topic, choose a difficulty, inspect exact exercises, and then solve.

This document also records the problems discovered after the latest content expansion commit `37058d5 Mass expansion of theory depth and worked examples for all 115 topics`.

## Latest Commit Findings

The latest content expansion improved the amount of authored theory in several files, but it also introduced schema and content-integrity issues that must be fixed before the UI can reliably display the new material.

Observed state:

- latest remote branch contains `115` topic JSON files under `content/generated`,
- many topics now contain longer theory and more worked examples,
- the app compiler still expects the older schema in several places,
- some newly expanded content is invisible in the frontend because the compiler ignores newer fields,
- many topics list exercise IDs that do not exist in their local `exercises` array,
- some backup artifacts are tracked in Git.

Important quantitative findings from static inspection:

- `79` curriculum topics exist; average raw theory length is about `524` words.
- `70 / 79` curriculum topics are still under the mature target of `800` theory words.
- `36` olympiad topics exist; average raw theory length is about `496` words.
- `33 / 36` olympiad topics are under `800` words and `35 / 36` are under `1000` words.
- `67` topics have mismatches between `topic.exerciseIds` and actual `exercises[]`.
- `470` exercises are missing concept tags.
- `64` exercises are missing `solutionSteps`.
- `14` exercises use an invalid answer shape.
- `12` exercises are missing difficulty or olympiad tier metadata.

This means the next repair must be done in this order:

1. make the compiler understand the content that already exists,
2. normalize or repair malformed content records,
3. make validation detect these failures,
4. implement practice selection and deeper theory display.

## Phase 1: Content Compiler Compatibility

The content compiler must support both the old and new authoring shapes.

Required compiler behavior:

- `theory[].blocks[].text` remains supported,
- `theory[].blocks[].content` is treated as text,
- `theory[].content` is treated as a paragraph section when `blocks` is absent,
- `formula.latex` remains supported,
- `formula.equation` is treated as the formula body when `latex` is absent,
- `formula.explanation`, `formula.description`, and `formula.conceptualContext` are all accepted as learner-facing explanation text,
- `workedExamples[].problem` and `workedExamples[].statement` are both accepted,
- `workedExamples[].steps`, string `solution`, and structured solution-like fields are normalized into one displayable solution.

The compiler must support these theory block types:

- `paragraph`,
- `definition`,
- `definitionCallout`,
- `theorem`,
- `property`,
- `note`,
- `warning`,
- `warningCallout`,
- `method`,
- `strategy`,
- `formula`,
- `formulaCallout`,
- `mistake`,
- `example`,
- `list`,
- `table`.

Unknown block types must not silently disappear. During development they should produce a warning that includes the topic file and section title.

## Phase 2: Remove Non-Content Artifacts

Backup and temporary files must not be shipped as content.

Remove tracked artifacts such as:

- `content/generated/11/aibes-ir-veiksmai.json.bak`,
- `content/generated/11/olimpiada-11.json.bak`,
- `latex/main.tex.bak`.

Validation should reject `.bak`, `.tmp`, `.old`, and similar backup files under content directories.

## Phase 3: Topic And Exercise Integrity Repair

The app must not rely on exercise IDs that point nowhere.

For every topic file:

- `topic.exerciseIds` must exactly match the IDs of actual objects in `exercises[]`, unless a documented cross-file exercise pool is implemented,
- tests must reference exercise IDs that exist,
- no exercise ID may be duplicated,
- every exercise `topicId` must match the owning topic,
- every exercise must have a valid answer object,
- every exercise must have at least one displayable solution path,
- every exercise must have concept tags,
- every exercise must have difficulty metadata.

If a topic currently lists many exercise IDs but contains only a few actual exercise objects, choose one of two fixes:

- add the missing exercise objects with full hints, answers, concept tags, and solutions, or
- remove missing IDs from `topic.exerciseIds` and tests so the app does not promise exercises that do not exist.

Do not leave dangling exercise IDs as placeholders.

## Phase 4: Practice Selection Requirement

Opening `Praktika` for a topic must not immediately force the student into a random or first-unsolved exercise.

The default topic practice entry must be a practice selection page.

The page must show:

- topic title,
- short topic description,
- progress summary,
- recommended next exercise,
- difficulty controls,
- filters,
- exercise cards,
- clear `Spręsti` action for each exercise.

The student must be able to intentionally choose:

- difficulty,
- exact exercise,
- solved or unsolved exercises,
- exercise type,
- concept,
- mistake category,
- strategy tag,
- estimated solving time.

The existing topic-library difficulty filter is not enough. It may filter topic cards, but topic practice must also filter the actual exercise pool.

## Phase 5: Practice Difficulty Controls

For curriculum practice, use these difficulty groups:

- `Lengvi`,
- `Vidutiniai`,
- `Sunkūs`,
- `Mišrūs`,
- `Testiniai`.

For olympiad practice, use these groups:

- `Įvadiniai`,
- `Standartiniai`,
- `Sudėtingi`,
- `Atrankiniai`.

Difficulty controls must affect the exercise pool, not only the visible topic cards.

If a selected difficulty has no exercises, show an empty state with:

- a short Lithuanian explanation,
- a button to clear the difficulty filter,
- a recommendation to try a nearby difficulty.

## Phase 6: Exercise Card Requirements

Each exercise card in the practice selection page should show:

- exercise title or generated label,
- short statement preview,
- difficulty or olympiad tier,
- solved status,
- best correctness state,
- hint usage summary if attempted,
- estimated time,
- answer type,
- linked concepts,
- strategy tags for olympiad exercises,
- mistake tags when available,
- `Spręsti` button.

Cards must be usable on phones:

- one-column layout at phone widths,
- wrapping tags,
- no clipped text,
- no horizontal page scroll,
- visible primary action.

## Phase 7: In-Practice Navigation Requirements

Inside the active solving screen, the student must have escape and navigation controls.

Required actions:

- `Pasirinkti kitą uždavinį`,
- `Kitas tokio pat lygio`,
- `Lengvesnis`,
- `Sunkesnis`,
- `Grįžti į uždavinių sąrašą`.

For olympiad exercises, also show:

- `Panašus uždavinys`,
- `Sunkesnis pratęsimas` when available,
- `Kartoti prielaidas` when prerequisite mastery is weak.

The app may still recommend the next exercise automatically, but the student must never be trapped in a hidden sequence.

## Phase 8: Recommended Exercise Logic

The recommended next exercise should be selected from the current filters when filters are active.

Recommendation order:

1. prerequisite repair exercise if blocking,
2. unsolved exercise at selected difficulty,
3. weak concept exercise,
4. recent mistake repair exercise,
5. mixed review exercise,
6. harder extension if mastery is strong.

If no filters are active, the app may use the topic's default recommendation sequence.

## Phase 9: Theory Depth Requirement

Every topic theory page must be a real lesson.

Minimum mature curriculum topic target:

- 800-1500 Lithuanian words of useful theory,
- 4-8 meaningful sections,
- clear definitions,
- key formulas or methods,
- at least 5 worked examples,
- common mistakes,
- prerequisite reminders,
- links to glossary concepts,
- links to practice and tests.

Major or high-stakes topics should target:

- 1200-2500+ Lithuanian words of useful theory,
- multiple sublessons,
- several representation modes,
- exam-style examples,
- misconception repair.

Minimum mature olympiad topic target:

- 1000+ Lithuanian words of theory/method notes,
- 4-8 method-focused sections,
- named strategies,
- proof patterns,
- hidden idea explanations,
- at least 5 worked examples or fully solved teaching problems,
- common traps,
- prerequisite repair links,
- SRS seeds for methods, mistakes, and insights.

These are mature-topic targets. A topic may start smaller, but it must be marked as incomplete in coverage tracking and should not be considered production-complete.

Do not add filler to meet word counts. Depth must come from useful explanations, methods, examples, edge cases, mistakes, prerequisite bridges, and transfer guidance.

## Phase 10: Theory Page UI Requirements

The theory page must support deep content without becoming a wall of text.

Required layout:

- topic header with actions,
- table of contents,
- section navigation,
- `Teorija`,
- `Apibrėžtys`,
- `Formulės ir metodai`,
- `Pavyzdžiai`,
- `Dažnos klaidos`,
- `Praktika`,
- `Testai`.

The page may use tabs, anchors, or section cards, but all important content must be visible and reachable on phones.

Each section should support:

- paragraphs,
- lists,
- tables,
- definition callouts,
- formula callouts,
- method and strategy callouts,
- warning and mistake callouts,
- worked examples,
- links to concepts in `Žodynas`,
- links to prerequisite topics.

If a topic is still thin, show a learner-safe message such as:

`Šios temos teorija dar plečiama. Kol kas naudok pavyzdžius, sąvokas ir uždavinius.`

Do not show developer wording, JSON/schema language, or placeholders to students.

## Phase 11: Content Split Requirements For Olympiad Topics

Olympiad topic files must not contain unrelated theory.

Examples:

- `olimpiada-09-skaiciu-teorija` must not contain geometry or combinatorics theory,
- `olimpiada-09-geometrija` must not contain number theory methods,
- `olimpiada-09-kombinatorika` must not contain algebraic inequality theory unless the exercise genuinely combines the methods and is tagged accordingly.

Cross-topic connections are allowed, but they should appear as prerequisite or related-topic links, not as mixed core theory inside the wrong topic.

Every olympiad exercise in a topic file must have an `olympiadTrack` matching the topic track unless the topic is explicitly a mixed-strategy topic.

## Phase 12: Validation Requirements

The build/content validation should warn or fail when:

- a curriculum topic has fewer than 4 theory sections,
- a curriculum topic has fewer than 800 theory words and is marked production-ready,
- a major topic has fewer than 1200 theory words and is marked production-ready,
- an olympiad topic has fewer than 4 theory/method sections,
- an olympiad topic has fewer than 1000 theory words and is marked production-ready,
- an olympiad topic has no worked examples,
- a topic has exercises but no theory,
- a topic has exercises but no difficulty distribution,
- a practice topic has no selectable exercise metadata,
- an olympiad topic contains exercises from multiple unrelated `olympiadTrack` values,
- an exercise has no difficulty/tier,
- an exercise has no concept tags,
- an exercise has no solution,
- `topic.exerciseIds` references missing exercises,
- a test references missing exercises,
- a formula cannot be normalized to displayable math text,
- a theory section or block cannot be normalized to displayable text,
- a `.bak`, `.tmp`, or backup-style file appears in content directories.

During early expansion, theory depth can be a warning. Broken references, malformed JSON, invalid answer objects, missing exercises, and compiler-invisible content must fail.

Before full release, all checks become release-blocking.

## Phase 13: Content Improvement Priority

Fix content in this order:

1. compiler-invisible theory caused by unsupported fields or block types,
2. malformed formulas, worked examples, answers, and solutions,
3. dangling `topic.exerciseIds` and broken test exercise references,
4. topics with zero displayable theory,
5. topics with exercises but no examples,
6. topics students see first after onboarding,
7. grade 9 MVP topics,
8. olympiad topics with split contamination,
9. high-prerequisite curriculum topics,
10. high-stakes PUPP/VBE topics,
11. topics with enough theory but weak exercise variety.

Do not add thousands of extra exercises to a topic whose theory is still only a stub.

After a topic's theory, examples, mistakes, glossary links, prerequisite links, and SRS seeds are strong, shift the main effort to large varied exercise volume.

## Implementation Acceptance Criteria

The change is accepted only when:

- content compiler supports the active authored schema,
- no expanded theory is invisible because of unsupported fields,
- backup artifacts are removed from tracked content,
- `topic.exerciseIds` and actual `exercises[]` are consistent,
- tests reference existing exercises,
- exercises have usable difficulty/tier metadata,
- exercises have concept tags where concept mapping exists,
- exercises have displayable solutions,
- `Praktika` opens a selection page for a topic,
- the student can choose difficulty before solving,
- the student can choose an exact exercise,
- filters affect the actual exercise pool,
- solving screen has navigation back to exercise selection,
- theory page supports deep structured lessons,
- thin theory topics are detectable by validation,
- olympiad split topics contain only matching topic content,
- phone layouts do not clip exercise cards, filters, or theory navigation,
- `npm run validate:content` passes,
- `npm --prefix frontend test` passes,
- `npm --prefix frontend run build` passes.

