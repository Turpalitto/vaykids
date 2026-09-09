import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "holidays",
    che: P("д1аж"),
    ru: "Праздники",
    emoji: "🎉",
    gradient: "from-yellow-200 to-red-400",
    accent: "#EF4444",
    unlockStars: 0,
    map: { x: 5, y: 20 },
  },
];

export const CARDS: Card[] = [
  // Праздники
  { id: "hol_newyear", topicId: "holidays", che: P("керла шо"), ru: "Новый год", emoji: "🎄", level: 1, source: "corpus" },
  { id: "hol_birthday", topicId: "holidays", che: P("ден"), ru: "День рождения", emoji: "🎂", level: 1, source: "corpus" },
  { id: "hol_wedding", topicId: "holidays", che: P("ловзар"), ru: "свадьба", emoji: "💒", level: 2, source: "corpus" },
  { id: "hol_eid", topicId: "holidays", che: P("марха"), ru: "праздник (ураза-байрам)", emoji: "🕌", level: 2, source: "dictionary" },
  { id: "hol_kurban", topicId: "holidays", che: P("к1урбан"), ru: "Курбан-байрам", emoji: "🐑", level: 2, source: "dictionary" },
  { id: "hol_victory", topicId: "holidays", che: P("толлам"), ru: "День Победы", emoji: "🎖️", level: 2, source: "corpus" },
  { id: "hol_constitution", topicId: "holidays", che: P("конституци"), ru: "День Конституции", emoji: "📜", level: 2, source: "dictionary" },
  // Праздничные атрибуты
  { id: "hol_gift", topicId: "holidays", che: P("салам"), ru: "подарок", emoji: "🎁", level: 1, source: "corpus" },
  { id: "hol_balloon", topicId: "holidays", che: P("шар"), ru: "воздушный шар", emoji: "🎈", level: 1, source: "corpus" },
  { id: "hol_cake", topicId: "holidays", che: P("кекс"), ru: "торт", emoji: "🎂", level: 1, source: "corpus" },
  { id: "hol_candle", topicId: "holidays", che: P("свеча"), ru: "свеча", emoji: "🕯️", level: 2, source: "dictionary" },
  { id: "hol_fireworks", topicId: "holidays", che: P("ц1ех"), ru: "фейерверк", emoji: "🎆", level: 2, source: "dictionary" },
  { id: "hol_music", topicId: "holidays", che: P("музыка"), ru: "музыка", emoji: "🎵", level: 1, source: "corpus" },
  { id: "hol_dance", topicId: "holidays", che: P("хелхар"), ru: "танец", emoji: "💃", level: 1, source: "corpus" },
  // Праздничные действия
  { id: "hol_celebrate", topicId: "holidays", che: P("д1аж"), ru: "праздновать", emoji: "🎉", level: 2, source: "corpus" },
  { id: "hol_congratulate", topicId: "holidays", che: P("маршалла"), ru: "поздравлять", emoji: "🤝", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "ho1", words: ["Тахана", "ден", "ду"], ru: "Сегодня день рождения.", emoji: "🎂" },
  { id: "ho2", words: ["Ас", "салам", "эцу"], ru: "Я покупаю подарок.", emoji: "🎁" },
];

export const SCENES: Scene[] = [
  {
    id: "hol_scene",
    topicIds: ["holidays"],
    image: "/img/scene-holiday.jpg",
    objects: [
      { cardId: "hol_gift", x: 20, y: 60 },
      { cardId: "hol_balloon", x: 50, y: 30 },
      { cardId: "hol_cake", x: 80, y: 70 },
      { cardId: "hol_fireworks", x: 40, y: 80 },
    ],
  },
];