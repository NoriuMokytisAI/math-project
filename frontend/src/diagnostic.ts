import { diagnosticAttributes, diagnosticItems, diagnosticModules } from "./diagnosticContent";
import { topics } from "./content";
import {
  AttributeDiagnosis,
  DiagnosticAnswerConfidence,
  DiagnosticItem,
  DiagnosticModule,
  DiagnosticModuleSummary,
  DiagnosticState,
  LearningPathNode,
  State
} from "./types";

export const DIAGNOSTIC_VERSION = 1;

export function createInitialDiagnosticState(): DiagnosticState {
  const firstModuleId = diagnosticModules[0]?.id;
  return {
    version: DIAGNOSTIC_VERSION,
    status: "not_started",
    startedAt: undefined,
    completedAt: undefined,
    currentModuleId: firstModuleId,
    answeredItemIds: [],
    skippedItemIds: [],
    responses: [],
    attributeDiagnoses: {},
    moduleSummaries: createModuleSummaries(firstModuleId),
    recommendedLearningPath: []
  };
}

export function normalizeDiagnosticState(value: unknown): DiagnosticState {
  const initial = createInitialDiagnosticState();
  const incoming = value && typeof value === "object" ? value as Partial<DiagnosticState> : {};
  const currentModuleId = diagnosticModules.some((module) => module.id === incoming.currentModuleId)
    ? incoming.currentModuleId
    : initial.currentModuleId;

  const state: DiagnosticState = {
    ...initial,
    ...incoming,
    version: DIAGNOSTIC_VERSION,
    status: normalizeStatus(incoming.status),
    currentModuleId,
    answeredItemIds: validItemIds(incoming.answeredItemIds),
    skippedItemIds: validItemIds(incoming.skippedItemIds),
    responses: Array.isArray(incoming.responses) ? incoming.responses.filter((response) => diagnosticItems.some((item) => item.id === response.itemId)) : [],
    attributeDiagnoses: normalizeAttributeDiagnoses(incoming.attributeDiagnoses),
    moduleSummaries: {
      ...createModuleSummaries(currentModuleId),
      ...(incoming.moduleSummaries || {})
    },
    recommendedLearningPath: Array.isArray(incoming.recommendedLearningPath) ? incoming.recommendedLearningPath : []
  };

  return refreshDiagnosticState(state);
}

function normalizeStatus(status: unknown): DiagnosticState["status"] {
  if (status === "in_progress" || status === "paused" || status === "complete") return status;
  return "not_started";
}

function validItemIds(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const itemIds = new Set(diagnosticItems.map((item) => item.id));
  return [...new Set(value.filter((id): id is string => typeof id === "string" && itemIds.has(id)))];
}

function normalizeAttributeDiagnoses(value: unknown): Record<string, AttributeDiagnosis> {
  if (!value || typeof value !== "object") return {};
  const result: Record<string, AttributeDiagnosis> = {};
  for (const [attributeId, diagnosis] of Object.entries(value as Record<string, Partial<AttributeDiagnosis>>)) {
    if (!diagnosticAttributes[attributeId]) continue;
    result[attributeId] = normalizeAttributeDiagnosis(attributeId, diagnosis);
  }
  return result;
}

function normalizeAttributeDiagnosis(attributeId: string, value: Partial<AttributeDiagnosis> = {}): AttributeDiagnosis {
  const pMastery = clamp(Number(value.pMastery ?? 0.5), 0.02, 0.98);
  const evidenceCount = Math.max(0, Math.round(Number(value.evidenceCount || 0)));
  const correctEvidence = Math.max(0, Math.round(Number(value.correctEvidence || 0)));
  const incorrectEvidence = Math.max(0, Math.round(Number(value.incorrectEvidence || 0)));
  return {
    attributeId,
    pMastery,
    evidenceCount,
    correctEvidence,
    incorrectEvidence,
    lastUpdatedAt: Number(value.lastUpdatedAt || 0),
    confidence: classifyConfidence(pMastery, evidenceCount)
  };
}

function createModuleSummaries(activeModuleId?: string): Record<string, DiagnosticModuleSummary> {
  return Object.fromEntries(diagnosticModules.map((module, index) => [
    module.id,
    {
      moduleId: module.id,
      answered: 0,
      correct: 0,
      skipped: 0,
      status: module.id === activeModuleId || (!activeModuleId && index === 0) ? "active" : "locked",
      confidence: "unknown"
    }
  ]));
}

export function startDiagnostic(state: State, now = Date.now()): State {
  const diagnosticState = refreshDiagnosticState({
    ...normalizeDiagnosticState(state.diagnosticState),
    status: "in_progress",
    startedAt: state.diagnosticState?.startedAt || now,
    currentModuleId: state.diagnosticState?.currentModuleId || diagnosticModules[0]?.id
  });
  return {
    ...state,
    profile: { ...state.profile, onboarded: true, diagnostic: true },
    diagnosticState,
    updatedAt: now
  };
}

export function pauseDiagnostic(state: State, now = Date.now()): State {
  const diagnosticState = normalizeDiagnosticState(state.diagnosticState);
  if (diagnosticState.status !== "in_progress") return state;
  return {
    ...state,
    diagnosticState: { ...diagnosticState, status: "paused" },
    updatedAt: now
  };
}

export function resumeDiagnostic(state: State, now = Date.now()): State {
  const diagnosticState = normalizeDiagnosticState(state.diagnosticState);
  if (diagnosticState.status === "complete") return state;
  return {
    ...state,
    diagnosticState: { ...diagnosticState, status: "in_progress", startedAt: diagnosticState.startedAt || now },
    updatedAt: now
  };
}

export function answerDiagnosticItem(
  state: State,
  item: DiagnosticItem,
  value: string,
  confidence: DiagnosticAnswerConfidence,
  seconds: number,
  now = Date.now()
): State {
  const diagnosticState = normalizeDiagnosticState(state.diagnosticState);
  const correct = isDiagnosticAnswerCorrect(item, value);
  const response = {
    itemId: item.id,
    value,
    correct,
    seconds: Math.max(0, Math.round(seconds)),
    confidence,
    createdAt: now
  };

  const updatedDiagnoses = applyDiagnosticEvidence(
    diagnosticState.attributeDiagnoses,
    item,
    correct,
    confidence,
    now
  );

  const nextDiagnosticState = refreshDiagnosticState({
    ...diagnosticState,
    status: "in_progress",
    startedAt: diagnosticState.startedAt || now,
    answeredItemIds: [...new Set([...diagnosticState.answeredItemIds, item.id])],
    responses: [...diagnosticState.responses.filter((entry) => entry.itemId !== item.id), response],
    attributeDiagnoses: updatedDiagnoses
  });

  const activeTopicId = nextDiagnosticState.recommendedLearningPath.find((node) => node.kind === "topic")?.targetId || state.activeTopicId;

  return {
    ...state,
    diagnosticState: nextDiagnosticState,
    activeTopicId: topics[activeTopicId] ? activeTopicId : state.activeTopicId,
    updatedAt: now
  };
}

export function skipDiagnosticItem(state: State, item: DiagnosticItem, now = Date.now()): State {
  const diagnosticState = normalizeDiagnosticState(state.diagnosticState);
  return {
    ...state,
    diagnosticState: refreshDiagnosticState({
      ...diagnosticState,
      status: "in_progress",
      skippedItemIds: [...new Set([...diagnosticState.skippedItemIds, item.id])],
      startedAt: diagnosticState.startedAt || now
    }),
    updatedAt: now
  };
}

export function getCurrentDiagnosticModule(diagnosticState: DiagnosticState): DiagnosticModule | undefined {
  const normalized = normalizeDiagnosticState(diagnosticState);
  return diagnosticModules.find((module) => module.id === normalized.currentModuleId) || diagnosticModules[0];
}

export function getCurrentDiagnosticItem(diagnosticState: DiagnosticState): DiagnosticItem | undefined {
  const normalized = normalizeDiagnosticState(diagnosticState);
  const module = getCurrentDiagnosticModule(normalized);
  if (!module) return undefined;
  const used = new Set([...normalized.answeredItemIds, ...normalized.skippedItemIds]);
  const candidates = moduleItems(module).filter((item) => !used.has(item.id));
  return selectBestItem(normalized, candidates);
}

export function diagnosticProgress(diagnosticState: DiagnosticState): {
  answered: number;
  skipped: number;
  totalPlanned: number;
  percent: number;
  modulesComplete: number;
  modulesTotal: number;
} {
  const normalized = normalizeDiagnosticState(diagnosticState);
  const totalPlanned = diagnosticModules.reduce((sum, module) => sum + module.maxItems, 0);
  const done = normalized.answeredItemIds.length + normalized.skippedItemIds.length;
  const modulesComplete = Object.values(normalized.moduleSummaries).filter((summary) => summary.status === "complete").length;
  return {
    answered: normalized.answeredItemIds.length,
    skipped: normalized.skippedItemIds.length,
    totalPlanned,
    percent: Math.round(clamp(done / Math.max(1, totalPlanned), 0, 1) * 100),
    modulesComplete,
    modulesTotal: diagnosticModules.length
  };
}

export function isDiagnosticAnswerCorrect(item: DiagnosticItem, value: string): boolean {
  const normalizedValue = normalizeAnswer(value);
  const accepted = item.acceptedAnswers?.length ? item.acceptedAnswers : [item.answer];
  const tolerance = item.answerType === "numeric" ? 0.0001 : 0;
  return accepted.some((answer) => {
    if (tolerance > 0 && Number.isFinite(Number(normalizedValue)) && Number.isFinite(Number(normalizeAnswer(answer)))) {
      return Math.abs(Number(normalizedValue) - Number(normalizeAnswer(answer))) <= tolerance;
    }
    return normalizedValue === normalizeAnswer(answer);
  });
}

function applyDiagnosticEvidence(
  diagnoses: Record<string, AttributeDiagnosis>,
  item: DiagnosticItem,
  correct: boolean,
  answerConfidence: DiagnosticAnswerConfidence,
  now: number
): Record<string, AttributeDiagnosis> {
  const next = { ...diagnoses };
  const weight = confidenceWeight(answerConfidence);
  const requiredCount = Math.max(1, item.requiredAttributeIds.length);
  const multiSkillPenalty = correct ? 1 : 1 / Math.sqrt(requiredCount);

  for (const attributeId of item.requiredAttributeIds) {
    const current = normalizeAttributeDiagnosis(attributeId, next[attributeId]);
    const probability = correct
      ? current.pMastery + (1 - current.pMastery) * (0.18 * weight) * (1 - item.slip)
      : current.pMastery - current.pMastery * (0.24 * weight) * multiSkillPenalty * (1 - item.guess);

    next[attributeId] = normalizeAttributeDiagnosis(attributeId, {
      ...current,
      pMastery: probability,
      evidenceCount: current.evidenceCount + 1,
      correctEvidence: current.correctEvidence + (correct ? 1 : 0),
      incorrectEvidence: current.incorrectEvidence + (correct ? 0 : 1),
      lastUpdatedAt: now
    });

    if (!correct) {
      for (const prereqId of diagnosticAttributes[attributeId]?.prerequisiteAttributeIds || []) {
        if (!diagnosticAttributes[prereqId]) continue;
        const prereq = normalizeAttributeDiagnosis(prereqId, next[prereqId]);
        next[prereqId] = normalizeAttributeDiagnosis(prereqId, {
          ...prereq,
          pMastery: prereq.pMastery - prereq.pMastery * 0.06 * weight,
          lastUpdatedAt: now
        });
      }
    }
  }

  return next;
}

function refreshDiagnosticState(state: DiagnosticState): DiagnosticState {
  let next = { ...state };
  next.moduleSummaries = buildModuleSummaries(next);

  if (next.status !== "complete") {
    const nextModule = findNextActiveModule(next);
    next.currentModuleId = nextModule?.id;
    if (!nextModule && diagnosticModules.length) {
      next.status = "complete";
      next.completedAt = next.completedAt || Date.now();
    }
  }

  next.recommendedLearningPath = generateLearningPath(next);
  next.moduleSummaries = buildModuleSummaries(next);
  return next;
}

function buildModuleSummaries(state: DiagnosticState): Record<string, DiagnosticModuleSummary> {
  const summaries: Record<string, DiagnosticModuleSummary> = {};
  const currentModuleId = state.currentModuleId || diagnosticModules[0]?.id;
  let previousComplete = true;

  for (const module of diagnosticModules) {
    const items = moduleItems(module);
    const itemIds = new Set(items.map((item) => item.id));
    const responses = state.responses.filter((response) => itemIds.has(response.itemId));
    const answered = responses.length;
    const skipped = state.skippedItemIds.filter((id) => itemIds.has(id)).length;
    const confidence = moduleConfidence(state, module);
    const complete = isModuleComplete(state, module);
    const status = complete ? "complete" : module.id === currentModuleId || previousComplete ? "active" : "locked";
    summaries[module.id] = {
      moduleId: module.id,
      answered,
      correct: responses.filter((response) => response.correct).length,
      skipped,
      status,
      confidence
    };
    previousComplete = complete;
  }

  return summaries;
}

function findNextActiveModule(state: DiagnosticState): DiagnosticModule | undefined {
  return diagnosticModules.find((module) => !isModuleComplete(state, module));
}

function isModuleComplete(state: DiagnosticState, module: DiagnosticModule): boolean {
  const items = moduleItems(module);
  const itemIds = new Set(items.map((item) => item.id));
  const usedCount = [...state.answeredItemIds, ...state.skippedItemIds].filter((id) => itemIds.has(id)).length;
  if (usedCount >= module.maxItems) return true;
  if (usedCount < module.minItems) return false;
  if (!module.stopWhenConfidenceReached) return false;
  const targetDiagnoses = module.targetAttributeIds
    .map((id) => state.attributeDiagnoses[id])
    .filter(Boolean);
  if (!targetDiagnoses.length) return false;
  const confident = targetDiagnoses.filter((diagnosis) => diagnosis.confidence === "medium" || diagnosis.confidence === "high").length;
  return confident / targetDiagnoses.length >= 0.72;
}

function moduleConfidence(state: DiagnosticState, module: DiagnosticModule): DiagnosticModuleSummary["confidence"] {
  const diagnoses = module.targetAttributeIds.map((id) => state.attributeDiagnoses[id]).filter(Boolean);
  if (!diagnoses.length) return "unknown";
  const confidentShare = diagnoses.filter((diagnosis) => diagnosis.confidence === "medium" || diagnosis.confidence === "high").length / diagnoses.length;
  if (confidentShare >= 0.8) return "high";
  if (confidentShare >= 0.5) return "medium";
  if (confidentShare >= 0.2) return "low";
  return "unknown";
}

function moduleItems(module: DiagnosticModule): DiagnosticItem[] {
  return diagnosticItems.filter((item) => item.moduleId === module.id).slice(0, module.maxItems);
}

function selectBestItem(state: DiagnosticState, candidates: DiagnosticItem[]): DiagnosticItem | undefined {
  if (!candidates.length) return undefined;
  return [...candidates].sort((a, b) => itemNeedScore(state, b) - itemNeedScore(state, a) || a.difficulty - b.difficulty)[0];
}

function itemNeedScore(state: DiagnosticState, item: DiagnosticItem): number {
  const uncertainty = item.requiredAttributeIds.reduce((sum, attributeId) => {
    const p = state.attributeDiagnoses[attributeId]?.pMastery ?? 0.5;
    return sum + (1 - Math.abs(p - 0.5) * 2);
  }, 0) / Math.max(1, item.requiredAttributeIds.length);
  const missingEvidence = item.requiredAttributeIds.reduce((sum, attributeId) => {
    const evidence = state.attributeDiagnoses[attributeId]?.evidenceCount || 0;
    return sum + Math.max(0, 3 - evidence) / 3;
  }, 0) / Math.max(1, item.requiredAttributeIds.length);
  return uncertainty * 0.65 + missingEvidence * 0.35;
}

function generateLearningPath(state: DiagnosticState): LearningPathNode[] {
  const diagnoses = Object.values(state.attributeDiagnoses);
  const weak = diagnoses
    .filter((diagnosis) => diagnosis.evidenceCount >= 1 && diagnosis.pMastery <= 0.55)
    .sort((a, b) => a.pMastery - b.pMastery || b.evidenceCount - a.evidenceCount)
    .slice(0, 12);

  const nodes: LearningPathNode[] = [];
  const usedTopics = new Set<string>();
  let priority = 1;

  for (const diagnosis of weak) {
    const attribute = diagnosticAttributes[diagnosis.attributeId];
    if (!attribute) continue;
    const topicId = attribute.relatedTopicIds.find((id) => topics[id]);
    nodes.push({
      id: `lp-attr-${attribute.id}`,
      kind: attribute.relatedConceptIds.length ? "concept" : "attribute",
      targetId: attribute.relatedConceptIds[0] || attribute.id,
      title: attribute.title,
      reason: `Diagnostika rodo spragą: tikimybė, kad moki šį gebėjimą, yra ${Math.round(diagnosis.pMastery * 100)}%.`,
      priority: priority++,
      unlocks: topicId ? [topicId] : [],
      status: priority === 2 ? "active" : "recommended"
    });

    if (topicId && !usedTopics.has(topicId)) {
      usedTopics.add(topicId);
      nodes.push({
        id: `lp-topic-${topicId}`,
        kind: "topic",
        targetId: topicId,
        title: topics[topicId].title,
        reason: `Tema padeda sutvirtinti gebėjimą „${attribute.title}“.`,
        priority: priority++,
        unlocks: topics[topicId].nextTopicIds || [],
        status: usedTopics.size === 1 ? "recommended" : "locked"
      });
    }
  }

  if (!nodes.length) {
    const candidateTopic = diagnosticItems.find((item) => topics[item.topicId])?.topicId || Object.keys(topics)[0];
    if (candidateTopic) {
      nodes.push({
        id: `lp-topic-${candidateTopic}`,
        kind: "topic",
        targetId: candidateTopic,
        title: topics[candidateTopic].title,
        reason: state.answeredItemIds.length
          ? "Ryškių spragų dar nematyti. Tęsk mokymąsi nuo artimiausios programos temos."
          : "Atlik diagnostiką, kad šis planas būtų pakeistas tikslesniu keliu.",
        priority: 1,
        unlocks: topics[candidateTopic].nextTopicIds || [],
        status: "active"
      });
    }
  }

  return nodes.slice(0, 18);
}

function classifyConfidence(pMastery: number, evidenceCount: number): AttributeDiagnosis["confidence"] {
  if (evidenceCount >= 4 && (pMastery >= 0.85 || pMastery <= 0.25)) return "high";
  if (evidenceCount >= 3 && (pMastery >= 0.75 || pMastery <= 0.35)) return "medium";
  if (evidenceCount >= 1) return "low";
  return "unknown";
}

function confidenceWeight(confidence: DiagnosticAnswerConfidence): number {
  if (confidence === "guessed") return 0.65;
  if (confidence === "unsure") return 0.85;
  return 1;
}

function normalizeAnswer(value: string): string {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(",", ".")
    .replace(/\\%/g, "%")
    .replace(/[{}]/g, "")
    .replace(/−/g, "-");
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
