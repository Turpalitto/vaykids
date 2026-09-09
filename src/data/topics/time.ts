import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "time",
    che: P("хан"),
    ru: "Время",
    emoji: "🕐",
    gradient: "from-indigo-300 to-purple-400",
    accent: "#8B5CF6",
    unlockStars: 0,
    map: { x: 80, y: 10 },
  },
];

export const CARDS: Card[] = [
  // Времена суток
  { id: "time_day", topicId: "time", che: P("де"), ru: "день", emoji: "☀️", level: 1, source: "corpus" },
  { id: "time_night", topicId: "time", che: P("буьйса"), ru: "ночь", emoji: "🌙", level: 1, source: "corpus" },
  { id: "time_morning", topicId: "time", che: P("1уьйре"), ru: "утро", emoji: "🌅", level: 1, source: "corpus" },
  { id: "time_evening", topicId: "time", che: P("суьйре"), ru: "вечер", emoji: "🌇", level: 1, source: "corpus" },
  { id: "time_noon", topicId: "time", che: P("делкъе"), ru: "полдень", emoji: "🌞", level: 2, source: "dictionary" },
  { id: "time_midnight", topicId: "time", che: P("буьйсанна"), ru: "полночь", emoji: "🌃", level: 2, source: "dictionary" },
  // Часы
  { id: "time_hour", topicId: "time", che: P("сахьт"), ru: "час", emoji: "⌚", level: 1, source: "corpus" },
  { id: "time_minute", topicId: "time", che: P("минут"), ru: "минута", emoji: "⏱️", level: 2, source: "dictionary" },
  { id: "time_second", topicId: "time", che: P("секунд"), ru: "секунда", emoji: "⏲️", level: 2, source: "dictionary" },
  // Периоды
  { id: "time_today", topicId: "time", che: P("тахана"), ru: "сегодня", emoji: "📅", level: 1, source: "corpus" },
  { id: "time_yesterday", topicId: "time", che: P("селах1а"), ru: "вчера", emoji: "📅", level: 1, source: "corpus" },
  { id: "time_tomorrow", topicId: "time", che: P("кхана"), ru: "завтра", emoji: "📅", level: 1, source: "corpus" },
  { id: "time_week", topicId: "time", che: P("к1ира"), ru: "неделя", emoji: "📅", level: 1, source: "corpus" },
  { id: "time_month", topicId: "time", che: P("бутт"), ru: "месяц", emoji: "📅", level: 1, source: "corpus" },
  { id: "time_year", topicId: "time", che: P("шо"), ru: "год", emoji: "📅", level: 1, source: "corpus" },
  { id: "time_century", topicId: "time", che: P("б1е"), ru: "век", emoji: "📅", level: 3, source: "dictionary" },
  // События
  { id: "time_now", topicId: "time", che: P("х1инца"), ru: "сейчас", emoji: "⏳", level: 1, source: "corpus" },
  { id: "time_later", topicId: "time", che: P("т1аьхьа"), ru: "позже", emoji: "⏳", level: 2, source: "corpus" },
  { id: "time_early", topicId: "time", che: P("х1инцал"), ru: "рано", emoji: "⏳", level: 2, source: "dictionary" },
  { id: "time_late", topicId: "time", che: P("т1аьхьа"), ru: "поздно", emoji: "⏳", level: 2, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "t1", words: ["Тахана", "де", "ю"], ru: "Сегодня день.", emoji: "☀️📅" },
  { id: "t2", words: ["Кхана", "буьйса", "йу"], ru: "Завтра ночь.", emoji: "🌙📅" },
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