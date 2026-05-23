# Web Phone Accessibility And Responsive Implementation Guide

This is the canonical implementation guide for making the web/PWA version of `NoriuMokytis.lt` usable on phones.

Phone support is not a later Android-only concern. The website itself must work as a first-class learning app on narrow touch screens.

## Core Goal

A student must be able to open the website on a phone and complete the full learning loop without zooming, clipped text, hidden actions, or horizontal page scrolling:

1. complete onboarding,
2. use dashboard recommendations,
3. open `Teorija`,
4. open `Praktika`,
5. read theory,
6. solve practice,
7. review SRS,
8. use `Žodynas`,
9. run diagnostics,
10. change settings or export/import progress.

## Required Viewports

Every phone implementation pass must verify these viewport sizes:

- `360x740` - smallest supported practical phone width,
- `390x844` - common modern phone,
- `430x932` - large phone,
- `768x1024` - tablet portrait,
- `1024x768` - tablet landscape,
- desktop wide.

The app must be usable at `360px` width.

## Non-Negotiable Rules

At phone widths:

- no whole-page horizontal scroll,
- no clipped card text,
- no clipped button text,
- no clipped page title,
- no card squeezed into a thin unreadable vertical strip,
- no layout that depends on hover,
- no desktop sidebar consuming the phone viewport,
- no primary action hidden behind bottom navigation,
- no practice answer input hidden or unreachable,
- no math formula causing the entire page to overflow sideways.

Long formulas may scroll horizontally inside their own math container only.

## Layout Foundations

Use mobile-safe layout as a system, not scattered one-off fixes.

Recommended global behavior:

- `html`, `body`, and the app root should use `max-width: 100%` and avoid horizontal overflow,
- every major grid/flex child that contains text should allow shrinking with `min-width: 0`,
- cards, panels, inputs, selects, textareas, buttons, and math containers should use `max-width: 100%`,
- phone page padding should usually be `12px` to `16px`,
- phone card padding should usually be `14px` to `18px`,
- use one-column layout by default on phones,
- use two columns on phones only when the content is short and verified,
- avoid fixed pixel widths in learning content,
- avoid viewport-width font scaling for ordinary text,
- use breakpoint-based font sizes.

Safe card grid pattern:

```css
grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
```

Avoid grids that force three or four columns on phones.

## Mobile Navigation

Desktop and wide tablet may keep the left sidebar.

Phone widths should use mobile navigation:

- hide the full desktop sidebar,
- show fixed bottom navigation,
- provide main destinations:
  - `Apžvalga`,
  - `Teorija`,
  - `Praktika`,
  - `SRS`,
  - `Daugiau`.

`Daugiau` should open a bottom sheet or drawer containing:

- `Diagnostika`,
- `Testai`,
- `Žodynas`,
- `Nustatymai`,
- olympiad quick links if useful.

The bottom navigation must not cover content. Main content needs bottom padding that accounts for nav height and `env(safe-area-inset-bottom)`.

## Known Cut-Off Patterns To Fix

These exact failure patterns must be treated as bugs.

### Dashboard Metric Cards

Metric cards like `SRS šiandien`, `Išspręsta`, `Bendras lygis`, and `20 min. planas` must not be forced into four narrow phone columns.

Required behavior:

- use one-column or two-column layout on phone,
- keep labels readable,
- keep numeric values like `0%` together,
- keep the daily plan readable,
- do not let cards become tall narrow strips.

### Settings Cards

Cards like `Turinys` and `Sesija` must not become thin vertical strips.

Required behavior:

- stack settings cards one per row on narrow screens,
- preserve a normal reading width,
- let explanatory text wrap naturally,
- ensure destructive buttons like `Ištrinti vietinį progresą` fit without clipping.

### Practice And Olympiad Pages

Long practice pages must not crop content.

Required behavior:

- long titles wrap naturally,
- topic pills become block cards when they do not fit,
- problem statements wrap or scroll only inside their own container,
- SRS seed cards stack one-column,
- recommendation cards stack one-column,
- similar exercise cards never create horizontal overflow,
- buttons like `Tikrinti`, `Rodyti sprendimą`, `Pakartoti`, and `Moku gerai` remain visible and tappable.

### Cards And Buttons

Any card footer with actions must adapt:

- stack buttons vertically if labels do not fit,
- use two equal columns only when both labels fit,
- allow button text to wrap,
- avoid `width: fit-content` for primary phone actions,
- avoid `white-space: nowrap` for learner-facing labels unless the container is guaranteed to fit.

## Page Requirements

### Onboarding

- full-window onboarding must fit phone height,
- choices stack cleanly,
- progress remains visible,
- explanations are readable,
- primary/secondary actions stay reachable.

### Dashboard

Phone order:

1. current hero or next action,
2. quick stats,
3. `Aktualios temos`,
4. grade/program progress,
5. achievements.

`Aktualios temos` cards must be one-column on phone. Topic action buttons should stack or use two equal columns only when labels fit.

### Teorija And Praktika Libraries

Phone layout:

- full-width `Mokyklinis` / `Olimpiadinis` segmented control,
- full-width search input,
- collapsed `Filtrai` button,
- filter sheet for grade, discipline, and olympiad difficulty,
- one-column topic cards,
- large readable topic title,
- short description,
- wrapping badges,
- full-width primary action.

Recommended topics appear first only when they exist.

### Topic Theory

Topic header actions stack on phone:

- `Spręsti uždavinius`,
- `Testai`,
- `Pažymėti teoriją kaip skaitytą`,
- `Pridėti prie aktualių temų`.

Concept chips wrap. Formulas, examples, and KaTeX blocks must not cause page overflow.

### Practice

Topic practice selection:

- difficulty controls fit without horizontal scroll,
- filters open in a phone-safe sheet or stacked controls,
- exercise cards are one-column,
- exercise previews wrap,
- `Spręsti` buttons remain visible,
- solved status, tags, and estimated time do not clip,
- exact exercise selection is possible without zooming.

Standard practice:

- problem statement full width,
- answer input full width,
- multiple-choice answers as full-width rows,
- visible `Tikrinti` button,
- hints one by one,
- readable solution reveal.

Olympiad practice:

- metadata badges wrap,
- prerequisite checklist and first observation stack,
- scratchpad full width,
- hint navigation touch-friendly,
- solution steps as vertical cards,
- common mistakes, reflections, recommendations, and similar problems stack one-column.

### SRS

- card front/back fit phone width,
- answer side readable without zoom,
- `Pakartoti` and `Moku gerai` stack if they do not fit side by side.

### Diagnostic

- status cards stack,
- question text full width,
- answer choices full-width touch rows,
- confidence buttons fit or stack,
- pause/resume easy to reach.

### Žodynas

- start with searchable concept list on phone,
- selected concept opens detail view,
- provide `Atgal į žodyną`,
- related links and SRS actions stack,
- long definitions and formulas remain readable.

### Tests

- test cards one-column,
- active question full width,
- choices full-width,
- result summary stacked.

### Settings

- settings panels stack,
- tabs become compact segmented controls or stacked buttons,
- export/import textarea full width,
- reset/destructive area separated and readable.

## Accessibility Requirements

Phone responsiveness must include accessibility:

- touch targets at least `44px`,
- visible focus states,
- keyboard access for all controls,
- accessible names for inputs and icon buttons,
- meaningful heading order,
- sufficient color contrast,
- no hover-only information,
- drawer or bottom sheet has visible close button,
- Escape closes drawer/sheet where keyboard is available,
- focus returns after drawer/sheet close.

## Verification Checklist

At `390px` width, verify:

1. onboarding can be completed,
2. dashboard works with empty `Aktualios temos`,
3. dashboard works with non-empty `Aktualios temos`,
4. dashboard metric cards do not squeeze or clip,
5. topic can be added from theory detail,
6. `Teorija` search and filters work,
7. `Praktika` search and filters work,
8. standard practice answer can be submitted,
9. olympiad practice hints and solution reveal work,
10. SRS card review works,
11. diagnostic answer, pause, and resume work,
12. `Žodynas` list and concept detail work,
13. settings export/import/reset layout is readable.

For every checked page:

- no whole-page horizontal scroll,
- no clipped text,
- no clipped button label,
- primary actions reachable by touch,
- bottom navigation does not cover content,
- formulas scroll internally if needed.

## Release Gate

The web app does not pass the mobile layout gate until:

- all required viewports are checked,
- the verification checklist passes,
- the known cut-off cases are fixed,
- screenshots or Playwright traces exist for phone, tablet, and desktop widths,
- `npm --prefix frontend test` passes,
- `npm --prefix frontend run build` passes.

If CSS cannot make a page phone-safe, restructure the component. Do not hide important learning content merely to make the layout fit.
