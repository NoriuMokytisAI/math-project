import React from 'react';
import { State } from '../types';
import { getDueSrsCards } from '../systems';
import { topics } from '../content';

interface TopbarProps {
  state: State;
  currentPage: string;
  currentId?: string;
  navigate: (page: string, id?: string) => void;
}

export const Topbar: React.FC<TopbarProps> = ({ state, currentPage, currentId, navigate }) => {
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs).length;
  const activeTopic = topics[state.activeTopicId] || Object.values(topics)[0];

  const getPageTitle = () => {
    if (currentPage === 'topic') {
      const topicId = currentId || state.activeTopicId;
      return topics[topicId]?.title || 'Teorija';
    }
    if (currentPage === 'practice') {
      const topicId = currentId || state.activeTopicId;
      return `Praktika: ${topics[topicId]?.title || 'Uždaviniai'}`;
    }
    if (currentPage === 'tests') {
      const topicId = currentId || state.activeTopicId;
      return `Testai: ${topics[topicId]?.title || 'Žinių patikrinimas'}`;
    }

    const titles: Record<string, string> = {
      dashboard: 'Mokymosi apžvalga',
      diagnostic: 'Diagnostika',
      grade: 'Tavo programos pakopa',
      srs: 'Atminties kartojimas (SRS)',
      glossary: 'Sąvokų žodynas',
      settings: 'Nustatymai',
    };
    return titles[currentPage] || 'Matematika';
  };

  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">Mokymosi kelias</span>
        <h1>{getPageTitle()}</h1>
      </div>
      <div className="top-actions">
        <button
          className={`pill ${due > 0 ? 'attention' : ''}`}
          onClick={() => navigate('srs')}
        >
          SRS: {due}
        </button>
        <button
          className="pill accent"
          onClick={() => navigate('topic', activeTopic.id)}
        >
          Dabartinė tema: {activeTopic.title}
        </button>
      </div>
    </header>
  );
};
