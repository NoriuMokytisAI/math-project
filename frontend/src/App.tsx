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
import { TopicLibrary } from './components/TopicLibrary';
import { topics, concepts } from './content';

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

  // Update page title and meta description dynamically
  useEffect(() => {
    let title = "NoriuMokytis.lt — Interaktyvus Matematikos Mokymasis";
    let desc = "Nemokama interaktyvi matematikos mokymosi platforma 5–12 klasių Lietuvos moksleiviams. Individualūs mokymosi keliai, diagnostika, teorija, pratimai su sprendimais ir olimpiadiniai uždaviniai.";

    switch (route.page) {
      case 'dashboard':
        title = "Mokymosi skydelis — NoriuMokytis.lt";
        desc = "Peržiūrėkite savo matematikos pažangą, rekomenduojamas temas, sprendžiamus uždavinius ir pasiekimus.";
        break;
      case 'onboarding':
        title = "Pradėti mokymąsi — NoriuMokytis.lt";
        desc = "Pasirinkite savo mokymosi tikslą: sustiprinti matematiką olimpiadoms, pasiruošti kontroliniam ar egzaminui (PUPP/VBE) arba pradėti pilną diagnostinį testą.";
        break;
      case 'diagnostic':
        title = "Diagnostinis testas — NoriuMokytis.lt";
        desc = "Atlikite matematikos diagnostinį testą savo žinių spragoms nustatyti ir gauti individualų mokymosi planą.";
        break;
      case 'grade':
        title = "Klasės pasirinkimas — NoriuMokytis.lt";
        desc = "Pasirinkite matematikos kursą pagal klases ir ugdymo programą.";
        break;
      case 'theory':
      case 'topic': {
        const activeId = route.id || (state ? state.activeTopicId : null);
        const topic = activeId ? topics[activeId] : null;
        if (topic) {
          title = `${topic.title} - Teorija ir pavyzdžiai — NoriuMokytis.lt`;
          desc = `Skaitykite temos „${topic.title}“ apibrėžimus, teoriją, sprendimo pavyzdžius ir dažniausiai daromas klaidas.`;
        } else {
          title = "Matematikos teorija — NoriuMokytis.lt";
          desc = "Skaitykite matematikos teoriją, pavyzdžius ir taisyklingus apibrėžimus.";
        }
        break;
      }
      case 'practice': {
        const activeId = route.id || (state ? state.activeTopicId : null);
        const topic = activeId ? topics[activeId] : null;
        if (topic) {
          title = `${topic.title} - Praktinės užduotys — NoriuMokytis.lt`;
          desc = `Spręskite temos „${topic.title}“ uždavinius interaktyviai su patarimais ir išsamiais sprendimais.`;
        } else {
          title = "Matematikos praktika — NoriuMokytis.lt";
          desc = "Spręskite uždavinius interaktyviai ir gaukite sprendimo užuominas bei išsamius atsakymus.";
        }
        break;
      }
      case 'tests': {
        const activeId = route.id || (state ? state.activeTopicId : null);
        const topic = activeId ? topics[activeId] : null;
        if (topic) {
          title = `${topic.title} - Temos testas — NoriuMokytis.lt`;
          desc = `Pasitikrinkite žinias atlikdami temos „${topic.title}“ testą ir padidinkite savo temos meistriškumą.`;
        } else {
          title = "Temos testas — NoriuMokytis.lt";
          desc = "Pasitikrinkite žinias atlikdami temos testą ir padidinkite savo meistriškumo lygį.";
        }
        break;
      }
      case 'srs':
        title = "Intervalinis pasikartojimas (SRS) — NoriuMokytis.lt";
        desc = "Kartokitės išmoktas sąvokas ir formules naudodami intervalinio kartojimo sistemą (SRS), kad ilgam prisimintumėte matematikos taisykles.";
        break;
      case 'glossary': {
        const concept = route.id ? concepts[route.id] : null;
        if (concept) {
          title = `${concept.title} - Matematikos žodynas — NoriuMokytis.lt`;
          desc = `Sąvokos „${concept.title}“ apibrėžimas, intuityvus paaiškinimas, susijusios formulės ir klaidos.`;
        } else {
          title = "Matematikos žodynas — NoriuMokytis.lt";
          desc = "Visi svarbiausi matematikos terminai, apibrėžimai ir formulės vienoje vietoje.";
        }
        break;
      }
      case 'settings':
        title = "Nustatymai — NoriuMokytis.lt";
        desc = "Valdykite savo profilio nustatymus, tikslus, eksportuokite arba importuokite mokymosi pažangą.";
        break;
    }

    document.title = title;

    // Dinamiškai atnaujiname meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.getElementsByTagName('head')[0].appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);
  }, [route.page, route.id, state?.activeTopicId]);

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
    if (state && page !== 'onboarding' && id && (page === 'topic' || page === 'theory' || page === 'practice')) {
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
        return <Dashboard state={state} navigate={navigate} updateState={updateState} />;
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
        return <GradeFocus state={state} navigate={navigate} updateState={updateState} />;
      case 'theory':
        if (!route.id) return <TopicLibrary state={state} mode="theory" navigate={navigate} updateState={updateState} />;
        return (
          <TopicView
            state={state}
            topicId={route.id}
            navigate={navigate}
            updateState={updateState}
            showToast={showToast}
          />
        );
      case 'topic':
        return (
          <TopicView
            state={state}
            topicId={route.id}
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
        if (!route.id) return <TopicLibrary state={state} mode="practice" navigate={navigate} updateState={updateState} />;
        return (
          <Practice
            state={state}
            topicId={route.id}
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
        return <Dashboard state={state} navigate={navigate} updateState={updateState} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        state={state}
        currentPage={route.page}
        currentId={route.id}
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
