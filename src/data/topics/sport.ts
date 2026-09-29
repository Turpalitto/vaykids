import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "sport",
    che: P("Спорт"),
    ru: "Спорт",
    emoji: "🏃",
    gradient: "from-blue-200 to-indigo-500",
    accent: "#6366F1",
    unlockStars: 65,
    map: { x: 50, y: 32 },
  },
];

export const CARDS: Card[] = [
  // Виды спорта
  { id: "sport_run", topicId: "sport", che: P("хьадар"), ru: "бег", emoji: "🏃", level: 1, source: "corpus", image: "/img/cards/sport_run.webp" },
  { id: "sport_swim", topicId: "sport", che: P("нека дар"), ru: "плавание", emoji: "🏊", level: 2, source: "corpus", image: "/img/cards/sport_swim.webp" },
  { id: "sport_football", topicId: "sport", che: P("футбол"), ru: "футбол", emoji: "⚽", level: 1, source: "corpus", image: "/img/cards/sport_football.webp" },
  { id: "sport_volleyball", topicId: "sport", che: P("волейбол"), ru: "волейбол", emoji: "🏐", level: 2, source: "dictionary", image: "/img/cards/sport_volleyball.webp" },
  { id: "sport_basketball", topicId: "sport", che: P("баскетбол"), ru: "баскетбол", emoji: "🏀", level: 2, source: "dictionary", image: "/img/cards/sport_basketball.webp" },
  { id: "sport_tennis", topicId: "sport", che: P("теннис"), ru: "теннис", emoji: "🎾", level: 2, source: "dictionary", image: "/img/cards/sport_tennis.webp" },
  { id: "sport_boxing", topicId: "sport", che: P("бокс"), ru: "бокс", emoji: "🥊", level: 2, source: "dictionary", image: "/img/cards/sport_boxing.webp" },
  { id: "sport_wrestling", topicId: "sport", che: P("латар"), ru: "борьба", emoji: "🤼", level: 2, source: "corpus", image: "/img/cards/sport_wrestling.webp" },
  { id: "sport_gymnastics", topicId: "sport", che: P("гимнастика"), ru: "гимнастика", emoji: "🤸", level: 2, source: "dictionary", image: "/img/cards/sport_gymnastics.webp" },
  { id: "sport_ski", topicId: "sport", che: P("когсалаз"), ru: "лыжи", emoji: "⛷️", level: 2, source: "corpus", image: "/img/cards/sport_ski.webp" },
  { id: "sport_cycle", topicId: "sport", che: P("велосипед хахкар"), ru: "велоспорт", emoji: "🚴", level: 2, source: "corpus", image: "/img/cards/sport_cycle.webp" },
  // Инвентарь
  { id: "sport_ball", topicId: "sport", che: P("буьрка"), ru: "мяч", emoji: "⚽", level: 1, source: "corpus", image: "/img/cards/sport_ball.webp" },
  { id: "sport_gate", topicId: "sport", che: P("ков"), ru: "ворота", emoji: "🥅", level: 2, source: "corpus", image: "/img/cards/sport_gate.webp" },
  { id: "sport_bat", topicId: "sport", che: P("г1аж"), ru: "бита, клюшка", emoji: "🏏", level: 2, source: "corpus", image: "/img/cards/sport_bat.webp" },
  // Действия
  { id: "sport_play", topicId: "sport", che: P("ловза"), ru: "играть", emoji: "🎮", level: 1, source: "corpus", image: "/img/cards/sport_play.webp" },
  { id: "sport_win", topicId: "sport", che: P("тола"), ru: "побеждать", emoji: "🏆", level: 2, source: "corpus", image: "/img/cards/sport_win.webp" },
  { id: "sport_lose", topicId: "sport", che: P("эша"), ru: "проигрывать", emoji: "😔", level: 2, source: "corpus", image: "/img/cards/sport_lose.webp" },
  { id: "sport_team", topicId: "sport", che: P("тоба"), ru: "команда", emoji: "👥", level: 2, source: "corpus", image: "/img/cards/sport_team.webp" },
  { id: "sport_train", topicId: "sport", che: P("1ама"), ru: "тренироваться, учиться", emoji: "💪", level: 2, source: "corpus", image: "/img/cards/sport_train.webp" },
  { id: "sport_stadium", topicId: "sport", che: P("стадион"), ru: "стадион", emoji: "🏟️", level: 2, source: "dictionary", image: "/img/cards/sport_stadium.webp" },
  // Дополнительно о спорте
  { id: "sport_medal", topicId: "sport", che: P("мидал"), ru: "медаль", emoji: "🥇", level: 1, source: "dictionary", image: "/img/cards/sport_medal.webp" },
  { id: "sport_cup", topicId: "sport", che: P("кубок"), ru: "кубок", emoji: "🏆", level: 1, source: "dictionary", image: "/img/cards/sport_cup.webp" },
  { id: "sport_whistle", topicId: "sport", che: P("шатакх"), ru: "свисток", emoji: "🪈", level: 2, source: "corpus", image: "/img/cards/sport_whistle.webp" },
  { id: "sport_jump", topicId: "sport", che: P("кхоссадалар"), ru: "прыжки", emoji: "🤸", level: 1, source: "corpus", image: "/img/cards/sport_jump.webp" },
  { id: "sport_judo", topicId: "sport", che: P("дзюдо"), ru: "дзюдо", emoji: "🥋", level: 2, source: "dictionary", image: "/img/cards/sport_judo.webp" },
  { id: "sport_skates", topicId: "sport", che: P("коньки"), ru: "коньки", emoji: "⛸️", level: 2, source: "dictionary", image: "/img/cards/sport_skates.webp" },
  { id: "sport_boxing_gloves", topicId: "sport", che: P("боксеран караш"), ru: "боксёрские перчатки", emoji: "🥊", level: 2, source: "corpus", image: "/img/cards/sport_boxing_gloves.webp" },
  { id: "sport_coach", topicId: "sport", che: P("тренер"), ru: "тренер", emoji: "🧑‍🏫", level: 1, source: "dictionary", image: "/img/cards/sport_coach.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "sp1", words: ["Со", "буьркица", "ловзу"], ru: "Я играю в мяч.", emoji: "⚽" },
  { id: "sp2", words: ["Иза", "водуш", "ву"], ru: "Он бежит.", emoji: "🏃" },
];

export const SCENES: Scene[] = [
  {
    id: "sport_scene",
    topicIds: ["sport"],
    image: "/img/scene-sport.jpg",
    objects: [
      { cardId: "sport_ball", x: 20, y: 60 },
      { cardId: "sport_run", x: 50, y: 40 },
      { cardId: "sport_football", x: 80, y: 70 },
      { cardId: "sport_stadium", x: 40, y: 20 },
    ],
  },
];