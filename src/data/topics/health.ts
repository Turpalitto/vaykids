import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "health",
    che: P("могашалла"),
    ru: "Здоровье",
    emoji: "🏥",
    gradient: "from-red-200 to-pink-400",
    accent: "#EC4899",
    unlockStars: 0,
    map: { x: 5, y: 55 },
  },
];

export const CARDS: Card[] = [
  // Части тела (дополнение)
  { id: "health_hand", topicId: "health", che: P("куьг"), ru: "рука", emoji: "✋", level: 1, source: "corpus" },
  { id: "health_leg", topicId: "health", che: P("ког"), ru: "нога", emoji: "🦶", level: 1, source: "corpus" },
  { id: "health_head", topicId: "health", che: P("корта"), ru: "голова", emoji: "🙂", level: 1, source: "corpus" },
  { id: "health_eye", topicId: "health", che: P("б1аьрг"), ru: "глаз", emoji: "👁️", level: 1, source: "corpus" },
  { id: "health_ear", topicId: "health", che: P("лерг"), ru: "ухо", emoji: "👂", level: 1, source: "corpus" },
  { id: "health_nose", topicId: "health", che: P("мара"), ru: "нос", emoji: "👃", level: 1, source: "corpus" },
  { id: "health_mouth", topicId: "health", che: P("бат"), ru: "рот", emoji: "👄", level: 1, source: "corpus" },
  { id: "health_tooth", topicId: "health", che: P("церг"), ru: "зуб", emoji: "🦷", level: 1, source: "corpus" },
  { id: "health_heart", topicId: "health", che: P("дог"), ru: "сердце", emoji: "❤️", level: 1, source: "corpus" },
  // Болезни и состояния
  { id: "health_pain", topicId: "health", che: P("лазар"), ru: "боль", emoji: "🤕", level: 1, source: "corpus" },
  { id: "health_flu", topicId: "health", che: P("къуиг"), ru: "грипп", emoji: "🤒", level: 2, source: "dictionary", review: "Подтвердить «къуиг» (грипп) у носителя" },
  { id: "health_fever", topicId: "health", che: P("т1омла"), ru: "температура", emoji: "🌡️", level: 2, source: "dictionary", review: "Подтвердить слово для «температура/жар» у носителя" },
  { id: "health_cough", topicId: "health", che: P("ч1ег1ардан"), ru: "кашель", emoji: "😷", level: 2, source: "dictionary", review: "Подтвердить слово для «кашель» у носителя" },
  { id: "health_headache", topicId: "health", che: P("корталоз"), ru: "головная боль", emoji: "🤯", level: 2, source: "dictionary" },
  // Лечение
  { id: "health_doctor", topicId: "health", che: P("лоьрар"), ru: "врач", emoji: "👨‍⚕️", level: 1, source: "corpus" },
  { id: "health_nurse", topicId: "health", che: P("медсестра"), ru: "медсестра", emoji: "👩‍⚕️", level: 2, source: "dictionary" },
  { id: "health_medicine", topicId: "health", che: P("эм"), ru: "лекарство", emoji: "💊", level: 2, source: "corpus" },
  { id: "health_hospital", topicId: "health", che: P("болница"), ru: "больница", emoji: "🏥", level: 2, source: "dictionary", review: "Подтвердить «болница» (больница) у носителя" },
  { id: "health_ambulance", topicId: "health", che: P("сунсагӀ тӀехье"), ru: "скорая помощь", emoji: "🚑", level: 2, source: "dictionary", review: "Подтвердить слово для «скорая помощь» у носителя" },
  { id: "health_pharmacy", topicId: "health", che: P("аптека"), ru: "аптека", emoji: "💊", level: 2, source: "dictionary" },
  // Здоровый образ жизни
  { id: "health_sport", topicId: "health", che: P("спорт"), ru: "спорт", emoji: "🏋️", level: 1, source: "corpus" },
  { id: "health_food", topicId: "health", che: P("даар"), ru: "еда", emoji: "🍎", level: 1, source: "corpus" },
  { id: "health_water", topicId: "health", che: P("хи"), ru: "вода", emoji: "💧", level: 1, source: "corpus" },
  { id: "health_rest", topicId: "health", che: P("сада"), ru: "отдых", emoji: "😴", level: 2, source: "corpus" },
  { id: "health_clean", topicId: "health", che: P("ц1ена"), ru: "чистота", emoji: "🧼", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "he1", words: ["Ас", "корталоз", "ю"], ru: "У меня болит голова.", emoji: "🤯" },
  { id: "he2", words: ["Иза", "лоьрар", "ву"], ru: "Он врач.", emoji: "👨‍⚕️" },
];

export const SCENES: Scene[] = [
  {
    id: "health_scene",
    topicIds: ["health"],
    image: "/img/scene-health.jpg",
    objects: [
      { cardId: "health_doctor", x: 20, y: 60 },
      { cardId: "health_hospital", x: 50, y: 40 },
      { cardId: "health_medicine", x: 80, y: 70 },
      { cardId: "health_heart", x: 10, y: 80 },
    ],
  },
];