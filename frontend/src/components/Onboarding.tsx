import React, { useState } from 'react';
import { Profile } from '../types';
import { topics, goals } from '../content';

// Grade band definition matches GRADE_BANDS in app.js
export const GRADE_BANDS = [
  { label: "5-6 klasės", value: "5-6", grades: [5, 6] },
  { label: "7-8 klasės", value: "7-8", grades: [7, 8] },
  { label: "9-10 klasės", value: "9-10", grades: [9, 10] },
  { label: "11 klasė", value: "11", grades: [11] },
  { label: "12 klasė", value: "12", grades: [12] }
];

export function bandForGrade(grade: number): string {
  return GRADE_BANDS.find((band) => band.grades.includes(grade))?.value || "9-10";
}

export function gradesForBand(value: string): number[] {
  return GRADE_BANDS.find((band) => band.value === value)?.grades || [9, 10];
}

export function formatGradeBand(value: string): string {
  return GRADE_BANDS.find((band) => band.value === value)?.label || "9-10 klasės";
}

export function topicsForBand(value: string) {
  const gradeSet = new Set(gradesForBand(value));
  return Object.values(topics)
    .filter((topic) => gradeSet.has(topic.grade))
    .sort((a, b) => a.grade - b.grade || a.order - b.order);
}

export function firstTopicForBand(value: string): string {
  return topicsForBand(value)[0]?.id || Object.keys(topics)[0];
}

interface OnboardingProps {
  onComplete: (profile: Partial<Profile>, startingTopicId: string) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [draft, setDraft] = useState({
    goal: goals[0] || "Noriu sustiprinti matematiką",
    gradeBand: "9-10",
    activeTopicId: "", // will default based on band
    dailyMinutes: 20,
    confidence: "Vidutiniškai",
    olympiad: false,
    diagnostic: true
  });

  const steps = [
    {
      kicker: "Sveikas",
      title: "Pirmiausia susidėliokime mokymosi kelią.",
      body: "Atsakyk į kelis klausimus. Tada parodysime, kaip naudotis programa: ką spausti, kaip mokytis teoriją, kaip veikia SRS ir kodėl praktika keičia meistriškumą.",
      type: "welcome"
    },
    {
      kicker: "Tikslas",
      title: "Ko labiausiai nori pasiekti?",
      body: "Tikslas naudojamas rekomendacijų tonui ir mokymosi kelio prioritetams. Ką mokytis pirmiausia nuspręs diagnostika, o ne tavo spėjimas apie klasę ar temą.",
      type: "choices",
      field: "goal",
      choices: [
        "Noriu sustiprinti matematiką",
        "Ruošiuosi kontroliniui arba egzaminui",
        "Nežinau nuo ko pradėti"
      ]
    },
    {
      kicker: "Tempas",
      title: "Kiek minučių realiai skirsi per dieną?",
      body: "Tai yra minutės per dieną. Pasirinkimas naudojamas dienos plano dydžiui: kiek teorijos, SRS ir uždavinių siūlyti vienam prisėdimui. Geriau mažiau, bet stabiliai.",
      type: "minutes",
      field: "dailyMinutes",
      choices: [
        { label: "10 min.", value: 10 },
        { label: "15 min.", value: 15 },
        { label: "20 min.", value: 20 },
        { label: "30 min.", value: 30 },
        { label: "45 min.", value: 45 },
        { label: "1 val. +", value: 60 }
      ]
    },
    {
      kicker: "Kaip pradėti",
      title: "Pirmas tikras žingsnis yra diagnostika.",
      body: "Ji pakeičia klasės ir temos pasirinkimą. Atsakinėsi į užduotis iš skirtingų sričių, o programa pagal atsakymus ras, ką moki, kur yra spragos ir nuo ko pradėti.",
      type: "explain",
      cards: [
        ["Diagnostika", "Ilgesnis, bet išsaugomas patikrinimas."],
        ["Ne pažymys", "Tikslas yra rasti spragas, ne nubausti."],
        ["Planavimas", "Po atsakymų gausi automatinį mokymosi kelią."],
        ["Tęsti vėliau", "Gali sustoti ir grįžti bet kada."]
      ]
    },
    {
      kicker: "Temos viduje",
      title: "Kiekviena tema eina ta pačia tvarka: teorija, sąvokos, pavyzdžiai, praktika.",
      body: "Pradėk nuo teorijos. Pažymimos sąvokos yra spaudžiamos: jos atidaro žodyną, kuriame matai apibrėžimą, intuiciją, formalesnį paaiškinimą ir susijusias temas.",
      type: "explain",
      cards: [
        ["Teorija", "Perskaityk idėją ir formules prieš spręsdamas."],
        ["Sąvokos", "Spausk terminus, kai nori greitai pasitikrinti reikšmę."],
        ["Pavyzdžiai", "Pažiūrėk bent vieną pilną sprendimą."],
        ["Praktika", "Tada spręsk, kad meistriškumas pradėtų kilti."]
      ]
    },
    {
      kicker: "Kartojimas ir praktika",
      title: "SRS saugo atmintį, o praktika keičia meistriškumą.",
      body: "SRS kortelėse pirma pamatai klausimą, pagalvoji, tada apverti kortelę. Tik po atsakymo pasirodo du pasirinkimai: Pakartoti ir Moku gerai. Uždaviniuose gali prašyti užuominų po vieną, bet užuominos mažina meistriškumo augimą, nes programa mato, kad reikėjo pagalbos.",
      type: "explain",
      cards: [
        ["SRS", "Kartok sąvokas, formules ir klaidas."],
        ["Pakartoti", "Kortelė grįš beveik iškart."],
        ["Moku gerai", "Kortelė bus nukelta vėlesnei dienai."],
        ["Meistriškumas", "Auga nuo teisingumo, greičio ir sprendimo be užuominų."]
      ]
    },
    {
      kicker: "Svarbu",
      title: "Progresas lieka šiame įrenginyje, be paskyros.",
      body: "Programa veikia offline principu. Diagnostikos atsakymai, planas ir progresas saugomi šiame įrenginyje. Jei vėliau norėsi perkelti sesiją į kitą įrenginį, eik į Nustatymai ir naudok eksportavimo arba importavimo kodą.",
      type: "explain",
      cards: [
        ["Be prisijungimo", "Nereikia paskyros, el. pašto ar internetinio profilio."],
        ["Eksportas", "Sukuria kodą, kurį gali perkelti kitur."],
        ["Importas", "Įkrauna anksčiau eksportuotą progresą."],
        ["Startas", "Dabar pradėsime nuo diagnostikos."]
      ]
    }
  ];

  const currentStep = steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);
  const isLast = stepIndex === steps.length - 1;

  const handleNext = () => {
    if (isLast) {
      const selectedTopic = draft.activeTopicId || firstTopicForBand(draft.gradeBand);
      const startGrade = topics[selectedTopic]?.grade || gradesForBand(draft.gradeBand)[0] || 9;
      onComplete({
        onboarded: true,
        goal: draft.goal,
        grade: startGrade,
        gradeBand: draft.gradeBand,
        confidence: draft.confidence,
        dailyMinutes: draft.dailyMinutes,
        olympiad: draft.olympiad,
        diagnostic: draft.diagnostic
      }, selectedTopic);
    } else {
      setStepIndex((idx) => idx + 1);
    }
  };

  const handleBack = () => {
    setStepIndex((idx) => Math.max(0, idx - 1));
  };

  const updateField = (field: string, value: any) => {
    setDraft((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'gradeBand') {
        // Reset topic to first of the new band
        next.activeTopicId = firstTopicForBand(value);
      }
      return next;
    });
  };

  const renderOnboardingChoices = () => {
    if (currentStep.type === "welcome") {
      return (
        <div className="explain-grid">
          <article><strong>1</strong><span>Vienas klausimas vienu metu.</span></article>
          <article><strong>2</strong><span>Po to trumpai paaiškinsime mechanikas.</span></article>
          <article><strong>3</strong><span>Startuosi tiesiai nuo rekomenduotos temos.</span></article>
        </div>
      );
    }

    if (currentStep.type === "explain") {
      const cards = currentStep.cards || [];
      return (
        <div className="explain-grid">
          {cards.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
      );
    }

    if (currentStep.type === "minutes") {
      const choices = currentStep.choices as Array<{ label: string, value: number }>;
      return (
        <div className="onboarding-choices minutes-choices">
          {choices.map((choice) => {
            const active = draft.dailyMinutes === choice.value;
            return (
              <button
                key={choice.value}
                type="button"
                className={active ? "selected" : ""}
                onClick={() => updateField('dailyMinutes', choice.value)}
              >
                {choice.label}
              </button>
            );
          })}
        </div>
      );
    }

    if (currentStep.type === "topics") {
      const available = topicsForBand(draft.gradeBand);
      const activeId = draft.activeTopicId || firstTopicForBand(draft.gradeBand);

      return (
        <div className="onboarding-choices topic-choices">
          {available.map((topic) => {
            const active = activeId === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                className={active ? "selected" : ""}
                onClick={() => updateField('activeTopicId', topic.id)}
              >
                <strong>{topic.title}</strong>
                <small>{topic.strand}</small>
              </button>
            );
          })}
          {available.length === 0 && (
            <p className="muted">Šiai pakopai temos dar neparuoštos.</p>
          )}
        </div>
      );
    }

    // Default choices rendering
    const choices = currentStep.choices || [];
    const fieldName = currentStep.field as keyof typeof draft;
    return (
      <div className="onboarding-choices">
        {choices.map((choice: any) => {
          const label = typeof choice === "object" ? choice.label : choice;
          const val = typeof choice === "object" ? choice.value : choice;
          const active = draft[fieldName] === val;
          return (
            <button
              key={val}
              type="button"
              className={active ? "selected" : ""}
              onClick={() => updateField(fieldName, val)}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <main className={`onboarding-full ${currentStep.type === "explain" ? "explain-mode" : ""}`}>
      <section className="onboarding-card">
        <div className="onboarding-progress" aria-label="Onboarding progresas">
          <span style={{ width: `${progress}%` }}></span>
        </div>
        <div className="onboarding-content">
          <span className="eyebrow">{currentStep.kicker}</span>
          <h1>{currentStep.title}</h1>
          <p className="onboarding-description">{currentStep.body}</p>

          {renderOnboardingChoices()}

          <div className="onboarding-actions">
            <button
              type="button"
              onClick={handleBack}
              disabled={stepIndex === 0}
            >
              Atgal
            </button>
            <button
              type="button"
              className="primary"
              onClick={handleNext}
            >
              {isLast ? "Pradėti diagnostiką" : currentStep.type === "explain" ? "Supratau" : "Toliau"}
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
          <strong>{draft.goal}</strong>
          <small>Tikslas</small>
        </div>
        <div className="preview-card">
          <strong>5-12 klasės</strong>
          <small>Diagnostikos aprėptis</small>
        </div>
        <div className="preview-card">
          <strong>Automatinis planas</strong>
          <small>Pirma tema bus parinkta po diagnostikos</small>
        </div>
        <div className="preview-card">
          <strong>{draft.dailyMinutes} min.</strong>
          <small>Kasdienis tempas</small>
        </div>
      </aside>
    </main>
  );
};
