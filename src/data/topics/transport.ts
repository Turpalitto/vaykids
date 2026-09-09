import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "transport",
    che: P("Транспорт"),
    ru: "Транспорт",
    emoji: "🚗",
    gradient: "from-slate-300 to-blue-500",
    accent: "#6366F1",
    unlockStars: 40,
    map: { x: 70, y: 34 },
  },
];

export const CARDS: Card[] = [
  { id: "mashina", topicId: "transport", che: P("машина"), ru: "машина", emoji: "🚗", level: 1, source: "dictionary" },
  { id: "kema", topicId: "transport", che: P("кема"), ru: "корабль", emoji: "🚢", level: 1, source: "corpus" },
  { id: "h1avaan-kema", topicId: "transport", che: P("х1аваан кема"), ru: "самолёт", emoji: "✈️", level: 2, source: "corpus" },
  { id: "c1erposht", topicId: "transport", che: P("ц1ерпошт"), ru: "поезд", emoji: "🚆", level: 2, source: "dictionary" },
  { id: "velosiped", topicId: "transport", che: P("велосипед"), ru: "велосипед", emoji: "🚲", level: 1, source: "dictionary" },
  { id: "avtobus", topicId: "transport", che: P("автобус"), ru: "автобус", emoji: "🚌", level: 1, source: "dictionary" },
  { id: "neq", topicId: "transport", che: P("некъ"), ru: "дорога", emoji: "🛣️", level: 1, source: "corpus" },
  { id: "vorda", topicId: "transport", che: P("ворда"), ru: "телега", emoji: "🛒", level: 2, source: "corpus" },
  { id: "g1udalkh", topicId: "transport", che: P("г1удалкх"), ru: "повозка", emoji: "🛒", level: 3, source: "corpus" },
  { id: "hinkema", topicId: "transport", che: P("хинкема"), ru: "лодка", emoji: "🛶", level: 2, source: "corpus" },
  { id: "t1ay", topicId: "transport", che: P("т1ай"), ru: "мост", emoji: "🌉", level: 1, source: "dictionary" },
  { id: "traktor", topicId: "transport", che: P("трактор"), ru: "трактор", emoji: "🚜", level: 1, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];