import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "house",
    che: P("Ц1ен чоьнаш"),
    ru: "Комнаты и мебель",
    emoji: "🏠",
    gradient: "from-amber-100 to-orange-300",
    accent: "#F97316",
    unlockStars: 25,
    map: { x: 64, y: 58 },
  },
];

export const CARDS: Card[] = [
  // Комнаты
  { id: "house_room", topicId: "house", che: P("чоь"), ru: "комната", emoji: "🚪", level: 1, source: "corpus", image: "/img/cards/house_room.webp" },
  { id: "house_kitchen", topicId: "house", che: P("кхачабен чоь"), ru: "кухня", emoji: "🍳", level: 1, source: "corpus", image: "/img/cards/house_kitchen.webp" },
  { id: "house_bedroom", topicId: "house", che: P("дижаран чоь"), ru: "спальня", emoji: "🛏️", level: 1, source: "corpus", image: "/img/cards/house_bedroom.webp" },
  { id: "house_bathroom", topicId: "house", che: P("лийчаран чоь"), ru: "ванная", emoji: "🛁", level: 2, source: "corpus", image: "/img/cards/house_bathroom.webp" },
  { id: "house_living", topicId: "house", che: P("хьешийн чоь"), ru: "гостиная", emoji: "🛋️", level: 2, source: "corpus", image: "/img/cards/house_living.webp" },
  // Мебель
  { id: "house_table", topicId: "house", che: P("стол"), ru: "стол", emoji: "🪑", level: 1, source: "corpus", image: "/img/cards/house_table.webp" },
  { id: "house_chair", topicId: "house", che: P("г1ант"), ru: "стул", emoji: "🪑", level: 1, source: "corpus", image: "/img/cards/house_chair.webp" },
  { id: "house_bed", topicId: "house", che: P("маьнга"), ru: "кровать", emoji: "🛏️", level: 1, source: "corpus", image: "/img/cards/house_bed.webp" },
  { id: "house_sofa", topicId: "house", che: P("диван"), ru: "диван", emoji: "🛋️", level: 2, source: "corpus", image: "/img/cards/house_sofa.webp" },
  { id: "house_wardrobe", topicId: "house", che: P("шкаф"), ru: "шкаф", emoji: "🗄️", level: 2, source: "corpus", image: "/img/cards/house_wardrobe.webp" },
  { id: "house_shelf", topicId: "house", che: P("полка"), ru: "полка", emoji: "📚", level: 2, source: "corpus", image: "/img/cards/house_shelf.webp" },
  // Бытовая техника
  { id: "house_tv", topicId: "house", che: P("телевизор"), ru: "телевизор", emoji: "📺", level: 2, source: "corpus", image: "/img/cards/house_tv.webp" },
  { id: "house_fridge", topicId: "house", che: P("холодильник"), ru: "холодильник", emoji: "🧊", level: 2, source: "corpus", image: "/img/cards/house_fridge.webp" },
  { id: "house_microwave", topicId: "house", che: P("микроволновка"), ru: "микроволновка", emoji: "🍱", level: 2, source: "dictionary", image: "/img/cards/house_microwave.webp" },
  { id: "house_washing", topicId: "house", che: P("бедаршюьтту машен"), ru: "стиральная машина", emoji: "🧺", level: 2, source: "dictionary", image: "/img/cards/house_washing.webp" },
  { id: "house_vacuum", topicId: "house", che: P("пылесос"), ru: "пылесос", emoji: "🧹", level: 2, source: "dictionary", image: "/img/cards/house_vacuum.webp" },
  // Дом и двор
  { id: "house_door", topicId: "house", che: P("не1"), ru: "дверь", emoji: "🚪", level: 1, source: "corpus", image: "/img/cards/house_door.webp" },
  { id: "house_window", topicId: "house", che: P("кор"), ru: "окно", emoji: "🪟", level: 1, source: "corpus", image: "/img/cards/house_window.webp" },
  { id: "house_roof", topicId: "house", che: P("тхов"), ru: "крыша", emoji: "🏠", level: 2, source: "corpus", image: "/img/cards/house_roof.webp" },
  { id: "house_floor", topicId: "house", che: P("ц1енкъа"), ru: "пол", emoji: "🪵", level: 2, source: "corpus", image: "/img/cards/house_floor.webp" },
  { id: "house_wall", topicId: "house", che: P("пен"), ru: "стена", emoji: "🧱", level: 2, source: "corpus", image: "/img/cards/house_wall.webp" },
  { id: "house_garden", topicId: "house", che: P("беш"), ru: "сад", emoji: "🌷", level: 1, source: "corpus", image: "/img/cards/house_garden.webp" },
  { id: "house_fence", topicId: "house", che: P("керт"), ru: "забор, ограда", emoji: "⛩️", level: 2, source: "corpus", image: "/img/cards/house_fence.webp" },
  { id: "house_gate", topicId: "house", che: P("ков"), ru: "ворота", emoji: "🚧", level: 2, source: "corpus", image: "/img/cards/house_gate.webp" },
  // Интерьер и конструкции дома
  { id: "house_curtain", topicId: "house", che: P("пардо"), ru: "занавеска, штора", emoji: "🪟", level: 1, source: "corpus", image: "/img/cards/house_curtain.webp" },
  { id: "house_lamp", topicId: "house", che: P("чиркх"), ru: "лампа, светильник", emoji: "💡", level: 1, source: "corpus", image: "/img/cards/house_lamp.webp" },
  { id: "house_stairs", topicId: "house", che: P("лами"), ru: "лестница", emoji: "🪜", level: 1, source: "corpus", image: "/img/cards/house_stairs.webp" },
  { id: "house_ceiling", topicId: "house", che: P("тхов-к1ело"), ru: "потолок", emoji: "🏠", level: 2, source: "corpus", image: "/img/cards/house_ceiling.webp" },
  { id: "house_attic", topicId: "house", che: P("тхов-т1е"), ru: "чердак", emoji: "🛖", level: 2, source: "corpus", image: "/img/cards/house_attic.webp" },
  { id: "house_chimney", topicId: "house", che: P("к1уьран бирг1а"), ru: "печная труба, дымоход", emoji: "🧱", level: 2, source: "corpus", image: "/img/cards/house_chimney.webp" },
  { id: "house_stove", topicId: "house", che: P("пеш"), ru: "печь, плита", emoji: "🔥", level: 1, source: "corpus", image: "/img/cards/house_stove.webp" },
  { id: "house_lock", topicId: "house", che: P("дог1а"), ru: "замок", emoji: "🔒", level: 1, source: "corpus", image: "/img/cards/house_lock.webp" },
  { id: "house_handle", topicId: "house", che: P("т1ам"), ru: "дверная ручка", emoji: "🚪", level: 2, source: "corpus", image: "/img/cards/house_handle.webp" },
  { id: "house_tap", topicId: "house", che: P("кран"), ru: "кран водопроводный", emoji: "🚰", level: 1, source: "dictionary", image: "/img/cards/house_tap.webp" },
  { id: "house_trash", topicId: "house", che: P("нехаш"), ru: "мусор, урна", emoji: "🗑️", level: 1, source: "corpus", image: "/img/cards/house_trash.webp" },
  { id: "house_iron", topicId: "house", che: P("утюг"), ru: "утюг", emoji: "👔", level: 1, source: "dictionary", image: "/img/cards/house_iron.webp" },
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