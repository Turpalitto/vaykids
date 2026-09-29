import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "time",
    che: P("Хан"),
    ru: "Время",
    emoji: "🕐",
    gradient: "from-indigo-300 to-purple-400",
    accent: "#8B5CF6",
    unlockStars: 75,
    map: { x: 62, y: 24 },
  },
];

export const CARDS: Card[] = [
  // Времена суток
  { id: "time_day", topicId: "time", che: P("де"), ru: "день", emoji: "☀️", level: 1, source: "corpus", image: "/img/cards/time_day.webp" },
  { id: "time_night", topicId: "time", che: P("буьйса"), ru: "ночь", emoji: "🌙", level: 1, source: "corpus", image: "/img/cards/time_night.webp" },
  { id: "time_morning", topicId: "time", che: P("1уьйре"), ru: "утро", emoji: "🌅", level: 1, source: "corpus", image: "/img/cards/time_morning.webp" },
  { id: "time_evening", topicId: "time", che: P("суьйре"), ru: "вечер", emoji: "🌇", level: 1, source: "corpus", image: "/img/cards/time_evening.webp" },
  { id: "time_noon", topicId: "time", che: P("делкъе"), ru: "полдень", emoji: "🌞", level: 2, source: "dictionary", image: "/img/cards/time_noon.webp" },
  { id: "time_midnight", topicId: "time", che: P("буьйсанан юккъ"), ru: "полночь", emoji: "🌃", level: 2, source: "dictionary", image: "/img/cards/time_midnight.webp" },
  // Часы
  { id: "time_hour", topicId: "time", che: P("сахьт"), ru: "час", emoji: "⌚", level: 1, source: "corpus", image: "/img/cards/time_hour.webp" },
  { id: "time_minute", topicId: "time", che: P("минот"), ru: "минута", emoji: "⏱️", level: 2, source: "dictionary", image: "/img/cards/time_minute.webp" },
  { id: "time_second", topicId: "time", che: P("секунд"), ru: "секунда", emoji: "⏲️", level: 2, source: "dictionary", image: "/img/cards/time_second.webp" },
  // Периоды
  { id: "time_today", topicId: "time", che: P("тахана"), ru: "сегодня", emoji: "📅", level: 1, source: "corpus", image: "/img/cards/time_today.webp" },
  { id: "time_yesterday", topicId: "time", che: P("селхана"), ru: "вчера", emoji: "📅", level: 1, source: "corpus", image: "/img/cards/time_yesterday.webp" },
  { id: "time_tomorrow", topicId: "time", che: P("кхана"), ru: "завтра", emoji: "📅", level: 1, source: "corpus", image: "/img/cards/time_tomorrow.webp" },
  { id: "time_week", topicId: "time", che: P("к1ира"), ru: "неделя", emoji: "📅", level: 1, source: "corpus", image: "/img/cards/time_week.webp" },
  { id: "time_month", topicId: "time", che: P("бутт"), ru: "месяц", emoji: "📅", level: 1, source: "corpus", image: "/img/cards/time_month.webp" },
  { id: "time_year", topicId: "time", che: P("шо"), ru: "год", emoji: "📅", level: 1, source: "corpus", image: "/img/cards/time_year.webp" },
  { id: "time_century", topicId: "time", che: P("б1ешо"), ru: "век", emoji: "📅", level: 3, source: "dictionary", image: "/img/cards/time_century.webp" },
  // События
  { id: "time_now", topicId: "time", che: P("х1инца"), ru: "сейчас", emoji: "⏳", level: 1, source: "corpus", image: "/img/cards/time_now.webp" },
  { id: "time_later", topicId: "time", che: P("т1аьхьа"), ru: "позже", emoji: "⏳", level: 2, source: "corpus", image: "/img/cards/time_later.webp" },
  { id: "time_early", topicId: "time", che: P("хьалхе"), ru: "рано", emoji: "⏳", level: 2, source: "corpus", image: "/img/cards/time_early.webp" },
  { id: "time_late", topicId: "time", che: P("т1аьхьа"), ru: "поздно", emoji: "⏳", level: 2, source: "dictionary", image: "/img/cards/time_late.webp" },
  // Частота и временные ориентиры
  { id: "time_always", topicId: "time", che: P("гуттар"), ru: "всегда", emoji: "♾️", level: 1, source: "corpus", image: "/img/cards/time_always.webp" },
  { id: "time_never", topicId: "time", che: P("цкъа а"), ru: "никогда", emoji: "🚫", level: 2, source: "corpus", image: "/img/cards/time_never.webp" },
  { id: "time_sometimes", topicId: "time", che: P("наггахь"), ru: "иногда", emoji: "⏳", level: 2, source: "corpus", image: "/img/cards/time_sometimes.webp" },
  { id: "time_often", topicId: "time", che: P("каст-каста"), ru: "часто", emoji: "🔄", level: 2, source: "corpus", image: "/img/cards/time_often.webp" },
  { id: "time_dawn", topicId: "time", che: P("сахуьлу хан"), ru: "рассвет, заря", emoji: "🌅", level: 1, source: "corpus", image: "/img/cards/time_dawn.webp" },
  { id: "time_sunset", topicId: "time", che: P("малхбузе"), ru: "закат", emoji: "🌇", level: 1, source: "corpus", image: "/img/cards/time_sunset.webp" },
  { id: "time_season", topicId: "time", che: P("шеран хан"), ru: "время года, сезон", emoji: "🍂", level: 2, source: "corpus", image: "/img/cards/time_season.webp" },
  { id: "time_dayoff", topicId: "time", che: P("сада1аран де"), ru: "выходной день", emoji: "🏖️", level: 1, source: "corpus", image: "/img/cards/time_dayoff.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "t1", words: ["Тахана", "де", "ду"], ru: "Сегодня день.", emoji: "☀️📅" },
  { id: "t2", words: ["Кхана", "буьйса", "ю"], ru: "Завтра ночь.", emoji: "🌙📅" },
  { id: "t3", words: ["Х1инца", "1уьйре", "ю"], ru: "Сейчас утро.", emoji: "🌅⏳" },
];

export const SCENES: Scene[] = [
  {
    id: "time_scene",
    topicIds: ["time"],
    image: "/img/scene-time.jpg",
    objects: [
      { cardId: "time_day", x: 20, y: 30 },
      { cardId: "time_night", x: 80, y: 20 },
      { cardId: "time_morning", x: 10, y: 80 },
      { cardId: "time_evening", x: 90, y: 80 },
    ],
  },
];