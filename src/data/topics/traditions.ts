import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "traditions",
    che: P("Къоман х1уманаш"),
    ru: "Традиционные предметы",
    emoji: "🏰",
    gradient: "from-stone-300 to-amber-600",
    accent: "#B45309",
    unlockStars: 50,
    map: { x: 62, y: 20 },
  },
];

export const CARDS: Card[] = [
  { id: "b1av", topicId: "traditions", che: P("б1ав"), ru: "боевая башня", emoji: "🗼", level: 1, source: "dictionary" },
  { id: "pheg1a", topicId: "traditions", che: P("пхьег1а"), ru: "посуда", emoji: "🍽️", level: 2, source: "corpus" },
  { id: "shaelta", topicId: "traditions", che: P("шаьлта"), ru: "кинжал", emoji: "🗡️", level: 2, source: "corpus" },
  { id: "pondar", topicId: "traditions", che: P("пондар"), ru: "пондар (муз. инструмент)", emoji: "🪕", level: 1, source: "corpus" },
  { id: "vota", topicId: "traditions", che: P("вота"), ru: "барабан", emoji: "🥁", level: 1, source: "corpus" },
  { id: "istang", topicId: "traditions", che: P("истанг"), ru: "войлочный ковёр", emoji: "🧶", level: 2, source: "dictionary" },
  { id: "verta", topicId: "traditions", che: P("верта"), ru: "бурка", emoji: "🧥", level: 2, source: "dictionary" },
  { id: "k1udal", topicId: "traditions", che: P("к1удал"), ru: "кувшин", emoji: "🏺", level: 2, source: "corpus" },
  { id: "khaba", topicId: "traditions", che: P("кхаба"), ru: "глиняный кувшин", emoji: "🫙", level: 2, source: "corpus" },
  { id: "choa", topicId: "traditions", che: P("чоа"), ru: "черкеска", emoji: "🥋", level: 3, source: "dictionary", review: "Подтвердить написание (чоа / чокхи)" },
  { id: "yurt", topicId: "traditions", che: P("юрт"), ru: "село, аул", emoji: "🏘️", level: 1, source: "corpus" },
  { id: "g1ala", topicId: "traditions", che: P("г1ала"), ru: "город", emoji: "🏙️", level: 1, source: "corpus" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];