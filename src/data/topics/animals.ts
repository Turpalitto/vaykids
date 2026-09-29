import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "animals",
    che: P("Дийнаташ"),
    ru: "Животные",
    emoji: "🐺",
    gradient: "from-lime-300 to-green-500",
    accent: "#22C55E",
    unlockStars: 10,
    map: { x: 34, y: 76 },
  },
];

export const CARDS: Card[] = [
  // Старые животные из words.ts
  { id: "borz", topicId: "animals", che: P("борз"), ru: "волк", emoji: "🐺", image: "/img/cards/borz.webp", level: 1, source: "corpus" },
  { id: "cha", topicId: "animals", che: P("ча"), ru: "медведь", emoji: "🐻", image: "/img/cards/cha.webp", level: 1, source: "corpus" },
  { id: "cxogal", topicId: "animals", che: P("цхьогал"), ru: "лиса", emoji: "🦊", image: "/img/cards/cxogal.webp", level: 1, source: "corpus" },
  { id: "phagal", topicId: "animals", che: P("пхьагал"), ru: "заяц", emoji: "🐰", image: "/img/cards/phagal.webp", level: 1, source: "corpus" },
  { id: "govr", topicId: "animals", che: P("говр"), ru: "лошадь", emoji: "🐴", level: 1, source: "corpus", image: "/img/cards/govr.webp" },
  { id: "yett", topicId: "animals", che: P("етт"), ru: "корова", emoji: "🐄", level: 1, source: "corpus", image: "/img/cards/yett.webp" },
  { id: "gaza", topicId: "animals", che: P("газа"), ru: "коза", emoji: "🐐", level: 1, source: "corpus", image: "/img/cards/gaza.webp" },
  { id: "uestag1", topicId: "animals", che: P("уьстаг1"), ru: "овца", emoji: "🐑", level: 1, source: "corpus", image: "/img/cards/uestag1.webp" },
  { id: "cicig", topicId: "animals", che: P("цициг"), ru: "кошка", emoji: "🐱", image: "/img/cards/cicig.jpg", level: 1, source: "dictionary" },
  { id: "zh1aela", topicId: "animals", che: P("ж1аьла"), ru: "собака", emoji: "🐶", level: 1, source: "corpus", image: "/img/cards/zh1aela.webp" },
  { id: "kotam", topicId: "animals", che: P("котам"), ru: "курица", emoji: "🐔", level: 1, source: "dictionary", image: "/img/cards/kotam.webp" },
  { id: "n1aena", topicId: "animals", che: P("н1аьна"), ru: "петух", emoji: "🐓", level: 2, source: "corpus", image: "/img/cards/n1aena.webp" },
  { id: "olkhazar", topicId: "animals", che: P("олхазар"), ru: "птица", emoji: "🐦", level: 1, source: "corpus", image: "/img/cards/olkhazar.webp" },
  { id: "ch1ara", topicId: "animals", che: P("ч1ара"), ru: "рыба", emoji: "🐟", level: 1, source: "corpus", image: "/img/cards/ch1ara.webp" },
  { id: "aerzu", topicId: "animals", che: P("аьрзу"), ru: "орёл", emoji: "🦅", level: 2, source: "corpus", image: "/img/cards/aerzu.webp" },
  { id: "lom", topicId: "animals", che: P("лом"), ru: "лев", emoji: "🦁", level: 1, source: "corpus", image: "/img/cards/lom.webp" },
  { id: "pil", topicId: "animals", che: P("пил"), ru: "слон", emoji: "🐘", level: 1, source: "corpus", image: "/img/cards/pil.webp" },
  { id: "say", topicId: "animals", che: P("сай"), ru: "олень", emoji: "🦌", level: 1, source: "corpus", image: "/img/cards/say.webp" },
  { id: "vir", topicId: "animals", che: P("вир"), ru: "осёл", emoji: "🫏", level: 2, source: "corpus", image: "/img/cards/vir.webp" },
  { id: "kkhokkha", topicId: "animals", che: P("кхокха"), ru: "голубь", emoji: "🕊️", level: 2, source: "corpus", image: "/img/cards/kkhokkha.webp" },
  // Новые животные
  { id: "animals_tiger", topicId: "animals", che: P("ц1окъ"), ru: "тигр / барс", emoji: "🐅", level: 1, source: "corpus", image: "/img/cards/animals_tiger.webp" },
  { id: "animals_giraffe", topicId: "animals", che: P("жираф"), ru: "жираф", emoji: "🦒", level: 2, source: "dictionary", image: "/img/cards/animals_giraffe.webp" },
  { id: "animals_monkey", topicId: "animals", che: P("майма"), ru: "обезьяна", emoji: "🐒", level: 1, source: "dictionary", image: "/img/cards/animals_monkey.webp" },
  { id: "animals_squirrel", topicId: "animals", che: P("к1орса"), ru: "белка", emoji: "🐿️", level: 2, source: "dictionary", image: "/img/cards/animals_squirrel.webp" },
  { id: "animals_hedgehog", topicId: "animals", che: P("1аьрцак"), ru: "ёж", emoji: "🦔", level: 2, source: "dictionary", image: "/img/cards/animals_hedgehog.webp" },
  { id: "animals_mole", topicId: "animals", che: P("к1урс"), ru: "крот", emoji: "🦡", level: 2, source: "dictionary", image: "/img/cards/animals_mole.webp" },
  { id: "animals_mouse", topicId: "animals", che: P("дахка"), ru: "мышь", emoji: "🐭", level: 1, source: "corpus", image: "/img/cards/animals_mouse.webp" },
  { id: "animals_rat", topicId: "animals", che: P("москал-дахка"), ru: "крыса", emoji: "🐀", level: 2, source: "dictionary", image: "/img/cards/animals_rat.webp" },
  { id: "animals_rabbit", topicId: "animals", che: P("пхьагал"), ru: "кролик", emoji: "🐇", level: 1, source: "corpus", image: "/img/cards/animals_rabbit.webp" },
  { id: "animals_elk", topicId: "animals", che: P("сай"), ru: "лось", emoji: "🫎", level: 2, source: "corpus", image: "/img/cards/animals_elk.webp" },
  { id: "animals_panda", topicId: "animals", che: P("панда"), ru: "панда", emoji: "🐼", level: 1, source: "dictionary", image: "/img/cards/animals_panda.webp" },
  { id: "animals_zebra", topicId: "animals", che: P("зебра"), ru: "зебра", emoji: "🦓", level: 2, source: "dictionary", image: "/img/cards/animals_zebra.webp" },
  { id: "animals_hippo", topicId: "animals", che: P("бегемот"), ru: "бегемот", emoji: "🦛", level: 2, source: "dictionary", image: "/img/cards/animals_hippo.webp" },
  { id: "animals_rhino", topicId: "animals", che: P("носорог"), ru: "носорог", emoji: "🦏", level: 2, source: "dictionary", image: "/img/cards/animals_rhino.webp" },
  { id: "animals_crocodile", topicId: "animals", che: P("крокодил"), ru: "крокодил", emoji: "🐊", level: 2, source: "dictionary", image: "/img/cards/animals_crocodile.webp" },
  { id: "animals_snake", topicId: "animals", che: P("лаьхьа"), ru: "змея", emoji: "🐍", level: 2, source: "corpus", image: "/img/cards/animals_snake.webp" },
  { id: "animals_lizard", topicId: "animals", che: P("моьлкъа"), ru: "ящерица", emoji: "🦎", level: 2, source: "corpus", image: "/img/cards/animals_lizard.webp" },
  { id: "animals_turtle", topicId: "animals", che: P("пелкъа"), ru: "черепаха", emoji: "🐢", level: 2, source: "dictionary", image: "/img/cards/animals_turtle.webp", review: "Подтвердить «пелкъа/виса» (черепаха) у носителя" },
  { id: "animals_frog", topicId: "animals", che: P("пхьид"), ru: "лягушка", emoji: "🐸", level: 2, source: "corpus", image: "/img/cards/animals_frog.webp" },
  // Насекомые
  { id: "animals_butterfly", topicId: "animals", che: P("к1ормац"), ru: "бабочка", emoji: "🦋", level: 1, source: "corpus", image: "/img/cards/animals_butterfly.webp" },
  { id: "animals_bee", topicId: "animals", che: P("накхармоза"), ru: "пчела", emoji: "🐝", level: 1, source: "corpus", image: "/img/cards/animals_bee.webp" },
  { id: "animals_ant", topicId: "animals", che: P("зингат"), ru: "муравей", emoji: "🐜", level: 2, source: "corpus", image: "/img/cards/animals_ant.webp" },
  { id: "animals_spider", topicId: "animals", che: P("гезк1е"), ru: "паук", emoji: "🕷️", level: 2, source: "corpus", image: "/img/cards/animals_spider.webp" },
  { id: "animals_beetle", topicId: "animals", che: P("ж1иж1иг"), ru: "божья коровка", emoji: "🐞", level: 2, source: "dictionary", image: "/img/cards/animals_beetle.webp", review: "Подтвердить название у носителя" },
  { id: "animals_mosquito", topicId: "animals", che: P("чуьрк"), ru: "комар", emoji: "🦟", level: 2, source: "corpus", image: "/img/cards/animals_mosquito.webp" },
  // Птицы
  { id: "animals_crow", topicId: "animals", che: P("къайг"), ru: "ворона", emoji: "🐦‍⬛", level: 2, source: "corpus", image: "/img/cards/animals_crow.webp" },
  { id: "animals_magpie", topicId: "animals", che: P("сасардиг"), ru: "сорока", emoji: "🦜", level: 2, source: "dictionary", image: "/img/cards/animals_magpie.webp", review: "Подтвердить «сасардиг» (сорока) у носителя" },
  { id: "animals_woodpecker", topicId: "animals", che: P("хьелийдарг"), ru: "дятел", emoji: "🐦", level: 2, source: "dictionary", image: "/img/cards/animals_woodpecker.webp" },
  { id: "animals_owl", topicId: "animals", che: P("бух1а"), ru: "сова", emoji: "🦉", level: 2, source: "corpus", image: "/img/cards/animals_owl.webp" },
  { id: "animals_swan", topicId: "animals", che: P("г1ург1аз"), ru: "лебедь", emoji: "🦢", level: 2, source: "dictionary", image: "/img/cards/animals_swan.webp" },
  { id: "animals_duck", topicId: "animals", che: P("бад"), ru: "утка", emoji: "🦆", level: 1, source: "corpus", image: "/img/cards/animals_duck.webp" },
  { id: "animals_goose", topicId: "animals", che: P("г1аз"), ru: "гусь", emoji: "🪿", level: 2, source: "corpus", image: "/img/cards/animals_goose.webp" },
  // Морские обитатели
  { id: "animals_dolphin", topicId: "animals", che: P("дельфин"), ru: "дельфин", emoji: "🐬", level: 2, source: "dictionary", image: "/img/cards/animals_dolphin.webp" },
  { id: "animals_whale", topicId: "animals", che: P("кит"), ru: "кит", emoji: "🐋", level: 2, source: "dictionary", image: "/img/cards/animals_whale.webp" },
  { id: "animals_shark", topicId: "animals", che: P("акула"), ru: "акула", emoji: "🦈", level: 2, source: "dictionary", image: "/img/cards/animals_shark.webp" },
  { id: "animals_octopus", topicId: "animals", che: P("осьминог"), ru: "осьминог", emoji: "🐙", level: 2, source: "dictionary", image: "/img/cards/animals_octopus.webp" },
  { id: "animals_starfish", topicId: "animals", che: P("х1ордан седа"), ru: "морская звезда", emoji: "⭐", level: 2, source: "dictionary", image: "/img/cards/animals_starfish.webp" },
  // Детёныши и другие животные
  { id: "animals_korni", topicId: "animals", che: P("к1орни"), ru: "птенец, детёныш", emoji: "🐥", level: 1, source: "corpus", image: "/img/cards/animals_korni.webp" },
  { id: "animals_1ahar", topicId: "animals", che: P("1ахар"), ru: "ягнёнок", emoji: "🐑", level: 1, source: "corpus", image: "/img/cards/animals_1ahar.webp" },
  { id: "animals_esa", topicId: "animals", che: P("эса"), ru: "телёнок", emoji: "🐮", level: 1, source: "corpus", image: "/img/cards/animals_esa.webp" },
  { id: "animals_k1eza", topicId: "animals", che: P("к1еза"), ru: "щенок, детёныш", emoji: "🐶", level: 1, source: "corpus", image: "/img/cards/animals_k1eza.webp" },
  { id: "animals_beqa", topicId: "animals", che: P("бекъа"), ru: "жеребёнок", emoji: "🐴", level: 1, source: "corpus", image: "/img/cards/animals_beqa.webp" },
  { id: "animals_bozh", topicId: "animals", che: P("бож"), ru: "козёл", emoji: "🐐", level: 2, source: "corpus", image: "/img/cards/animals_bozh.webp" },
  { id: "animals_stu", topicId: "animals", che: P("сту"), ru: "бык, вол", emoji: "🐂", level: 1, source: "corpus", image: "/img/cards/animals_stu.webp" },
  { id: "animals_ayghar", topicId: "animals", che: P("айг1ар"), ru: "жеребец, скакун", emoji: "🐎", level: 2, source: "corpus", image: "/img/cards/animals_ayghar.webp" },
  { id: "animals_swallow", topicId: "animals", che: P("ч1ег1ардиг"), ru: "ласточка", emoji: "🐦", level: 1, source: "corpus", image: "/img/cards/animals_swallow.webp" },
  { id: "animals_jackdaw", topicId: "animals", che: P("ч1овка"), ru: "галка", emoji: "🐦‍⬛", level: 2, source: "corpus", image: "/img/cards/animals_jackdaw.webp" },
  { id: "animals_tarsal", topicId: "animals", che: P("тарсал"), ru: "белочка", emoji: "🐿️", level: 1, source: "corpus", image: "/img/cards/animals_tarsal.webp" },
  { id: "animals_wildcat", topicId: "animals", che: P("акха цициг"), ru: "рысь, дикая кошка", emoji: "🐱", level: 2, source: "corpus", image: "/img/cards/animals_wildcat.webp" },
  { id: "animals_wildgoat", topicId: "animals", che: P("акха газа"), ru: "тур, горный козёл", emoji: "🐐", level: 2, source: "corpus", image: "/img/cards/animals_wildgoat.webp" },
  { id: "animals_bison", topicId: "animals", che: P("акха сту"), ru: "зубр", emoji: "🦬", level: 2, source: "corpus", image: "/img/cards/animals_bison.webp" },
  { id: "animals_cheetah", topicId: "animals", che: P("ц1окъбож"), ru: "гепард, барс", emoji: "🐆", level: 2, source: "corpus", image: "/img/cards/animals_cheetah.webp" },
  { id: "animals_cricket", topicId: "animals", che: P("цирцирк"), ru: "кузнечик, сверчок", emoji: "🦗", level: 2, source: "corpus", image: "/img/cards/animals_cricket.webp" },
  { id: "animals_snail", topicId: "animals", che: P("зезан г1ала"), ru: "улитка", emoji: "🐌", level: 2, source: "dictionary", image: "/img/cards/animals_snail.webp" },
  { id: "animals_fly", topicId: "animals", che: P("моза"), ru: "муха", emoji: "🪰", level: 1, source: "corpus", image: "/img/cards/animals_fly.webp" },
  // Птицы и фауна
  { id: "animals_sparrow", topicId: "animals", che: P("хьоза"), ru: "воробей, птичка", emoji: "🐦", level: 1, source: "corpus", image: "/img/cards/animals_sparrow.webp" },
  { id: "animals_cuckoo", topicId: "animals", che: P("х1уттут"), ru: "кукушка", emoji: "🐦", level: 2, source: "corpus", image: "/img/cards/animals_cuckoo.webp" },
  { id: "animals_falcon", topicId: "animals", che: P("лачин"), ru: "сокол", emoji: "🦅", level: 1, source: "corpus", image: "/img/cards/animals_falcon.webp" },
  { id: "animals_turkey", topicId: "animals", che: P("москал"), ru: "индейка, индюк", emoji: "🦃", level: 1, source: "corpus", image: "/img/cards/animals_turkey.webp" },
  { id: "animals_badger", topicId: "animals", che: P("борц1"), ru: "барсук", emoji: "🦡", level: 2, source: "corpus", image: "/img/cards/animals_badger.webp" },
  { id: "animals_nightingale", topicId: "animals", che: P("гуьрг1а"), ru: "соловей", emoji: "🎶", level: 2, source: "corpus", image: "/img/cards/animals_nightingale.webp" },
  { id: "animals_dragonfly", topicId: "animals", che: P("инзела"), ru: "стрекоза", emoji: "🪰", level: 2, source: "corpus", image: "/img/cards/animals_dragonfly.webp" },
  { id: "animals_wasp", topicId: "animals", che: P("къорза моза"), ru: "оса", emoji: "🐝", level: 1, source: "corpus", image: "/img/cards/animals_wasp.webp" },
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