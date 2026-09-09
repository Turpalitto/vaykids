import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "verbs",
    che: P("дерз"),
    ru: "Глаголы (действия)",
    emoji: "🏃",
    gradient: "from-blue-100 to-indigo-300",
    accent: "#4F46E5",
    unlockStars: 0,
    map: { x: 60, y: 5 },
  },
];

export const CARDS: Card[] = [
  { id: "verb_go", topicId: "verbs", che: P("г1а"), ru: "идти", emoji: "🚶", level: 1, source: "corpus" },
  { id: "verb_come", topicId: "verbs", che: P("кхх"), ru: "приходить", emoji: "🚶", level: 2, source: "corpus" },
  { id: "verb_run", topicId: "verbs", che: P("хьаьдар"), ru: "бежать", emoji: "🏃", level: 1, source: "corpus" },
  { id: "verb_sit", topicId: "verbs", che: P("хаа"), ru: "сидеть", emoji: "🧘", level: 1, source: "corpus" },
  { id: "verb_stand", topicId: "verbs", che: P("ла"), ru: "стоять", emoji: "🧍", level: 1, source: "corpus" },
  { id: "verb_eat", topicId: "verbs", che: P("доу"), ru: "есть (кушать)", emoji: "🍽️", level: 1, source: "corpus" },
  { id: "verb_drink", topicId: "verbs", che: P("молу"), ru: "пить", emoji: "🥤", level: 1, source: "corpus" },
  { id: "verb_sleep", topicId: "verbs", che: P("ву"), ru: "спать", emoji: "😴", level: 1, source: "corpus" },
  { id: "verb_wake", topicId: "verbs", che: P("г1ур"), ru: "просыпаться", emoji: "🌅", level: 2, source: "corpus" },
  { id: "verb_work", topicId: "verbs", che: P("белха"), ru: "работать", emoji: "💼", level: 1, source: "corpus" },
  { id: "verb_study", topicId: "verbs", che: P("деша"), ru: "учиться, читать", emoji: "📚", level: 1, source: "corpus" },
  { id: "verb_write", topicId: "verbs", che: P("йоза"), ru: "писать", emoji: "✍️", level: 1, source: "corpus" },
  { id: "verb_read", topicId: "verbs", che: P("деша"), ru: "читать", emoji: "📖", level: 1, source: "corpus" },
  { id: "verb_speak", topicId: "verbs", che: P("ду"), ru: "говорить", emoji: "🗣️", level: 1, source: "corpus" },
  { id: "verb_listen", topicId: "verbs", che: P("ладог1а"), ru: "слушать", emoji: "🎧", level: 1, source: "corpus" },
  { id: "verb_see", topicId: "verbs", che: P("да"), ru: "видеть", emoji: "👀", level: 1, source: "corpus" },
  { id: "verb_look", topicId: "verbs", che: P("хьажа"), ru: "смотреть", emoji: "🔍", level: 1, source: "corpus" },
  { id: "verb_smile", topicId: "verbs", che: P("вела"), ru: "улыбаться, смеяться", emoji: "😊", level: 2, source: "corpus", review: "Классный показатель (в-/й-/д-): уточнить нейтральную форму" },
  { id: "verb_cry", topicId: "verbs", che: P("елха"), ru: "плакать", emoji: "😭", level: 2, source: "corpus", review: "Классный показатель: уточнить нейтральную форму" },
  { id: "verb_play", topicId: "verbs", che: P("ловза"), ru: "играть", emoji: "🎮", level: 1, source: "corpus" },
  { id: "verb_draw", topicId: "verbs", che: P("сурт"), ru: "рисовать", emoji: "🎨", level: 1, source: "corpus" },
  { id: "verb_dance", topicId: "verbs", che: P("хелха"), ru: "танцевать", emoji: "💃", level: 1, source: "corpus" },
  { id: "verb_sing", topicId: "verbs", che: P("илли"), ru: "петь", emoji: "🎤", level: 1, source: "corpus" },
  { id: "verb_swim", topicId: "verbs", che: P("хьаьккха"), ru: "плавать", emoji: "🏊", level: 1, source: "corpus" },
  { id: "verb_fly", topicId: "verbs", che: P("кем"), ru: "лететь", emoji: "🛫", level: 2, source: "corpus" },
  { id: "verb_ride", topicId: "verbs", che: P("тIехьа довлар"), ru: "ехать (на транспорте)", emoji: "🚗", level: 1, source: "dictionary", review: "Уточнить форму глагола «ехать» у носителя" },
  { id: "verb_wash", topicId: "verbs", che: P("дийла"), ru: "мыть", emoji: "🧼", level: 1, source: "dictionary", review: "Уточнить глагол «мыть» у носителя" },
  { id: "verb_clean", topicId: "verbs", che: P("ц1ена"), ru: "убирать, чистить", emoji: "🧹", level: 2, source: "corpus" },
  { id: "verb_cook", topicId: "verbs", che: P("кхача дехкар"), ru: "готовить еду", emoji: "🍳", level: 1, source: "dictionary", review: "Уточнить глагол «готовить» у носителя" },
  { id: "verb_walk", topicId: "verbs", che: P("урам"), ru: "гулять", emoji: "🚶‍♀️", level: 1, source: "corpus" },
  { id: "verb_buy", topicId: "verbs", che: P("эца"), ru: "покупать", emoji: "🛍️", level: 1, source: "corpus" },
  { id: "verb_sell", topicId: "verbs", che: P("даха"), ru: "продавать", emoji: "💰", level: 2, source: "corpus" },
  { id: "verb_give", topicId: "verbs", che: P("ла"), ru: "давать", emoji: "🎁", level: 1, source: "corpus" },
  { id: "verb_take", topicId: "verbs", che: P("эца"), ru: "брать", emoji: "🤲", level: 1, source: "corpus" },
  { id: "verb_think", topicId: "verbs", che: P("х1ума хьоьхуш"), ru: "думать", emoji: "🤔", level: 1, source: "dictionary", review: "Уточнить глагол «думать» у носителя" },
  { id: "verb_know", topicId: "verbs", che: P("ха"), ru: "знать", emoji: "🧠", level: 1, source: "corpus" },
  { id: "verb_want", topicId: "verbs", che: P("ла"), ru: "хотеть", emoji: "💭", level: 1, source: "corpus" },
  { id: "verb_like", topicId: "verbs", che: P("ла"), ru: "нравиться, любить", emoji: "❤️", level: 1, source: "corpus" },
  { id: "verb_can", topicId: "verbs", che: P("тарло"), ru: "мочь, уметь", emoji: "💪", level: 1, source: "dictionary", review: "Уточнить форму «мочь» у носителя" },
  { id: "verb_must", topicId: "verbs", che: P("де"), ru: "должен, нужно", emoji: "⚠️", level: 2, source: "corpus" },
  { id: "verb_help", topicId: "verbs", che: P("г1о"), ru: "помогать", emoji: "🤝", level: 1, source: "corpus" },
  { id: "verb_ask", topicId: "verbs", che: P("ха"), ru: "спрашивать", emoji: "❓", level: 1, source: "corpus" },
  { id: "verb_answer", topicId: "verbs", che: P("жу"), ru: "отвечать", emoji: "💬", level: 1, source: "corpus" },
  { id: "verb_find", topicId: "verbs", che: P("ка"), ru: "находить", emoji: "🔎", level: 2, source: "corpus" },
  { id: "verb_throw", topicId: "verbs", che: P("тхьажо"), ru: "бросать", emoji: "🤾", level: 2, source: "dictionary", review: "Уточнить глагол «бросать» у носителя" },
  { id: "verb_catch", topicId: "verbs", che: P("ле"), ru: "ловить", emoji: "🤲", level: 2, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "v1", words: ["Ас", "бепиг", "доу"], ru: "Я ем хлеб.", emoji: "🍞" },
  { id: "v2", words: ["Иза", "хьаьдар", "ву"], ru: "Он бежит.", emoji: "🏃" },
];

export const SCENES: Scene[] = [
  {
    id: "verbs_scene",
    topicIds: ["verbs"],
    image: "/img/scene-verbs.jpg",
    objects: [
      { cardId: "verb_go", x: 20, y: 60 },
      { cardId: "verb_eat", x: 50, y: 40 },
      { cardId: "verb_play", x: 80, y: 70 },
      { cardId: "verb_dance", x: 10, y: 80 },
    ],
  },
];