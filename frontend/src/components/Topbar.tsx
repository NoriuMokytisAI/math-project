import React from 'react';
import { State } from '../types';
import { getDueSrsCards } from '../systems';
import { topics } from '../content';
import { firstTopicForProfile } from '../startModes';

interface TopbarProps {
  state: State;
  currentPage: string;
  currentId?: string;
  navigate: (page: string, id?: string) => void;
}

export const Topbar: React.FC<TopbarProps> = ({ state, currentPage, currentId, navigate }) => {
  const due = getDueSrsCards(state.srsCards, state.preferences?.srs).length;
  const targetTopicId = state.profile.targetTopicId && topics[state.profile.targetTopicId]
    ? state.profile.targetTopicId
    : firstTopicForProfile(state.profile);
  const activeTopic = topics[targetTopicId] || topics[state.activeTopicId] || Object.values(topics)[0];

  const getPageTitle = () => {
    if (currentPage === 'topic' || (currentPage === 'theory' && currentId)) {
      const topicId = currentId || state.activeTopicId;
      return topics[topicId]?.title || 'Teorija';
    }
    if (currentPage === 'practice') {
      const topicId = currentId || state.activeTopicId;
      if (currentId) {
        return topics[topicId]?.title || 'Praktika';
      }
      return 'Praktika';
    }
    if (currentPage === 'tests') {
      const topicId = currentId || state.activeTopicId;
      if (currentId) {
        return topics[topicId]?.title || 'Testai';
      }
      return 'Testai';
    }
    if (currentPage === 'glossary') {
      if (currentId) {
        return 'Sąvoka';
      }
      return 'Sąvokų žodynas';
    }

    const titles: Record<string, string> = {
      dashboard: 'Mokymosi apžvalga',
      diagnostic: 'Diagnostika',
      grade: 'Tavo programos pakopa',
      srs: 'Atminties kartojimas (SRS)',
      settings: 'Nustatymai',
    };
    return titles[currentPage] || 'Matematika';
  };

  const getBackTarget = (): { page: string; id?: string } | null => {
    if (currentPage === 'topic' || (currentPage === 'theory' && currentId)) {
      return { page: 'theory' };
    }
    if (currentPage === 'practice' && currentId) {
      return { page: 'practice' };
    }
    if (currentPage === 'glossary' && currentId) {
      return { page: 'glossary' };
    }
    return null;
  };

  const backTarget = getBackTarget();

  return (
    <header className="topbar">
      <div className="topbar-title-section" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {backTarget && (
          <button
            type="button"
            className="topbar-back-btn"
            onClick={() => navigate(backTarget.page, backTarget.id)}
            aria-label="Atgal"
          >
            ←
          </button>
        )}
        <div>
          <span className="eyebrow topbar-eyebrow">Mokymosi kelias</span>
          <h1 className="topbar-title">{getPageTitle()}</h1>
        </div>
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
