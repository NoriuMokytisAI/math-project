# NoriuMokytis.lt Math Learning App

This directory contains the product and implementation specification for an offline-first Lithuanian mathematics learning app.

The app is intended to become:

- a web app / PWA,
- an Android app,
- a desktop app,
- a fully free Lithuanian-first learning tool for grades 5-12,
- a curriculum-aligned math learning system with olympiad extensions.

The implementation target is now the completed product, not a narrow prototype:

- full grades 5-12 curriculum coverage,
- olympiad extension content,
- goal-based starting modes with optional/full diagnostic placement,
- production web/PWA, Android, and desktop delivery.

## Documents

- [Product specification](./PRODUCT_SPEC.md)
- [Canonical requirements](./APP_REQUIREMENTS.md)
- [Platform targets](./PLATFORM_TARGETS.md)
- [Web phone accessibility and responsive implementation guide](./WEB_PHONE_ACCESSIBILITY.md)
- [Full completion criteria](./FULL_COMPLETION_CRITERIA.md)
- [Technical architecture](./TECHNICAL_ARCHITECTURE.md)
- [Content model and schemas](./CONTENT_MODEL.md)
- [Content authoring guide](./CONTENT_AUTHORING_GUIDE.md)
- [Content expansion strategy](./CONTENT_EXPANSION_STRATEGY.md)
- [Content display and depth requirements](./CONTENT_DISPLAY_AND_DEPTH_REQUIREMENTS.md)
- [Olympiad exercise authoring guide](./OLYMPIAD_EXERCISE_AUTHORING_GUIDE.md)
- [Learning systems: SRS, mastery, diagnostics](./LEARNING_SYSTEMS.md)
- [Cognitive diagnosis model implementation guide](./CDM_IMPLEMENTATION_GUIDE.md)
- [SRS implementation plan](./SRS_IMPLEMENTATION_PLAN.md)
- [Implementation plan](./IMPLEMENTATION_PLAN.md)

## Canonical Build Decisions

These decisions remove ambiguity for implementation:

- Build one shared React + TypeScript app.
- Put the implementation in the root-level `frontend/` directory.
- Keep this `app/` directory for product and engineering specifications.
- Ship web as an offline-capable PWA.
- Treat phone web usability as a release gate, following `WEB_PHONE_ACCESSIBILITY.md`.
- Wrap the same web app for Android with Capacitor.
- Wrap the same web app for desktop with Tauri.
- Do not build separate native Android or desktop UIs.
- Use local-first storage only.
- Use Dexie/IndexedDB as the first storage implementation on all platforms.
- Add native storage adapters only if a platform proves IndexedDB insufficient.

## Canonical Goal-Based Start Modes

The first onboarding decision creates one of three starting modes. The main app remains shared, but the first home page and recommendation strategy differ.

- `Noriu sustiprinti matematiką` -> olympiad strengthening mode. The user enters olympiad-level mathematics by default, chooses a starting grade band, and can freely access higher-grade content.
- `Ruošiuosi kontroliniui arba egzaminui` -> topic or exam preparation mode. The user chooses `kontrolinis`, `PUPP`, or `VBE`; kontrolinis goes directly to topic selection, while PUPP/VBE recommends diagnostic first and keeps topic selection available.
- `Nežinau nuo ko pradėti` -> full-course mode. The app recommends the long diagnostic test and generates a complete learning path.

These modes are starting positions, not permanent user categories. The student can change mode later in Settings without losing progress. The diagnostic is the main root only for full-course mode; it is optional in olympiad and topic/exam modes.

## Canonical Topic Navigation

The dashboard topic area is **Aktualios temos**. It is a focused local list of topic ids, not the full curriculum browser. Topic/exam onboarding adds the selected topic to this list, and individual theory topic pages must provide `Pridėti prie aktualių temų`.

The full curriculum and olympiad browser lives in **Teorija** and **Praktika**. Both pages use a card-based library layout with `Mokyklinis` / `Olimpiadinis` toggle, search, grade, discipline, and difficulty filters. Recommended cards appear first; all other matching topics appear below.

Olympiad content follows the same topic-level browsing rule as school content. Grades may group or filter olympiad cards, but the student must choose a specific olympiad topic such as `Skaičių teorija`, `Algebra`, `Geometrija`, `Kombinatorika`, `Funkcijos`, `Nelygybės`, or `Strategijos ir įrodymai`. The app should not send the student to one giant page containing all olympiad material for a grade.

`Praktika` must not behave like a hidden random exercise queue. Opening a topic's practice page must first show a selectable exercise library with difficulty controls, filters, exact exercise cards, solved status, and a recommended next exercise. The detailed standard is defined in [Content display and depth requirements](./CONTENT_DISPLAY_AND_DEPTH_REQUIREMENTS.md).

`Teorija` must support deep lessons, not only a few paragraphs. Mature curriculum and olympiad topics need structured sections, examples, mistakes, formulas/methods, glossary links, prerequisite links, and enough explanatory depth to teach independently.

The current content-depth completion target is stricter than ordinary growth:
all `npm run validate:content` depth warnings must be removed by expanding the
actual topic JSON files grade-by-grade. Curriculum topics must reach the mature
lesson target, while olympiad topics must be especially strengthened with
method-focused theory and at least five fully reasoned worked examples or
teaching problems. The validator must not be weakened to hide unfinished
content.

## Canonical Phone Web Standard

The website must be usable on phone widths down to `360px` without zooming, clipped text, thin vertical cards, hidden primary actions, or whole-page horizontal scrolling.

The binding phone implementation rules are defined in [Web phone accessibility and responsive implementation guide](./WEB_PHONE_ACCESSIBILITY.md). They apply to onboarding, dashboard metrics, `Aktualios temos`, `Teorija`, `Praktika`, topic theory, standard practice, olympiad practice, SRS, diagnostics, `Žodynas`, tests, and settings.

## Fully Completed App

The app is considered complete only when the same learning product is released and accepted on:

- web/PWA,
- Android,
- PC desktop.

The full completion rules are defined in [Full completion criteria](./FULL_COMPLETION_CRITERIA.md).

## Non-Negotiables

- Lithuanian first and only for the initial product.
- No runtime AI inside the app.
- No logins.
- No paid features.
- Offline-first.
- Student-owned progress.
- Progress transfer through export/import codes.
- Content integrated through GitHub.
- Strict alignment to the official Lithuanian mathematics curriculum.
- Olympiad content is additional, clearly marked, and never mixed with mandatory curriculum mastery.


> **Language Constraint:** All the content on the app must be strictly in Lithuanian. No other language should be visible in the production app.
