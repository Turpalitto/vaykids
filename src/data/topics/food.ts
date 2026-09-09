import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "food",
    che: P("даар"),
    ru: "Еда",
    emoji: "🍎",
    gradient: "from-red-300 to-rose-400",
    accent: "#EF4444",
    unlockStars: 5,
    map: { x: 78, y: 82 },
  },
];

export const CARDS: Card[] = [
  // Старые слова
  { id: "bepig", topicId: "food", che: P("бепиг"), ru: "хлеб", emoji: "🍞", level: 1, source: "corpus" },
  { id: "shura", topicId: "food", che: P("шура"), ru: "молоко", emoji: "🥛", level: 1, source: "corpus" },
  { id: "1azh", topicId: "food", che: P("1аж"), ru: "яблоко", emoji: "🍎", level: 1, source: "corpus" },
  { id: "horbaz", topicId: "food", che: P("хорбаз"), ru: "арбуз", emoji: "🍉", level: 1, source: "dictionary" },
  { id: "khor", topicId: "food", che: P("кхор"), ru: "груша", emoji: "🍐", level: 1, source: "dictionary", review: "В корпусе «кхор» встречается только как имя; значение «груша» словарное" },
  { id: "zhizhig", topicId: "food", che: P("жижиг"), ru: "мясо", emoji: "🍖", level: 1, source: "corpus" },
  { id: "haezhk1a", topicId: "food", che: P("хьаьжк1а"), ru: "кукуруза", emoji: "🌽", level: 2, source: "dictionary" },
  { id: "tueha", topicId: "food", che: P("туьха"), ru: "соль", emoji: "🧂", level: 2, source: "corpus" },
  { id: "shekar", topicId: "food", che: P("шекар"), ru: "сахар", emoji: "🍬", level: 1, source: "dictionary" },
  { id: "chay", topicId: "food", che: P("чай"), ru: "чай", emoji: "🍵", level: 1, source: "dictionary" },
  { id: "nekhcha", topicId: "food", che: P("нехча"), ru: "сыр", emoji: "🧀", level: 1, source: "corpus" },
  { id: "daetta", topicId: "food", che: P("даьтта"), ru: "масло", emoji: "🧈", level: 2, source: "corpus" },
  { id: "hokh", topicId: "food", che: P("хох"), ru: "лук", emoji: "🧅", level: 2, source: "corpus" },
  { id: "kartol", topicId: "food", che: P("картол"), ru: "картофель", emoji: "🥔", level: 1, source: "dictionary" },
  { id: "h1oa", topicId: "food", che: P("х1оа"), ru: "яйцо", emoji: "🥚", level: 1, source: "corpus" },
  { id: "kems", topicId: "food", che: P("кемс"), ru: "виноград", emoji: "🍇", level: 2, source: "corpus" },
  { id: "moz", topicId: "food", che: P("моз"), ru: "мёд", emoji: "🍯", level: 1, source: "corpus" },
  { id: "stom", topicId: "food", che: P("стом"), ru: "фрукт, плод", emoji: "🍑", level: 2, source: "corpus" },
  // Овощи и зелень
  { id: "food_garlic", topicId: "food", che: P("заз"), ru: "чеснок", emoji: "🧄", level: 2, source: "dictionary", review: "Подтвердить «заз» (чеснок)" },
  { id: "food_carrot", topicId: "food", che: P("морковь"), ru: "морковь", emoji: "🥕", level: 1, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_beet", topicId: "food", che: P("свёкла"), ru: "свёкла", emoji: "🫘", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_cabbage", topicId: "food", che: P("капуста"), ru: "капуста", emoji: "🥬", level: 1, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_tomato", topicId: "food", che: P("помидор"), ru: "помидор", emoji: "🍅", level: 1, source: "dictionary" },
  { id: "food_cucumber", topicId: "food", che: P("огурец"), ru: "огурец", emoji: "🥒", level: 1, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_pepper", topicId: "food", che: P("бурч"), ru: "перец", emoji: "🫑", level: 2, source: "dictionary", review: "Подтвердить «бурч» (перец)" },
  { id: "food_eggplant", topicId: "food", che: P("баклажан"), ru: "баклажан", emoji: "🍆", level: 2, source: "dictionary" },
  // Фрукты и ягоды
  { id: "food_banana", topicId: "food", che: P("банан"), ru: "банан", emoji: "🍌", level: 1, source: "dictionary" },
  { id: "food_orange", topicId: "food", che: P("апельсин"), ru: "апельсин", emoji: "🍊", level: 1, source: "dictionary" },
  { id: "food_lemon", topicId: "food", che: P("лимон"), ru: "лимон", emoji: "🍋", level: 1, source: "dictionary" },
  { id: "food_cherry", topicId: "food", che: P("вишня"), ru: "вишня", emoji: "🍒", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_strawberry", topicId: "food", che: P("клубника"), ru: "клубника", emoji: "🍓", level: 1, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_peach", topicId: "food", che: P("персик"), ru: "персик", emoji: "🍑", level: 2, source: "dictionary" },
  { id: "food_plum", topicId: "food", che: P("слива"), ru: "слива", emoji: "🫐", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  // Напитки
  { id: "food_compote", topicId: "food", che: P("компот"), ru: "компот", emoji: "🍹", level: 2, source: "dictionary" },
  { id: "food_kvass", topicId: "food", che: P("квас"), ru: "квас", emoji: "🍺", level: 2, source: "dictionary" },
  { id: "food_lemonade", topicId: "food", che: P("лимонад"), ru: "лимонад", emoji: "🥤", level: 2, source: "dictionary" },
  // Блюда
  { id: "food_soup", topicId: "food", che: P("суп"), ru: "суп", emoji: "🍲", level: 1, source: "dictionary" },
  { id: "food_porridge", topicId: "food", che: P("дахьа"), ru: "каша", emoji: "🥣", level: 1, source: "dictionary", review: "Подтвердить «дахьа» (каша)" },
  { id: "food_plov", topicId: "food", che: P("плов"), ru: "плов", emoji: "🍚", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_pancake", topicId: "food", che: P("блины"), ru: "блины", emoji: "🥞", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
  { id: "food_pie", topicId: "food", che: P("пирог"), ru: "пирог", emoji: "🥧", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
];

export const SENTENCES: Sentence[] = [
  { id: "food_s1", words: ["Ас", "бепиг", "доу"], ru: "Я ем хлеб.", emoji: "🍞" },
  { id: "food_s2", words: ["Ас", "шура", "молу"], ru: "Я пью молоко.", emoji: "🥛" },
];

export const SCENES: Scene[] = [
  {
    id: "food_scene",
    topicIds: ["food"],
    image: "/img/scene-food.jpg",
    objects: [
      { cardId: "bepig", x: 20, y: 60 },
      { cardId: "shura", x: 50, y: 40 },
      { cardId: "1azh", x: 80, y: 70 },
      { cardId: "kartol", x: 10, y: 80 },
    ],
  },
];
