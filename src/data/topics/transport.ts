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
    unlockStars: 45,
    map: { x: 76, y: 48 },
  },
];

export const CARDS: Card[] = [
  { id: "mashina", topicId: "transport", che: P("машина"), ru: "машина", emoji: "🚗", level: 1, source: "dictionary", image: "/img/cards/mashina.webp" },
  { id: "kema", topicId: "transport", che: P("кема"), ru: "корабль", emoji: "🚢", level: 1, source: "corpus", image: "/img/cards/kema.webp" },
  { id: "h1avaan-kema", topicId: "transport", che: P("х1аваан кема"), ru: "самолёт", emoji: "✈️", level: 2, source: "corpus", image: "/img/cards/h1avaan-kema.webp" },
  { id: "c1erposht", topicId: "transport", che: P("ц1ерпошт"), ru: "поезд", emoji: "🚆", level: 2, source: "dictionary", image: "/img/cards/c1erposht.webp" },
  { id: "velosiped", topicId: "transport", che: P("велосипед"), ru: "велосипед", emoji: "🚲", level: 1, source: "dictionary", image: "/img/cards/velosiped.webp" },
  { id: "avtobus", topicId: "transport", che: P("автобус"), ru: "автобус", emoji: "🚌", level: 1, source: "dictionary", image: "/img/cards/avtobus.webp" },
  { id: "neq", topicId: "transport", che: P("некъ"), ru: "дорога", emoji: "🛣️", level: 1, source: "corpus", image: "/img/cards/neq.webp" },
  { id: "vorda", topicId: "transport", che: P("ворда"), ru: "телега", emoji: "🛒", level: 2, source: "corpus", image: "/img/cards/vorda.webp" },
  { id: "g1udalkh", topicId: "transport", che: P("г1удалкх"), ru: "повозка", emoji: "🛒", level: 3, source: "corpus", image: "/img/cards/g1udalkh.webp" },
  { id: "hinkema", topicId: "transport", che: P("хинкема"), ru: "лодка", emoji: "🛶", level: 2, source: "corpus", image: "/img/cards/hinkema.webp" },
  { id: "t1ay", topicId: "transport", che: P("т1ай"), ru: "мост", emoji: "🌉", level: 1, source: "dictionary", image: "/img/cards/t1ay.webp" },
  { id: "traktor", topicId: "transport", che: P("трактор"), ru: "трактор", emoji: "🚜", level: 1, source: "dictionary", image: "/img/cards/traktor.webp" },
  // Дополнительный транспорт и детали
  { id: "transport_helicopter", topicId: "transport", che: P("вертолёт"), ru: "вертолёт", emoji: "🚁", level: 2, source: "dictionary", image: "/img/cards/transport_helicopter.webp" },
  { id: "transport_truck", topicId: "transport", che: P("грузовик"), ru: "грузовик", emoji: "🚚", level: 1, source: "dictionary", image: "/img/cards/transport_truck.webp" },
  { id: "transport_motorcycle", topicId: "transport", che: P("мотоцикл"), ru: "мотоцикл", emoji: "🏍️", level: 2, source: "dictionary", image: "/img/cards/transport_motorcycle.webp" },
  { id: "transport_wheel", topicId: "transport", che: P("чкъург"), ru: "колесо", emoji: "🛞", level: 1, source: "corpus", image: "/img/cards/transport_wheel.webp" },
  { id: "transport_sled", topicId: "transport", che: P("салаз"), ru: "санки", emoji: "🛷", level: 1, source: "corpus", image: "/img/cards/transport_sled.webp" },
  { id: "transport_scooter", topicId: "transport", che: P("самокат"), ru: "самокат", emoji: "🛴", level: 1, source: "dictionary", image: "/img/cards/transport_scooter.webp" },
  { id: "transport_trafficlight", topicId: "transport", che: P("светофор"), ru: "светофор", emoji: "🚦", level: 1, source: "dictionary", image: "/img/cards/transport_trafficlight.webp" },
  { id: "transport_stop", topicId: "transport", che: P("д1асоцу меттиг"), ru: "остановка", emoji: "🚏", level: 2, source: "corpus", image: "/img/cards/transport_stop.webp" },
  { id: "transport_sign", topicId: "transport", che: P("некъан хьаьрк"), ru: "дорожный знак", emoji: "🪧", level: 2, source: "corpus", image: "/img/cards/transport_sign.webp" },
  { id: "transport_ticket", topicId: "transport", che: P("билет"), ru: "билет", emoji: "🎫", level: 1, source: "dictionary", image: "/img/cards/transport_ticket.webp" },
  { id: "transport_tram", topicId: "transport", che: P("трамвай"), ru: "трамвай", emoji: "🚋", level: 2, source: "dictionary", image: "/img/cards/transport_tram.webp" },
  { id: "transport_subway", topicId: "transport", che: P("метро"), ru: "метро", emoji: "🚇", level: 2, source: "dictionary", image: "/img/cards/transport_subway.webp" },
  { id: "transport_van", topicId: "transport", che: P("микроавтобус"), ru: "маршрутка, микроавтобус", emoji: "🚐", level: 2, source: "dictionary", image: "/img/cards/transport_van.webp" },
  { id: "transport_oar", topicId: "transport", che: P("пий"), ru: "весло", emoji: "🚣", level: 2, source: "corpus", image: "/img/cards/transport_oar.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];