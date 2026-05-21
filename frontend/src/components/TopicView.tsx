import React, { useState } from 'react';
import { State } from '../types';
import { topics, concepts } from '../content';
import { getTestsForTopic, ensureTopicSrsCards } from '../systems';
import { MathText } from './MathText';
import { inferStartMode } from '../startModes';

interface TopicViewProps {
  state: State;
  topicId?: string;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  showToast: (message: string) => void;
}

export const TopicView: React.FC<TopicViewProps> = ({
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

  let activeId = topicId || state.activeTopicId || Object.keys(topics)[0];
  if (!topicId && selectedTrack === 'olympiad') {
     const grade = state.profile.grade || 9;
     const oId = `olimpiada-${String(grade).padStart(2, '0')}`;
     if (topics[oId]) activeId = oId;
  } else if (!topicId && selectedTrack === 'curriculum') {
     if (topics[activeId]?.level === 'olympiad') {
        const fallback = Object.keys(topics).find(k => topics[k].level !== 'olympiad' && topics[k].grade === (state.profile.grade || 9));
        if (fallback) activeId = fallback;
     }
  }

  const topic = topics[activeId];

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
      <div className="panel centered">
        <h2>Tema nerasta</h2>
        <button onClick={() => navigate("dashboard")}>Grįžti į apžvalgą</button>
      </div>
    );
  }

  const topicTests = getTestsForTopic(topic.id);

  const handleMarkAsRead = () => {
    updateState((prev) => {
      return ensureTopicSrsCards(prev, topic.id, Date.now());
    });
    showToast("Temos teorija pažymėta kaip skaityta! Sąvokos ir formulės pridėtos į SRS kartojimą.");
  };

  const handleConceptClick = (id: string) => {
    navigate("glossary", id);
  };

  return (
    <div className="topic-layout">
      <div className="track-toggle-bar">
        <button className={selectedTrack === 'curriculum' ? 'active' : ''} onClick={() => setSelectedTrack('curriculum')}>Mokyklinis turinys</button>
        <button className={selectedTrack === 'olympiad' ? 'active' : ''} onClick={() => setSelectedTrack('olympiad')}>Olimpiadinis turinys</button>
      </div>
      
      <section className="panel wide topic-header">
        <span className="eyebrow">Tema • {topic.strand}</span>
        <h2>{topic.title}</h2>
        {topic.prerequisites && topic.prerequisites.length > 0 && (
          <p className="lead prerequisites">
            Prerekvizitai: {topic.prerequisites.join(", ")}.
          </p>
        )}
        <div className="actions">
          <button
            className="primary"
            onClick={() => navigate("practice", topic.id)}
          >
            Spręsti uždavinius
          </button>
          <button
            onClick={() => navigate("tests", topic.id)}
          >
            Testai ({topicTests.length})
          </button>
          <button
            className="secondary-outline"
            onClick={handleMarkAsRead}
          >
            Pažymėti teoriją kaip skaitytą
          </button>
        </div>
      </section>

      {topic.concepts && topic.concepts.length > 0 && (
        <section className="panel wide concepts-panel">
          <span className="eyebrow">Sąvokos šioje temoje</span>
          <div className="chips">
            {topic.concepts.map((id) => {
              const concept = concepts[id];
              if (!concept) return null;
              return (
                <button
                  key={id}
                  className="concept-chip"
                  onClick={() => handleConceptClick(id)}
                >
                  {concept.title}
                </button>
              );
            })}
          </div>
        </section>
      )}

      <section className="panel wide theory-content">
        <span className="eyebrow">Teorinė dalis</span>
        <div className="sections-container">
          {topic.sections.map((section, idx) => (
            <article key={idx} className="theory-section">
              <h3>{section.title}</h3>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  <MathText text={paragraph} onConceptClick={handleConceptClick} />
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {topic.formulas && topic.formulas.length > 0 && (
        <section className="panel formulas-panel">
          <span className="eyebrow">Formulės</span>
          <div className="formula-list">
            {topic.formulas.map((formula, idx) => (
              <div key={idx} className="formula-item">
                <MathText text={formula} onConceptClick={handleConceptClick} />
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.mistakes && topic.mistakes.length > 0 && (
        <section className="panel mistakes-panel">
          <span className="eyebrow">Dažnos klaidos</span>
          <ul className="mistake-list">
            {topic.mistakes.map((mistake, idx) => (
              <li key={idx}>
                <MathText text={mistake} onConceptClick={handleConceptClick} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {topic.examples && topic.examples.length > 0 && (
        <section className="panel wide examples-panel">
          <span className="eyebrow">Uždavinių pavyzdžiai su sprendimais</span>
          <div className="examples-container">
            {topic.examples.map((example, idx) => (
              <article key={idx} className="example">
                <h3>{example.title}</h3>
                <p className="example-statement">
                  <MathText text={example.text} onConceptClick={handleConceptClick} />
                </p>
                <div className="example-solution-box">
                  <strong>Sprendimas.</strong>
                  <p>
                    <MathText text={example.solution} onConceptClick={handleConceptClick} />
                  </p>
                </div>
                <div className="example-answer">
                  <strong>Atsakymas:</strong> <MathText text={example.answer} onConceptClick={handleConceptClick} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
