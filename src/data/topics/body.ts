import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "body",
    che: P("Дег1"),
    ru: "Тело человека",
    emoji: "🧒",
    gradient: "from-orange-200 to-amber-400",
    accent: "#FB923C",
    unlockStars: 20,
    map: { x: 50, y: 68 },
  },
];

export const CARDS: Card[] = [
  { id: "korta", topicId: "body", che: P("корта"), ru: "голова", emoji: "🙂", level: 1, source: "corpus", image: "/img/cards/korta.webp" },
  { id: "kueg", topicId: "body", che: P("куьг"), ru: "рука", emoji: "✋", level: 1, source: "corpus", image: "/img/cards/kueg.webp" },
  { id: "kog", topicId: "body", che: P("ког"), ru: "нога", emoji: "🦶", level: 1, source: "corpus", image: "/img/cards/kog.webp" },
  { id: "b1aerg", topicId: "body", che: P("б1аьрг"), ru: "глаз", emoji: "👁️", level: 1, source: "corpus", image: "/img/cards/b1aerg.webp" },
  { id: "lerg", topicId: "body", che: P("лерг"), ru: "ухо", emoji: "👂", level: 1, source: "corpus", image: "/img/cards/lerg.webp" },
  { id: "mara", topicId: "body", che: P("мара"), ru: "нос", emoji: "👃", level: 1, source: "corpus", image: "/img/cards/mara.webp" },
  { id: "bat", topicId: "body", che: P("бага"), ru: "рот", emoji: "👄", level: 1, source: "corpus", image: "/img/cards/bat.webp" },
  { id: "cerg", topicId: "body", che: P("церг"), ru: "зуб", emoji: "🦷", level: 1, source: "corpus", image: "/img/cards/cerg.webp" },
  { id: "mott", topicId: "body", che: P("мотт"), ru: "язык", emoji: "👅", level: 1, source: "corpus", image: "/img/cards/mott.webp" },
  { id: "mesash", topicId: "body", che: P("месаш"), ru: "волосы", emoji: "💇", level: 2, source: "corpus", image: "/img/cards/mesash.webp" },
  { id: "dog", topicId: "body", che: P("дог"), ru: "сердце", emoji: "❤️", level: 1, source: "corpus", image: "/img/cards/dog.webp" },
  { id: "p1elg", topicId: "body", che: P("п1елг"), ru: "палец", emoji: "☝️", level: 2, source: "corpus", image: "/img/cards/p1elg.webp" },
  { id: "gay", topicId: "body", che: P("гай"), ru: "живот", emoji: "🫄", level: 2, source: "corpus", image: "/img/cards/gay.webp" },
  { id: "bukq", topicId: "body", che: P("букъ"), ru: "спина", emoji: "🧍", level: 2, source: "corpus", image: "/img/cards/bukq.webp" },
  { id: "yueh", topicId: "body", che: P("юьхь"), ru: "лицо", emoji: "😊", level: 2, source: "corpus", image: "/img/cards/yueh.webp" },
  { id: "lag", topicId: "body", che: P("лаг"), ru: "шея", emoji: "🧣", level: 3, source: "corpus", image: "/img/cards/lag.webp" },
  // Части тела и лица
  { id: "body_forehead", topicId: "body", che: P("хьаж"), ru: "лоб", emoji: "🧒", level: 1, source: "corpus", image: "/img/cards/body_forehead.webp" },
  { id: "body_chin", topicId: "body", che: P("ч1ениг"), ru: "подбородок", emoji: "🙂", level: 2, source: "corpus", image: "/img/cards/body_chin.webp" },
  { id: "body_eyebrow", topicId: "body", che: P("ц1оцкъам"), ru: "бровь", emoji: "🤨", level: 2, source: "corpus", image: "/img/cards/body_eyebrow.webp" },
  { id: "body_shoulder", topicId: "body", che: P("белш"), ru: "плечо", emoji: "💪", level: 1, source: "corpus", image: "/img/cards/body_shoulder.webp" },
  { id: "body_knee", topicId: "body", che: P("гола"), ru: "колено, локоть", emoji: "🦵", level: 1, source: "corpus", image: "/img/cards/body_knee.webp" },
  { id: "body_heel", topicId: "body", che: P("к1ажа"), ru: "пятка", emoji: "🦶", level: 2, source: "corpus", image: "/img/cards/body_heel.webp" },
  { id: "body_nail", topicId: "body", che: P("м1ара"), ru: "ноготь", emoji: "💅", level: 2, source: "corpus", image: "/img/cards/body_nail.webp" },
  { id: "body_palm", topicId: "body", che: P("ка"), ru: "ладонь, кисть", emoji: "🖐️", level: 1, source: "corpus", image: "/img/cards/body_palm.webp" },
  { id: "body_fist", topicId: "body", che: P("буй"), ru: "кулак", emoji: "✊", level: 1, source: "corpus", image: "/img/cards/body_fist.webp" },
  { id: "body_bone", topicId: "body", che: P("даь1ахк"), ru: "кость", emoji: "🦴", level: 2, source: "corpus", image: "/img/cards/body_bone.webp" },
  { id: "body_blood", topicId: "body", che: P("ц1ий"), ru: "кровь", emoji: "🩸", level: 2, source: "corpus", image: "/img/cards/body_blood.webp" },
  { id: "body_skin", topicId: "body", che: P("чкъор"), ru: "кожа", emoji: "🧴", level: 2, source: "corpus", image: "/img/cards/body_skin.webp" },
  { id: "body_mustache", topicId: "body", che: P("мекхаш"), ru: "усы", emoji: "👨", level: 2, source: "corpus", image: "/img/cards/body_mustache.webp" },
  { id: "body_beard", topicId: "body", che: P("маж"), ru: "борода", emoji: "🧔", level: 2, source: "corpus", image: "/img/cards/body_beard.webp" },
  { id: "body_tear", topicId: "body", che: P("б1аьрхи"), ru: "слеза", emoji: "💧", level: 2, source: "corpus", image: "/img/cards/body_tear.webp" },
];

export const SENTENCES: Sentence[] = [];

export const SCENES: Scene[] = [];