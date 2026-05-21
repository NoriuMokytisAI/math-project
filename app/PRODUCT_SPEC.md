# Product Specification

## Product Name

Working name: **NoriuMokytis.lt**

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
9. **Strictly Lithuanian UI and Content.** All the content on the app must be in Lithuanian. No other language should be visible in the production app.

## Platforms

The app should be implemented once and packaged across platforms:

- Web/PWA first.
- Android second, as a priority mobile platform.
- Desktop third.
- iOS is not a priority.

Recommended platform route:

- Core app: React + TypeScript + Vite.
- Web: static PWA hosted at `NoriuMokytis.lt`.
- Android: Capacitor wrapper.
- Desktop: Tauri wrapper.

Electron is not an initial target. It should only be reconsidered if Tauri blocks a required platform feature.

## Scope

Complete target:

- Grades 5-12 official curriculum.
- Olympiad extension topics.
- Lithuanian UI and content.
- Offline content library.
- Local progress.
- Transfer codes.
- Theory, glossary, SRS, practice, tests, mastery.
- Cognitive diagnosis model placement.
- Automated learning path generation.
- Web/PWA, Android, and desktop packages.

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

## Goal-Based Start

The app starts by asking the student's learning goal. This is not only a tone preference. The chosen goal selects one of three starting modes. The core app stays the same, but the first home page, first recommended action, and learning-path logic differ by mode.

The onboarding UI must clearly explain what each choice changes before the student continues. It must also say that the choice can be changed later in Settings and that switching modes does not delete progress.

The three canonical goals are:

- `Noriu sustiprinti matematiką`
- `Ruošiuosi kontroliniui arba egzaminui`
- `Nežinau nuo ko pradėti`

No account creation.

### Mode 1: Olympiad Strengthening

Goal: `Noriu sustiprinti matematiką`

This mode should place the student into olympiad-level mathematics.

Behavior:

- after explaining the mode, ask the student to choose a starting grade band,
- use the grade band only to choose the initial difficulty and recommendations,
- never lock higher-grade or lower-grade content because of the chosen grade band,
- prioritize olympiad extension content,
- keep official curriculum prerequisites visible when needed,
- recommend harder problems, alternative solution methods, proof-style reasoning, and non-routine tasks,
- use the diagnostic only as an optional prerequisite-gap check, not as the required first step,
- show a home page focused on challenge tracks, hard problem sets, weak prerequisite alerts, and olympiad progress.

This mode is for students who want deeper mathematics, not only standard curriculum repair.

### Mode 2: Topic or Exam Preparation

Goal: `Ruošiuosi kontroliniui arba egzaminui`

This mode should let the student choose the topic they want to learn.

Behavior:

- after goal selection, ask whether the student is preparing for `Kontrolinis`, `PUPP`, or `VBE`,
- if the student chooses `Kontrolinis`, ask them to choose a specific curriculum topic and start from that topic,
- if the student chooses `PUPP` or `VBE`, make diagnostic the primary recommended action and keep specific topic selection as a secondary option,
- show the chosen topic as the main working area,
- prioritize concise theory, worked examples, practice, topic tests, mistakes, and exam-style checkpoints,
- offer prerequisite checks only when the topic requires them,
- show a home page focused on the selected topic, remaining tasks, due SRS, test readiness, and common mistakes.

This mode is for students with a known immediate target.

### Mode 3: Full Course With Diagnostic

Goal: `Nežinau nuo ko pradėti`

This mode should give the full course with the diagnostic test. This is the recommended path for most new users.

Behavior:

- explain that the diagnostic can take several hours and can be resumed,
- use the cognitive diagnosis model to find missing skills and prerequisites,
- generate an automatic full-course learning plan,
- recommend official curriculum topics in prerequisite-safe order,
- unlock olympiad extensions when standard mastery is strong enough,
- show a home page focused on the diagnostic status, the next recommended step, prerequisite repair, and full-course progress.

This mode is for students who do not know where to begin or want the app to decide the path.

### Shared Core Across Modes

All modes use the same:

- theory reader,
- glossary,
- SRS engine,
- practice engine,
- tests,
- mastery model,
- local progress,
- export/import codes,
- offline storage.

The mode changes the default home page and recommendation strategy. It must not fork the app into separate products. Modes are starting positions, not permanent user categories; the student can change mode later in Settings without losing progress.

## Navigation and Track Selection

The primary learning sections are **Teorija** (Theory) and **Praktika** (Practice), accessible via dedicated tabs on the main left sidebar. Both sections feature a dual-track layout designed to cleanly separate standard and advanced learning:
- **Mokyklinis turinys**: Official curriculum content (preparation for lessons, tests, exams).
- **Olimpiadinis turinys**: Advanced olympiad extension content (non-standard thinking).

When a student navigates to "Teorija" or "Praktika", the UI routes them based on their current goal (Start Mode):
- If the goal is **Olympiad Strengthening**, the app defaults them immediately to the "Olimpiadinis turinys" section.
- If the goal is **Topic or Exam Preparation**, the app defaults them immediately to the "Mokyklinis turinys" section.
- If the goal is **Full Course**, the app presents a selection screen with two large cards ("Mokyklinis turinys" and "Olimpiadinis turinys"), requiring them to choose their path for the current session.

Regardless of the default routing or the choice made, a prominent toggle button is always available at the top of the "Teorija" and "Praktika" pages, allowing students to instantly switch between the curriculum and olympiad tracks with a single button press.

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
