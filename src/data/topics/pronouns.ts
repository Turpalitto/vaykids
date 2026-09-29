import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "pronouns",
    che: P("Ц1ерметдешнаш"),
    ru: "Местоимения",
    emoji: "❓",
    gradient: "from-yellow-100 to-orange-200",
    accent: "#F59E0B",
    unlockStars: 85,
    map: { x: 50, y: 18 },
  },
];

export const CARDS: Card[] = [
  // Личные местоимения
  { id: "pron_i", topicId: "pronouns", che: P("со"), ru: "я", emoji: "🧑", level: 1, source: "corpus", image: "/img/cards/pron_i.webp" },
  { id: "pron_you", topicId: "pronouns", che: P("хьо"), ru: "ты", emoji: "🧑", level: 1, source: "corpus", image: "/img/cards/pron_you.webp" },
  { id: "pron_he", topicId: "pronouns", che: P("иза"), ru: "он", emoji: "👨", level: 1, source: "corpus", image: "/img/cards/pron_he.webp" },
  { id: "pron_she", topicId: "pronouns", che: P("иза"), ru: "она", emoji: "👩", level: 1, source: "corpus", image: "/img/cards/pron_she.webp" },
  { id: "pron_we", topicId: "pronouns", che: P("тхо"), ru: "мы", emoji: "👥", level: 1, source: "corpus", image: "/img/cards/pron_we.webp" },
  { id: "pron_you_pl", topicId: "pronouns", che: P("шу"), ru: "вы", emoji: "👥", level: 1, source: "corpus", image: "/img/cards/pron_you_pl.webp" },
  { id: "pron_they", topicId: "pronouns", che: P("уьш"), ru: "они", emoji: "👥", level: 1, source: "corpus", image: "/img/cards/pron_they.webp" },

  // Притяжательные местоимения
  { id: "pron_my", topicId: "pronouns", che: P("сан"), ru: "мой", emoji: "👤", level: 1, source: "corpus", image: "/img/cards/pron_my.webp" },
  { id: "pron_your", topicId: "pronouns", che: P("хьан"), ru: "твой", emoji: "👤", level: 1, source: "corpus", image: "/img/cards/pron_your.webp" },
  { id: "pron_his", topicId: "pronouns", che: P("цуьнан"), ru: "его", emoji: "👤", level: 1, source: "corpus", image: "/img/cards/pron_his.webp" },
  { id: "pron_her", topicId: "pronouns", che: P("цуьнан"), ru: "её", emoji: "👤", level: 1, source: "corpus", image: "/img/cards/pron_her.webp" },
  { id: "pron_our", topicId: "pronouns", che: P("тхан"), ru: "наш", emoji: "👥", level: 1, source: "corpus", image: "/img/cards/pron_our.webp" },
  { id: "pron_your_pl", topicId: "pronouns", che: P("шун"), ru: "ваш", emoji: "👥", level: 2, source: "corpus", image: "/img/cards/pron_your_pl.webp" },
  { id: "pron_their", topicId: "pronouns", che: P("церан"), ru: "их", emoji: "👥", level: 2, source: "corpus", image: "/img/cards/pron_their.webp" },

  // Вопросительные слова
  { id: "pron_who", topicId: "pronouns", che: P("мила"), ru: "кто", emoji: "❓", level: 1, source: "corpus", image: "/img/cards/pron_who.webp" },
  { id: "pron_what", topicId: "pronouns", che: P("х1ун"), ru: "что", emoji: "❓", level: 1, source: "corpus", image: "/img/cards/pron_what.webp" },
  { id: "pron_where", topicId: "pronouns", che: P("мичахь"), ru: "где", emoji: "📍", level: 1, source: "corpus", image: "/img/cards/pron_where.webp" },
  { id: "pron_when", topicId: "pronouns", che: P("маца"), ru: "когда", emoji: "⏰", level: 1, source: "corpus", image: "/img/cards/pron_when.webp" },
  { id: "pron_why", topicId: "pronouns", che: P("х1унда"), ru: "почему", emoji: "❓", level: 2, source: "corpus", image: "/img/cards/pron_why.webp" },
  { id: "pron_how", topicId: "pronouns", che: P("муха"), ru: "как", emoji: "❓", level: 1, source: "corpus", image: "/img/cards/pron_how.webp" },
  { id: "pron_how_much", topicId: "pronouns", che: P("маса"), ru: "сколько", emoji: "🔢", level: 2, source: "corpus", image: "/img/cards/pron_how_much.webp" },
  { id: "pron_which", topicId: "pronouns", che: P("муьлха"), ru: "какой, который", emoji: "❓", level: 2, source: "corpus", image: "/img/cards/pron_which.webp" },

  // Указательные местоимения
  { id: "pron_this", topicId: "pronouns", che: P("х1ара"), ru: "этот", emoji: "👉", level: 1, source: "corpus", image: "/img/cards/pron_this.webp" },
  { id: "pron_that", topicId: "pronouns", che: P("д1ора"), ru: "тот, вон тот", emoji: "👈", level: 2, source: "corpus", image: "/img/cards/pron_that.webp" },
  { id: "pron_these", topicId: "pronouns", che: P("х1араш"), ru: "эти", emoji: "👉", level: 2, source: "corpus", image: "/img/cards/pron_these.webp" },
  { id: "pron_those", topicId: "pronouns", che: P("д1ораш"), ru: "те, вон те", emoji: "👈", level: 2, source: "corpus", image: "/img/cards/pron_those.webp" },

  // Другие полезные
  { id: "pron_all", topicId: "pronouns", che: P("дерриг"), ru: "все, всё", emoji: "🌍", level: 1, source: "corpus", image: "/img/cards/pron_all.webp" },
  { id: "pron_some", topicId: "pronouns", che: P("цхьа"), ru: "некоторый, один", emoji: "1️⃣", level: 2, source: "corpus", image: "/img/cards/pron_some.webp" },
  { id: "pron_no", topicId: "pronouns", che: P("х1умма а"), ru: "ничто, никакой", emoji: "🚫", level: 2, source: "corpus", image: "/img/cards/pron_no.webp" },
  { id: "pron_every", topicId: "pronouns", che: P("х1ора"), ru: "каждый", emoji: "✅", level: 2, source: "corpus", image: "/img/cards/pron_every.webp" },
  { id: "pron_other", topicId: "pronouns", che: P("кхин"), ru: "другой", emoji: "🔄", level: 2, source: "corpus", image: "/img/cards/pron_other.webp" },
  // Место и указание
  { id: "pron_here", topicId: "pronouns", che: P("кхузахь"), ru: "здесь, тут", emoji: "📍", level: 1, source: "corpus", image: "/img/cards/pron_here.webp" },
  { id: "pron_there", topicId: "pronouns", che: P("цигахь"), ru: "там", emoji: "📌", level: 1, source: "corpus", image: "/img/cards/pron_there.webp" },
  { id: "pron_whither", topicId: "pronouns", che: P("мича"), ru: "куда", emoji: "🧭", level: 2, source: "corpus", image: "/img/cards/pron_whither.webp" },
  { id: "pron_whence", topicId: "pronouns", che: P("мичара"), ru: "откуда", emoji: "🛫", level: 2, source: "corpus", image: "/img/cards/pron_whence.webp" },
  { id: "pron_self", topicId: "pronouns", che: P("ша"), ru: "сам, себя", emoji: "👤", level: 2, source: "corpus", image: "/img/cards/pron_self.webp" },
  { id: "pron_together", topicId: "pronouns", che: P("цхьаьна"), ru: "вместе", emoji: "🤝", level: 1, source: "corpus", image: "/img/cards/pron_together.webp" },
  { id: "pron_such", topicId: "pronouns", che: P("иштта"), ru: "такой, так", emoji: "👍", level: 2, source: "corpus", image: "/img/cards/pron_such.webp" },
  { id: "pron_nobody", topicId: "pronouns", che: P("цхьа а"), ru: "никто, ни один", emoji: "👤", level: 2, source: "corpus", image: "/img/cards/pron_nobody.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "pr1", words: ["Ас", "бепиг", "доу"], ru: "Я ем хлеб.", emoji: "🧑🍞" },
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