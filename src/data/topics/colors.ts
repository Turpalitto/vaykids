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
    map: { x: 24, y: 66 },
  },
];

export const CARDS: Card[] = [
  { id: "c1en", topicId: "colors", che: P("ц1ен"), ru: "красный", emoji: "🔴", level: 1, source: "corpus", image: "/img/cards/c1en.webp" },
  { id: "k1ayn", topicId: "colors", che: P("к1айн"), ru: "белый", emoji: "⚪", level: 1, source: "corpus", image: "/img/cards/k1ayn.webp" },
  { id: "1aerzha", topicId: "colors", che: P("1аьржа"), ru: "чёрный", emoji: "⚫", level: 1, source: "corpus", image: "/img/cards/1aerzha.webp" },
  { id: "mozha", topicId: "colors", che: P("можа"), ru: "жёлтый", emoji: "🟡", level: 1, source: "corpus", image: "/img/cards/mozha.webp" },
  { id: "siyna", topicId: "colors", che: P("сийна"), ru: "синий", emoji: "🔵", level: 1, source: "corpus", image: "/img/cards/siyna.webp" },
  { id: "baeccara", topicId: "colors", che: P("баьццара"), ru: "зелёный", emoji: "🟢", level: 1, source: "corpus", image: "/img/cards/baeccara.webp" },
  { id: "sira", topicId: "colors", che: P("сира"), ru: "серый", emoji: "🩶", level: 2, source: "corpus", image: "/img/cards/sira.webp" },
  { id: "boemasha", topicId: "colors", che: P("боьмаша"), ru: "коричневый", emoji: "🟤", level: 2, source: "dictionary", image: "/img/cards/boemasha.webp" },
  { id: "bos", topicId: "colors", che: P("бос"), ru: "цвет", emoji: "🎨", level: 2, source: "corpus", image: "/img/cards/bos.webp" },
  { id: "num1", topicId: "colors", che: P("цхьаъ"), ru: "один", emoji: "1️⃣", level: 1, source: "corpus", image: "/img/cards/num1.webp" },
  { id: "num2", topicId: "colors", che: P("шиъ"), ru: "два", emoji: "2️⃣", level: 1, source: "corpus", image: "/img/cards/num2.webp" },
  { id: "num3", topicId: "colors", che: P("кхоъ"), ru: "три", emoji: "3️⃣", level: 1, source: "corpus", image: "/img/cards/num3.webp" },
  { id: "num4", topicId: "colors", che: P("диъ"), ru: "четыре", emoji: "4️⃣", level: 1, source: "corpus", image: "/img/cards/num4.webp" },
  { id: "num5", topicId: "colors", che: P("пхиъ"), ru: "пять", emoji: "5️⃣", level: 1, source: "corpus", image: "/img/cards/num5.webp" },
  { id: "num6", topicId: "colors", che: P("ялх"), ru: "шесть", emoji: "6️⃣", level: 2, source: "corpus", image: "/img/cards/num6.webp" },
  { id: "num7", topicId: "colors", che: P("ворх1"), ru: "семь", emoji: "7️⃣", level: 2, source: "corpus", image: "/img/cards/num7.webp" },
  { id: "num8", topicId: "colors", che: P("барх1"), ru: "восемь", emoji: "8️⃣", level: 2, source: "corpus", image: "/img/cards/num8.webp" },
  { id: "num9", topicId: "colors", che: P("исс"), ru: "девять", emoji: "9️⃣", level: 2, source: "corpus", image: "/img/cards/num9.webp" },
  { id: "num10", topicId: "colors", che: P("итт"), ru: "десять", emoji: "🔟", level: 2, source: "corpus", image: "/img/cards/num10.webp" },
  // Числа 11-20
  { id: "num11", topicId: "colors", che: P("цхьайтта"), ru: "одиннадцать", emoji: "1️⃣1️⃣", level: 2, source: "corpus", image: "/img/cards/num11.webp" },
  { id: "num12", topicId: "colors", che: P("шийтта"), ru: "двенадцать", emoji: "1️⃣2️⃣", level: 2, source: "corpus", image: "/img/cards/num12.webp" },
  { id: "num13", topicId: "colors", che: P("кхойтта"), ru: "тринадцать", emoji: "1️⃣3️⃣", level: 2, source: "corpus", image: "/img/cards/num13.webp" },
  { id: "num14", topicId: "colors", che: P("дейтта"), ru: "четырнадцать", emoji: "1️⃣4️⃣", level: 2, source: "corpus", image: "/img/cards/num14.webp" },
  { id: "num15", topicId: "colors", che: P("пхийтта"), ru: "пятнадцать", emoji: "1️⃣5️⃣", level: 2, source: "corpus", image: "/img/cards/num15.webp" },
  { id: "num16", topicId: "colors", che: P("ялхийтта"), ru: "шестнадцать", emoji: "1️⃣6️⃣", level: 2, source: "corpus", image: "/img/cards/num16.webp" },
  { id: "num17", topicId: "colors", che: P("вуьрх1итта"), ru: "семнадцать", emoji: "1️⃣7️⃣", level: 2, source: "corpus", image: "/img/cards/num17.webp" },
  { id: "num18", topicId: "colors", che: P("берх1итта"), ru: "восемнадцать", emoji: "1️⃣8️⃣", level: 2, source: "corpus", image: "/img/cards/num18.webp" },
  { id: "num19", topicId: "colors", che: P("ткъайсна"), ru: "девятнадцать", emoji: "1️⃣9️⃣", level: 2, source: "corpus", image: "/img/cards/num19.webp" },
  { id: "num20", topicId: "colors", che: P("ткъа"), ru: "двадцать", emoji: "2️⃣0️⃣", level: 2, source: "corpus", image: "/img/cards/num20.webp" },
  // Формы и дополнительные цвета
  { id: "shape_circle", topicId: "colors", che: P("гуо"), ru: "круг", emoji: "⭕", level: 1, source: "corpus", image: "/img/cards/shape_circle.webp" },
  { id: "shape_square", topicId: "colors", che: P("йиъсаберг"), ru: "квадрат", emoji: "🔲", level: 2, source: "corpus", image: "/img/cards/shape_square.webp" },
  { id: "shape_triangle", topicId: "colors", che: P("кхосаберг"), ru: "треугольник", emoji: "🔺", level: 2, source: "corpus", image: "/img/cards/shape_triangle.webp" },
  { id: "shape_line", topicId: "colors", che: P("сиз"), ru: "линия", emoji: "📏", level: 1, source: "corpus", image: "/img/cards/shape_line.webp" },
  { id: "colors_orange", topicId: "colors", che: P("можа-ц1ен"), ru: "оранжевый", emoji: "🟠", level: 1, source: "corpus", image: "/img/cards/colors_orange.webp" },
  { id: "colors_pink", topicId: "colors", che: P("ц1е-к1айн"), ru: "розовый", emoji: "🌸", level: 1, source: "corpus", image: "/img/cards/colors_pink.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];