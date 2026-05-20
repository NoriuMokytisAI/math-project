import { achievements, concepts, curriculum, exercises, goals, tests, topics } from "./content.js";
import { loadState, resetState, saveState } from "./storage.js";
import {
  applySrsPreferences,
  calculateConceptMastery,
  calculateGradeMastery,
  calculateMastery,
  exportProgress as encodeProgress,
  getTestsForTopic,
  importProgress as decodeProgress,
  recommendation,
  recordAttempt,
  recordTestAttempt,
  scheduleCard
} from "./systems.js";

const DEFAULT_TOPIC_ID = topics["funkcijos-ir-ju-savybes"] ? "funkcijos-ir-ju-savybes" : Object.keys(topics)[0];

let state = await loadState();
if (!topics[state.activeTopicId]) {
  state = { ...state, activeTopicId: DEFAULT_TOPIC_ID };
  await saveState(state);
}
state.mastery = calculateMastery(state);
let route = parseRoute();
let practiceSession = null;
let testSession = null;
let onboardingDraft = {
  step: 0,
  goal: state.profile.goal || goals[0],
  grade: state.profile.grade || null,
  confidence: state.profile.confidence || "Vidutini\u0161kai",
  dailyMinutes: state.profile.dailyMinutes || 20,
  olympiad: Boolean(state.profile.olympiad),
  diagnostic: state.profile.diagnostic !== false
};

const app = document.querySelector("#app");

const isLocalDev = ["localhost", "127.0.0.1", ""].includes(location.hostname);

if ("serviceWorker" in navigator && !isLocalDev) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

if ("serviceWorker" in navigator && isLocalDev) {
  navigator.serviceWorker.getRegistrations?.().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

window.addEventListener("hashchange", () => {
  route = parseRoute();
  render();
});

function parseRoute() {
  const hash = location.hash.replace(/^#\/?/, "");
  const [page = "dashboard", id = ""] = hash.split("/");
  if (!state.profile.onboarded && page !== "onboarding") return { page: "onboarding", id: "" };
  return { page, id };
}

function navigate(page, id = "") {
  const nextHash = `#/${page}${id ? `/${id}` : ""}`;
  if (location.hash === nextHash) {
    route = parseRoute();
    render();
    return;
  }
  location.hash = nextHash;
}

function setState(next) {
  state = { ...next, mastery: calculateMastery(next) };
  saveState(state);
  render();
}

function html(strings, ...values) {
  return strings.map((part, index) => part + (values[index] ?? "")).join("");
}

function render() {
  const due = state.srsCards.filter((card) => card.enabled && card.due <= Date.now()).length;
  const solved = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId)).size;
  const averageMastery = Math.round(Object.values(state.mastery).reduce((sum, item) => sum + item.value, 0) / Math.max(1, Object.values(state.mastery).length));
  if (route.page === "onboarding") {
    app.className = "onboarding-mode";
    app.innerHTML = renderOnboarding();
    bindEvents();
    return;
  }
  app.className = "";

  const shell = html`
    <aside class="sidebar">
      <div class="brand" role="button" tabindex="0" data-nav="dashboard">
        <span class="brand-mark">∑</span>
        <span><strong>NoriuMokyti.lt</strong><small>Matematika 5-12</small></span>
      </div>
      <nav>
        ${navButton("dashboard", "Apžvalga")}
        ${navButton("srs", "SRS")}
        ${navButton("practice", "Praktika")}
        ${navButton("tests", "Testai")}
        ${navButton("glossary", "Žodynas")}
        ${navButton("settings", "Nustatymai")}
      </nav>
      <div class="side-card">
        <span class="eyebrow">Tikslas</span>
        <strong>${state.profile.goal || "Pasirink tikslą"}</strong>
        <small>${recommendation(state).text}</small>
        <div class="side-meter" style="--p:${averageMastery}"><span></span></div>
        <div class="side-stats">
          <span>${due} SRS</span>
          <span>${solved} užd.</span>
        </div>
      </div>
    </aside>
    <main class="main">
      ${renderTopbar()}
      <section class="view">${renderRoute()}</section>
    </main>
    <div id="toast-region" class="toast-region"></div>
  `;
  app.innerHTML = shell;
  bindEvents();
}

function navButton(page, label) {
  const active = route.page === page || (page === "grade" && route.page === "topic");
  return `<button class="${active ? "active" : ""}" data-nav="${page}"><span class="nav-dot"></span><span>${label}</span></button>`;
}

function renderTopbar() {
  const due = state.srsCards.filter((card) => card.enabled && card.due <= Date.now()).length;
  const activeTopic = topics[state.activeTopicId] || topics[DEFAULT_TOPIC_ID];
  return html`
    <header class="topbar">
      <div>
        <span class="eyebrow">Šiandien</span>
        <h1>${pageTitle()}</h1>
      </div>
      <div class="top-actions">
        <button class="pill" data-nav="srs">SRS ${due}</button>
        <button class="pill accent" data-nav="topic" data-id="${activeTopic.id}">${activeTopic.title}</button>
      </div>
    </header>
  `;
}

function pageTitle() {
  if (route.page === "topic") return topics[route.id]?.title || "Tema";
  const titles = {
    onboarding: "Pradžia",
    dashboard: "Mokymosi apžvalga",
    grade: "Tavo klasės kelias",
    srs: "Kartojimas",
    practice: "Praktika",
    tests: "Testai",
      glossary: "Sąvokų žodynas",
    settings: "Nustatymai"
  };
  return titles[route.page] || "Mokymasis";
}

function renderRoute() {
  if (route.page === "onboarding") return renderOnboarding();
  if (route.page === "grade") return renderGrade();
  if (route.page === "topic") return renderTopic(route.id || state.activeTopicId);
  if (route.page === "srs") return renderSrs();
  if (route.page === "practice") return renderPractice(route.id || state.activeTopicId);
  if (route.page === "tests") return renderTests(route.id || state.activeTopicId);
  if (route.page === "glossary") return renderGlossary(route.id);
  if (route.page === "settings") return renderSettings();
  return renderDashboard();
}

function renderOnboarding() {
  const steps = onboardingSteps();
  const step = steps[onboardingDraft.step] || steps[0];
  const progress = Math.round(((onboardingDraft.step + 1) / steps.length) * 100);
  const isLast = onboardingDraft.step === steps.length - 1;
  return html`
    <main class="onboarding-full ${step.type === "explain" ? "explain-mode" : ""}">
      <section class="onboarding-card">
        <div class="onboarding-progress" aria-label="Onboarding progresas"><span style="width:${progress}%"></span></div>
        <div class="onboarding-content">
          <span class="eyebrow">${step.kicker}</span>
          <h1>${step.title}</h1>
          <p>${step.body}</p>
          ${renderOnboardingStep(step)}
          <div class="onboarding-actions">
            <button data-action="onboarding-back" ${onboardingDraft.step === 0 ? "disabled" : ""}>Atgal</button>
            <button class="primary" data-action="${isLast ? "onboarding-finish" : "onboarding-next"}">
              ${isLast ? "Prad\u0117ti nuo funkcij\u0173" : step.type === "explain" ? "Supratau" : "Toliau"}
            </button>
          </div>
        </div>
      </section>
      <aside class="onboarding-preview">
        <div class="brand onboarding-brand"><span class="brand-mark">&sum;</span><span><strong>NoriuMokyti.lt</strong><small>Offline matematikos kelias</small></span></div>
        <div class="preview-card"><strong>${onboardingDraft.goal}</strong><small>Tikslas</small></div>
        <div class="preview-card"><strong>${onboardingDraft.grade ? `${onboardingDraft.grade} klas\u0117` : "Klas\u0117 dar nepasirinkta"}</strong><small>Pradinis lygis</small></div>
        <div class="preview-card"><strong>${onboardingDraft.dailyMinutes} min.</strong><small>Kasdienis tempas</small></div>
      </aside>
    </main>
  `;
}

function onboardingSteps() {
  return [
    {
      kicker: "Sveikas",
      title: "Pirmiausia susid\u0117liokime mokymosi keli\u0105.",
      body: "Atsakyk \u012f tris klausimus. Tada parodysime, kaip naudotis programa: k\u0105 spausti, kaip mokytis teorij\u0105, kaip veikia SRS ir kod\u0117l praktika kei\u010dia meistri\u0161kum\u0105.",
      type: "welcome"
    },
    {
      kicker: "Tikslas",
      title: "Ko labiausiai nori pasiekti?",
      body: "Tikslas naudojamas rekomendacij\u0173 tonui ir mokymosi kelio prioritetams. V\u0117liau pagal tiksl\u0105 bus si\u016blomi testai arba papildomi i\u0161\u0161\u016bkiai, o klas\u0119 pasirinksime atskirai.",
      type: "choices",
      field: "goal",
      choices: [
        "Noriu sustiprinti matematik\u0105",
        "Ruo\u0161iuosi kontroliniui arba egzaminui",
        "Ne\u017einau nuo ko prad\u0117ti"
      ]
    },
    {
      kicker: "Klas\u0117",
      title: "Kurioje klas\u0117je dabar mokaisi?",
      body: "Klas\u0117 parenka programos kontekst\u0105 ir padeda rodyti tinkamus prerekvizitus. Jei sprendimai rodys spragas, programa gal\u0117s pasi\u016blyti gr\u012f\u017eti \u012f ankstesnes temas.",
      type: "choices",
      field: "grade",
      choices: [7, 8, 9, 10, 11, 12]
    },
    {
      kicker: "Tempas",
      title: "Kiek minu\u010di\u0173 realiai skirsi per dien\u0105?",
      body: "Tai yra minut\u0117s per dien\u0105. Pasirinkimas naudojamas dienos plano dyd\u017eiui: kiek teorijos, SRS ir u\u017edavini\u0173 si\u016blyti vienam pris\u0117dimui. Geriau ma\u017eiau, bet stabiliai.",
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
      kicker: "Kaip prad\u0117ti",
      title: "Kai \u012feisi \u012f program\u0105, spausk vien\u0105 pagrindin\u012f mygtuk\u0105: T\u0119sti.",
      body: "Ap\u017evalga yra tavo nam\u0173 ekranas. Ten vir\u0161uje matysi, k\u0105 daryti dabar: skaityti teorij\u0105, kartoti SRS arba spr\u0119sti praktik\u0105. Jei pasimeti, gr\u012f\u017ek \u012f Ap\u017evalg\u0105.",
      type: "explain",
      cards: [
        ["Ap\u017evalga", "Parodo vien\u0105 rekomenduojam\u0105 kit\u0105 veiksm\u0105."],
        ["T\u0119sti", "Nuveda \u012f tai, kas tuo metu svarbiausia."],
        ["Programa", "Leid\u017eia nar\u0161yti temas pagal klases."],
        ["Vir\u0161utiniai mygtukai", "Greitai nuveda \u012f SRS arba dabartin\u0119 tem\u0105."]
      ]
    },
    {
      kicker: "Temos viduje",
      title: "Kiekviena tema eina ta pa\u010dia tvarka: teorija, s\u0105vokos, pavyzd\u017eiai, praktika.",
      body: "Prad\u0117k nuo teorijos. Pa\u017eymimos s\u0105vokos yra spaud\u017eiamos: jos atidaro \u017eodyn\u0105, kuriame matai apibr\u0117\u017eim\u0105, intuicij\u0105, formalesn\u012f paai\u0161kinim\u0105 ir susijusias temas.",
      type: "explain",
      cards: [
        ["Teorija", "Perskaityk id\u0117j\u0105 ir formules prie\u0161 spr\u0119sdamas."],
        ["S\u0105vokos", "Spausk terminus, kai nori greitai pasitikrinti reik\u0161m\u0119."],
        ["Pavyzd\u017eiai", "Pa\u017ei\u016br\u0117k bent vien\u0105 piln\u0105 sprendim\u0105."],
        ["Praktika", "Tada spr\u0119sk, kad meistri\u0161kumas prad\u0117t\u0173 kilti."]
      ]
    },
    {
      kicker: "Kartojimas ir praktika",
      title: "SRS saugo atmint\u012f, o praktika kelia meistri\u0161kum\u0105.",
      body: "SRS kortel\u0117se yra tik du pasirinkimai: V\u0117l ir Gerai. U\u017edaviniuose gali pra\u0161yti u\u017euomin\u0173 po vien\u0105, bet u\u017euominos ma\u017eina meistri\u0161kumo augim\u0105, nes programa mato, kad reik\u0117jo pagalbos.",
      type: "explain",
      cards: [
        ["SRS", "Kartok s\u0105vokas, formules ir klaidas."],
        ["V\u0117l", "Kortel\u0117 gr\u012f\u0161 beveik i\u0161kart."],
        ["Gerai", "Kortel\u0117 bus nukelta v\u0117lesnei dienai."],
        ["Meistri\u0161kumas", "Auga nuo teisingumo, grei\u010dio ir sprendimo be u\u017euomin\u0173."]
      ]
    },
    {
      kicker: "Svarbu",
      title: "Progresas lieka \u0161iame \u012frenginyje, be paskyros.",
      body: "Programa veikia offline principu. Jei v\u0117liau nor\u0117si perkelti sesij\u0105 \u012f kit\u0105 \u012frengin\u012f, eik \u012f Nustatymai ir naudok eksportavimo arba importavimo kod\u0105.",
      type: "explain",
      cards: [
        ["Be prisijungimo", "Nereikia paskyros, el. pa\u0161to ar internetinio profilio."],
        ["Eksportas", "Sukuria kod\u0105, kur\u012f gali perkelti kitur."],
        ["Importas", "\u012ekrauna anks\u010diau eksportuot\u0105 progres\u0105."],
        ["Startas", "Dabar prad\u0117sime nuo funkcij\u0173 temos."]
      ]
    }
  ];
}

function renderOnboardingStep(step) {
  if (step.type === "welcome") {
    return `<div class="explain-grid">
      <article><strong>1</strong><span>Vienas klausimas vienu metu.</span></article>
      <article><strong>2</strong><span>Po to trumpai paai\u0161kinsime mechanikas.</span></article>
      <article><strong>3</strong><span>Startuosi tiesiai nuo rekomenduotos temos.</span></article>
    </div>`;
  }
  if (step.type === "explain") {
    const cards = step.cards || [
      ["Teorija", "Pirma supranti id\u0117j\u0105, tada sprendi."],
      ["\u017dodynas", "Paspaud\u017eiamos s\u0105vokos atidaro paai\u0161kinimus ir ry\u0161ius."],
      ["SRS", "V\u0117l arba Gerai. Ai\u0161kus kartojimas be perteklini\u0173 pasirinkim\u0173."],
      ["Praktika", "Greitis, teisingumas ir u\u017euominos kei\u010dia meistri\u0161kum\u0105."]
    ];
    return `<div class="explain-grid">
      ${cards.map(([title, text]) => `<article><strong>${title}</strong><span>${text}</span></article>`).join("")}
    </div>`;
  }
  if (step.type === "minutes") {
    return `<div class="onboarding-choices minutes-choices">
      ${step.choices.map((choice) => {
        const active = onboardingDraft.dailyMinutes === choice.value;
        return `<button class="${active ? "selected" : ""}" data-onboarding-field="dailyMinutes" data-onboarding-value="${choice.value}">${choice.label}</button>`;
      }).join("")}
    </div>`;
  }
  return `<div class="onboarding-choices">
    ${step.choices.map((choice) => {
      const label = typeof choice === "object" ? choice.label : choice;
      const value = typeof choice === "object" ? choice.value : choice;
      const active = onboardingDraft[step.field] === value;
      return `<button class="${active ? "selected" : ""}" data-onboarding-field="${step.field}" data-onboarding-value="${String(value)}">${label}</button>`;
    }).join("")}
  </div>`;
}

function renderDashboard() {
  const rec = recommendation(state);
  const due = state.srsCards.filter((card) => card.enabled && card.due <= Date.now());
  const gradeMastery = calculateGradeMastery(state);
  const activeTopic = topics[state.activeTopicId] || topics[DEFAULT_TOPIC_ID];
  const activeGrade = state.profile.grade || 9;
  const gradeTopics = Object.values(topics)
    .filter((topic) => topic.grade === activeGrade)
    .sort((a, b) => a.order - b.order);
  const topicCards = gradeTopics.map((topic) => renderTopicCard(topic)).join("");
  const plan = dailyPlan(state.profile.dailyMinutes || 20);
  const goalAdvice = goalGuidance(state.profile.goal || "");
  return html`
    <div class="grid dashboard-grid">
      <section class="panel wide">
        <span class="eyebrow">Rekomendacija</span>
        <h2>${rec.text}</h2>
        <p class="lead">${goalAdvice}</p>
        <div class="actions">
          <button class="primary" data-nav="${rec.type === "srs" ? "srs" : rec.type === "practice" ? "practice" : "topic"}" data-id="${state.activeTopicId}">Tęsti</button>
          <button data-nav="tests" data-id="${activeTopic.id}">Laikyti testą</button>
        </div>
      </section>
      <section class="panel metric">
        <span class="eyebrow">SRS šiandien</span>
        <strong>${due.length}</strong>
        <small>kortelės laukia</small>
      </section>
      <section class="panel metric">
        <span class="eyebrow">Išspręsta</span>
        <strong>${new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId)).size}</strong>
        <small>uždaviniai</small>
      </section>
      <section class="panel daily-plan">
        <span class="eyebrow">${state.profile.dailyMinutes || 20} min. planas</span>
        <h3>Šiandien</h3>
        <ol>
          ${plan.map((item) => `<li>${item}</li>`).join("")}
        </ol>
      </section>
      <section class="panel wide">
        <div class="section-head">
          <div>
            <span class="eyebrow">${activeGrade} klasė</span>
            <h2>Rodome tik tavo klasės kelią</h2>
          </div>
          <button data-nav="grade">Plačiau</button>
        </div>
        <div class="grade-mastery compact">${Object.entries(gradeMastery).filter(([grade]) => Number(grade) === activeGrade).map(([grade, value]) => `<button data-nav="grade"><strong>${grade}</strong><span>${value}%</span><i style="--p:${value}"></i></button>`).join("")}</div>
      </section>
      <section class="panel wide">
        <div class="section-head">
          <div><span class="eyebrow">${activeGrade} klasės kelias</span><h2>Pradėk nuo ${activeTopic.title}</h2></div>
          <button data-nav="practice" data-id="${state.activeTopicId}">Spręsti</button>
        </div>
        <div class="topic-grid">${topicCards}</div>
      </section>
      <section class="panel">
        <span class="eyebrow">Pasiekimai</span>
        <div class="badges">${state.achievements.length ? state.achievements.map((id) => `<span>${achievements[id] || id}</span>`).join("") : "<p>Dar nėra. Pirmas žingsnis jau čia pat.</p>"}</div>
      </section>
    </div>
  `;
}

function goalGuidance(goal) {
  if (goal.includes("olimpiadinio")) return "Tavo kelias labiau akcentuos sunkesnius uždavinius, alternatyvius sprendimus ir papildomus iššūkius po bazinės teorijos.";
  if (goal.includes("PUPP") || goal.includes("VBE") || goal.includes("egzaminui")) return "Tavo kelias labiau akcentuos programos temas, testus ir klaidų taisymą, kad pasiruošimas egzaminui būtų tiesus.";
  if (goal.includes("kontroliniui")) return "Tavo kelias labiau akcentuos greitą temos sutvarkymą: trumpa teorija, pavyzdžiai ir keli tikrinantys uždaviniai.";
  if (goal.includes("Nežinau")) return "Tavo kelias prasidės nuo rekomenduojamos temos ir pagal sprendimus siūlys, ką mokytis toliau.";
  return "Tavo kelias labiau akcentuos stabilų pagrindų stiprinimą: teoriją, sąvokas, SRS ir praktiką.";
}

function dailyPlan(minutes) {
  if (minutes <= 10) return ["1 SRS kortelė", "1 teorijos pastraipa", "1 lengvas uždavinys"];
  if (minutes <= 15) return ["2-3 SRS kortelės", "1 teorijos gabalas", "2 uždaviniai"];
  if (minutes <= 20) return ["5 min. SRS", "10 min. teorijos", "2-3 uždaviniai"];
  if (minutes <= 30) return ["7 min. SRS", "10 min. teorijos", "4-5 uždaviniai"];
  return ["10 min. SRS", "15 min. teorijos", "bent 6 uždaviniai arba testas"];
}

function renderTopicCard(topic) {
  const m = state.mastery[topic.id] || { value: 0, label: "Pradžia", solved: 0, total: 0 };
  return html`
    <article class="topic-card">
      <div class="progress-ring" style="--p:${m.value}">${m.value}%</div>
      <div>
        <h3>${topic.title}</h3>
        <p>${topic.strand} • ${m.label} • ${m.solved}/${m.total} užd.</p>
        <div class="mastery-bar" style="--p:${m.value}"><span></span></div>
        <div class="actions compact">
          <button data-nav="topic" data-id="${topic.id}">Teorija</button>
          <button data-nav="practice" data-id="${topic.id}">Praktika</button>
        </div>
      </div>
    </article>
  `;
}

function renderGrade() {
  const grade = state.profile.grade || 9;
  const current = Object.values(topics).filter((topic) => topic.grade === grade).sort((a, b) => a.order - b.order);
  const prevGrade = Math.max(5, grade - 1);
  const nextGrade = Math.min(12, grade + 1);
  const otherGrades = Object.entries(curriculum)
    .filter(([g]) => Number(g) !== grade)
    .map(([g, items]) => ({
      grade: Number(g),
      items: items.slice(0, 3)
    }))
    .sort((a, b) => a.grade - b.grade);
  const currentTopics = current.map((topic) => {
    const mastery = state.mastery[topic.id]?.value || 0;
    return `
      <article class="grade-topic">
        <div>
          <strong>${topic.title}</strong>
          <small>${topic.strand} • ${mastery}%</small>
        </div>
        <div class="grade-topic-actions">
          <button data-nav="topic" data-id="${topic.id}">Teorija</button>
          <button data-nav="practice" data-id="${topic.id}">Praktika</button>
        </div>
      </article>
    `;
  }).join("");
  return `
    <div class="grade-focus">
      <section class="panel wide">
        <div class="section-head">
          <div>
            <span class="eyebrow">Tavo klasė</span>
            <h2>${grade} klasė</h2>
            <p class="lead">Rodome tik tavo klasesi aktualų kelią. Kitų klasių temas pateikiame tik kaip pagalbą, kai jų reikia priekį arba atgal spragoms užpildyti.</p>
          </div>
          <div class="grade-nav">
            <button data-nav="topic" data-id="${topics[state.activeTopicId]?.id || DEFAULT_TOPIC_ID}">Grįžti į temą</button>
            <button data-nav="settings">Keisti tikslą</button>
          </div>
        </div>
      </section>
      <section class="panel wide">
        <span class="eyebrow">Tavo klasės temos</span>
        <div class="grade-topic-list">${currentTopics || "<p class='muted'>Šiai klasei dar nėra temų.</p>"}</div>
      </section>
      <section class="panel">
        <span class="eyebrow">Artimiausia pakopa</span>
        <div class="curriculum-mini">
          <strong>${prevGrade} klasė</strong>
          <small>${(curriculum[prevGrade] || []).slice(0, 2).join(" • ") || "Nėra temų"}</small>
        </div>
        <div class="curriculum-mini">
          <strong>${nextGrade} klasė</strong>
          <small>${(curriculum[nextGrade] || []).slice(0, 2).join(" • ") || "Nėra temų"}</small>
        </div>
      </section>
      <section class="panel wide">
        <div class="section-head">
          <div>
            <span class="eyebrow">Kitos klasės</span>
            <h2>Rodyti tik tada, kai reikia</h2>
          </div>
        </div>
        <details class="other-grades">
          <summary>Kitos programos klasės</summary>
          <div class="other-grade-grid">
            ${otherGrades.map(({ grade, items }) => `
              <article class="grade-mini">
                <strong>${grade} klasė</strong>
                <small>${items.join(" • ")}</small>
              </article>
            `).join("")}
          </div>
        </details>
      </section>
    </div>
  `;
}

function renderTopic(topicId) {
  const topic = topics[topicId] || topics[DEFAULT_TOPIC_ID];
  const topicTests = getTestsForTopic(topic.id);
  const conceptList = topic.concepts.map((id) => concepts[id] ? `<button class="concept-chip" data-concept="${id}">${concepts[id].title}</button>` : "").join("");
  const sections = topic.sections.map((section) => html`
    <article class="theory-section">
      <h3>${section.title}</h3>
      ${section.body.map((p) => `<p>${linkConcepts(p)}</p>`).join("")}
    </article>
  `).join("");
  return html`
    <div class="topic-layout">
      <section class="panel wide">
        <span class="eyebrow">Tema • ${topic.strand}</span>
        <h2>${topic.title}</h2>
        <p class="lead">Prerekvizitai: ${topic.prerequisites.join(", ")}.</p>
        <div class="actions">
          <button class="primary" data-nav="practice" data-id="${topic.id}">Spręsti uždavinius</button>
          <button data-nav="tests" data-id="${topic.id}">Testai (${topicTests.length})</button>
          <button data-action="mark-theory" data-topic="${topic.id}">Pažymėti teoriją kaip skaitytą</button>
        </div>
      </section>
      <section class="panel wide">
        <span class="eyebrow">Sąvokos</span>
        <div class="chips">${conceptList}</div>
      </section>
      <section class="panel wide">${sections}</section>
      <section class="panel">
        <span class="eyebrow">Formulės</span>
        <div class="formula-list">${topic.formulas.map((formula) => `<code>${formula}</code>`).join("")}</div>
      </section>
      <section class="panel">
        <span class="eyebrow">Dažnos klaidos</span>
        <ul>${topic.mistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
      </section>
      <section class="panel wide">
        <span class="eyebrow">Pavyzdžiai</span>
        ${topic.examples.map((ex) => `<article class="example"><h3>${ex.title}</h3><p>${ex.text}</p><p><strong>Sprendimas.</strong> ${ex.solution}</p><p><strong>Atsakymas:</strong> ${ex.answer}</p></article>`).join("")}
      </section>
    </div>
  `;
}

function linkConcepts(text) {
  return text.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '<button class="inline-concept" data-concept="$1">$2</button>');
}

function renderGlossary(selectedId = "") {
  const selected = concepts[selectedId] || concepts[Object.keys(concepts)[0]];
  const selectedIdResolved = Object.entries(concepts).find(([, concept]) => concept === selected)?.[0] || Object.keys(concepts)[0];
  const card = state.srsCards.find((item) => item.id === `theory-${selectedIdResolved}`);
  const mastery = calculateConceptMastery(state, selectedIdResolved);
  const list = Object.entries(concepts).map(([id, concept]) => `<button class="${selected === concept ? "active" : ""}" data-nav="glossary" data-id="${id}">${concept.title}</button>`).join("");
  return html`
    <div class="split">
      <section class="panel glossary-list">${list}</section>
      <section class="panel glossary-detail">
        <span class="eyebrow">${selected.type}</span>
        <h2>${selected.title}</h2>
        <p class="lead">${selected.definition}</p>
        <div class="concept-toolbar">
          <div class="mastery-bar labeled" style="--p:${mastery}"><span></span><b>${mastery}%</b></div>
          <button data-action="toggle-srs-card" data-card="theory-${selectedIdResolved}">${card?.enabled ? "Išimti iš SRS" : "Įtraukti į SRS"}</button>
        </div>
        <h3>Intuityviai</h3><p>${selected.intuition}</p>
        <h3>Formaliai</h3><p>${selected.formal}</p>
        <h3>Ryšiai</h3>
        <div class="chips">${selected.related.map((id) => concepts[id] ? `<button class="concept-chip" data-nav="glossary" data-id="${id}">${concepts[id].title}</button>` : "").join("")}</div>
      </section>
    </div>
  `;
}

function renderSrs() {
  const due = state.srsCards.filter((card) => card.enabled && card.due <= Date.now());
  const card = due[0];
  if (!card) {
    return `<section class="panel centered"><h2>Šiandien SRS švaru.</h2><p>Atmintis ilsisi. Galima spręsti uždavinius.</p><button data-nav="practice" data-id="${state.activeTopicId}">Eiti į praktiką</button></section>`;
  }
  return html`
    <section class="panel review-card">
      <span class="eyebrow">${card.deck === "theory" ? "Teorijos kortelė" : "Praktikos kortelė"} • liko ${due.length}</span>
      <h2>${card.front}</h2>
      <details><summary>Rodyti atsakymą</summary><p>${card.back}</p></details>
      <div class="actions">
        <button data-srs="again" data-card="${card.id}">Vėl</button>
        <button class="primary" data-srs="good" data-card="${card.id}">Gerai</button>
      </div>
    </section>
  `;
}

function renderPractice(topicId) {
  const topic = topics[topicId] || topics[state.activeTopicId] || topics[DEFAULT_TOPIC_ID];
  if (!practiceSession || practiceSession.topicId !== topic.id) startPractice(topic.id);
  if (!practiceSession) {
    return html`
      <section class="panel centered">
        <span class="eyebrow">${topic.title}</span>
        <h2>Šiai temai pratimai dar neparuošti.</h2>
        <p>Gali skaityti teoriją, peržiūrėti sąvokas arba rinktis kitą temą programoje.</p>
        <div class="actions">
          <button data-nav="topic" data-id="${topic.id}">Teorija</button>
          <button class="primary" data-nav="grade">Programa</button>
        </div>
      </section>
    `;
  }
  const exercise = practiceSession.exercise;
  return html`
    <section class="panel practice-card">
      <span class="eyebrow">${topic.title} • ${exercise.level}</span>
      <h2>${exercise.statement}</h2>
      ${exercise.type === "multipleChoice" ? renderChoices(exercise) : `<input class="answer-input" name="answer" placeholder="Įrašyk atsakymą" autocomplete="off" />`}
      <div class="hint-box">${practiceSession.visibleHints.map((hint) => `<p>${hint}</p>`).join("")}</div>
      <div class="actions">
        <button data-action="hint">Užuomina</button>
        <button class="primary" data-action="submit-answer" data-exercise="${exercise.id}">Tikrinti</button>
        <button data-action="next-exercise" data-topic="${topic.id}">Kitas</button>
      </div>
      ${practiceSession.result ? renderPracticeResult(practiceSession.result, exercise) : ""}
    </section>
  `;
}

function renderChoices(exercise, selected = "") {
  return `<div class="choice-list">${exercise.choices.map((choice) => `<label><input type="radio" name="answer" value="${escapeAttr(choice)}" ${selected === choice ? "checked" : ""} /> ${choice}</label>`).join("")}</div>`;
}

function renderPracticeResult(result, exercise) {
  return html`
    <div class="result ${result.correct ? "ok" : "bad"}">
      <h3>${result.correct ? "Teisingai" : "Dar ne"}</h3>
      <p>${exercise.solution}</p>
      ${exercise.alternate ? `<details><summary>Peržiūrėti kitus sprendimo būdus</summary><p>${exercise.alternate}</p></details>` : ""}
    </div>
  `;
}

function renderTests(topicId) {
  const topic = topics[topicId] || topics[state.activeTopicId] || topics[DEFAULT_TOPIC_ID];
  const topicTests = getTestsForTopic(topic.id);
  if (testSession && testSession.topicId === topic.id) return renderTestSession();
  if (!topicTests.length) {
    return `<section class="panel centered"><h2>Šiai temai testai dar nesukurti.</h2><p>Gali tęsti praktiką ir grįžti vėliau.</p><button data-nav="practice" data-id="${topic.id}">Eiti į praktiką</button></section>`;
  }
  return html`
    <div class="grid">
      <section class="panel wide">
        <span class="eyebrow">${topic.title}</span>
        <h2>Testai</h2>
        <p class="lead">Testai meistriškumą keičia stipriau negu įprasta praktika. Pradėk tada, kai bent kartą perskaitei teoriją ir pabandei kelis uždavinius.</p>
      </section>
      ${topicTests.map((test) => {
        const last = [...(state.testAttempts || [])].reverse().find((attempt) => attempt.testId === test.id);
        return `<article class="panel test-card">
          <span class="eyebrow">${test.exerciseIds.length} klaus.</span>
          <h3>${test.title}</h3>
          <p>${last ? `Paskutinis rezultatas: ${last.correct}/${last.total}` : "Dar nelaikytas."}</p>
          <button class="primary" data-action="start-test" data-test="${test.id}" data-topic="${topic.id}">Pradėti</button>
        </article>`;
      }).join("")}
    </div>
  `;
}

function renderTestSession() {
  const test = tests.find((item) => item.id === testSession.testId);
  const exercise = testSession.items[testSession.index];
  if (!test || !exercise) {
    testSession = null;
    return html`
      <section class="panel centered">
        <h2>Testo nepavyko atidaryti.</h2>
        <p>Pasirink kitą testą arba grįžk prie temos.</p>
        <button class="primary" data-nav="tests" data-id="${state.activeTopicId}">Grįžti į testus</button>
      </section>
    `;
  }
  const answered = testSession.answers[exercise.id];
  const progress = Math.round(((testSession.index + 1) / testSession.items.length) * 100);
  return html`
    <section class="panel practice-card test-runner">
      <span class="eyebrow">${test.title} • ${testSession.index + 1}/${testSession.items.length}</span>
      <div class="onboarding-progress compact-progress"><span style="width:${progress}%"></span></div>
      <h2>${exercise.statement}</h2>
      ${exercise.type === "multipleChoice" ? renderChoices(exercise, answered?.value) : `<input class="answer-input" name="answer" placeholder="Įrašyk atsakymą" autocomplete="off" value="${escapeAttr(answered?.value || "")}" />`}
      <div class="actions">
        <button data-action="test-prev" ${testSession.index === 0 ? "disabled" : ""}>Atgal</button>
        <button class="primary" data-action="${testSession.index === testSession.items.length - 1 ? "finish-test" : "test-next"}">${testSession.index === testSession.items.length - 1 ? "Baigti testą" : "Kitas"}</button>
        <button data-action="cancel-test">Nutraukti</button>
      </div>
    </section>
  `;
}

function startTest(testId, topicId) {
  const test = tests.find((item) => item.id === testId);
  if (!test) return;
  const items = test.exerciseIds.map((id) => exercises.find((exercise) => exercise.id === id)).filter(Boolean);
  if (!items.length) {
    toast("Šis testas neturi atidaromų užduočių.");
    return;
  }
  testSession = {
    testId,
    topicId,
    items,
    index: 0,
    answers: {},
    startedAt: Date.now()
  };
}

function saveCurrentTestAnswer() {
  if (!testSession) return;
  const exercise = testSession.items[testSession.index];
  const input = app.querySelector("[name='answer']:checked") || app.querySelector("[name='answer']");
  const value = (input?.value || "").trim();
  testSession.answers[exercise.id] = { value, correct: isCorrectAnswer(exercise, value) };
}

function finishTest() {
  if (!testSession) return;
  saveCurrentTestAnswer();
  const test = tests.find((item) => item.id === testSession.testId);
  const results = testSession.items.map((exercise) => ({
    exerciseId: exercise.id,
    correct: Boolean(testSession.answers[exercise.id]?.correct)
  }));
  const correct = results.filter((item) => item.correct).length;
  const total = results.length;
  const next = recordTestAttempt(state, test, results);
  testSession = null;
  setState(next);
  toast(`Testas baigtas: ${correct}/${total}.`);
  navigate("tests", test.topicIds[0]);
}

function startPractice(topicId) {
  const pool = exercises.filter((exercise) => exercise.topicId === topicId);
  if (!pool.length) {
    practiceSession = null;
    return;
  }
  const solved = new Set(state.attempts.filter((a) => a.correct).map((a) => a.exerciseId));
  const next = pool.find((exercise) => !solved.has(exercise.id)) || pool[Math.floor(Math.random() * pool.length)];
  practiceSession = {
    topicId,
    exercise: next,
    startedAt: Date.now(),
    visibleHints: [],
    attempts: 0,
    result: null
  };
}

function renderSettings() {
  const prefs = state.preferences?.srs || { concept: true, formula: true, mistake: true };
  const enabledCards = state.srsCards.filter((card) => card.enabled).length;
  return html`
    <div class="grid">
      <section class="panel wide">
        <span class="eyebrow">Perkėlimas be paskyros</span>
        <h2>Eksportuok arba importuok progresą</h2>
        <textarea id="transfer-code" placeholder="Čia atsiras eksportavimo kodas arba įklijuok importo kodą"></textarea>
        <div class="actions">
          <button class="primary" data-action="export">Eksportuoti</button>
          <button data-action="import">Importuoti</button>
        </div>
      </section>
      <section class="panel">
        <span class="eyebrow">SRS nustatymai</span>
        <p class="muted">Pasirink, ką programa dės į teorijos kartojimą. Praktikos klaidos į korteles patenka automatiškai po neteisingų atsakymų.</p>
        <label class="check"><input type="checkbox" ${prefs.concept ? "checked" : ""} data-setting="concept" /> Sąvokos</label>
        <label class="check"><input type="checkbox" ${prefs.formula ? "checked" : ""} data-setting="formula" /> Formulės</label>
        <label class="check"><input type="checkbox" ${prefs.mistake ? "checked" : ""} data-setting="mistake" /> Tipinės klaidos</label>
        <p class="muted">${enabledCards} aktyvios kortelės.</p>
      </section>
      <section class="panel">
        <span class="eyebrow">Turinys</span>
        <h3>${Object.keys(topics).length} temos</h3>
        <p>${Object.keys(concepts).length} sąvokos, ${exercises.length} užduočių, ${tests.length} testų. Turinys veikia lokaliai ir yra saugomas naršyklėje.</p>
      </section>
      <section class="panel danger-zone">
        <span class="eyebrow">Sesija</span>
        <h3>Pradėti iš naujo</h3>
        <p>Ištrina progresą šiame įrenginyje ir vėl parodo onboardingą. Perkėlimo kodai kituose įrenginiuose neliečiami.</p>
        <button data-action="reset-progress">Ištrinti vietinį progresą</button>
      </section>
    </div>
  `;
}

function bindEvents() {
  app.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", () => navigate(el.dataset.nav, el.dataset.id || ""));
  });
  app.querySelectorAll("[data-concept]").forEach((el) => {
    el.addEventListener("click", () => navigate("glossary", el.dataset.concept));
  });
  app.querySelectorAll("[data-onboarding-field]").forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.onboardingField;
      let value = button.dataset.onboardingValue;
      if (value === "true") value = true;
      if (value === "false") value = false;
      if (["grade", "dailyMinutes"].includes(field)) value = Number(value);
      onboardingDraft = { ...onboardingDraft, [field]: value };
      render();
    });
  });
  app.querySelectorAll(".practice-card .answer-input").forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const button = input.closest(".practice-card")?.querySelector('[data-action="submit-answer"]');
      button?.click();
    });
  });
  app.querySelectorAll("[data-srs]").forEach((button) => {
    button.addEventListener("click", () => {
      const srsCards = state.srsCards.map((card) => card.id === button.dataset.card ? scheduleCard(card, button.dataset.srs) : card);
      setState({ ...state, srsCards, achievements: [...new Set([...state.achievements, "firstSrs"])] });
    });
  });
  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button));
  });
  app.querySelectorAll("[data-setting]").forEach((input) => {
    input.addEventListener("change", () => {
      const preferences = {
        ...state.preferences,
        srs: { ...state.preferences.srs, [input.dataset.setting]: input.checked }
      };
      const next = { ...state, preferences, srsCards: applySrsPreferences(state.srsCards, preferences.srs) };
      setState(next);
      toast("SRS nustatymai atnaujinti.");
    });
  });
}

function handleAction(button) {
  const action = button.dataset.action;
  if (action === "onboarding-back") {
    onboardingDraft = { ...onboardingDraft, step: Math.max(0, onboardingDraft.step - 1) };
    render();
  }
  if (action === "onboarding-next") {
    onboardingDraft = { ...onboardingDraft, step: Math.min(onboardingSteps().length - 1, onboardingDraft.step + 1) };
    render();
  }
  if (action === "onboarding-finish") {
    const next = {
      ...state,
      profile: {
        onboarded: true,
        goal: onboardingDraft.goal,
        grade: onboardingDraft.grade,
        confidence: onboardingDraft.confidence,
        dailyMinutes: onboardingDraft.dailyMinutes,
        olympiad: onboardingDraft.olympiad,
        diagnostic: onboardingDraft.diagnostic
      },
      achievements: [...new Set([...state.achievements, "onboarded"])],
      activeTopicId: DEFAULT_TOPIC_ID
    };
    setState(next);
    navigate("topic", DEFAULT_TOPIC_ID);
  }
  if (action === "mark-theory") {
    setState({ ...state, achievements: [...new Set([...state.achievements, "firstTheory"])], activeTopicId: button.dataset.topic });
    toast("Teorija pažymėta. SRS kortelės jau laukia.");
  }
  if (action === "hint" && practiceSession) {
    const nextHint = practiceSession.exercise.hints[practiceSession.visibleHints.length];
    if (nextHint) practiceSession.visibleHints.push(nextHint);
    render();
  }
  if (action === "next-exercise") {
    startPractice(button.dataset.topic || state.activeTopicId);
    render();
  }
  if (action === "toggle-srs-card") {
    const cardId = button.dataset.card;
    const srsCards = state.srsCards.map((card) => card.id === cardId ? { ...card, enabled: !card.enabled } : card);
    setState({ ...state, srsCards });
    toast("Kortelės būsena pakeista.");
  }
  if (action === "start-test") {
    startTest(button.dataset.test, button.dataset.topic || state.activeTopicId);
    render();
  }
  if (action === "test-prev" && testSession) {
    saveCurrentTestAnswer();
    testSession.index = Math.max(0, testSession.index - 1);
    render();
  }
  if (action === "test-next" && testSession) {
    saveCurrentTestAnswer();
    testSession.index = Math.min(testSession.items.length - 1, testSession.index + 1);
    render();
  }
  if (action === "finish-test") finishTest();
  if (action === "cancel-test") {
    testSession = null;
    toast("Testas nutrauktas.");
    navigate("tests", state.activeTopicId);
  }
  if (action === "submit-answer") submitAnswer();
  if (action === "export") exportProgress();
  if (action === "import") importProgress();
  if (action === "reset-progress") {
    resetState().then((initial) => {
      state = initial;
      onboardingDraft = {
        step: 0,
        goal: goals[0],
        grade: 9,
        confidence: "Vidutiniškai",
        dailyMinutes: 20,
        olympiad: false,
        diagnostic: true
      };
      practiceSession = null;
      testSession = null;
      toast("Vietinis progresas ištrintas.");
      navigate("onboarding");
    });
  }
}

function submitAnswer() {
  if (!practiceSession) return;
  const input = app.querySelector("[name='answer']:checked") || app.querySelector("[name='answer']");
  const value = (input?.value || "").trim();
  if (!value) {
    toast("Įrašyk arba pasirink atsakymą.");
    return;
  }
  const exercise = practiceSession.exercise;
  const correct = isCorrectAnswer(exercise, value);
  practiceSession.attempts += 1;
  practiceSession.result = { correct };
  const next = recordAttempt(state, exercise, {
    correct,
    seconds: Math.round((Date.now() - practiceSession.startedAt) / 1000),
    hintsUsed: practiceSession.visibleHints.length,
    attempts: practiceSession.attempts
  });
  state = next;
  saveState(state);
  render();
}

function normalize(value) {
  return String(value).toLowerCase().replace(/\s+/g, "").replace(",", ".");
}

function isCorrectAnswer(exercise, value) {
  if (Number.isFinite(Number(value)) && Number.isFinite(Number(exercise.answer)) && Number(exercise.answerTolerance || 0) > 0) {
    return Math.abs(Number(value) - Number(exercise.answer)) <= Number(exercise.answerTolerance);
  }
  const accepted = exercise.acceptedAnswers?.length ? exercise.acceptedAnswers : [exercise.answer];
  return accepted.some((answer) => normalize(value) === normalize(answer));
}

function escapeAttr(value) {
  return value.replaceAll('"', "&quot;");
}

function exportProgress() {
  const textarea = app.querySelector("#transfer-code");
  textarea.value = encodeProgress(state);
  textarea.select();
  toast("Progreso kodas paruoštas.");
}

function importProgress() {
  const textarea = app.querySelector("#transfer-code");
  try {
    const imported = decodeProgress(textarea.value.trim());
    setState(imported);
    toast("Progresas importuotas.");
  } catch (error) {
    toast(error.message || "Nepavyko importuoti.");
  }
}

function toast(message) {
  const region = app.querySelector("#toast-region");
  if (!region) return;
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  region.append(item);
  setTimeout(() => item.remove(), 3000);
}

render();
