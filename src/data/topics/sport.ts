import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "sport",
    che: P("спорт"),
    ru: "Спорт",
    emoji: "🏃",
    gradient: "from-blue-200 to-indigo-500",
    accent: "#6366F1",
    unlockStars: 0,
    map: { x: 35, y: 15 },
  },
];

export const CARDS: Card[] = [
  // Виды спорта
  { id: "sport_run", topicId: "sport", che: P("хьаьдар"), ru: "бег", emoji: "🏃", level: 1, source: "corpus" },
  { id: "sport_swim", topicId: "sport", che: P("хьаьккхар"), ru: "плавание", emoji: "🏊", level: 2, source: "corpus" },
  { id: "sport_football", topicId: "sport", che: P("футбол"), ru: "футбол", emoji: "⚽", level: 1, source: "corpus" },
  { id: "sport_volleyball", topicId: "sport", che: P("волейбол"), ru: "волейбол", emoji: "🏐", level: 2, source: "dictionary" },
  { id: "sport_basketball", topicId: "sport", che: P("баскетбол"), ru: "баскетбол", emoji: "🏀", level: 2, source: "dictionary" },
  { id: "sport_tennis", topicId: "sport", che: P("теннис"), ru: "теннис", emoji: "🎾", level: 2, source: "dictionary" },
  { id: "sport_boxing", topicId: "sport", che: P("бокс"), ru: "бокс", emoji: "🥊", level: 2, source: "dictionary" },
  { id: "sport_wrestling", topicId: "sport", che: P("латар"), ru: "борьба", emoji: "🤼", level: 2, source: "corpus" },
  { id: "sport_gymnastics", topicId: "sport", che: P("гимнастика"), ru: "гимнастика", emoji: "🤸", level: 2, source: "dictionary" },
  { id: "sport_ski", topicId: "sport", che: P("ски"), ru: "лыжи", emoji: "⛷️", level: 2, source: "dictionary" },
  { id: "sport_cycle", topicId: "sport", che: P("велоспорт"), ru: "велоспорт", emoji: "🚴", level: 2, source: "dictionary" },
  // Инвентарь
  { id: "sport_ball", topicId: "sport", che: P("бал"), ru: "мяч", emoji: "⚽", level: 1, source: "corpus" },
  { id: "sport_gate", topicId: "sport", che: P("ворота"), ru: "ворота", emoji: "🥅", level: 2, source: "corpus" },
  { id: "sport_bat", topicId: "sport", che: P("бита"), ru: "бита", emoji: "🏏", level: 2, source: "dictionary" },
  // Действия
  { id: "sport_play", topicId: "sport", che: P("ловза"), ru: "играть", emoji: "🎮", level: 1, source: "corpus" },
  { id: "sport_win", topicId: "sport", che: P("толла"), ru: "побеждать", emoji: "🏆", level: 2, source: "corpus" },
  { id: "sport_lose", topicId: "sport", che: P("эша"), ru: "проигрывать", emoji: "😔", level: 2, source: "corpus" },
  { id: "sport_team", topicId: "sport", che: P("команда"), ru: "команда", emoji: "👥", level: 2, source: "dictionary" },
  { id: "sport_train", topicId: "sport", che: P("кхета"), ru: "тренироваться", emoji: "💪", level: 2, source: "corpus" },
  { id: "sport_stadium", topicId: "sport", che: P("стадион"), ru: "стадион", emoji: "🏟️", level: 2, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "sp1", words: ["Ас", "футбол", "ловзу"], ru: "Я играю в футбол.", emoji: "⚽" },
  { id: "sp2", words: ["Иза", "хьаьдар", "ву"], ru: "Он бегает.", emoji: "🏃" },
];

export const SCENES: Scene[] = [
  {
    id: "sport_scene",
    topicIds: ["sport"],
    image: "/img/scene-sport.jpg",
    objects: [
      { cardId: "sport_ball", x: 20, y: 60 },
      { cardId: "sport_run", x: 50, y: 40 },
      { cardId: "sport_football", x: 80, y: 70 },
      { cardId: "sport_stadium", x: 40, y: 20 },
    ],
  },
];