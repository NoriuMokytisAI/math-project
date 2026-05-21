# Technical Architecture

## Recommended Stack

Core:

- React
- TypeScript
- Vite
- React Router
- Dexie for IndexedDB
- KaTeX for math rendering
- Zod for content validation
- Vitest for unit tests
- Playwright for end-to-end tests

Styling:

- CSS modules or Tailwind
- mobile-first responsive layout
- design tokens in CSS variables

Packaging:

- PWA for web installability and offline use
- Capacitor for Android
- Tauri for desktop

Electron is not part of the initial implementation. It may be reconsidered only if Tauri blocks a required feature.

## Repository Layout

Recommended app structure:

```txt
app/
  README.md
  PRODUCT_SPEC.md
  TECHNICAL_ARCHITECTURE.md
  CONTENT_MODEL.md
  LEARNING_SYSTEMS.md
  IMPLEMENTATION_PLAN.md
  CDM_IMPLEMENTATION_GUIDE.md

frontend/
  package.json
  index.html
  vite.config.ts
  src/
    app/
    components/
    content/
    features/
    routes/
    storage/
    systems/
    styles/
    utils/
  public/
    manifest.webmanifest
    icons/
    service-worker.js

content/
  curriculum/
  glossary/
  exercises/
  olympiad/
  tests/
```

This is a fixed decision: the production app code goes in the root-level `frontend/` directory. This `app/` directory remains the planning/specification area.

## Runtime Architecture

The app should have four main layers:

1. **Content layer**
   - static JSON/Markdown-like content
   - curriculum topics
   - glossary entries
   - exercises
   - tests

2. **Learning engine**
   - SRS scheduling
   - exercise scoring
   - mastery model
   - diagnostics
   - recommendation engine

3. **Storage layer**
   - IndexedDB in browser/PWA
   - same Dexie/IndexedDB implementation inside Android and desktop WebViews by default
   - optional native adapters only if IndexedDB proves insufficient
   - import/export serialization

4. **UI layer**
   - onboarding
   - dashboard
   - theory reader
   - glossary
   - SRS review
   - practice
   - tests
   - mastery
   - settings

## Offline Strategy

Everything needed for the app should be local:

- app shell,
- content files,
- exercises,
- diagrams,
- progress,
- SRS queues,
- achievements.

PWA service worker should cache:

- HTML shell,
- JS/CSS bundles,
- icons,
- content manifest,
- selected curriculum and diagnostic content,
- common glossary entries.

Large full-grade content can be lazy-loaded and cached after first use on web.

For Android/desktop, bundle curriculum and diagnostic content directly with the app so the app can launch and teach offline from a cold start.

## Storage Model

Use IndexedDB through Dexie and a storage abstraction. The abstraction exists so Android or desktop can later swap in a native adapter, but IndexedDB is the default storage layer everywhere.

Main stores:

- `profile`
- `settings`
- `topicProgress`
- `exerciseAttempts`
- `srsCards`
- `srsReviews`
- `mastery`
- `achievements`
- `contentVersions`

All storage writes should be local and deterministic.

## Content Validation

All content JSON should be validated at build time.

Use Zod or JSON Schema to catch:

- missing topic ids,
- invalid prerequisite links,
- glossary links to missing concepts,
- exercise answers without validators,
- hints without order,
- SRS cards without concept ids,
- curriculum references without grade/topic mapping.

Build should fail if content graph references are broken.

## Math Rendering

Use KaTeX for inline and display math.

Content convention:

- inline math: `$...$`
- block math: `$$...$$`

The content compiler should normalize math before rendering.

## Graphs and Diagrams

Production baseline:

- SVG-based function graphs,
- simple reusable coordinate grid component,
- static diagram definitions in content JSON.

Advanced interactions:

- interactive graph exploration,
- draggable points,
- transformations,
- parabola parameter sliders.

No external online graph service should be required.

## No Runtime AI

The app should not call AI APIs or include AI chat. AI may be used outside the app by the maintainer to generate or review content, but all shipped app content should be static and versioned in GitHub.

## Security and Privacy

- No login.
- No server user data.
- No tracking.
- No analytics by default.
- No cloud sync.
- No network dependency for learning.

If anonymous analytics are ever considered, they must be optional and disabled by default.

## Cross-Platform Plan

### Web/PWA

- host static build at `NoriuMokytis.lt`
- installable from browser
- works offline after first load

### Android

- wrap web app with Capacitor
- local content bundled in app assets
- Dexie/IndexedDB storage in the Capacitor WebView by default
- Capacitor storage adapter only if needed later
- Android back button support
- offline launch

### Desktop

- wrap web app with Tauri
- local content bundled
- Dexie/IndexedDB storage in the Tauri WebView by default
- export/import progress files and codes
- offline launch

## Testing

Unit tests:

- SRS scheduler
- exercise answer checking
- mastery scoring
- import/export
- content schema validation

Integration tests:

- onboarding to topic flow
- theory click to glossary
- SRS review
- practice with hint and solution
- export/import roundtrip

Visual checks:

- desktop viewport
- mobile viewport
- offline reload


> **Language Constraint:** All the content on the app must be strictly in Lithuanian. No other language should be visible in the production app.
