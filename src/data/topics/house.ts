import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "house",
    che: P("Ц1а чоь"),
    ru: "Комнаты и мебель",
    emoji: "🏠",
    gradient: "from-amber-100 to-orange-300",
    accent: "#F97316",
    unlockStars: 0,
    map: { x: 55, y: 95 },
  },
];

export const CARDS: Card[] = [
  // Комнаты
  { id: "house_room", topicId: "house", che: P("чо"), ru: "комната", emoji: "🚪", level: 1, source: "corpus" },
  { id: "house_kitchen", topicId: "house", che: P("кухня"), ru: "кухня", emoji: "🍳", level: 1, source: "corpus" },
  { id: "house_bedroom", topicId: "house", che: P("маьнга"), ru: "спальня", emoji: "🛏️", level: 1, source: "corpus" },
  { id: "house_bathroom", topicId: "house", che: P("хьаьрма"), ru: "ванная", emoji: "🛁", level: 2, source: "corpus" },
  { id: "house_living", topicId: "house", che: P("гоч"), ru: "гостиная", emoji: "🛋️", level: 2, source: "corpus" },
  // Мебель
  { id: "house_table", topicId: "house", che: P("стол"), ru: "стол", emoji: "🪑", level: 1, source: "corpus" },
  { id: "house_chair", topicId: "house", che: P("г1ант"), ru: "стул", emoji: "🪑", level: 1, source: "corpus" },
  { id: "house_bed", topicId: "house", che: P("маьнга"), ru: "кровать", emoji: "🛏️", level: 1, source: "corpus" },
  { id: "house_sofa", topicId: "house", che: P("диван"), ru: "диван", emoji: "🛋️", level: 2, source: "corpus" },
  { id: "house_wardrobe", topicId: "house", che: P("шкаф"), ru: "шкаф", emoji: "🗄️", level: 2, source: "corpus" },
  { id: "house_shelf", topicId: "house", che: P("полка"), ru: "полка", emoji: "📚", level: 2, source: "corpus" },
  // Бытовая техника
  { id: "house_tv", topicId: "house", che: P("телевизор"), ru: "телевизор", emoji: "📺", level: 2, source: "corpus" },
  { id: "house_fridge", topicId: "house", che: P("холодильник"), ru: "холодильник", emoji: "🧊", level: 2, source: "corpus" },
  { id: "house_microwave", topicId: "house", che: P("микроволновка"), ru: "микроволновка", emoji: "🍱", level: 2, source: "dictionary" },
  { id: "house_washing", topicId: "house", che: P("машина"), ru: "стиральная машина", emoji: "🧺", level: 2, source: "dictionary" },
  { id: "house_vacuum", topicId: "house", che: P("пылесос"), ru: "пылесос", emoji: "🧹", level: 2, source: "dictionary" },
  // Дом и двор
  { id: "house_door", topicId: "house", che: P("не1"), ru: "дверь", emoji: "🚪", level: 1, source: "corpus" },
  { id: "house_window", topicId: "house", che: P("кор"), ru: "окно", emoji: "🪟", level: 1, source: "corpus" },
  { id: "house_roof", topicId: "house", che: P("тхов"), ru: "крыша", emoji: "🏠", level: 2, source: "corpus" },
  { id: "house_floor", topicId: "house", che: P("бух"), ru: "пол", emoji: "🪵", level: 2, source: "corpus" },
  { id: "house_wall", topicId: "house", che: P("ч1а"), ru: "стена", emoji: "🧱", level: 2, source: "corpus" },
  { id: "house_garden", topicId: "house", che: P("беш"), ru: "сад", emoji: "🌷", level: 1, source: "corpus" },
  { id: "house_fence", topicId: "house", che: P("керт"), ru: "забор", emoji: "⛩️", level: 2, source: "corpus" },
  { id: "house_gate", topicId: "house", che: P("ков"), ru: "ворота", emoji: "🚧", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "house_s1", words: ["Х1ара", "ц1а", "ду"], ru: "Это дом.", emoji: "🏠" },
  { id: "house_s2", words: ["Ц1а", "чохь", "стол", "бу"], ru: "В доме стол.", emoji: "🪑" },
];

export const SCENES: Scene[] = [
  {
    id: "house_scene",
    topicIds: ["house"],
    image: "/img/scene-house.jpg",
    objects: [
      { cardId: "house_door", x: 20, y: 60 },
      { cardId: "house_window", x: 50, y: 40 },
      { cardId: "house_table", x: 80, y: 70 },
      { cardId: "house_bed", x: 10, y: 80 },
    ],
  },
];