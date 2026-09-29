import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "shopping",
    che: P("Эцар"),
    ru: "Покупки",
    emoji: "🛒",
    gradient: "from-green-200 to-emerald-400",
    accent: "#10B981",
    unlockStars: 55,
    map: { x: 38, y: 40 },
  },
];

export const CARDS: Card[] = [
  // Магазины
  { id: "shop_store", topicId: "shopping", che: P("туька"), ru: "магазин", emoji: "🏪", level: 1, source: "corpus", image: "/img/cards/shop_store.webp" },
  { id: "shop_market", topicId: "shopping", che: P("базар"), ru: "рынок", emoji: "🛒", level: 1, source: "corpus", image: "/img/cards/shop_market.webp" },
  { id: "shop_supermarket", topicId: "shopping", che: P("йоккха туька"), ru: "супермаркет", emoji: "🛒", level: 2, source: "corpus", image: "/img/cards/shop_supermarket.webp" },
  { id: "shop_pharmacy", topicId: "shopping", che: P("молханийн туька"), ru: "аптека", emoji: "🏪", level: 2, source: "corpus", image: "/img/cards/shop_pharmacy.webp" },
  { id: "shop_bookshop", topicId: "shopping", che: P("жайнаш дохка туька"), ru: "книжный магазин", emoji: "📚", level: 2, source: "corpus", image: "/img/cards/shop_bookshop.webp" },
  // Товары
  { id: "shop_bread", topicId: "shopping", che: P("бепиг"), ru: "хлеб", emoji: "🍞", level: 1, source: "corpus", image: "/img/cards/shop_bread.webp" },
  { id: "shop_milk", topicId: "shopping", che: P("шура"), ru: "молоко", emoji: "🥛", level: 1, source: "corpus", image: "/img/cards/shop_milk.webp" },
  { id: "shop_meat", topicId: "shopping", che: P("жижиг"), ru: "мясо", emoji: "🍖", level: 1, source: "corpus", image: "/img/cards/shop_meat.webp" },
  { id: "shop_fish", topicId: "shopping", che: P("ч1ара"), ru: "рыба", emoji: "🐟", level: 1, source: "corpus", image: "/img/cards/shop_fish.webp" },
  { id: "shop_eggs", topicId: "shopping", che: P("х1оа"), ru: "яйца", emoji: "🥚", level: 1, source: "corpus", image: "/img/cards/shop_eggs.webp" },
  { id: "shop_fruit", topicId: "shopping", che: P("стом"), ru: "фрукты", emoji: "🍎", level: 1, source: "corpus", image: "/img/cards/shop_fruit.webp" },
  { id: "shop_veg", topicId: "shopping", che: P("хасстоьмаш"), ru: "овощи", emoji: "🥦", level: 1, source: "corpus", image: "/img/cards/shop_veg.webp" },
  { id: "shop_sugar", topicId: "shopping", che: P("шекар"), ru: "сахар", emoji: "🍬", level: 1, source: "corpus", image: "/img/cards/shop_sugar.webp" },
  { id: "shop_salt", topicId: "shopping", che: P("туьха"), ru: "соль", emoji: "🧂", level: 1, source: "corpus", image: "/img/cards/shop_salt.webp" },
  { id: "shop_oil", topicId: "shopping", che: P("даьтта"), ru: "масло", emoji: "🧈", level: 2, source: "corpus", image: "/img/cards/shop_oil.webp" },
  { id: "shop_juice", topicId: "shopping", che: P("мутта"), ru: "сок", emoji: "🧃", level: 1, source: "corpus", image: "/img/cards/shop_juice.webp" },
  { id: "shop_water", topicId: "shopping", che: P("хи"), ru: "вода", emoji: "💧", level: 1, source: "corpus", image: "/img/cards/shop_water.webp" },
  // Действия
  { id: "shop_buy", topicId: "shopping", che: P("эца"), ru: "покупать", emoji: "💳", level: 1, source: "corpus", image: "/img/cards/shop_buy.webp" },
  { id: "shop_sell", topicId: "shopping", che: P("дохка"), ru: "продавать", emoji: "🏷️", level: 2, source: "corpus", image: "/img/cards/shop_sell.webp" },
  { id: "shop_pay", topicId: "shopping", che: P("мах бан"), ru: "платить, рассчитываться", emoji: "💵", level: 2, source: "corpus", image: "/img/cards/shop_pay.webp" },
  { id: "shop_price", topicId: "shopping", che: P("мах"), ru: "цена", emoji: "🏷️", level: 2, source: "corpus", image: "/img/cards/shop_price.webp" },
  { id: "shop_money", topicId: "shopping", che: P("ахча"), ru: "деньги", emoji: "💰", level: 1, source: "corpus", image: "/img/cards/shop_money.webp" },
  { id: "shop_change", topicId: "shopping", che: P("юхалург"), ru: "сдача", emoji: "🪙", level: 2, source: "corpus", image: "/img/cards/shop_change.webp" },
  { id: "shop_basket", topicId: "shopping", che: P("тускар"), ru: "корзина", emoji: "🧺", level: 2, source: "corpus", image: "/img/cards/shop_basket.webp" },
  { id: "shop_list", topicId: "shopping", che: P("мог1ам"), ru: "список покупок", emoji: "📝", level: 2, source: "corpus", image: "/img/cards/shop_list.webp" },
  // Дополнительно о покупках
  { id: "shop_cart", topicId: "shopping", che: P("г1удалкх"), ru: "магазинная тележка", emoji: "🛒", level: 1, source: "corpus", image: "/img/cards/shop_cart.webp" },
  { id: "shop_bag", topicId: "shopping", che: P("т1оьрмиг"), ru: "сумка, пакет", emoji: "🛍️", level: 1, source: "corpus", image: "/img/cards/shop_bag.webp" },
  { id: "shop_scales", topicId: "shopping", che: P("терза"), ru: "весы", emoji: "⚖️", level: 1, source: "corpus", image: "/img/cards/shop_scales.webp" },
  { id: "shop_coins", topicId: "shopping", che: P("кегий ахча"), ru: "монеты, мелочь", emoji: "🪙", level: 2, source: "corpus", image: "/img/cards/shop_coins.webp" },
  { id: "shop_bankcard", topicId: "shopping", che: P("банк-карта"), ru: "банковская карта", emoji: "💳", level: 1, source: "dictionary", image: "/img/cards/shop_bankcard.webp" },
  { id: "shop_receipt", topicId: "shopping", che: P("чек"), ru: "чек, квитанция", emoji: "🧾", level: 2, source: "dictionary", image: "/img/cards/shop_receipt.webp" },
  { id: "shop_cheap", topicId: "shopping", che: P("дорах"), ru: "дешёвый", emoji: "🏷️", level: 1, source: "corpus", image: "/img/cards/shop_cheap.webp" },
  { id: "shop_expensive", topicId: "shopping", che: P("деза мах"), ru: "дорогой (по цене)", emoji: "💎", level: 1, source: "corpus", image: "/img/cards/shop_expensive.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "sh1", words: ["Ас", "бепиг", "оьцу"], ru: "Я покупаю хлеб.", emoji: "🍞" },
  { id: "sh2", words: ["Цо", "шура", "молу"], ru: "Он пьёт молоко.", emoji: "🥛" },
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