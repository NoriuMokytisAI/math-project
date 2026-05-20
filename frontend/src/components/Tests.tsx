import React, { useState } from 'react';
import { State, Test, Exercise } from '../types';
import { tests as allTests, exercises as allExercises, topics } from '../content';
import { getTestsForTopic, recordTestAttempt } from '../systems';
import { MathText } from './MathText';

interface TestsProps {
  state: State;
  topicId: string;
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
  showToast: (message: string) => void;
}

interface TestSession {
  testId: string;
  topicId: string;
  items: Exercise[];
  index: number;
  answers: Record<string, { value: string; correct: boolean }>;
  startedAt: number;
}

export const Tests: React.FC<TestsProps> = ({
  state,
  topicId,
  navigate,
  updateState,
  showToast
}) => {
  const activeTopicId = topicId || state.activeTopicId || Object.keys(topics)[0];
  const topic = topics[activeTopicId];

  const topicTests = getTestsForTopic(activeTopicId);

  // Test session state
  const [session, setSession] = useState<TestSession | null>(null);

  // Quiz runner input state
  const [textAnswer, setTextAnswer] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleStartTest = (test: Test) => {
    const items = test.exerciseIds
      .map((id) => allExercises.find((ex) => ex.id === id))
      .filter((ex): ex is Exercise => !!ex);

    if (!items.length) {
      showToast("Šis testas neturi atidaromų užduočių.");
      return;
    }

    setSession({
      testId: test.id,
      topicId: activeTopicId,
      items,
      index: 0,
      answers: {},
      startedAt: Date.now()
    });

    setTextAnswer("");
    setSelectedChoice("");
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

  const saveCurrentAnswer = (currentSession: TestSession, ansValue: string) => {
    const exercise = currentSession.items[currentSession.index];
    const val = ansValue.trim();
    currentSession.answers[exercise.id] = {
      value: val,
      correct: val ? isCorrectAnswer(exercise, val) : false
    };
  };

  const handleNext = () => {
    if (!session) return;
    const currentExercise = session.items[session.index];
    const currentAns = hasChoices(currentExercise) ? selectedChoice : textAnswer;

    saveCurrentAnswer(session, currentAns);

    const nextIndex = session.index + 1;
    if (nextIndex < session.items.length) {
      setSession({
        ...session,
        index: nextIndex
      });
      // Load previous answer if exists
      const nextEx = session.items[nextIndex];
      const prevAns = session.answers[nextEx.id]?.value || "";
      if (hasChoices(nextEx)) {
        setSelectedChoice(prevAns);
        setTextAnswer("");
      } else {
        setTextAnswer(prevAns);
        setSelectedChoice("");
      }
    }
  };

  const handlePrev = () => {
    if (!session) return;
    const currentExercise = session.items[session.index];
    const currentAns = hasChoices(currentExercise) ? selectedChoice : textAnswer;

    saveCurrentAnswer(session, currentAns);

    const prevIndex = session.index - 1;
    if (prevIndex >= 0) {
      setSession({
        ...session,
        index: prevIndex
      });
      // Load previous answer
      const prevEx = session.items[prevIndex];
      const prevAns = session.answers[prevEx.id]?.value || "";
      if (hasChoices(prevEx)) {
        setSelectedChoice(prevAns);
        setTextAnswer("");
      } else {
        setTextAnswer(prevAns);
        setSelectedChoice("");
      }
    }
  };

  const handleFinish = () => {
    if (!session) return;
    const currentExercise = session.items[session.index];
    const currentAns = hasChoices(currentExercise) ? selectedChoice : textAnswer;

    saveCurrentAnswer(session, currentAns);

    const testObj = allTests.find((item) => item.id === session.testId);
    if (!testObj) {
      setSession(null);
      return;
    }

    const results = session.items.map((exercise) => ({
      exerciseId: exercise.id,
      correct: Boolean(session.answers[exercise.id]?.correct)
    }));

    const correctCount = results.filter((item) => item.correct).length;
    const totalCount = results.length;

    updateState((prev) => {
      return recordTestAttempt(prev, testObj, results);
    });

    showToast(`Testas baigtas! Rezultatas: ${correctCount}/${totalCount}.`);
    setSession(null);
  };

  if (!topic) {
    return (
      <div className="panel centered">
        <h2>Tema nerasta</h2>
        <button onClick={() => navigate("dashboard")}>Grįžti į apžvalgą</button>
      </div>
    );
  }

  // Quiz session active view
  if (session) {
    const currentExercise = session.items[session.index];
    const progress = Math.round(((session.index + 1) / session.items.length) * 100);

    return (
      <section className="panel practice-card test-runner">
        <span className="eyebrow">
          {session.items.length} klaus. • Klausimas {session.index + 1} iš {session.items.length}
        </span>
        <div className="onboarding-progress compact-progress">
          <span style={{ width: `${progress}%` }}></span>
        </div>

        <h2>
          <MathText text={currentExercise.statement} onConceptClick={(id) => navigate("glossary", id)} />
        </h2>

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
            />
          </div>
        )}

        <div className="actions test-actions">
          <button
            onClick={handlePrev}
            disabled={session.index === 0}
          >
            Atgal
          </button>

          {session.index === session.items.length - 1 ? (
            <button
              className="primary"
              onClick={handleFinish}
            >
              Baigti testą
            </button>
          ) : (
            <button
              className="primary"
              onClick={handleNext}
            >
              Kitas
            </button>
          )}

          <button
            className="secondary-outline danger-text"
            onClick={() => setSession(null)}
          >
            Nutraukti
          </button>
        </div>
      </section>
    );
  }

  // Dashboard of tests for this topic
  if (!topicTests.length) {
    return (
      <section className="panel centered empty-tests">
        <span className="eyebrow">{topic.title}</span>
        <h2>Šiai temai testai dar nesukurti.</h2>
        <p>Gali tęsti praktiką ir grįžti vėliau.</p>
        <button
          className="primary"
          onClick={() => navigate("practice", topic.id)}
        >
          Eiti į praktiką
        </button>
      </section>
    );
  }

  return (
    <div className="grid tests-dashboard">
      <section className="panel wide tests-header">
        <span className="eyebrow">{topic.title}</span>
        <h2>Testai</h2>
        <p className="lead">
          Testai meistriškumą keičia stipriau negu įprasta praktika. Pradėk tada, kai bent kartą perskaitei teoriją ir pabandei kelis uždavinius.
        </p>
      </section>

      {topicTests.map((test) => {
        const attempts = state.testAttempts || [];
        const last = [...attempts].reverse().find((attempt) => attempt.testId === test.id);

        return (
          <article key={test.id} className="panel test-card">
            <span className="eyebrow">{test.exerciseIds.length} klausimai</span>
            <h3>{test.title}</h3>
            <p className="test-status">
              {last ? `Paskutinis rezultatas: ${last.correct}/${last.total} (${Math.round(last.score * 100)}%)` : "Dar nelaikytas."}
            </p>
            <button
              className="primary"
              onClick={() => handleStartTest(test)}
            >
              Pradėti testą
            </button>
          </article>
        );
      })}
    </div>
  );
};
