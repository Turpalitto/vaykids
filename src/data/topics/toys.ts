import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "toys",
    che: P("Ловзоргаш"),
    ru: "Игрушки",
    emoji: "🧸",
    gradient: "from-pink-200 to-purple-300",
    accent: "#D946EF",
    unlockStars: 0,
    map: { x: 74, y: 88 },
  },
];

export const CARDS: Card[] = [
  // Игрушки
  { id: "toy_doll", topicId: "toys", che: P("тайниг"), ru: "кукла", emoji: "🎎", level: 1, source: "corpus", image: "/img/cards/toy_doll.webp" },
  { id: "toy_ball", topicId: "toys", che: P("буьрка"), ru: "мяч", emoji: "⚽", level: 1, source: "corpus", image: "/img/cards/toy_ball.webp" },
  { id: "toy_car", topicId: "toys", che: P("машен"), ru: "машинка", emoji: "🚗", level: 1, source: "corpus", image: "/img/cards/toy_car.webp" },
  { id: "toy_bear", topicId: "toys", che: P("ча"), ru: "мишка", emoji: "🧸", level: 1, source: "corpus", image: "/img/cards/toy_bear.webp" },
  { id: "toy_blocks", topicId: "toys", che: P("г1одамаш"), ru: "кубики", emoji: "🧱", level: 1, source: "dictionary", image: "/img/cards/toy_blocks.webp" },
  { id: "toy_puzzle", topicId: "toys", che: P("пазл"), ru: "пазл", emoji: "🧩", level: 2, source: "dictionary", image: "/img/cards/toy_puzzle.webp" },
  { id: "toy_robot", topicId: "toys", che: P("робот"), ru: "робот", emoji: "🤖", level: 2, source: "dictionary", image: "/img/cards/toy_robot.webp" },
  { id: "toy_plane", topicId: "toys", che: P("кема"), ru: "самолётик", emoji: "✈️", level: 2, source: "corpus", image: "/img/cards/toy_plane.webp" },
  { id: "toy_train", topicId: "toys", che: P("ц1ерпошт"), ru: "поезд", emoji: "🚆", level: 2, source: "corpus", image: "/img/cards/toy_train.webp" },
  { id: "toy_soldier", topicId: "toys", che: P("эскархо"), ru: "солдатик", emoji: "🎖️", level: 2, source: "corpus", image: "/img/cards/toy_soldier.webp" },
  { id: "toy_sword", topicId: "toys", che: P("тур"), ru: "меч", emoji: "🗡️", level: 2, source: "corpus", image: "/img/cards/toy_sword.webp" },
  { id: "toy_gun", topicId: "toys", che: P("топ"), ru: "ружье, пистолет", emoji: "🔫", level: 2, source: "corpus", image: "/img/cards/toy_gun.webp" },
  // Игровые действия
  { id: "toy_play", topicId: "toys", che: P("ловза"), ru: "играть", emoji: "🎮", level: 1, source: "corpus", image: "/img/cards/toy_play.webp" },
  { id: "toy_hide", topicId: "toys", che: P("лечкъа"), ru: "прятаться", emoji: "🙈", level: 2, source: "corpus", image: "/img/cards/toy_hide.webp" },
  { id: "toy_seek", topicId: "toys", che: P("лаха"), ru: "искать", emoji: "🔍", level: 2, source: "corpus", image: "/img/cards/toy_seek.webp" },
  { id: "toy_run", topicId: "toys", che: P("ида"), ru: "бегать", emoji: "🏃", level: 1, source: "corpus", image: "/img/cards/toy_run.webp" },
  { id: "toy_jump", topicId: "toys", che: P("кхоссадала"), ru: "прыгать", emoji: "🤸", level: 2, source: "corpus", image: "/img/cards/toy_jump.webp" },
  // Другие игрушки и развлечения
  { id: "toy_drum", topicId: "toys", che: P("вота"), ru: "барабанчик", emoji: "🥁", level: 1, source: "corpus", image: "/img/cards/toy_drum.webp" },
  { id: "toy_kite", topicId: "toys", che: P("х1аваан саьрмик"), ru: "воздушный змей", emoji: "🪁", level: 2, source: "corpus", image: "/img/cards/toy_kite.webp" },
  { id: "toy_swing", topicId: "toys", che: P("агас"), ru: "качели", emoji: "🎠", level: 1, source: "corpus", image: "/img/cards/toy_swing.webp" },
  { id: "toy_slide", topicId: "toys", che: P("хохкуьйриг"), ru: "детская горка", emoji: "🛝", level: 1, source: "corpus", image: "/img/cards/toy_slide.webp" },
  { id: "toy_top", topicId: "toys", che: P("горгам"), ru: "юла, волчок", emoji: "🪀", level: 2, source: "corpus", image: "/img/cards/toy_top.webp" },
  { id: "toy_dice", topicId: "toys", che: P("зар"), ru: "игральный кубик", emoji: "🎲", level: 2, source: "corpus", image: "/img/cards/toy_dice.webp" },
  { id: "toy_ship", topicId: "toys", che: P("хикема"), ru: "кораблик", emoji: "⛵", level: 1, source: "corpus", image: "/img/cards/toy_ship.webp" },
  { id: "toy_balloon", topicId: "toys", che: P("х1аваан шар"), ru: "воздушный шарик", emoji: "🎈", level: 1, source: "corpus", image: "/img/cards/toy_balloon.webp" },
  { id: "toy_pyramid", topicId: "toys", che: P("пирамидка"), ru: "пирамидка", emoji: "🪅", level: 1, source: "dictionary", image: "/img/cards/toy_pyramid.webp" },
  { id: "toy_whistle", topicId: "toys", che: P("шок"), ru: "свисток, свистулька", emoji: "🪈", level: 1, source: "corpus", image: "/img/cards/toy_whistle.webp" },
  { id: "toy_bubbles", topicId: "toys", che: P("сабанан ахкаргаш"), ru: "мыльные пузыри", emoji: "🫧", level: 1, source: "corpus", image: "/img/cards/toy_bubbles.webp" },
  { id: "toy_sandbox", topicId: "toys", che: P("г1амаран майда"), ru: "песочница", emoji: "🏖️", level: 1, source: "corpus", image: "/img/cards/toy_sandbox.webp" },
  { id: "toy_watergun", topicId: "toys", che: P("хин топ"), ru: "водяной пистолет", emoji: "🔫", level: 1, source: "corpus", image: "/img/cards/toy_watergun.webp" },
  { id: "toy_castle", topicId: "toys", che: P("г1ала"), ru: "игрушечный замок", emoji: "🏰", level: 1, source: "corpus", image: "/img/cards/toy_castle.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "to1", words: ["Бер", "ловзуш", "ду"], ru: "Ребёнок играет.", emoji: "👶🎮" },
  { id: "to2", words: ["Со", "машинкица", "ловзу"], ru: "Я играю с машинкой.", emoji: "🚗" },
];

export const SCENES: Scene[] = [
  {
    id: "toys_scene",
    topicIds: ["toys"],
    image: "/img/scene-toys.jpg",
    objects: [
      { cardId: "toy_doll", x: 20, y: 60 },
      { cardId: "toy_ball", x: 50, y: 70 },
      { cardId: "toy_car", x: 80, y: 50 },
      { cardId: "toy_bear", x: 40, y: 80 },
    ],
  },
];