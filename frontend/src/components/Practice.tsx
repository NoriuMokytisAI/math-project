import React, { useState, useEffect } from 'react';
import { State, Exercise } from '../types';
import { exercises as allExercises, topics } from '../content';
import { recordAttempt } from '../systems';
import { MathText } from './MathText';

interface PracticeProps {
  state: State;
  topicId: string;
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

  const pool = allExercises.filter((ex) => ex.topicId === activeTopicId);

  // Practice session state
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [visibleHints, setVisibleHints] = useState<string[]>([]);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [result, setResult] = useState<{ correct: boolean } | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [startedAt, setStartedAt] = useState(Date.now());

  // Pick next exercise
  const loadNextExercise = (newPool = pool) => {
    if (!newPool.length) {
      setCurrentExercise(null);
      return;
    }
    const solved = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId));
    const next = newPool.find((ex) => !solved.has(ex.id)) || newPool[Math.floor(Math.random() * newPool.length)];

    setCurrentExercise(next);
    setVisibleHints([]);
    setAttemptsCount(0);
    setResult(null);
    setTextAnswer("");
    setSelectedChoice("");
    setStartedAt(Date.now());
  };

  // Run on mount or when topic changes
  useEffect(() => {
    loadNextExercise();
  }, [activeTopicId]);

  if (!topic) {
    return (
      <div className="panel centered">
        <h2>Tema nerasta</h2>
        <button onClick={() => navigate("dashboard")}>Grįžti į apžvalgą</button>
      </div>
    );
  }

  if (!currentExercise) {
    return (
      <section className="panel centered empty-practice">
        <span className="eyebrow">{topic.title}</span>
        <h2>Šiai temai pratimai dar neparuošti.</h2>
        <p>Gali skaityti teoriją, peržiūrėti sąvokas arba rinktis kitą temą programoje.</p>
        <div className="actions">
          <button onClick={() => navigate("topic", topic.id)}>Teorija</button>
          <button className="primary" onClick={() => navigate("grade")}>Programa</button>
        </div>
      </section>
    );
  }

  const handleHint = () => {
    const nextHintIdx = visibleHints.length;
    if (nextHintIdx < currentExercise.hints.length) {
      setVisibleHints((prev) => [...prev, currentExercise.hints[nextHintIdx]]);
    } else {
      showToast("Daugiau užuominų nėra!");
    }
  };

  const normalize = (value: string) => {
    return String(value).toLowerCase().replace(/\s+/g, "").replace(",", ".");
  };

  const isCorrectAnswer = (exercise: Exercise, value: string): boolean => {
    const exerciseTolerance = (exercise as any).answerTolerance;
    if (Number.isFinite(Number(value)) && Number.isFinite(Number(exercise.answer)) && Number(exerciseTolerance || 0) > 0) {
      return Math.abs(Number(value) - Number(exercise.answer)) <= Number(exerciseTolerance);
    }
    const accepted = (exercise as any).acceptedAnswers?.length
      ? (exercise as any).acceptedAnswers
      : [exercise.answer];
    return accepted.some((answer: string) => normalize(value) === normalize(answer));
  };

  const hasChoices = (exercise: Exercise): exercise is Exercise & { choices: string[] } => {
    return Array.isArray(exercise.choices) && exercise.choices.length > 0;
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const answer = hasChoices(currentExercise) ? selectedChoice : textAnswer;
    const trimmed = answer.trim();

    if (!trimmed) {
      showToast("Įrašyk arba pasirink atsakymą.");
      return;
    }

    const correct = isCorrectAnswer(currentExercise, trimmed);
    const nextAttempts = attemptsCount + 1;
    setAttemptsCount(nextAttempts);
    setResult({ correct });

    updateState((prev) => {
      return recordAttempt(prev, currentExercise, {
        correct,
        seconds: Math.round((Date.now() - startedAt) / 1000),
        hintsUsed: visibleHints.length,
        attempts: nextAttempts
      });
    });

    if (correct) {
      showToast("Teisingai! Šaunu.");
    } else {
      showToast("Atsakymas neteisingas, bandyk dar kartą arba peržiūrėk užuominą.");
    }
  };

  return (
    <section className="panel practice-card">
      <span className="eyebrow">
        {topic.title} • {(currentExercise as any).level || "Bendras lygis"}
      </span>
      <h2>
        <MathText text={currentExercise.statement} onConceptClick={(id) => navigate("glossary", id)} />
      </h2>

      <form onSubmit={handleSubmit} className="practice-form">
        {hasChoices(currentExercise) ? (
          <div className="choice-list">
            {currentExercise.choices.map((choice) => {
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
          <div className="hint-box">
            {visibleHints.map((hint, idx) => (
              <p key={idx} className="hint-text">
                💡 Užuomina {idx + 1}: <MathText text={hint} onConceptClick={(id) => navigate("glossary", id)} />
              </p>
            ))}
          </div>
        )}

        <div className="actions practice-actions">
          <button
            type="button"
            onClick={handleHint}
            disabled={result?.correct}
          >
            Užuomina ({currentExercise.hints.length - visibleHints.length})
          </button>

          <button
            type="submit"
            className="primary"
            disabled={result?.correct}
          >
            Tikrinti
          </button>

          {result && (
            <button
              type="button"
              onClick={() => loadNextExercise()}
              className="secondary-outline"
            >
              Kitas uždavinys
            </button>
          )}
        </div>
      </form>

      {result && (
        <div className={`result ${result.correct ? "ok" : "bad"}`}>
          <h3>{result.correct ? "Teisingai!" : "Dar ne visai..."}</h3>
          <div className="result-explanation">
            <strong>Sprendimas:</strong>
            <p>
              <MathText text={currentExercise.solution} onConceptClick={(id) => navigate("glossary", id)} />
            </p>
          </div>
          {(currentExercise as any).alternate && (
            <details className="result-alternate">
              <summary>Peržiūrėti kitus sprendimo būdus</summary>
              <p>
                <MathText text={(currentExercise as any).alternate} onConceptClick={(id) => navigate("glossary", id)} />
              </p>
            </details>
          )}
        </div>
      )}
    </section>
  );
};
