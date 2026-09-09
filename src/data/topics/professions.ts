import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "professions",
    che: P("говзаллаш"),
    ru: "Профессии",
    emoji: "👨‍💼",
    gradient: "from-blue-200 to-indigo-400",
    accent: "#4F46E5",
    unlockStars: 0,
    map: { x: 10, y: 40 },
  },
];

export const CARDS: Card[] = [
  // Базовые профессии
  { id: "prof_doctor", topicId: "professions", che: P("лоьрар"), ru: "врач", emoji: "👨‍⚕️", level: 1, source: "corpus" },
  { id: "prof_teacher", topicId: "professions", che: P("хьехархо"), ru: "учитель", emoji: "👩‍🏫", level: 1, source: "corpus" },
  { id: "prof_driver", topicId: "professions", che: P("машинист"), ru: "водитель", emoji: "🚗", level: 1, source: "corpus" },
  { id: "prof_cook", topicId: "professions", che: P("коч"), ru: "повар", emoji: "👨‍🍳", level: 1, source: "corpus" },
  { id: "prof_engineer", topicId: "professions", che: P("инженер"), ru: "инженер", emoji: "👷", level: 2, source: "dictionary" },
  { id: "prof_builder", topicId: "professions", che: P("чер"), ru: "строитель", emoji: "👷‍♂️", level: 2, source: "corpus" },
  { id: "prof_farmer", topicId: "professions", che: P("йуьртанхо"), ru: "фермер", emoji: "🧑‍🌾", level: 1, source: "corpus" },
  { id: "prof_military", topicId: "professions", che: P("эскархо"), ru: "военный", emoji: "💂", level: 2, source: "corpus" },
  { id: "prof_police", topicId: "professions", che: P("полицейски"), ru: "полицейский", emoji: "👮", level: 2, source: "dictionary" },
  { id: "prof_firefighter", topicId: "professions", che: P("ц1ехтуьллург"), ru: "пожарный", emoji: "🧑‍🚒", level: 2, source: "dictionary" },
  { id: "prof_pilot", topicId: "professions", che: P("кеманхо"), ru: "пилот", emoji: "👨‍✈️", level: 2, source: "corpus" },
  { id: "prof_sailor", topicId: "professions", che: P("хинкеманхо"), ru: "моряк", emoji: "⛵", level: 2, source: "dictionary" },
  { id: "prof_artist", topicId: "professions", che: P("сёртдилларг"), ru: "художник", emoji: "🎨", level: 2, source: "corpus" },
  { id: "prof_musician", topicId: "professions", che: P("музыкант"), ru: "музыкант", emoji: "🎵", level: 2, source: "dictionary" },
  { id: "prof_writer", topicId: "professions", che: P("йаздархо"), ru: "писатель", emoji: "📝", level: 2, source: "corpus" },
  { id: "prof_scientist", topicId: "professions", che: P("1илманча"), ru: "учёный", emoji: "🔬", level: 2, source: "dictionary" },
  { id: "prof_accountant", topicId: "professions", che: P("бухгалтер"), ru: "бухгалтер", emoji: "🧾", level: 2, source: "dictionary" },
  { id: "prof_shopkeeper", topicId: "professions", che: P("туькананхо"), ru: "продавец", emoji: "🧑‍💼", level: 1, source: "dictionary" },
  { id: "prof_athlete", topicId: "professions", che: P("спортхо"), ru: "спортсмен", emoji: "🏃", level: 1, source: "corpus" },
  { id: "prof_chef", topicId: "professions", che: P("коч"), ru: "шеф-повар", emoji: "👨‍🍳", level: 2, source: "corpus" },
  { id: "prof_dentist", topicId: "professions", che: P("церглоьрар"), ru: "стоматолог", emoji: "🦷", level: 2, source: "dictionary" },
  { id: "prof_pharmacist", topicId: "professions", che: P("аптекар"), ru: "фармацевт", emoji: "💊", level: 2, source: "dictionary" },
  { id: "prof_judge", topicId: "professions", che: P("судья"), ru: "судья", emoji: "⚖️", level: 2, source: "dictionary" },
  { id: "prof_lawyer", topicId: "professions", che: P("адвокат"), ru: "адвокат", emoji: "👩‍⚖️", level: 2, source: "dictionary" },
  { id: "prof_manager", topicId: "professions", che: P("менеджер"), ru: "менеджер", emoji: "👔", level: 2, source: "dictionary" },
  { id: "prof_it", topicId: "professions", che: P("программист"), ru: "программист", emoji: "💻", level: 2, source: "dictionary" },
  { id: "prof_architect", topicId: "professions", che: P("архитектор"), ru: "архитектор", emoji: "🏛️", level: 2, source: "dictionary" },
  { id: "prof_journalist", topicId: "professions", che: P("журналист"), ru: "журналист", emoji: "📰", level: 2, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "p1", words: ["Цо", "лоьрар", "ву"], ru: "Он врач.", emoji: "👨‍⚕️" },
  { id: "p2", words: ["Иза", "хьехархо", "ю"], ru: "Она учитель.", emoji: "👩‍🏫" },
  { id: "p3", words: ["Ас", "инженер", "ба"], ru: "Я инженер.", emoji: "👷" },
];

export const SCENES: Scene[] = [
  {
    id: "prof_scene",
    topicIds: ["professions"],
    image: "/img/scene-professions.jpg",
    objects: [
      { cardId: "prof_doctor", x: 20, y: 60 },
      { cardId: "prof_teacher", x: 50, y: 40 },
      { cardId: "prof_driver", x: 80, y: 70 },
      { cardId: "prof_cook", x: 10, y: 80 },
    ],
  },
];