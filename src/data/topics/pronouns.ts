import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "pronouns",
    che: P("ц1ерметдошш"),
    ru: "Вопросы и местоимения",
    emoji: "❓",
    gradient: "from-yellow-100 to-orange-200",
    accent: "#F59E0B",
    unlockStars: 0,
    map: { x: 50, y: 0 },
  },
];

export const CARDS: Card[] = [
  // Личные местоимения
  { id: "pron_i", topicId: "pronouns", che: P("со"), ru: "я", emoji: "🧑", level: 1, source: "corpus" },
  { id: "pron_you", topicId: "pronouns", che: P("хьо"), ru: "ты", emoji: "🧑", level: 1, source: "corpus" },
  { id: "pron_he", topicId: "pronouns", che: P("иза"), ru: "он", emoji: "👨", level: 1, source: "corpus" },
  { id: "pron_she", topicId: "pronouns", che: P("иза"), ru: "она", emoji: "👩", level: 1, source: "corpus" },
  { id: "pron_we", topicId: "pronouns", che: P("тхо"), ru: "мы", emoji: "👥", level: 1, source: "corpus" },
  { id: "pron_you_pl", topicId: "pronouns", che: P("шун"), ru: "вы (мн.ч.)", emoji: "👥", level: 1, source: "corpus" },
  { id: "pron_they", topicId: "pronouns", che: P("уьш"), ru: "они", emoji: "👥", level: 1, source: "corpus" },

  // Притяжательные местоимения
  { id: "pron_my", topicId: "pronouns", che: P("сан"), ru: "мой", emoji: "👤", level: 1, source: "corpus" },
  { id: "pron_your", topicId: "pronouns", che: P("х1ан"), ru: "твой", emoji: "👤", level: 1, source: "corpus" },
  { id: "pron_his", topicId: "pronouns", che: P("цун"), ru: "его", emoji: "👤", level: 1, source: "corpus" },
  { id: "pron_her", topicId: "pronouns", che: P("цун"), ru: "её", emoji: "👤", level: 1, source: "corpus" },
  { id: "pron_our", topicId: "pronouns", che: P("тхан"), ru: "наш", emoji: "👥", level: 1, source: "corpus" },
  { id: "pron_your_pl", topicId: "pronouns", che: P("шун"), ru: "ваш", emoji: "👥", level: 2, source: "corpus" },
  { id: "pron_their", topicId: "pronouns", che: P("церан"), ru: "их", emoji: "👥", level: 2, source: "corpus" },

  // Вопросительные слова
  { id: "pron_who", topicId: "pronouns", che: P("мила"), ru: "кто", emoji: "❓", level: 1, source: "corpus" },
  { id: "pron_what", topicId: "pronouns", che: P("х1ун"), ru: "что", emoji: "❓", level: 1, source: "corpus" },
  { id: "pron_where", topicId: "pronouns", che: P("мича"), ru: "где", emoji: "📍", level: 1, source: "corpus" },
  { id: "pron_when", topicId: "pronouns", che: P("маца"), ru: "когда", emoji: "⏰", level: 1, source: "corpus" },
  { id: "pron_why", topicId: "pronouns", che: P("х1унда"), ru: "почему", emoji: "❓", level: 2, source: "corpus" },
  { id: "pron_how", topicId: "pronouns", che: P("мадарра"), ru: "как", emoji: "❓", level: 1, source: "corpus" },
  { id: "pron_how_much", topicId: "pronouns", che: P("масс"), ru: "сколько", emoji: "🔢", level: 2, source: "corpus" },
  { id: "pron_which", topicId: "pronouns", che: P("мич"), ru: "какой", emoji: "❓", level: 2, source: "corpus" },

  // Указательные местоимения
  { id: "pron_this", topicId: "pronouns", che: P("х1ара"), ru: "этот", emoji: "👉", level: 1, source: "corpus" },
  { id: "pron_that", topicId: "pronouns", che: P("иззна"), ru: "тот", emoji: "👈", level: 2, source: "dictionary", review: "Подтвердить указательное местоимение «тот» у носителя" },
  { id: "pron_these", topicId: "pronouns", che: P("х1араш"), ru: "эти", emoji: "👉", level: 2, source: "corpus" },
  { id: "pron_those", topicId: "pronouns", che: P("ид"), ru: "те", emoji: "👈", level: 2, source: "corpus" },

  // Другие полезные
  { id: "pron_all", topicId: "pronouns", che: P("дерриг"), ru: "все, весь", emoji: "🌍", level: 1, source: "corpus" },
  { id: "pron_some", topicId: "pronouns", che: P("цхьа"), ru: "некоторый, один", emoji: "1️⃣", level: 2, source: "corpus" },
  { id: "pron_no", topicId: "pronouns", che: P("цхьа"), ru: "никакой, ни один", emoji: "🚫", level: 2, source: "corpus" },
  { id: "pron_every", topicId: "pronouns", che: P("х1ора"), ru: "каждый", emoji: "✅", level: 2, source: "corpus" },
  { id: "pron_other", topicId: "pronouns", che: P("кхин"), ru: "другой", emoji: "🔄", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "pr1", words: ["Со", "бепиг", "доу"], ru: "Я ем хлеб.", emoji: "🧑🍞" },
  { id: "pr2", words: ["Х1ара", "сан", "ц1а", "ду"], ru: "Это мой дом.", emoji: "🏠" },
  { id: "pr3", words: ["Мила", "ву", "иза"], ru: "Кто он?", emoji: "❓" },
];

export const SCENES: Scene[] = [
  {
    id: "pron_scene",
    topicIds: ["pronouns"],
    image: "/img/scene-pronouns.jpg",
    objects: [
      { cardId: "pron_i", x: 20, y: 60 },
      { cardId: "pron_my", x: 50, y: 40 },
      { cardId: "pron_this", x: 80, y: 70 },
      { cardId: "pron_who", x: 10, y: 80 },
    ],
  },
];