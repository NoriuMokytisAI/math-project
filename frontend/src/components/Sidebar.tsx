import React from 'react';
import { State } from '../types';
import { getDueSrsCards, recommendation } from '../systems';
import { inferStartMode, START_MODE_LABELS } from '../startModes';

interface SidebarProps {
  state: State;
  currentPage: string;
  navigate: (page: string, id?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ state, currentPage, navigate }) => {
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs).length;
  const solved = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId)).size;

  const masteries = Object.values(state.mastery);
  const averageMastery = masteries.length
    ? Math.round(masteries.reduce((sum, item) => sum + item.value, 0) / masteries.length)
    : 0;

  const rec = recommendation(state);
  const mode = inferStartMode(state.profile);

  const navItems = [
    { page: 'dashboard', label: 'Apžvalga', icon: '⧉' },
    { page: 'diagnostic', label: 'Diagnostika', icon: '⌁' },
    { page: 'srs', label: 'SRS', icon: '⏰' },
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
          <strong>NoriuMokyti.lt</strong>
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
