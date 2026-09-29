import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "traditions",
    che: P("Къоман х1уманаш"),
    ru: "Традиционные предметы",
    emoji: "🏰",
    gradient: "from-stone-300 to-amber-600",
    accent: "#B45309",
    unlockStars: 90,
    map: { x: 26, y: 14 },
  },
];

export const CARDS: Card[] = [
  { id: "b1av", topicId: "traditions", che: P("б1ав"), ru: "боевая башня", emoji: "🗼", level: 1, source: "dictionary", image: "/img/cards/b1av.webp" },
  { id: "pheg1a", topicId: "traditions", che: P("пхьег1а"), ru: "посуда", emoji: "🍽️", level: 2, source: "corpus", image: "/img/cards/pheg1a.webp" },
  { id: "shaelta", topicId: "traditions", che: P("шаьлта"), ru: "кинжал", emoji: "🗡️", level: 2, source: "corpus", image: "/img/cards/shaelta.webp" },
  { id: "pondar", topicId: "traditions", che: P("пондар"), ru: "пондар (муз. инструмент)", emoji: "🪕", level: 1, source: "corpus", image: "/img/cards/pondar.webp" },
  { id: "vota", topicId: "traditions", che: P("вота"), ru: "барабан", emoji: "🥁", level: 1, source: "corpus", image: "/img/cards/vota.webp" },
  { id: "istang", topicId: "traditions", che: P("истанг"), ru: "войлочный ковёр", emoji: "🧶", level: 2, source: "dictionary", image: "/img/cards/istang.webp" },
  { id: "verta", topicId: "traditions", che: P("верта"), ru: "бурка", emoji: "🧥", level: 2, source: "dictionary", image: "/img/cards/verta.webp" },
  { id: "k1udal", topicId: "traditions", che: P("к1удал"), ru: "кувшин", emoji: "🏺", level: 2, source: "corpus", image: "/img/cards/k1udal.webp" },
  { id: "khaba", topicId: "traditions", che: P("кхаба"), ru: "глиняный кувшин", emoji: "🫙", level: 2, source: "corpus", image: "/img/cards/khaba.webp" },
  { id: "choa", topicId: "traditions", che: P("чоа"), ru: "черкеска", emoji: "🥋", level: 3, source: "dictionary", image: "/img/cards/choa.webp", review: "Подтвердить написание (чоа / чокхи)" },
  { id: "yurt", topicId: "traditions", che: P("юрт"), ru: "село, аул", emoji: "🏘️", level: 1, source: "corpus", image: "/img/cards/yurt.webp" },
  { id: "g1ala", topicId: "traditions", che: P("г1ала"), ru: "город", emoji: "🏙️", level: 1, source: "corpus", image: "/img/cards/g1ala.webp" },
  // Национальное наследие и предметы
  { id: "trad_papakha", topicId: "traditions", che: P("холхазан куй"), ru: "папаха", emoji: "💂", level: 1, source: "corpus", image: "/img/cards/trad_papakha.webp" },
  { id: "trad_shield", topicId: "traditions", che: P("турс"), ru: "щит", emoji: "🛡️", level: 2, source: "corpus", image: "/img/cards/trad_shield.webp" },
  { id: "trad_hearth", topicId: "traditions", che: P("кхерч"), ru: "очаг", emoji: "🔥", level: 2, source: "corpus", image: "/img/cards/trad_hearth.webp" },
  { id: "trad_chain", topicId: "traditions", che: P("з1е"), ru: "очажная цепь", emoji: "⛓️", level: 2, source: "corpus", image: "/img/cards/trad_chain.webp" },
  { id: "trad_scythe", topicId: "traditions", che: P("мангал"), ru: "коса (орудие)", emoji: "🌾", level: 2, source: "corpus", image: "/img/cards/trad_scythe.webp" },
  { id: "trad_chest", topicId: "traditions", che: P("т1орказ"), ru: "сундук", emoji: "🧰", level: 2, source: "corpus", image: "/img/cards/trad_chest.webp" },
  { id: "trad_plow", topicId: "traditions", che: P("нох"), ru: "плуг", emoji: "🪵", level: 2, source: "corpus", image: "/img/cards/trad_plow.webp" },
  { id: "trad_etiquette", topicId: "traditions", che: P("г1иллакх"), ru: "обычай, этикет", emoji: "🤝", level: 1, source: "corpus", image: "/img/cards/trad_etiquette.webp" },
  { id: "trad_language", topicId: "traditions", che: P("нохчийн мотт"), ru: "чеченский язык", emoji: "🗣️", level: 1, source: "corpus", image: "/img/cards/trad_language.webp" },
  { id: "trad_belt", topicId: "traditions", che: P("детин доьхка"), ru: "серебряный пояс", emoji: "🥋", level: 2, source: "corpus", image: "/img/cards/trad_belt.webp" },
  { id: "trad_cradle", topicId: "traditions", che: P("ага"), ru: "люлька, колыбель", emoji: "🪆", level: 1, source: "corpus", image: "/img/cards/trad_cradle.webp" },
  { id: "trad_bow", topicId: "traditions", che: P("1ад"), ru: "лук (оружие)", emoji: "🏹", level: 2, source: "corpus", image: "/img/cards/trad_bow.webp" },
  { id: "trad_horn", topicId: "traditions", che: P("ма1а"), ru: "рог (сосуд/сигнальный)", emoji: "🪯", level: 2, source: "corpus", image: "/img/cards/trad_horn.webp" },
  { id: "trad_saddle", topicId: "traditions", che: P("нуьйр"), ru: "седло", emoji: "🏇", level: 2, source: "corpus", image: "/img/cards/trad_saddle.webp" },
  { id: "trad_mill", topicId: "traditions", che: P("хьера"), ru: "мельница", emoji: "🛖", level: 2, source: "corpus", image: "/img/cards/trad_mill.webp" },
  { id: "trad_horseshoe", topicId: "traditions", che: P("нала"), ru: "подкова", emoji: "🧲", level: 2, source: "corpus", image: "/img/cards/trad_horseshoe.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];