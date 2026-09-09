import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "adjectives",
    che: P("къастам"),
    ru: "Прилагательные (качества)",
    emoji: "🌈",
    gradient: "from-pink-200 to-purple-300",
    accent: "#D946EF",
    unlockStars: 0,
    map: { x: 85, y: 5 },
  },
];

export const CARDS: Card[] = [
  // Размер
  { id: "adj_big", topicId: "adjectives", che: P("доккха"), ru: "большой", emoji: "🐘", level: 1, source: "corpus" },
  { id: "adj_small", topicId: "adjectives", che: P("жима"), ru: "маленький", emoji: "🐭", level: 1, source: "corpus" },
  { id: "adj_tall", topicId: "adjectives", che: P("лекха"), ru: "высокий", emoji: "🌳", level: 1, source: "corpus" },
  { id: "adj_short", topicId: "adjectives", che: P("лоха"), ru: "низкий", emoji: "🌱", level: 1, source: "corpus" },
  { id: "adj_wide", topicId: "adjectives", che: P("шора"), ru: "широкий", emoji: "📏", level: 2, source: "corpus" },
  { id: "adj_narrow", topicId: "adjectives", che: P("готта"), ru: "узкий", emoji: "📏", level: 2, source: "corpus" },
  { id: "adj_long", topicId: "adjectives", che: P("доха"), ru: "длинный", emoji: "🐍", level: 1, source: "corpus" },
  { id: "adj_short_len", topicId: "adjectives", che: P("к1оза"), ru: "короткий (по длине)", emoji: "✏️", level: 2, source: "corpus" },

  // Температура
  { id: "adj_hot", topicId: "adjectives", che: P("беха"), ru: "горячий", emoji: "🔥", level: 1, source: "corpus" },
  { id: "adj_cold", topicId: "adjectives", che: P("шийла"), ru: "холодный", emoji: "🧊", level: 1, source: "corpus" },
  { id: "adj_warm", topicId: "adjectives", che: P("довха"), ru: "тёплый", emoji: "🌤️", level: 1, source: "corpus" },
  { id: "adj_cool", topicId: "adjectives", che: P("шийна"), ru: "прохладный", emoji: "🌬️", level: 2, source: "corpus" },

  // Цвета (дополнение)
  { id: "adj_red", topicId: "adjectives", che: P("ц1ен"), ru: "красный", emoji: "🔴", level: 1, source: "corpus" },
  { id: "adj_blue", topicId: "adjectives", che: P("сийна"), ru: "синий", emoji: "🔵", level: 1, source: "corpus" },
  { id: "adj_green", topicId: "adjectives", che: P("баьццара"), ru: "зелёный", emoji: "🟢", level: 1, source: "corpus" },
  { id: "adj_yellow", topicId: "adjectives", che: P("можа"), ru: "жёлтый", emoji: "🟡", level: 1, source: "corpus" },
  { id: "adj_white", topicId: "adjectives", che: P("к1айн"), ru: "белый", emoji: "⚪", level: 1, source: "corpus" },
  { id: "adj_black", topicId: "adjectives", che: P("1аьржа"), ru: "чёрный", emoji: "⚫", level: 1, source: "corpus" },
  { id: "adj_gray", topicId: "adjectives", che: P("сира"), ru: "серый", emoji: "🩶", level: 2, source: "corpus" },
  { id: "adj_brown", topicId: "adjectives", che: P("боьмаша"), ru: "коричневый", emoji: "🟤", level: 2, source: "corpus" },

  // Вкус
  { id: "adj_sweet", topicId: "adjectives", che: P("мерза"), ru: "сладкий", emoji: "🍭", level: 1, source: "corpus" },
  { id: "adj_salty", topicId: "adjectives", che: P("туьха"), ru: "солёный", emoji: "🧂", level: 2, source: "corpus" },
  { id: "adj_sour", topicId: "adjectives", che: P("кеч"), ru: "кислый", emoji: "🍋", level: 2, source: "corpus" },
  { id: "adj_bitter", topicId: "adjectives", che: P("боьрк"), ru: "горький", emoji: "☕", level: 2, source: "dictionary", review: "Подтвердить «боьрк» (горький) у носителя" },

  // Качество/состояние
  { id: "adj_good", topicId: "adjectives", che: P("дика"), ru: "хороший", emoji: "👍", level: 1, source: "corpus" },
  { id: "adj_bad", topicId: "adjectives", che: P("во"), ru: "плохой", emoji: "👎", level: 1, source: "corpus" },
  { id: "adj_beautiful", topicId: "adjectives", che: P("хаза"), ru: "красивый", emoji: "🌟", level: 1, source: "corpus" },
  { id: "adj_ugly", topicId: "adjectives", che: P("хаза дац"), ru: "некрасивый", emoji: "😖", level: 2, source: "dictionary", review: "Уточнить прилагательное «некрасивый» у носителя" },
  { id: "adj_clean", topicId: "adjectives", che: P("ц1ена"), ru: "чистый", emoji: "🧼", level: 1, source: "corpus" },
  { id: "adj_dirty", topicId: "adjectives", che: P("наба"), ru: "грязный", emoji: "💩", level: 1, source: "dictionary", review: "Подтвердить «наба» (грязный) у носителя" },
  { id: "adj_light", topicId: "adjectives", che: P("къахьалла"), ru: "лёгкий (по весу)", emoji: "🪶", level: 1, source: "dictionary", review: "Подтвердить слово для «лёгкий» у носителя" },
  { id: "adj_heavy", topicId: "adjectives", che: P("т1ехуула"), ru: "тяжёлый", emoji: "🪨", level: 1, source: "dictionary", review: "Подтвердить слово для «тяжёлый» у носителя" },
  { id: "adj_soft", topicId: "adjectives", che: P("къораха"), ru: "мягкий", emoji: "🧸", level: 1, source: "dictionary", review: "Подтвердить «къораха» (мягкий) у носителя" },
  { id: "adj_hard", topicId: "adjectives", che: P("ч1о"), ru: "твёрдый", emoji: "💎", level: 2, source: "corpus" },

  // Эмоции и чувства
  { id: "adj_happy", topicId: "adjectives", che: P("самукъане"), ru: "весёлый, радостный", emoji: "😄", level: 1, source: "corpus" },
  { id: "adj_sad", topicId: "adjectives", che: P("г1айг1ане"), ru: "грустный", emoji: "😢", level: 1, source: "corpus" },
  { id: "adj_angry", topicId: "adjectives", che: P("оьг1азло"), ru: "злой", emoji: "😠", level: 2, source: "corpus" },
  { id: "adj_scared", topicId: "adjectives", che: P("кхерам"), ru: "испуганный", emoji: "😨", level: 2, source: "corpus" },
  { id: "adj_loving", topicId: "adjectives", che: P("безам"), ru: "любящий", emoji: "🥰", level: 1, source: "corpus" },

  // Скорость
  { id: "adj_fast", topicId: "adjectives", che: P("сиха"), ru: "быстрый", emoji: "⚡", level: 1, source: "corpus" },
  { id: "adj_slow", topicId: "adjectives", che: P("соналла"), ru: "медленный", emoji: "🐢", level: 1, source: "dictionary", review: "Подтвердить «соналла» (медленный) у носителя" },

  // Возраст
  { id: "adj_new", topicId: "adjectives", che: P("керла"), ru: "новый", emoji: "🆕", level: 1, source: "corpus" },
  { id: "adj_old", topicId: "adjectives", che: P("шира"), ru: "старый (вещь)", emoji: "🏚️", level: 1, source: "corpus" },
  { id: "adj_young", topicId: "adjectives", che: P("к1ант"), ru: "молодой", emoji: "👦", level: 1, source: "corpus" },
  { id: "adj_old_age", topicId: "adjectives", che: P("стаг"), ru: "старый (человек)", emoji: "👴", level: 2, source: "corpus" },

  // Количество
  { id: "adj_many", topicId: "adjectives", che: P("дукх"), ru: "много", emoji: "👥", level: 1, source: "corpus" },
  { id: "adj_few", topicId: "adjectives", che: P("къезга"), ru: "мало", emoji: "👤", level: 1, source: "corpus" },

  // Прочее
  { id: "adj_smart", topicId: "adjectives", che: P("хьекъале"), ru: "умный", emoji: "🧠", level: 1, source: "corpus" },
  { id: "adj_strong", topicId: "adjectives", che: P("ч1о"), ru: "сильный", emoji: "💪", level: 1, source: "corpus" },
  { id: "adj_kind", topicId: "adjectives", che: P("гойла"), ru: "добрый", emoji: "😇", level: 1, source: "dictionary", review: "Подтвердить «гойла» (добрый) у носителя" },
  { id: "adj_brave", topicId: "adjectives", che: P("майра"), ru: "храбрый", emoji: "🦁", level: 2, source: "corpus" },
  { id: "adj_lazy", topicId: "adjectives", che: P("къинхьегам боцуш"), ru: "ленивый", emoji: "🦥", level: 2, source: "dictionary", review: "Уточнить прилагательное «ленивый» у носителя" },
  { id: "adj_funny", topicId: "adjectives", che: P("ловза"), ru: "смешной", emoji: "😂", level: 1, source: "corpus" },
];

export const SENTENCES: Sentence[] = [
  { id: "ad1", words: ["Ц1а", "йоккха", "ду"], ru: "Дом большой.", emoji: "🏠" },
  { id: "ad2", words: ["Малх", "беха", "бу"], ru: "Солнце горячее.", emoji: "☀️" },
];

export const SCENES: Scene[] = [
  {
    id: "adj_scene",
    topicIds: ["adjectives"],
    image: "/img/scene-adjectives.jpg",
    objects: [
      { cardId: "adj_big", x: 20, y: 60 },
      { cardId: "adj_hot", x: 50, y: 40 },
      { cardId: "adj_good", x: 80, y: 70 },
      { cardId: "adj_happy", x: 10, y: 80 },
    ],
  },
];