import React, { useState, useEffect } from 'react';
import { State, SrsCard } from '../types';
import { getDueSrsCards, scheduleCard } from '../systems';
import { MathText } from './MathText';

interface SrsReviewProps {
  state: State;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  showToast: (message: string) => void;
}

export const SrsReview: React.FC<SrsReviewProps> = ({
  state,
  navigate,
  updateState,
  showToast
}) => {
  const [revealed, setRevealed] = useState(false);

  const due = getDueSrsCards(state.srsCards, state.preferences?.srs);
  const card: SrsCard | undefined = due[0];

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleAnswer = (rating: 'again' | 'good') => {
    if (!card) return;

    updateState((prev) => {
      const srsCards = prev.srsCards.map((item) =>
        item.id === card.id ? scheduleCard(item, rating, prev.preferences?.srs) : item
      );
      const achievements = Array.from(new Set([...prev.achievements, "firstSrs"]));
      return {
        ...prev,
        srsCards,
        achievements
      };
    });

    setRevealed(false);
    showToast(rating === 'again' ? "Kortelė bus pakartota netrukus." : "Kortelė nukelta ateičiai.");
  };

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!card) return;

      // Ignore if user is typing in input elements (though none should be here)
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (!revealed) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleReveal();
        }
      } else {
        if (e.key === '1') {
          e.preventDefault();
          handleAnswer('again');
        } else if (e.key === '2' || e.key === 'Enter') {
          e.preventDefault();
          handleAnswer('good');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [card, revealed]);

  if (!card) {
    return (
      <section className="panel centered empty-srs">
        <h2>Šiandien nėra SRS kortelių.</h2>
        <p>
          Kortelės atsiras tada, kai skaitydamas teoriją paspausi sąvoką, pažymėsi temą kaip skaitytą arba bandysi susijusius uždavinius.
        </p>
        <button
          className="primary"
          onClick={() => navigate("topic", state.activeTopicId)}
        >
          Eiti į teoriją
        </button>
      </section>
    );
  }

  return (
    <section className={`panel review-card ${revealed ? "revealed" : ""}`} tabIndex={0}>
      <span className="eyebrow">
        {card.deck === "theory" ? "Teorijos kortelė" : "Praktikos kortelė"} • {card.queue} • Liko {due.length}
      </span>
      <div
        className="anki-card"
        onClick={!revealed ? handleReveal : undefined}
        style={{ cursor: !revealed ? 'pointer' : 'default' }}
      >
        <div className="card-face">
          <h2>
            <MathText text={card.front} onConceptClick={(id) => navigate("glossary", id)} />
          </h2>
          {revealed && (
            <div className="card-answer">
              <span className="card-side">Atsakymas</span>
              <p>
                <MathText text={card.back} onConceptClick={(id) => navigate("glossary", id)} />
              </p>
            </div>
          )}
        </div>
      </div>

      {revealed ? (
        <div className="actions review-actions">
          <button
            data-srs="again"
            onClick={() => handleAnswer('again')}
          >
            <span>[1]</span> Pakartoti
          </button>
          <button
            className="primary"
            data-srs="good"
            onClick={() => handleAnswer('good')}
          >
            <span>[2 / Enter]</span> Moku gerai
          </button>
        </div>
      ) : (
        <div className="actions review-actions">
          <button
            className="primary"
            onClick={handleReveal}
          >
            <span>[Space / Enter]</span> Rodyti atsakymą
          </button>
        </div>
      )}
    </section>
  );
};
