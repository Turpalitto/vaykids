import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "emotions",
    che: P("Синхаамаш а, дарш а"),
    ru: "Эмоции и действия",
    emoji: "😊",
    gradient: "from-pink-200 to-orange-300",
    accent: "#EC4899",
    unlockStars: 45,
    map: { x: 28, y: 28 },
  },
];

export const CARDS: Card[] = [
  { id: "samuqane", topicId: "emotions", che: P("самукъане"), ru: "весёлый", emoji: "😄", level: 1, source: "corpus" },
  { id: "g1ayg1ane", topicId: "emotions", che: P("г1айг1ане"), ru: "грустный", emoji: "😢", level: 1, source: "corpus" },
  { id: "reza", topicId: "emotions", che: P("реза"), ru: "довольный", emoji: "😊", level: 1, source: "corpus" },
  { id: "kheram", topicId: "emotions", che: P("кхерам"), ru: "страх", emoji: "😨", level: 2, source: "corpus" },
  { id: "oeg1azlo", topicId: "emotions", che: P("оьг1азло"), ru: "злость", emoji: "😠", level: 2, source: "corpus" },
  { id: "bezam", topicId: "emotions", che: P("безам"), ru: "любовь", emoji: "🥰", level: 1, source: "corpus" },
  { id: "lovza", topicId: "emotions", che: P("ловза"), ru: "играть", emoji: "🎲", level: 1, source: "corpus" },
  { id: "mala", topicId: "emotions", che: P("мала"), ru: "пить", emoji: "🥤", level: 1, source: "corpus" },
  { id: "hazha", topicId: "emotions", che: P("хьажа"), ru: "смотреть", emoji: "👀", level: 1, source: "corpus" },
  { id: "ladog1a", topicId: "emotions", che: P("ладог1а"), ru: "слушать", emoji: "🎧", level: 1, source: "corpus" },
  { id: "haa", topicId: "emotions", che: P("хаа"), ru: "сидеть", emoji: "🧘", level: 1, source: "corpus" },
  { id: "desha", topicId: "emotions", che: P("деша"), ru: "читать, учиться", emoji: "📖", level: 2, source: "corpus" },
  { id: "vela", topicId: "emotions", che: P("вела"), ru: "смеяться", emoji: "😂", level: 2, source: "corpus", review: "Классный показатель (в-/й-/д-): уточнить нейтральную форму для карточки" },
  { id: "elkha", topicId: "emotions", che: P("елха"), ru: "плакать", emoji: "😭", level: 2, source: "corpus", review: "Классный показатель: уточнить нейтральную форму" },
  { id: "helkhar", topicId: "emotions", che: P("хелхар"), ru: "танец", emoji: "💃", level: 2, source: "corpus" },
  { id: "dika", topicId: "emotions", che: P("дика"), ru: "хорошо, хороший", emoji: "👍", level: 1, source: "corpus" },
  { id: "haza", topicId: "emotions", che: P("хаза"), ru: "красивый", emoji: "🌟", level: 1, source: "corpus" },
  { id: "marshalla", topicId: "emotions", che: P("маршалла"), ru: "приветствие (здравствуй)", emoji: "👋", level: 1, source: "corpus" },
  { id: "barkalla", topicId: "emotions", che: P("баркалла"), ru: "спасибо", emoji: "🙏", level: 1, source: "corpus" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];