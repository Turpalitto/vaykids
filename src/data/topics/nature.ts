import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "nature",
    che: P("1алам"),
    ru: "Природа",
    emoji: "🌳",
    gradient: "from-emerald-300 to-teal-500",
    accent: "#14B8A6",
    unlockStars: 35,
    map: { x: 40, y: 42 },
  },
];

export const CARDS: Card[] = [
  { id: "hi", topicId: "nature", che: P("хи"), ru: "вода", emoji: "💧", level: 1, source: "corpus" },
  { id: "ditt", topicId: "nature", che: P("дитт"), ru: "дерево", emoji: "🌳", level: 1, source: "corpus" },
  { id: "zezag", topicId: "nature", che: P("зезаг"), ru: "цветок", emoji: "🌸", level: 1, source: "corpus" },
  { id: "malkh", topicId: "nature", che: P("малх"), ru: "солнце", emoji: "☀️", level: 1, source: "corpus" },
  { id: "butt", topicId: "nature", che: P("бутт"), ru: "луна, месяц", emoji: "🌙", level: 1, source: "corpus" },
  { id: "seda", topicId: "nature", che: P("седа"), ru: "звезда", emoji: "⭐", level: 1, source: "corpus" },
  { id: "stigal", topicId: "nature", che: P("стигал"), ru: "небо", emoji: "🌤️", level: 1, source: "corpus" },
  { id: "latta", topicId: "nature", che: P("латта"), ru: "земля", emoji: "🌍", level: 1, source: "corpus" },
  { id: "hun", topicId: "nature", che: P("хьун"), ru: "лес", emoji: "🌲", level: 1, source: "corpus" },
  { id: "mokh", topicId: "nature", che: P("мох"), ru: "ветер", emoji: "🌬️", level: 2, source: "corpus" },
  { id: "dog1a", topicId: "nature", che: P("дог1а"), ru: "дождь", emoji: "🌧️", level: 1, source: "corpus" },
  { id: "lo", topicId: "nature", che: P("ло"), ru: "снег", emoji: "❄️", level: 1, source: "corpus" },
  { id: "buc", topicId: "nature", che: P("буц"), ru: "трава", emoji: "🌿", level: 1, source: "corpus" },
  { id: "g1a", topicId: "nature", che: P("г1а"), ru: "лист", emoji: "🍃", level: 2, source: "corpus" },
  { id: "t1ulg", topicId: "nature", che: P("т1улг"), ru: "камень", emoji: "🪨", level: 1, source: "corpus" },
  { id: "markha", topicId: "nature", che: P("марха"), ru: "облако", emoji: "☁️", level: 1, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "nat1", words: ["Малх", "хаза", "бу"], ru: "Солнце красивое.", emoji: "☀️🌟" },
  { id: "nat2", words: ["Хи", "шийла", "ду"], ru: "Вода холодная.", emoji: "💧🧊" },
];
export const SCENES: Scene[] = [];