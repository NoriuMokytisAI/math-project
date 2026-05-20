import { concepts, exercises, tests, topics } from "./content.js";

export const CONTENT_VERSION = "0.1.0";
export const STATE_VERSION = 3;

const DEFAULT_TOPIC_ID = topics["funkcijos-ir-ju-savybes"] ? "funkcijos-ir-ju-savybes" : Object.keys(topics)[0];
const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;

export const DEFAULT_SRS_SETTINGS = {
  schedulerType: "sm2",
  newCardsPerDay: 20,
  reviewsPerDay: 200,
  learningStepsMinutes: [1, 10],
  relearningStepsMinutes: [10],
  graduatingIntervalDays: 1,
  startingEaseFactor: 2.5,
  minimumEaseFactor: 1.3,
  easePenaltyOnAgain: 0.2,
  intervalModifier: 1,
  maximumIntervalDays: 36500,
  enabledCardTypes: {
    concept: true,
    formula: true,
    mistake: true,
    method: true,
    practice: true
  }
};

export function createInitialState() {
  const now = Date.now();
  return {
    version: STATE_VERSION,
    contentVersion: CONTENT_VERSION,
    profile: {
      onboarded: false,
      goal: "",
      grade: 9,
      gradeBand: "9-10",
      confidence: "",
      dailyMinutes: 20,
      olympiad: false,
      diagnostic: true
    },
    preferences: {
      srs: normalizeSrsSettings()
    },
    srsCards: [],
    attempts: [],
    testAttempts: [],
    mastery: {},
    achievements: [],
    activeTopicId: DEFAULT_TOPIC_ID,
    createdAt: now,
    updatedAt: now
  };
}

export function normalizeSrsSettings(value = {}) {
  const legacyEnabled = {
    concept: value.concept,
    formula: value.formula,
    mistake: value.mistake,
    method: value.method,
    practice: value.practice
  };
  const enabledCardTypes = {
    ...DEFAULT_SRS_SETTINGS.enabledCardTypes,
    ...(value.enabledCardTypes || {})
  };
  for (const [key, item] of Object.entries(legacyEnabled)) {
    if (typeof item === "boolean") enabledCardTypes[key] = item;
  }
  return {
    ...DEFAULT_SRS_SETTINGS,
    ...value,
    schedulerType: "sm2",
    newCardsPerDay: positiveInteger(value.newCardsPerDay, DEFAULT_SRS_SETTINGS.newCardsPerDay, 0),
    reviewsPerDay: positiveInteger(value.reviewsPerDay, DEFAULT_SRS_SETTINGS.reviewsPerDay, 0),
    learningStepsMinutes: normalizeMinuteList(value.learningStepsMinutes, DEFAULT_SRS_SETTINGS.learningStepsMinutes),
    relearningStepsMinutes: normalizeMinuteList(value.relearningStepsMinutes, DEFAULT_SRS_SETTINGS.relearningStepsMinutes),
    graduatingIntervalDays: positiveInteger(value.graduatingIntervalDays, DEFAULT_SRS_SETTINGS.graduatingIntervalDays, 1),
    startingEaseFactor: positiveNumber(value.startingEaseFactor, DEFAULT_SRS_SETTINGS.startingEaseFactor, DEFAULT_SRS_SETTINGS.minimumEaseFactor),
    minimumEaseFactor: positiveNumber(value.minimumEaseFactor, DEFAULT_SRS_SETTINGS.minimumEaseFactor, 1),
    easePenaltyOnAgain: positiveNumber(value.easePenaltyOnAgain, DEFAULT_SRS_SETTINGS.easePenaltyOnAgain, 0),
    intervalModifier: positiveNumber(value.intervalModifier, DEFAULT_SRS_SETTINGS.intervalModifier, 0.1),
    maximumIntervalDays: positiveInteger(value.maximumIntervalDays, DEFAULT_SRS_SETTINGS.maximumIntervalDays, 1),
    enabledCardTypes
  };
}

function positiveInteger(value, fallback, minimum) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(minimum, Math.round(number));
}

function positiveNumber(value, fallback, minimum) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(minimum, number);
}

function normalizeMinuteList(value, fallback) {
  const source = Array.isArray(value) ? value : String(value || "").split(",");
  const list = source.map((item) => Math.round(Number(item))).filter((item) => Number.isFinite(item) && item > 0);
  return list.length ? list : fallback;
}

export function normalizeState(value) {
  const initial = createInitialState();
  const incoming = value && typeof value === "object" ? value : {};
  const srsSettings = normalizeSrsSettings(incoming.preferences?.srs);
  const preferences = {
    ...initial.preferences,
    ...(incoming.preferences || {}),
    srs: srsSettings
  };
  const migratedCards = migrateSrsCards(incoming.srsCards || [], incoming.version, srsSettings);
  return {
    ...initial,
    ...incoming,
    version: STATE_VERSION,
    contentVersion: incoming.contentVersion || CONTENT_VERSION,
    profile: { ...initial.profile, ...(incoming.profile || {}) },
    preferences,
    srsCards: applySrsPreferences(migratedCards, srsSettings),
    attempts: Array.isArray(incoming.attempts) ? incoming.attempts : [],
    testAttempts: Array.isArray(incoming.testAttempts) ? incoming.testAttempts : [],
    achievements: Array.isArray(incoming.achievements) ? incoming.achievements : [],
    activeTopicId: topics[incoming.activeTopicId] ? incoming.activeTopicId : DEFAULT_TOPIC_ID
  };
}

function migrateSrsCards(cards, stateVersion, settings) {
  const shouldRemoveOldTheoryCard = (card) => {
    if (Number(stateVersion || 0) >= STATE_VERSION) return false;
    if (card.deck !== "theory") return false;
    const reviewed = Number(card.reviewCount || card.repetitions || 0) > 0 || Boolean(card.lastReviewedAt);
    return !reviewed;
  };
  return cards
    .filter((card) => card && typeof card === "object" && !shouldRemoveOldTheoryCard(card))
    .map((card) => normalizeSrsCard(card, settings));
}

export function normalizeSrsCard(card, settings = DEFAULT_SRS_SETTINGS) {
  const now = Date.now();
  const createdAt = isoFrom(card.createdAt || card.firstEngagedAt || now);
  const due = Number(card.due || Date.parse(card.dueAt) || now);
  const cardType = normalizeCardType(card.cardType);
  return {
    id: String(card.id),
    deck: card.deck === "practice" ? "practice" : "theory",
    sourceId: String(card.sourceId || card.id),
    topicId: card.topicId || undefined,
    cardType,
    front: String(card.front || ""),
    back: String(card.back || ""),
    schedulerType: "sm2",
    queue: normalizeQueue(card.queue, card.reviewCount || card.repetitions),
    dueAt: isoFrom(card.dueAt || due),
    due,
    intervalDays: Math.max(0, Number(card.intervalDays || 0)),
    easeFactor: Math.max(settings.minimumEaseFactor, Number(card.easeFactor || card.ease || settings.startingEaseFactor)),
    learningStepIndex: Math.max(0, Number(card.learningStepIndex || 0)),
    repetitions: Math.max(0, Number(card.repetitions || card.reviewCount || 0)),
    lapses: Math.max(0, Number(card.lapses || 0)),
    createdAt,
    firstEngagedAt: isoFrom(card.firstEngagedAt || createdAt),
    lastEngagedAt: isoFrom(card.lastEngagedAt || createdAt),
    lastReviewedAt: card.lastReviewedAt ? isoFrom(card.lastReviewedAt) : undefined,
    enabled: card.enabled !== false
  };
}

function normalizeCardType(value) {
  if (["concept", "formula", "mistake", "method", "practice"].includes(value)) return value;
  if (value === "exercisePattern") return "practice";
  return "concept";
}

function normalizeQueue(value, repetitions) {
  if (["new", "learning", "review", "relearning", "suspended"].includes(value)) return value;
  return Number(repetitions || 0) > 0 ? "review" : "new";
}

function isoFrom(value) {
  if (typeof value === "string" && !Number.isNaN(Date.parse(value))) return new Date(value).toISOString();
  const number = Number(value);
  return new Date(Number.isFinite(number) ? number : Date.now()).toISOString();
}

export function applySrsPreferences(cards, preferences) {
  const settings = normalizeSrsSettings(preferences);
  return cards.map((card) => normalizeSrsCard(card, settings));
}

export function getDueSrsCards(cards, settings = DEFAULT_SRS_SETTINGS, now = Date.now()) {
  const normalized = normalizeSrsSettings(settings);
  const newLimit = normalized.newCardsPerDay;
  const reviewLimit = normalized.reviewsPerDay;
  let newCount = 0;
  let reviewCount = 0;
  return cards
    .filter((card) => isCardEnabled(card, normalized) && Number(card.due || Date.parse(card.dueAt)) <= now)
    .sort((a, b) => Number(a.due || Date.parse(a.dueAt)) - Number(b.due || Date.parse(b.dueAt)))
    .filter((card) => {
      if (card.queue === "new") {
        if (newCount >= newLimit) return false;
        newCount += 1;
        return true;
      }
      if (["review", "relearning"].includes(card.queue)) {
        if (reviewCount >= reviewLimit) return false;
        reviewCount += 1;
        return true;
      }
      return true;
    });
}

function isCardEnabled(card, settings) {
  return card.enabled !== false && card.queue !== "suspended" && settings.enabledCardTypes[card.cardType] !== false;
}

export function scheduleCard(card, rating, settings = DEFAULT_SRS_SETTINGS, now = Date.now()) {
  const normalized = normalizeSrsSettings(settings);
  const next = normalizeSrsCard(card, normalized);
  next.repetitions += 1;
  next.lastReviewedAt = new Date(now).toISOString();

  if (rating === "again") {
    return scheduleAgain(next, normalized, now);
  }
  return scheduleGood(next, normalized, now);
}

function scheduleAgain(card, settings, now) {
  const step = card.queue === "review" ? settings.relearningStepsMinutes[0] : settings.learningStepsMinutes[0];
  const next = {
    ...card,
    queue: card.queue === "review" ? "relearning" : "learning",
    learningStepIndex: 0,
    lapses: card.queue === "review" ? card.lapses + 1 : card.lapses,
    easeFactor: Math.max(settings.minimumEaseFactor, card.easeFactor - settings.easePenaltyOnAgain)
  };
  return withDue(next, now + step * MINUTE, 0);
}

function scheduleGood(card, settings, now) {
  if (card.queue === "new" || card.queue === "learning") {
    const nextStep = card.queue === "new" ? 0 : card.learningStepIndex + 1;
    if (nextStep < settings.learningStepsMinutes.length) {
      return withDue({ ...card, queue: "learning", learningStepIndex: nextStep }, now + settings.learningStepsMinutes[nextStep] * MINUTE, 0);
    }
    return withDue({ ...card, queue: "review", learningStepIndex: 0 }, now + settings.graduatingIntervalDays * DAY, settings.graduatingIntervalDays);
  }

  if (card.queue === "relearning") {
    return withDue({ ...card, queue: "review", learningStepIndex: 0 }, now + Math.max(1, card.intervalDays || 1) * DAY, Math.max(1, card.intervalDays || 1));
  }

  const previous = Math.max(1, card.intervalDays || 1);
  const days = clamp(Math.round(previous * card.easeFactor * settings.intervalModifier), 1, settings.maximumIntervalDays);
  return withDue({ ...card, queue: "review" }, now + days * DAY, days);
}

function withDue(card, due, intervalDays) {
  return {
    ...card,
    due,
    dueAt: new Date(due).toISOString(),
    intervalDays
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function ensureConceptSrsCard(state, conceptId, topicId = state.activeTopicId, now = Date.now()) {
  const concept = concepts[conceptId];
  if (!concept) return state;
  return ensureSrsCard(state, {
    id: `theory-${conceptId}`,
    deck: "theory",
    sourceId: conceptId,
    topicId,
    cardType: concept.type === "method" ? "method" : "concept",
    front: concept.title,
    back: concept.definition
  }, now);
}

export function ensureTopicSrsCards(state, topicId, now = Date.now()) {
  const topic = topics[topicId];
  if (!topic) return state;
  let next = state;
  for (const conceptId of topic.concepts || []) {
    next = ensureConceptSrsCard(next, conceptId, topic.id, now);
  }
  for (const [index, formula] of (topic.formulas || []).entries()) {
    next = ensureSrsCard(next, {
      id: `formula-${topic.id}-${index}`,
      deck: "theory",
      sourceId: topic.id,
      topicId: topic.id,
      cardType: "formula",
      front: `Formulė: ${topic.title}`,
      back: formula
    }, now);
  }
  for (const [index, mistake] of (topic.mistakes || []).entries()) {
    next = ensureSrsCard(next, {
      id: `mistake-${topic.id}-${index}`,
      deck: "theory",
      sourceId: topic.id,
      topicId: topic.id,
      cardType: "mistake",
      front: `Dažna klaida: ${topic.title}`,
      back: mistake
    }, now);
  }
  return next;
}

function ensureSrsCard(state, input, now = Date.now()) {
  const settings = normalizeSrsSettings(state.preferences?.srs);
  const existing = state.srsCards.find((card) => card.id === input.id);
  if (existing) {
    const srsCards = state.srsCards.map((card) => card.id === input.id ? {
      ...card,
      ...input,
      enabled: settings.enabledCardTypes[input.cardType] !== false && card.enabled !== false,
      lastEngagedAt: new Date(now).toISOString()
    } : card);
    return { ...state, srsCards, updatedAt: now };
  }
  const card = normalizeSrsCard({
    ...input,
    schedulerType: "sm2",
    queue: "new",
    due: now,
    dueAt: new Date(now).toISOString(),
    intervalDays: 0,
    easeFactor: settings.startingEaseFactor,
    learningStepIndex: 0,
    repetitions: 0,
    lapses: 0,
    createdAt: new Date(now).toISOString(),
    firstEngagedAt: new Date(now).toISOString(),
    lastEngagedAt: new Date(now).toISOString(),
    enabled: settings.enabledCardTypes[input.cardType] !== false
  }, settings);
  return { ...state, srsCards: [...state.srsCards, card], updatedAt: now };
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
  const now = Date.now();
  const score = scoreAttempt(exercise, result);
  const attempt = {
    id: `${exercise.id}-${now}`,
    exerciseId: exercise.id,
    topicId: exercise.topicId,
    correct: result.correct,
    seconds: result.seconds,
    hintsUsed: result.hintsUsed,
    attempts: result.attempts,
    score,
    createdAt: now
  };
  const attempts = [...state.attempts, attempt];
  let next = { ...state, attempts };
  for (const conceptId of exercise.concepts || []) {
    next = ensureConceptSrsCard(next, conceptId, exercise.topicId, now);
  }
  next = updatePracticeCards(next, exercise, attempt, now);
  const mastery = calculateMastery({ ...next, attempts });
  return {
    ...next,
    attempts,
    mastery,
    achievements: updateAchievements(next, attempt, mastery),
    updatedAt: now
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

function updatePracticeCards(state, exercise, attempt, now) {
  if (attempt.correct && attempt.hintsUsed === 0 && attempt.score > 0.75) return state;
  const existing = state.srsCards.find((card) => card.id === `practice-${exercise.id}`);
  const due = now + (attempt.correct ? DAY : 10 * MINUTE);
  const input = {
    id: `practice-${exercise.id}`,
    deck: "practice",
    sourceId: exercise.id,
    topicId: exercise.topicId,
    cardType: "practice",
    front: `Pakartok uždavinio tipą: ${exercise.statement}`,
    back: exercise.solution
  };
  if (!existing) {
    return ensureSrsCard(state, input, now);
  }
  const srsCards = state.srsCards.map((card) => card.id === input.id ? {
    ...card,
    ...input,
    queue: attempt.correct ? card.queue : "relearning",
    due,
    dueAt: new Date(due).toISOString(),
    intervalDays: attempt.correct ? Math.max(1, card.intervalDays || 1) : 0,
    easeFactor: attempt.correct ? card.easeFactor : Math.max(1.3, card.easeFactor - 0.1),
    enabled: true,
    lastEngagedAt: new Date(now).toISOString()
  } : card);
  return { ...state, srsCards };
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
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs);
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
