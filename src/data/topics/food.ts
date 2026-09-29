import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "food",
    che: P("Даар"),
    ru: "Еда",
    emoji: "🍎",
    gradient: "from-red-300 to-rose-400",
    accent: "#EF4444",
    unlockStars: 5,
    map: { x: 62, y: 78 },
  },
];

export const CARDS: Card[] = [
  // Старые слова
  { id: "bepig", topicId: "food", che: P("бепиг"), ru: "хлеб", emoji: "🍞", image: "/img/cards/bepig.webp", level: 1, source: "corpus" },
  { id: "shura", topicId: "food", che: P("шура"), ru: "молоко", emoji: "🥛", image: "/img/cards/shura.webp", level: 1, source: "corpus" },
  { id: "1azh", topicId: "food", che: P("1аж"), ru: "яблоко", emoji: "🍎", image: "/img/cards/1azh.webp", level: 1, source: "corpus" },
  { id: "horbaz", topicId: "food", che: P("хорбаз"), ru: "арбуз", emoji: "🍉", level: 1, source: "dictionary", image: "/img/cards/horbaz.webp" },
  { id: "khor", topicId: "food", che: P("кхор"), ru: "груша", emoji: "🍐", level: 1, source: "dictionary", image: "/img/cards/khor.webp", review: "В корпусе «кхор» встречается только как имя; значение «груша» словарное" },
  { id: "zhizhig", topicId: "food", che: P("жижиг"), ru: "мясо", emoji: "🍖", level: 1, source: "corpus", image: "/img/cards/zhizhig.webp" },
  { id: "haezhk1a", topicId: "food", che: P("хьаьжк1а"), ru: "кукуруза", emoji: "🌽", level: 2, source: "dictionary", image: "/img/cards/haezhk1a.webp" },
  { id: "tueha", topicId: "food", che: P("туьха"), ru: "соль", emoji: "🧂", level: 2, source: "corpus", image: "/img/cards/tueha.webp" },
  { id: "shekar", topicId: "food", che: P("шекар"), ru: "сахар", emoji: "🍬", level: 1, source: "dictionary", image: "/img/cards/shekar.webp" },
  { id: "chay", topicId: "food", che: P("чай"), ru: "чай", emoji: "🍵", level: 1, source: "dictionary", image: "/img/cards/chay.webp" },
  { id: "nekhcha", topicId: "food", che: P("нехча"), ru: "сыр", emoji: "🧀", image: "/img/cards/nekhcha.webp", level: 1, source: "corpus" },
  { id: "daetta", topicId: "food", che: P("даьтта"), ru: "масло", emoji: "🧈", level: 2, source: "corpus", image: "/img/cards/daetta.webp" },
  { id: "hokh", topicId: "food", che: P("хох"), ru: "лук", emoji: "🧅", level: 2, source: "corpus", image: "/img/cards/hokh.webp" },
  { id: "kartol", topicId: "food", che: P("картол"), ru: "картофель", emoji: "🥔", level: 1, source: "dictionary", image: "/img/cards/kartol.webp" },
  { id: "h1oa", topicId: "food", che: P("х1оа"), ru: "яйцо", emoji: "🥚", level: 1, source: "corpus", image: "/img/cards/h1oa.webp" },
  { id: "kems", topicId: "food", che: P("кемс"), ru: "виноград", emoji: "🍇", level: 2, source: "corpus", image: "/img/cards/kems.webp" },
  { id: "moz", topicId: "food", che: P("моз"), ru: "мёд", emoji: "🍯", level: 1, source: "corpus", image: "/img/cards/moz.webp" },
  { id: "stom", topicId: "food", che: P("стом"), ru: "фрукт, плод", emoji: "🍑", level: 2, source: "corpus", image: "/img/cards/stom.webp" },
  // Овощи и зелень
  { id: "food_garlic", topicId: "food", che: P("саьрамсекх"), ru: "чеснок", emoji: "🧄", level: 2, source: "corpus", image: "/img/cards/food_garlic.webp" },
  { id: "food_carrot", topicId: "food", che: P("морков"), ru: "морковь", emoji: "🥕", level: 1, source: "dictionary", image: "/img/cards/food_carrot.webp" },
  { id: "food_beet", topicId: "food", che: P("буракъ"), ru: "свёкла", emoji: "🍠", level: 2, source: "corpus", image: "/img/cards/food_beet.webp" },
  { id: "food_cabbage", topicId: "food", che: P("копаст"), ru: "капуста", emoji: "🥬", level: 1, source: "corpus", image: "/img/cards/food_cabbage.webp" },
  { id: "food_tomato", topicId: "food", che: P("помидор"), ru: "помидор", emoji: "🍅", level: 1, source: "dictionary", image: "/img/cards/food_tomato.webp" },
  { id: "food_cucumber", topicId: "food", che: P("нарс"), ru: "огурец", emoji: "🥒", level: 1, source: "corpus", image: "/img/cards/food_cucumber.webp" },
  { id: "food_pepper", topicId: "food", che: P("бурч"), ru: "перец", emoji: "🫑", level: 2, source: "corpus", image: "/img/cards/food_pepper.webp" },
  { id: "food_eggplant", topicId: "food", che: P("баклажан"), ru: "баклажан", emoji: "🍆", level: 2, source: "dictionary", image: "/img/cards/food_eggplant.webp" },
  // Фрукты и ягоды
  { id: "food_banana", topicId: "food", che: P("банан"), ru: "банан", emoji: "🍌", level: 1, source: "dictionary", image: "/img/cards/food_banana.webp" },
  { id: "food_orange", topicId: "food", che: P("апельсин"), ru: "апельсин", emoji: "🍊", level: 1, source: "dictionary", image: "/img/cards/food_orange.webp" },
  { id: "food_lemon", topicId: "food", che: P("лимон"), ru: "лимон", emoji: "🍋", level: 1, source: "dictionary", image: "/img/cards/food_lemon.webp" },
  { id: "food_cherry", topicId: "food", che: P("балл"), ru: "вишня", emoji: "🍒", level: 2, source: "corpus", image: "/img/cards/food_cherry.webp" },
  { id: "food_strawberry", topicId: "food", che: P("ц1азам"), ru: "клубника", emoji: "🍓", level: 1, source: "corpus", image: "/img/cards/food_strawberry.webp" },
  { id: "food_peach", topicId: "food", che: P("персик"), ru: "персик", emoji: "🍑", level: 2, source: "dictionary", image: "/img/cards/food_peach.webp" },
  { id: "food_plum", topicId: "food", che: P("хьеч"), ru: "слива", emoji: "🍑", level: 2, source: "corpus", image: "/img/cards/food_plum.webp" },
  // Напитки
  { id: "food_compote", topicId: "food", che: P("компот"), ru: "компот", emoji: "🍹", level: 2, source: "dictionary", image: "/img/cards/food_compote.webp" },
  { id: "food_kvass", topicId: "food", che: P("морс"), ru: "морс / квас", emoji: "🧃", level: 2, source: "dictionary", image: "/img/cards/food_kvass.webp" },
  { id: "food_lemonade", topicId: "food", che: P("лимонад"), ru: "лимонад", emoji: "🥤", level: 2, source: "dictionary", image: "/img/cards/food_lemonade.webp" },
  // Блюда
  { id: "food_soup", topicId: "food", che: P("чорпа"), ru: "суп", emoji: "🍲", level: 1, source: "corpus", image: "/img/cards/food_soup.webp" },
  { id: "food_porridge", topicId: "food", che: P("худар"), ru: "каша", emoji: "🥣", level: 1, source: "corpus", image: "/img/cards/food_porridge.webp" },
  { id: "food_plov", topicId: "food", che: P("жижиг-галнаш"), ru: "жижиг-галнаш (галушки с мясом)", emoji: "🍲", level: 2, source: "corpus", image: "/img/cards/food_plov.webp" },
  { id: "food_pancake", topicId: "food", che: P("ч1епалгаш"), ru: "чепалгаш (лепёшки)", emoji: "🥞", level: 2, source: "dictionary", image: "/img/cards/food_pancake.webp" },
  { id: "food_pie", topicId: "food", che: P("пирог"), ru: "пирог", emoji: "🥧", level: 2, source: "dictionary", image: "/img/cards/food_pie.webp" },
  // Национальные блюда и продукты
  { id: "food_siscal", topicId: "food", che: P("сискал"), ru: "сискал (кукурузный хлеб)", emoji: "🫓", level: 1, source: "corpus", image: "/img/cards/food_siscal.webp" },
  { id: "food_khingalsh", topicId: "food", che: P("хингалш"), ru: "хингалш (лепёшки с тыквой)", emoji: "🥟", level: 2, source: "corpus", image: "/img/cards/food_khingalsh.webp" },
  { id: "food_toberam", topicId: "food", che: P("т1о-берам"), ru: "тӀо-берам (творог со сметаной)", emoji: "🥣", level: 2, source: "corpus", image: "/img/cards/food_toberam.webp" },
  { id: "food_kotamgalnash", topicId: "food", che: P("котам-галнаш"), ru: "курица с галушками", emoji: "🍗", level: 2, source: "corpus", image: "/img/cards/food_kotamgalnash.webp" },
  { id: "food_hokham", topicId: "food", che: P("хьокхам"), ru: "хьокхам (тонкая лепёшка)", emoji: "🫓", level: 2, source: "corpus", image: "/img/cards/food_hokham.webp" },
  { id: "food_kald", topicId: "food", che: P("к1алд"), ru: "творог", emoji: "🧀", level: 1, source: "corpus", image: "/img/cards/food_kald.webp" },
  { id: "food_pumpkin", topicId: "food", che: P("г1обакх"), ru: "тыква", emoji: "🎃", level: 1, source: "corpus", image: "/img/cards/food_pumpkin.webp" },
  { id: "food_beans", topicId: "food", che: P("кхоьш"), ru: "фасоль", emoji: "🫘", level: 2, source: "corpus", image: "/img/cards/food_beans.webp" },
  { id: "food_wheat", topicId: "food", che: P("к1а"), ru: "пшеница, зерно", emoji: "🌾", level: 2, source: "corpus", image: "/img/cards/food_wheat.webp" },
  { id: "food_flour", topicId: "food", che: P("ахьар"), ru: "кукурузная мука", emoji: "🌾", level: 2, source: "corpus", image: "/img/cards/food_flour.webp" },
  { id: "food_nut", topicId: "food", che: P("б1ар"), ru: "орех", emoji: "🌰", level: 1, source: "corpus", image: "/img/cards/food_nut.webp" },
  { id: "food_quince", topicId: "food", che: P("1айва"), ru: "айва", emoji: "🍐", level: 2, source: "corpus", image: "/img/cards/food_quince.webp" },
  { id: "food_apricot", topicId: "food", che: P("г1уьжам"), ru: "абрикос", emoji: "🍑", level: 2, source: "corpus", image: "/img/cards/food_apricot.webp" },
  { id: "food_icecream", topicId: "food", che: P("шам-шарбат"), ru: "мороженое", emoji: "🍦", level: 1, source: "corpus", image: "/img/cards/food_icecream.webp" },
  { id: "food_candy", topicId: "food", che: P("мерз-х1ума"), ru: "конфета, сладость", emoji: "🍬", level: 1, source: "corpus", image: "/img/cards/food_candy.webp" },
  { id: "food_chocolate", topicId: "food", che: P("шоколад"), ru: "шоколад", emoji: "🍫", level: 1, source: "dictionary", image: "/img/cards/food_chocolate.webp" },
  { id: "food_coffee", topicId: "food", che: P("кофе"), ru: "кофе", emoji: "☕", level: 1, source: "dictionary", image: "/img/cards/food_coffee.webp" },
  { id: "food_shashlik", topicId: "food", che: P("шашлык"), ru: "шашлык", emoji: "🍢", level: 2, source: "dictionary", image: "/img/cards/food_shashlik.webp" },
  { id: "food_meatpie", topicId: "food", che: P("ба1арш"), ru: "баӀарш (домашнее мясное блюдо)", emoji: "🥩", level: 3, source: "corpus", image: "/img/cards/food_meatpie.webp" },
  { id: "food_raspberry", topicId: "food", che: P("малина"), ru: "малина", emoji: "🫐", level: 1, source: "dictionary", image: "/img/cards/food_raspberry.webp" },
  // Молочные продукты и фрукты
  { id: "food_melon", topicId: "food", che: P("паста"), ru: "дыня", emoji: "🍈", level: 1, source: "corpus", image: "/img/cards/food_melon.webp" },
  { id: "food_pomegranate", topicId: "food", che: P("анар"), ru: "гранат", emoji: "🍎", level: 1, source: "corpus", image: "/img/cards/food_pomegranate.webp" },
  { id: "food_fig", topicId: "food", che: P("муртол"), ru: "инжир", emoji: "🫐", level: 2, source: "corpus", image: "/img/cards/food_fig.webp" },
  { id: "food_sourcream", topicId: "food", che: P("т1о"), ru: "сметана, сливки", emoji: "🥛", level: 1, source: "corpus", image: "/img/cards/food_sourcream.webp" },
  { id: "food_kefir", topicId: "food", che: P("етта шура"), ru: "кефир, простокваша", emoji: "🥛", level: 1, source: "corpus", image: "/img/cards/food_kefir.webp" },
  { id: "food_butter_white", topicId: "food", che: P("к1ай даьтта"), ru: "сливочное масло", emoji: "🧈", level: 1, source: "corpus", image: "/img/cards/food_butter_white.webp" },
  { id: "food_honeycomb", topicId: "food", che: P("к1ора"), ru: "медовые соты", emoji: "🍯", level: 2, source: "corpus", image: "/img/cards/food_honeycomb.webp" },
  { id: "food_dill", topicId: "food", che: P("укроп"), ru: "укроп, зелень", emoji: "🌿", level: 1, source: "dictionary", image: "/img/cards/food_dill.webp" },
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
