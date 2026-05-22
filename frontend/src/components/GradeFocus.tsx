import React from 'react';
import { State } from '../types';
import { curriculum } from '../content';
import { bandForGrade, formatGradeBand, gradesForBand, inferStartMode, topicsForBand, topicsForExam } from '../startModes';

interface GradeFocusProps {
  state: State;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
}

export const GradeFocus: React.FC<GradeFocusProps> = ({ state, navigate, updateState }) => {
  const band = state.profile.gradeBand || bandForGrade(state.profile.grade || 9);
  const grades = gradesForBand(band);
  const grade = state.profile.grade || grades[0] || 9;
  const startMode = inferStartMode(state.profile);

  const currentTopics = startMode === "targeted" && state.profile.preparationType
    ? topicsForExam(state.profile.preparationType)
    : topicsForBand(band);

  const prevGrade = Math.max(5, grade - 1);
  const nextGrade = Math.min(12, grade + 1);

  const otherGrades = Object.entries(curriculum)
    .filter(([g]) => !grades.includes(Number(g)))
    .map(([g, items]) => ({
      grade: Number(g),
      items: items.slice(0, 3)
    }))
    .sort((a, b) => a.grade - b.grade);

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

  const groupedTopics = OFFICIAL_STRANDS.map((strand) => ({
    strand,
    topicsList: currentTopics.filter((topic) => normalizeStrand(topic.strand) === strand)
  })).filter((group) => group.topicsList.length > 0);

  const extra = currentTopics.filter((topic) => !OFFICIAL_STRANDS.includes(normalizeStrand(topic.strand)));
  if (extra.length > 0) {
    groupedTopics.push({ strand: "Kitos temos", topicsList: extra });
  }

  return (
    <div className="grade-focus">
      <section className="panel wide grade-focus-header">
        <div className="section-head">
          <div>
            <span className="eyebrow">Tavo programos pakopa</span>
            <h2>{startMode === "targeted" && state.profile.preparationType ? "Tikslinis pasiruošimas" : formatGradeBand(band)}</h2>
            <p className="lead">
              {startMode === "olympiad"
                ? "Olimpiadiniame kelyje pradinė pakopa nustato sunkumo startą, bet aukštesnių klasių temos lieka laisvai pasiekiamos."
                : startMode === "targeted"
                  ? "Rodome pasiruošimui aktualias temas. Kontrolinio kelias gali būti siauras, o PUPP/VBE kelias gali remtis diagnostika ir aukštesnių pakopų spragomis."
                  : "Rodome tavo pasirinktai pakopai aktualų kelią. Kitų klasių temos pateikiamos kaip pagalba, kai jų reikia spragoms užpildyti ar žingsniui į priekį."
              }
            </p>
          </div>
          <div className="grade-nav">
            <button onClick={() => navigate("topic", state.activeTopicId)}>Grįžti į temą</button>
            <button onClick={() => navigate("settings")}>Keisti tikslą</button>
          </div>
        </div>
      </section>

      <section className="panel wide">
        <span className="eyebrow">{startMode === "targeted" ? "Pasiruošimo temos pagal Bendrąją programą" : "Tavo pakopos temos pagal Bendrąją programą"}</span>

        {groupedTopics.length === 0 ? (
          <p className="muted">Šiai klasei dar nėra temų.</p>
        ) : (
          <div className="curriculum-strands">
            {groupedTopics.map((group) => (
              <section key={group.strand} className="strand-group">
                <div className="strand-heading">
                  <span className="eyebrow">Mokymo(si) turinio sritis</span>
                  <h3>{group.strand}</h3>
                </div>
                <div className="grade-topic-list">
                  {group.topicsList.map((topic) => {
                    const topicMastery = state.mastery[topic.id];
                    const mastery = (topic as any).level === "olympiad" ? (topicMastery?.olympiadValue ?? 0) : (topicMastery?.value || 0);
                    return (
                      <article key={topic.id} className="grade-topic">
                        <div>
                          <strong>{topic.title}</strong>
                          <small>
                            {mastery}% • {(topic as any).level === "olympiad" ? "Olimpiadinis papildymas" : "Bendroji programa"}
                          </small>
                        </div>
                        <div className="grade-topic-actions">
                          <button onClick={() => {
                            updateState(prev => ({ ...prev, profile: { ...prev.profile, libraryToggle: (topic as any).level === 'olympiad' ? 'olympiad' : 'school' } }));
                            navigate("topic", topic.id);
                          }}>Teorija</button>
                          <button onClick={() => {
                            updateState(prev => ({ ...prev, profile: { ...prev.profile, libraryToggle: (topic as any).level === 'olympiad' ? 'olympiad' : 'school' } }));
                            navigate("practice", topic.id);
                          }}>Praktika</button>
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

      <section className="panel prev-next-panel">
        <span className="eyebrow">Artimiausia pakopa</span>
        <div className="curriculum-mini">
          <strong>{prevGrade} klasė</strong>
          <small>{(curriculum[prevGrade] || []).slice(0, 2).join(" • ") || "Nėra temų"}</small>
        </div>
        <div className="curriculum-mini">
          <strong>{nextGrade} klasė</strong>
          <small>{(curriculum[nextGrade] || []).slice(0, 2).join(" • ") || "Nėra temų"}</small>
        </div>
      </section>

      <section className="panel wide other-grades-panel">
        <div className="section-head">
          <div>
            <span className="eyebrow">Kitos klasės</span>
            <h2>Rodyti tik tada, kai reikia</h2>
          </div>
        </div>
        <details className="other-grades">
          <summary>Kitos programos klasės</summary>
          <div className="other-grade-grid">
            {otherGrades.map(({ grade, items }) => (
              <article key={grade} className="grade-mini">
                <strong>{grade} klasė</strong>
                <small>{items.join(" • ")}</small>
              </article>
            ))}
          </div>
        </details>
      </section>
    </div>
  );
};
