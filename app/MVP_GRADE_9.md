# MVP Grade 9 Scope

## Starting Grade

Grade 9.

## Starting Topics

1. `Funkcijos ir ju savybes`
2. `Kvadratine funkcija`

These topics are good MVP targets because they require:

- theory,
- notation,
- graphs,
- formulas,
- concept links,
- exercises,
- mistakes,
- prerequisite detection,
- mastery tracking.

## MVP User Story

A Grade 9 student opens the app, chooses a goal, selects Grade 9, and starts with functions. The app recommends theory, gives clickable definitions, creates SRS cards, gives practice exercises, tracks mistakes, updates mastery, and recommends either more practice, a test, or a prerequisite review.

## MVP Screens

### Onboarding

The onboarding must be a full-window guided flow, not a dense form. A first-time student should never be dropped into a dashboard full of choices before the app has explained what is happening. If the user is instantly met with many controls, the app feels unresponsive or broken because it is not obvious that they must choose something before learning can begin.

Use a one-question-at-a-time flow:

1. welcome and promise,
2. choose learning goal,
3. choose grade,
4. choose confidence level,
5. choose daily time,
6. choose whether olympiad content should be visible,
7. choose whether to start with diagnostic recommendations,
8. explanation phase,
9. start recommended first topic.

The screen should feel like a focused setup conversation:

- one primary question per screen,
- large readable answer buttons,
- visible progress indicator,
- Back and Continue controls,
- default recommendation where helpful,
- no sidebar or dashboard navigation during onboarding,
- no unexplained settings.

Inputs collected across the flow:

- goal,
- grade,
- confidence,
- daily time,
- olympiad visibility,
- diagnostic yes/no.

Explanation phase after questions:

- explain that each topic starts with theory,
- explain that highlighted concepts open the glossary,
- explain that SRS reviews concepts, formulas, and mistakes,
- explain that practice uses correctness, speed, hints, and attempts,
- explain that hints help but reduce mastery gain,
- explain that progress stays local and can be moved with export/import codes.

Output:

- recommended start topic,
- initial dashboard.

Onboarding is complete only after the explanation phase. The final button should take the user directly to the recommended first topic, not to a blank or choice-heavy dashboard.

### Dashboard

Shows:

- current goal,
- current grade,
- due theory cards,
- due practice cards,
- recommended topic,
- weak concept,
- mastery summary,
- streak,
- achievements.

### Grade 9 Curriculum

Shows:

- topic map,
- prerequisites,
- progress,
- locked/unlocked is not required, but recommendations should guide order.

### Topic Page

Tabs or sections:

- Theory,
- Concepts,
- Examples,
- SRS,
- Practice,
- Test,
- Mastery.

### Theory Reader

Features:

- rich theory,
- clickable glossary terms,
- formula callouts,
- worked examples,
- common mistake callouts,
- add to SRS controls.

### Glossary

Features:

- searchable concepts,
- related concepts,
- theory links,
- exercise links,
- SRS toggle.

### SRS Review

Features:

- theory deck and practice deck,
- Again/Good buttons,
- card count,
- due now,
- completed session state.

### Practice

Features:

- exercise statement,
- answer input,
- submit,
- hint button,
- solution after attempt,
- alternate solution method where available,
- automatic scoring.

### Mastery

Features:

- topic mastery percentage,
- concept mastery,
- solved exercise grid,
- weak mistakes,
- next recommendation.

## Grade 9 Topic 1: Funkcijos ir ju savybes

Required theory:

- function as correspondence,
- domain,
- range,
- argument,
- value,
- graph,
- increasing/decreasing,
- zeros,
- sign intervals,
- extrema,
- function notation \(f(x)\),
- reading graph properties,
- transformations introduction.

Core concepts:

- funkcija,
- argumentas,
- funkcijos reiksme,
- apibrezimo sritis,
- reiksmiu sritis,
- grafikas,
- funkcijos nulis,
- didejimas,
- mazejimas,
- ekstremumas.

Exercise types:

- identify whether relation is a function,
- read \(f(a)\),
- find domain from graph,
- find zeros from graph,
- determine increasing/decreasing intervals,
- match formula to graph,
- interpret real-world function.

Common mistakes:

- confusing \(x\) with \(f(x)\),
- reading graph axes incorrectly,
- treating every relation as function,
- forgetting domain restrictions,
- saying function increases when only values are positive.

## Grade 9 Topic 2: Kvadratine funkcija

Required theory:

- \(f(x)=ax^2+bx+c\),
- parabola,
- direction by sign of \(a\),
- vertex,
- axis of symmetry,
- zeros,
- discriminant link,
- intercepts,
- vertex form,
- factored form,
- graph transformations,
- maximum/minimum.

Core concepts:

- kvadratine funkcija,
- parabole,
- virsune,
- simetrijos asis,
- diskriminantas,
- saknys,
- minimumas,
- maksimumas,
- koeficientas.

Exercise types:

- determine opening direction,
- compute vertex,
- find zeros,
- sketch graph,
- match formula and parabola,
- convert forms,
- solve contextual maximum/minimum problem.

Common mistakes:

- wrong vertex formula sign,
- confusing zeros and y-intercept,
- ignoring sign of \(a\),
- assuming every quadratic has two real zeros,
- graphing without checking scale.

## MVP Content Counts

Minimum for prototype:

- 2 topics,
- 30 glossary concepts,
- 20 formula/method cards,
- 20 common mistake cards,
- 80 exercises,
- 2 topic tests,
- 1 diagnostic test.

Better first public beta:

- 2 topics,
- 50 glossary concepts,
- 40 formula/method cards,
- 40 mistake cards,
- 250 exercises,
- 8 topic tests,
- 3 diagnostics,
- 20 olympiad extension exercises.

## MVP Definition of Done

The MVP is usable when a student can:

1. complete full-window onboarding one question at a time,
2. understand the explanation phase before seeing the main app,
3. start directly on the recommended Grade 9 functions topic,
4. read theory,
5. click concepts into glossary,
6. add concepts to SRS,
7. review with Again/Good,
8. solve exercises with hints,
9. see mastery update,
10. receive a recommendation,
11. export progress,
12. reload offline and continue.
