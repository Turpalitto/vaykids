import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "nature",
    che: P("1алам"),
    ru: "Природа",
    emoji: "🌳",
    gradient: "from-emerald-300 to-teal-500",
    accent: "#14B8A6",
    unlockStars: 35,
    map: { x: 24, y: 48 },
  },
];

export const CARDS: Card[] = [
  { id: "hi", topicId: "nature", che: P("хи"), ru: "вода", emoji: "💧", level: 1, source: "corpus", image: "/img/cards/hi.webp" },
  { id: "ditt", topicId: "nature", che: P("дитт"), ru: "дерево", emoji: "🌳", level: 1, source: "corpus", image: "/img/cards/ditt.webp" },
  { id: "zezag", topicId: "nature", che: P("зезаг"), ru: "цветок", emoji: "🌸", level: 1, source: "corpus", image: "/img/cards/zezag.webp" },
  { id: "malkh", topicId: "nature", che: P("малх"), ru: "солнце", emoji: "☀️", level: 1, source: "corpus", image: "/img/cards/malkh.webp" },
  { id: "butt", topicId: "nature", che: P("бутт"), ru: "луна, месяц", emoji: "🌙", level: 1, source: "corpus", image: "/img/cards/butt.webp" },
  { id: "seda", topicId: "nature", che: P("седа"), ru: "звезда", emoji: "⭐", level: 1, source: "corpus", image: "/img/cards/seda.webp" },
  { id: "stigal", topicId: "nature", che: P("стигал"), ru: "небо", emoji: "🌤️", level: 1, source: "corpus", image: "/img/cards/stigal.webp" },
  { id: "latta", topicId: "nature", che: P("латта"), ru: "земля", emoji: "🌍", level: 1, source: "corpus", image: "/img/cards/latta.webp" },
  { id: "hun", topicId: "nature", che: P("хьун"), ru: "лес", emoji: "🌲", level: 1, source: "corpus", image: "/img/cards/hun.webp" },
  { id: "mokh", topicId: "nature", che: P("мох"), ru: "ветер", emoji: "🌬️", level: 2, source: "corpus", image: "/img/cards/mokh.webp" },
  { id: "dog1a", topicId: "nature", che: P("дог1а"), ru: "дождь", emoji: "🌧️", level: 1, source: "corpus", image: "/img/cards/dog1a.webp" },
  { id: "lo", topicId: "nature", che: P("ло"), ru: "снег", emoji: "❄️", level: 1, source: "corpus", image: "/img/cards/lo.webp" },
  { id: "buc", topicId: "nature", che: P("буц"), ru: "трава", emoji: "🌿", level: 1, source: "corpus", image: "/img/cards/buc.webp" },
  { id: "g1a", topicId: "nature", che: P("г1а"), ru: "лист", emoji: "🍃", level: 2, source: "corpus", image: "/img/cards/g1a.webp" },
  { id: "t1ulg", topicId: "nature", che: P("т1улг"), ru: "камень", emoji: "🪨", level: 1, source: "corpus", image: "/img/cards/t1ulg.webp" },
  { id: "markha", topicId: "nature", che: P("марха"), ru: "облако", emoji: "☁️", level: 1, source: "dictionary", image: "/img/cards/markha.webp" },
  // Явления и флора природы
  { id: "nature_rainbow", topicId: "nature", che: P("села1ад"), ru: "радуга", emoji: "🌈", level: 1, source: "corpus", image: "/img/cards/nature_rainbow.webp" },
  { id: "nature_sunflower", topicId: "nature", che: P("малхбакар"), ru: "подсолнух", emoji: "🌻", level: 1, source: "corpus", image: "/img/cards/nature_sunflower.webp" },
  { id: "nature_mushroom", topicId: "nature", che: P("ж1алин нускал"), ru: "гриб", emoji: "🍄", level: 1, source: "corpus", image: "/img/cards/nature_mushroom.webp" },
  { id: "nature_sea", topicId: "nature", che: P("х1орд"), ru: "море", emoji: "🌊", level: 1, source: "corpus", image: "/img/cards/nature_sea.webp" },
  { id: "nature_stream", topicId: "nature", che: P("эрк"), ru: "ручей, речка", emoji: "🏞️", level: 2, source: "corpus", image: "/img/cards/nature_stream.webp" },
  { id: "nature_sand", topicId: "nature", che: P("г1ум"), ru: "песок", emoji: "🏖️", level: 1, source: "corpus", image: "/img/cards/nature_sand.webp" },
  { id: "nature_dew", topicId: "nature", che: P("тхи"), ru: "роса", emoji: "💧", level: 2, source: "corpus", image: "/img/cards/nature_dew.webp" },
  { id: "nature_branch", topicId: "nature", che: P("га"), ru: "ветка", emoji: "🌿", level: 2, source: "corpus", image: "/img/cards/nature_branch.webp" },
  { id: "nature_root", topicId: "nature", che: P("орам"), ru: "корень растения", emoji: "🪵", level: 2, source: "corpus", image: "/img/cards/nature_root.webp" },
  { id: "nature_meadow", topicId: "nature", che: P("аре"), ru: "луг, поляна", emoji: "🌾", level: 1, source: "corpus", image: "/img/cards/nature_meadow.webp" },
  { id: "nature_spring", topicId: "nature", che: P("шовда"), ru: "родник", emoji: "💦", level: 1, source: "corpus", image: "/img/cards/nature_spring.webp" },
  { id: "nature_cave", topicId: "nature", che: P("хьех"), ru: "пещера", emoji: "🕳️", level: 2, source: "corpus", image: "/img/cards/nature_cave.webp" },
  // Деревья и растения
  { id: "nature_oak", topicId: "nature", che: P("наж"), ru: "дуб", emoji: "🌳", level: 1, source: "corpus", image: "/img/cards/nature_oak.webp" },
  { id: "nature_birch", topicId: "nature", che: P("дакх"), ru: "берёза", emoji: "🌳", level: 2, source: "corpus", image: "/img/cards/nature_birch.webp" },
  { id: "nature_pine", topicId: "nature", che: P("баьпке"), ru: "сосна, ель", emoji: "🌲", level: 1, source: "corpus", image: "/img/cards/nature_pine.webp" },
  { id: "nature_willow", topicId: "nature", che: P("талл"), ru: "ива, верба", emoji: "🌿", level: 2, source: "corpus", image: "/img/cards/nature_willow.webp" },
  { id: "nature_reed", topicId: "nature", che: P("эрз"), ru: "камыш, тростник", emoji: "🌾", level: 2, source: "corpus", image: "/img/cards/nature_reed.webp" },
  { id: "nature_acorn", topicId: "nature", che: P("нож-б1ар"), ru: "жёлудь", emoji: "🌰", level: 2, source: "corpus", image: "/img/cards/nature_acorn.webp" },
  { id: "nature_appletree", topicId: "nature", che: P("1ожан дитт"), ru: "яблоня", emoji: "🍏", level: 1, source: "corpus", image: "/img/cards/nature_appletree.webp" },
  { id: "nature_bloom", topicId: "nature", che: P("зезаг даккхар"), ru: "цветение", emoji: "🌸", level: 1, source: "corpus", image: "/img/cards/nature_bloom.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "nat1", words: ["Малх", "хаза", "бу"], ru: "Солнце красивое.", emoji: "☀️🌟" },
  { id: "nat2", words: ["Хи", "шийла", "ду"], ru: "Вода холодная.", emoji: "💧🧊" },
];
export const SCENES: Scene[] = [];