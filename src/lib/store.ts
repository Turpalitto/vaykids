"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AgeGroup = "small" | "middle" | "big";
export type TextSize = "md" | "lg" | "xl";
export type SyncStatus = "idle" | "syncing" | "offline";

export interface Settings {
  volume: number;
  music: boolean;
  sounds: boolean;
  notifications: boolean;
  textSize: TextSize;
  contrast: boolean;
}

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  ageGroup: AgeGroup;
  createdAt: number;
}

export interface Progress {
  learned: string[];
  favorites: string[];
  stars: number;
  xp: number;
  medals: string[];
  streakCount: number;
  streakLast: string | null;
  giftDate: string | null;
  dailyDate: string | null;
  decor: string[];
  animals: string[];
  gamesPlayed: number;
  /** Number of times a card was opened; kept for a future spaced-repetition queue. */
  seen: Record<string, number>;
}

export const emptyProgress = (): Progress => ({
  learned: [],
  favorites: [],
  stars: 0,
  xp: 0,
  medals: [],
  streakCount: 0,
  streakLast: null,
  giftDate: null,
  dailyDate: null,
  decor: [],
  animals: [],
  gamesPlayed: 0,
  seen: {},
});

type Medal = { id: string; emoji: string; che: string; ru: string; check: (p: Progress) => boolean };
const medalsRaw: Medal[] = [
  { id: "first", emoji: "🎉", che: "Дуьххьарлера ловзар", ru: "Первая игра", check: (p) => p.gamesPlayed >= 1 },
  { id: "w10", emoji: "🌱", che: "10 дош", ru: "10 слов", check: (p) => p.learned.length >= 10 },
  { id: "w25", emoji: "🌿", che: "25 дош", ru: "25 слов", check: (p) => p.learned.length >= 25 },
  { id: "w50", emoji: "🌳", che: "50 дош", ru: "50 слов", check: (p) => p.learned.length >= 50 },
  { id: "w100", emoji: "🏔️", che: "100 дош", ru: "100 слов", check: (p) => p.learned.length >= 100 },
  { id: "s50", emoji: "⭐", che: "50 седа", ru: "50 звёзд", check: (p) => p.stars >= 50 },
  { id: "s200", emoji: "🌟", che: "200 седа", ru: "200 звёзд", check: (p) => p.stars >= 200 },
  { id: "streak3", emoji: "🔥", che: "3 де", ru: "3 дня подряд", check: (p) => p.streakCount >= 3 },
  { id: "streak7", emoji: "🏅", che: "7 де", ru: "7 дней подряд", check: (p) => p.streakCount >= 7 },
  { id: "animals5", emoji: "🦊", che: "5 дийнат", ru: "5 животных", check: (p) => p.animals.length >= 5 },
  { id: "games20", emoji: "🎮", che: "20 ловзар", ru: "20 игр", check: (p) => p.gamesPlayed >= 20 },
  { id: "fav5", emoji: "💛", che: "5 дукхадеза", ru: "5 любимых", check: (p) => p.favorites.length >= 5 },
];
export const MEDALS: Medal[] = medalsRaw.map((m) => ({ ...m, che: m.che.replace(/1/g, "Ӏ") }));

export const DECOR_ITEMS: { id: string; emoji: string; che: string; cost: number; x: number; y: number }[] = [
  { id: "flower1", emoji: "🌷", che: "Зезаг", cost: 10, x: 18, y: 78 },
  { id: "flower2", emoji: "🌻", che: "Зезаг", cost: 15, x: 30, y: 84 },
  { id: "tree", emoji: "🌳", che: "Дитт", cost: 25, x: 82, y: 55 },
  { id: "apple", emoji: "🍎", che: "1аж", cost: 30, x: 84, y: 48 },
  { id: "cat", emoji: "🐱", che: "Цициг", cost: 40, x: 55, y: 80 },
  { id: "bird", emoji: "🐦", che: "Олхазар", cost: 50, x: 45, y: 25 },
  { id: "horse", emoji: "🐴", che: "Говр", cost: 70, x: 70, y: 82 },
  { id: "sun", emoji: "🌞", che: "Малх", cost: 90, x: 88, y: 12 },
  { id: "tower", emoji: "🗼", che: "Б1ав", cost: 120, x: 12, y: 40 },
  { id: "rainbow", emoji: "🌈", che: "Стела1ад", cost: 160, x: 50, y: 12 },
].map((d) => ({ ...d, che: d.che.replace(/1/g, "Ӏ") }));

export const ANIMAL_IDS = [
  "borz", "cha", "cxogal", "phagal", "govr", "yett", "gaza", "uestag1", "cicig", "zh1aela",
  "kotam", "n1aena", "olkhazar", "ch1ara", "aerzu", "lom", "pil", "say", "vir", "kkhokkha",
];

export const levelFromXp = (xp: number) => Math.floor(Math.sqrt(Math.max(0, xp) / 25)) + 1;
export const xpForLevel = (lvl: number) => Math.max(0, (lvl - 1) ** 2 * 25);

/** Local calendar dates, not UTC dates: streaks must follow the child's device. */
const dateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const todayKey = () => dateKey();
const yesterdayKey = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return dateKey(date);
};

const DEFAULT_SETTINGS: Settings = {
  volume: 0.8,
  music: true,
  sounds: true,
  notifications: false,
  textSize: "md",
  contrast: false,
};

const isRecord = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;
const stringArray = (value: unknown, max = 1000) =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item.length > 0).slice(0, max) : [];
const safeNumber = (value: unknown, fallback: number, max = Number.MAX_SAFE_INTEGER) =>
  typeof value === "number" && Number.isFinite(value) ? Math.min(max, Math.max(0, Math.floor(value))) : fallback;

export const sanitizeProgress = (value: unknown): Progress => {
  const raw = isRecord(value) ? value : {};
  const seen: Record<string, number> = {};
  if (isRecord(raw.seen)) {
    for (const [id, count] of Object.entries(raw.seen)) {
      if (id && typeof count === "number" && Number.isFinite(count) && count >= 0) seen[id] = Math.min(1_000_000, Math.floor(count));
    }
  }
  const date = (candidate: unknown) => (typeof candidate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(candidate) ? candidate : null);
  return {
    learned: stringArray(raw.learned),
    favorites: stringArray(raw.favorites),
    stars: safeNumber(raw.stars, 0, 1_000_000),
    xp: safeNumber(raw.xp, 0, 10_000_000),
    medals: stringArray(raw.medals, 100),
    streakCount: safeNumber(raw.streakCount, 0, 10_000),
    streakLast: date(raw.streakLast),
    giftDate: date(raw.giftDate),
    dailyDate: date(raw.dailyDate),
    decor: stringArray(raw.decor, 100),
    animals: stringArray(raw.animals, 100),
    gamesPlayed: safeNumber(raw.gamesPlayed, 0, 1_000_000),
    seen,
  };
};

const sanitizeSettings = (value: unknown): Settings => {
  const raw = isRecord(value) ? value : {};
  return {
    ...DEFAULT_SETTINGS,
    volume: typeof raw.volume === "number" && Number.isFinite(raw.volume) ? Math.min(1, Math.max(0, raw.volume)) : DEFAULT_SETTINGS.volume,
    music: typeof raw.music === "boolean" ? raw.music : DEFAULT_SETTINGS.music,
    sounds: typeof raw.sounds === "boolean" ? raw.sounds : DEFAULT_SETTINGS.sounds,
    notifications: typeof raw.notifications === "boolean" ? raw.notifications : DEFAULT_SETTINGS.notifications,
    textSize: raw.textSize === "lg" || raw.textSize === "xl" ? raw.textSize : "md",
    contrast: typeof raw.contrast === "boolean" ? raw.contrast : DEFAULT_SETTINGS.contrast,
  };
};

const sanitizeProfile = (value: unknown): Profile | null => {
  if (!isRecord(value) || typeof value.id !== "string" || !value.id || typeof value.name !== "string") return null;
  const ageGroup: AgeGroup = value.ageGroup === "middle" || value.ageGroup === "big" ? value.ageGroup : "small";
  return {
    id: value.id.slice(0, 64),
    name: value.name.slice(0, 40) || "Игрок",
    avatar: typeof value.avatar === "string" ? value.avatar.slice(0, 24) : "🦊",
    ageGroup,
    createdAt: typeof value.createdAt === "number" ? value.createdAt : Date.now(),
  };
};

interface State {
  hydrated: boolean;
  settings: Settings;
  profiles: Profile[];
  activeId: string | null;
  progress: Record<string, Progress>;
  syncStatus: SyncStatus;
  lastSyncedAt: number | null;
  lastResult: { stars: number; correct: number; total: number; game: string; newMedals: string[]; newAnimal?: string } | null;

  setHydrated: () => void;
  setSettings: (s: Partial<Settings>) => void;
  createProfile: (p: Omit<Profile, "id" | "createdAt">) => string;
  deleteProfile: (id: string) => void;
  setActive: (id: string) => void;
  active: () => Progress;
  update: (fn: (p: Progress) => Progress) => void;
  markSeen: (cardId: string) => void;
  markLearned: (cardId: string, on?: boolean) => void;
  toggleFavorite: (cardId: string) => void;
  finishGame: (r: { game: string; correct: number; total: number; cardIds: string[] }) => void;
  claimGift: () => number;
  buyDecor: (id: string) => boolean;
  resetProgress: () => void;
}

type PersistedState = Pick<State, "settings" | "profiles" | "activeId" | "progress">;

const migratePersisted = (value: unknown): PersistedState => {
  const raw = isRecord(value) ? value : {};
  const rawProfiles = Array.isArray(raw.profiles) ? raw.profiles : [];
  const profiles = rawProfiles.map(sanitizeProfile).filter((profile): profile is Profile => profile !== null);
  const rawProgress = isRecord(raw.progress) ? raw.progress : {};
  const progress: Record<string, Progress> = {};
  for (const profile of profiles) progress[profile.id] = sanitizeProgress(rawProgress[profile.id]);
  const activeId = typeof raw.activeId === "string" && profiles.some((profile) => profile.id === raw.activeId) ? raw.activeId : profiles[0]?.id ?? null;
  return { settings: sanitizeSettings(raw.settings), profiles, activeId, progress };
};

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      hydrated: false,
      settings: DEFAULT_SETTINGS,
      profiles: [],
      activeId: null,
      progress: {},
      syncStatus: "idle",
      lastSyncedAt: null,
      lastResult: null,

      setHydrated: () => set({ hydrated: true }),
      setSettings: (s) => set((st) => ({ settings: sanitizeSettings({ ...st.settings, ...s }) })),

      createProfile: (p) => {
        const id = uid();
        const profile: Profile = { ...p, id, createdAt: Date.now() };
        set((st) => ({
          profiles: [...st.profiles, profile],
          progress: { ...st.progress, [id]: emptyProgress() },
          activeId: id,
          syncStatus: "syncing",
        }));
        void fetch("/api/profiles", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id, ...p }),
        }).then((response) => {
          if (!response.ok) throw new Error("profile_sync_failed");
          useStore.setState({ syncStatus: "idle", lastSyncedAt: Date.now() });
        }).catch(() => useStore.setState({ syncStatus: "offline" }));
        return id;
      },
      deleteProfile: (id) => {
        const existed = get().profiles.some((profile) => profile.id === id);
        if (!existed) return;
        set((st) => {
          const profiles = st.profiles.filter((p) => p.id !== id);
          const progress = { ...st.progress };
          delete progress[id];
          return {
            profiles,
            progress,
            activeId: st.activeId === id ? profiles[0]?.id ?? null : st.activeId,
            lastResult: null,
          };
        });
        void fetch(`/api/profiles?id=${encodeURIComponent(id)}`, { method: "DELETE" })
          .then((response) => {
            if (!response.ok) throw new Error("profile_delete_failed");
            useStore.setState({ syncStatus: "idle", lastSyncedAt: Date.now() });
          })
          .catch(() => useStore.setState({ syncStatus: "offline" }));
      },
      setActive: (id) => {
        if (get().profiles.some((profile) => profile.id === id)) set({ activeId: id, lastResult: null });
      },
      active: () => {
        const { activeId, progress } = get();
        return (activeId && progress[activeId]) || emptyProgress();
      },
      update: (fn) => {
        const { activeId } = get();
        if (!activeId) return;
        set((st) => {
          const prev = st.progress[activeId] ?? emptyProgress();
          let next = sanitizeProgress(fn(prev));
          // Серии занятий мягкие: новый день продолжает серию только со вчерашнего дня.
          const t = todayKey();
          if (next.streakLast !== t) {
            const cont = next.streakLast === yesterdayKey();
            next = { ...next, streakLast: t, streakCount: cont ? next.streakCount + 1 : 1 };
          }
          const medals = MEDALS.filter((m) => m.check(next)).map((m) => m.id);
          next = { ...next, medals };
          return { progress: { ...st.progress, [activeId]: next } };
        });
        syncProgress();
      },
      markSeen: (cardId) => get().update((p) => ({ ...p, seen: { ...p.seen, [cardId]: (p.seen[cardId] ?? 0) + 1 } })),
      markLearned: (cardId, on) =>
        get().update((p) => {
          const has = p.learned.includes(cardId);
          const want = on ?? !has;
          if (want === has) return p;
          return {
            ...p,
            learned: want ? [...p.learned, cardId] : p.learned.filter((c) => c !== cardId),
            stars: want ? p.stars + 1 : p.stars,
            xp: want ? p.xp + 5 : p.xp,
            animals: want && ANIMAL_IDS.includes(cardId) && !p.animals.includes(cardId) ? [...p.animals, cardId] : p.animals,
          };
        }),
      toggleFavorite: (cardId) =>
        get().update((p) => ({
          ...p,
          favorites: p.favorites.includes(cardId) ? p.favorites.filter((c) => c !== cardId) : [...p.favorites, cardId],
        })),
      finishGame: ({ game, correct, total, cardIds }) => {
        const before = get().active();
        const earned = Math.max(1, Math.round((correct / Math.max(1, total)) * 5));
        const t = todayKey();
        let newAnimal: string | undefined;
        get().update((p) => {
          const learned = [...p.learned];
          const animals = [...p.animals];
          if (correct / Math.max(1, total) >= 0.6) {
            for (const id of cardIds) {
              if (!learned.includes(id)) learned.push(id);
              if (ANIMAL_IDS.includes(id) && !animals.includes(id)) {
                animals.push(id);
                newAnimal = newAnimal ?? id;
              }
            }
          }
          return {
            ...p,
            learned,
            animals,
            stars: p.stars + earned + (learned.length - p.learned.length),
            xp: p.xp + earned * 4 + correct * 2,
            gamesPlayed: p.gamesPlayed + 1,
            dailyDate: game === "daily" ? t : p.dailyDate,
          };
        });
        const after = get().active();
        set({
          lastResult: {
            stars: after.stars - before.stars,
            correct,
            total,
            game,
            newMedals: after.medals.filter((m) => !before.medals.includes(m)),
            newAnimal,
          },
        });
      },
      claimGift: () => {
        const t = todayKey();
        const p = get().active();
        if (p.giftDate === t) return 0;
        const amount = 3 + Math.min(7, p.streakCount);
        get().update((q) => ({ ...q, giftDate: t, stars: q.stars + amount, xp: q.xp + 5 }));
        return amount;
      },
      buyDecor: (id) => {
        const item = DECOR_ITEMS.find((d) => d.id === id);
        const p = get().active();
        if (!item || p.decor.includes(id) || p.stars < item.cost) return false;
        get().update((q) => ({ ...q, decor: [...q.decor, id], stars: q.stars - item.cost }));
        return true;
      },
      resetProgress: () => {
        const { activeId } = get();
        if (!activeId) return;
        set((st) => ({ progress: { ...st.progress, [activeId]: emptyProgress() }, lastResult: null }));
        syncProgress();
      },
    }),
    {
      name: "nokhchiin-mott-v1",
      version: 2,
      skipHydration: true,
      partialize: (s): PersistedState => ({ settings: s.settings, profiles: s.profiles, activeId: s.activeId, progress: s.progress }),
      migrate: (persisted) => migratePersisted(persisted),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.warn("Local progress could not be restored", error);
          useStore.setState({ hydrated: true });
          return;
        }
        state?.setHydrated();
      },
    },
  ),
);

let syncTimer: ReturnType<typeof setTimeout> | null = null;
let syncInFlight = false;

/** Retry a local snapshot after reconnecting or returning to the app. */
export function syncNow() {
  if (typeof window === "undefined" || syncInFlight) return;
  if (typeof navigator !== "undefined" && !navigator.onLine) {
    useStore.setState({ syncStatus: "offline" });
    return;
  }
  const { activeId, progress, profiles } = useStore.getState();
  if (!activeId || !progress[activeId]) return;
  const profile = profiles.find((p) => p.id === activeId);
  syncInFlight = true;
  useStore.setState({ syncStatus: "syncing" });
  void fetch("/api/progress", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ profileId: activeId, profile, data: progress[activeId] }),
  }).then((response) => {
    if (!response.ok) throw new Error("progress_sync_failed");
    useStore.setState({ syncStatus: "idle", lastSyncedAt: Date.now() });
  }).catch(() => {
    useStore.setState({ syncStatus: "offline" });
  }).finally(() => {
    syncInFlight = false;
  });
}

function syncProgress() {
  if (typeof window === "undefined") return;
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncTimer = null;
    syncNow();
  }, 1500);
}

/** Вызывать один раз на клиенте: гидратация из localStorage после монтирования. */
let hydrationStarted = false;
export function useHydrate() {
  useEffect(() => {
    if (useStore.getState().hydrated || hydrationStarted) return;
    hydrationStarted = true;
    void Promise.resolve(useStore.persist.rehydrate()).catch(() => {
      useStore.setState({ hydrated: true });
    });
  }, []);
}

export const isUnlocked = (p: Progress, unlockStars: number) => p.stars + p.learned.length * 2 >= unlockStars;
export const todayStr = todayKey;
