import { describe, it, expect } from 'vitest';
import * as systems from '../systems';
import * as generated from '../content';
import * as diagnostic from '../diagnostic';
import { diagnosticItems } from '../diagnosticContent';
import { inferStartMode } from '../startModes';

describe('Systems Logic', () => {
  it('creates initial state with no pre-created SRS cards', () => {
    const initial = systems.createInitialState();
    expect(initial.srsCards.length).toBe(0);
  });

  it('ensures concept SRS card creation and prevents duplicates', () => {
    const initial = systems.createInitialState();
    const conceptId = Object.keys(generated.concepts)[0];
    if (!conceptId) return; // skip if no concepts

    const engaged = systems.ensureConceptSrsCard(initial, conceptId, initial.activeTopicId, 1000);
    expect(engaged.srsCards.length).toBe(1);

    const duplicate = systems.ensureConceptSrsCard(engaged, conceptId, initial.activeTopicId, 2000);
    expect(duplicate.srsCards.length).toBe(1);
  });

  it('schedules cards correctly with "again"', () => {
    const initial = systems.createInitialState();
    const conceptId = Object.keys(generated.concepts)[0];
    if (!conceptId) return;

    const engaged = systems.ensureConceptSrsCard(initial, conceptId, initial.activeTopicId, 1000);
    const firstCard = engaged.srsCards[0];

    const again = systems.scheduleCard(firstCard, 'again', engaged.preferences?.srs, 3000);
    expect(again.queue).toBe('learning');
    expect(again.due).toBeGreaterThan(3000);
  });

  it('schedules cards correctly with "good"', () => {
    const initial = systems.createInitialState();
    const conceptId = Object.keys(generated.concepts)[0];
    if (!conceptId) return;

    const engaged = systems.ensureConceptSrsCard(initial, conceptId, initial.activeTopicId, 1000);
    const firstCard = engaged.srsCards[0];

    const good = systems.scheduleCard(firstCard, 'good', engaged.preferences?.srs, 3000);
    expect(good.queue).toBe('learning'); // should advance through learning steps first
  });

  it('removes unreviewed auto-created theory cards on state migration', () => {
    const initial = systems.createInitialState();
    const conceptId = Object.keys(generated.concepts)[0];
    if (!conceptId) return;

    const oldAutoDeck = {
      ...initial,
      version: 2,
      srsCards: [
        {
          id: `theory-${conceptId}`,
          deck: "theory",
          sourceId: conceptId,
          cardType: "concept",
          front: "x",
          back: "x",
          due: 1,
          intervalDays: 0,
          ease: 2,
          reviewCount: 0,
          enabled: true
        }
      ]
    };

    const migrated = systems.normalizeState(oldAutoDeck);
    expect(migrated.srsCards.length).toBe(0);
  });

  it('normalizes goal-based start mode profile metadata', () => {
    const olympiad = systems.normalizeState({
      ...systems.createInitialState(),
      profile: {
        onboarded: true,
        goal: 'Noriu sustiprinti matematiką',
        grade: 9,
        gradeBand: '9-10',
        confidence: '',
        dailyMinutes: 20,
        olympiad: false,
        diagnostic: false
      }
    });

    expect(inferStartMode(olympiad.profile)).toBe('olympiad');
    expect(olympiad.profile.startMode).toBe('olympiad');

    const targeted = systems.normalizeState({
      ...systems.createInitialState(),
      profile: {
        onboarded: true,
        goal: 'Ruošiuosi kontroliniui arba egzaminui',
        startMode: 'targeted',
        preparationType: 'control',
        grade: 9,
        gradeBand: '9-10',
        confidence: '',
        dailyMinutes: 20,
        olympiad: false,
        diagnostic: false
      }
    });

    expect(targeted.profile.targetedStartChoice).toBe('topic');
  });
});

describe('Curriculum Content Integrity', () => {
  it('has generated curriculum contents', () => {
    expect(Object.keys(generated.topics).length).toBeGreaterThanOrEqual(10);
    expect(generated.exercises.length).toBeGreaterThanOrEqual(100);
    expect(generated.tests.length).toBeGreaterThanOrEqual(10);
  });

  it('verifies next and prerequisite topic integrity', () => {
    for (const topic of Object.values(generated.topics)) {
      for (const nextTopicId of topic.nextTopicIds || []) {
        expect(generated.topics[nextTopicId]).toBeDefined();
      }
      const prerequisiteTopicIds = (topic as any).prerequisiteTopicIds || [];
      for (const prereqId of prerequisiteTopicIds) {
        expect(generated.topics[prereqId]).toBeDefined();
      }
    }
  });
});

describe('Cognitive Diagnosis', () => {
  it('creates a diagnostic item pool from curriculum exercises', () => {
    expect(diagnosticItems.length).toBeGreaterThanOrEqual(100);
    expect(diagnosticItems[0].requiredAttributeIds.length).toBeGreaterThan(0);
  });

  it('updates diagnostic evidence after an answer', () => {
    const initial = systems.createInitialState();
    const started = diagnostic.startDiagnostic(initial, 1000);
    const item = diagnostic.getCurrentDiagnosticItem(started.diagnosticState);
    expect(item).toBeDefined();
    if (!item) return;

    const answered = diagnostic.answerDiagnosticItem(started, item, item.answer, 'confident', 30, 2000);
    const diagnosis = answered.diagnosticState.attributeDiagnoses[item.requiredAttributeIds[0]];
    expect(answered.diagnosticState.answeredItemIds).toContain(item.id);
    expect(diagnosis.evidenceCount).toBe(1);
    expect(diagnosis.pMastery).toBeGreaterThan(0.5);
  });

  it('excludes placeholder and known invalid diagnostic templates', () => {
    const plain = (value: string) => value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ąčęėįšųūž]/g, (char) => ({
        'ą': 'a',
        'č': 'c',
        'ę': 'e',
        'ė': 'e',
        'į': 'i',
        'š': 's',
        'ų': 'u',
        'ū': 'u',
        'ž': 'z'
      }[char] || char))
      .toLowerCase();

    expect(diagnosticItems.some((item) => plain(item.prompt).includes('papildomas uzdavinys nr.'))).toBe(false);
    expect(diagnosticItems.some((item) => /^Kuris skaičius dalijasi iš \d+ ir \d+\?$/.test(item.prompt))).toBe(false);
    expect(diagnosticItems.some((item) => plain(item.prompt).includes('kurios sklaida didesne?') && item.answer === '2')).toBe(false);
    expect(diagnosticItems.some((item) => {
      const match = item.prompt.match(/^Jei a_n=2n-1, rask a_(\d+)\.$/);
      return Boolean(match && String(2 * Number(match[1]) - 1) !== item.answer);
    })).toBe(false);
  });

  it('accepts student percent notation for diagnostic answers stored with LaTeX percent escaping', () => {
    expect(diagnostic.isDiagnosticAnswerCorrect({
      id: 'percent-check',
      moduleId: 'test',
      topicId: 'test',
      prompt: 'Paversk trupmeną 1/2 procentais.',
      answerType: 'numeric',
      answer: '50\\%',
      acceptedAnswers: ['50\\%'],
      requiredAttributeIds: ['attr'],
      difficulty: 1,
      representation: 'numeric',
      slip: 0.1,
      guess: 0.2,
      estimatedSeconds: 30
    }, '50%')).toBe(true);
  });
});
