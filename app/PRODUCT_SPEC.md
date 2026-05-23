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

The web experience must also feel intentionally designed on phones. A phone user must be able to complete core learning flows without zooming, clipped content, thin vertical cards, hidden buttons, or horizontal page scrolling. The detailed phone standard is `WEB_PHONE_ACCESSIBILITY.md`.

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
- add the chosen topic to `Aktualios temos`,
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

The dashboard must contain an **Aktualios temos** section in the place where broad curriculum topic groups would otherwise appear. This section is not the full curriculum browser. It is the student's focused list of currently relevant topics.

`Aktualios temos` behavior:

- store the list as local progress, using stable topic ids,
- when onboarding creates a topic target in `Ruošiuosi kontroliniui arba egzaminui`, add that topic to the list,
- after a student opens an individual topic theory page, show `Pridėti prie aktualių temų` beside the existing topic actions,
- if the topic is already in the list, show a non-duplicating state such as `Jau aktualiose temose`,
- do not add diagnostic recommendations automatically; diagnostics should recommend topics, while `Aktualios temos` remains the student's explicit working list,
- if the list is empty, show a clear Lithuanian empty state explaining that topics can be added from a theory topic page.

The full topic browser belongs in **Teorija** and **Praktika**, not on the dashboard.

The primary learning sections are **Teorija** (Theory) and **Praktika** (Practice), accessible via dedicated tabs on the main left sidebar. When opened without a specific topic id, both pages should use a YouTube-inspired card library layout:

1. A top control box for finding content.
2. A card-based content box for topic cards.

The top control box must include:

- `Mokyklinis` / `Olimpiadinis` content toggle,
- search bar,
- grade or grade-band filter,
- discipline/strand filter,
- difficulty filter for olympiad-level content.

Default filter state:

- the content toggle defaults to `Olimpiadinis` for olympiad strengthening mode,
- otherwise it defaults to `Mokyklinis`,
- grade or grade-band defaults to the onboarding choice,
- search starts empty,
- discipline starts as all disciplines.

The content box must show card-based topic presentations:

- recommended topics first,
- all other matching topics below,
- large topic name,
- short description,
- visible grade/band, strand, mastery, and olympiad difficulty metadata where relevant.

Olympiad content must be split at the same browsing level as school content. A selected grade may group olympiad cards, but it must not open one page containing all olympiad content for that grade. The student should choose a specific olympiad topic card, for example `Skaičių teorija`, `Algebra`, `Funkcijos`, `Geometrija`, `Kombinatorika`, `Nelygybės`, or `Strategijos ir įrodymai`.

For olympiad browsing:

- grade or grade band is a filter/grouping control,
- the card is a specific olympiad topic,
- clicking a Teorija card opens only that topic's theory,
- clicking a Praktika card starts only that topic's practice pool,
- optional whole-grade olympiad overview cards may exist only as summaries or navigation aids,
- whole-grade overview cards must not replace topic-level cards.

Recommended topics should be based on diagnostic recommendations first, then `Aktualios temos`, then the current target/active topic, then low-mastery topics in the selected grade band. Recommendations must respect the current toggle and filters.

Clicking a Teorija card opens the individual theory topic page. Clicking a Praktika card starts practice for that topic.

## Phone Web Experience

Phone web usability is a first-class product requirement.

Minimum standards:

- support phone widths down to `360px`,
- no whole-page horizontal scrolling,
- no clipped text in cards, buttons, titles, topic pills, stats, settings cards, practice statements, SRS cards, or recommendations,
- no dashboard metric cards squeezed into unreadable vertical strips,
- no settings cards squeezed into unreadable vertical strips,
- no practice or olympiad content disappearing off-screen,
- all core actions visible and touch-friendly,
- math formulas scroll horizontally only inside their own formula container,
- touch targets at least `44px`.

The dashboard, `Teorija`, `Praktika`, topic theory, standard practice, olympiad practice, SRS, diagnostics, `Žodynas`, tests, settings, and onboarding must pass `WEB_PHONE_ACCESSIBILITY.md`.

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
