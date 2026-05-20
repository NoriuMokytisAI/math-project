# Canonical App Requirements

This file is the highest-level requirements source. If another document is unclear, interpret it according to this file.

## Product Identity

- Product name: `NoriuMokyti.lt`
- Language: Lithuanian only for the initial product.
- Audience: independent students in grades 5-12.
- Subject: mathematics aligned to the official Lithuanian curriculum.
- Extension track: olympiad-level mathematics, clearly marked as additional content.

## Hard Requirements

The app must:

- work offline after installation or first full web load,
- require no login,
- require no account,
- include no runtime AI features,
- include no paid features,
- store progress locally,
- allow progress transfer through export/import codes,
- be usable on web, Android, and desktop,
- use the same core app and content model on every platform,
- use GitHub as the content and code integration workflow,
- separate official curriculum content from olympiad extension content,
- support Lithuanian math notation and KaTeX-rendered formulas,
- support topic theory, glossary concepts, SRS, exercises, tests, mastery, achievements, and recommendations.

The app must not:

- require networking for learning,
- require teacher-student connections,
- include leaderboards,
- include social features,
- upload student progress by default,
- generate exercises at runtime with AI,
- hide content behind payment or accounts.

## Platform Requirements

There is one product with three package targets:

1. Web/PWA
2. Android
3. Desktop

The implementation must not fork into three separate apps. Platform wrappers may provide shell-level behavior only.

Allowed platform-specific code:

- install/update shell,
- filesystem export/import where available,
- Android back button handling,
- desktop window/menu behavior,
- platform storage adapter if absolutely needed,
- packaging configuration.

Not allowed as platform-specific forks:

- different learning logic,
- different content schemas,
- different SRS algorithm,
- different mastery algorithm,
- different exercise validation rules,
- different curriculum navigation.

## Content Requirements

Every official topic must have:

- grade,
- strand,
- curriculum reference,
- prerequisites,
- theory,
- concepts,
- formulas where relevant,
- examples,
- common mistakes,
- exercises,
- SRS seeds,
- tests or test eligibility,
- mastery mapping.

Every glossary concept must be linkable from:

- theory,
- formulas,
- exercises,
- mistakes,
- related concepts.

Every exercise must have:

- topic id,
- concept ids,
- difficulty,
- answer validator,
- hints,
- solution,
- scoring metadata.

## Offline Requirements

Web/PWA:

- first visit may require network,
- after content is cached, selected grades/topics must work offline,
- app shell must load offline,
- progress must persist offline.

Android:

- app must launch offline from cold start,
- bundled curriculum and diagnostic content must be available offline immediately,
- progress must persist locally.

Desktop:

- app must launch offline from cold start,
- bundled curriculum and diagnostic content must be available offline immediately,
- progress must persist locally.

## Privacy Requirements

- No account.
- No required personal data.
- No cloud sync.
- No default analytics.
- No advertising.
- No tracking.
- Export codes are user-controlled and local.

## Production Scope Requirements

The implementation target is the completed product, not a temporary grade-limited slice.

The production app must include:

- diagnostic-first start flow,
- cognitive diagnosis model placement,
- automatically generated learning paths,
- complete grades 5-12 curriculum coverage,
- olympiad extensions as clearly marked additional content,
- theory reader,
- clickable glossary terms,
- theory SRS deck,
- practice deck,
- exercise renderer,
- hints one by one for practice,
- no teaching hints during diagnostic items,
- mastery scoring,
- recommendations,
- local progress,
- export/import code,
- offline behavior on web/PWA, Android, and desktop.

Android and desktop are first-class production targets. They must use the same shared app, content, learning logic, and progress format as the web/PWA target.

## Full Completion Requirements

The completed app must be released and accepted on:

- Web/PWA,
- Android,
- PC desktop.

Completion requires more than platform proof builds. Each platform must pass the full-release criteria in `FULL_COMPLETION_CRITERIA.md`.

The final app must include the complete grade 5-12 curriculum, olympiad extensions, full local progress, SRS, practice, tests, mastery, recommendations, achievements, diagnostic learning-path generation, and transfer codes on every platform.
