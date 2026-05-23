import React from 'react';
import { State } from '../types';
import { topics, concepts, exercises } from '../content';
import { getTestsForTopic, ensureTopicSrsCards } from '../systems';
import { MathText } from './MathText';

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
  const activeId = topicId || state.activeTopicId || Object.keys(topics)[0];
  const topic = topics[activeId];

  if (!topic) {
    return (
      <div className="panel centered">
        <h2>Tema nerasta</h2>
        <button onClick={() => navigate("theory")}>Grįžti į sąrašą</button>
      </div>
    );
  }

  const topicTests = getTestsForTopic(topic.id);
  const isRelevant = (state.profile.relevantTopicIds || []).includes(topic.id);
  const topicExercises = exercises.filter((exercise) => exercise.topicId === topic.id);
  const theoryWordCount = topic.sections.reduce((total, section) => (
    total + section.body.join(" ").trim().split(/\s+/).filter(Boolean).length
  ), 0);
  const isThinTheory = theoryWordCount > 0 && theoryWordCount < (topic.level === "olympiad" ? 1000 : 800);
  const navItems = [
    { id: "topic-theory", label: "Teorija", visible: topic.sections.length > 0 },
    { id: "topic-concepts", label: "Sąvokos", visible: topic.concepts.length > 0 },
    { id: "topic-formulas", label: "Formulės", visible: topic.formulas.length > 0 },
    { id: "topic-mistakes", label: "Klaidos", visible: topic.mistakes.length > 0 },
    { id: "topic-examples", label: "Pavyzdžiai", visible: topic.examples.length > 0 },
    { id: "topic-next", label: "Toliau", visible: true }
  ].filter((item) => item.visible);

  const handleToggleRelevant = () => {
    updateState((prev) => {
      const current = prev.profile.relevantTopicIds || [];
      const next = current.includes(topic.id)
        ? current.filter(id => id !== topic.id)
        : [...current, topic.id];
      return {
        ...prev,
        profile: {
          ...prev.profile,
          relevantTopicIds: next
        }
      };
    });
    showToast(isRelevant ? "Tema pašalinta iš aktualių temų." : "Tema pridėta prie aktualių temų!");
  };

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
      <section className="panel wide topic-header">
        <div className="section-head" style={{ marginBottom: '16px' }}>
          <div>
            <span className="eyebrow">Tema • {topic.strand}</span>
            <h2>{topic.title}</h2>
          </div>
          <button onClick={() => navigate("theory")}>Grįžti į sąrašą</button>
        </div>
        {topic.prerequisites && topic.prerequisites.length > 0 && (
          <p className="lead prerequisites">
            Prerekvizitai: {topic.prerequisites.join(", ")}.
          </p>
        )}
        <div className="actions actions-stack-mobile">
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
            className={isRelevant ? "secondary" : "secondary-outline"}
            onClick={handleToggleRelevant}
          >
            {isRelevant ? "Jau aktualiose temose" : "Pridėti prie aktualių temų"}
          </button>
          <button
            className="secondary-outline"
            onClick={handleMarkAsRead}
          >
            Pažymėti teoriją kaip skaitytą
          </button>
        </div>
      </section>

      <section className="panel wide topic-learning-map">
        <div>
          <span className="eyebrow">Temos struktūra</span>
          <h3>Mokykis dalimis, ne vienu ilgu puslapiu</h3>
          <p>
            Pirmiausia perskaityk teoriją, tada pasitikrink sąvokas, peržiūrėk formules ir pavyzdžius, o pabaigoje pereik į praktiką.
          </p>
        </div>
        <nav className="topic-anchor-list" aria-label="Temos dalys">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>
      </section>

      {isThinTheory && (
        <section className="panel wide topic-depth-warning">
          <span className="eyebrow">Turinio gylis</span>
          <h3>Ši tema dar turi būti plečiama</h3>
          <p>
            Puslapis jau veikia mokymuisi, bet teorijos gylis dar nesiekia galutinio standarto. Turinys turėtų būti pildomas papildomais paaiškinimais, pavyzdžiais ir uždavinių variacijomis.
          </p>
        </section>
      )}

      {topic.concepts && topic.concepts.length > 0 && (
        <section id="topic-concepts" className="panel wide concepts-panel">
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

      <section id="topic-theory" className="panel wide theory-content">
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
        <section id="topic-formulas" className="panel formulas-panel">
          <span className="eyebrow">Formulės</span>
          <div className="formula-list">
            {topic.formulas.map((formula, idx) => (
              <div key={idx} className="formula-item">
                <MathText
                  text={formula.includes("$") ? formula : `$${formula}$`}
                  onConceptClick={handleConceptClick}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.mistakes && topic.mistakes.length > 0 && (
        <section id="topic-mistakes" className="panel mistakes-panel">
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
        <section id="topic-examples" className="panel wide examples-panel">
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

      <section id="topic-next" className="panel wide topic-next-actions">
        <div>
          <span className="eyebrow">Kitas žingsnis</span>
          <h3>Įtvirtink temą aktyviai</h3>
          <p>
            Šioje temoje paruošta {topicExercises.length} uždavinių ir {topicTests.length} testų. Uždavinius gali rinktis pagal sudėtingumą, o testai padeda pakelti meistriškumą.
          </p>
        </div>
        <div className="topic-next-card-row">
          <button className="primary" onClick={() => navigate("practice", topic.id)}>
            Rinktis uždavinius
          </button>
          <button onClick={() => navigate("tests", topic.id)}>
            Atidaryti testus
          </button>
        </div>
      </section>
    </div>
  );
};
