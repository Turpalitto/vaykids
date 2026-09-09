import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "school",
    che: P("Школа"),
    ru: "Школа",
    emoji: "🏫",
    gradient: "from-yellow-200 to-amber-300",
    accent: "#EAB308",
    unlockStars: 30,
    map: { x: 75, y: 50 },
  },
];

export const CARDS: Card[] = [
  { id: "shkola", topicId: "school", che: P("школа"), ru: "школа", emoji: "🏫", level: 1, source: "dictionary" },
  { id: "zhayna", topicId: "school", che: P("жайна"), ru: "книга", emoji: "📖", level: 1, source: "corpus" },
  { id: "qolam", topicId: "school", che: P("къолам"), ru: "карандаш", emoji: "✏️", level: 1, source: "corpus" },
  { id: "kehat", topicId: "school", che: P("кехат"), ru: "бумага, письмо", emoji: "📄", level: 1, source: "corpus" },
  { id: "hekharkho", topicId: "school", che: P("хьехархо"), ru: "учитель", emoji: "👩‍🏫", level: 2, source: "corpus" },
  { id: "desharkho", topicId: "school", che: P("дешархо"), ru: "ученик", emoji: "🧑‍🎓", level: 2, source: "dictionary" },
  { id: "deshar", topicId: "school", che: P("дешар"), ru: "учёба, чтение", emoji: "📚", level: 2, source: "corpus" },
  { id: "yoza", topicId: "school", che: P("йоза"), ru: "письмо (текст)", emoji: "✍️", level: 2, source: "corpus" },
  { id: "elp", topicId: "school", che: P("элп"), ru: "буква", emoji: "🔤", level: 1, source: "corpus" },
  { id: "dosh", topicId: "school", che: P("дош"), ru: "слово", emoji: "💬", level: 1, source: "corpus" },
  { id: "terakh", topicId: "school", che: P("терахь"), ru: "число", emoji: "🔢", level: 2, source: "corpus" },
  { id: "surt", topicId: "school", che: P("сурт"), ru: "картинка", emoji: "🖼️", level: 1, source: "corpus" },
  { id: "illi", topicId: "school", che: P("илли"), ru: "песня", emoji: "🎵", level: 1, source: "corpus" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];