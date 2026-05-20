# Implementation Plan

## Phase 0: Fixed Production Decisions

These decisions are fixed for the completed app:

- Put implementation in the root-level `frontend/` directory.
- Keep planning docs in `app/`.
- Use React + TypeScript + Vite.
- Use Capacitor for Android.
- Use Tauri for desktop.
- Put long-form authored content in root `content/` when the content pipeline is separated from app code.
- Use Dexie/IndexedDB through a storage abstraction on web, Android, and desktop unless a platform proves it needs a native adapter.
- Build one shared app, not separate web/native implementations.
- Treat grades 5-12, olympiad extensions, diagnostics, SRS, practice, tests, mastery, recommendations, and progress transfer as production scope.
- Do not use grade selection or topic selection as the root placement mechanism. Use the cognitive diagnosis model.

Open design choices that may be decided during implementation:

- exact visual theme tokens,
- exact algebraic equivalence validator,
- whether to use plain CSS modules or Tailwind after the first stable production shell.

## Phase 1: Production App Shell

Deliverables:

- Vite React app.
- Routes.
- Responsive layout for desktop, tablet, and phone.
- Lithuanian UI.
- PWA manifest.
- Service worker.
- Offline fallback.
- Shared navigation model for web, Android, and desktop.

Routes:

- `/`
- `/diagnostic`
- `/diagnostic/:moduleId`
- `/dashboard`
- `/learn/:pathNodeId`
- `/topic/:topicId`
- `/glossary`
- `/glossary/:conceptId`
- `/srs`
- `/practice/:practiceSetId`
- `/test/:testId`
- `/settings`

## Phase 2: Content and Curriculum Pipeline

Deliverables:

- content schemas,
- official curriculum topic map for grades 5-12,
- strand grouping matching the Lithuanian curriculum,
- olympiad extension schema,
- glossary concept schema,
- exercise schema,
- diagnostic attribute schema,
- diagnostic item schema,
- Q-matrix schema,
- build-time validator.

Validation must catch broken links between:

- topics,
- curriculum references,
- strands,
- concepts,
- diagnostic attributes,
- diagnostic items,
- formulas,
- exercises,
- tests,
- SRS cards,
- prerequisites.

## Phase 3: Cognitive Diagnosis Engine

Deliverables:

- diagnostic state storage,
- diagnostic response storage,
- diagnostic modules,
- diagnostic item renderer,
- DINA-style mastery probability updates,
- prerequisite graph propagation,
- diagnostic confidence bands,
- pause/resume support,
- "I don't know" answer path,
- no teaching hints or solution reveal during diagnostic,
- learning-path generation from diagnostic evidence.

The diagnostic is the root of the app. It must replace grade/topic onboarding as the primary way to decide what the student should learn.

## Phase 4: Plan-Driven Learning Flow

Deliverables:

- dashboard driven by the generated learning path,
- recommended next action,
- prerequisite repair path,
- current topic path,
- test checkpoints,
- SRS queue entry points,
- explanation of why each recommendation appears.

The dashboard may show curriculum browsing as a secondary option, but the primary action must come from diagnostic and learning evidence.

## Phase 5: Theory, Glossary, and Concept Graph

Deliverables:

- theory reader for all curriculum topics,
- clickable concept links,
- glossary page/drawer,
- concept pages with definitions, examples, related theory, exercises, mistakes, formulas, and SRS controls,
- prerequisite and related-concept navigation,
- KaTeX rendering.

## Phase 6: SRS

Deliverables:

- theory deck,
- practice deck,
- Again/Good review UI,
- front/back card layout,
- due cards,
- local review history,
- SM-2 scheduler behind a scheduler interface,
- settings for SRS behavior and enabled card types,
- FSRS-ready scheduler boundary for later adoption.

## Phase 7: Practice Engine

Deliverables:

- exercise renderer,
- multiple choice,
- numeric input,
- algebraic expression input,
- interval input,
- graph/table interpretation,
- ordered steps,
- matching,
- hints one by one,
- solution reveal,
- alternate solution methods,
- attempt scoring,
- mastery and diagnosis updates.

## Phase 8: Tests and Exams

Deliverables:

- topic tests,
- strand tests,
- full-grade tests,
- prerequisite diagnostics,
- exam-style practice,
- olympiad extension tests,
- resumable long tests,
- stronger mastery impact than normal practice.

## Phase 9: Mastery and Recommendations

Deliverables:

- attribute mastery,
- concept mastery,
- topic mastery,
- strand mastery,
- curriculum-stage mastery,
- olympiad readiness,
- weak concept list,
- prerequisite gap list,
- recommended next action,
- achievement popup.

## Phase 10: Transfer Codes

Deliverables:

- export progress code,
- import progress code,
- validation,
- overwrite warning,
- version compatibility check,
- cross-platform roundtrip.

Encoding approach:

```txt
JSON serialize progress
compress
base64url encode
prefix with app marker and version
```

Example:

```txt
NM-1-eyJ2ZXJzaW9uIjoiMS4wLjAi...
```

## Phase 11: Android Package

Deliverables:

- Capacitor Android project,
- production Android app id,
- icon and splash screen,
- bundled content,
- offline cold launch,
- persistent local progress,
- Android back button route handling,
- Android release test from `FULL_COMPLETION_CRITERIA.md`.

## Phase 12: Desktop Package

Deliverables:

- Tauri desktop project,
- Windows-first build,
- bundled content,
- offline cold launch,
- persistent local progress,
- keyboard navigation smoke pass,
- resize/layout smoke pass,
- desktop release test from `FULL_COMPLETION_CRITERIA.md`.

## Phase 13: Cross-Platform Completion

Deliverables:

- same content version shipped on all platforms,
- same progress code format on all platforms,
- web-to-Android-to-desktop transfer test,
- all release gates passed,
- documentation updated with release commands and troubleshooting.

## Milestones

### Milestone 1

Production app shell with diagnostic start.

### Milestone 2

Validated curriculum, concept, diagnostic attribute, and exercise schemas.

### Milestone 3

Fixed multi-module diagnostic with saved progress and learning-path output.

### Milestone 4

Plan-driven dashboard and theory/glossary flow.

### Milestone 5

SRS theory and practice decks.

### Milestone 6

Practice engine, tests, mastery, and recommendations.

### Milestone 7

Full grades 5-12 content pass with olympiad extensions.

### Milestone 8

Offline PWA and transfer codes.

### Milestone 9

Android production package.

### Milestone 10

PC desktop production package.

### Milestone 11

Cross-platform completed app acceptance.
