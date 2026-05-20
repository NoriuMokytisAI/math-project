import React from 'react';
import { State } from '../types';
import { getDueSrsCards, recommendation, calculateGradeMastery } from '../systems';
import { topics, achievements } from '../content';
import { bandForGrade, gradesForBand, formatGradeBand, topicsForBand } from './Onboarding';

interface DashboardProps {
  state: State;
  navigate: (page: string, id?: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ state, navigate }) => {
  const rec = recommendation(state);
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs).length;
  const solvedCount = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId)).size;
  const gradeMastery = calculateGradeMastery(state);

  const activeBand = state.profile.gradeBand || bandForGrade(state.profile.grade || 9);
  const activeGrades = gradesForBand(activeBand);
  const gradeTopics = topicsForBand(activeBand);

  const plan = dailyPlan(state.profile.dailyMinutes || 20);
  const goalAdvice = goalGuidance(state.profile.goal || "");

  const activeTopic = topics[state.activeTopicId] || Object.values(topics)[0];

  function dailyPlan(minutes: number): string[] {
    if (minutes <= 10) return ["1 SRS kortelė", "1 teorijos pastraipa", "1 lengvas uždavinys"];
    if (minutes <= 15) return ["2-3 SRS kortelės", "1 teorijos gabalas", "2 uždaviniai"];
    if (minutes <= 20) return ["5 min. SRS", "10 min. teorijos", "2-3 uždaviniai"];
    if (minutes <= 30) return ["7 min. SRS", "10 min. teorijos", "4-5 uždaviniai"];
    return ["10 min. SRS", "15 min. teorijos", "bent 6 uždaviniai arba testas"];
  }

  function goalGuidance(goal: string): string {
    if (goal.includes("olimpiadinio")) return "Tavo kelias labiau akcentuos sunkesnius uždavinius, alternatyvius sprendimus ir papildomus iššūkius po bazinės teorijos.";
    if (goal.includes("PUPP") || goal.includes("VBE") || goal.includes("egzaminui")) return "Tavo kelias labiau akcentuos programos temas, testus ir klaidų taisymą, kad pasiruošimas egzaminui būtų tiesus.";
    if (goal.includes("kontroliniui")) return "Tavo kelias labiau akcentuos greitą temos sutvarkymą: trumpa teorija, pavyzdžiai ir keli tikrinantys uždaviniai.";
    if (goal.includes("Nežinau")) return "Tavo kelias prasidės nuo rekomenduojamos temos ir pagal sprendimus siūlys, ką mokytis toliau.";
    return "Tavo kelias labiau akcentuos stabilų pagrindų stiprinimą: teoriją, sąvokas, SRS ir praktiką.";
  }

  // Grouping by strands
  const OFFICIAL_STRANDS = [
    "Skaičiai ir skaičiavimai",
    "Modeliai ir sąryšiai",
    "Geometrija ir matavimai",
    "Duomenys ir tikimybės"
  ];

  function normalizeStrand(strand: string) {
    if (strand === "Duomenys ir tikimybė") return "Duomenys ir tikimybės";
    return strand;
  }

  const groupedTopics = OFFICIAL_STRANDS.map((strand) => {
    return {
      strand,
      topicsList: gradeTopics.filter((topic) => normalizeStrand(topic.strand) === strand)
    };
  }).filter((group) => group.topicsList.length > 0);

  const extraTopics = gradeTopics.filter((topic) => !OFFICIAL_STRANDS.includes(normalizeStrand(topic.strand)));
  if (extraTopics.length > 0) {
    groupedTopics.push({ strand: "Kitos temos", topicsList: extraTopics });
  }

  return (
    <div className="grid dashboard-grid">
      <section className="panel wide recommendation-panel">
        <span className="eyebrow">Rekomendacija</span>
        <h2>{rec.text}</h2>
        <p className="lead">{goalAdvice}</p>
        <div className="actions">
          <button
            className="primary"
            onClick={() => {
              if (rec.type === "srs") navigate("srs");
              else if (rec.type === "diagnostic") navigate("diagnostic");
              else if (rec.type === "practice") navigate("practice", state.activeTopicId);
              else navigate("topic", state.activeTopicId);
            }}
          >
            Tęsti
          </button>
          <button onClick={() => navigate("tests", activeTopic.id)}>Laikyti testą</button>
        </div>
      </section>

      <section className="panel metric">
        <span className="eyebrow">SRS šiandien</span>
        <strong>{due}</strong>
        <small>kortelės laukia</small>
      </section>

      <section className="panel metric">
        <span className="eyebrow">Išspręsta</span>
        <strong>{solvedCount}</strong>
        <small>uždaviniai</small>
      </section>

      <section className="panel daily-plan">
        <span className="eyebrow">{state.profile.dailyMinutes || 20} min. planas</span>
        <h3>Šiandien</h3>
        <ol>
          {plan.map((item, idx) => <li key={idx}>{item}</li>)}
        </ol>
      </section>

      <section className="panel wide">
        <div className="section-head">
          <div>
            <span className="eyebrow">{formatGradeBand(activeBand)}</span>
            <h2>Rodome tik tavo programos pakopą</h2>
          </div>
          <button onClick={() => navigate("grade")}>Plačiau</button>
        </div>
        <div className="grade-mastery compact">
          {Object.entries(gradeMastery)
            .filter(([grade]) => activeGrades.includes(Number(grade)))
            .map(([grade, value]) => (
              <button key={grade} onClick={() => navigate("grade")}>
                <strong>{grade} klasė</strong>
                <span>{value}%</span>
                <i style={{ '--p': value } as React.CSSProperties}></i>
              </button>
            ))
          }
        </div>
      </section>

      <section className="panel wide strands-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">{formatGradeBand(activeBand)} kelias</span>
            <h2>Temos pagal ugdymo sritis</h2>
          </div>
          <button
            className="primary"
            onClick={() => navigate("practice", state.activeTopicId)}
          >
            Spręsti dabartinę
          </button>
        </div>

        {groupedTopics.length === 0 ? (
          <p className="muted">Šiai klasei dar nėra temų.</p>
        ) : (
          <div className="curriculum-strands compact-strands">
            {groupedTopics.map((group) => (
              <section key={group.strand} className="strand-group">
                <div className="strand-heading">
                  <span className="eyebrow">Mokymo(si) turinio sritis</span>
                  <h3>{group.strand}</h3>
                </div>
                <div className="topic-grid">
                  {group.topicsList.map((topic) => {
                    const m = state.mastery[topic.id] || { value: 0, label: "Pradžia", solved: 0, total: 0 };
                    return (
                      <article key={topic.id} className="topic-card">
                        <div className="progress-ring" style={{ '--p': m.value } as React.CSSProperties}>{m.value}%</div>
                        <div className="topic-card-body">
                          <h3>{topic.title}</h3>
                          <p>{topic.strand} • {m.label} • {m.solved}/{m.total} užd.</p>
                          <div className="mastery-bar" style={{ '--p': m.value } as React.CSSProperties}>
                            <span></span>
                          </div>
                          <div className="actions compact">
                            <button onClick={() => navigate("topic", topic.id)}>Teorija</button>
                            <button onClick={() => navigate("practice", topic.id)}>Praktika</button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>

      <section className="panel achievements-panel">
        <span className="eyebrow">Pasiekimai</span>
        <div className="badges">
          {state.achievements.length ? (
            state.achievements.map((id) => (
              <span key={id} className="badge-chip">{achievements[id] || id}</span>
            ))
          ) : (
            <p>Dar nėra. Pirmas žingsnis jau čia pat.</p>
          )}
        </div>
      </section>
    </div>
  );
};
