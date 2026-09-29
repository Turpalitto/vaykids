import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "city",
    che: P("Г1ала"),
    ru: "Город",
    emoji: "🏙️",
    gradient: "from-gray-300 to-blue-500",
    accent: "#6B7280",
    unlockStars: 50,
    map: { x: 62, y: 40 },
  },
];

export const CARDS: Card[] = [
  // Городские объекты
  { id: "city_street", topicId: "city", che: P("урам"), ru: "улица", emoji: "🛤️", level: 1, source: "corpus", image: "/img/cards/city_street.webp" },
  { id: "city_house", topicId: "city", che: P("ц1а"), ru: "дом", emoji: "🏡", level: 1, source: "corpus", image: "/img/cards/city_house.webp" },
  { id: "city_building", topicId: "city", che: P("г1ишло"), ru: "здание / строение", emoji: "🏢", level: 1, source: "corpus", image: "/img/cards/city_building.webp" },
  { id: "city_shop", topicId: "city", che: P("туька"), ru: "магазин", emoji: "🏪", level: 1, source: "corpus", image: "/img/cards/city_shop.webp" },
  { id: "city_market", topicId: "city", che: P("базар"), ru: "рынок", emoji: "🛒", level: 2, source: "corpus", image: "/img/cards/city_market.webp" },
  { id: "city_school", topicId: "city", che: P("школа"), ru: "школа", emoji: "🏫", level: 1, source: "corpus", image: "/img/cards/city_school.webp" },
  { id: "city_hospital", topicId: "city", che: P("дарбанц1а"), ru: "больница", emoji: "🏥", level: 2, source: "corpus", image: "/img/cards/city_hospital.webp" },
  { id: "city_park", topicId: "city", che: P("парк"), ru: "парк", emoji: "🌳", level: 1, source: "corpus", image: "/img/cards/city_park.webp" },
  { id: "city_square", topicId: "city", che: P("майдан"), ru: "площадь", emoji: "⛲", level: 2, source: "corpus", image: "/img/cards/city_square.webp" },
  { id: "city_bridge", topicId: "city", che: P("т1ай"), ru: "мост", emoji: "🌉", level: 1, source: "corpus", image: "/img/cards/city_bridge.webp" },
  { id: "city_road", topicId: "city", che: P("некъ"), ru: "дорога", emoji: "🛣️", level: 1, source: "corpus", image: "/img/cards/city_road.webp" },
  { id: "city_railway", topicId: "city", che: P("эчигнекъ"), ru: "железная дорога", emoji: "🚆", level: 2, source: "corpus", image: "/img/cards/city_railway.webp" },
  { id: "city_airport", topicId: "city", che: P("аэропорт"), ru: "аэропорт", emoji: "🛫", level: 2, source: "dictionary", image: "/img/cards/city_airport.webp" },
  { id: "city_port", topicId: "city", che: P("порт"), ru: "порт", emoji: "⛵", level: 2, source: "dictionary", image: "/img/cards/city_port.webp" },
  { id: "city_fountain", topicId: "city", che: P("фонтан"), ru: "фонтан", emoji: "⛲", level: 2, source: "dictionary", image: "/img/cards/city_fountain.webp" },
  { id: "city_monument", topicId: "city", che: P("х1оллам"), ru: "памятник", emoji: "🗽", level: 2, source: "dictionary", image: "/img/cards/city_monument.webp" },
  { id: "city_museum", topicId: "city", che: P("музей"), ru: "музей", emoji: "🏛️", level: 2, source: "dictionary", image: "/img/cards/city_museum.webp" },
  { id: "city_theatre", topicId: "city", che: P("театр"), ru: "театр", emoji: "🎭", level: 2, source: "dictionary", image: "/img/cards/city_theatre.webp" },
  { id: "city_cinema", topicId: "city", che: P("кинотеатр"), ru: "кинотеатр", emoji: "🎬", level: 2, source: "dictionary", image: "/img/cards/city_cinema.webp" },
  { id: "city_bank", topicId: "city", che: P("банк"), ru: "банк", emoji: "🏦", level: 2, source: "dictionary", image: "/img/cards/city_bank.webp" },
  { id: "city_hotel", topicId: "city", che: P("хьешийн ц1а"), ru: "гостиница", emoji: "🏨", level: 2, source: "corpus", image: "/img/cards/city_hotel.webp" },
  { id: "city_restaurant", topicId: "city", che: P("кхачан ц1а"), ru: "ресторан / кафе", emoji: "🍽️", level: 2, source: "corpus", image: "/img/cards/city_restaurant.webp" },
  { id: "city_cafe", topicId: "city", che: P("х1усам-туька"), ru: "кафетерий", emoji: "☕", level: 2, source: "dictionary", image: "/img/cards/city_cafe.webp" },
  { id: "city_pharmacy", topicId: "city", che: P("молханийн туька"), ru: "аптека", emoji: "🏪", level: 2, source: "corpus", image: "/img/cards/city_pharmacy.webp" },
  { id: "city_police", topicId: "city", che: P("полици"), ru: "полиция", emoji: "👮", level: 2, source: "dictionary", image: "/img/cards/city_police.webp" },
  { id: "city_firestation", topicId: "city", che: P("ц1еяйаран дакъа"), ru: "пожарная часть", emoji: "🚒", level: 2, source: "corpus", image: "/img/cards/city_firestation.webp" },
  // Городские места и элементы
  { id: "city_mosque", topicId: "city", che: P("маьждиг"), ru: "мечеть", emoji: "🕌", level: 1, source: "corpus", image: "/img/cards/city_mosque.webp" },
  { id: "city_kindergarten", topicId: "city", che: P("берийн беш"), ru: "детский сад", emoji: "🧒", level: 1, source: "corpus", image: "/img/cards/city_kindergarten.webp" },
  { id: "city_playground", topicId: "city", che: P("ловзаран майда"), ru: "детская площадка", emoji: "🛝", level: 1, source: "corpus", image: "/img/cards/city_playground.webp" },
  { id: "city_post", topicId: "city", che: P("пошт"), ru: "почта", emoji: "📮", level: 1, source: "dictionary", image: "/img/cards/city_post.webp" },
  { id: "city_crosswalk", topicId: "city", che: P("г1ашлойн некъ"), ru: "пешеходный переход", emoji: "🚶", level: 1, source: "corpus", image: "/img/cards/city_crosswalk.webp" },
  { id: "city_lantern", topicId: "city", che: P("ураман чиркх"), ru: "уличный фонарь", emoji: "🏮", level: 2, source: "corpus", image: "/img/cards/city_lantern.webp" },
  { id: "city_bench", topicId: "city", che: P("лаьтта г1ант"), ru: "скамейка", emoji: "🪑", level: 1, source: "corpus", image: "/img/cards/city_bench.webp" },
  { id: "city_bakery", topicId: "city", che: P("бепиг дотту меттиг"), ru: "пекарня", emoji: "🥖", level: 2, source: "corpus", image: "/img/cards/city_bakery.webp" },
  { id: "city_zoo", topicId: "city", che: P("дийнатийн беш"), ru: "зоопарк", emoji: "🦁", level: 2, source: "corpus", image: "/img/cards/city_zoo.webp" },
  { id: "city_library", topicId: "city", che: P("библиотека"), ru: "библиотека", emoji: "📚", level: 2, source: "dictionary", image: "/img/cards/city_library.webp" },
  { id: "city_stadium", topicId: "city", che: P("стадион"), ru: "стадион", emoji: "🏟️", level: 2, source: "dictionary", image: "/img/cards/city_stadium.webp" },
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