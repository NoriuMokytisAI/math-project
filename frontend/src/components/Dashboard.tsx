import React from 'react';
import { State } from '../types';
import { getDueSrsCards, recommendation, calculateGradeMastery } from '../systems';
import { topics, achievements } from '../content';
import {
  bandForGrade,
  firstTopicForProfile,
  formatGradeBand,
  gradesForBand,
  inferStartMode,
  PREPARATION_LABELS,
  START_MODE_LABELS,
  topicsForBand,
  topicsForExam
} from '../startModes';

interface DashboardProps {
  state: State;
  navigate: (page: string, id?: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ state, navigate }) => {
  const rec = recommendation(state);
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs).length;
  const solvedCount = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId)).size;
  const gradeMastery = calculateGradeMastery(state);
  const startMode = inferStartMode(state.profile);

  const activeBand = state.profile.gradeBand || bandForGrade(state.profile.grade || 9);
  const activeGrades = gradesForBand(activeBand);
  const gradeTopics = startMode === "targeted" && state.profile.preparationType
    ? topicsForExam(state.profile.preparationType)
    : topicsForBand(activeBand);

  const plan = dailyPlan(state.profile.dailyMinutes || 20);

  const targetTopicId = state.profile.targetTopicId && topics[state.profile.targetTopicId]
    ? state.profile.targetTopicId
    : firstTopicForProfile(state.profile);
  const activeTopic = topics[targetTopicId] || topics[state.activeTopicId] || Object.values(topics)[0];
  const hero = modeHero();

  function dailyPlan(minutes: number): string[] {
    if (minutes <= 10) return ["1 SRS kortelė", "1 teorijos pastraipa", "1 lengvas uždavinys"];
    if (minutes <= 15) return ["2-3 SRS kortelės", "1 teorijos gabalas", "2 uždaviniai"];
    if (minutes <= 20) return ["5 min. SRS", "10 min. teorijos", "2-3 uždaviniai"];
    if (minutes <= 30) return ["7 min. SRS", "10 min. teorijos", "4-5 uždaviniai"];
    return ["10 min. SRS", "15 min. teorijos", "bent 6 uždaviniai arba testas"];
  }

  function modeHero() {
    if (startMode === "olympiad") {
      return {
        eyebrow: START_MODE_LABELS.olympiad,
        title: "Stiprinkis aukščiau bazės",
        text: `Pradinis lygis: ${formatGradeBand(activeBand)}. Rinkis sunkesnes temas, spręsk daugiau uždavinių ir grįžk prie teorijos tik tada, kai ji tikrai trukdo.`,
        primary: "Spręsti iššūkį",
        secondary: "Rodyti temas",
        primaryAction: () => navigate("practice", activeTopic.id),
        secondaryAction: () => navigate("grade")
      };
    }
    if (startMode === "targeted") {
      const prep = state.profile.preparationType ? PREPARATION_LABELS[state.profile.preparationType] : "Pasiruošimas";
      const diagnosticFirst = state.profile.targetedStartChoice === "diagnostic" && state.diagnosticState.status !== "complete";
      return {
        eyebrow: `${START_MODE_LABELS.targeted} · ${prep}`,
        title: diagnosticFirst ? "Pirmiausia raskime spragas" : `Pirmiausia: ${activeTopic.title}`,
        text: diagnosticFirst
          ? "Diagnostika padės pasiruošimą paremti tikrais atsakymais. Jei skubi, gali eiti tiesiai į pasirinktą temą ar testą."
          : "Pagrindinis ekranas sutelktas į tavo pasirinktą temą: teorija, praktika, testas ir klaidos vienoje vietoje.",
        primary: diagnosticFirst ? "Pradėti diagnostiką" : "Atidaryti temą",
        secondary: diagnosticFirst ? "Rinktis temą" : "Laikyti testą",
        primaryAction: () => diagnosticFirst ? navigate("diagnostic") : navigate("topic", activeTopic.id),
        secondaryAction: () => diagnosticFirst ? navigate("grade") : navigate("tests", activeTopic.id)
      };
    }
    return {
      eyebrow: START_MODE_LABELS["full-course"],
      title: state.diagnosticState.status === "complete" ? "Tavo planas jau sudarytas" : "Pradėk nuo diagnostikos",
      text: state.diagnosticState.status === "complete"
        ? "Toliau dirbk pagal diagnostikos pasiūlytą kelią, SRS korteles ir temų meistriškumą."
        : "Ilgesnis testas pakeičia spėjimą: programa surenka įrodymus, kas jau laikosi, o ką verta mokytis nuo žemesnės pakopos.",
      primary: state.diagnosticState.status === "complete" ? "Tęsti planą" : "Pradėti diagnostiką",
      secondary: "Peržiūrėti temas",
      primaryAction: () => state.diagnosticState.status === "complete" ? navigate("topic", state.activeTopicId) : navigate("diagnostic"),
      secondaryAction: () => navigate("grade")
    };
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
      {/* ── Row 1: Hero Panel (full width) ── */}
      <section className="panel" style={{ gridColumn: '1 / -1' }}>
        <span className="eyebrow">{hero.eyebrow}</span>
        <h2>{hero.title}</h2>
        <p className="lead">{hero.text}</p>
        <div className="actions" style={{ marginTop: '14px' }}>
          <button className="primary" onClick={hero.primaryAction}>{hero.primary}</button>
          <button onClick={hero.secondaryAction}>{hero.secondary}</button>
          {rec.type === "srs" && <button onClick={() => navigate("srs")}>Kartoti SRS</button>}
        </div>
      </section>

      {/* ── Row 2: Quick Stats ── */}
      <section className="panel metric" style={{ gridColumn: 'span 3' }}>
        <span className="eyebrow">SRS šiandien</span>
        <strong>{due}</strong>
        <small>kortelės laukia</small>
      </section>

      <section className="panel metric" style={{ gridColumn: 'span 3' }}>
        <span className="eyebrow">Išspręsta</span>
        <strong>{solvedCount}</strong>
        <small>uždaviniai</small>
      </section>

      <section className="panel metric" style={{ gridColumn: 'span 3' }}>
        <span className="eyebrow">Bendras lygis</span>
        <strong>{Math.round(Object.values(state.mastery).reduce((s, m) => s + m.value, 0) / Math.max(1, Object.keys(state.mastery).length))}%</strong>
        <small>vidutinis meistriškumas</small>
      </section>

      <section className="panel daily-plan" style={{ gridColumn: 'span 3' }}>
        <span className="eyebrow">{state.profile.dailyMinutes || 20} min. planas</span>
        <h3>Šiandien</h3>
        <ol>
          {plan.map((item, idx) => <li key={idx}>{item}</li>)}
        </ol>
      </section>

      {/* ── Row 3: Grade Mastery (full width) ── */}
      <section className="panel" style={{ gridColumn: '1 / -1' }}>
        <div className="section-head">
          <div>
            <span className="eyebrow">{startMode === "olympiad" ? "Atvira programa" : formatGradeBand(activeBand)}</span>
            <h2>{startMode === "olympiad" ? "Gali judėti aukščiau savo pakopos" : "Programos pakopų pažanga"}</h2>
          </div>
          <button onClick={() => navigate("grade")}>Plačiau</button>
        </div>
        <div className="grade-mastery" style={{ marginTop: '14px' }}>
          {Object.entries(gradeMastery)
            .filter(([grade]) => startMode === "olympiad" ? Number(grade) >= Math.min(...activeGrades) : activeGrades.includes(Number(grade)))
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

      {/* ── Row 4: Topics by Strand (full width) ── */}
      <section className="panel" style={{ gridColumn: '1 / -1' }}>
        <div className="section-head">
          <div>
            <span className="eyebrow">{startMode === "targeted" ? "Tikslinis kelias" : `${formatGradeBand(activeBand)} kelias`}</span>
            <h2>{startMode === "targeted" ? "Aktualios temos pasiruošimui" : "Temos pagal ugdymo sritis"}</h2>
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
          <div className="curriculum-strands compact-strands" style={{ marginTop: '14px' }}>
            {groupedTopics.map((group) => (
              <section key={group.strand} className="strand-group">
                <div className="strand-heading">
                  <span className="eyebrow">Mokymo(si) turinio sritis</span>
                  <h3>{group.strand}</h3>
                </div>
                <div className="topic-grid">
                  {group.topicsList.map((topic) => {
                    const topicMastery = state.mastery[topic.id];
                    const isOlympiadTopic = (topic as any).level === "olympiad";
                    const val = isOlympiadTopic ? (topicMastery?.olympiadValue ?? 0) : (topicMastery?.value || 0);
                    const label = isOlympiadTopic 
                      ? (val < 25 ? "Pradžia" : val < 50 ? "Įsibėgėja" : val < 75 ? "Stipru" : "Meistras") 
                      : (topicMastery?.label || "Pradžia");
                    const solved = isOlympiadTopic ? (topicMastery?.olympiadSolved || 0) : (topicMastery?.solved || 0);
                    const total = isOlympiadTopic ? (topicMastery?.olympiadTotal || 0) : (topicMastery?.total || 0);
                    return (
                      <article key={topic.id} className="topic-card">
                        <div className="progress-ring" style={{ '--p': val } as React.CSSProperties}>{val}%</div>
                        <div className="topic-card-body">
                          <h3>{topic.title}</h3>
                          <p>{label} • {solved}/{total} užd.</p>
                          <div className="mastery-bar" style={{ '--p': val } as React.CSSProperties}>
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

      {/* ── Row 5: Achievements (full width) ── */}
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
