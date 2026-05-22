import React from 'react';
import { State } from '../types';
import { getDueSrsCards, recommendation } from '../systems';
import { inferStartMode, START_MODE_LABELS } from '../startModes';
import { exercises, topics } from '../content';

interface SidebarProps {
  state: State;
  currentPage: string;
  currentId?: string;
  navigate: (page: string, id?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ state, currentPage, currentId, navigate }) => {
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs).length;
  const solved = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId)).size;

  const masteries = Object.values(state.mastery);
  const averageMastery = masteries.length
    ? Math.round(masteries.reduce((sum, item) => sum + item.value, 0) / masteries.length)
    : 0;

  const rec = recommendation(state);
  const mode = inferStartMode(state.profile);
  const olympiadTopics = Object.values(topics)
    .filter((topic) => topic.level === 'olympiad')
    .sort((a, b) => a.grade - b.grade);
  const currentOlympiadId = currentId || (topics[state.activeTopicId]?.level === 'olympiad' ? state.activeTopicId : '');

  const navItems = [
    { page: 'dashboard', label: 'Apžvalga', icon: '⧉' },
    { page: 'diagnostic', label: 'Diagnostika', icon: '⌁' },
    { page: 'srs', label: 'SRS', icon: '⏰' },
    { page: 'theory', label: 'Teorija', icon: '📚' },
    { page: 'practice', label: 'Praktika', icon: '✍' },
    { page: 'tests', label: 'Testai', icon: '📝' },
    { page: 'glossary', label: 'Žodynas', icon: '📖' },
    { page: 'settings', label: 'Nustatymai', icon: '⚙' },
  ];

  return (
    <aside className="sidebar">
      <div
        className="brand"
        role="button"
        tabIndex={0}
        onClick={() => navigate('dashboard')}
        onKeyDown={(e) => e.key === 'Enter' && navigate('dashboard')}
      >
        <span className="brand-mark">∑</span>
        <span>
          <strong>NoriuMokytis.lt</strong>
          <small>Matematika 5-12</small>
        </span>
      </div>

      <nav>
        {navItems.map(({ page, label, icon }) => {
          const active = currentPage === page || (page === 'dashboard' && currentPage === 'grade');
          return (
            <button
              key={page}
              className={active ? 'active' : ''}
              onClick={() => navigate(page)}
            >
              <span className="nav-icon">{icon}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      {olympiadTopics.length > 0 && (
        <section className="side-card olympiad-side-card" aria-label="Olimpiadiniai uždaviniai">
          <div className="side-card-head">
            <span className="eyebrow">Olimpiada</span>
            <strong>Uždaviniai pagal klasę</strong>
          </div>
          <div className="olympiad-grade-links">
            {olympiadTopics.map((topic) => {
              const topicExercises = exercises.filter((exercise) => exercise.topicId === topic.id && exercise.level === 'olympiad');
              const mastery = state.mastery[topic.id];
              const progress = mastery?.olympiadValue ?? 0;
              const isActive = currentPage === 'practice' && currentOlympiadId === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  className={isActive ? 'active' : ''}
                  onClick={() => navigate('practice', topic.id)}
                  title={`${topic.grade} klasės olimpiadiniai uždaviniai`}
                >
                  <span>{topic.grade}</span>
                  <small>{topicExercises.length} užd.</small>
                  <i style={{ '--p': progress } as React.CSSProperties}></i>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="olympiad-side-cta"
            onClick={() => {
              const profileGrade = state.profile.grade || 9;
              const directId = `olimpiada-${String(profileGrade).padStart(2, '0')}`;
              const fallback = olympiadTopics.find((topic) => topic.grade >= profileGrade) || olympiadTopics[0];
              navigate('practice', topics[directId] ? directId : fallback.id);
            }}
          >
            Spręsti artimiausią lygį
          </button>
        </section>
      )}

      <div className="side-card">
        <span className="eyebrow">Pradžios režimas</span>
        <strong>{START_MODE_LABELS[mode]}</strong>
        <small>{state.profile.goal || "Pasirink tikslą"}</small>
        <p className="rec-text">{rec.text}</p>
        <div className="side-meter-wrapper">
          <div className="side-meter" style={{ '--p': averageMastery } as React.CSSProperties}>
            <span></span>
          </div>
          <span className="side-meter-label">{averageMastery}% meistriškumas</span>
        </div>
        <div className="side-stats">
          <span>{due} SRS</span>
          <span>{solved} užd.</span>
        </div>
      </div>
    </aside>
  );
};
