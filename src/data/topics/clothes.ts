import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "clothes",
    che: P("Бедарш"),
    ru: "Одежда",
    emoji: "🧥",
    gradient: "from-sky-300 to-blue-400",
    accent: "#3B82F6",
    unlockStars: 25,
    map: { x: 76, y: 66 },
  },
];

export const CARDS: Card[] = [
  { id: "koch", topicId: "clothes", che: P("коч"), ru: "платье, рубашка", emoji: "👗", level: 1, source: "corpus", image: "/img/cards/koch.webp" },
  { id: "hecha", topicId: "clothes", che: P("хеча"), ru: "брюки", emoji: "👖", level: 1, source: "dictionary", image: "/img/cards/hecha.webp" },
  { id: "machash", topicId: "clothes", che: P("мачаш"), ru: "обувь", emoji: "👟", level: 1, source: "corpus", image: "/img/cards/machash.webp" },
  { id: "kuy", topicId: "clothes", che: P("куй"), ru: "шапка", emoji: "🧢", level: 1, source: "dictionary", image: "/img/cards/kuy.webp" },
  { id: "pazatash", topicId: "clothes", che: P("пазаташ"), ru: "носки", emoji: "🧦", level: 1, source: "dictionary", image: "/img/cards/pazatash.webp" },
  { id: "yovlakh", topicId: "clothes", che: P("йовлакх"), ru: "платок", emoji: "🧕", level: 2, source: "corpus", image: "/img/cards/yovlakh.webp" },
  { id: "ketar", topicId: "clothes", che: P("кетар"), ru: "шуба, тулуп", emoji: "🧥", level: 2, source: "dictionary", image: "/img/cards/ketar.webp" },
  { id: "doehka", topicId: "clothes", che: P("доьхка"), ru: "пояс", emoji: "🥋", level: 2, source: "corpus", image: "/img/cards/doehka.webp" },
  { id: "bedar", topicId: "clothes", che: P("бедар"), ru: "одежда", emoji: "👕", level: 1, source: "corpus", image: "/img/cards/bedar.webp" },
  { id: "k1adi", topicId: "clothes", che: P("к1ади"), ru: "ткань", emoji: "🧵", level: 3, source: "corpus", image: "/img/cards/k1adi.webp" },
  { id: "g1abali", topicId: "clothes", che: P("г1абали"), ru: "национальное платье", emoji: "👘", level: 3, source: "dictionary", image: "/img/cards/g1abali.webp", review: "Уточнить написание и произношение у носителя" },
  { id: "maehsi", topicId: "clothes", che: P("маьхьси"), ru: "мягкие сапожки", emoji: "👢", level: 3, source: "dictionary", image: "/img/cards/maehsi.webp", review: "Подтвердить у носителя" },
  // Предметы одежды и аксессуары
  { id: "clothes_boots", topicId: "clothes", che: P("эткаш"), ru: "сапоги", emoji: "🥾", level: 1, source: "corpus", image: "/img/cards/clothes_boots.webp" },
  { id: "clothes_gloves", topicId: "clothes", che: P("караш"), ru: "варежки, перчатки", emoji: "🧤", level: 1, source: "corpus", image: "/img/cards/clothes_gloves.webp" },
  { id: "clothes_scarf", topicId: "clothes", che: P("шарф"), ru: "шарф", emoji: "🧣", level: 1, source: "dictionary", image: "/img/cards/clothes_scarf.webp" },
  { id: "clothes_skirt", topicId: "clothes", che: P("юбка"), ru: "юбка", emoji: "👗", level: 1, source: "dictionary", image: "/img/cards/clothes_skirt.webp" },
  { id: "clothes_glasses", topicId: "clothes", che: P("куьзганаш"), ru: "очки", emoji: "👓", level: 1, source: "corpus", image: "/img/cards/clothes_glasses.webp" },
  { id: "clothes_umbrella", topicId: "clothes", che: P("чорг1а"), ru: "зонт", emoji: "☂️", level: 2, source: "corpus", image: "/img/cards/clothes_umbrella.webp" },
  { id: "clothes_pocket", topicId: "clothes", che: P("киса"), ru: "карман", emoji: "👛", level: 1, source: "corpus", image: "/img/cards/clothes_pocket.webp" },
  { id: "clothes_button", topicId: "clothes", che: P("нуьйда"), ru: "пуговица", emoji: "🔘", level: 1, source: "corpus", image: "/img/cards/clothes_button.webp" },
  { id: "clothes_needle", topicId: "clothes", che: P("маха"), ru: "иголка", emoji: "🪡", level: 2, source: "corpus", image: "/img/cards/clothes_needle.webp" },
  { id: "clothes_thread", topicId: "clothes", che: P("тай"), ru: "нитка", emoji: "🧵", level: 1, source: "corpus", image: "/img/cards/clothes_thread.webp" },
  { id: "clothes_ring", topicId: "clothes", che: P("м1ода"), ru: "кольцо", emoji: "💍", level: 2, source: "corpus", image: "/img/cards/clothes_ring.webp" },
  { id: "clothes_necklace", topicId: "clothes", che: P("кочар"), ru: "ожерелье, бусы", emoji: "📿", level: 2, source: "corpus", image: "/img/cards/clothes_necklace.webp" },
  { id: "clothes_earrings", topicId: "clothes", che: P("лерган х1азарш"), ru: "серьги", emoji: "💎", level: 2, source: "corpus", image: "/img/cards/clothes_earrings.webp" },
  { id: "clothes_slippers", topicId: "clothes", che: P("чура мачаш"), ru: "домашние тапочки", emoji: "🩴", level: 1, source: "corpus", image: "/img/cards/clothes_slippers.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];