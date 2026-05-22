# Canonical App Requirements

This file is the highest-level requirements source. If another document is unclear, interpret it according to this file.

## Product Identity

- Product name: `NoriuMokytis.lt`
- Language: Strictly Lithuanian. All the content on the app must be in Lithuanian. No other language should be visible in the production app.
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
- be usable on phone web widths down to `360px`,
- use the same core app and content model on every platform,
- use GitHub as the content and code integration workflow,
- separate official curriculum content from olympiad extension content,
- support Lithuanian math notation and KaTeX-rendered formulas,
- support topic theory, glossary concepts, SRS, exercises, tests, mastery, achievements, and recommendations,
- support an `Aktualios temos` dashboard list backed by local topic ids,
- support three goal-based app modes with different home pages:
  - olympiad strengthening,
  - topic or exam preparation,
  - full course with diagnostic.

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

- goal-based start flow,
- three mode-specific home pages,
- phone-safe web layout that satisfies `WEB_PHONE_ACCESSIBILITY.md`,
- cognitive diagnosis model placement,
- automatically generated learning paths,
- dashboard `Aktualios temos` as the focused current-topic list,
- searchable card-library pages for `Teorija` and `Praktika`,
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

## Web Phone Requirements

The web/PWA app must satisfy `WEB_PHONE_ACCESSIBILITY.md`.

Minimum requirements:

- no whole-page horizontal scroll at `360px`,
- no clipped text in cards, buttons, page titles, settings panels, problem statements, SRS cards, or recommendations,
- no dashboard metric cards squeezed into unreadable vertical columns,
- no settings cards squeezed into thin vertical strips,
- usable `Teorija` and `Praktika` search/filter/card layouts on phones,
- readable and actionable standard and olympiad practice pages on phones,
- touch targets at least `44px`,
- mobile navigation must not cover learning content.

The web/PWA target is not complete until the phone viewport checklist in `WEB_PHONE_ACCESSIBILITY.md` passes.

## Goal Mode Requirements

The app has three starting modes selected during onboarding. These states change the home page and recommendation strategy, but not the shared learning systems. The app must explain the effect of each choice during onboarding. The student must be able to change mode later in Settings without losing progress.

### Olympiad Strengthening Mode

Selected by: `Noriu sustiprinti matematiką`

Requirements:

- put the user into olympiad-level mathematics by default,
- ask for a starting grade band,
- use the grade band only for initial difficulty and recommendation ordering,
- allow free access to higher and lower grade content,
- prioritize olympiad extension tracks and hard problem sets,
- surface official curriculum prerequisites only when they block progress,
- make alternative solution methods and proof-style reasoning prominent,
- keep the diagnostic optional as a prerequisite-gap check.

### Topic or Exam Preparation Mode

Selected by: `Ruošiuosi kontroliniui arba egzaminui`

Requirements:

- ask the user whether they are preparing for `Kontrolinis`, `PUPP`, or `VBE`,
- for `Kontrolinis`, ask the user to choose the specific topic they want to learn,
- add the selected topic to `Aktualios temos`,
- for `PUPP` or `VBE`, make diagnostic the primary recommended action and topic selection the secondary action,
- make the selected topic the main dashboard focus,
- prioritize concise theory, worked examples, practice, mistakes, and topic tests,
- offer prerequisite checks when the selected topic depends on earlier material,
- keep the diagnostic optional unless the user asks for full placement.

## Aktualios Temos and Topic Browsing Requirements

The dashboard must show **Aktualios temos** where broad `Temos pagal ugdymo sritis` browsing would otherwise appear. This section is a focused list, not the full curriculum browser.

Requirements:

- store relevant topic ids in local progress,
- add the onboarding-selected topic when topic/exam preparation creates a concrete topic target,
- allow adding a topic from the individual theory topic page with `Pridėti prie aktualių temų`,
- prevent duplicate topic entries,
- show an already-added state such as `Jau aktualiose temose`,
- do not automatically add diagnostic recommendations to this list,
- show a useful empty state if no topics have been added.

The full curriculum and olympiad browsing experience belongs in `Teorija` and `Praktika`.

Both `Teorija` and `Praktika` must have card-library index pages when opened without a topic id:

- top search/filter box,
- `Mokyklinis` / `Olimpiadinis` toggle,
- search input,
- grade or grade-band filter defaulting to onboarding,
- discipline/strand filter,
- olympiad difficulty filter,
- recommended cards first,
- all other matching cards below.

The default content toggle must come from onboarding mode: olympiad mode defaults to `Olimpiadinis`; other modes default to `Mokyklinis`.

### Full Course With Diagnostic Mode

Selected by: `Nežinau nuo ko pradėti`

Requirements:

- make the full diagnostic test the recommended first action,
- explain that the diagnostic is long, resumable, and used to build the course plan,
- generate the learning path from diagnostic evidence,
- show full-course progress and prerequisite repair on the home page,
- unlock olympiad extensions only after standard prerequisites are strong enough.

## Full Completion Requirements

The completed app must be released and accepted on:

- Web/PWA,
- Android,
- PC desktop.

Completion requires more than platform proof builds. Each platform must pass the full-release criteria in `FULL_COMPLETION_CRITERIA.md`.

The final app must include the complete grade 5-12 curriculum, olympiad extensions, full local progress, SRS, practice, tests, mastery, recommendations, achievements, diagnostic learning-path generation, and transfer codes on every platform.
