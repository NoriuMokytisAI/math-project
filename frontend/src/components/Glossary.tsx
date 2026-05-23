import React, { useState, useEffect } from 'react';
import { State } from '../types';
import { concepts } from '../content';
import { calculateConceptMastery, ensureConceptSrsCard } from '../systems';
import { MathText } from './MathText';

interface GlossaryProps {
  state: State;
  selectedId?: string;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  showToast: (message: string) => void;
}

export const Glossary: React.FC<GlossaryProps> = ({
  state,
  selectedId,
  navigate,
  updateState,
  showToast
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const conceptKeys = Object.keys(concepts);

  // Resolve selected ID
  const activeId = selectedId && concepts[selectedId] 
    ? selectedId 
    : (isMobile && !selectedId ? "" : (conceptKeys[0] || ""));
  const selected = activeId ? concepts[activeId] : null;

  if (conceptKeys.length === 0) {
    return (
      <div className="panel centered">
        <h2>Žodynas tuščias</h2>
        <button onClick={() => navigate("dashboard")}>Grįžti į apžvalgą</button>
      </div>
    );
  }

  const cardId = `theory-${activeId}`;
  const card = state.srsCards.find((item) => item.id === cardId);
  const isEnabled = card ? card.enabled : false;
  const mastery = calculateConceptMastery(state, activeId);

  const handleToggleSrs = () => {
    updateState((prev) => {
      // Ensure the card exists in SRS
      const prepared = prev.srsCards.some((item) => item.id === cardId)
        ? prev
        : ensureConceptSrsCard(prev, activeId, prev.activeTopicId);

      const srsCards = prepared.srsCards.map((item) => {
        if (item.id === cardId) {
          const nextEnabled = !item.enabled;
          return {
            ...item,
            enabled: nextEnabled,
            queue: nextEnabled ? "new" : "suspended"
          };
        }
        return item;
      });

      return {
        ...prepared,
        srsCards
      };
    });
    showToast(isEnabled ? "Sąvoka pašalinta iš SRS kartojimo." : "Sąvoka įtraukta į SRS kartojimą.");
  };

  const handleConceptSelect = (id: string) => {
    navigate("glossary", id);
  };

  if (isMobile) {
    if (!selected) {
      return (
        <section className="panel glossary-list" style={{ width: '100%' }}>
          <span className="eyebrow">Sąvokų sąrašas</span>
          <div className="list-buttons">
            {conceptKeys.map((id) => {
              const concept = concepts[id];
              const active = id === activeId;
              return (
                <button
                  key={id}
                  type="button"
                  className={active ? "active" : ""}
                  onClick={() => handleConceptSelect(id)}
                  style={{ width: '100%', textAlign: 'left', marginBottom: '8px', minHeight: '44px' }}
                >
                  {concept.title}
                </button>
              );
            })}
          </div>
        </section>
      );
    }

    return (
      <section className="panel glossary-detail" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <span className="eyebrow">{selected.type === 'concept' ? 'Sąvoka' : selected.type === 'method' ? 'Metodas' : 'Formulė'}</span>
          <button type="button" className="secondary-outline" onClick={() => navigate("glossary")} style={{ padding: '6px 12px', fontSize: '13px' }}>
            Atgal į sąrašą
          </button>
        </div>
        <h2>{selected.title}</h2>

        <div className="concept-definition-lead">
          <p className="lead">
            <MathText text={selected.definition} onConceptClick={handleConceptSelect} />
          </p>
        </div>

        <div className="concept-toolbar">
          <div className="mastery-bar-wrapper">
            <div className="mastery-bar labeled" style={{ '--p': mastery } as React.CSSProperties}>
              <span></span>
            </div>
            <b>Meistriškumas: {mastery}%</b>
          </div>
          <button
            type="button"
            className={isEnabled ? "secondary-outline" : "primary"}
            onClick={handleToggleSrs}
          >
            {isEnabled ? "Išimti iš SRS" : "Įtraukti į SRS"}
          </button>
        </div>

        {selected.intuition && (
          <div className="detail-section">
            <h3>Intuityviai</h3>
            <p>
              <MathText text={selected.intuition} onConceptClick={handleConceptSelect} />
            </p>
          </div>
        )}

        {selected.formal && (
          <div className="detail-section">
            <h3>Formaliai</h3>
            <p>
              <MathText text={selected.formal} onConceptClick={handleConceptSelect} />
            </p>
          </div>
        )}

        {selected.related && selected.related.length > 0 && (
          <div className="detail-section related-concepts">
            <h3>Susijusios sąvokos</h3>
            <div className="chips">
              {selected.related.map((id) => {
                const rel = concepts[id];
                if (!rel) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    className="concept-chip"
                    onClick={() => handleConceptSelect(id)}
                  >
                    {rel.title}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </section>
    );
  }

  // Desktop render (selected is guaranteed non-null on desktop because activeId defaults to conceptKeys[0])
  const desktopSelected = selected || concepts[conceptKeys[0]];

  return (
    <div className="split glossary-layout">
      <section className="panel glossary-list">
        <span className="eyebrow">Sąvokų sąrašas</span>
        <div className="list-buttons">
          {conceptKeys.map((id) => {
            const concept = concepts[id];
            const active = id === activeId;
            return (
              <button
                key={id}
                type="button"
                className={active ? "active" : ""}
                onClick={() => handleConceptSelect(id)}
              >
                {concept.title}
              </button>
            );
          })}
        </div>
      </section>

      {desktopSelected && (
        <section className="panel glossary-detail">
          <span className="eyebrow">{desktopSelected.type === 'concept' ? 'Sąvoka' : desktopSelected.type === 'method' ? 'Metodas' : 'Formulė'}</span>
          <h2>{desktopSelected.title}</h2>

          <div className="concept-definition-lead">
            <p className="lead">
              <MathText text={desktopSelected.definition} onConceptClick={handleConceptSelect} />
            </p>
          </div>

          <div className="concept-toolbar">
            <div className="mastery-bar-wrapper">
              <div className="mastery-bar labeled" style={{ '--p': mastery } as React.CSSProperties}>
                <span></span>
              </div>
              <b>Meistriškumas: {mastery}%</b>
            </div>
            <button
              type="button"
              className={isEnabled ? "secondary-outline" : "primary"}
              onClick={handleToggleSrs}
            >
              {isEnabled ? "Išimti iš SRS" : "Įtraukti į SRS"}
            </button>
          </div>

          {desktopSelected.intuition && (
            <div className="detail-section">
              <h3>Intuityviai</h3>
              <p>
                <MathText text={desktopSelected.intuition} onConceptClick={handleConceptSelect} />
              </p>
            </div>
          )}

          {desktopSelected.formal && (
            <div className="detail-section">
              <h3>Formaliai</h3>
              <p>
                <MathText text={desktopSelected.formal} onConceptClick={handleConceptSelect} />
              </p>
            </div>
          )}

          {desktopSelected.related && desktopSelected.related.length > 0 && (
            <div className="detail-section related-concepts">
              <h3>Susijusios sąvokos</h3>
              <div className="chips">
                {desktopSelected.related.map((id) => {
                  const rel = concepts[id];
                  if (!rel) return null;
                  return (
                    <button
                      key={id}
                      type="button"
                      className="concept-chip"
                      onClick={() => handleConceptSelect(id)}
                    >
                      {rel.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};
