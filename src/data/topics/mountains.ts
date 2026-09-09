import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "mountains",
    che: P("Лаьмнаш а, хиш а"),
    ru: "Горы и реки",
    emoji: "🏔️",
    gradient: "from-cyan-200 to-indigo-500",
    accent: "#0EA5E9",
    unlockStars: 60,
    map: { x: 45, y: 8 },
  },
];

export const CARDS: Card[] = [
  { id: "lam", topicId: "mountains", che: P("лам"), ru: "гора", emoji: "⛰️", level: 1, source: "corpus" },
  { id: "hi2", topicId: "mountains", che: P("хи"), ru: "река", emoji: "🌊", level: 1, source: "corpus" },
  { id: "1am", topicId: "mountains", che: P("1ам"), ru: "озеро", emoji: "🏞️", level: 1, source: "corpus" },
  { id: "are", topicId: "mountains", che: P("аре"), ru: "поле, равнина", emoji: "🌾", level: 1, source: "corpus" },
  { id: "shovda", topicId: "mountains", che: P("шовда"), ru: "родник", emoji: "💦", level: 2, source: "corpus" },
  { id: "1in", topicId: "mountains", che: P("1ин"), ru: "ущелье", emoji: "🏞️", level: 2, source: "corpus" },
  { id: "berd", topicId: "mountains", che: P("берд"), ru: "берег, обрыв", emoji: "🪨", level: 2, source: "corpus" },
  { id: "hekh", topicId: "mountains", che: P("хьех"), ru: "пещера", emoji: "🕳️", level: 2, source: "corpus" },
  { id: "sha", topicId: "mountains", che: P("ша"), ru: "лёд", emoji: "🧊", level: 1, source: "corpus" },
  { id: "duq", topicId: "mountains", che: P("дукъ"), ru: "хребет", emoji: "🗻", level: 3, source: "dictionary" },
  { id: "g1ayre", topicId: "mountains", che: P("г1айре"), ru: "остров", emoji: "🏝️", level: 2, source: "corpus" },
  { id: "tog1i", topicId: "mountains", che: P("тог1и"), ru: "долина", emoji: "🌄", level: 2, source: "corpus" },
  { id: "mokhk", topicId: "mountains", che: P("мохк"), ru: "край, страна", emoji: "🗺️", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];