import { createInitialState, normalizeState } from "./systems.js";

const DB_NAME = "noriu-mokyti";
const STORE = "state";
const KEY = "progress";

function openDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB unavailable"));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function idbGet() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(KEY);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbSet(value) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(value, KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadState() {
  try {
    const value = await idbGet();
    if (value) return normalizeState(value);
  } catch {
    const raw = localStorage.getItem("noriu-mokyti-progress");
    if (raw) return normalizeState(JSON.parse(raw));
  }
  const initial = createInitialState();
  await saveState(initial);
  return initial;
}

export async function saveState(state) {
  const next = normalizeState({ ...state, updatedAt: Date.now() });
  try {
    await idbSet(next);
  } catch {
    localStorage.setItem("noriu-mokyti-progress", JSON.stringify(next));
  }
}

export async function resetState() {
  const initial = createInitialState();
  await saveState(initial);
  return initial;
}
