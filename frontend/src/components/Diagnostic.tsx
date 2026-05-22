import React, { useEffect, useMemo, useState } from "react";
import { State } from "../types";
import { diagnosticAttributes, diagnosticItems, diagnosticModules } from "../diagnosticContent";
import {
  answerDiagnosticItem,
  diagnosticProgress,
  getCurrentDiagnosticItem,
  getCurrentDiagnosticModule,
  normalizeDiagnosticState,
  pauseDiagnostic,
  resumeDiagnostic,
  skipDiagnosticItem,
  startDiagnostic
} from "../diagnostic";
import { topics } from "../content";
import { MathText } from "./MathText";

interface DiagnosticProps {
  state: State;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  showToast: (message: string) => void;
}

export const Diagnostic: React.FC<DiagnosticProps> = ({ state, navigate, updateState, showToast }) => {
  const diagnosticState = normalizeDiagnosticState(state.diagnosticState);
  const module = getCurrentDiagnosticModule(diagnosticState);
  const item = getCurrentDiagnosticItem(diagnosticState);
  const progress = diagnosticProgress(diagnosticState);
  const [answer, setAnswer] = useState("");
  const [confidence, setConfidence] = useState<"guessed" | "unsure" | "confident">("confident");
  const [startedAt, setStartedAt] = useState(Date.now());

  useEffect(() => {
    setAnswer("");
    setConfidence("confident");
    setStartedAt(Date.now());
  }, [item?.id]);

  const moduleItemsCount = useMemo(() => {
    if (!module) return 0;
    return diagnosticItems.filter((candidate) => candidate.moduleId === module.id).length;
  }, [module]);

  const strengths = useMemo(() => {
    return Object.values(diagnosticState.attributeDiagnoses)
      .filter((diagnosis) => diagnosis.evidenceCount >= 2 && diagnosis.pMastery >= 0.72)
      .sort((a, b) => b.pMastery - a.pMastery)
      .slice(0, 5);
  }, [diagnosticState.attributeDiagnoses]);

  const gaps = useMemo(() => {
    return Object.values(diagnosticState.attributeDiagnoses)
      .filter((diagnosis) => diagnosis.evidenceCount >= 1 && diagnosis.pMastery <= 0.55)
      .sort((a, b) => a.pMastery - b.pMastery)
      .slice(0, 6);
  }, [diagnosticState.attributeDiagnoses]);

  const handleStart = () => {
    updateState((prev) => startDiagnostic(prev));
    showToast("Diagnostika pradėta. Gali sustoti ir tęsti vėliau.");
  };

  const handlePause = () => {
    updateState((prev) => pauseDiagnostic(prev));
    showToast("Diagnostika sustabdyta. Progresas išsaugotas.");
  };

  const handleResume = () => {
    updateState((prev) => resumeDiagnostic(prev));
    showToast("Tęsiame nuo tos pačios vietos.");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!item) return;
    const trimmed = answer.trim();
    if (!trimmed) {
      showToast("Įrašyk, pasirink atsakymą arba spausk „Nežinau“.");
      return;
    }
    const seconds = Math.round((Date.now() - startedAt) / 1000);
    updateState((prev) => answerDiagnosticItem(prev, item, trimmed, confidence, seconds));
  };

  const handleSkip = () => {
    if (!item) return;
    updateState((prev) => skipDiagnosticItem(prev, item));
    showToast("Praleista. Jei reikės, sistema grįš prie panašaus gebėjimo.");
  };

  const handleDontKnow = () => {
    if (!item) return;
    const seconds = Math.round((Date.now() - startedAt) / 1000);
    updateState((prev) => answerDiagnosticItem(prev, item, "__dont_know__", "confident", seconds));
  };

  const handleLearningPathStart = () => {
    const topicNode = diagnosticState.recommendedLearningPath.find((node) => node.kind === "topic" && topics[node.targetId]);
    if (topicNode) {
      navigate("topic", topicNode.targetId);
    } else {
      navigate("dashboard");
    }
  };

  if (diagnosticState.status === "not_started") {
    return (
      <section className="diagnostic-intro">
        <div className="panel diagnostic-hero">
          <span className="eyebrow">Diagnostika</span>
          <h2>Pirmiausia rasime, ko iš tikrųjų trūksta.</h2>
          <p className="lead">
            Tai nėra pažymys ir ne trumpas klausimynas. Diagnostika eina per visą 5-12 klasių programą,
            tikrina prielaidas, sąvokas ir tipines klaidas, o tada sudaro asmeninį mokymosi kelią.
          </p>
          <div className="diagnostic-facts">
            <article>
              <strong>2-6 val.</strong>
              <span>Galima atlikti per kelis prisėdimus.</span>
            </article>
            <article>
              <strong>{diagnosticModules.length}</strong>
              <span>Moduliai pagal programos pakopas ir sritis.</span>
            </article>
            <article>
              <strong>{diagnosticItems.length}</strong>
              <span>Galimų diagnostinių užduočių fondas.</span>
            </article>
          </div>
          <div className="actions">
            <button className="primary" onClick={handleStart}>Pradėti diagnostiką</button>
            <button onClick={() => navigate("dashboard")}>Į apžvalgą</button>
          </div>
        </div>

        <section className="panel diagnostic-explain">
          <span className="eyebrow">Kaip tai veikia</span>
          <div className="diagnostic-steps">
            <article>
              <strong>1</strong>
              <h3>Platus patikrinimas</h3>
              <p>Pradedama nuo skirtingų sričių užduočių, kad sistema rastų apytikrį lygį.</p>
            </article>
            <article>
              <strong>2</strong>
              <h3>Spragų paieška</h3>
              <p>Klaida vienoje temoje paleidžia prielaidų patikrinimą, o ne aklą temos kartojimą.</p>
            </article>
            <article>
              <strong>3</strong>
              <h3>Mokymosi planas</h3>
              <p>Po diagnostikos gauni eilę: ką kartoti, ką mokytis, ką spręsti ir kada laikyti testą.</p>
            </article>
          </div>
        </section>
      </section>
    );
  }

  if (diagnosticState.status === "paused") {
    return (
      <section className="panel diagnostic-paused centered">
        <span className="eyebrow">Diagnostika sustabdyta</span>
        <h2>Progresas išsaugotas.</h2>
        <p>Atsakyta į {progress.answered} užduotis. Gali tęsti nuo tos pačios vietos.</p>
        <div className="actions">
          <button className="primary" onClick={handleResume}>Tęsti diagnostiką</button>
          <button onClick={() => navigate("dashboard")}>Į apžvalgą</button>
        </div>
      </section>
    );
  }

  if (diagnosticState.status === "complete" || !item || !module) {
    return (
      <section className="diagnostic-results">
        <div className="panel diagnostic-hero">
          <span className="eyebrow">Diagnostika baigta</span>
          <h2>Tavo mokymosi kelias paruoštas.</h2>
          <p className="lead">
            Sistema sudėjo svarbiausias spragas, susiejo jas su programos temomis ir parinko, nuo ko verta pradėti.
          </p>
          <div className="actions">
            <button className="primary" onClick={handleLearningPathStart}>Pradėti pagal planą</button>
            <button onClick={() => navigate("dashboard")}>Į apžvalgą</button>
          </div>
        </div>
        <LearningPathPanel state={state} navigate={navigate} />
        <EvidencePanel strengths={strengths} gaps={gaps} />
      </section>
    );
  }

  const topic = topics[item.topicId];
  const moduleSummary = diagnosticState.moduleSummaries[module.id];

  return (
    <section className="diagnostic-runner">
      <div className="diagnostic-status-row">
        <div className="panel diagnostic-progress-card">
          <span className="eyebrow">Bendra eiga</span>
          <strong>{progress.percent}%</strong>
          <p>{progress.answered} atsakyta, {progress.skipped} praleista, {progress.modulesComplete}/{progress.modulesTotal} moduliai baigti.</p>
          <div className="mastery-bar labeled" style={{ "--p": progress.percent } as React.CSSProperties}><span></span></div>
        </div>
        <div className="panel diagnostic-progress-card">
          <span className="eyebrow">Dabartinis modulis</span>
          <strong>{moduleSummary?.answered || 0}/{module.maxItems}</strong>
          <p>{module.title}. Fonde: {moduleItemsCount} užduotys.</p>
          <button onClick={handlePause}>Sustabdyti</button>
        </div>
      </div>

      <form className="panel diagnostic-question" onSubmit={handleSubmit}>
        <div className="diagnostic-question-head">
          <div>
            <span className="eyebrow">{module.title}</span>
            <h2><MathText text={item.prompt} onConceptClick={(id) => navigate("glossary", id)} /></h2>
          </div>
          <div className="diagnostic-tags">
            <span>{topic?.title || "Tema"}</span>
            <span>{item.representation}</span>
            <span>Sunkumas {item.difficulty}/5</span>
          </div>
        </div>

        {item.choices?.length ? (
          <div className="choice-list diagnostic-choice-list">
            {item.choices.map((choice, cIdx) => (
              <label key={choice} className={`choice-option ${answer === choice ? "active" : ""}`} htmlFor={`diag-choice-${cIdx}`}>
                <input
                  id={`diag-choice-${cIdx}`}
                  type="radio"
                  name="diagnostic-answer"
                  value={choice}
                  checked={answer === choice}
                  onChange={(event) => setAnswer(event.target.value)}
                />
                <span><MathText text={choice} onConceptClick={(id) => navigate("glossary", id)} /></span>
              </label>
            ))}
          </div>
        ) : (
          <input
            id="diagnostic-answer-text"
            name="diagnostic-answer-text"
            className="answer-input"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Įrašyk atsakymą"
            autoComplete="off"
          />
        )}

        <div className="diagnostic-confidence">
          <span className="eyebrow">Kaip jautiesi dėl atsakymo?</span>
          {[
            ["confident", "Esu tikras"],
            ["unsure", "Nesu tikras"],
            ["guessed", "Spėjau"]
          ].map(([value, label]) => (
            <button
              type="button"
              key={value}
              className={confidence === value ? "selected" : ""}
              onClick={() => setConfidence(value as typeof confidence)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="actions diagnostic-actions">
          <button type="button" onClick={handleDontKnow}>Nežinau</button>
          <button type="button" onClick={handleSkip}>Praleisti</button>
          <button type="submit" className="primary">Patvirtinti atsakymą</button>
        </div>
      </form>

      <LearningPathPanel state={state} navigate={navigate} compact />
    </section>
  );
};

const LearningPathPanel: React.FC<{ state: State; navigate: (page: string, id?: string) => void; compact?: boolean }> = ({ state, navigate, compact }) => {
  const nodes = state.diagnosticState.recommendedLearningPath;
  return (
    <section className={`panel learning-path-panel ${compact ? "compact-path" : ""}`}>
      <span className="eyebrow">Automatinis kelias</span>
      <h2>Rekomenduojami žingsniai</h2>
      <div className="learning-path-list">
        {nodes.map((node, index) => (
          <article key={node.id} className={`path-node ${node.status}`}>
            <span>{index + 1}</span>
            <div>
              <strong>{node.title}</strong>
              <p>{node.reason}</p>
            </div>
            {node.kind === "topic" && topics[node.targetId] && (
              <button onClick={() => navigate("topic", node.targetId)}>Atidaryti</button>
            )}
          </article>
        ))}
        {!nodes.length && <p className="muted">Kelias bus sudarytas pradėjus diagnostiką.</p>}
      </div>
    </section>
  );
};

const EvidencePanel: React.FC<{ strengths: Array<{ attributeId: string; pMastery: number }>; gaps: Array<{ attributeId: string; pMastery: number }> }> = ({ strengths, gaps }) => {
  return (
    <section className="panel diagnostic-evidence">
      <span className="eyebrow">Įrodymai</span>
      <div className="evidence-columns">
        <div>
          <h3>Stiprybės</h3>
          {strengths.map((diagnosis) => (
            <p key={diagnosis.attributeId}>
              <strong>{diagnosticAttributes[diagnosis.attributeId]?.title}</strong>
              <span>{Math.round(diagnosis.pMastery * 100)}%</span>
            </p>
          ))}
          {!strengths.length && <p className="muted">Dar reikia daugiau atsakymų.</p>}
        </div>
        <div>
          <h3>Spragos</h3>
          {gaps.map((diagnosis) => (
            <p key={diagnosis.attributeId}>
              <strong>{diagnosticAttributes[diagnosis.attributeId]?.title}</strong>
              <span>{Math.round(diagnosis.pMastery * 100)}%</span>
            </p>
          ))}
          {!gaps.length && <p className="muted">Aiškių spragų dar nėra.</p>}
        </div>
      </div>
    </section>
  );
};
