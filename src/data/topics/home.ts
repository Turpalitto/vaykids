import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "home",
    che: P("Ц1а"),
    ru: "Дом",
    emoji: "🏠",
    gradient: "from-amber-300 to-orange-400",
    accent: "#F59E0B",
    unlockStars: 0,
    map: { x: 50, y: 92 },
  },
];

export const CARDS: Card[] = [
  { id: "c1a", topicId: "home", che: P("ц1а"), ru: "дом", emoji: "🏠", level: 1, source: "corpus" },
  { id: "ne1", topicId: "home", che: P("не1"), ru: "дверь", emoji: "🚪", level: 1, source: "corpus" },
  { id: "kor", topicId: "home", che: P("кор"), ru: "окно", emoji: "🪟", level: 1, source: "corpus" },
  { id: "stol", topicId: "home", che: P("стол"), ru: "стол", emoji: "🍽️", level: 1, source: "corpus" },
  { id: "g1ant", topicId: "home", che: P("г1ант"), ru: "стул", emoji: "🪑", level: 1, source: "corpus" },
  { id: "maenga", topicId: "home", che: P("маьнга"), ru: "кровать", emoji: "🛏️", level: 2, source: "corpus" },
  { id: "kad", topicId: "home", che: P("кад"), ru: "чашка", emoji: "☕", level: 1, source: "corpus" },
  { id: "1ayg", topicId: "home", che: P("1айг"), ru: "ложка", emoji: "🥄", level: 1, source: "corpus" },
  { id: "urs", topicId: "home", che: P("урс"), ru: "нож", emoji: "🔪", level: 2, source: "corpus" },
  { id: "thov", topicId: "home", che: P("тхов"), ru: "крыша", emoji: "🏠", level: 2, source: "corpus" },
  { id: "chirkh", topicId: "home", che: P("чиркх"), ru: "светильник", emoji: "🪔", level: 2, source: "corpus" },
  { id: "kov", topicId: "home", che: P("ков"), ru: "ворота", emoji: "⛩️", level: 2, source: "corpus" },
  { id: "kert", topicId: "home", che: P("керт"), ru: "двор, ограда", emoji: "🏡", level: 2, source: "corpus" },
  { id: "besh", topicId: "home", che: P("беш"), ru: "сад", emoji: "🌷", level: 1, source: "corpus" },
  { id: "dechig", topicId: "home", che: P("дечиг"), ru: "дерево (материал), дрова", emoji: "🪵", level: 3, source: "corpus" },
  { id: "c1e", topicId: "home", che: P("ц1е"), ru: "огонь", emoji: "🔥", level: 1, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "hom1", words: ["Х1ара", "сан", "ц1а", "ду"], ru: "Это мой дом.", emoji: "🏠" },
];

export const SCENES: Scene[] = [
  {
    id: "home_scene",
    topicIds: ["home"],
    image: "/img/scene-home.jpg",
    objects: [
      { cardId: "c1a", x: 20, y: 60 },
      { cardId: "ne1", x: 50, y: 40 },
      { cardId: "kor", x: 80, y: 70 },
      { cardId: "g1ant", x: 10, y: 80 },
    ],
  },
];