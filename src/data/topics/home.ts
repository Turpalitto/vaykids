import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "home",
    che: P("Ц1а"),
    ru: "Дом",
    emoji: "🏠",
    gradient: "from-amber-300 to-orange-400",
    accent: "#F59E0B",
    unlockStars: 0,
    map: { x: 26, y: 88 },
  },
];

export const CARDS: Card[] = [
  { id: "c1a", topicId: "home", che: P("ц1а"), ru: "дом", emoji: "🏠", level: 1, source: "corpus", image: "/img/cards/c1a.webp" },
  { id: "ne1", topicId: "home", che: P("не1"), ru: "дверь", emoji: "🚪", level: 1, source: "corpus", image: "/img/cards/ne1.webp" },
  { id: "kor", topicId: "home", che: P("кор"), ru: "окно", emoji: "🪟", level: 1, source: "corpus", image: "/img/cards/kor.webp" },
  { id: "stol", topicId: "home", che: P("стол"), ru: "стол", emoji: "🍽️", level: 1, source: "corpus", image: "/img/cards/stol.webp" },
  { id: "g1ant", topicId: "home", che: P("г1ант"), ru: "стул", emoji: "🪑", level: 1, source: "corpus", image: "/img/cards/g1ant.webp" },
  { id: "maenga", topicId: "home", che: P("маьнга"), ru: "кровать", emoji: "🛏️", level: 2, source: "corpus", image: "/img/cards/maenga.webp" },
  { id: "kad", topicId: "home", che: P("кад"), ru: "чашка", emoji: "☕", level: 1, source: "corpus", image: "/img/cards/kad.webp" },
  { id: "1ayg", topicId: "home", che: P("1айг"), ru: "ложка", emoji: "🥄", level: 1, source: "corpus", image: "/img/cards/1ayg.webp" },
  { id: "urs", topicId: "home", che: P("урс"), ru: "нож", emoji: "🔪", level: 2, source: "corpus", image: "/img/cards/urs.webp" },
  { id: "thov", topicId: "home", che: P("тхов"), ru: "крыша", emoji: "🏠", level: 2, source: "corpus", image: "/img/cards/thov.webp" },
  { id: "chirkh", topicId: "home", che: P("чиркх"), ru: "светильник", emoji: "🪔", level: 2, source: "corpus", image: "/img/cards/chirkh.webp" },
  { id: "kov", topicId: "home", che: P("ков"), ru: "ворота", emoji: "⛩️", level: 2, source: "corpus", image: "/img/cards/kov.webp" },
  { id: "kert", topicId: "home", che: P("керт"), ru: "двор, ограда", emoji: "🏡", level: 2, source: "corpus", image: "/img/cards/kert.webp" },
  { id: "besh", topicId: "home", che: P("беш"), ru: "сад", emoji: "🌷", level: 1, source: "corpus", image: "/img/cards/besh.webp" },
  { id: "dechig", topicId: "home", che: P("дечиг"), ru: "дерево (материал), дрова", emoji: "🪵", level: 3, source: "corpus", image: "/img/cards/dechig.webp" },
  { id: "c1e", topicId: "home", che: P("ц1е"), ru: "огонь", emoji: "🔥", level: 1, source: "corpus", image: "/img/cards/c1e.webp" },
  // Домашняя утварь и предметы
  { id: "home_fork", topicId: "home", che: P("миндар"), ru: "вилка", emoji: "🍴", level: 1, source: "corpus", image: "/img/cards/home_fork.webp" },
  { id: "home_plate", topicId: "home", che: P("бошхап"), ru: "тарелка", emoji: "🍽️", level: 1, source: "corpus", image: "/img/cards/home_plate.webp" },
  { id: "home_teapot", topicId: "home", che: P("чайнаг"), ru: "чайник", emoji: "🫖", level: 1, source: "corpus", image: "/img/cards/home_teapot.webp" },
  { id: "home_pot", topicId: "home", che: P("йов"), ru: "кастрюля, котёл", emoji: "🍲", level: 2, source: "corpus", image: "/img/cards/home_pot.webp" },
  { id: "home_pan", topicId: "home", che: P("топка"), ru: "сковорода", emoji: "🍳", level: 2, source: "dictionary", image: "/img/cards/home_pan.webp" },
  { id: "home_mirror", topicId: "home", che: P("куьзга"), ru: "зеркало", emoji: "🪞", level: 1, source: "corpus", image: "/img/cards/home_mirror.webp" },
  { id: "home_clock", topicId: "home", che: P("сахьт"), ru: "часы", emoji: "⏰", level: 1, source: "corpus", image: "/img/cards/home_clock.webp" },
  { id: "home_carpet", topicId: "home", che: P("куза"), ru: "ковёр", emoji: "🧶", level: 2, source: "corpus", image: "/img/cards/home_carpet.webp" },
  { id: "home_pillow", topicId: "home", che: P("г1айба"), ru: "подушка", emoji: "🛏️", level: 1, source: "corpus", image: "/img/cards/home_pillow.webp" },
  { id: "home_blanket", topicId: "home", che: P("юрг1а"), ru: "одеяло", emoji: "🛌", level: 2, source: "corpus", image: "/img/cards/home_blanket.webp" },
  { id: "home_towel", topicId: "home", che: P("гата"), ru: "полотенце", emoji: "🧖", level: 2, source: "corpus", image: "/img/cards/home_towel.webp" },
  { id: "home_key", topicId: "home", che: P("дог1а"), ru: "ключ", emoji: "🔑", level: 1, source: "corpus", image: "/img/cards/home_key.webp" },
  { id: "home_bucket", topicId: "home", che: P("ведар"), ru: "ведро", emoji: "🪣", level: 2, source: "corpus", image: "/img/cards/home_bucket.webp" },
  { id: "home_broom", topicId: "home", che: P("нуй"), ru: "веник, метла", emoji: "🧹", level: 1, source: "corpus", image: "/img/cards/home_broom.webp" },
  { id: "home_box", topicId: "home", che: P("яьшка"), ru: "коробка, ящик", emoji: "📦", level: 2, source: "corpus", image: "/img/cards/home_box.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "hom1", words: ["Х1ара", "сан", "ц1а", "ду"], ru: "Это мой дом.", emoji: "🏠" },
];

export const SCENES: Scene[] = [
  {
    id: "home_scene",
    topicIds: ["home"],
    image: "/img/scene-home.jpg",
    objects: [
      { cardId: "c1a", x: 20, y: 60 },
      { cardId: "ne1", x: 50, y: 40 },
      { cardId: "kor", x: 80, y: 70 },
      { cardId: "g1ant", x: 10, y: 80 },
    ],
  },
];