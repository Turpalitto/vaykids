"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AgeGroup = "small" | "middle" | "big";
export type TextSize = "md" | "lg" | "xl";

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

export const levelFromXp = (xp: number) => Math.floor(Math.sqrt(xp / 25)) + 1;
export const xpForLevel = (lvl: number) => (lvl - 1) ** 2 * 25;

const todayKey = () => new Date().toISOString().slice(0, 10);
const yesterdayKey = () => new Date(Date.now() - 86400000).toISOString().slice(0, 10);

interface State {
  hydrated: boolean;
  settings: Settings;
  profiles: Profile[];
  activeId: string | null;
  progress: Record<string, Progress>;
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

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      hydrated: false,
      settings: { volume: 0.8, music: true, sounds: true, notifications: false, textSize: "md", contrast: false },
      profiles: [],
      activeId: null,
      progress: {},
      lastResult: null,

      setHydrated: () => set({ hydrated: true }),
      setSettings: (s) => set((st) => ({ settings: { ...st.settings, ...s } })),

      createProfile: (p) => {
        const id = uid();
        set((st) => ({
          profiles: [...st.profiles, { ...p, id, createdAt: Date.now() }],
          progress: { ...st.progress, [id]: emptyProgress() },
          activeId: id,
        }));
        void fetch("/api/profiles", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id, ...p }),
        }).catch(() => {});
        return id;
      },
      deleteProfile: (id) =>
        set((st) => {
          const profiles = st.profiles.filter((p) => p.id !== id);
          const progress = { ...st.progress };
          delete progress[id];
          return { profiles, progress, activeId: st.activeId === id ? profiles[0]?.id ?? null : st.activeId };
        }),
      setActive: (id) => set({ activeId: id }),
      active: () => {
        const { activeId, progress } = get();
        return (activeId && progress[activeId]) || emptyProgress();
      },
      update: (fn) => {
        const { activeId } = get();
        if (!activeId) return;
        set((st) => {
          const prev = st.progress[activeId] ?? emptyProgress();
          let next = fn(prev);
          // серии занятий — мягко, без наказаний
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
        set((st) => ({ progress: { ...st.progress, [activeId]: emptyProgress() } }));
        syncProgress();
      },
    }),
    {
      name: "nokhchiin-mott-v1",
      skipHydration: true,
      partialize: (s) => ({ settings: s.settings, profiles: s.profiles, activeId: s.activeId, progress: s.progress }),
      onRehydrateStorage: () => (state) => state?.setHydrated(),
    },
  ),
);

let syncTimer: ReturnType<typeof setTimeout> | null = null;
function syncProgress() {
  if (typeof window === "undefined") return;
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    const { activeId, progress, profiles } = useStore.getState();
    if (!activeId || !progress[activeId]) return;
    const profile = profiles.find((p) => p.id === activeId);
    void fetch("/api/progress", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ profileId: activeId, profile, data: progress[activeId] }),
    }).catch(() => {});
  }, 1500);
}

/** Вызывать один раз на клиенте: гидратация из localStorage после монтирования. */
export function useHydrate() {
  useEffect(() => {
    if (!useStore.getState().hydrated) void useStore.persist.rehydrate();
  }, []);
}

export const isUnlocked = (p: Progress, unlockStars: number) => p.stars + p.learned.length * 2 >= unlockStars;
export const todayStr = todayKey;
