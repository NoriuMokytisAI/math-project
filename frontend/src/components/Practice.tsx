import React, { useState, useEffect } from 'react';
import { State, Exercise } from '../types';
import { exercises as allExercises, topics, concepts } from '../content';
import { recordAttempt, ensureSrsCard } from '../systems';
import { inferStartMode } from '../startModes';
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
  const [selectedTrack, setSelectedTrack] = useState<'curriculum' | 'olympiad' | null>(() => {
    if (topicId) {
      return topics[topicId]?.level === 'olympiad' ? 'olympiad' : 'curriculum';
    }
    const mode = inferStartMode(state.profile);
    if (mode === 'olympiad') return 'olympiad';
    if (mode === 'targeted') return 'curriculum';
    return null;
  });

  let activeTopicId = topicId || state.activeTopicId || Object.keys(topics)[0];
  if (!topicId && selectedTrack === 'olympiad') {
     const grade = state.profile.grade || 9;
     const oId = `olimpiada-${String(grade).padStart(2, '0')}`;
     if (topics[oId]) activeTopicId = oId;
  } else if (!topicId && selectedTrack === 'curriculum') {
     if (topics[activeTopicId]?.level === 'olympiad') {
        const fallback = Object.keys(topics).find(k => topics[k].level !== 'olympiad' && topics[k].grade === (state.profile.grade || 9));
        if (fallback) activeTopicId = fallback;
     }
  }

  const topic = topics[activeTopicId];
  const currentPool = allExercises.filter((ex) => ex.topicId === activeTopicId);

  // Practice session state
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [visibleHints, setVisibleHints] = useState<string[]>([]);
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

  // Pick next exercise
  const loadNextExercise = (newPool = currentPool) => {
    if (!newPool.length) {
      setCurrentExercise(null);
      return;
    }
    const solved = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId));
    // Prefer unsolved, or pick random
    const next = newPool.find((ex) => !solved.has(ex.id)) || newPool[Math.floor(Math.random() * newPool.length)];

    setCurrentExercise(next);
    setVisibleHints([]);
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

  // Run when track or activeTopicId changes
  useEffect(() => {
    loadNextExercise(currentPool);
  }, [selectedTrack, activeTopicId]);

  if (selectedTrack === null) {
    return (
      <div className="track-selection">
        <h2>Ką nori mokytis šiandien?</h2>
        <div className="track-cards">
          <div className="track-card" onClick={() => setSelectedTrack('curriculum')}>
            <h3>Mokyklinis turinys</h3>
            <p>Pasiruošimas pamokoms, kontroliniams ir egzaminams. Oficiali mokyklos programa.</p>
          </div>
          <div className="track-card" onClick={() => setSelectedTrack('olympiad')}>
            <h3>Olimpiadinis turinys</h3>
            <p>Sunkesni uždaviniai, nestandartinis mąstymas ir olimpiados lygio iššūkiai.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <section className="panel">
        <p>Pasirinkta tema nerasta.</p>
      </section>
    );
  }

  // Handle hint reveal
  const handleHint = () => {
    if (!currentExercise) return;
    const hints = currentExercise.hints || [];
    if (visibleHints.length < hints.length) {
      const nextHint = hints[visibleHints.length];
      setVisibleHints([...visibleHints, nextHint]);
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
        attempts: attemptsCount + 1
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

  // Return empty container if no exercises in selected tab
  if (!currentExercise) {
    return (
      <section className="view">
        <div className="section-head">
          <div>
            <span className="eyebrow">Praktika</span>
            <h1>{topic.title}</h1>
          </div>
          <button onClick={() => navigate("dashboard")}>Grįžti į skydelį</button>
        </div>

        <div className="track-toggle-bar">
        <button className={selectedTrack === 'curriculum' ? 'active' : ''} onClick={() => setSelectedTrack('curriculum')}>Mokyklinis turinys</button>
        <button className={selectedTrack === 'olympiad' ? 'active' : ''} onClick={() => setSelectedTrack('olympiad')}>Olimpiadinis turinys</button>
      </div>

        <div className="panel practice-empty-state">
          <h3>Nėra uždavinių</h3>
          <p>
            Šiame režime šiuo metu nėra jokių uždavinių šiai temai.
          </p>
          {selectedTrack === 'olympiad' && (
            <button onClick={() => setSelectedTrack('curriculum')} className="primary">
              Spręsti bendrąją programą
            </button>
          )}
        </div>
      </section>
    );
  }

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

  return (
    <section className="view">
      <div className="section-head">
        <div>
          <span className="eyebrow">Praktinis mokymasis</span>
          <h1>{topic.title}</h1>
        </div>
        <button onClick={() => navigate("dashboard")}>Grįžti į skydelį</button>
      </div>

      <div className="track-toggle-bar">
        <button className={selectedTrack === 'curriculum' ? 'active' : ''} onClick={() => setSelectedTrack('curriculum')}>Mokyklinis turinys</button>
        <button className={selectedTrack === 'olympiad' ? 'active' : ''} onClick={() => setSelectedTrack('olympiad')}>Olimpiadinis turinys</button>
      </div>

      {/* ──── OLYMPIAD LAYOUT ──── */}
      {selectedTrack === 'olympiad' ? (
        <div className="olympiad-workspace">
          {/* Prerequisite warning warning button */}
          {lowPrereqs.length > 0 && (
            <div className="prerequisite-warning">
              <p>
                ⚠️ Rekomenduojama pirma pakartoti temos prielaidas. Pradinis pasiruošimas temose{" "}
                <strong>
                  {lowPrereqs.map(pId => topics[pId]?.title || pId).join(", ")}
                </strong>{" "}
                yra mažesnis nei rekomenduojama ({currentExercise.requiredPrerequisiteMastery || 50}%).
              </p>
              <button onClick={() => navigate("topic", lowPrereqs[0])}>
                Kartoti prielaidas
              </button>
            </div>
          )}

          {/* Top Info Area */}
          <div className="panel olympiad-info-panel">
            <div className="olympiad-badge-row">
              <span className="badge-olympiad-track">
                {currentExercise.olympiadTrack || "Matematika"}
              </span>
              <span className="badge-olympiad-tier">
                Pakopa: {getTierLabel(currentExercise.olympiadTier)}
              </span>
              {currentExercise.estimatedSeconds && (
                <span className="badge-olympiad-time">
                  ⏱️ Sprendimo laikas: ~{Math.round(currentExercise.estimatedSeconds / 60)} min.
                </span>
              )}
            </div>

            <h2 className="olympiad-statement">
              <MathText text={currentExercise.statement} onConceptClick={(id) => navigate("glossary", id)} />
            </h2>
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
                      <input type="checkbox" style={{ cursor: 'pointer' }} />
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
                    <label key={tId} className="prerequisite-checklist-item">
                      <input type="checkbox" style={{ cursor: 'pointer' }} />
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
                {(!currentExercise.prerequisiteConceptIds?.length && !currentExercise.prerequisiteTopicIds?.length) && (
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
                    placeholder="Įvesk savo atsakymą ar sprendimo išvadą..."
                    value={selfCheckDraft}
                    onChange={(e) => setSelfCheckDraft(e.target.value)}
                    disabled={result !== null}
                  />
                </div>
              ) : hasChoices(currentExercise) ? (
                <div className="choice-list">
                  {currentExercise.choices?.map((choice) => {
                    const active = selectedChoice === choice;
                    return (
                      <label key={choice} className={`choice-option ${active ? "active" : ""}`}>
                        <input
                          type="radio"
                          name="answer"
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
                    className="answer-input"
                    name="answer"
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    placeholder="Įrašyk galutinį skaitinį atsakymą"
                    autoComplete="off"
                    disabled={result?.correct}
                  />
                </div>
              )}

              {/* Hints list */}
              {visibleHints.length > 0 && (
                <div className="hint-box" style={{ marginTop: '16px' }}>
                  {visibleHints.map((hint, idx) => {
                    // Try to extract kind from hintsRaw if available
                    const rawHint = currentExercise.hintsRaw?.[idx];
                    const kindLabel = rawHint?.kind === 'orientation' ? 'Orientacija' :
                                      rawHint?.kind === 'observation' ? 'Pastebėjimas' :
                                      rawHint?.kind === 'method' ? 'Metodas' :
                                      rawHint?.kind === 'scaffold' ? 'Gairė' : 'Patarimas';
                    return (
                      <p key={idx} className="hint-text" style={{ borderBottom: '1px solid var(--line)', paddingBottom: '6px' }}>
                        💡 <strong>Užuomina {idx + 1} ({kindLabel}):</strong> <MathText text={hint} onConceptClick={(id) => navigate("glossary", id)} />
                      </p>
                    );
                  })}
                </div>
              )}

              {/* Actions row */}
              <div className="actions practice-actions" style={{ marginTop: '20px' }}>
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
                                  </div>
                                ))}
                              </div>

                              <div className="method-final-answer">
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
                {(currentExercise as any).alternate && !currentExercise.solutionMethods && (
                  <div className="alternate-methods alternate-methods-box">
                    <strong>Kiti sprendimo būdai:</strong>
                    <p style={{ marginTop: '8px' }}>
                      <MathText text={(currentExercise as any).alternate} onConceptClick={(id) => navigate("glossary", id)} />
                    </p>
                  </div>
                )}
              </div>

              {/* Common Traps warnings */}
              {currentExercise.commonTraps && currentExercise.commonTraps.length > 0 && (
                <div className="traps-container">
                  <h3>⚠️ Dažnos klaidos ir spąstai</h3>
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
                  <h3>🧠 Klausimai refleksijai</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '10px' }}>
                    Olimpiadinio mąstymo lavinimui atsakyk sau į šiuos klausimus apie išspręstą uždavinį:
                  </p>
                  <ul className="reflection-list">
                    {currentExercise.reflectionPrompts.map((prompt, idx) => (
                      <li key={idx}>
                        <MathText text={prompt} onConceptClick={(id) => navigate("glossary", id)} />
                      </li>
                    ))}
                  </ul>
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
                {currentExercise.choices?.map((choice) => {
                  const active = selectedChoice === choice;
                  return (
                    <label key={choice} className={`choice-option ${active ? "active" : ""}`}>
                      <input
                        type="radio"
                        name="answer"
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
                  className="answer-input"
                  name="answer"
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

            <div className="actions practice-actions" style={{ marginTop: '20px' }}>
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
