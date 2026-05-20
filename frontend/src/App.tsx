import React, { useState, useEffect } from 'react';
import { State, Profile } from './types';
import { loadState, saveState, resetState } from './storage';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Onboarding } from './components/Onboarding';
import { Dashboard } from './components/Dashboard';
import { GradeFocus } from './components/GradeFocus';
import { TopicView } from './components/TopicView';
import { SrsReview } from './components/SrsReview';
import { Practice } from './components/Practice';
import { Tests } from './components/Tests';
import { Glossary } from './components/Glossary';
import { Settings } from './components/Settings';
import { Diagnostic } from './components/Diagnostic';

export const App: React.FC = () => {
  const [state, setState] = useState<State | null>(null);
  const [route, setRoute] = useState<{ page: string; id?: string }>({ page: 'dashboard' });
  const [toasts, setToasts] = useState<Array<{ id: string; message: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load state on mount
  useEffect(() => {
    const init = async () => {
      try {
        const loaded = await loadState();
        setState(loaded);
        if (!loaded.profile.onboarded) {
          setRoute({ page: 'onboarding' });
        }
      } catch (err) {
        console.error("Failed to load initial state", err);
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  const updateState = (updater: (prev: State) => State) => {
    setState((prev) => {
      if (!prev) return prev;
      const next = updater(prev);
      // Run async save
      saveState(next).catch((err) => console.error("Database save failed", err));
      return next;
    });
  };

  const navigate = (page: string, id?: string) => {
    setRoute({ page, id });
    if (state && page !== 'onboarding' && id && page === 'topic') {
      // Keep track of active topic
      updateState((prev) => ({
        ...prev,
        activeTopicId: id
      }));
    }
  };

  const showToast = (message: string) => {
    const id = Math.random().toString();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleOnboardingComplete = (profile: Partial<Profile>, startingTopicId: string, destination = 'dashboard') => {
    updateState((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        ...profile,
        onboarded: true
      },
      activeTopicId: startingTopicId
    }));
    navigate(destination);
  };

  const handleReset = async () => {
    const fresh = await resetState();
    setState(fresh);
    navigate('onboarding');
  };

  if (isLoading || !state) {
    return (
      <div className="app-loader">
        <span className="loader-mark">∑</span>
        <p>Kraunamas matematikos kelias...</p>
      </div>
    );
  }

  // Onboarding full screen view
  if (route.page === 'onboarding') {
    return (
      <>
        <Onboarding onComplete={handleOnboardingComplete} />
        <div className="toast-region">
          {toasts.map((t) => (
            <div key={t.id} className="toast">{t.message}</div>
          ))}
        </div>
      </>
    );
  }

  const renderActiveView = () => {
    switch (route.page) {
      case 'dashboard':
        return <Dashboard state={state} navigate={navigate} />;
      case 'diagnostic':
        return (
          <Diagnostic
            state={state}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'grade':
        return <GradeFocus state={state} navigate={navigate} />;
      case 'topic':
        return (
          <TopicView
            state={state}
            topicId={route.id || state.activeTopicId}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'srs':
        return (
          <SrsReview
            state={state}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'practice':
        return (
          <Practice
            state={state}
            topicId={route.id || state.activeTopicId}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'tests':
        return (
          <Tests
            state={state}
            topicId={route.id || state.activeTopicId}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'glossary':
        return (
          <Glossary
            state={state}
            selectedId={route.id}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'settings':
        return (
          <Settings
            state={state}
            navigate={navigate}
            updateState={updateState}
            onReset={handleReset}
            showToast={showToast}
          />
        );
      default:
        return <Dashboard state={state} navigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        state={state}
        currentPage={route.page}
        navigate={navigate}
      />
      <main className="main">
        <Topbar
          state={state}
          currentPage={route.page}
          currentId={route.id}
          navigate={navigate}
        />
        <section className="view">
          {renderActiveView()}
        </section>
      </main>
      <div className="toast-region">
        {toasts.map((t) => (
          <div key={t.id} className="toast">{t.message}</div>
        ))}
      </div>
    </div>
  );
};
