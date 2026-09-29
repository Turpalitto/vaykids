import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "mountains",
    che: P("Лаьмнаш а, хиш а"),
    ru: "Горы и реки",
    emoji: "🏔️",
    gradient: "from-cyan-200 to-indigo-500",
    accent: "#0EA5E9",
    unlockStars: 110,
    map: { x: 50, y: 10 },
  },
];

export const CARDS: Card[] = [
  { id: "lam", topicId: "mountains", che: P("лам"), ru: "гора", emoji: "⛰️", image: "/img/cards/lam.jpg", level: 1, source: "corpus" },
  { id: "hi2", topicId: "mountains", che: P("хи"), ru: "река", emoji: "🌊", level: 1, source: "corpus", image: "/img/cards/hi2.webp" },
  { id: "1am", topicId: "mountains", che: P("1ам"), ru: "озеро", emoji: "🏞️", level: 1, source: "corpus", image: "/img/cards/1am.webp" },
  { id: "are", topicId: "mountains", che: P("аре"), ru: "поле, равнина", emoji: "🌾", level: 1, source: "corpus", image: "/img/cards/are.webp" },
  { id: "shovda", topicId: "mountains", che: P("шовда"), ru: "родник", emoji: "💦", level: 2, source: "corpus", image: "/img/cards/shovda.webp" },
  { id: "1in", topicId: "mountains", che: P("1ин"), ru: "ущелье", emoji: "🏞️", level: 2, source: "corpus", image: "/img/cards/1in.webp" },
  { id: "berd", topicId: "mountains", che: P("берд"), ru: "берег, обрыв", emoji: "🪨", level: 2, source: "corpus", image: "/img/cards/berd.webp" },
  { id: "hekh", topicId: "mountains", che: P("хьех"), ru: "пещера", emoji: "🕳️", level: 2, source: "corpus", image: "/img/cards/hekh.webp" },
  { id: "sha", topicId: "mountains", che: P("ша"), ru: "лёд", emoji: "🧊", level: 1, source: "corpus", image: "/img/cards/sha.webp" },
  { id: "duq", topicId: "mountains", che: P("дукъ"), ru: "хребет", emoji: "🗻", level: 3, source: "dictionary", image: "/img/cards/duq.webp" },
  { id: "g1ayre", topicId: "mountains", che: P("г1айре"), ru: "остров", emoji: "🏝️", level: 2, source: "corpus", image: "/img/cards/g1ayre.webp" },
  { id: "tog1i", topicId: "mountains", che: P("тог1и"), ru: "долина", emoji: "🌄", level: 2, source: "corpus", image: "/img/cards/tog1i.webp" },
  { id: "mokhk", topicId: "mountains", che: P("мохк"), ru: "край, страна", emoji: "🗺️", level: 2, source: "corpus", image: "/img/cards/mokhk.webp" },
  // Горный рельеф и природа
  { id: "mount_waterfall", topicId: "mountains", che: P("чухчари"), ru: "водопад", emoji: "🌊", level: 1, source: "corpus", image: "/img/cards/mount_waterfall.webp" },
  { id: "mount_peak", topicId: "mountains", che: P("бохь"), ru: "вершина, пик", emoji: "🏔️", level: 1, source: "corpus", image: "/img/cards/mount_peak.webp" },
  { id: "mount_snowpeak", topicId: "mountains", che: P("башлам"), ru: "снежная вершина, ледник", emoji: "🗻", level: 2, source: "corpus", image: "/img/cards/mount_snowpeak.webp" },
  { id: "mount_cliff", topicId: "mountains", che: P("тарх"), ru: "скала, утёс", emoji: "🧗", level: 2, source: "corpus", image: "/img/cards/mount_cliff.webp" },
  { id: "mount_canyon", topicId: "mountains", che: P("ч1ож"), ru: "теснина, каньон", emoji: "🏞️", level: 2, source: "corpus", image: "/img/cards/mount_canyon.webp" },
  { id: "mount_pass", topicId: "mountains", che: P("асу"), ru: "перевал", emoji: "⛰️", level: 3, source: "corpus", image: "/img/cards/mount_pass.webp" },
  { id: "mount_moss", topicId: "mountains", che: P("кхарз"), ru: "мох на скалах", emoji: "🪨", level: 2, source: "corpus", image: "/img/cards/mount_moss.webp" },
  { id: "mount_trail", topicId: "mountains", che: P("ирхе"), ru: "подъём, горная тропа", emoji: "🧗‍♂️", level: 2, source: "corpus", image: "/img/cards/mount_trail.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];