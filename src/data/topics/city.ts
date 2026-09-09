import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "city",
    che: P("г1ала"),
    ru: "Город",
    emoji: "🏙️",
    gradient: "from-gray-300 to-blue-500",
    accent: "#6B7280",
    unlockStars: 0,
    map: { x: 88, y: 55 },
  },
];

export const CARDS: Card[] = [
  // Городские объекты
  { id: "city_street", topicId: "city", che: P("урам"), ru: "улица", emoji: "🛤️", level: 1, source: "corpus" },
  { id: "city_house", topicId: "city", che: P("г1ишло"), ru: "дом (здание)", emoji: "🏢", level: 1, source: "dictionary", review: "Уточнить слово для «дом/здание» у носителя" },
  { id: "city_building", topicId: "city", che: P("г1иш"), ru: "здание", emoji: "🏢", level: 1, source: "corpus", review: "Проверить форму «гӀиш/гӀишло» (здание)" },
  { id: "city_shop", topicId: "city", che: P("туька"), ru: "магазин", emoji: "🏪", level: 1, source: "corpus" },
  { id: "city_market", topicId: "city", che: P("базар"), ru: "рынок", emoji: "🛒", level: 2, source: "corpus" },
  { id: "city_school", topicId: "city", che: P("школа"), ru: "школа", emoji: "🏫", level: 1, source: "corpus" },
  { id: "city_hospital", topicId: "city", che: P("болница"), ru: "больница", emoji: "🏥", level: 2, source: "dictionary", review: "Подтвердить «болница» (больница) у носителя" },
  { id: "city_park", topicId: "city", che: P("парк"), ru: "парк", emoji: "🌳", level: 1, source: "corpus" },
  { id: "city_square", topicId: "city", che: P("майдан"), ru: "площадь", emoji: "⛲", level: 2, source: "corpus" },
  { id: "city_bridge", topicId: "city", che: P("т1ай"), ru: "мост", emoji: "🌉", level: 1, source: "corpus" },
  { id: "city_road", topicId: "city", che: P("некъ"), ru: "дорога", emoji: "🛣️", level: 1, source: "corpus" },
  { id: "city_railway", topicId: "city", che: P("ц1ерпошт"), ru: "железная дорога", emoji: "🚆", level: 2, source: "corpus" },
  { id: "city_airport", topicId: "city", che: P("аэропорт"), ru: "аэропорт", emoji: "🛫", level: 2, source: "dictionary" },
  { id: "city_port", topicId: "city", che: P("порт"), ru: "порт", emoji: "⛵", level: 2, source: "dictionary" },
  { id: "city_fountain", topicId: "city", che: P("фонта"), ru: "фонтан", emoji: "⛲", level: 2, source: "dictionary" },
  { id: "city_monument", topicId: "city", che: P("х1оллам"), ru: "памятник", emoji: "🗽", level: 2, source: "dictionary" },
  { id: "city_museum", topicId: "city", che: P("музей"), ru: "музей", emoji: "🏛️", level: 2, source: "dictionary" },
  { id: "city_theatre", topicId: "city", che: P("театр"), ru: "театр", emoji: "🎭", level: 2, source: "dictionary" },
  { id: "city_cinema", topicId: "city", che: P("кино"), ru: "кинотеатр", emoji: "🎬", level: 2, source: "dictionary" },
  { id: "city_bank", topicId: "city", che: P("банк"), ru: "банк", emoji: "🏦", level: 2, source: "dictionary" },
  { id: "city_hotel", topicId: "city", che: P("гостиница"), ru: "гостиница", emoji: "🏨", level: 2, source: "dictionary" },
  { id: "city_restaurant", topicId: "city", che: P("ресторан"), ru: "ресторан", emoji: "🍽️", level: 2, source: "dictionary" },
  { id: "city_cafe", topicId: "city", che: P("кафе"), ru: "кафе", emoji: "☕", level: 2, source: "dictionary" },
  { id: "city_pharmacy", topicId: "city", che: P("аптека"), ru: "аптека", emoji: "💊", level: 2, source: "dictionary" },
  { id: "city_police", topicId: "city", che: P("милици"), ru: "полиция", emoji: "👮", level: 2, source: "dictionary" },
  { id: "city_firestation", topicId: "city", che: P("ц1ехтуьллург"), ru: "пожарная часть", emoji: "🚒", level: 2, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "c1", words: ["Г1ала", "йоккха", "ю"], ru: "Город большой.", emoji: "🏙️" },
  { id: "c2", words: ["Урам", "т1ехь", "машина", "ю"], ru: "На улице машина.", emoji: "🚗🛤️" },
];

export const SCENES: Scene[] = [
  {
    id: "city_scene",
    topicIds: ["city"],
    image: "/img/scene-city.jpg",
    objects: [
      { cardId: "city_street", x: 50, y: 80 },
      { cardId: "city_house", x: 20, y: 60 },
      { cardId: "city_shop", x: 80, y: 70 },
      { cardId: "city_park", x: 40, y: 30 },
    ],
  },
];