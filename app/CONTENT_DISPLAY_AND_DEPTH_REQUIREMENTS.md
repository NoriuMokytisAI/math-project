# Content Display And Depth Requirements

## Purpose

This document defines the required changes for two related problems:

- students cannot choose the difficulty or exact exercise they want to solve,
- many topic theory pages are too thin to function as real lessons.

The app must feel like a serious learning tool, not a random exercise dispenser. `Teorija` must support deep study, and `Praktika` must support deliberate exercise selection.

## Current Problems To Fix

Recent generated content increased the number of exercises, but the learning experience is still difficult to control.

Observed problems:

- opening a practice topic immediately starts a selected exercise instead of showing a practice selection page,
- the student cannot choose a difficulty level inside a topic,
- the student cannot choose a specific exercise inside a topic,
- the student cannot filter by solved status, concept, strategy, mistake, answer type, or estimated time,
- the existing difficulty filter in the topic library only filters topic cards; it does not control which exercise is served after entering practice,
- theory pages render whatever short text exists, but many topics have only a few paragraphs,
- some olympiad topic splits contain theory from unrelated tracks,
- content validation currently allows very thin theory to pass.

The fix requires both UI work and content work.

## Practice Selection Requirement

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

## Practice Difficulty Controls

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

## Exercise Card Requirements

Each exercise card in the practice selection page should show:

- exercise title or short generated label,
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

Cards must be usable on phones. Text must wrap, not clip.

## In-Practice Navigation Requirements

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

## Recommended Exercise Logic

The recommended next exercise should be selected from the current filters when filters are active.

Recommendation order:

1. prerequisite repair exercise if blocking,
2. unsolved exercise at selected difficulty,
3. weak concept exercise,
4. recent mistake repair exercise,
5. mixed review exercise,
6. harder extension if mastery is strong.

If no filters are active, the app may use the topic's default recommendation sequence.

## Theory Depth Requirement

Every topic theory page must be a real lesson.

Minimum mature curriculum topic target:

- 800-1500 Lithuanian words of theory,
- 4-8 meaningful sections,
- clear definitions,
- key formulas or methods,
- at least 5 worked examples,
- common mistakes,
- prerequisite reminders,
- links to glossary concepts,
- links to practice and tests.

Major or high-stakes topics should target:

- 1200-2500+ Lithuanian words of theory,
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

## Theory Page UI Requirements

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
- definition callouts,
- formula callouts,
- method callouts,
- warning/mistake callouts,
- worked examples,
- links to concepts in `Žodynas`,
- links to prerequisite topics.

## Content Split Requirements For Olympiad Topics

Olympiad topic files must not contain unrelated theory.

Examples:

- `olimpiada-09-skaiciu-teorija` must not contain geometry or combinatorics theory,
- `olimpiada-09-geometrija` must not contain number theory methods,
- `olimpiada-09-kombinatorika` must not contain algebraic inequality theory unless the exercise genuinely combines the methods and is tagged accordingly.

Cross-topic connections are allowed, but they should appear as prerequisite or related-topic links, not as mixed core theory inside the wrong topic.

## Content Validation Requirements

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
- an exercise has no solution.

During early expansion, these can be warnings. Before full release, they must become release-blocking checks.

## Content Improvement Priority

Fix content in this order:

1. topics with zero theory,
2. topics with exercises but no examples,
3. topics students see first after onboarding,
4. grade 9 MVP topics,
5. olympiad topics with split contamination,
6. high-prerequisite curriculum topics,
7. high-stakes PUPP/VBE topics,
8. topics with enough theory but weak exercise variety.

Do not add thousands of extra exercises to a topic whose theory is still only a stub.

After a topic's theory, examples, mistakes, glossary links, prerequisite links, and SRS seeds are strong, shift the main effort to large varied exercise volume.

## Implementation Acceptance Criteria

The change is accepted only when:

- `Praktika` opens a selection page for a topic,
- the student can choose difficulty before solving,
- the student can choose an exact exercise,
- filters affect the actual exercise pool,
- solving screen has navigation back to exercise selection,
- theory page supports deep structured lessons,
- thin theory topics are detectable by validation,
- olympiad split topics contain only matching topic content,
- phone layouts do not clip exercise cards, filters, or theory navigation,
- tests and build pass.

