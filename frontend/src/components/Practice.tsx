import React, { useMemo, useState, useEffect } from 'react';
import { State, Exercise } from '../types';
import { exercises as allExercises, topics, concepts } from '../content';
import { recordAttempt, ensureSrsCard } from '../systems';
import { MathText } from './MathText';

interface PracticeProps {
  state: State;
  topicId?: string;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  showToast: (message: string) => void;
}

export const Practice: React.FC<PracticeProps> = ({
  state,
  topicId,
  navigate,
  updateState,
  showToast
}) => {
  const activeTopicId = topicId || state.activeTopicId || Object.keys(topics)[0];
  const topic = topics[activeTopicId];
  const isOlympiad = topic?.level === 'olympiad' || state.profile.libraryToggle === 'olympiad';
  const currentPool = allExercises.filter((ex) => {
    if (ex.topicId !== activeTopicId) return false;
    const exerciseIsOlympiad = ex.level === 'olympiad' || Boolean(ex.olympiadTrack || ex.olympiadTier);
    if (topic?.level === 'olympiad') return true;
    return isOlympiad ? exerciseIsOlympiad : !exerciseIsOlympiad;
  });
  const solvedIds = useMemo(
    () => new Set(state.attempts.filter((attempt) => attempt.correct).map((attempt) => attempt.exerciseId)),
    [state.attempts]
  );

  // Practice session state
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [showExercisePicker, setShowExercisePicker] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [exerciseSearch, setExerciseSearch] = useState("");
  const [visibleHints, setVisibleHints] = useState<string[]>([]);
  const [activeHintTab, setActiveHintTab] = useState<number>(0);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [result, setResult] = useState<{ correct: boolean } | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [startedAt, setStartedAt] = useState(Date.now());

  // Olympiad Specific States
  const [showFirstObservation, setShowFirstObservation] = useState(false);
  const [scratchpadText, setScratchpadText] = useState("");
  const [addedSrsCardIds, setAddedSrsCardIds] = useState<Set<string>>(new Set());
  const [openSolutionMethods, setOpenSolutionMethods] = useState<Set<string>>(new Set());
  const [selfCheckDraft, setSelfCheckDraft] = useState("");

  const resetExerciseSession = (exercise: Exercise) => {
    setCurrentExercise(exercise);
    setShowExercisePicker(false);
    setVisibleHints([]);
    setActiveHintTab(0);
    setAttemptsCount(0);
    setResult(null);
    setTextAnswer("");
    setSelectedChoice("");
    setStartedAt(Date.now());

    // Reset Olympiad states
    setShowFirstObservation(false);
    setScratchpadText("");
    setAddedSrsCardIds(new Set());
    setOpenSolutionMethods(new Set(["method-1", "0", "1"])); // Default expand first method
    setSelfCheckDraft("");
  };

  // Pick next exercise
  const loadNextExercise = (newPool = currentPool) => {
    if (!newPool.length) {
      setCurrentExercise(null);
      setShowExercisePicker(true);
      return;
    }
    const next = newPool.find((ex) => !solvedIds.has(ex.id)) || newPool[Math.floor(Math.random() * newPool.length)];
    resetExerciseSession(next);
  };

  // Run when activeTopicId changes
  useEffect(() => {
    setCurrentExercise(null);
    setShowExercisePicker(true);
    setSelectedDifficulty("all");
    setSelectedStatus("all");
    setExerciseSearch("");
  }, [activeTopicId]);

  if (!topic) {
    return (
      <section className="panel">
        <p>Pasirinkta tema nerasta.</p>
        <button onClick={() => navigate("practice")}>Grįžti į sąrašą</button>
      </section>
    );
  }

  const getDifficultyKey = (exercise: Exercise) =>
    exercise.level === 'olympiad'
      ? (exercise.olympiadTier || exercise.difficulty || "standard")
      : (exercise.difficulty || "bendras");

  const getDifficultyLabel = (value?: string) => {
    switch (value) {
      case 'introductory': return 'Įvadinis';
      case 'standard': return 'Standartinis';
      case 'advanced': return 'Pažengęs';
      case 'selection': return 'Atrankinis';
      case 'easy': return 'Lengvas';
      case 'medium': return 'Vidutinis';
      case 'hard': return 'Sunkus';
      case 'bendras': return 'Bendras';
      default: return value || 'Bendras';
    }
  };

  const getExerciseTitle = (exercise: Exercise, index: number) =>
    exercise.selectableTitle || (exercise as any).title || `Uždavinys ${index + 1}`;

  const getExercisePreview = (exercise: Exercise) =>
    exercise.statement.replace(/\s+/g, " ");

  const difficultyOptions = Array.from(new Set(currentPool.map(getDifficultyKey)));
  const filteredPool = currentPool.filter((exercise) => {
    const query = exerciseSearch.trim().toLowerCase();
    const searchable = [
      exercise.statement,
      exercise.statementPreview,
      exercise.selectableTitle,
      exercise.strand,
      exercise.difficulty,
      exercise.olympiadTier,
      exercise.olympiadTrack,
      ...(exercise.concepts || []),
      ...(exercise.strategyTags || [])
    ].filter(Boolean).join(" ").toLowerCase();
    const statusMatch =
      selectedStatus === "all" ||
      (selectedStatus === "unsolved" && !solvedIds.has(exercise.id)) ||
      (selectedStatus === "solved" && solvedIds.has(exercise.id));
    return (
      (selectedDifficulty === "all" || getDifficultyKey(exercise) === selectedDifficulty) &&
      statusMatch &&
      (!query || searchable.includes(query))
    );
  });

  const findNearbyExercise = (direction: 'easier' | 'same' | 'harder') => {
    if (!currentExercise) return null;
    const order = isOlympiad
      ? ['introductory', 'standard', 'advanced', 'selection']
      : ['easy', 'medium', 'hard'];
    const currentKey = getDifficultyKey(currentExercise);
    const currentIdx = Math.max(0, order.indexOf(currentKey));
    return currentPool.find((exercise) => {
      if (exercise.id === currentExercise.id) return false;
      const idx = Math.max(0, order.indexOf(getDifficultyKey(exercise)));
      if (direction === 'same') return idx === currentIdx && !solvedIds.has(exercise.id);
      if (direction === 'easier') return idx < currentIdx;
      return idx > currentIdx;
    }) || null;
  };

  // Handle hint reveal
  const handleHint = () => {
    if (!currentExercise) return;
    const hints = currentExercise.hints || [];
    if (visibleHints.length < hints.length) {
      const nextHint = hints[visibleHints.length];
      setVisibleHints([...visibleHints, nextHint]);
      setActiveHintTab(visibleHints.length);
    }
  };

  // Check if multiple choice has choices
  const hasChoices = (ex: Exercise) => {
    return ex.choices && ex.choices.length > 0;
  };

  // Handle Answer submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentExercise || result?.correct) return;

    let correct = false;
    if (currentExercise.type === 'structuredReasoning') {
      // Structured Reasoning (Self check style)
      correct = true; // Engage / attempt completes it
    } else if (hasChoices(currentExercise)) {
      correct = selectedChoice === currentExercise.answer;
    } else {
      const cleanInput = textAnswer.trim().replace(/\s+/g, '').toLowerCase();
      // Handle array of accepted answers if present (e.g. from generated olympiad numeric output)
      const accepted = (currentExercise as any).acceptedAnswers || [currentExercise.answer];
      correct = accepted.some((ans: string) => {
        const cleanAns = ans.trim().replace(/\s+/g, '').toLowerCase();
        return cleanInput === cleanAns;
      });
    }

    setAttemptsCount((prev) => prev + 1);
    setResult({ correct });

    // Record attempt in state
    updateState((prev) =>
      recordAttempt(prev, currentExercise, {
        correct,
        seconds: Math.round((Date.now() - startedAt) / 1000),
        hintsUsed: visibleHints.length,
        attempts: attemptsCount + 1
      })
    );

    if (correct) {
      showToast(currentExercise.type === 'structuredReasoning' ? "Uždavinys pažymėtas kaip atliktas!" : "Teisingai! Puikus darbas.");
    } else {
      showToast("Atsakymas neteisingas, pabandyk dar kartą arba peržiūrėk užuominas.");
    }
  };

  // Reveal solution manually
  const handleRevealSolution = () => {
    if (!currentExercise) return;
    setResult({ correct: false });
    // Record incomplete attempt just to unlock solution
    updateState((prev) =>
      recordAttempt(prev, currentExercise, {
        correct: false,
        seconds: Math.round((Date.now() - startedAt) / 1000),
        hintsUsed: visibleHints.length,
        attempts: attemptsCount + 1,
        revealed: true
      })
    );
    showToast("Sprendimas atskleistas.");
  };

  // Add SRS Card Helper
  const addSrsCard = (seed: any) => {
    updateState((prev) => {
      return ensureSrsCard(prev, {
        id: seed.id,
        deck: seed.deck || "theory",
        sourceId: currentExercise?.id || "",
        topicId: activeTopicId,
        cardType: seed.cardType || "concept",
        front: seed.front,
        back: seed.back,
        enabled: true
      });
    });
    setAddedSrsCardIds((prev) => {
      const next = new Set(prev);
      next.add(seed.id);
      return next;
    });
    showToast("Kortelė sėkmingai pridėta į tavo SRS kartojimo eilę!");
  };

  // Prerequisite check helper
  const getLowPrerequisites = () => {
    if (!currentExercise || currentExercise.level !== 'olympiad') return [];
    const minMastery = currentExercise.requiredPrerequisiteMastery || 50;
    const prereqIds = currentExercise.prerequisiteTopicIds || [];
    return prereqIds.filter((pId) => {
      const masteryVal = state.mastery[pId]?.value || 0;
      return masteryVal < minMastery;
    });
  };

  const lowPrereqs = getLowPrerequisites();

  // Map tier name to lithuanian label
  const getTierLabel = (tier?: string) => {
    switch (tier) {
      case 'introductory': return 'Įvadinis';
      case 'standard': return 'Standartinis';
      case 'advanced': return 'Pažengęs';
      case 'selection': return 'Atrankinis';
      default: return tier || 'Bendra';
    }
  };

  const getSimilarExercises = () => {
    if (!currentExercise) return [];
    const currentTags = currentExercise.strategyTags || [];
    return allExercises.filter((ex) => {
      if (ex.id === currentExercise.id) return false;
      if (ex.level !== 'olympiad') return false;
      const sameTopic = ex.topicId === currentExercise.topicId;
      const sharesTags = (ex.strategyTags || []).some(t => currentTags.includes(t));
      return sameTopic || sharesTags;
    }).slice(0, 3);
  };

  const getHarderExercise = () => {
    if (!currentExercise) return null;
    const tiers = ['introductory', 'standard', 'advanced', 'selection'];
    const currentIdx = tiers.indexOf(currentExercise.olympiadTier || 'introductory');
    return allExercises.find((ex) => {
      if (ex.level !== 'olympiad') return false;
      if (ex.topicId !== currentExercise.topicId) return false;
      const exIdx = tiers.indexOf(ex.olympiadTier || 'introductory');
      return exIdx > currentIdx;
    });
  };

  if (showExercisePicker || !currentExercise) {
    return (
      <section className="view">
        <div className="section-head practice-selection-head">
          <div>
            <span className="eyebrow">Praktika • {isOlympiad ? "olimpiadinis turinys" : "mokyklinis turinys"}</span>
            <h1>{topic.title}</h1>
            <p className="lead">
              Pasirink konkretų uždavinį pagal lygį, būseną arba raktinius žodžius. Rekomenduojama pradėti nuo neišspręstų uždavinių.
            </p>
          </div>
          <div className="actions actions-stack-mobile">
            <button onClick={() => navigate("practice")}>Grįžti į sąrašą</button>
            <button
              className="primary"
              onClick={() => loadNextExercise(filteredPool.length ? filteredPool : currentPool)}
              disabled={!currentPool.length}
            >
              Pradėti rekomenduojamą
            </button>
          </div>
        </div>

        <section className="panel practice-picker-toolbar">
          <label>
            Paieška
            <input
              value={exerciseSearch}
              onChange={(event) => setExerciseSearch(event.target.value)}
              placeholder="Ieškok pagal tekstą, metodą ar sąvoką"
            />
          </label>
          <label>
            Sudėtingumas
            <select value={selectedDifficulty} onChange={(event) => setSelectedDifficulty(event.target.value)}>
              <option value="all">Visi lygiai</option>
              {difficultyOptions.map((difficulty) => (
                <option key={difficulty} value={difficulty}>{getDifficultyLabel(difficulty)}</option>
              ))}
            </select>
          </label>
          <label>
            Būsena
            <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
              <option value="all">Visi uždaviniai</option>
              <option value="unsolved">Dar neišspręsti</option>
              <option value="solved">Išspręsti</option>
            </select>
          </label>
        </section>

        {!currentPool.length ? (
          <div className="panel practice-empty-state">
            <h3>Nėra uždavinių</h3>
            <p>Šiai temai šiuo metu nėra paruoštų uždavinių.</p>
          </div>
        ) : filteredPool.length === 0 ? (
          <div className="panel practice-empty-state">
            <h3>Nerasta pagal pasirinktus filtrus</h3>
            <p>Pabandyk pakeisti sudėtingumą, būseną arba paieškos tekstą.</p>
            <button onClick={() => {
              setSelectedDifficulty("all");
              setSelectedStatus("all");
              setExerciseSearch("");
            }}>
              Išvalyti filtrus
            </button>
          </div>
        ) : (
          <section className="practice-exercise-grid">
            {filteredPool.map((exercise) => {
              const solved = solvedIds.has(exercise.id);
              const indexInTopic = Math.max(0, currentPool.findIndex((item) => item.id === exercise.id));
              return (
                <button
                  key={exercise.id}
                  type="button"
                  className={`exercise-selection-card ${solved ? "solved" : ""}`}
                  onClick={() => resetExerciseSession(exercise)}
                >
                  <span className="eyebrow">{exercise.strand} • {getDifficultyLabel(getDifficultyKey(exercise))}</span>
                  <strong>{getExerciseTitle(exercise, indexInTopic)}</strong>
                  <span className="exercise-selection-preview">
                    <MathText text={getExercisePreview(exercise)} onConceptClick={(id) => navigate("glossary", id)} />
                  </span>
                  <span className="exercise-selection-meta">
                    <span>{solved ? "Išspręsta" : "Dar neišspręsta"}</span>
                    {exercise.estimatedSeconds && <span>~{Math.max(1, Math.round(exercise.estimatedSeconds / 60))} min.</span>}
                    {exercise.hints?.length ? <span>{exercise.hints.length} užuom.</span> : null}
                  </span>
                </button>
              );
            })}
          </section>
        )}
      </section>
    );
  }

  const similarExercises = getSimilarExercises();
  const harderEx = getHarderExercise();
  const currentExerciseIndex = Math.max(0, currentPool.findIndex((exercise) => exercise.id === currentExercise.id));
  const exerciseDisplayTitle = (currentExercise as any).title || `Uždavinys ${currentExerciseIndex + 1}`;

  return (
    <section className="view">
      <div className="section-head" style={{ marginBottom: '24px' }}>
        <div>
          <span className="eyebrow">Praktinis mokymasis</span>
          <h1>{topic.title}</h1>
        </div>
        <button onClick={() => navigate("practice")}>Grįžti į sąrašą</button>
      </div>

      <div className="exercise-session-nav">
        <button type="button" onClick={() => setShowExercisePicker(true)}>
          Pasirinkti kitą uždavinį
        </button>
        <button type="button" onClick={() => {
          const next = findNearbyExercise('easier');
          if (next) resetExerciseSession(next);
        }} disabled={!findNearbyExercise('easier')}>
          Lengvesnis
        </button>
        <button type="button" onClick={() => {
          const next = findNearbyExercise('same');
          if (next) resetExerciseSession(next);
        }} disabled={!findNearbyExercise('same')}>
          Panašaus lygio
        </button>
        <button type="button" onClick={() => {
          const next = findNearbyExercise('harder');
          if (next) resetExerciseSession(next);
        }} disabled={!findNearbyExercise('harder')}>
          Sunkesnis
        </button>
      </div>

      {/* ──── OLYMPIAD LAYOUT ──── */}
      {isOlympiad ? (
        <div className="olympiad-workspace">
          {/* Top Info Area */}
          <div className="panel olympiad-info-panel">
            <div className="olympiad-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
              <div>
                <span className="eyebrow" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                  {currentExercise.olympiadTrack || "Skaičių teorija"}
                </span>
                <h1 style={{ margin: '4px 0 0 0', fontSize: '24px' }}>
                  {exerciseDisplayTitle}
                </h1>
              </div>
              <div className="olympiad-top-actions" style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    const formEl = document.getElementById('scratchpad');
                    if (formEl) (formEl as HTMLElement).focus();
                  }}
                  className="primary"
                >
                  Spręsti
                </button>
                <button
                  type="button"
                  onClick={() => navigate("topic", activeTopicId)}
                  className="secondary"
                >
                  Rodyti teoriją
                </button>
                {lowPrereqs.length > 0 && (
                  <button
                    type="button"
                    onClick={() => navigate("topic", lowPrereqs[0])}
                    className="warning"
                    style={{ background: 'var(--gold)', color: 'white' }}
                  >
                    Kartoti prielaidas
                  </button>
                )}
              </div>
            </div>

            <div className="olympiad-badge-row" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span className="badge-olympiad-tier">
                Pakopa: {getTierLabel(currentExercise.olympiadTier)}
              </span>
              {currentExercise.estimatedSeconds && (
                <span className="badge-olympiad-time">
                  ⏱️ Sprendimo laikas: ~{Math.round(currentExercise.estimatedSeconds / 60)} min.
                </span>
              )}
              <span className="badge-olympiad-time" style={{
                background: lowPrereqs.length > 0 ? 'rgba(201, 139, 34, 0.1)' : 'rgba(46, 117, 89, 0.1)',
                border: lowPrereqs.length > 0 ? '1px solid rgba(201, 139, 34, 0.3)' : '1px solid rgba(46, 117, 89, 0.3)',
                color: lowPrereqs.length > 0 ? 'var(--gold)' : 'var(--success, #2e7559)'
              }}>
                Pradinės sąlygos: {lowPrereqs.length > 0 ? `Trūksta pasirengimo (rekomenduojama ${currentExercise.requiredPrerequisiteMastery || 50}%)` : 'Tinkamas pasirengimas'}
              </span>
              <span className="badge-olympiad-time" style={{ background: 'rgba(14, 92, 106, 0.08)', border: '1px solid rgba(14, 92, 106, 0.2)', color: 'var(--primary)' }}>
                Progreso įtaka: +{Math.round(100 / (currentPool.length || 1))}%
              </span>
            </div>

            <div className="olympiad-statement-box" style={{ marginTop: '16px', padding: '16px 0', borderTop: '1px solid var(--line)' }}>
              <strong style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: 'var(--muted)' }}>Uždavinys</strong>
              <h2 className="olympiad-statement" style={{ margin: 0, fontWeight: 'normal', fontSize: '20px' }}>
                <MathText text={currentExercise.statement} onConceptClick={(id) => navigate("glossary", id)} />
              </h2>
            </div>
          </div>

          {/* Before solving: checklist and core observation */}
          <div className="grid">
            {/* Prerequisite Checklist */}
            <div className="panel half-grid-left prerequisite-checklist-panel">
              <h3 style={{ color: 'var(--primary)', marginBottom: '4px' }}>Ką verta prisiminti</h3>
              <div className="prerequisite-checklist">
                {(currentExercise.prerequisiteConceptIds || []).map((cid) => {
                  const conceptObj = concepts[cid];
                  return (
                    <label key={cid} className="prerequisite-checklist-item">
                      <input id={`prereq-concept-${cid}`} name={`prereq-concept-${cid}`} type="checkbox" style={{ cursor: 'pointer' }} />
                      <span>
                        Sąvoka:{" "}
                        <span
                          className="prerequisite-link"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("glossary", cid);
                          }}
                        >
                          {conceptObj?.title || cid}
                        </span>
                      </span>
                    </label>
                  );
                })}
                {(currentExercise.prerequisiteTopicIds || []).map((tId) => {
                  const topicObj = topics[tId];
                  return (
                    <label key={tId} className="prerequisite-checklist-item" htmlFor={`prereq-topic-${tId}`}>
                      <input id={`prereq-topic-${tId}`} name={`prereq-topic-${tId}`} type="checkbox" style={{ cursor: 'pointer' }} />
                      <span>
                        Tema:{" "}
                        <span
                          className="prerequisite-link"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("topic", tId);
                          }}
                        >
                          {topicObj?.title || tId}
                        </span>
                      </span>
                    </label>
                  );
                })}
                {(currentExercise.expectedMethodIds || []).map((mId) => {
                  const conceptObj = concepts[mId];
                  return (
                    <label key={mId} className="prerequisite-checklist-item" htmlFor={`prereq-method-${mId}`}>
                      <input id={`prereq-method-${mId}`} name={`prereq-method-${mId}`} type="checkbox" style={{ cursor: 'pointer' }} />
                      <span>
                        Metodas:{" "}
                        <span
                          className="prerequisite-link"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("glossary", mId);
                          }}
                        >
                          {conceptObj?.title || mId}
                        </span>
                      </span>
                    </label>
                  );
                })}
                {(!currentExercise.prerequisiteConceptIds?.length && !currentExercise.prerequisiteTopicIds?.length && !currentExercise.expectedMethodIds?.length) && (
                  <p style={{ fontSize: '13.5px', margin: 0 }}>Šiam uždaviniui papildomų prielaidų nėra.</p>
                )}
              </div>
            </div>

            {/* Core Observation */}
            {currentExercise.coreIdea && (
              <div className="panel core-idea-box half-grid-right" style={{ margin: 0 }}>
                <div className="core-idea-header" onClick={() => setShowFirstObservation(!showFirstObservation)}>
                  <h3>💡 Pirmas pastebėjimas</h3>
                  <button type="button" style={{ padding: '4px 10px', fontSize: '12px' }}>
                    {showFirstObservation ? "Paslėpti" : "Rodyti"}
                  </button>
                </div>
                {showFirstObservation && (
                  <div className="core-idea-body">
                    <strong>{currentExercise.coreIdea.title}</strong>
                    <p style={{ marginTop: '6px', fontSize: '14px', color: 'var(--text)' }}>
                      <MathText text={currentExercise.coreIdea.text} onConceptClick={(id) => navigate("glossary", id)} />
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Working Workspace: Scratchpad & Inputs */}
          <div className="panel">
            <div className="scratchpad-container">
              <label htmlFor="scratchpad">Juodraštis / Sprendimo eiga</label>
              <textarea
                id="scratchpad"
                name="scratchpad"
                className="scratchpad-textarea"
                placeholder="Rašyk formules, pastebėjimus ar skaičiavimus čia..."
                value={scratchpadText}
                onChange={(e) => setScratchpadText(e.target.value)}
              />
            </div>

            <form onSubmit={handleSubmit} className="practice-form" style={{ marginTop: '20px' }}>
              {currentExercise.type === 'structuredReasoning' ? (
                <div className="self-check-container">
                  <h4>Savikontrolės režimas</h4>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>
                    Šis uždavinys reikalauja įrodymo arba struktūrizuoto sprendimo. Užrašyk savo atsakymo santrauką ir palygink su oficialiu sprendimu:
                  </p>
                  <textarea
                    id="self-check-answer"
                    name="self-check-answer"
                    placeholder="Įvesk savo atsakymą ar sprendimo išvadą..."
                    value={selfCheckDraft}
                    onChange={(e) => setSelfCheckDraft(e.target.value)}
                    disabled={result !== null}
                  />
                </div>
              ) : hasChoices(currentExercise) ? (
                <div className="choice-list">
                  {currentExercise.choices?.map((choice, cIdx) => {
                    const active = selectedChoice === choice;
                    const choiceId = `choice-${cIdx}`;
                    return (
                      <label key={choice} className={`choice-option ${active ? "active" : ""}`} htmlFor={choiceId}>
                        <input
                          id={choiceId}
                          type="radio"
                          name="olympiad-answer-choice"
                          value={choice}
                          checked={active}
                          onChange={(e) => setSelectedChoice(e.target.value)}
                          disabled={result?.correct}
                        />
                        <span>
                          <MathText text={choice} onConceptClick={(id) => navigate("glossary", id)} />
                        </span>
                      </label>
                    );
                  })}
                </div>
              ) : (
                <div className="text-answer-wrapper">
                  <input
                    id="olympiad-answer-text"
                    className="answer-input"
                    name="olympiad-answer-text"
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    placeholder="Įrašyk galutinį skaitinį atsakymą"
                    autoComplete="off"
                    disabled={result?.correct}
                  />
                </div>
              )}

              {/* Užuominos pagination/tabs */}
              {visibleHints.length > 0 && (
                <div className="hint-box" style={{ marginTop: '16px', padding: '16px', background: 'var(--surface-2)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                  <strong style={{ display: 'block', marginBottom: '10px' }}>Užuominos</strong>
                  <div className="hint-tabs">
                    {visibleHints.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`hint-tab-btn ${activeHintTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveHintTab(idx)}
                      >
                        Užuomina {idx + 1}
                      </button>
                    ))}
                  </div>
                  <div className="hint-tab-content" style={{ marginTop: '12px' }}>
                    {(() => {
                      const hint = visibleHints[activeHintTab];
                      if (!hint) return null;
                      const rawHint = currentExercise.hintsRaw?.[activeHintTab];
                      const kindLabel = rawHint?.kind === 'orientation' ? 'Orientacija' :
                                        rawHint?.kind === 'observation' ? 'Pastebėjimas' :
                                        rawHint?.kind === 'method' ? 'Metodas' :
                                        rawHint?.kind === 'scaffold' ? 'Gairė' : 'Patarimas';
                      return (
                        <p className="hint-text" style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.5' }}>
                          💡 <strong>Užuomina {activeHintTab + 1} ({kindLabel}):</strong> <MathText text={hint} onConceptClick={(id) => navigate("glossary", id)} />
                        </p>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* Actions row */}
              <div className="actions practice-actions actions-stack-mobile" style={{ marginTop: '20px' }}>
                <button
                  type="button"
                  onClick={handleHint}
                  disabled={result?.correct || visibleHints.length >= (currentExercise.hints || []).length}
                >
                  Užuomina ({Math.max(0, (currentExercise.hints || []).length - visibleHints.length)})
                </button>

                {result === null ? (
                  <>
                    <button
                      type="submit"
                      className="primary"
                    >
                      {currentExercise.type === 'structuredReasoning' ? "Pateikti atsakymą savikontrolei" : "Tikrinti"}
                    </button>

                    <button
                      type="button"
                      onClick={handleRevealSolution}
                      className="secondary-outline"
                    >
                      Parodyti sprendimą
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => loadNextExercise()}
                    className="primary"
                  >
                    Kitas uždavinys
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* After Attempt or Reveal Area */}
          {result !== null && (
            <div className="olympiad-aftermath-panel">
              {/* Correctness Header */}
              {currentExercise.type !== 'structuredReasoning' && (
                <div className={`result ${result.correct ? "ok" : "bad"}`} style={{ padding: '20px', marginBottom: '20px' }}>
                  <h3>{result.correct ? "Teisingai!" : "Atsakymas neteisingas, bet nesustok mokytis."}</h3>
                </div>
              )}

              {/* Full Solution and Steps */}
              <div className="panel olympiad-solution-panel">
                <h3 className="olympiad-solution-heading">Pilnas sprendimas</h3>

                {currentExercise.solutionMethods && currentExercise.solutionMethods.length > 0 ? (
                  <div className="olympiad-solution-methods">
                    {currentExercise.solutionMethods.map((method, mIdx) => {
                      const methodId = method.id || String(mIdx);
                      const isExpanded = openSolutionMethods.has(methodId);
                      return (
                        <div key={methodId} className="method-accordion">
                          <div
                            className="method-accordion-header"

                            onClick={() => {
                              const nextMethods = new Set(openSolutionMethods);
                              if (nextMethods.has(methodId)) nextMethods.delete(methodId);
                              else nextMethods.add(methodId);
                              setOpenSolutionMethods(nextMethods);
                            }}
                          >
                            <span>💡 Būdas {mIdx + 1}: {method.title}</span>
                            <span>{isExpanded ? "▲" : "▼"}</span>
                          </div>
                          {isExpanded && (
                            <div className="method-accordion-body">
                              {method.strategyTags && (
                                <div className="strategy-tags-row">
                                  {method.strategyTags.map((tag: string) => (
                                    <span key={tag} className="concept-chip" style={{ fontSize: '11px', padding: '3px 8px' }}>
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}

                              <div className="step-list">
                                {method.steps.map((step: any, sIdx: number) => (
                                  <div key={sIdx} className="step-card">
                                    <div className="step-header">Žingsnis {sIdx + 1}: {step.title}</div>
                                    <div className="step-details-grid">
                                      <div className="step-detail-item">
                                        <strong>Veiksmas / Idėja</strong>
                                        <span>
                                          <MathText text={step.action} onConceptClick={(id) => navigate("glossary", id)} />
                                        </span>
                                      </div>
                                      <div className="step-detail-item">
                                        <strong>Paaiškinimas (Kodėl?)</strong>
                                        <span>
                                          <MathText text={step.reason} onConceptClick={(id) => navigate("glossary", id)} />
                                        </span>
                                      </div>
                                      <div className="step-detail-item">
                                        <strong>Rezultatas</strong>
                                        <span>
                                          <MathText text={step.result} onConceptClick={(id) => navigate("glossary", id)} />
                                        </span>
                                      </div>
                                    </div>
                                    {step.latex && (
                                      <div className="step-latex-display" style={{ margin: '8px 0', padding: '8px', background: 'rgba(0,0,0,0.03)', borderRadius: '4px', textAlign: 'center' }}>
                                        <MathText text={`$$${step.latex.startsWith('$') ? step.latex.replace(/^\$\$?|\$\$?$/g, '') : step.latex}$$`} onConceptClick={(id) => navigate("glossary", id)} />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <div className="method-final-answer" style={{ marginTop: '14px', fontWeight: 'bold' }}>
                                Galutinis atsakymas: {method.finalAnswer}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="result-explanation">
                    <p>
                      <MathText text={currentExercise.solution} onConceptClick={(id) => navigate("glossary", id)} />
                    </p>
                  </div>
                )}

                {/* Alternate Solution Text */}
                {currentExercise.solutionMethods && currentExercise.solutionMethods.length > 0 && (
                  <div className="alternate-methods-section" style={{ marginTop: '20px' }}>
                    <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '8px' }}>Kiti sprendimo būdai</strong>
                    {currentExercise.solutionMethods.length > 1 ? (
                      <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                        Šis uždavinys turi kelis sprendimo būdus (žr. Būdas 1, Būdas 2 viršuje).
                      </p>
                    ) : (
                      <div className="alternate-method-note" style={{ fontStyle: 'italic', fontSize: '13.5px', color: 'var(--muted)' }}>
                        <MathText text={(currentExercise as any).alternateMethodNote || "Šiam uždaviniui nepateikiamas atskiras alternatyvus metodas, nes pagrindinė idėja yra viena."} onConceptClick={(id) => navigate("glossary", id)} />
                      </div>
                    )}
                  </div>
                )}

                {/* Alternate Solution Text Fallback for generated curriculum format */}
                {(currentExercise as any).alternate && !currentExercise.solutionMethods && (
                  <div className="alternate-methods alternate-methods-box">
                    <strong>Kiti sprendimo būdai</strong>
                    <p style={{ marginTop: '8px', margin: 0 }}>
                      <MathText text={(currentExercise as any).alternate} onConceptClick={(id) => navigate("glossary", id)} />
                    </p>
                  </div>
                )}
              </div>

              {/* Common Traps warnings */}
              {currentExercise.commonTraps && currentExercise.commonTraps.length > 0 && (
                <div className="traps-container">
                  <h3 style={{ color: 'var(--primary)' }}>Dažnos klaidos</h3>
                  <div className="traps-grid">
                    {currentExercise.commonTraps.map((trap, idx) => (
                      <div key={trap.id || idx} className="trap-card">
                        <strong>Klaida: {trap.title}</strong>
                        <div className="trap-details" style={{ marginTop: '8px' }}>
                          <div>🔴 <strong>Klaidingas veiksmas:</strong> <MathText text={trap.wrongMove} onConceptClick={(id) => navigate("glossary", id)} /></div>
                          <div>🤔 <strong>Kodėl tai vilioja:</strong> <MathText text={trap.whyTempting} onConceptClick={(id) => navigate("glossary", id)} /></div>
                          <div>🟢 <strong>Teisingas pataisymas:</strong> <MathText text={trap.correction} onConceptClick={(id) => navigate("glossary", id)} /></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Reflection Card */}
              {currentExercise.reflectionPrompts && currentExercise.reflectionPrompts.length > 0 && (
                <div className="reflection-container">
                  <h3 style={{ color: 'var(--primary)' }}>Ką išmokti iš šio uždavinio</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>
                    Olimpiadinio mąstymo lavinimui atsakyk sau į šiuos klausimus apie išspręstą uždavinį:
                  </p>
                  <ul className="reflection-list">
                    {currentExercise.reflectionPrompts.map((prompt, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>
                        <MathText text={prompt} onConceptClick={(id) => navigate("glossary", id)} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Similar Exercises Section */}
              {similarExercises.length > 0 && (
                <div className="similar-exercises-container" style={{ marginTop: '24px' }}>
                  <h3 style={{ color: 'var(--primary)' }}>Panašūs uždaviniai</h3>
                  <div className="similar-exercises-list" style={{ display: 'grid', gap: '10px', marginTop: '10px' }}>
                    {similarExercises.map((ex) => (
                      <div key={ex.id} className="similar-exercise-card" style={{ padding: '12px', border: '1px dashed var(--primary-light)', borderRadius: '6px', background: 'var(--surface-2)' }}>
                        <div style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span>{ex.olympiadTrack || "Skaičių teorija"} • {getTierLabel(ex.olympiadTier)}</span>
                          <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => {
                            setCurrentExercise(ex);
                            setVisibleHints([]);
                            setActiveHintTab(0);
                            setAttemptsCount(0);
                            setResult(null);
                            setTextAnswer("");
                            setSelectedChoice("");
                            setStartedAt(Date.now());
                            setShowFirstObservation(false);
                            setScratchpadText("");
                            setAddedSrsCardIds(new Set());
                            setOpenSolutionMethods(new Set(["method-1", "0", "1"]));
                            setSelfCheckDraft("");
                          }}>
                            Spręsti →
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '13.5px', overflowWrap: 'anywhere' }}>
                          {ex.statement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SRS seeds addition panel */}
              {currentExercise.srsSeeds && currentExercise.srsSeeds.length > 0 && (
                <div className="srs-seeds-panel">
                  <h3>🧠 Įtraukti į atminties korteles (SRS)</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--muted)' }}>
                    Šie olimpiadiniai dėsningumai, sąvokos ar idėjos gali būti išsaugotos SRS kartojimui, kad nepamirštum jų ateityje:
                  </p>
                  <div className="srs-seeds-list">
                    {currentExercise.srsSeeds.map((seed) => {
                      const added = addedSrsCardIds.has(seed.id) || state.srsCards.some(c => c.id === seed.id);
                      return (
                        <div key={seed.id} className="srs-seed-card">
                          <div className="srs-seed-info">
                            <strong>{seed.front}</strong>
                            <span>{seed.back}</span>
                          </div>
                          {added ? (
                            <span className="srs-seed-added-badge">Pridėta!</span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => addSrsCard(seed)}
                              className="secondary-outline"
                            >
                              Pridėti į SRS
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Completion recommendation panel */}
              <div className="recommendation-panel">
                <h3 style={{ color: 'var(--primary)', margin: '0 0 4px 0' }}>Rekomendacijos</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '0 0 16px 0' }}>
                  Atlikai užduotį! Štai rekomenduojami kiti žingsniai tavo mokymosi kelionėje:
                </p>
                <div className="recommendation-grid">
                  {similarExercises.length > 0 && (
                    <div className="recommendation-card">
                      <div>
                        <strong style={{ fontSize: '14px', display: 'block', marginBottom: '4px' }}>Panašus uždavinys</strong>
                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Spręsk panašų to paties lygio uždavinį temos įtvirtinimui.</span>
                      </div>
                      <button
                        type="button"
                        className="primary recommendation-btn"
                        style={{ marginTop: '12px', padding: '6px 12px', fontSize: '12.5px' }}
                        onClick={() => {
                          const nextEx = similarExercises[0];
                          setCurrentExercise(nextEx);
                          setVisibleHints([]);
                          setActiveHintTab(0);
                          setAttemptsCount(0);
                          setResult(null);
                          setTextAnswer("");
                          setSelectedChoice("");
                          setStartedAt(Date.now());
                          setShowFirstObservation(false);
                          setScratchpadText("");
                          setAddedSrsCardIds(new Set());
                          setOpenSolutionMethods(new Set(["method-1", "0", "1"]));
                          setSelfCheckDraft("");
                        }}
                      >
                        Spręsti
                      </button>
                    </div>
                  )}

                  {lowPrereqs.length > 0 && (
                    <div className="recommendation-card">
                      <div>
                        <strong style={{ fontSize: '14px', display: 'block', marginBottom: '4px' }}>Prielaidų kartojimas</strong>
                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Tavo žinios temoje {topics[lowPrereqs[0]]?.title} yra žemos.</span>
                      </div>
                      <button
                        type="button"
                        className="secondary recommendation-btn"
                        style={{ marginTop: '12px', padding: '6px 12px', fontSize: '12.5px', background: 'var(--gold)', color: 'white', border: 'none' }}
                        onClick={() => navigate("topic", lowPrereqs[0])}
                      >
                        Kartoti prielaidas
                      </button>
                    </div>
                  )}

                  {harderEx && (
                    <div className="recommendation-card">
                      <div>
                        <strong style={{ fontSize: '14px', display: 'block', marginBottom: '4px' }}>Sunkesnis iššūkis</strong>
                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Išbandyk aukštesnės pakopos uždavinį ({getTierLabel(harderEx.olympiadTier)}).</span>
                      </div>
                      <button
                        type="button"
                        className="primary recommendation-btn"
                        style={{ marginTop: '12px', padding: '6px 12px', fontSize: '12.5px' }}
                        onClick={() => {
                          setCurrentExercise(harderEx);
                          setVisibleHints([]);
                          setActiveHintTab(0);
                          setAttemptsCount(0);
                          setResult(null);
                          setTextAnswer("");
                          setSelectedChoice("");
                          setStartedAt(Date.now());
                          setShowFirstObservation(false);
                          setScratchpadText("");
                          setAddedSrsCardIds(new Set());
                          setOpenSolutionMethods(new Set(["method-1", "0", "1"]));
                          setSelfCheckDraft("");
                        }}
                      >
                        Spręsti sunkesnį
                      </button>
                    </div>
                  )}

                  <div className="recommendation-card">
                    <div>
                      <strong style={{ fontSize: '14px', display: 'block', marginBottom: '4px' }}>Susijusi teorija</strong>
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Peržiūrėk šios temos teorinę dalį ir svarbiausias sąvokas.</span>
                    </div>
                    <button
                      type="button"
                      className="secondary-outline recommendation-btn"
                      style={{ marginTop: '12px', padding: '6px 12px', fontSize: '12.5px' }}
                      onClick={() => navigate("topic", activeTopicId)}
                    >
                      Skaityti teoriją
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ──── STANDARD CURRICULUM LAYOUT ──── */
        <section className="panel practice-card">
          <span className="eyebrow">
            {topic.title} • {(currentExercise as any).level || "Bendras lygis"}
          </span>
          <h2 className="curriculum-statement">
            <MathText text={currentExercise.statement} onConceptClick={(id) => navigate("glossary", id)} />
          </h2>

          <form onSubmit={handleSubmit} className="practice-form" style={{ marginTop: '20px' }}>
            {hasChoices(currentExercise) ? (
              <div className="choice-list">
                {currentExercise.choices?.map((choice, cIdx) => {
                  const active = selectedChoice === choice;
                  const choiceId = `std-choice-${cIdx}`;
                  return (
                    <label key={choice} className={`choice-option ${active ? "active" : ""}`} htmlFor={choiceId}>
                      <input
                        id={choiceId}
                        type="radio"
                        name="standard-answer-choice"
                        value={choice}
                        checked={active}
                        onChange={(e) => setSelectedChoice(e.target.value)}
                        disabled={result?.correct}
                      />
                      <span>
                        <MathText text={choice} onConceptClick={(id) => navigate("glossary", id)} />
                      </span>
                    </label>
                  );
                })}
              </div>
            ) : (
              <div className="text-answer-wrapper">
                <input
                  id="standard-answer-text"
                  className="answer-input"
                  name="standard-answer-text"
                  value={textAnswer}
                  onChange={(e) => setTextAnswer(e.target.value)}
                  placeholder="Įrašyk atsakymą"
                  autoComplete="off"
                  disabled={result?.correct}
                />
              </div>
            )}

            {visibleHints.length > 0 && (
              <div className="hint-box" style={{ marginTop: '16px' }}>
                {visibleHints.map((hint, idx) => (
                  <p key={idx} className="hint-text" style={{ fontSize: '14px' }}>
                    💡 Užuomina {idx + 1}: <MathText text={hint} onConceptClick={(id) => navigate("glossary", id)} />
                  </p>
                ))}
              </div>
            )}

            <div className="actions practice-actions actions-stack-mobile" style={{ marginTop: '20px' }}>
              <button
                type="button"
                onClick={handleHint}
                disabled={result?.correct || visibleHints.length >= (currentExercise.hints || []).length}
              >
                Užuomina ({Math.max(0, (currentExercise.hints || []).length - visibleHints.length)})
              </button>

              {result === null ? (
                <>
                  <button
                    type="submit"
                    className="primary"
                  >
                    Tikrinti
                  </button>

                  <button
                    type="button"
                    onClick={handleRevealSolution}
                    className="secondary-outline"
                  >
                    Parodyti sprendimą
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => loadNextExercise()}
                  className="primary"
                >
                  Kitas uždavinys
                </button>
              )}
            </div>
          </form>

          {result !== null && (
            <div className={`result ${result.correct ? "ok" : "bad"}`} style={{ padding: '20px', marginTop: '24px' }}>
              <h3>{result.correct ? "Teisingai!" : "Dar ne visai..."}</h3>
              <div className="result-explanation" style={{ marginTop: '10px' }}>
                <strong>Sprendimas:</strong>
                <p style={{ marginTop: '4px' }}>
                  <MathText text={currentExercise.solution} onConceptClick={(id) => navigate("glossary", id)} />
                </p>
              </div>
              {(currentExercise as any).alternate && (
                <details className="result-alternate" style={{ marginTop: '10px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Peržiūrėti kitus sprendimo būdus</summary>
                  <p style={{ marginTop: '4px' }}>
                    <MathText text={(currentExercise as any).alternate} onConceptClick={(id) => navigate("glossary", id)} />
                  </p>
                </details>
              )}
            </div>
          )}
        </section>
      )}
    </section>
  );
};
