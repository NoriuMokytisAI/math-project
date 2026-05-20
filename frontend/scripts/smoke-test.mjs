import { readFile } from "node:fs/promises";

const required = [
  "index.html",
  "manifest.webmanifest",
  "sw.js",
  "src/app.js",
  "src/content.js",
  "src/content.generated.js",
  "src/storage.js",
  "src/systems.js",
  "src/styles.css"
];

for (const file of required) {
  const content = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  if (!content.trim()) throw new Error(`${file} is empty`);
}

const app = await readFile(new URL("../src/app.js", import.meta.url), "utf8");
for (const token of ["renderDashboard", "renderTopic", "renderSrsReview", "renderTests", "renderGlossary", "exportProgress", "importProgress"]) {
  if (!app.includes(token)) throw new Error(`Missing ${token}`);
}

const generated = await import("../src/content.generated.js");
if (Object.keys(generated.topics).length < 10) throw new Error("Generated topics are missing");
if (generated.exercises.length < 100) throw new Error("Generated exercises are missing");
if (generated.tests.length < 10) throw new Error("Generated tests are missing");
for (const topic of Object.values(generated.topics)) {
  for (const nextTopicId of topic.nextTopicIds || []) {
    if (!generated.topics[nextTopicId]) throw new Error(`Missing next topic ${nextTopicId}`);
  }
  for (const prerequisiteTopicId of topic.prerequisiteTopicIds || []) {
    if (!generated.topics[prerequisiteTopicId]) throw new Error(`Missing prerequisite topic ${prerequisiteTopicId}`);
  }
}

const systems = await import("../src/systems.js");
const initial = systems.createInitialState();
if (initial.srsCards.length !== 0) throw new Error("Fresh sessions must not pre-create SRS cards");

const conceptId = Object.keys(generated.concepts)[0];
const engaged = systems.ensureConceptSrsCard(initial, conceptId, initial.activeTopicId, 1_000);
if (engaged.srsCards.length !== 1) throw new Error("Concept engagement should create one SRS card");
const duplicate = systems.ensureConceptSrsCard(engaged, conceptId, initial.activeTopicId, 2_000);
if (duplicate.srsCards.length !== 1) throw new Error("Repeated concept engagement must not duplicate SRS cards");

const firstCard = duplicate.srsCards[0];
const again = systems.scheduleCard(firstCard, "again", duplicate.preferences.srs, 3_000);
if (again.queue !== "learning") throw new Error("Again should move a new card into learning");
if (again.due <= 3_000) throw new Error("Again should schedule a near future repeat");

const good = systems.scheduleCard(firstCard, "good", duplicate.preferences.srs, 3_000);
if (good.queue !== "learning") throw new Error("Good should advance a new card through learning steps first");

const oldAutoDeck = {
  ...initial,
  version: 2,
  srsCards: [
    { id: `theory-${conceptId}`, deck: "theory", sourceId: conceptId, cardType: "concept", front: "x", back: "x", due: 1, intervalDays: 0, ease: 2, reviewCount: 0, enabled: true }
  ]
};
if (systems.normalizeState(oldAutoDeck).srsCards.length !== 0) throw new Error("Migration should remove unreviewed auto-created theory cards");

console.log("Smoke test passed");
