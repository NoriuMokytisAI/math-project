# Platform Targets

This document defines exactly how the app should behave on web, Android, and desktop.

## Shared Core

All platforms use the same:

- React + TypeScript app,
- route structure,
- content schemas,
- content files,
- learning engine,
- SRS scheduler,
- exercise validator,
- mastery model,
- recommendation logic,
- storage interface,
- import/export format.

The platform wrappers are delivery shells, not separate products.

## Web / PWA Target

### Purpose

The web app is the first public product and the canonical development target.

### Hosting

- Host as a static build at `NoriuMokyti.lt`.
- No required backend for learning.
- GitHub-based deployment is preferred.

### Required Features

- responsive desktop/mobile layout,
- PWA manifest,
- installable browser app,
- service worker,
- offline app shell,
- cached starter content,
- IndexedDB progress storage,
- export/import progress codes,
- no login.

### Offline Acceptance Criteria

The web/PWA target passes offline acceptance when:

1. user opens the app online once,
2. user completes onboarding,
3. user opens a Grade 9 topic,
4. user reviews at least one SRS card,
5. user solves at least one exercise,
6. browser is switched offline,
7. app reloads successfully,
8. same topic, progress, SRS queue, and exercise history are still available.

## Android Target

### Purpose

Android is the first native packaging priority.

### Technology

- Capacitor.
- Wrap the same web build.
- Do not create a separate native Android UI.

### Required Features

- offline cold launch,
- bundled starter content,
- local progress persistence,
- Android back button behavior,
- export/import code support,
- responsive phone layout,
- tablet layout must remain usable.

### Storage

MVP storage:

- use the same IndexedDB/Dexie storage layer inside the Capacitor WebView.

Fallback storage:

- add Capacitor Preferences or SQLite only if IndexedDB is unreliable for app-size/content-size reasons.

### Android Acceptance Criteria

The Android target passes acceptance when:

1. app installs on an Android device or emulator,
2. app launches with no network,
3. Grade 9 starter content opens,
4. progress persists after app close/reopen,
5. Android back button returns to the previous route instead of closing unexpectedly,
6. export/import code works.

## Desktop Target

### Purpose

Desktop is for students who want a PC app with the same offline experience.

### Technology

- Tauri is the first desktop target.
- Electron is not part of the initial implementation.
- Electron may be reconsidered only if Tauri blocks a required feature.

### Required Features

- offline cold launch,
- bundled starter content,
- local progress persistence,
- export/import progress codes,
- optional export/import progress file later,
- responsive desktop layout,
- keyboard-friendly navigation.

### Storage

MVP storage:

- use the same IndexedDB/Dexie storage layer inside the Tauri WebView.

Fallback storage:

- add Tauri filesystem or SQLite adapter only if IndexedDB is unreliable.

### Desktop Acceptance Criteria

The desktop target passes acceptance when:

1. app installs or runs as a desktop build,
2. app launches with no network,
3. Grade 9 starter content opens,
4. progress persists after close/reopen,
5. export/import code works,
6. keyboard navigation covers main learning flows.

## Cross-Platform Release Order

1. Web MVP.
2. Web beta with real Grade 9 content.
3. Android proof build.
4. Desktop proof build.
5. Android beta.
6. Desktop beta.
7. Web full release.
8. Android full release.
9. PC desktop full release.

Do not delay the web MVP for native packaging, but do not make architectural choices that prevent native packaging.

## Full Platform Completion

The proof and beta stages are not the finished product.

For final completion, each target must satisfy the detailed release criteria in `FULL_COMPLETION_CRITERIA.md`:

- Web/PWA full release criteria,
- Android full release criteria,
- PC desktop full release criteria,
- cross-platform transfer test,
- shared content/version consistency.

No platform is complete if it has a different learning engine, different content model, different SRS logic, or different mastery logic from the shared core app.
