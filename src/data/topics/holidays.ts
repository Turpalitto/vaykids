import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "holidays",
    che: P("Деза денош"),
    ru: "Праздники",
    emoji: "🎉",
    gradient: "from-yellow-200 to-red-400",
    accent: "#EF4444",
    unlockStars: 100,
    map: { x: 74, y: 14 },
  },
];

export const CARDS: Card[] = [
  // Праздники
  { id: "hol_newyear", topicId: "holidays", che: P("керла шо"), ru: "Новый год", emoji: "🎄", level: 1, source: "corpus", image: "/img/cards/hol_newyear.webp" },
  { id: "hol_birthday", topicId: "holidays", che: P("вина де"), ru: "День рождения", emoji: "🎂", level: 1, source: "corpus", image: "/img/cards/hol_birthday.webp" },
  { id: "hol_wedding", topicId: "holidays", che: P("ловзар"), ru: "свадьба", emoji: "💒", level: 2, source: "corpus", image: "/img/cards/hol_wedding.webp" },
  { id: "hol_eid", topicId: "holidays", che: P("Мархадосту де"), ru: "Ураза-байрам", emoji: "🕌", level: 2, source: "dictionary", image: "/img/cards/hol_eid.webp" },
  { id: "hol_kurban", topicId: "holidays", che: P("Г1урба"), ru: "Курбан-байрам", emoji: "🐑", level: 2, source: "dictionary", image: "/img/cards/hol_kurban.webp" },
  { id: "hol_victory", topicId: "holidays", che: P("Толаман де"), ru: "День Победы", emoji: "🎖️", level: 2, source: "corpus", image: "/img/cards/hol_victory.webp" },
  { id: "hol_constitution", topicId: "holidays", che: P("Конституцин де"), ru: "День Конституции", emoji: "📜", level: 2, source: "dictionary", image: "/img/cards/hol_constitution.webp" },
  // Праздничные атрибуты
  { id: "hol_gift", topicId: "holidays", che: P("совг1ат"), ru: "подарок", emoji: "🎁", level: 1, source: "corpus", image: "/img/cards/hol_gift.webp" },
  { id: "hol_balloon", topicId: "holidays", che: P("х1аваан шар"), ru: "воздушный шар", emoji: "🎈", level: 1, source: "corpus", image: "/img/cards/hol_balloon.webp" },
  { id: "hol_cake", topicId: "holidays", che: P("торт"), ru: "торт", emoji: "🎂", level: 1, source: "corpus", image: "/img/cards/hol_cake.webp" },
  { id: "hol_candle", topicId: "holidays", che: P("ч1урам"), ru: "свеча", emoji: "🕯️", level: 2, source: "dictionary", image: "/img/cards/hol_candle.webp" },
  { id: "hol_fireworks", topicId: "holidays", che: P("салют"), ru: "фейерверк, салют", emoji: "🎆", level: 2, source: "dictionary", image: "/img/cards/hol_fireworks.webp" },
  { id: "hol_music", topicId: "holidays", che: P("эшарш"), ru: "музыка, песни", emoji: "🎵", level: 1, source: "corpus", image: "/img/cards/hol_music.webp" },
  { id: "hol_dance", topicId: "holidays", che: P("хелхар"), ru: "танец", emoji: "💃", level: 1, source: "corpus", image: "/img/cards/hol_dance.webp" },
  // Праздничные действия
  { id: "hol_celebrate", topicId: "holidays", che: P("даздан"), ru: "праздновать", emoji: "🎉", level: 2, source: "corpus", image: "/img/cards/hol_celebrate.webp" },
  { id: "hol_congratulate", topicId: "holidays", che: P("декъалдан"), ru: "поздравлять", emoji: "🤝", level: 2, source: "corpus", image: "/img/cards/hol_congratulate.webp" },
  // Праздничная атмосфера и традиции
  { id: "hol_table", topicId: "holidays", che: P("шун"), ru: "праздничный стол", emoji: "🍽️", level: 1, source: "corpus", image: "/img/cards/hol_table.webp" },
  { id: "hol_joy", topicId: "holidays", che: P("хазахетар"), ru: "радость, веселье", emoji: "😃", level: 1, source: "corpus", image: "/img/cards/hol_joy.webp" },
  { id: "hol_card", topicId: "holidays", che: P("декъалден кехат"), ru: "поздравительная открытка", emoji: "💌", level: 2, source: "corpus", image: "/img/cards/hol_card.webp" },
  { id: "hol_bouquet", topicId: "holidays", che: P("зезагийн курс"), ru: "букет цветов", emoji: "💐", level: 1, source: "corpus", image: "/img/cards/hol_bouquet.webp" },
  { id: "hol_ribbon", topicId: "holidays", che: P("лента"), ru: "праздничная лента", emoji: "🎀", level: 1, source: "dictionary", image: "/img/cards/hol_ribbon.webp" },
  { id: "hol_applause", topicId: "holidays", che: P("т1араш деттар"), ru: "аплодисменты", emoji: "👏", level: 2, source: "corpus", image: "/img/cards/hol_applause.webp" },
  { id: "hol_chechen_dance", topicId: "holidays", che: P("нохчийн хелхар"), ru: "лезгинка, чеченский танец", emoji: "🕺", level: 1, source: "corpus", image: "/img/cards/hol_chechen_dance.webp" },
  { id: "hol_blessing", topicId: "holidays", che: P("до1а"), ru: "благопожелание, дуа", emoji: "🤲", level: 1, source: "corpus", image: "/img/cards/hol_blessing.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "ho1", words: ["Тахана", "вина", "де", "ду"], ru: "Сегодня день рождения.", emoji: "🎂" },
  { id: "ho2", words: ["Ас", "совг1ат", "оьцу"], ru: "Я покупаю подарок.", emoji: "🎁" },
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