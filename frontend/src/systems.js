import { concepts, exercises, tests, topics } from "./content.js";

export const CONTENT_VERSION = "0.1.0";

const DEFAULT_TOPIC_ID = topics["funkcijos-ir-ju-savybes"] ? "funkcijos-ir-ju-savybes" : Object.keys(topics)[0];

export function createInitialState() {
  const now = Date.now();
  return {
    version: 2,
    contentVersion: CONTENT_VERSION,
    profile: {
      onboarded: false,
      goal: "",
      grade: 9,
      confidence: "",
      dailyMinutes: 20,
      olympiad: false,
      diagnostic: true
    },
    preferences: {
      srs: {
        concept: true,
        formula: true,
        mistake: true,
        method: true
      }
    },
    srsCards: createTheoryCards(now),
    attempts: [],
    testAttempts: [],
    mastery: {},
    achievements: [],
    activeTopicId: DEFAULT_TOPIC_ID,
    createdAt: now,
    updatedAt: now
  };
}

function createTheoryCards(now) {
  const conceptCards = Object.entries(concepts).map(([id, concept]) => ({
    id: `theory-${id}`,
    deck: "theory",
    sourceId: id,
    cardType: concept.type,
    front: concept.title,
    back: concept.definition,
    due: now,
    intervalDays: 0,
    ease: 2,
    reviewCount: 0,
    enabled: true
  }));
  const formulaCards = [];
  const mistakeCards = [];
  for (const topic of Object.values(topics)) {
    topic.formulas.forEach((formula, index) => {
      formulaCards.push({
        id: `formula-${topic.id}-${index}`,
        deck: "theory",
        sourceId: topic.id,
        cardType: "formula",
        front: `Formulė: ${topic.title}`,
        back: formula,
        due: now,
        intervalDays: 0,
        ease: 2,
        reviewCount: 0,
        enabled: true
      });
    });
    topic.mistakes.forEach((mistake, index) => {
      mistakeCards.push({
        id: `mistake-${topic.id}-${index}`,
        deck: "theory",
        sourceId: topic.id,
        cardType: "mistake",
        front: `Dažna klaida: ${topic.title}`,
        back: mistake,
        due: now,
        intervalDays: 0,
        ease: 2,
        reviewCount: 0,
        enabled: true
      });
    });
  }
  return [...conceptCards, ...formulaCards, ...mistakeCards];
}

export function normalizeState(value) {
  const initial = createInitialState();
  const incoming = value && typeof value === "object" ? value : {};
  const preferences = {
    ...initial.preferences,
    ...(incoming.preferences || {}),
    srs: { ...initial.preferences.srs, ...(incoming.preferences?.srs || {}) }
  };
  const existingCards = new Map((incoming.srsCards || []).map((card) => [card.id, card]));
  const srsCards = initial.srsCards.map((card) => ({ ...card, ...(existingCards.get(card.id) || {}) }));
  for (const card of incoming.srsCards || []) {
    if (!srsCards.some((item) => item.id === card.id)) srsCards.push(card);
  }
  return {
    ...initial,
    ...incoming,
    version: 2,
    contentVersion: incoming.contentVersion || CONTENT_VERSION,
    profile: { ...initial.profile, ...(incoming.profile || {}) },
    preferences,
    srsCards: applySrsPreferences(srsCards, preferences.srs),
    attempts: Array.isArray(incoming.attempts) ? incoming.attempts : [],
    testAttempts: Array.isArray(incoming.testAttempts) ? incoming.testAttempts : [],
    achievements: Array.isArray(incoming.achievements) ? incoming.achievements : [],
    activeTopicId: topics[incoming.activeTopicId] ? incoming.activeTopicId : DEFAULT_TOPIC_ID
  };
}

export function applySrsPreferences(cards, preferences) {
  return cards.map((card) => {
    if (card.deck !== "theory") return card;
    return { ...card, enabled: preferences[card.cardType] !== false };
  });
}

export function scheduleCard(card, rating) {
  const next = { ...card, reviewCount: card.reviewCount + 1 };
  if (rating === "again") {
    next.intervalDays = 0;
    next.due = Date.now() + 3 * 60 * 1000;
    next.ease = Math.max(1.3, card.ease - 0.2);
  } else {
    const days = card.reviewCount === 0 ? 1 : card.reviewCount === 1 ? 3 : Math.max(4, Math.round((card.intervalDays || 1) * card.ease));
    next.intervalDays = days;
    next.due = Date.now() + days * 24 * 60 * 60 * 1000;
    next.ease = Math.min(2.8, card.ease + 0.05);
  }
  return next;
}

export function scoreAttempt(exercise, { correct, seconds, hintsUsed, attempts }) {
  const base = correct ? 1 : 0;
  const expected = exercise.estimatedSeconds || 60;
  const timeFactor = Math.min(1.2, Math.max(0.4, expected / Math.max(10, seconds)));
  const hintPenalty = hintsUsed * 0.12;
  const attemptPenalty = Math.max(0, attempts - 1) * 0.15;
  return Math.min(1, Math.max(0, base * timeFactor - hintPenalty - attemptPenalty));
}

export function recordAttempt(state, exercise, result) {
  const score = scoreAttempt(exercise, result);
  const attempt = {
    id: `${exercise.id}-${Date.now()}`,
    exerciseId: exercise.id,
    topicId: exercise.topicId,
    correct: result.correct,
    seconds: result.seconds,
    hintsUsed: result.hintsUsed,
    attempts: result.attempts,
    score,
    createdAt: Date.now()
  };
  const attempts = [...state.attempts, attempt];
  const mastery = calculateMastery({ ...state, attempts });
  const srsCards = updatePracticeCards(state.srsCards, exercise, attempt);
  return {
    ...state,
    attempts,
    mastery,
    srsCards,
    achievements: updateAchievements(state, attempt, mastery),
    updatedAt: Date.now()
  };
}

export function recordTestAttempt(state, test, results) {
  const correct = results.filter((item) => item.correct).length;
  const total = Math.max(1, results.length);
  const attempt = {
    id: `${test.id}-${Date.now()}`,
    testId: test.id,
    topicIds: test.topicIds,
    exerciseIds: test.exerciseIds,
    correct,
    total,
    score: correct / total,
    createdAt: Date.now()
  };
  const testAttempts = [...(state.testAttempts || []), attempt];
  const mastery = calculateMastery({ ...state, testAttempts });
  return {
    ...state,
    testAttempts,
    mastery,
    achievements: updateAchievements({ ...state, testAttempts }, null, mastery),
    updatedAt: Date.now()
  };
}

function updatePracticeCards(cards, exercise, attempt) {
  if (attempt.correct && attempt.hintsUsed === 0 && attempt.score > 0.75) return cards;
  const existing = cards.find((card) => card.id === `practice-${exercise.id}`);
  const practiceCard = {
    id: `practice-${exercise.id}`,
    deck: "practice",
    sourceId: exercise.id,
    cardType: "exercisePattern",
    front: `Pakartok: ${exercise.statement}`,
    back: exercise.solution,
    due: Date.now() + (attempt.correct ? 24 * 60 * 60 * 1000 : 10 * 60 * 1000),
    intervalDays: attempt.correct ? 1 : 0,
    ease: 1.7,
    reviewCount: existing ? existing.reviewCount : 0,
    enabled: true
  };
  return existing ? cards.map((card) => (card.id === practiceCard.id ? practiceCard : card)) : [...cards, practiceCard];
}

export function calculateMastery(state) {
  const mastery = {};
  for (const topicId of Object.keys(topics)) {
    const topicExercises = exercises.filter((exercise) => exercise.topicId === topicId);
    const topicAttempts = state.attempts.filter((attempt) => attempt.topicId === topicId);
    const topicTests = (state.testAttempts || []).filter((attempt) => attempt.topicIds?.includes(topicId));
    const solved = new Set(topicAttempts.filter((attempt) => attempt.correct).map((attempt) => attempt.exerciseId)).size;
    const coverage = topicExercises.length ? solved / topicExercises.length : 0;
    const avgScore = topicAttempts.length ? topicAttempts.reduce((sum, attempt) => sum + attempt.score, 0) / topicAttempts.length : 0;
    const testScore = topicTests.length ? topicTests.reduce((sum, attempt) => sum + attempt.score, 0) / topicTests.length : 0;
    const hintPenalty = topicAttempts.reduce((sum, attempt) => sum + attempt.hintsUsed, 0) * 0.02;
    const completedAllExercises = topicExercises.length > 0 && solved >= topicExercises.length;
    const rawValue = coverage * 0.34 + avgScore * 0.32 + testScore * 0.24;
    const value = completedAllExercises ? 100 : Math.round(Math.max(0, Math.min(100, rawValue * 100 - hintPenalty * 100)));
    mastery[topicId] = {
      value,
      solved,
      total: topicExercises.length,
      attempts: topicAttempts.length,
      tests: topicTests.length,
      label: masteryLabel(value)
    };
  }
  return mastery;
}

export function calculateGradeMastery(state) {
  const mastery = state.mastery || calculateMastery(state);
  const byGrade = {};
  for (const topic of Object.values(topics)) {
    const list = byGrade[topic.grade] || [];
    list.push(mastery[topic.id]?.value || 0);
    byGrade[topic.grade] = list;
  }
  return Object.fromEntries(Object.entries(byGrade).map(([grade, values]) => [
    grade,
    Math.round(values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length))
  ]));
}

export function calculateConceptMastery(state, conceptId) {
  const relatedExercises = exercises.filter((exercise) => exercise.concepts?.includes(conceptId));
  if (!relatedExercises.length) return 0;
  const ids = new Set(relatedExercises.map((exercise) => exercise.id));
  const attempts = state.attempts.filter((attempt) => ids.has(attempt.exerciseId));
  if (!attempts.length) return 0;
  const avg = attempts.reduce((sum, attempt) => sum + attempt.score, 0) / attempts.length;
  return Math.round(Math.max(0, Math.min(100, avg * 100)));
}

export function masteryLabel(value) {
  if (value < 25) return "Pradžia";
  if (value < 50) return "Silpna";
  if (value < 70) return "Stiprėja";
  if (value < 85) return "Gera";
  return "Tvirta";
}

function updateAchievements(state, attempt, mastery) {
  const set = new Set(state.achievements);
  if (state.profile.onboarded) set.add("onboarded");
  if (attempt) set.add("firstExercise");
  if (attempt && attempt.correct && attempt.hintsUsed === 0) set.add("noHints");
  if (Object.values(mastery).some((item) => item.value >= 85)) set.add("topicMastered");
  if ((state.testAttempts || []).some((item) => item.score >= 0.9)) set.add("testAced");
  return [...set];
}

export function recommendation(state) {
  const due = state.srsCards.filter((card) => card.enabled && card.due <= Date.now());
  if (due.length) return { type: "srs", text: `Turi ${due.length} korteles pakartojimui. Pradėk nuo atminties, kol ji šilta.` };
  const active = topics[state.activeTopicId] ? state.activeTopicId : DEFAULT_TOPIC_ID;
  const m = state.mastery[active]?.value || 0;
  if (m < 40) return { type: "theory", text: `Skaityk teoriją: ${topics[active].title}. Tada spręsk lengvus uždavinius.` };
  if (m < 75) return { type: "practice", text: `Laikas praktikai: stiprink ${topics[active].title}.` };
  const topic = topics[active];
  const next = topic.nextTopicIds?.find((id) => topics[id]) || (active === "funkcijos-ir-ju-savybes" ? "kvadratine-funkcija-ir-lygtys" : DEFAULT_TOPIC_ID);
  return { type: "next", text: `Tema jau laikosi. Rekomenduoju pereiti į: ${topics[next].title}.` };
}

export function exportProgress(state) {
  const json = JSON.stringify({ exportedAt: Date.now(), contentVersion: CONTENT_VERSION, state: normalizeState(state) });
  return `NM-1-${btoa(unescape(encodeURIComponent(json))).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "")}`;
}

export function importProgress(code) {
  if (!code.startsWith("NM-1-")) throw new Error("Netinkamas kodo formatas");
  const payload = code.slice(5).replaceAll("-", "+").replaceAll("_", "/");
  const padded = payload + "=".repeat((4 - (payload.length % 4)) % 4);
  const json = decodeURIComponent(escape(atob(padded)));
  const parsed = JSON.parse(json);
  if (!parsed.state?.version) throw new Error("Kode nėra progreso duomenų");
  return normalizeState(parsed.state);
}

export function getTestsForTopic(topicId) {
  return tests.filter((test) => test.topicIds.includes(topicId));
}
