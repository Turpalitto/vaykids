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
    map: { x: 45, y: 60 },
  },
];

export const CARDS: Card[] = [
  { id: "korta", topicId: "body", che: P("корта"), ru: "голова", emoji: "🙂", level: 1, source: "corpus" },
  { id: "kueg", topicId: "body", che: P("куьг"), ru: "рука", emoji: "✋", level: 1, source: "corpus" },
  { id: "kog", topicId: "body", che: P("ког"), ru: "нога", emoji: "🦶", level: 1, source: "corpus" },
  { id: "b1aerg", topicId: "body", che: P("б1аьрг"), ru: "глаз", emoji: "👁️", level: 1, source: "corpus" },
  { id: "lerg", topicId: "body", che: P("лерг"), ru: "ухо", emoji: "👂", level: 1, source: "corpus" },
  { id: "mara", topicId: "body", che: P("мара"), ru: "нос", emoji: "👃", level: 1, source: "corpus" },
  { id: "bat", topicId: "body", che: P("бат"), ru: "рот", emoji: "👄", level: 1, source: "corpus" },
  { id: "cerg", topicId: "body", che: P("церг"), ru: "зуб", emoji: "🦷", level: 1, source: "corpus" },
  { id: "mott", topicId: "body", che: P("мотт"), ru: "язык", emoji: "👅", level: 1, source: "corpus" },
  { id: "mesash", topicId: "body", che: P("месаш"), ru: "волосы", emoji: "💇", level: 2, source: "corpus" },
  { id: "dog", topicId: "body", che: P("дог"), ru: "сердце", emoji: "❤️", level: 1, source: "corpus" },
  { id: "p1elg", topicId: "body", che: P("п1елг"), ru: "палец", emoji: "☝️", level: 2, source: "corpus" },
  { id: "gay", topicId: "body", che: P("гай"), ru: "живот", emoji: "🫄", level: 2, source: "corpus" },
  { id: "bukq", topicId: "body", che: P("букъ"), ru: "спина", emoji: "🧍", level: 2, source: "corpus" },
  { id: "yueh", topicId: "body", che: P("юьхь"), ru: "лицо", emoji: "😊", level: 2, source: "corpus" },
  { id: "lag", topicId: "body", che: P("лаг"), ru: "шея", emoji: "🧣", level: 3, source: "corpus" },
];

export const SENTENCES: Sentence[] = [];

export const SCENES: Scene[] = [];