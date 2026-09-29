import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "professions",
    che: P("Говзаллаш"),
    ru: "Профессии",
    emoji: "👨‍💼",
    gradient: "from-blue-200 to-indigo-400",
    accent: "#4F46E5",
    unlockStars: 80,
    map: { x: 38, y: 24 },
  },
];

export const CARDS: Card[] = [
  // Базовые профессии
  { id: "prof_doctor", topicId: "professions", che: P("лор"), ru: "врач", emoji: "👨‍⚕️", level: 1, source: "corpus", image: "/img/cards/prof_doctor.webp" },
  { id: "prof_teacher", topicId: "professions", che: P("хьехархо"), ru: "учитель", emoji: "👩‍🏫", level: 1, source: "corpus", image: "/img/cards/prof_teacher.webp" },
  { id: "prof_driver", topicId: "professions", che: P("машенхо"), ru: "водитель", emoji: "🚗", level: 1, source: "corpus", image: "/img/cards/prof_driver.webp" },
  { id: "prof_cook", topicId: "professions", che: P("кхачабанхо"), ru: "повар", emoji: "👨‍🍳", level: 1, source: "corpus", image: "/img/cards/prof_cook.webp" },
  { id: "prof_engineer", topicId: "professions", che: P("инженер"), ru: "инженер", emoji: "👷", level: 2, source: "dictionary", image: "/img/cards/prof_engineer.webp" },
  { id: "prof_builder", topicId: "professions", che: P("г1ишлохо"), ru: "строитель", emoji: "👷‍♂️", level: 2, source: "corpus", image: "/img/cards/prof_builder.webp" },
  { id: "prof_farmer", topicId: "professions", che: P("йуьртанхо"), ru: "фермер", emoji: "🧑‍🌾", level: 1, source: "corpus", image: "/img/cards/prof_farmer.webp" },
  { id: "prof_military", topicId: "professions", che: P("эскархо"), ru: "военный", emoji: "💂", level: 2, source: "corpus", image: "/img/cards/prof_military.webp" },
  { id: "prof_police", topicId: "professions", che: P("полицихо"), ru: "полицейский", emoji: "👮", level: 2, source: "corpus", image: "/img/cards/prof_police.webp" },
  { id: "prof_firefighter", topicId: "professions", che: P("ц1еяйархо"), ru: "пожарный", emoji: "🧑‍🚒", level: 2, source: "corpus", image: "/img/cards/prof_firefighter.webp" },
  { id: "prof_pilot", topicId: "professions", che: P("кеманхо"), ru: "пилот", emoji: "👨‍✈️", level: 2, source: "corpus", image: "/img/cards/prof_pilot.webp" },
  { id: "prof_sailor", topicId: "professions", che: P("хинкеманхо"), ru: "моряк", emoji: "⛵", level: 2, source: "dictionary", image: "/img/cards/prof_sailor.webp" },
  { id: "prof_artist", topicId: "professions", che: P("суртдиллархо"), ru: "художник", emoji: "🎨", level: 2, source: "corpus", image: "/img/cards/prof_artist.webp" },
  { id: "prof_musician", topicId: "professions", che: P("пондарча"), ru: "музыкант", emoji: "🎵", level: 2, source: "corpus", image: "/img/cards/prof_musician.webp" },
  { id: "prof_writer", topicId: "professions", che: P("яздархо"), ru: "писатель", emoji: "📝", level: 2, source: "corpus", image: "/img/cards/prof_writer.webp" },
  { id: "prof_scientist", topicId: "professions", che: P("1илманча"), ru: "учёный", emoji: "🔬", level: 2, source: "corpus", image: "/img/cards/prof_scientist.webp" },
  { id: "prof_accountant", topicId: "professions", che: P("бухгалтер"), ru: "бухгалтер", emoji: "🧾", level: 2, source: "dictionary", image: "/img/cards/prof_accountant.webp" },
  { id: "prof_shopkeeper", topicId: "professions", che: P("туькананхо"), ru: "продавец", emoji: "🧑‍💼", level: 1, source: "dictionary", image: "/img/cards/prof_shopkeeper.webp" },
  { id: "prof_athlete", topicId: "professions", che: P("спортхо"), ru: "спортсмен", emoji: "🏃", level: 1, source: "corpus", image: "/img/cards/prof_athlete.webp" },
  { id: "prof_chef", topicId: "professions", che: P("коьрта кхачабанхо"), ru: "шеф-повар", emoji: "👨‍🍳", level: 2, source: "corpus", image: "/img/cards/prof_chef.webp" },
  { id: "prof_dentist", topicId: "professions", che: P("цергийн лор"), ru: "стоматолог", emoji: "🦷", level: 2, source: "corpus", image: "/img/cards/prof_dentist.webp" },
  { id: "prof_pharmacist", topicId: "professions", che: P("молханхо"), ru: "фармацевт", emoji: "💊", level: 2, source: "corpus", image: "/img/cards/prof_pharmacist.webp" },
  { id: "prof_judge", topicId: "professions", che: P("кхелахо"), ru: "судья", emoji: "⚖️", level: 2, source: "corpus", image: "/img/cards/prof_judge.webp" },
  { id: "prof_lawyer", topicId: "professions", che: P("бакъоларйархо"), ru: "юрист, адвокат", emoji: "👩‍⚖️", level: 2, source: "corpus", image: "/img/cards/prof_lawyer.webp" },
  { id: "prof_manager", topicId: "professions", che: P("куьйгалхо"), ru: "руководитель, менеджер", emoji: "👔", level: 2, source: "corpus", image: "/img/cards/prof_manager.webp" },
  { id: "prof_it", topicId: "professions", che: P("программист"), ru: "программист", emoji: "💻", level: 2, source: "dictionary", image: "/img/cards/prof_it.webp" },
  { id: "prof_architect", topicId: "professions", che: P("архитектор"), ru: "архитектор", emoji: "🏛️", level: 2, source: "dictionary", image: "/img/cards/prof_architect.webp" },
  { id: "prof_journalist", topicId: "professions", che: P("журналист"), ru: "журналист", emoji: "📰", level: 2, source: "dictionary", image: "/img/cards/prof_journalist.webp" },
  // Традиционные ремёсла и мастера
  { id: "prof_shepherd", topicId: "professions", che: P("1у"), ru: "чабан, пастух", emoji: "🐑", level: 1, source: "corpus", image: "/img/cards/prof_shepherd.webp" },
  { id: "prof_blacksmith", topicId: "professions", che: P("пхьар"), ru: "кузнец, мастер", emoji: "🔨", level: 1, source: "corpus", image: "/img/cards/prof_blacksmith.webp" },
  { id: "prof_carpenter", topicId: "professions", che: P("дечиг-пхьар"), ru: "плотник, столяр", emoji: "🪚", level: 2, source: "corpus", image: "/img/cards/prof_carpenter.webp" },
  { id: "prof_tailor", topicId: "professions", che: P("тегархо"), ru: "портной, швея", emoji: "🪡", level: 1, source: "corpus", image: "/img/cards/prof_tailor.webp" },
  { id: "prof_hunter", topicId: "professions", che: P("таллархо"), ru: "охотник", emoji: "🏹", level: 1, source: "corpus", image: "/img/cards/prof_hunter.webp" },
  { id: "prof_fisherman", topicId: "professions", che: P("ч1ерийлецархо"), ru: "рыбак", emoji: "🎣", level: 1, source: "corpus", image: "/img/cards/prof_fisherman.webp" },
  { id: "prof_singer", topicId: "professions", che: P("эшархо"), ru: "певец", emoji: "🎤", level: 1, source: "corpus", image: "/img/cards/prof_singer.webp" },
  { id: "prof_dancer", topicId: "professions", che: P("хелхархо"), ru: "танцор", emoji: "💃", level: 1, source: "corpus", image: "/img/cards/prof_dancer.webp" },
  { id: "prof_baker", topicId: "professions", che: P("бепиг-доттархо"), ru: "пекарь", emoji: "🥖", level: 2, source: "corpus", image: "/img/cards/prof_baker.webp" },
  { id: "prof_shoemaker", topicId: "professions", che: P("мачаш-пхьар"), ru: "сапожник", emoji: "👞", level: 2, source: "corpus", image: "/img/cards/prof_shoemaker.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "p1", words: ["Иза", "лор", "ву"], ru: "Он врач.", emoji: "👨‍⚕️" },
  { id: "p2", words: ["Иза", "хьехархо", "ю"], ru: "Она учитель.", emoji: "👩‍🏫" },
  { id: "p3", words: ["Со", "инженер", "ву"], ru: "Я инженер.", emoji: "👷" },
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