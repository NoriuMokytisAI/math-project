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
for (const token of ["renderDashboard", "renderTopic", "renderSrs", "renderTests", "renderGlossary", "exportProgress", "importProgress"]) {
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
if (!initial.srsCards.some((card) => card.cardType === "formula")) throw new Error("Formula SRS cards are missing");
if (!initial.srsCards.some((card) => card.cardType === "mistake")) throw new Error("Mistake SRS cards are missing");

console.log("Smoke test passed");
