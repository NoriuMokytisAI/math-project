import React, { useMemo, useState } from 'react';
import { PreparationType, Profile, StartMode, TargetedStartChoice } from '../types';
import {
  defaultGradeBandForPreparation,
  firstTopicForBand,
  firstTopicForProfile,
  formatGradeBand,
  GRADE_BANDS,
  gradesForBand,
  PREPARATION_LABELS,
  START_MODE_LABELS,
  topicsForBand,
  topicsForExam
} from '../startModes';
import { topics } from '../content';

interface OnboardingProps {
  onComplete: (profile: Partial<Profile>, startingTopicId: string, destination?: string) => void;
}

type StepType =
  | 'welcome'
  | 'goal'
  | 'gradeBand'
  | 'preparationType'
  | 'targetedStart'
  | 'topic'
  | 'minutes'
  | 'modeExplanation'
  | 'appExplanation'
  | 'finalExplanation';

interface Draft {
  startMode: StartMode;
  goal: string;
  preparationType?: PreparationType;
  targetedStartChoice: TargetedStartChoice;
  gradeBand: string;
  targetTopicId: string;
  dailyMinutes: number;
}

const GOAL_OPTIONS: Array<{
  mode: StartMode;
  label: string;
  impact: string;
}> = [
  {
    mode: 'olympiad',
    label: 'Noriu sustiprinti matematiką',
    impact: 'Pagrindinis ekranas pradės nuo olimpiadinio stiprinimo: sunkesni uždaviniai, platesnės temos ir laisvas priėjimas prie aukštesnių pakopų.'
  },
  {
    mode: 'targeted',
    label: 'Ruošiuosi kontroliniui arba egzaminui',
    impact: 'Pagrindinis ekranas bus sutelktas į pasirinktą kontrolinio, PUPP arba VBE kelią: tema, testai, klaidų taisymas ir aiškus artimiausias žingsnis.'
  },
  {
    mode: 'full-course',
    label: 'Nežinau nuo ko pradėti',
    impact: 'Programa rekomenduos pradėti nuo pilnos diagnostikos, kuri automatiškai sudarys mokymosi planą iš tavo spragų ir stiprių vietų.'
  }
];

const MINUTE_CHOICES = [
  { label: '10 min.', value: 10 },
  { label: '15 min.', value: 15 },
  { label: '20 min.', value: 20 },
  { label: '30 min.', value: 30 },
  { label: '45 min.', value: 45 },
  { label: '1 val. +', value: 60 }
];

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [draft, setDraft] = useState<Draft>({
    startMode: 'full-course',
    goal: GOAL_OPTIONS[2].label,
    preparationType: undefined,
    targetedStartChoice: 'diagnostic',
    gradeBand: '9-10',
    targetTopicId: '',
    dailyMinutes: 20
  });

  const steps = useMemo<StepType[]>(() => {
    const flow: StepType[] = ['welcome', 'goal'];
    if (draft.startMode === 'olympiad') {
      flow.push('gradeBand');
    }
    if (draft.startMode === 'targeted') {
      flow.push('preparationType');
      if (draft.preparationType === 'pupp' || draft.preparationType === 'vbe') {
        flow.push('targetedStart');
      }
      if (draft.preparationType === 'control' || draft.targetedStartChoice === 'topic') {
        flow.push('topic');
      }
    }
    flow.push('minutes', 'modeExplanation', 'appExplanation', 'finalExplanation');
    return flow;
  }, [draft.startMode, draft.preparationType, draft.targetedStartChoice]);

  const safeStepIndex = Math.min(stepIndex, steps.length - 1);
  const currentStep = steps[safeStepIndex];
  const progress = Math.round(((safeStepIndex + 1) / steps.length) * 100);
  const isLast = safeStepIndex === steps.length - 1;

  const selectedTopicId = draft.targetTopicId || firstTopicForProfile(draft);
  const selectedTopic = topics[selectedTopicId];
  const requiresDiagnostic = draft.startMode === 'full-course' ||
    (draft.startMode === 'targeted' && draft.targetedStartChoice === 'diagnostic');

  const complete = () => {
    const topicId = selectedTopicId || firstTopicForBand(draft.gradeBand);
    const topic = topics[topicId];
    const gradeBand = draft.startMode === 'targeted' && draft.preparationType
      ? defaultGradeBandForPreparation(draft.preparationType)
      : draft.gradeBand;

    onComplete({
      onboarded: true,
      goal: draft.goal,
      startMode: draft.startMode,
      preparationType: draft.startMode === 'targeted' ? draft.preparationType : undefined,
      targetedStartChoice: draft.startMode === 'targeted' ? draft.targetedStartChoice : undefined,
      targetTopicId: topicId,
      grade: topic?.grade || gradesForBand(gradeBand)[0] || 9,
      gradeBand,
      confidence: 'Nežinoma',
      dailyMinutes: draft.dailyMinutes,
      olympiad: draft.startMode === 'olympiad',
      diagnostic: requiresDiagnostic
    }, topicId, 'dashboard');
  };

  const handleNext = () => {
    if (isLast) {
      complete();
      return;
    }
    setStepIndex((idx) => Math.min(idx + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStepIndex((idx) => Math.max(0, idx - 1));
  };

  const updateDraft = (patch: Partial<Draft>) => {
    setDraft((prev) => {
      const next = { ...prev, ...patch };
      if (patch.startMode) {
        const option = GOAL_OPTIONS.find((item) => item.mode === patch.startMode)!;
        next.goal = option.label;
        next.targetTopicId = '';
        if (patch.startMode === 'targeted') {
          next.preparationType = next.preparationType || 'control';
          next.targetedStartChoice = next.preparationType === 'control' ? 'topic' : 'diagnostic';
        } else {
          next.preparationType = undefined;
          next.targetedStartChoice = 'diagnostic';
        }
      }
      if (patch.preparationType) {
        next.gradeBand = defaultGradeBandForPreparation(patch.preparationType);
        next.targetedStartChoice = patch.preparationType === 'control' ? 'topic' : 'diagnostic';
        next.targetTopicId = '';
      }
      if (patch.gradeBand) {
        next.targetTopicId = firstTopicForBand(patch.gradeBand);
      }
      if (patch.targetedStartChoice) {
        next.targetTopicId = patch.targetedStartChoice === 'topic'
          ? (next.targetTopicId || firstTopicForProfile(next))
          : '';
      }
      return next;
    });
  };

  const stepCopy = getStepCopy(currentStep, draft, selectedTopic?.title);
  const canContinue = currentStep !== 'topic' || Boolean(selectedTopicId);

  return (
    <main className={`onboarding-full ${isExplanationStep(currentStep) ? 'explain-mode' : ''}`}>
      <section className="onboarding-card">
        <div className="onboarding-progress" aria-label="Onboarding progresas">
          <span style={{ width: `${progress}%` }}></span>
        </div>
        <div className="onboarding-content">
          <span className="eyebrow">{stepCopy.kicker}</span>
          <h1>{stepCopy.title}</h1>
          <p className="onboarding-description">{stepCopy.body}</p>
          {renderStep()}
          <div className="onboarding-actions">
            <button type="button" onClick={handleBack} disabled={safeStepIndex === 0}>
              Atgal
            </button>
            <button type="button" className="primary" onClick={handleNext} disabled={!canContinue}>
              {isLast ? 'Pradėti' : isExplanationStep(currentStep) ? 'Supratau' : 'Toliau'}
            </button>
          </div>
        </div>
      </section>

      <aside className="onboarding-preview">
        <div className="brand onboarding-brand">
          <span className="brand-mark">∑</span>
          <span>
            <strong>NoriuMokyti.lt</strong>
            <small>Offline matematikos kelias</small>
          </span>
        </div>
        <div className="preview-card">
          <strong>{START_MODE_LABELS[draft.startMode]}</strong>
          <small>Pradžios režimas</small>
        </div>
        <div className="preview-card">
          <strong>{modeSummary(draft)}</strong>
          <small>Kas pasikeis</small>
        </div>
        <div className="preview-card">
          <strong>{selectedTopic?.title || 'Parinks diagnostika'}</strong>
          <small>Dabartinis startas</small>
        </div>
        <div className="preview-card">
          <strong>{draft.dailyMinutes} min.</strong>
          <small>Dienos planas</small>
        </div>
      </aside>
    </main>
  );

  function renderStep() {
    if (currentStep === 'welcome') {
      return (
        <div className="explain-grid">
          <article><strong>1</strong><span>Pasirinksi mokymosi situaciją.</span></article>
          <article><strong>2</strong><span>Matysi, ką tas pasirinkimas keičia pagrindiniame ekrane.</span></article>
          <article><strong>3</strong><span>Režimą vėliau galėsi pakeisti nustatymuose neprarasdamas progreso.</span></article>
        </div>
      );
    }

    if (currentStep === 'goal') {
      return (
        <div className="onboarding-choices mode-choices">
          {GOAL_OPTIONS.map((option) => (
            <button
              key={option.mode}
              type="button"
              className={draft.startMode === option.mode ? 'selected' : ''}
              onClick={() => updateDraft({ startMode: option.mode })}
            >
              <strong>{option.label}</strong>
              <small>{option.impact}</small>
            </button>
          ))}
        </div>
      );
    }

    if (currentStep === 'gradeBand') {
      return (
        <div className="onboarding-choices">
          {GRADE_BANDS.map((band) => (
            <button
              key={band.value}
              type="button"
              className={draft.gradeBand === band.value ? 'selected' : ''}
              onClick={() => updateDraft({ gradeBand: band.value })}
            >
              <strong>{band.label}</strong>
              <small>Pradinis sunkumo lygis. Aukštesnės pakopos liks pasiekiamos.</small>
            </button>
          ))}
        </div>
      );
    }

    if (currentStep === 'preparationType') {
      return (
        <div className="onboarding-choices">
          {(['control', 'pupp', 'vbe'] as PreparationType[]).map((type) => (
            <button
              key={type}
              type="button"
              className={draft.preparationType === type ? 'selected' : ''}
              onClick={() => updateDraft({ preparationType: type })}
            >
              <strong>{PREPARATION_LABELS[type]}</strong>
              <small>{preparationImpact(type)}</small>
            </button>
          ))}
        </div>
      );
    }

    if (currentStep === 'targetedStart') {
      return (
        <div className="onboarding-choices">
          <button
            type="button"
            className={draft.targetedStartChoice === 'diagnostic' ? 'selected' : ''}
            onClick={() => updateDraft({ targetedStartChoice: 'diagnostic' })}
          >
            <strong>Rekomenduojama diagnostika</strong>
            <small>Ilgesnis kelias, bet PUPP/VBE pasiruošimas remsis realiomis spragomis.</small>
          </button>
          <button
            type="button"
            className={draft.targetedStartChoice === 'topic' ? 'selected' : ''}
            onClick={() => updateDraft({ targetedStartChoice: 'topic' })}
          >
            <strong>Pasirinkti konkrečią temą</strong>
            <small>Greitesnis startas, kai jau žinai, ką nori kartoti pirmiausia.</small>
          </button>
        </div>
      );
    }

    if (currentStep === 'topic') {
      const available = draft.preparationType
        ? topicsForExam(draft.preparationType)
        : topicsForBand(draft.gradeBand);
      return (
        <div className="topic-picker-shell">
          <div className="topic-picker-meta">
            <span>{available.length} temos</span>
            {draft.preparationType && <span>{PREPARATION_LABELS[draft.preparationType]}</span>}
          </div>
          <div className="onboarding-choices topic-choices">
            {available.map((topic) => (
              <button
                key={topic.id}
                type="button"
                className={selectedTopicId === topic.id ? 'selected' : ''}
                onClick={() => updateDraft({ targetTopicId: topic.id })}
              >
                <strong>{topic.title}</strong>
                <small>{topic.strand}</small>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (currentStep === 'minutes') {
      return (
        <div className="onboarding-choices minutes-choices">
          {MINUTE_CHOICES.map((choice) => (
            <button
              key={choice.value}
              type="button"
              className={draft.dailyMinutes === choice.value ? 'selected' : ''}
              onClick={() => updateDraft({ dailyMinutes: choice.value })}
            >
              {choice.label}
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="explain-grid">
        {explanationCards(currentStep, draft).map(([title, text]) => (
          <article key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </article>
        ))}
      </div>
    );
  }
};

function getStepCopy(step: StepType, draft: Draft, topicTitle?: string) {
  const mode = START_MODE_LABELS[draft.startMode];
  const topic = topicTitle || 'pasirinkta tema';
  const copy: Record<StepType, { kicker: string; title: string; body: string }> = {
    welcome: {
      kicker: 'Sveikas',
      title: 'Pirmiausia parinksime tau tinkamą startą.',
      body: 'Programa turi tą patį branduolį visiems: teoriją, sąvokų žodyną, SRS kartojimą, praktiką, testus ir diagnostiką. Skiriasi tik tai, nuo ko pradėsi ir ką pagrindinis ekranas siūlys pirmiausia.'
    },
    goal: {
      kicker: 'Tikslas',
      title: 'Kokia tavo situacija šiandien?',
      body: 'Šis pasirinkimas pakeis pradžios kelią ir pagrindinį ekraną, bet nėra visam laikui. Vėliau režimą galėsi pakeisti nustatymuose, o išspręsti uždaviniai, SRS kortelės ir diagnostikos rezultatai liks.'
    },
    gradeBand: {
      kicker: 'Pradinis lygis',
      title: 'Nuo kurios pakopos pradėti olimpiadinį stiprinimą?',
      body: 'Tai tik pradinis sunkumo ir rekomendacijų lygis. Jei esi aukščiau savo klasės, galėsi laisvai eiti į aukštesnes temas ir spręsti sunkesnius uždavinius.'
    },
    preparationType: {
      kicker: 'Pasiruošimas',
      title: 'Kam ruošiesi?',
      body: 'Kontrolinis veda tiesiai į pasirinktą temą. PUPP ir VBE keliuose diagnostika yra rekomenduojamas pagrindinis startas, nes egzaminams svarbu rasti spragas, ne tik kartoti pažįstamas temas.'
    },
    targetedStart: {
      kicker: 'Starto būdas',
      title: 'Kaip nori pradėti pasiruošimą?',
      body: 'Diagnostika sudarys tikslesnį planą, bet jei jau žinai silpną temą, gali pradėti nuo jos. Abu keliai vėliau leidžia pereiti į diagnostiką, testus ir kitas temas.'
    },
    topic: {
      kicker: 'Tema',
      title: 'Kurią temą nori tvarkyti pirmiausia?',
      body: 'Pagrindinis ekranas rodys šią temą kaip pirmą darbą: teoriją, pavyzdžius, praktiką ir testą. Temos pavadinimai nėra pririšami prie vienos klasės, nes programa seka oficialias pakopas.'
    },
    minutes: {
      kicker: 'Tempas',
      title: 'Kiek minučių realiai skirsi per dieną?',
      body: 'Tai minutės per dieną. Pasirinkimas naudojamas dienos plano dydžiui: kiek teorijos, SRS ir uždavinių siūlyti vienam prisėdimui. Geriau mažiau, bet stabiliai.'
    },
    modeExplanation: {
      kicker: 'Tavo startas',
      title: `Pasirinkai: ${mode}.`,
      body: modeExplanation(draft, topic)
    },
    appExplanation: {
      kicker: 'Kaip naudotis',
      title: 'Temoje mokykis tokia tvarka: teorija, sąvokos, pavyzdžiai, praktika.',
      body: 'Spaudžiamos sąvokos atidaro žodyną. Po teorijos spręsk praktiką, prašyk užuominų tik kai reikia, o SRS korteles kartok tada, kai programa jas parodo.'
    },
    finalExplanation: {
      kicker: 'Svarbu',
      title: 'Režimas keičia pradžią, ne užrakina programą.',
      body: 'Visada galėsi atsidaryti diagnostiką, bet kurią temą, SRS, testus ir nustatymus. Visi duomenys saugomi šiame įrenginyje, be prisijungimo, o progresą galima perkelti kodu.'
    }
  };
  return copy[step];
}

function modeExplanation(draft: Draft, topicTitle: string): string {
  if (draft.startMode === 'olympiad') {
    return `Pagrindinis ekranas siūlys stipresnius iššūkius nuo ${formatGradeBand(draft.gradeBand)}, bet aukštesnės temos nebus ribojamos.`;
  }
  if (draft.startMode === 'targeted') {
    if (draft.preparationType === 'control') {
      return `Pagrindinis ekranas pradės nuo temos „${topicTitle}“ ir siūlys trumpą teorijos, praktikos ir temos testo kelią.`;
    }
    if (draft.targetedStartChoice === 'diagnostic') {
      return `${draft.preparationType === 'vbe' ? 'VBE' : 'PUPP'} pasiruošimas pirmiausia siūlys diagnostiką, o po jos - spragų planą ir tikslinius testus.`;
    }
    return `Pagrindinis ekranas pradės nuo temos „${topicTitle}“, bet diagnostika liks rekomenduojamas kelias tikslesniam pasiruošimui.`;
  }
  return 'Pagrindinis ekranas pirmiausia siūlys kelių valandų diagnostiką. Ji pakeis spėjimą ir sudarys automatinį mokymosi planą.';
}

function explanationCards(step: StepType, draft: Draft): Array<[string, string]> {
  if (step === 'modeExplanation') {
    if (draft.startMode === 'olympiad') {
      return [
        ['Sunkesnis startas', 'Daugiau iššūkių ir alternatyvių sprendimo būdų.'],
        ['Laisvos pakopos', 'Aukštesnių klasių turinys nebus užrakintas.'],
        ['Bazinė teorija', 'Jei tema silpna, programa vis tiek leis grįžti prie pagrindų.'],
        ['Keičiama vėliau', 'Nustatymuose galėsi pereiti į diagnostinį ar tikslinį kelią.']
      ];
    }
    if (draft.startMode === 'targeted') {
      return [
        ['Aiškus taikinys', 'Pradžia remsis pasirinktu kontroliniu, PUPP arba VBE keliu.'],
        ['Tema arba diagnostika', 'Kontroliniui renkiesi temą, egzaminui rekomenduojama diagnostika.'],
        ['Testai', 'Pagrindiniame ekrane dažniau matysi testus ir klaidų taisymą.'],
        ['Keičiama vėliau', 'Galėsi persijungti į pilną kursą arba olimpiadinį kelią.']
      ];
    }
    return [
      ['Diagnostika', 'Platus testas per 5-12 klasių gebėjimus.'],
      ['Ne pažymys', 'Tikslas rasti spragas, ne nubausti.'],
      ['Automatinis planas', 'Po atsakymų programa parinks, ką mokytis pirmiausia.'],
      ['Tęsti vėliau', 'Diagnostiką galima sustabdyti ir pratęsti.']
    ];
  }

  if (step === 'appExplanation') {
    return [
      ['Teorija', 'Perskaityk idėją ir formules prieš spręsdamas.'],
      ['Žodynas', 'Spausk sąvokas, kai nori greitai pasitikrinti reikšmę.'],
      ['Praktika', 'Sprendimai kelia meistriškumą pagal teisingumą, greitį ir užuominas.'],
      ['SRS', 'Kortelės atsiranda po sąvokos ar uždavinio įsitraukimo.']
    ];
  }

  return [
    ['Be paskyros', 'Progresas saugomas lokaliai šiame įrenginyje.'],
    ['Eksportas', 'Nustatymuose gali sukurti perkėlimo kodą.'],
    ['Importas', 'Kitame įrenginyje įklijuok kodą ir tęsk.'],
    ['Pradėti', 'Po šio žingsnio pateksi į savo režimo pagrindinį ekraną.']
  ];
}

function preparationImpact(type: PreparationType): string {
  if (type === 'control') return 'Pasirinksi konkrečią temą ir pradėsi nuo teorijos, praktikos bei trumpo testo.';
  if (type === 'pupp') return 'Rekomenduosime diagnostiką, tada PUPP pasiruošimą per spragas ir programos temas.';
  return 'Rekomenduosime diagnostiką, tada VBE pasiruošimą per 11-12 klasių temas ir spragų taisymą.';
}

function modeSummary(draft: Draft): string {
  if (draft.startMode === 'olympiad') return `${formatGradeBand(draft.gradeBand)} startas, laisvos aukštesnės temos`;
  if (draft.startMode === 'targeted') {
    const label = draft.preparationType ? PREPARATION_LABELS[draft.preparationType] : 'Pasiruošimas';
    return `${label}: ${draft.targetedStartChoice === 'diagnostic' ? 'diagnostika pirmiausia' : 'tema pirmiausia'}`;
  }
  return 'Diagnostika pirmiausia';
}

function isExplanationStep(step: StepType): boolean {
  return step === 'modeExplanation' || step === 'appExplanation' || step === 'finalExplanation';
}

