import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "toys",
    che: P("ловзарг1аш"),
    ru: "Игрушки",
    emoji: "🧸",
    gradient: "from-pink-200 to-purple-300",
    accent: "#D946EF",
    unlockStars: 0,
    map: { x: 15, y: 10 },
  },
];

export const CARDS: Card[] = [
  // Игрушки
  { id: "toy_doll", topicId: "toys", che: P("к1ал"), ru: "кукла", emoji: "🎎", level: 1, source: "corpus" },
  { id: "toy_ball", topicId: "toys", che: P("бал"), ru: "мяч", emoji: "⚽", level: 1, source: "corpus" },
  { id: "toy_car", topicId: "toys", che: P("машина"), ru: "машинка", emoji: "🚗", level: 1, source: "corpus" },
  { id: "toy_bear", topicId: "toys", che: P("ча"), ru: "мишка", emoji: "🧸", level: 1, source: "corpus" },
  { id: "toy_blocks", topicId: "toys", che: P("къо"), ru: "кубики", emoji: "🧱", level: 1, source: "corpus" },
  { id: "toy_puzzle", topicId: "toys", che: P("хьил"), ru: "пазл", emoji: "🧩", level: 2, source: "dictionary" },
  { id: "toy_robot", topicId: "toys", che: P("робот"), ru: "робот", emoji: "🤖", level: 2, source: "dictionary" },
  { id: "toy_plane", topicId: "toys", che: P("кема"), ru: "самолётик", emoji: "✈️", level: 2, source: "corpus" },
  { id: "toy_train", topicId: "toys", che: P("ц1ерпошт"), ru: "поезд", emoji: "🚆", level: 2, source: "corpus" },
  { id: "toy_soldier", topicId: "toys", che: P("эскархо"), ru: "солдатик", emoji: "🎖️", level: 2, source: "corpus" },
  { id: "toy_sword", topicId: "toys", che: P("шаьлта"), ru: "меч", emoji: "🗡️", level: 2, source: "corpus" },
  { id: "toy_gun", topicId: "toys", che: P("топ"), ru: "пистолет", emoji: "🔫", level: 2, source: "corpus" },
  // Игровые действия
  { id: "toy_play", topicId: "toys", che: P("ловза"), ru: "играть", emoji: "🎮", level: 1, source: "corpus" },
  { id: "toy_hide", topicId: "toys", che: P("кхай"), ru: "прятаться", emoji: "🙈", level: 2, source: "corpus" },
  { id: "toy_seek", topicId: "toys", che: P("лах"), ru: "искать", emoji: "🔍", level: 2, source: "corpus" },
  { id: "toy_run", topicId: "toys", che: P("хьаьдар"), ru: "бегать", emoji: "🏃", level: 1, source: "corpus" },
  { id: "toy_jump", topicId: "toys", che: P("т1е"), ru: "прыгать", emoji: "🤸", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "to1", words: ["Бер", "ловзуш", "ду"], ru: "Ребёнок играет.", emoji: "👶🎮" },
  { id: "to2", words: ["Ас", "машина", "ловзу"], ru: "Я играю с машинкой.", emoji: "🚗" },
];

export const SCENES: Scene[] = [
  {
    id: "toys_scene",
    topicIds: ["toys"],
    image: "/img/scene-toys.jpg",
    objects: [
      { cardId: "toy_doll", x: 20, y: 60 },
      { cardId: "toy_ball", x: 50, y: 70 },
      { cardId: "toy_car", x: 80, y: 50 },
      { cardId: "toy_bear", x: 40, y: 80 },
    ],
  },
];