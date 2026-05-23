import React, { useState, useMemo, useEffect } from 'react';
import { State, Topic } from '../types';
import { topics, exercises } from '../content';
import {
  bandForGrade,
  GRADE_BANDS,
  inferStartMode,
  DISCIPLINES
} from '../startModes';

interface TopicLibraryProps {
  state: State;
  mode: 'theory' | 'practice';
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
}

export const TopicLibrary: React.FC<TopicLibraryProps> = ({ state, mode, navigate, updateState }) => {
  const startMode = inferStartMode(state.profile);
  const [contentToggle, setContentToggle] = useState<'school' | 'olympiad'>(
    state.profile.libraryToggle || (startMode === 'olympiad' ? 'olympiad' : 'school')
  );

  const handleToggle = (val: 'school' | 'olympiad') => {
    setContentToggle(val);
    updateState(prev => ({
      ...prev,
      profile: { ...prev.profile, libraryToggle: val }
    }));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>(state.profile.gradeBand || '9-10');
  const [disciplineFilter, setDisciplineFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);

  const [tempGradeFilter, setTempGradeFilter] = useState(state.profile.gradeBand || '9-10');
  const [tempDisciplineFilter, setTempDisciplineFilter] = useState('all');
  const [tempDifficultyFilter, setTempDifficultyFilter] = useState('all');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openFilters = () => {
    setTempGradeFilter(gradeFilter);
    setTempDisciplineFilter(disciplineFilter);
    setTempDifficultyFilter(difficultyFilter);
    setIsFilterSheetOpen(true);
  };

  const applyFilters = () => {
    setGradeFilter(tempGradeFilter);
    setDisciplineFilter(tempDisciplineFilter);
    setDifficultyFilter(tempDifficultyFilter);
    setIsFilterSheetOpen(false);
  };

  const clearFilters = () => {
    setGradeFilter('all');
    setDisciplineFilter('all');
    setDifficultyFilter('all');
    setTempGradeFilter('all');
    setTempDisciplineFilter('all');
    setTempDifficultyFilter('all');
    setIsFilterSheetOpen(false);
  };

  const hasActiveFilters = gradeFilter !== 'all' || disciplineFilter !== 'all' || difficultyFilter !== 'all';

  const allTopics = useMemo(() => Object.values(topics), []);

  const filteredTopics = useMemo(() => {
    return allTopics.filter((topic) => {
      const isOlympiadTopic = topic.level === 'olympiad';
      
      let matchesToggle = false;
      if (contentToggle === 'olympiad') {
        if (mode === 'practice') {
          const hasOlympiadExercises = exercises.some(ex => ex.topicId === topic.id && ex.level === 'olympiad');
          matchesToggle = isOlympiadTopic || hasOlympiadExercises;
        } else {
          matchesToggle = isOlympiadTopic;
        }
      } else {
        matchesToggle = !isOlympiadTopic;
      }
      if (!matchesToggle) return false;

      const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.sections.some(s => s.body.some(b => b.toLowerCase().includes(searchTerm.toLowerCase())));
      if (!matchesSearch) return false;

      if (gradeFilter !== 'all' && bandForGrade(topic.grade) !== gradeFilter) return false;
      if (disciplineFilter !== 'all' && topic.strand !== disciplineFilter) return false;

      if (contentToggle === 'olympiad' && difficultyFilter !== 'all') {
        const topicExercises = exercises.filter(ex => ex.topicId === topic.id && ex.level === 'olympiad');
        const hasMatchingDifficulty = topicExercises.some(ex => ex.olympiadTier === difficultyFilter);
        if (!hasMatchingDifficulty) return false;
      }

      return true;
    });
  }, [allTopics, contentToggle, mode, searchTerm, gradeFilter, disciplineFilter, difficultyFilter]);

  const recommendations = useMemo(() => {
    const diagnosticRecs = (state.diagnosticState?.recommendedLearningPath || [])
      .filter(node => node.kind === 'topic')
      .map(node => node.targetId);
    
    const relevant = state.profile.relevantTopicIds || [];
    const active = state.activeTopicId;
    const target = state.profile.targetTopicId;

    const lowMastery = Object.entries(state.mastery || {})
      .filter(([_, m]) => m.value < 40)
      .map(([id]) => id);

    const seen = new Set<string>();
    const recs: string[] = [];

    const add = (ids: string[]) => {
      for (const id of ids) {
        if (id && topics[id] && !seen.has(id)) {
          recs.push(id);
          seen.add(id);
        }
      }
    };

    add(diagnosticRecs);
    add(relevant);
    if (target) add([target]);
    if (active) add([active]);
    add(lowMastery);

    return recs.filter(id => filteredTopics.some(t => t.id === id)).map(id => topics[id]);
  }, [state, filteredTopics]);

  const recommendedIds = new Set(recommendations.map(t => t.id));
  const otherTopics = filteredTopics.filter(t => !recommendedIds.has(t.id));

  return (
    <div className="topic-library">
      <header className="library-header panel">
        <div className="library-controls">
          <div className="toggle-group">
            <button 
              className={contentToggle === 'school' ? 'active' : ''} 
              onClick={() => handleToggle('school')}
            >
              Mokyklinis
            </button>
            <button 
              className={contentToggle === 'olympiad' ? 'active' : ''} 
              onClick={() => handleToggle('olympiad')}
            >
              Olimpiadinis
            </button>
          </div>

          <div className="search-and-filter-row" style={{ display: 'flex', gap: '10px', width: '100%', flexWrap: 'wrap' }}>
            <div className="search-box" style={{ flex: 1, minWidth: '200px' }}>
              <input 
                id="topic-search"
                name="topic-search"
                type="text" 
                placeholder="Ieškoti temos..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {isMobile ? (
              <button 
                type="button" 
                className={`filter-trigger-btn ${hasActiveFilters ? 'has-active' : ''}`}
                onClick={openFilters}
              >
                Filtrai {hasActiveFilters ? '•' : ''}
              </button>
            ) : (
              <div className="filters">
                <select value={gradeFilter} onChange={(e) => setGradeFilter(e.target.value)}>
                  <option value="all">Visos klasės</option>
                  {GRADE_BANDS.map(band => (
                    <option key={band.value} value={band.value}>{band.label}</option>
                  ))}
                </select>

                <select value={disciplineFilter} onChange={(e) => setDisciplineFilter(e.target.value)}>
                  <option value="all">Visos sritys</option>
                  {DISCIPLINES.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>

                {contentToggle === 'olympiad' && (
                  <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)}>
                    <option value="all">Visi lygiai</option>
                    <option value="introductory">Įvadinis</option>
                    <option value="standard">Standartinis</option>
                    <option value="advanced">Sudėtingas</option>
                    <option value="selection">Atrankinis</option>
                  </select>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {isMobile && isFilterSheetOpen && (
        <div className="mobile-filter-backdrop" onClick={() => setIsFilterSheetOpen(false)} />
      )}

      {isMobile && (
        <div className={`mobile-filter-sheet ${isFilterSheetOpen ? 'open' : ''}`}>
          <div className="mobile-filter-sheet-header">
            <h3>Filtruoti temas</h3>
            <button className="close-btn" onClick={() => setIsFilterSheetOpen(false)}>×</button>
          </div>
          <div className="mobile-filter-sheet-body">
            <label>
              Klasė / Pakopa
              <select value={tempGradeFilter} onChange={(e) => setTempGradeFilter(e.target.value)}>
                <option value="all">Visos klasės</option>
                {GRADE_BANDS.map(band => (
                  <option key={band.value} value={band.value}>{band.label}</option>
                ))}
              </select>
            </label>

            <label>
              Sritis
              <select value={tempDisciplineFilter} onChange={(e) => setTempDisciplineFilter(e.target.value)}>
                <option value="all">Visos sritys</option>
                {DISCIPLINES.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </label>

            {contentToggle === 'olympiad' && (
              <label>
                Sunkumo lygis
                <select value={tempDifficultyFilter} onChange={(e) => setTempDifficultyFilter(e.target.value)}>
                  <option value="all">Visi lygiai</option>
                  <option value="introductory">Įvadinis</option>
                  <option value="standard">Standartinis</option>
                  <option value="advanced">Sudėtingas</option>
                  <option value="selection">Atrankinis</option>
                </select>
              </label>
            )}
          </div>
          <div className="mobile-filter-sheet-footer">
            <button className="clear-btn" onClick={clearFilters}>Išvalyti</button>
            <button className="apply-btn primary" onClick={applyFilters}>Taikyti</button>
          </div>
        </div>
      )}

      <main className="library-content">
        {recommendations.length > 0 && (
          <section className="library-section">
            <h2 className="section-title">Rekomenduojama</h2>
            <div className="topic-grid">
              {recommendations.map(topic => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  state={state} 
                  mode={mode} 
                  contentToggle={contentToggle}
                  navigate={navigate} 
                  updateState={updateState}
                />
              ))}
            </div>
          </section>
        )}

        <section className="library-section">
          <h2 className="section-title">Visos temos</h2>
          {otherTopics.length > 0 ? (
            <div className="topic-grid">
              {otherTopics.map(topic => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  state={state} 
                  mode={mode} 
                  contentToggle={contentToggle}
                  navigate={navigate} 
                  updateState={updateState}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state panel">
              {searchTerm || gradeFilter !== 'all' || disciplineFilter !== 'all' || difficultyFilter !== 'all' 
                ? <p>Pagal šiuos filtrus temų nerasta.</p>
                : <p>Šioje kategorijoje temų dar nėra.</p>
              }
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

const TopicCard: React.FC<{ 
  topic: Topic; 
  state: State; 
  mode: 'theory' | 'practice'; 
  contentToggle: 'school' | 'olympiad';
  navigate: (page: string, id?: string) => void;
  updateState: (updater: (prev: State) => State) => void;
}> = ({ topic, state, mode, contentToggle, navigate, updateState }) => {
  const mastery = state.mastery[topic.id];
  const isOlympiadMode = contentToggle === 'olympiad';
  const val = isOlympiadMode ? (mastery?.olympiadValue ?? 0) : (mastery?.value || 0);
  const label = isOlympiadMode 
    ? (val < 25 ? "Pradžia" : val < 50 ? "Įsibėgėja" : val < 75 ? "Stipru" : "Meistras") 
    : (mastery?.label || "Pradžia");
  
  const description = topic.sections[0]?.body[0]?.slice(0, 120) + '...';

  return (
    <article className="topic-card library-card" onClick={() => {
      updateState(prev => ({
        ...prev,
        profile: { ...prev.profile, libraryToggle: contentToggle }
      }));
      navigate(mode === 'theory' ? 'topic' : 'practice', topic.id);
    }}>
      <div className="topic-card-header">
        <div className="progress-ring" style={{ '--p': val } as React.CSSProperties}>{val}%</div>
        <div className="topic-badges">
          <span className="badge grade">{topic.grade} kl.</span>
          <span className="badge strand">{topic.strand}</span>
        </div>
      </div>
      <div className="topic-card-body">
        <h3>{topic.title}</h3>
        <p className="topic-desc">{description}</p>
        <div className="topic-card-footer">
          <span className="mastery-label">{label}</span>
          <button className="primary-sm">
            {mode === 'theory' ? 'Skaityti' : 'Spręsti'}
          </button>
        </div>
      </div>
    </article>
  );
};
