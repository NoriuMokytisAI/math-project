import Dexie, { type Table } from 'dexie';
import { createInitialState, normalizeState } from './systems';
import { State } from './types';

class ProgressDatabase extends Dexie {
  state!: Table<{ key: string; value: any }, string>;

  constructor() {
    super('noriu-mokyti');
    this.version(1).stores({
      state: 'key'
    });
  }
}

const db = new ProgressDatabase();
const KEY = 'progress';

export async function loadState(): Promise<State> {
  try {
    const record = await db.state.get(KEY);
    if (record && record.value) {
      return normalizeState(record.value);
    }
  } catch (err) {
    console.warn("IndexedDB load failed, falling back to localStorage", err);
    try {
      const raw = localStorage.getItem("noriu-mokyti-progress");
      if (raw) return normalizeState(JSON.parse(raw));
    } catch (e) {
      console.error("localStorage load failed", e);
    }
  }
  const initial = createInitialState();
  await saveState(initial);
  return initial;
}

export async function saveState(state: State): Promise<void> {
  const next = normalizeState({ ...state, updatedAt: Date.now() });
  try {
    await db.state.put({ key: KEY, value: next });
  } catch (err) {
    console.warn("IndexedDB save failed, falling back to localStorage", err);
    try {
      localStorage.setItem("noriu-mokyti-progress", JSON.stringify(next));
    } catch (e) {
      console.error("localStorage save failed", e);
    }
  }
}

export async function resetState(): Promise<State> {
  const initial = createInitialState();
  await saveState(initial);
  return initial;
}
