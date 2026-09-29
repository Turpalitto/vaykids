import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "emotions",
    che: P("Синхаамаш"),
    ru: "Эмоции",
    emoji: "😊",
    gradient: "from-pink-200 to-orange-300",
    accent: "#EC4899",
    unlockStars: 60,
    map: { x: 24, y: 32 },
  },
];

export const CARDS: Card[] = [
  { id: "samuqane", topicId: "emotions", che: P("самукъане"), ru: "весёлый", emoji: "😄", level: 1, source: "corpus", image: "/img/cards/samuqane.webp" },
  { id: "g1ayg1ane", topicId: "emotions", che: P("г1айг1ане"), ru: "грустный", emoji: "😢", level: 1, source: "corpus", image: "/img/cards/g1ayg1ane.webp" },
  { id: "reza", topicId: "emotions", che: P("реза"), ru: "довольный", emoji: "😊", level: 1, source: "corpus", image: "/img/cards/reza.webp" },
  { id: "kheram", topicId: "emotions", che: P("кхерам"), ru: "страх", emoji: "😨", level: 2, source: "corpus", image: "/img/cards/kheram.webp" },
  { id: "oeg1azlo", topicId: "emotions", che: P("оьг1азло"), ru: "злость", emoji: "😠", level: 2, source: "corpus", image: "/img/cards/oeg1azlo.webp" },
  { id: "bezam", topicId: "emotions", che: P("безам"), ru: "любовь", emoji: "🥰", level: 1, source: "corpus", image: "/img/cards/bezam.webp" },
  { id: "lovza", topicId: "emotions", che: P("ловза"), ru: "играть", emoji: "🎲", level: 1, source: "corpus", image: "/img/cards/lovza.webp" },
  { id: "mala", topicId: "emotions", che: P("мала"), ru: "пить", emoji: "🥤", level: 1, source: "corpus", image: "/img/cards/mala.webp" },
  { id: "hazha", topicId: "emotions", che: P("хьажа"), ru: "смотреть", emoji: "👀", level: 1, source: "corpus", image: "/img/cards/hazha.webp" },
  { id: "ladog1a", topicId: "emotions", che: P("ладог1а"), ru: "слушать", emoji: "🎧", level: 1, source: "corpus", image: "/img/cards/ladog1a.webp" },
  { id: "haa", topicId: "emotions", che: P("хаа"), ru: "сидеть", emoji: "🧘", level: 1, source: "corpus", image: "/img/cards/haa.webp" },
  { id: "desha", topicId: "emotions", che: P("деша"), ru: "читать, учиться", emoji: "📖", level: 2, source: "corpus", image: "/img/cards/desha.webp" },
  { id: "vela", topicId: "emotions", che: P("дела"), ru: "смеяться", emoji: "😂", level: 2, source: "corpus", image: "/img/cards/vela.webp" },
  { id: "elkha", topicId: "emotions", che: P("делха"), ru: "плакать", emoji: "😭", level: 2, source: "corpus", image: "/img/cards/elkha.webp" },
  { id: "helkhar", topicId: "emotions", che: P("хелхар"), ru: "танец", emoji: "💃", level: 2, source: "corpus", image: "/img/cards/helkhar.webp" },
  { id: "dika", topicId: "emotions", che: P("дика"), ru: "хорошо, хороший", emoji: "👍", level: 1, source: "corpus", image: "/img/cards/dika.webp" },
  { id: "haza", topicId: "emotions", che: P("хаза"), ru: "красивый", emoji: "🌟", level: 1, source: "corpus", image: "/img/cards/haza.webp" },
  { id: "marshalla", topicId: "emotions", che: P("маршалла"), ru: "приветствие (здравствуй)", emoji: "👋", level: 1, source: "corpus", image: "/img/cards/marshalla.webp" },
  { id: "barkalla", topicId: "emotions", che: P("баркалла"), ru: "спасибо", emoji: "🙏", level: 1, source: "corpus", image: "/img/cards/barkalla.webp" },
  // Чувства и состояния души
  { id: "emo_surprise", topicId: "emotions", che: P("цецдалар"), ru: "удивление", emoji: "😲", level: 1, source: "corpus", image: "/img/cards/emo_surprise.webp" },
  { id: "emo_calm", topicId: "emotions", che: P("парг1ат"), ru: "спокойный, умиротворённый", emoji: "😌", level: 1, source: "corpus", image: "/img/cards/emo_calm.webp" },
  { id: "emo_shy", topicId: "emotions", che: P("эхьхетар"), ru: "смущение, стыдливость", emoji: "🙈", level: 2, source: "corpus", image: "/img/cards/emo_shy.webp" },
  { id: "emo_pride", topicId: "emotions", che: P("дозалла"), ru: "гордость, достоинство", emoji: "🦁", level: 2, source: "corpus", image: "/img/cards/emo_pride.webp" },
  { id: "emo_tired", topicId: "emotions", che: P("к1адвалар"), ru: "усталость", emoji: "🥱", level: 1, source: "corpus", image: "/img/cards/emo_tired.webp" },
  { id: "emo_bravery", topicId: "emotions", che: P("майралла"), ru: "смелость, отвага", emoji: "🦸", level: 1, source: "corpus", image: "/img/cards/emo_bravery.webp" },
  { id: "emo_mercy", topicId: "emotions", che: P("къинхетам"), ru: "милосердие, сочувствие", emoji: "🥺", level: 2, source: "corpus", image: "/img/cards/emo_mercy.webp" },
  { id: "emo_hope", topicId: "emotions", che: P("догдохар"), ru: "надежда", emoji: "🕊️", level: 2, source: "corpus", image: "/img/cards/emo_hope.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];