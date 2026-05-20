# Product Specification

## Product Name

Working name: **NoriuMokyti.lt**

The name should feel direct, Lithuanian, and motivating. The product should present itself as a serious school tool with light gamified encouragement, not as a toy.

## Vision

Build a free offline-first mathematics learning app for Lithuanian students in grades 5-12. The app should help students learn independently, understand theory deeply, remember concepts through spaced repetition, practice systematically, and track mastery by topic and grade.

The best outcome is simple: students learn more mathematics, notice their own progress, and become more capable.

## Target Users

Primary user:

- independent Lithuanian student,
- grades 5-12,
- learning from the official Lithuanian curriculum,
- may have gaps from earlier grades,
- may want olympiad-level extension material.

Secondary user:

- teacher, tutor, or parent using the app personally,
- no teacher-student account connection,
- no class management.

## Product Principles

1. **Curriculum first.** Every required topic must map to the official Lithuanian mathematics curriculum.
2. **Offline first.** The app should work without network access after installation/loading.
3. **No login friction.** Progress belongs to the local user and is transferable by code.
4. **Theory before exercises.** Each topic starts with expansive theory and definitions.
5. **Concept graph everywhere.** Concepts should be clickable and connected to theory, examples, exercises, formulas, and mistakes.
6. **Practice is diagnostic.** Exercises should update mastery, SRS timing, and recommendations.
7. **Gamification supports learning.** Achievements and streaks should encourage, not distract.
8. **Free forever.** No paid content, no subscription, no monetization gates.

## Platforms

The app should be implemented once and packaged across platforms:

- Web/PWA first.
- Android second, as a priority mobile platform.
- Desktop third.
- iOS is not a priority.

Recommended platform route:

- Core app: React + TypeScript + Vite.
- Web: static PWA hosted at `NoriuMokyti.lt`.
- Android: Capacitor wrapper.
- Desktop: Tauri wrapper.

Electron is not an initial target. It should only be reconsidered if Tauri blocks a required platform feature.

## Scope

Initial complete target:

- Grades 5-12 official curriculum.
- Olympiad extension topics.
- Lithuanian UI and content.
- Offline content library.
- Local progress.
- Transfer codes.
- Theory, glossary, SRS, practice, tests, mastery.

MVP target:

- Grade 9.
- `Funkcijos ir ju savybes`.
- `Kvadratine funkcija`.
- onboarding with goal selection.
- theory reader with clickable concepts.
- glossary entries.
- theory SRS deck.
- practice deck.
- exercises with hints and solutions.
- mastery dashboard.
- progress export/import code.

## User Experience

The app should feel:

- clean,
- fast,
- serious,
- school-appropriate,
- calm,
- lightly gamified.

Inspirations:

- Anki for memory review,
- Duolingo for small motivational touches,
- LeetCode for exercise tracking and topic mastery,
- strong textbook navigation for theory depth.

Avoid:

- social feeds,
- leaderboards,
- dark patterns,
- paid unlocks,
- overly playful UI,
- AI chat as a product feature.

## Onboarding

Onboarding should ask the student to choose a goal. This goal should guide initial recommendations.

Example goals:

- `Noriu sustiprinti 9 klases matematika`
- `Ruosiuosi kontroliniui`
- `Ruosiuosi PUPP`
- `Ruosiuosi VBE`
- `Noriu mokytis olimpiadiniu uzdaviniu`
- `Nezinau nuo ko pradeti`

Then ask:

- grade,
- current confidence,
- preferred daily time,
- whether olympiad content should be shown,
- whether to run a diagnostic.

No account creation.

## Core Learning Flow

For each topic:

1. theory,
2. definitions,
3. formulas,
4. worked examples,
5. common mistakes,
6. SRS review,
7. exercises,
8. tests,
9. mastery summary,
10. recommended next step.

Theory should be readable as a textbook, but interactive through glossary links.

## Glossary

The glossary is a central part of the app.

Each concept page should show:

- definition,
- intuitive explanation,
- formal explanation,
- notation,
- examples,
- formulas using the concept,
- theory pages where it appears,
- exercises using it,
- common mistakes,
- prerequisite concepts,
- related concepts,
- option to add/remove from SRS.

Concept types:

- concept,
- formula,
- theorem,
- method,
- notation,
- mistake.

## Exercises

Problems are generated or authored beforehand and shipped as local content. The app does not generate exercises at runtime.

Exercise types:

- multiple choice,
- numeric input,
- algebraic expression input,
- ordered steps,
- matching,
- graph interpretation,
- formula selection,
- next-step selection,
- structured proof/reasoning prompts.

No document submission.

Each exercise should include:

- statement,
- answer format,
- correct answer,
- accepted equivalent answers where possible,
- hints shown one by one,
- full solution,
- alternate solution methods when available,
- concepts used,
- formulas used,
- mistake tags,
- difficulty,
- estimated time,
- curriculum topic,
- olympiad flag if applicable.

## Tests

There should be tests for:

- topic,
- strand,
- grade,
- prerequisite diagnostics,
- exam-style practice,
- olympiad extension.

Tests should affect mastery more strongly than normal practice.

## Achievements

No social leaderboards. Use local achievement popups.

Examples:

- first topic completed,
- first perfect topic test,
- first theory SRS session cleared,
- all exercises in a topic solved,
- first olympiad problem solved,
- seven-day streak,
- recovered a weak concept.

## Progress Transfer

No logins. Users transfer state using codes.

Export code should include:

- app version,
- content version,
- profile settings,
- progress,
- SRS queues,
- mastery state,
- achievements.

Import should validate:

- code format,
- app version compatibility,
- content version compatibility,
- corrupted data.

The app should warn before overwriting local progress.
