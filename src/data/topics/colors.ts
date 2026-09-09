import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "colors",
    che: P("Беснаш а, терахьаш а"),
    ru: "Цвета и числа",
    emoji: "🎨",
    gradient: "from-fuchsia-300 to-purple-400",
    accent: "#A855F7",
    unlockStars: 15,
    map: { x: 72, y: 68 },
  },
];

export const CARDS: Card[] = [
  { id: "c1en", topicId: "colors", che: P("ц1ен"), ru: "красный", emoji: "🔴", level: 1, source: "corpus" },
  { id: "k1ayn", topicId: "colors", che: P("к1айн"), ru: "белый", emoji: "⚪", level: 1, source: "corpus" },
  { id: "1aerzha", topicId: "colors", che: P("1аьржа"), ru: "чёрный", emoji: "⚫", level: 1, source: "corpus" },
  { id: "mozha", topicId: "colors", che: P("можа"), ru: "жёлтый", emoji: "🟡", level: 1, source: "corpus" },
  { id: "siyna", topicId: "colors", che: P("сийна"), ru: "синий", emoji: "🔵", level: 1, source: "corpus" },
  { id: "baeccara", topicId: "colors", che: P("баьццара"), ru: "зелёный", emoji: "🟢", level: 1, source: "corpus" },
  { id: "sira", topicId: "colors", che: P("сира"), ru: "серый", emoji: "🩶", level: 2, source: "corpus" },
  { id: "boemasha", topicId: "colors", che: P("боьмаша"), ru: "коричневый", emoji: "🟤", level: 2, source: "dictionary" },
  { id: "bos", topicId: "colors", che: P("бос"), ru: "цвет", emoji: "🎨", level: 2, source: "corpus" },
  { id: "num1", topicId: "colors", che: P("цхьаъ"), ru: "один", emoji: "1️⃣", level: 1, source: "corpus" },
  { id: "num2", topicId: "colors", che: P("шиъ"), ru: "два", emoji: "2️⃣", level: 1, source: "corpus" },
  { id: "num3", topicId: "colors", che: P("кхоъ"), ru: "три", emoji: "3️⃣", level: 1, source: "corpus" },
  { id: "num4", topicId: "colors", che: P("диъ"), ru: "четыре", emoji: "4️⃣", level: 1, source: "corpus" },
  { id: "num5", topicId: "colors", che: P("пхиъ"), ru: "пять", emoji: "5️⃣", level: 1, source: "corpus" },
  { id: "num6", topicId: "colors", che: P("ялх"), ru: "шесть", emoji: "6️⃣", level: 2, source: "corpus" },
  { id: "num7", topicId: "colors", che: P("ворх1"), ru: "семь", emoji: "7️⃣", level: 2, source: "corpus" },
  { id: "num8", topicId: "colors", che: P("барх1"), ru: "восемь", emoji: "8️⃣", level: 2, source: "corpus" },
  { id: "num9", topicId: "colors", che: P("исс"), ru: "девять", emoji: "9️⃣", level: 2, source: "corpus" },
  { id: "num10", topicId: "colors", che: P("итт"), ru: "десять", emoji: "🔟", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];