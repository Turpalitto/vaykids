import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "clothes",
    che: P("Бедар"),
    ru: "Одежда",
    emoji: "🧥",
    gradient: "from-sky-300 to-blue-400",
    accent: "#3B82F6",
    unlockStars: 25,
    map: { x: 20, y: 54 },
  },
];

export const CARDS: Card[] = [
  { id: "koch", topicId: "clothes", che: P("коч"), ru: "платье, рубашка", emoji: "👗", level: 1, source: "corpus" },
  { id: "hecha", topicId: "clothes", che: P("хеча"), ru: "брюки", emoji: "👖", level: 1, source: "dictionary" },
  { id: "machash", topicId: "clothes", che: P("мачаш"), ru: "обувь", emoji: "👟", level: 1, source: "corpus" },
  { id: "kuy", topicId: "clothes", che: P("куй"), ru: "шапка", emoji: "🧢", level: 1, source: "dictionary" },
  { id: "pazatash", topicId: "clothes", che: P("пазаташ"), ru: "носки", emoji: "🧦", level: 1, source: "dictionary" },
  { id: "yovlakh", topicId: "clothes", che: P("йовлакх"), ru: "платок", emoji: "🧕", level: 2, source: "corpus" },
  { id: "ketar", topicId: "clothes", che: P("кетар"), ru: "шуба, тулуп", emoji: "🧥", level: 2, source: "dictionary" },
  { id: "doehka", topicId: "clothes", che: P("доьхка"), ru: "пояс", emoji: "🥋", level: 2, source: "corpus" },
  { id: "bedar", topicId: "clothes", che: P("бедар"), ru: "одежда", emoji: "👕", level: 1, source: "corpus" },
  { id: "k1adi", topicId: "clothes", che: P("к1ади"), ru: "ткань", emoji: "🧵", level: 3, source: "corpus" },
  { id: "g1abali", topicId: "clothes", che: P("г1абали"), ru: "национальное платье", emoji: "👘", level: 3, source: "dictionary", review: "Уточнить написание и произношение у носителя" },
  { id: "maehsi", topicId: "clothes", che: P("маьхьси"), ru: "мягкие сапожки", emoji: "👢", level: 3, source: "dictionary", review: "Подтвердить у носителя" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];