import Dexie, { type Table } from 'dexie';
import { createInitialState, normalizeState } from './systems';
import { State } from './types';

class OldProgressDatabase extends Dexie {
  state!: Table<{ key: string; value: any }, string>;

  constructor() {
    super('noriu-mokyti');
    this.version(1).stores({
      state: 'key'
    });
  }
}

class ProgressDatabase extends Dexie {
  state!: Table<{ key: string; value: any }, string>;

  constructor() {
    super('noriu-mokytis');
    this.version(1).stores({
      state: 'key'
    });
  }
}

const db = new ProgressDatabase();
const oldDb = new OldProgressDatabase();
const KEY = 'progress';

export async function loadState(): Promise<State> {
  try {
    const record = await db.state.get(KEY);
    if (record && record.value) {
      return normalizeState(record.value);
    }

    // Try migrating from the old database
    const oldRecord = await oldDb.state.get(KEY).catch(() => null);
    if (oldRecord && oldRecord.value) {
      const state = normalizeState(oldRecord.value);
      await saveState(state);
      console.log("Successfully migrated progress from IndexedDB 'noriu-mokyti' to 'noriu-mokytis'");
      return state;
    }
  } catch (err) {
    console.warn("IndexedDB load/migration failed, falling back to localStorage", err);
  }

  try {
    const raw = localStorage.getItem("noriu-mokytis-progress");
    if (raw) return normalizeState(JSON.parse(raw));

    // Try migrating from the old localStorage key
    const rawOld = localStorage.getItem("noriu-mokyti-progress");
    if (rawOld) {
      const state = normalizeState(JSON.parse(rawOld));
      localStorage.setItem("noriu-mokytis-progress", JSON.stringify(state));
      await db.state.put({ key: KEY, value: state }).catch(() => null);
      console.log("Successfully migrated progress from localStorage 'noriu-mokyti-progress' to 'noriu-mokytis-progress'");
      return state;
    }
  } catch (e) {
    console.error("localStorage load/migration failed", e);
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
  }
  try {
    localStorage.setItem("noriu-mokytis-progress", JSON.stringify(next));
  } catch (e) {
    console.error("localStorage save failed", e);
  }
}

export async function resetState(): Promise<State> {
  const initial = createInitialState();
  await saveState(initial);
  return initial;
}
