# Full Completion Criteria

This file defines what it means for the app to be fully completed across web, Android, and PC desktop.

The app is complete only when all required product systems, content systems, learning systems, and platform packages are implemented and accepted. A partial web-only build is not a completed app.

## Completion Summary

The completed product must include:

- full curriculum content for grades 5-12,
- clearly separated olympiad extension content,
- theory for every topic,
- clickable glossary concepts across theory and exercises,
- concept, formula, and mistake SRS,
- practice SRS,
- exercise engine,
- topic tests,
- grade tests,
- mastery tracking,
- recommendations,
- local achievements,
- offline storage,
- progress export/import codes,
- web/PWA release,
- Android release,
- PC desktop release.

## Product Completion

The product is complete when a student can:

1. install or open the app on any supported platform,
2. use the app in Lithuanian,
3. choose a learning goal,
4. choose any grade from 5 to 12,
5. follow the official curriculum topic map,
6. learn a topic from theory,
7. click concepts into glossary entries,
8. add or remove SRS card types,
9. review theory cards,
10. solve practice exercises,
11. request hints one by one,
12. view full solutions,
13. explore alternate solution methods where available,
14. take topic tests,
15. take grade tests,
16. see mastery change from learning activity,
17. receive recommendations,
18. export progress,
19. import progress on another installation,
20. keep learning offline.

## Content Completion

The curriculum content is complete when every official grade 5-12 topic has:

- unique topic id,
- grade,
- strand,
- curriculum reference,
- prerequisite topics,
- theory sections,
- clickable glossary links,
- concept definitions,
- formulas where relevant,
- worked examples,
- common mistakes,
- SRS card seeds,
- exercise sets,
- topic test coverage,
- mastery mapping,
- recommendation metadata.

The olympiad content is complete when:

- each olympiad topic is marked as extension content,
- olympiad content never blocks ordinary curriculum mastery,
- olympiad exercises have higher difficulty tags,
- olympiad theory lists required prerequisites,
- olympiad progress is tracked separately from curriculum progress.

## Exercise Completion

The exercise system is complete when it supports:

- multiple choice,
- numeric input,
- expression input,
- ordered steps,
- matching,
- graph interpretation,
- formula selection,
- next-step selection,
- structured reasoning.

Every exercise must include:

- answer validator,
- difficulty,
- topic id,
- concept ids,
- formula ids where relevant,
- mistake tags,
- estimated time,
- hints,
- solution,
- scoring metadata.

The app must handle wrong answers by:

- recording the attempt,
- tagging likely mistakes where possible,
- updating mastery,
- updating practice SRS,
- recommending review when needed.

## Learning System Completion

The learning system is complete when these systems work together:

- onboarding,
- diagnostic recommendations,
- theory SRS,
- practice SRS,
- exercise scoring,
- topic mastery,
- concept mastery,
- grade mastery,
- weak-concept detection,
- prerequisite recommendations,
- achievement popups.

SRS completion means:

- theory cards use only `Vel` and `Gerai`,
- practice cards are scheduled automatically,
- users can customize whether concepts, formulas, mistakes, and methods enter SRS,
- SRS due counts are shown on dashboard,
- SRS state survives app restart and export/import.

Mastery completion means:

- each topic has a visible mastery score,
- each concept has a mastery/confidence score,
- tests influence mastery more than ordinary practice,
- hint use reduces mastery gain,
- repeated mistakes reduce confidence,
- old weak concepts can recover through review and successful practice.

## Web/PWA Full Release Criteria

The web app is complete when:

1. it is deployed at `NoriuMokytis.lt`,
2. it loads on current Chrome, Edge, Firefox, and Safari,
3. it works on desktop and mobile browser widths,
4. it has a valid PWA manifest,
5. it can be installed from supported browsers,
6. service worker caches the app shell,
7. selected content works offline after first load/cache,
8. IndexedDB progress persists across reloads,
9. export/import codes work,
10. all core learning flows work without login,
11. no learning feature requires a backend.

Web full-release test:

1. clear browser data,
2. open the production URL,
3. complete onboarding,
4. download/cache selected curriculum and diagnostic content,
5. open a topic,
6. review SRS,
7. solve exercises,
8. export progress,
9. switch browser offline,
10. reload,
11. verify app shell, topic content, progress, SRS, and mastery still work.

## Android Full Release Criteria

The Android app is complete when:

1. it is packaged with Capacitor,
2. it uses the same web app build,
3. it has Android app id, icon, splash screen, and app name,
4. it launches offline from cold start,
5. curriculum and diagnostic content is bundled,
6. local progress persists after force close and device restart,
7. Android back button follows route history,
8. export/import codes work,
9. phone layout is polished,
10. tablet layout is usable,
11. no native-only learning logic exists.

Android full-release test:

1. install fresh build on emulator or real device,
2. disable network,
3. launch app,
4. complete onboarding,
5. open bundled starter topic,
6. solve exercise,
7. review SRS card,
8. close app fully,
9. reopen app,
10. verify progress persists,
11. export progress code,
12. import it into a fresh install.

## PC Desktop Full Release Criteria

The PC app is complete when:

1. it is packaged with Tauri,
2. it uses the same web app build,
3. it launches offline from cold start,
4. curriculum and diagnostic content is bundled,
5. local progress persists after app close and OS restart,
6. export/import codes work,
7. keyboard navigation covers core flows,
8. desktop window resizing remains usable,
9. no desktop-only learning logic exists,
10. installer or portable build is produced for Windows first.

Desktop full-release test:

1. install or unpack fresh desktop build,
2. disable network,
3. launch app,
4. complete onboarding,
5. open bundled starter topic,
6. solve exercise,
7. review SRS card,
8. close app,
9. reopen app,
10. verify progress persists,
11. resize window from narrow to wide,
12. verify layout remains usable,
13. export and import progress code.

## Cross-Platform Completion

Cross-platform completion requires:

- the same content version on web, Android, and desktop,
- the same progress export/import format on all platforms,
- the same mastery and SRS results for the same user actions,
- the same route-level learning flows,
- no platform-only curriculum differences.

Cross-platform transfer test:

1. create progress on web,
2. export code,
3. import code on Android,
4. continue the same topic,
5. export code from Android,
6. import code on desktop,
7. verify mastery, SRS due cards, achievements, and exercise history match.

## Release Gates

The app cannot be called fully completed until all gates pass:

- content validation gate,
- unit test gate,
- browser E2E gate,
- offline web gate,
- Android offline gate,
- desktop offline gate,
- export/import roundtrip gate,
- accessibility smoke gate,
- mobile layout gate,
- desktop layout gate.

## Definition of Done

The app is fully done when a Lithuanian student can use the same free offline math learning product on web, Android, and PC desktop, learn any curriculum topic from grades 5-12, practice and test mastery, review concepts through SRS, transfer progress by code, and continue without accounts or network access.



> **Language Constraint:** All the content on the app must be strictly in Lithuanian. No other language should be visible in the production app.
