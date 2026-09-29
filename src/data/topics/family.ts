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
    map: { x: 50, y: 86 },
  },
];

export const CARDS: Card[] = [
  { id: "nana", topicId: "family", che: P("нана"), ru: "мама", emoji: "👩", level: 1, source: "corpus", image: "/img/cards/nana.webp" },
  { id: "da", topicId: "family", che: P("да"), ru: "папа", emoji: "👨", level: 1, source: "corpus", image: "/img/cards/da.webp" },
  { id: "yisha", topicId: "family", che: P("йиша"), ru: "сестра", emoji: "👧", level: 1, source: "corpus", image: "/img/cards/yisha.webp" },
  { id: "vasha", topicId: "family", che: P("ваша"), ru: "брат", emoji: "👦", level: 1, source: "corpus", image: "/img/cards/vasha.webp" },
  { id: "deda", topicId: "family", che: P("деда"), ru: "дедушка", emoji: "👴", level: 1, source: "dictionary", image: "/img/cards/deda.webp" },
  { id: "nenana", topicId: "family", che: P("ненана"), ru: "бабушка", emoji: "👵", level: 1, source: "dictionary", image: "/img/cards/nenana.webp", review: "Проверить региональный вариант (ненана / денана / баба)" },
  { id: "ber", topicId: "family", che: P("бер"), ru: "ребёнок", emoji: "👶", level: 1, source: "corpus", image: "/img/cards/ber.webp" },
  { id: "k1ant", topicId: "family", che: P("к1ант"), ru: "мальчик, сын", emoji: "🧒", level: 1, source: "corpus", image: "/img/cards/k1ant.webp" },
  { id: "yo1", topicId: "family", che: P("йо1"), ru: "девочка, дочь", emoji: "👧", level: 1, source: "corpus", image: "/img/cards/yo1.webp" },
  { id: "doezal", topicId: "family", che: P("доьзал"), ru: "семья", emoji: "👨‍👩‍👧‍👦", level: 2, source: "corpus", image: "/img/cards/doezal.webp" },
  { id: "zuda", topicId: "family", che: P("зуда"), ru: "женщина", emoji: "👩‍🦱", level: 2, source: "corpus", image: "/img/cards/zuda.webp" },
  { id: "stag", topicId: "family", che: P("стаг"), ru: "мужчина, человек", emoji: "🧔", level: 2, source: "corpus", image: "/img/cards/stag.webp" },
  { id: "berash", topicId: "family", che: P("бераш"), ru: "дети", emoji: "👧👦", level: 2, source: "corpus", image: "/img/cards/berash.webp" },
  // Родственники и близкие
  { id: "family_denana", topicId: "family", che: P("денана"), ru: "бабушка (по отцу)", emoji: "👵", level: 1, source: "dictionary", image: "/img/cards/family_denana.webp" },
  { id: "family_vokkhostag", topicId: "family", che: P("воккха стаг"), ru: "дедушка, старец", emoji: "🧓", level: 1, source: "corpus", image: "/img/cards/family_vokkhostag.webp" },
  { id: "family_yokkhazuda", topicId: "family", che: P("йоккха зуда"), ru: "пожилая женщина", emoji: "👵", level: 1, source: "corpus", image: "/img/cards/family_yokkhazuda.webp" },
  { id: "family_devasha", topicId: "family", che: P("деваша"), ru: "дядя (по отцу)", emoji: "👨", level: 2, source: "corpus", image: "/img/cards/family_devasha.webp" },
  { id: "family_nevasha", topicId: "family", che: P("ненан ваша"), ru: "дядя (по матери)", emoji: "👨", level: 2, source: "corpus", image: "/img/cards/family_nevasha.webp" },
  { id: "family_deyisha", topicId: "family", che: P("дейиша"), ru: "тётя (по отцу)", emoji: "👩", level: 2, source: "corpus", image: "/img/cards/family_deyisha.webp" },
  { id: "family_neyisha", topicId: "family", che: P("ненайиша"), ru: "тётя (по матери)", emoji: "👩", level: 2, source: "corpus", image: "/img/cards/family_neyisha.webp" },
  { id: "family_nus", topicId: "family", che: P("нус"), ru: "невестка, сноха", emoji: "👰", level: 2, source: "corpus", image: "/img/cards/family_nus.webp" },
  { id: "family_nevca", topicId: "family", che: P("невца"), ru: "зять", emoji: "🤵", level: 2, source: "corpus", image: "/img/cards/family_nevca.webp" },
  { id: "family_lulaho", topicId: "family", che: P("лулахо"), ru: "сосед", emoji: "🏡", level: 1, source: "corpus", image: "/img/cards/family_lulaho.webp" },
  { id: "family_dottagh", topicId: "family", che: P("доттаг1"), ru: "друг", emoji: "🤝", level: 1, source: "corpus", image: "/img/cards/family_dottagh.webp" },
  { id: "family_hesha", topicId: "family", che: P("хьаша"), ru: "гость", emoji: "🧳", level: 1, source: "corpus", image: "/img/cards/family_hesha.webp" },
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