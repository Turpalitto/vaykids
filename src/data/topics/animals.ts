import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "animals",
    che: P("дийнаташ"),
    ru: "Животные",
    emoji: "🐺",
    gradient: "from-lime-300 to-green-500",
    accent: "#22C55E",
    unlockStars: 10,
    map: { x: 30, y: 72 },
  },
];

export const CARDS: Card[] = [
  // Старые животные из words.ts
  { id: "borz", topicId: "animals", che: P("борз"), ru: "волк", emoji: "🐺", level: 1, source: "corpus" },
  { id: "cha", topicId: "animals", che: P("ча"), ru: "медведь", emoji: "🐻", level: 1, source: "corpus" },
  { id: "cxogal", topicId: "animals", che: P("цхьогал"), ru: "лиса", emoji: "🦊", level: 1, source: "corpus" },
  { id: "phagal", topicId: "animals", che: P("пхьагал"), ru: "заяц", emoji: "🐰", level: 1, source: "corpus" },
  { id: "govr", topicId: "animals", che: P("говр"), ru: "лошадь", emoji: "🐴", level: 1, source: "corpus" },
  { id: "yett", topicId: "animals", che: P("етт"), ru: "корова", emoji: "🐄", level: 1, source: "corpus" },
  { id: "gaza", topicId: "animals", che: P("газа"), ru: "коза", emoji: "🐐", level: 1, source: "corpus" },
  { id: "uestag1", topicId: "animals", che: P("уьстаг1"), ru: "овца", emoji: "🐑", level: 1, source: "corpus" },
  { id: "cicig", topicId: "animals", che: P("цициг"), ru: "кошка", emoji: "🐱", level: 1, source: "dictionary" },
  { id: "zh1aela", topicId: "animals", che: P("ж1аьла"), ru: "собака", emoji: "🐶", level: 1, source: "corpus" },
  { id: "kotam", topicId: "animals", che: P("котам"), ru: "курица", emoji: "🐔", level: 1, source: "dictionary" },
  { id: "n1aena", topicId: "animals", che: P("н1аьна"), ru: "петух", emoji: "🐓", level: 2, source: "corpus" },
  { id: "olkhazar", topicId: "animals", che: P("олхазар"), ru: "птица", emoji: "🐦", level: 1, source: "corpus" },
  { id: "ch1ara", topicId: "animals", che: P("ч1ара"), ru: "рыба", emoji: "🐟", level: 1, source: "corpus" },
  { id: "aerzu", topicId: "animals", che: P("аьрзу"), ru: "орёл", emoji: "🦅", level: 2, source: "corpus" },
  { id: "lom", topicId: "animals", che: P("лом"), ru: "лев", emoji: "🦁", level: 1, source: "corpus" },
  { id: "pil", topicId: "animals", che: P("пил"), ru: "слон", emoji: "🐘", level: 1, source: "corpus" },
  { id: "say", topicId: "animals", che: P("сай"), ru: "олень", emoji: "🦌", level: 1, source: "corpus" },
  { id: "vir", topicId: "animals", che: P("вир"), ru: "осёл", emoji: "🫏", level: 2, source: "corpus" },
  { id: "kkhokkha", topicId: "animals", che: P("кхокха"), ru: "голубь", emoji: "🕊️", level: 2, source: "corpus" },
  // Новые животные
  { id: "animals_tiger", topicId: "animals", che: P("т1ыг"), ru: "тигр", emoji: "🐯", level: 1, source: "dictionary", review: "Подтвердить «т1ыг» (тигр) у носителя" },
  { id: "animals_giraffe", topicId: "animals", che: P("жираф"), ru: "жираф", emoji: "🦒", level: 2, source: "dictionary" },
  { id: "animals_monkey", topicId: "animals", che: P("майма"), ru: "обезьяна", emoji: "🐒", level: 1, source: "dictionary" },
  { id: "animals_squirrel", topicId: "animals", che: P("к1орса"), ru: "белка", emoji: "🐿️", level: 2, source: "dictionary" },
  { id: "animals_hedgehog", topicId: "animals", che: P("1аьрцак"), ru: "ёж", emoji: "🦔", level: 2, source: "dictionary" },
  { id: "animals_mole", topicId: "animals", che: P("к1урс"), ru: "крот", emoji: "🐭", level: 2, source: "dictionary" },
  { id: "animals_mouse", topicId: "animals", che: P("ц1"), ru: "мышь", emoji: "🐭", level: 1, source: "dictionary" },
  { id: "animals_rat", topicId: "animals", che: P("к1а"), ru: "крыса", emoji: "🐀", level: 2, source: "dictionary" },
  { id: "animals_rabbit", topicId: "animals", che: P("пхьагал"), ru: "кролик", emoji: "🐇", level: 1, source: "corpus" },
  { id: "animals_elk", topicId: "animals", che: P("сай"), ru: "лось", emoji: "🦌", level: 2, source: "corpus" },
  { id: "animals_panda", topicId: "animals", che: P("панда"), ru: "панда", emoji: "🐼", level: 1, source: "dictionary" },
  { id: "animals_zebra", topicId: "animals", che: P("зебра"), ru: "зебра", emoji: "🦓", level: 2, source: "dictionary" },
  { id: "animals_hippo", topicId: "animals", che: P("бегемот"), ru: "бегемот", emoji: "🦛", level: 2, source: "dictionary" },
  { id: "animals_rhino", topicId: "animals", che: P("носорог"), ru: "носорог", emoji: "🦏", level: 2, source: "dictionary" },
  { id: "animals_crocodile", topicId: "animals", che: P("крокодил"), ru: "крокодил", emoji: "🐊", level: 2, source: "dictionary" },
  { id: "animals_snake", topicId: "animals", che: P("лат"), ru: "змея", emoji: "🐍", level: 2, source: "corpus" },
  { id: "animals_lizard", topicId: "animals", che: P("г1а"), ru: "ящерица", emoji: "🦎", level: 2, source: "dictionary" },
  { id: "animals_turtle", topicId: "animals", che: P("виса"), ru: "черепаха", emoji: "🐢", level: 2, source: "dictionary", review: "Подтвердить «виса» (черепаха) у носителя" },
  { id: "animals_frog", topicId: "animals", che: P("лекх"), ru: "лягушка", emoji: "🐸", level: 2, source: "corpus" },
  // Насекомые
  { id: "animals_butterfly", topicId: "animals", che: P("пхьаг1алг1а"), ru: "бабочка", emoji: "🦋", level: 1, source: "dictionary", review: "Подтвердить «пхьаг1алг1а» (бабочка) у носителя" },
  { id: "animals_bee", topicId: "animals", che: P("ноз"), ru: "пчела", emoji: "🐝", level: 1, source: "corpus" },
  { id: "animals_ant", topicId: "animals", che: P("г1а"), ru: "муравей", emoji: "🐜", level: 2, source: "corpus" },
  { id: "animals_spider", topicId: "animals", che: P("доза"), ru: "паук", emoji: "🕷️", level: 2, source: "dictionary", review: "Подтвердить «доза» (паук) у носителя" },
  { id: "animals_beetle", topicId: "animals", che: P("ж1иж1иг"), ru: "божья коровка", emoji: "🐞", level: 2, source: "dictionary", review: "Подтвердить название у носителя" },
  { id: "animals_mosquito", topicId: "animals", che: P("бата"), ru: "комар", emoji: "🦟", level: 2, source: "dictionary", review: "Подтвердить «бата» (комар) у носителя" },
  // Птицы
  { id: "animals_crow", topicId: "animals", che: P("к1урк1у"), ru: "ворона", emoji: "🐦‍⬛", level: 2, source: "dictionary", review: "Подтвердить «к1урк1у» (ворона) у носителя" },
  { id: "animals_magpie", topicId: "animals", che: P("чуьрка"), ru: "сорока", emoji: "🦜", level: 2, source: "dictionary", review: "Подтвердить «чуьрка» (сорока) у носителя" },
  { id: "animals_woodpecker", topicId: "animals", che: P("т1анге"), ru: "дятел", emoji: "🐦", level: 2, source: "dictionary", review: "Подтвердить «т1анге» (дятел) у носителя" },
  { id: "animals_owl", topicId: "animals", che: P("бух1"), ru: "сова", emoji: "🦉", level: 2, source: "corpus" },
  { id: "animals_swan", topicId: "animals", che: P("г1аз"), ru: "лебедь", emoji: "🦢", level: 2, source: "dictionary", review: "Подтвердить «г1аз» (лебедь) у носителя" },
  { id: "animals_duck", topicId: "animals", che: P("бад"), ru: "утка", emoji: "🦆", level: 1, source: "corpus" },
  { id: "animals_goose", topicId: "animals", che: P("г1азг1аз"), ru: "гусь", emoji: "🪿", level: 2, source: "dictionary", review: "Подтвердить «г1азг1аз» (гусь) у носителя" },
  // Морские обитатели
  { id: "animals_dolphin", topicId: "animals", che: P("дельфин"), ru: "дельфин", emoji: "🐬", level: 2, source: "dictionary" },
  { id: "animals_whale", topicId: "animals", che: P("кит"), ru: "кит", emoji: "🐋", level: 2, source: "dictionary" },
  { id: "animals_shark", topicId: "animals", che: P("акула"), ru: "акула", emoji: "🦈", level: 2, source: "dictionary" },
  { id: "animals_octopus", topicId: "animals", che: P("осьминог"), ru: "осьминог", emoji: "🐙", level: 2, source: "dictionary" },
  { id: "animals_jellyfish", topicId: "animals", che: P("медуза"), ru: "медуза", emoji: "🪼", level: 2, source: "dictionary" },
  { id: "animals_starfish", topicId: "animals", che: P("морская звезда"), ru: "морская звезда", emoji: "⭐", level: 2, source: "dictionary", review: "Заимствование; уточнить чеченское слово" },
];

export const SENTENCES: Sentence[] = [
  { id: "a1", words: ["Борз", "хьуьнхахь", "ю"], ru: "Волк в лесу.", emoji: "🐺🌲" },
  { id: "a2", words: ["Цициг", "жима", "ду"], ru: "Кошка маленькая.", emoji: "🐱🤏" },
];

export const SCENES: Scene[] = [
  {
    id: "animals_scene",
    topicIds: ["animals"],
    image: "/img/scene-animals.jpg",
    objects: [
      { cardId: "borz", x: 20, y: 60 },
      { cardId: "cha", x: 50, y: 40 },
      { cardId: "cxogal", x: 80, y: 70 },
      { cardId: "phagal", x: 10, y: 80 },
    ],
  },
];