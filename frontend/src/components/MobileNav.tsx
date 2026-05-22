import React, { useState } from 'react';
import { topics } from '../content';

interface MobileNavProps {
  currentPage: string;
  currentId?: string;
  navigate: (page: string, id?: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentPage,
  currentId,
  navigate
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNav = (page: string, id?: string) => {
    setIsSheetOpen(false);
    navigate(page, id);
  };

  const olympiadTopics = Object.values(topics)
    .filter((topic) => topic.level === 'olympiad')
    .sort((a, b) => a.grade - b.grade);

  const mainNavItems = [
    { page: 'dashboard', label: 'Apžvalga', icon: '⧉' },
    { page: 'theory', label: 'Teorija', icon: '📚' },
    { page: 'practice', label: 'Praktika', icon: '✍' },
    { page: 'srs', label: 'SRS', icon: '⏰' },
  ];

  const sheetNavItems = [
    { page: 'diagnostic', label: 'Diagnostika', icon: '⌁' },
    { page: 'tests', label: 'Testai', icon: '📝' },
    { page: 'glossary', label: 'Žodynas', icon: '📖' },
    { page: 'settings', label: 'Nustatymai', icon: '⚙' },
  ];

  return (
    <>
      <div className="mobile-bottom-nav">
        {mainNavItems.map(({ page, label, icon }) => {
          const isTheoryActive = page === 'theory' && (currentPage === 'theory' || currentPage === 'topic');
          const isPracticeActive = page === 'practice' && currentPage === 'practice';
          const active = currentPage === page || (page === 'dashboard' && currentPage === 'grade') || isTheoryActive || isPracticeActive;
          return (
            <button
              key={page}
              className={`mobile-nav-item ${active ? 'active' : ''}`}
              onClick={() => handleNav(page)}
            >
              <span className="mobile-nav-icon">{icon}</span>
              <span className="mobile-nav-label">{label}</span>
            </button>
          );
        })}
        <button
          className={`mobile-nav-item ${isSheetOpen ? 'active' : ''}`}
          onClick={() => setIsSheetOpen(!isSheetOpen)}
        >
          <span className="mobile-nav-icon">⋯</span>
          <span className="mobile-nav-label">Daugiau</span>
        </button>
      </div>

      {isSheetOpen && (
        <div
          className="mobile-bottom-sheet-backdrop"
          onClick={() => setIsSheetOpen(false)}
        />
      )}

      <div className={`mobile-bottom-sheet ${isSheetOpen ? 'open' : ''}`}>
        <div className="mobile-bottom-sheet-handle" onClick={() => setIsSheetOpen(false)}></div>
        <div className="mobile-bottom-sheet-content">
          <div className="mobile-sheet-grid">
            {sheetNavItems.map(({ page, label, icon }) => {
              const active = currentPage === page;
              return (
                <button
                  key={page}
                  className={`mobile-sheet-item ${active ? 'active' : ''}`}
                  onClick={() => handleNav(page)}
                >
                  <span className="mobile-sheet-icon">{icon}</span>
                  <span className="mobile-sheet-label">{label}</span>
                </button>
              );
            })}
          </div>

          {olympiadTopics.length > 0 && (
            <div className="mobile-sheet-olympiad">
              <span className="eyebrow">Olimpiada</span>
              <div className="mobile-olympiad-grade-grid">
                {olympiadTopics.map((topic) => {
                  const isActive = currentPage === 'practice' && currentId === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      className={`mobile-olympiad-grade-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleNav('practice', topic.id)}
                    >
                      <span className="grade-num">{topic.grade} kl.</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
