import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "family",
    che: P("Доьзал"),
    ru: "Семья",
    emoji: "👨‍👩‍👧‍👦",
    gradient: "from-rose-300 to-pink-400",
    accent: "#F43F5E",
    unlockStars: 0,
    map: { x: 22, y: 85 },
  },
];

export const CARDS: Card[] = [
  { id: "nana", topicId: "family", che: P("нана"), ru: "мама", emoji: "👩", level: 1, source: "corpus" },
  { id: "da", topicId: "family", che: P("да"), ru: "папа", emoji: "👨", level: 1, source: "corpus" },
  { id: "yisha", topicId: "family", che: P("йиша"), ru: "сестра", emoji: "👧", level: 1, source: "corpus" },
  { id: "vasha", topicId: "family", che: P("ваша"), ru: "брат", emoji: "👦", level: 1, source: "corpus" },
  { id: "deda", topicId: "family", che: P("деда"), ru: "дедушка", emoji: "👴", level: 1, source: "dictionary" },
  { id: "nenana", topicId: "family", che: P("ненана"), ru: "бабушка", emoji: "👵", level: 1, source: "dictionary", review: "Проверить региональный вариант (ненана / денана / баба)" },
  { id: "ber", topicId: "family", che: P("бер"), ru: "ребёнок", emoji: "👶", level: 1, source: "corpus" },
  { id: "k1ant", topicId: "family", che: P("к1ант"), ru: "мальчик, сын", emoji: "🧒", level: 1, source: "corpus" },
  { id: "yo1", topicId: "family", che: P("йо1"), ru: "девочка, дочь", emoji: "👧", level: 1, source: "corpus" },
  { id: "doezal", topicId: "family", che: P("доьзал"), ru: "семья", emoji: "👨‍👩‍👧‍👦", level: 2, source: "corpus" },
  { id: "zuda", topicId: "family", che: P("зуда"), ru: "женщина", emoji: "👩‍🦱", level: 2, source: "corpus" },
  { id: "stag", topicId: "family", che: P("стаг"), ru: "мужчина, человек", emoji: "🧔", level: 2, source: "corpus" },
  { id: "berash", topicId: "family", che: P("бераш"), ru: "дети", emoji: "👧👦", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "fam1", words: ["Нана", "ц1ахь", "ю"], ru: "Мама дома.", emoji: "👩🏠" },
  { id: "fam2", words: ["Да", "ц1ахь", "ву"], ru: "Папа дома.", emoji: "👨🏠" },
];

export const SCENES: Scene[] = [
  {
    id: "family_scene",
    topicIds: ["family"],
    image: "/img/scene-family.jpg",
    objects: [
      { cardId: "nana", x: 20, y: 60 },
      { cardId: "da", x: 50, y: 40 },
      { cardId: "yisha", x: 80, y: 70 },
      { cardId: "vasha", x: 10, y: 80 },
    ],
  },
];