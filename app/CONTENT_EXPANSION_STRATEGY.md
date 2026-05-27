# Content Expansion Strategy

This document explains how to keep adding learning content beyond the minimum required amount.

Use `CONTENT_AUTHORING_GUIDE.md` for the exact JSON schema. Use this file for content planning: what to add next, how much to add, what to prioritize, and how to avoid forgetting a topic.

The goal is not to create a fixed textbook and stop. The goal is to build a growing Lithuanian mathematics learning library where every official topic becomes deeper, more connected, better tested, and better supported by practice over time.

## Core Principle

Minimum content makes a topic available.

Expanded content makes a topic learnable.

Excellent content makes a topic hard to forget.

Every content pass should improve at least one of these:

- curriculum coverage,
- prerequisite clarity,
- theory depth,
- concept glossary quality,
- worked examples,
- exercise variety,
- mistake coverage,
- SRS seeds,
- diagnostic usefulness,
- test quality,
- olympiad extension depth.

## Content Coverage Layers

Think in layers. Do not jump straight to thousands of random exercises while theory, mistakes, or prerequisite links are weak.

### Layer 1: Minimum Viable Topic

Every official curriculum topic must have:

- topic metadata,
- source reference,
- prerequisite topic ids,
- theory sections,
- concept definitions,
- formulas where relevant,
- worked examples,
- common mistakes,
- basic exercises,
- at least one topic test,
- SRS seeds.

This is the minimum needed for the app to show a complete topic.

Minimum content is not the same as production quality. A topic with only a few paragraphs of theory should remain marked as incomplete even if it has exercises. Production-ready topics must also satisfy the display and depth requirements in `CONTENT_DISPLAY_AND_DEPTH_REQUIREMENTS.md`.

### Layer 2: Reliable Independent Learning

After the minimum exists, strengthen the topic so a student can learn alone:

- add more theory explanations for confusing transitions,
- add multiple representations: verbal, symbolic, numeric, graphical, table-based,
- add examples from easy to hard,
- add common incorrect solutions and corrections,
- add prerequisite reminders,
- add exercises for each subskill,
- add short tests that isolate one idea,
- add mixed tests that combine ideas.

### Layer 3: Mastery And Retention

After the topic is understandable, strengthen long-term learning:

- add SRS cards for definitions,
- add formula cards,
- add method cards,
- add mistake cards,
- add exercises targeting old weak concepts,
- add spaced review problems from previous topics,
- add cumulative tests,
- add prerequisite repair links.

### Layer 4: Transfer And Exam Readiness

After mastery basics exist, make the topic useful in unfamiliar contexts:

- add word problems,
- add multi-step problems,
- add graphical interpretation,
- add parameter problems,
- add proof or justification prompts where age-appropriate,
- add exam-style tasks,
- add PUPP/VBE-style tasks where relevant,
- add mixed-topic tests.

### Layer 4.5: High-Volume Varied Practice

After a topic's theory, definitions, examples, mistake explanations, prerequisite links, and SRS seeds are already strong, the main bottleneck becomes practice volume.

At this stage, transition from improving explanations to adding a vast amount of varied exercises.

The goal is not repetition for its own sake. The goal is to give students enough varied practice that they can recognize the same concept in many forms:

- direct drills,
- small variations,
- inverse questions,
- word problems,
- graph/table problems,
- parameter problems,
- mixed prerequisite problems,
- cumulative review,
- exam-style tasks,
- trick/mistake-focused tasks,
- multi-step transfer tasks.

For a perfected theory topic, continued content expansion should mostly mean:

- more exercises,
- more exercise types,
- more difficulty levels,
- more mixed sets,
- more test variants,
- more misconception-targeted practice,
- more spaced review tasks.

Do not keep rewriting already excellent theory unless a real error, gap, or clarity problem is found.

### Layer 5: Olympiad Extension

After standard curriculum is strong, add olympiad extension:

- non-routine problems,
- strategic insights,
- progressive hints,
- full reasoning,
- alternate methods,
- common traps,
- reflection prompts,
- extension questions,
- SRS seeds for methods and mistakes.

Use `OLYMPIAD_MATH_SYLLABUS.md` and `OLYMPIAD_EXERCISE_AUTHORING_GUIDE.md`.

## Priority Order

When deciding what to add next, use this order.

### 1. Missing Official Curriculum

Highest priority:

- any official curriculum topic that does not exist,
- any grade band with missing strands,
- any topic without prerequisites,
- any topic without a test,
- any topic without exercises.

Do not expand already-rich topics while official curriculum topics are missing.

### 2. Broken Learning Paths

Next priority:

- topics used as prerequisites by many later topics,
- topics that unlock algebra, functions, geometry, probability, or calculus,
- topics where a weak foundation blocks many future lessons.

Examples of high-leverage foundations:

- fractions,
- percentages,
- ratios,
- equations,
- expressions,
- functions,
- coordinate plane,
- powers and roots,
- factoring,
- quadratic equations,
- trigonometry,
- derivatives,
- probability basics.

### 3. Student Pain Points

Prioritize topics where students commonly struggle:

- abstract definitions,
- sign errors,
- fraction operations,
- equation transformations,
- word-problem modeling,
- graph reading,
- domain/range,
- quadratic function transformations,
- trigonometric identities,
- limits and derivatives.

For these topics, add mistakes, examples, and targeted practice before adding more generic exercises.

### 4. Diagnostic And Recommendation Gaps

Prioritize content that improves the app's ability to decide what the student lacks:

- diagnostic items for each core skill,
- prerequisite-specific exercises,
- misconception-tagged exercises,
- tests that distinguish similar mistakes,
- concept-to-topic links.

The diagnostic system is only as good as the content mappings.

### 5. Practice Volume

Once theory and diagnostic structure are solid, add volume. If a topic's theory is already excellent, this becomes the primary expansion mode:

- more easy drills,
- more medium problems,
- more hard problems,
- cumulative review,
- randomized variants if authored statically,
- topic tests,
- grade tests,
- exam-style sets.

The best mature topics should eventually have far more practice than the minimum. Large exercise volume is valuable only when it is varied, tagged, solved, hinted, and connected to mistakes and concepts.

### 6. Olympiad Depth

Add olympiad depth after standard content is reliable:

- strategy families,
- proof methods,
- number theory,
- combinatorics,
- geometry,
- inequalities,
- functional equations,
- graph theory,
- advanced algebra.

Olympiad content should deepen learning, not replace official curriculum coverage.

## Do Not Forget A Topic

Use explicit coverage tracking. Never rely on memory.

Maintain a curriculum coverage table with one row per official topic:

```txt
grade_band
grade
strand
official_topic_name
topic_id
status
source_reference
prerequisites_done
theory_done
concepts_done
examples_done
mistakes_done
exercises_done
tests_done
srs_done
diagnostic_done
olympiad_extension_done
last_reviewed
notes
```

Recommended status values:

```txt
missing
stub
minimum
learnable
mastery-ready
exam-ready
excellent
needs-review
```

Rules:

- every official topic from `matematikaPrograma.txt` must appear in the table,
- every app topic id must map back to an official topic or to olympiad extension,
- every official topic must have exactly one primary owner topic id,
- split subtopics may exist, but they must reference the same official source row,
- no topic is considered done without a test and prerequisite links,
- no topic is considered excellent without mistake coverage and SRS seeds.

## Pass-Based Expansion Workflow

Use passes instead of random content bursts.

### Current Required Pass: Depth Warning Completion

The current priority is to finish all content-depth warnings reported by
`npm run validate:content`.

Implementation rules:

- expand real JSON files under `content/generated/{grade}/`,
- work grade-by-grade in this order: `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`,
- after each grade, run `npm run validate:content` and confirm the warning count decreases,
- do not create generator scripts, parser scripts, temporary automation files, or backup artifacts as the deliverable,
- do not rename existing topic, concept, exercise, test, or formula ids,
- do not remove validation warnings by weakening validation rules,
- do not satisfy word-count targets with filler.

Acceptance for this pass:

- every curriculum topic reaches at least `800` useful Lithuanian theory words,
- every curriculum topic has at least `4` meaningful theory sections,
- every olympiad topic reaches at least `1000` useful Lithuanian theory or method words,
- every olympiad topic has at least `4` method-focused theory sections,
- every olympiad topic has at least `5` worked examples or fully solved teaching problems,
- `npm run validate:content` reports `0 issues` and `0 warnings`.

Olympiad topics should receive extra attention. Add method notes, named
strategies, proof patterns, first observations, traps, prerequisite bridges, and
fully explained examples before adding more problem volume.

### Pass 1: Curriculum Inventory

Read `matematikaPrograma.txt`.

Create or update the coverage table:

- grades 5-6,
- grades 7-8,
- grades 9-10,
- grade 11,
- grade 12,
- strands:
  - `Skaičiai ir skaičiavimai`,
  - `Modeliai ir sąryšiai`,
  - `Geometrija ir matavimai`,
  - `Duomenys ir tikimybės`.

Output: every official topic listed, even if missing.

### Pass 2: Topic Skeletons

For missing topics, add skeleton complete JSON files:

- metadata,
- source reference,
- topic id,
- strand,
- grade,
- prerequisite ids,
- next topic ids.

Do not leave placeholders in final content. If you create a skeleton, mark it `stub` in the coverage table and come back.

### Pass 3: Learnable Theory

For each topic, add theory until a student can understand the idea without another textbook:

- define terms,
- explain intuition,
- show notation,
- connect to prerequisites,
- show when the concept is used,
- show what comes next.

Production-ready theory depth targets:

- normal curriculum topic: 800-1500 useful Lithuanian words,
- major or exam-heavy topic: 1200-2500+ useful Lithuanian words,
- olympiad topic: 1000+ useful Lithuanian words focused on methods, strategies, and proof patterns.

Do not satisfy these targets with filler. Use more explanation only when it improves independent learning.

### Pass 4: Examples

Add examples in a progression:

1. direct definition example,
2. basic calculation,
3. common transformation,
4. word or graph interpretation,
5. mixed or harder example.

Each example should show reasoning, not only answer.

### Pass 5: Mistakes

Add mistakes before adding huge exercise volume.

For each important topic, cover:

- why the mistake is tempting,
- wrong pattern,
- correction,
- how to recognize the trap next time.

Mistakes should feed SRS and recommendations.

### Pass 6: Exercise Coverage

Add exercises by skill, not by random count.

For each subskill, include:

- easy recognition,
- direct computation,
- medium application,
- mixed problem,
- hard or transfer problem.

Each exercise needs:

- answer,
- difficulty or olympiad tier metadata,
- estimated time where useful,
- validator-compatible format,
- hints,
- solution,
- concept ids,
- mistake tags where relevant.

Exercises should be selectable in the UI. Author enough metadata for the app to filter by difficulty, concept, solved status, exercise type, mistake tag, strategy tag, olympiad tier, and estimated time.

### Pass 7: Tests

Add tests at increasing scope:

- topic tests,
- strand tests,
- grade-band tests,
- prerequisite tests,
- exam-style tests.

Tests should influence mastery more than ordinary practice.

### Pass 8: Diagnostic Mapping

Add or improve diagnostic items:

- each core attribute should appear in multiple items,
- each item should map to required skills,
- wrong answers should reveal likely misconceptions,
- prerequisites should be tested separately from the target topic.

### Pass 9: SRS Enrichment

Add cards for:

- definitions,
- formulas,
- methods,
- theorems,
- common mistakes,
- core insights.

Do not create irrelevant cards. Cards should be connected to actual topic engagement.

### Pass 10: Olympiad Expansion

Only after the standard topic is solid:

- add olympiad strategies,
- add non-routine problems,
- add progressive hints,
- add full proof-style solutions,
- add alternate methods,
- add reflection prompts.

## Exercise Volume Targets

Minimums are not enough long term.

When a topic's theory is perfected, these targets should become the next major goal. The app should move from "Can the student understand this topic?" to "Can the student solve many different forms of this topic reliably?"

For important curriculum topics, target:

- 20-40 easy exercises,
- 30-60 medium exercises,
- 20-40 hard exercises,
- 10-20 mixed review exercises,
- 2-5 topic tests,
- 1 cumulative test contribution.

For small topics, target:

- 10-20 easy exercises,
- 10-25 medium exercises,
- 5-15 hard exercises,
- 1-2 topic tests.

For high-stakes exam topics, target:

- 100+ total exercises over time,
- multiple test variants,
- mixed exam-style tasks,
- common mistake drills,
- prerequisite repair sets.

For olympiad topics, target:

- 10-20 introductory problems,
- 20-40 standard problems,
- 10-30 advanced problems,
- 5-15 selection-level problems where appropriate.

Olympiad expansion must happen per specific topic, not per whole grade. A content pass such as "add grade 9 olympiad content" should produce several focused topic files and cards, for example number theory, algebra, functions, geometry, and combinatorics. Do not expand by creating one large grade page that mixes all olympiad disciplines together.

These are long-term targets, not a requirement for one generation pass.

## Prioritization Score

When many content tasks compete, score each candidate topic:

```txt
priority =
  missingOfficialTopic * 100
  + prerequisiteImportance * 30
  + studentDifficulty * 25
  + examImportance * 25
  + diagnosticGap * 20
  + lowExerciseVolume * 15
  + weakMistakeCoverage * 15
  + weakSrsCoverage * 10
  + olympiadValue * 5
```

Interpretation:

- missing official content always wins,
- prerequisite foundations beat isolated enrichment,
- exam and diagnostic gaps are high priority,
- olympiad depth matters, but not before curriculum foundations.

## Quality Bar

Do not add content merely to increase counts.

Good content:

- is Lithuanian,
- follows the official curriculum,
- has stable ids,
- is mathematically correct,
- explains reasoning,
- links concepts,
- names mistakes,
- has useful hints,
- has complete solutions,
- supports mastery and SRS.

Bad content:

- generic filler,
- repeated problems with only numbers changed and no purpose,
- answer-only exercises,
- theory without examples,
- examples without reasoning,
- hard problems without prerequisites,
- olympiad dumps without teaching structure,
- English learner-facing labels,
- scripts instead of finished JSON content.

## Review Checklist For Each Topic

Before marking a topic `learnable`, confirm:

- source reference exists,
- prerequisite ids exist,
- next topic ids are reasonable,
- theory covers all official outcomes,
- concepts are defined,
- formulas are present where needed,
- at least 5 worked examples exist,
- common mistakes are useful,
- exercises cover all subskills,
- hints are progressive,
- solutions explain steps,
- at least one topic test exists,
- SRS seeds exist,
- glossary links work.

Before marking a topic `exam-ready`, confirm:

- multiple test variants exist,
- mixed problems exist,
- prerequisite repair is covered,
- common exam mistakes are covered,
- mastery signals are meaningful.

Before marking a topic `excellent`, confirm:

- diagnostic items exist,
- SRS is rich,
- every subskill has easy/medium/hard practice,
- explanations handle edge cases,
- topic connects backward and forward,
- content has been manually reviewed.

## Working With AI Content Agents

When assigning a content agent, give it:

- target grade or grade band,
- exact official curriculum topics,
- current coverage table rows,
- existing topic ids,
- required output files,
- `CONTENT_AUTHORING_GUIDE.md`,
- this expansion strategy,
- any topic-specific priorities.

Tell the agent:

- write finished JSON content directly,
- do not create generator scripts,
- do not rename existing ids,
- do not skip official topics,
- stop only after a valid complete file,
- if time is limited, improve the highest-priority coverage rows first.

## Infinite Expansion Mindset

The content library can always improve.

After all topics are minimum-complete, keep expanding in cycles:

1. fix missing or weak official coverage,
2. improve high-prerequisite topics,
3. improve student pain points,
4. improve diagnostics,
5. improve tests,
6. add more practice,
7. add olympiad depth,
8. review and correct old content.

The app should become better by accumulation, but accumulation must be organized. Every new piece of content should make the learning path more complete, more diagnostic, or more memorable.
