# Implementation Plan

## Phase 0: Fixed Decisions

These decisions are fixed for the first implementation and should not be re-litigated during development:

- Put implementation in a root-level `frontend/` directory.
- Keep planning docs in `app/`.
- Use React + TypeScript + Vite.
- Use CSS modules or plain CSS tokens first.
- Use Capacitor for Android.
- Use Tauri for desktop.
- Put content in root `content/`.
- Use Dexie/IndexedDB for MVP storage on web, Android, and desktop.
- Build one shared app, not separate web/native implementations.

Open design choices that may be decided during implementation:

- exact visual theme tokens,
- exact first exercise validator implementation for algebraic equivalence,
- whether to use plain CSS modules or Tailwind after the first prototype.

## Phase 1: App Shell

Deliverables:

- Vite React app.
- Routes.
- Responsive layout.
- Lithuanian UI.
- PWA manifest.
- Service worker.
- Offline fallback.

Routes:

- `/`
- `/onboarding`
- `/dashboard`
- `/grade/:grade`
- `/topic/:topicId`
- `/glossary`
- `/glossary/:conceptId`
- `/srs`
- `/practice/:topicId`
- `/test/:testId`
- `/settings`

## Phase 2: Content Pipeline

Deliverables:

- content schemas,
- content manifest,
- build-time validator,
- Grade 9 topic content files,
- glossary concept files,
- exercise set files.

Validation must catch broken links between:

- topics,
- concepts,
- formulas,
- exercises,
- SRS cards,
- prerequisites.

## Phase 3: MVP Learning Flow

Deliverables:

- onboarding with goal selection,
- Grade 9 dashboard,
- topic page,
- theory reader,
- clickable concept links,
- glossary drawer/page,
- concept add/remove SRS toggle.

## Phase 4: SRS

Deliverables:

- theory deck,
- practice deck,
- Again/Good review UI,
- due cards,
- local review history,
- scheduling algorithm,
- settings for enabled card types.

## Phase 5: Practice Engine

Deliverables:

- exercise renderer,
- multiple choice,
- numeric input,
- expression input placeholder,
- hints one by one,
- solution reveal,
- alternate solution methods,
- attempt scoring,
- mastery updates.

## Phase 6: Mastery and Recommendations

Deliverables:

- topic mastery score,
- concept mastery score,
- practice grid,
- weak concept list,
- recommended next action,
- achievement popup.

## Phase 7: Transfer Codes

Deliverables:

- export progress code,
- import progress code,
- validation,
- overwrite warning,
- version compatibility check.

Encoding approach:

1. JSON serialize progress.
2. Compress with a small library or browser CompressionStream.
3. Base64url encode.
4. Prefix with app marker and version.

Example:

```txt
NM-1-eyJ2ZXJzaW9uIjoiMS4wLjAi...
```

## Phase 8: Android and Desktop Proofs

Android:

- add Capacitor,
- configure app id,
- bundle assets,
- verify IndexedDB persistence in WebView,
- implement Android back button route handling,
- test offline launch.

Desktop:

- add Tauri,
- configure window,
- bundle assets,
- verify IndexedDB persistence in WebView,
- add keyboard navigation smoke test,
- test local storage and export/import.

## Phase 9: Content Scale-Up

After Grade 9 MVP:

1. complete Grade 9 curriculum,
2. add Grade 10,
3. add Grade 8 prerequisites,
4. add Grade 11-12 exam track,
5. add Grade 5-7 foundations,
6. add olympiad extensions by topic.

## Phase 10: Full Web Release

Deliverables:

- production deployment at `NoriuMokyti.lt`,
- complete PWA install support,
- offline cache strategy for selected content,
- full import/export roundtrip,
- browser compatibility pass,
- web full-release test from `FULL_COMPLETION_CRITERIA.md`.

## Phase 11: Full Android Release

Deliverables:

- Capacitor Android project,
- production Android app id,
- icon and splash screen,
- bundled starter content,
- offline cold launch,
- persistent local progress,
- Android back button route handling,
- Android full-release test from `FULL_COMPLETION_CRITERIA.md`.

## Phase 12: Full PC Desktop Release

Deliverables:

- Tauri desktop project,
- Windows-first build,
- bundled starter content,
- offline cold launch,
- persistent local progress,
- keyboard navigation smoke pass,
- resize/layout smoke pass,
- desktop full-release test from `FULL_COMPLETION_CRITERIA.md`.

## Phase 13: Cross-Platform Completion

Deliverables:

- same content version shipped on all platforms,
- same progress code format on all platforms,
- web-to-Android-to-desktop transfer test,
- final release gates passed,
- documentation updated with release commands and troubleshooting.

## Suggested Milestones

### Milestone 1

Static app shell with onboarding and dashboard.

### Milestone 2

Theory reader and glossary for Grade 9 functions.

### Milestone 3

SRS theory deck.

### Milestone 4

Practice engine and mastery scoring.

### Milestone 5

Offline PWA and transfer codes.

### Milestone 6

Android wrapper proof.

### Milestone 7

Desktop wrapper proof.

### Milestone 8

Full web release.

### Milestone 9

Full Android release.

### Milestone 10

Full PC desktop release.

### Milestone 11

Cross-platform completed app acceptance.
