import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "shopping",
    che: P("эцар"),
    ru: "Покупки",
    emoji: "🛒",
    gradient: "from-green-200 to-emerald-400",
    accent: "#10B981",
    unlockStars: 0,
    map: { x: 90, y: 75 },
  },
];

export const CARDS: Card[] = [
  // Магазины
  { id: "shop_store", topicId: "shopping", che: P("туька"), ru: "магазин", emoji: "🏪", level: 1, source: "corpus" },
  { id: "shop_market", topicId: "shopping", che: P("базар"), ru: "рынок", emoji: "🛒", level: 1, source: "corpus" },
  { id: "shop_supermarket", topicId: "shopping", che: P("супермаркет"), ru: "супермаркет", emoji: "🛒", level: 2, source: "dictionary" },
  { id: "shop_pharmacy", topicId: "shopping", che: P("аптека"), ru: "аптека", emoji: "💊", level: 2, source: "dictionary" },
  { id: "shop_bookshop", topicId: "shopping", che: P("книг"), ru: "книжный магазин", emoji: "📚", level: 2, source: "dictionary" },
  // Товары
  { id: "shop_bread", topicId: "shopping", che: P("бепиг"), ru: "хлеб", emoji: "🍞", level: 1, source: "corpus" },
  { id: "shop_milk", topicId: "shopping", che: P("шура"), ru: "молоко", emoji: "🥛", level: 1, source: "corpus" },
  { id: "shop_meat", topicId: "shopping", che: P("жижиг"), ru: "мясо", emoji: "🍖", level: 1, source: "corpus" },
  { id: "shop_fish", topicId: "shopping", che: P("ч1ара"), ru: "рыба", emoji: "🐟", level: 1, source: "corpus" },
  { id: "shop_eggs", topicId: "shopping", che: P("х1оа"), ru: "яйца", emoji: "🥚", level: 1, source: "corpus" },
  { id: "shop_fruit", topicId: "shopping", che: P("стом"), ru: "фрукты", emoji: "🍎", level: 1, source: "corpus" },
  { id: "shop_veg", topicId: "shopping", che: P("огурц"), ru: "овощи", emoji: "🥒", level: 1, source: "corpus" },
  { id: "shop_sugar", topicId: "shopping", che: P("шекар"), ru: "сахар", emoji: "🍬", level: 1, source: "corpus" },
  { id: "shop_salt", topicId: "shopping", che: P("туьха"), ru: "соль", emoji: "🧂", level: 1, source: "corpus" },
  { id: "shop_oil", topicId: "shopping", che: P("даьтта"), ru: "масло", emoji: "🧈", level: 2, source: "corpus" },
  { id: "shop_juice", topicId: "shopping", che: P("сок"), ru: "сок", emoji: "🧃", level: 1, source: "dictionary" },
  { id: "shop_water", topicId: "shopping", che: P("хи"), ru: "вода", emoji: "💧", level: 1, source: "corpus" },
  // Действия
  { id: "shop_buy", topicId: "shopping", che: P("эца"), ru: "покупать", emoji: "💳", level: 1, source: "corpus" },
  { id: "shop_sell", topicId: "shopping", che: P("даха"), ru: "продавать", emoji: "💰", level: 2, source: "corpus" },
  { id: "shop_pay", topicId: "shopping", che: P("луьтта"), ru: "платить", emoji: "💵", level: 2, source: "corpus" },
  { id: "shop_price", topicId: "shopping", che: P("маьх"), ru: "цена", emoji: "🏷️", level: 2, source: "corpus" },
  { id: "shop_money", topicId: "shopping", che: P("ахча"), ru: "деньги", emoji: "💰", level: 1, source: "corpus" },
  { id: "shop_change", topicId: "shopping", che: P("схьаэцар"), ru: "сдача", emoji: "🪙", level: 2, source: "dictionary" },
  { id: "shop_basket", topicId: "shopping", che: P("туьканан"), ru: "корзина", emoji: "🧺", level: 2, source: "corpus" },
  { id: "shop_list", topicId: "shopping", che: P("список"), ru: "список покупок", emoji: "📝", level: 2, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "sh1", words: ["Ас", "бепиг", "эцу"], ru: "Я покупаю хлеб.", emoji: "🍞" },
  { id: "sh2", words: ["Иза", "шура", "молу"], ru: "Он пьёт молоко.", emoji: "🥛" },
];

export const SCENES: Scene[] = [
  {
    id: "shopping_scene",
    topicIds: ["shopping"],
    image: "/img/scene-shop.jpg",
    objects: [
      { cardId: "shop_store", x: 20, y: 60 },
      { cardId: "shop_bread", x: 50, y: 70 },
      { cardId: "shop_milk", x: 80, y: 50 },
      { cardId: "shop_basket", x: 40, y: 80 },
    ],
  },
];