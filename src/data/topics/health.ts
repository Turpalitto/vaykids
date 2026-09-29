import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "health",
    che: P("Могашалла"),
    ru: "Здоровье",
    emoji: "🏥",
    gradient: "from-red-200 to-pink-400",
    accent: "#EC4899",
    unlockStars: 70,
    map: { x: 76, y: 32 },
  },
];

export const CARDS: Card[] = [
  // Части тела (дополнение)
  { id: "health_hand", topicId: "health", che: P("куьг"), ru: "рука", emoji: "✋", level: 1, source: "corpus", image: "/img/cards/health_hand.webp" },
  { id: "health_leg", topicId: "health", che: P("ког"), ru: "нога", emoji: "🦶", level: 1, source: "corpus", image: "/img/cards/health_leg.webp" },
  { id: "health_head", topicId: "health", che: P("корта"), ru: "голова", emoji: "🙂", level: 1, source: "corpus", image: "/img/cards/health_head.webp" },
  { id: "health_eye", topicId: "health", che: P("б1аьрг"), ru: "глаз", emoji: "👁️", level: 1, source: "corpus", image: "/img/cards/health_eye.webp" },
  { id: "health_ear", topicId: "health", che: P("лерг"), ru: "ухо", emoji: "👂", level: 1, source: "corpus", image: "/img/cards/health_ear.webp" },
  { id: "health_nose", topicId: "health", che: P("мара"), ru: "нос", emoji: "👃", level: 1, source: "corpus", image: "/img/cards/health_nose.webp" },
  { id: "health_mouth", topicId: "health", che: P("бага"), ru: "рот", emoji: "👄", level: 1, source: "corpus", image: "/img/cards/health_mouth.webp" },
  { id: "health_tooth", topicId: "health", che: P("церг"), ru: "зуб", emoji: "🦷", level: 1, source: "corpus", image: "/img/cards/health_tooth.webp" },
  { id: "health_heart", topicId: "health", che: P("дог"), ru: "сердце", emoji: "❤️", level: 1, source: "corpus", image: "/img/cards/health_heart.webp" },
  // Болезни и состояния
  { id: "health_pain", topicId: "health", che: P("лазар"), ru: "боль", emoji: "🤕", level: 1, source: "corpus", image: "/img/cards/health_pain.webp" },
  { id: "health_flu", topicId: "health", che: P("шелдалар"), ru: "простуда / грипп", emoji: "🤒", level: 2, source: "corpus", image: "/img/cards/health_flu.webp" },
  { id: "health_fever", topicId: "health", che: P("йовхо"), ru: "жар / температура", emoji: "🌡️", level: 2, source: "corpus", image: "/img/cards/health_fever.webp" },
  { id: "health_cough", topicId: "health", che: P("йовхарш"), ru: "кашель", emoji: "😷", level: 2, source: "corpus", image: "/img/cards/health_cough.webp" },
  { id: "health_headache", topicId: "health", che: P("корта лазар"), ru: "головная боль", emoji: "🤯", level: 2, source: "corpus", image: "/img/cards/health_headache.webp" },
  // Лечение
  { id: "health_doctor", topicId: "health", che: P("лор"), ru: "врач", emoji: "👨‍⚕️", level: 1, source: "corpus", image: "/img/cards/health_doctor.webp" },
  { id: "health_nurse", topicId: "health", che: P("лоьран г1овс"), ru: "медсестра", emoji: "👩‍⚕️", level: 2, source: "corpus", image: "/img/cards/health_nurse.webp" },
  { id: "health_medicine", topicId: "health", che: P("молха"), ru: "лекарство", emoji: "💊", level: 1, source: "corpus", image: "/img/cards/health_medicine.webp" },
  { id: "health_hospital", topicId: "health", che: P("дарбанц1а"), ru: "больница", emoji: "🏥", level: 2, source: "corpus", image: "/img/cards/health_hospital.webp" },
  { id: "health_ambulance", topicId: "health", che: P("сиха г1о"), ru: "скорая помощь", emoji: "🚑", level: 2, source: "corpus", image: "/img/cards/health_ambulance.webp" },
  { id: "health_pharmacy", topicId: "health", che: P("молханийн туька"), ru: "аптека", emoji: "🏪", level: 2, source: "corpus", image: "/img/cards/health_pharmacy.webp" },
  // Здоровый образ жизни
  { id: "health_sport", topicId: "health", che: P("спорт"), ru: "спорт", emoji: "🏋️", level: 1, source: "corpus", image: "/img/cards/health_sport.webp" },
  { id: "health_food", topicId: "health", che: P("даар"), ru: "еда", emoji: "🍎", level: 1, source: "corpus", image: "/img/cards/health_food.webp" },
  { id: "health_water", topicId: "health", che: P("хи"), ru: "вода", emoji: "💧", level: 1, source: "corpus", image: "/img/cards/health_water.webp" },
  { id: "health_rest", topicId: "health", che: P("сада1ар"), ru: "отдых", emoji: "😴", level: 2, source: "corpus", image: "/img/cards/health_rest.webp" },
  { id: "health_clean", topicId: "health", che: P("ц1еналла"), ru: "чистота", emoji: "🧼", level: 2, source: "corpus", image: "/img/cards/health_clean.webp" },
  // Гигиена и лечение
  { id: "health_soap", topicId: "health", che: P("саба"), ru: "мыло", emoji: "🧼", level: 1, source: "corpus", image: "/img/cards/health_soap.webp" },
  { id: "health_toothbrush", topicId: "health", che: P("цергийн щетка"), ru: "зубная щётка", emoji: "🪥", level: 1, source: "dictionary", image: "/img/cards/health_toothbrush.webp" },
  { id: "health_wound", topicId: "health", che: P("чов"), ru: "ранка, царапина", emoji: "🩹", level: 2, source: "corpus", image: "/img/cards/health_wound.webp" },
  { id: "health_bandage", topicId: "health", che: P("бинт"), ru: "бинт, повязка", emoji: "🩹", level: 1, source: "dictionary", image: "/img/cards/health_bandage.webp" },
  { id: "health_thermometer", topicId: "health", che: P("градусник"), ru: "термометр, градусник", emoji: "🌡️", level: 1, source: "dictionary", image: "/img/cards/health_thermometer.webp" },
  { id: "health_vitamins", topicId: "health", che: P("витаминаш"), ru: "витамины", emoji: "💊", level: 1, source: "dictionary", image: "/img/cards/health_vitamins.webp" },
  { id: "health_sleep", topicId: "health", che: P("дижар"), ru: "сон", emoji: "🛌", level: 1, source: "corpus", image: "/img/cards/health_sleep.webp" },
  { id: "health_healthy", topicId: "health", che: P("могаш"), ru: "здоровый", emoji: "💪", level: 1, source: "corpus", image: "/img/cards/health_healthy.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "he1", words: ["Сан", "корта", "лозу"], ru: "У меня болит голова.", emoji: "🤯" },
  { id: "he2", words: ["Иза", "лор", "ву"], ru: "Он врач.", emoji: "👨‍⚕️" },
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