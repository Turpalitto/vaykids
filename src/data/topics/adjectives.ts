import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "adjectives",
    che: P("Билгалдешнаш"),
    ru: "Прилагательные (качества)",
    emoji: "🌈",
    gradient: "from-pink-200 to-purple-300",
    accent: "#D946EF",
    unlockStars: 140,
    map: { x: 68, y: 6 },
  },
];

export const CARDS: Card[] = [
  // Размер
  { id: "adj_big", topicId: "adjectives", che: P("доккха"), ru: "большой", emoji: "🐘", level: 1, source: "corpus", image: "/img/cards/adj_big.webp" },
  { id: "adj_small", topicId: "adjectives", che: P("жима"), ru: "маленький", emoji: "🐭", level: 1, source: "corpus", image: "/img/cards/adj_small.webp" },
  { id: "adj_tall", topicId: "adjectives", che: P("лекха"), ru: "высокий", emoji: "🌳", level: 1, source: "corpus", image: "/img/cards/adj_tall.webp" },
  { id: "adj_short", topicId: "adjectives", che: P("лоха"), ru: "низкий", emoji: "🌱", level: 1, source: "corpus", image: "/img/cards/adj_short.webp" },
  { id: "adj_wide", topicId: "adjectives", che: P("шора"), ru: "широкий", emoji: "📏", level: 2, source: "corpus", image: "/img/cards/adj_wide.webp" },
  { id: "adj_narrow", topicId: "adjectives", che: P("готта"), ru: "узкий", emoji: "📏", level: 2, source: "corpus", image: "/img/cards/adj_narrow.webp" },
  { id: "adj_long", topicId: "adjectives", che: P("деха"), ru: "длинный", emoji: "🐍", level: 1, source: "corpus", image: "/img/cards/adj_long.webp" },
  { id: "adj_short_len", topicId: "adjectives", che: P("доца"), ru: "короткий (по длине)", emoji: "✏️", level: 2, source: "corpus", image: "/img/cards/adj_short_len.webp" },

  // Температура
  { id: "adj_hot", topicId: "adjectives", che: P("довха"), ru: "горячий", emoji: "🔥", level: 1, source: "corpus", image: "/img/cards/adj_hot.webp" },
  { id: "adj_cold", topicId: "adjectives", che: P("шийла"), ru: "холодный", emoji: "🧊", level: 1, source: "corpus", image: "/img/cards/adj_cold.webp" },
  { id: "adj_warm", topicId: "adjectives", che: P("йовхо йолу"), ru: "тёплый", emoji: "🌤️", level: 1, source: "corpus", image: "/img/cards/adj_warm.webp" },
  { id: "adj_cool", topicId: "adjectives", che: P("салкъина"), ru: "прохладный", emoji: "🌬️", level: 2, source: "corpus", image: "/img/cards/adj_cool.webp" },

  // Цвета (дополнение)
  { id: "adj_red", topicId: "adjectives", che: P("ц1ен"), ru: "красный", emoji: "🔴", level: 1, source: "corpus", image: "/img/cards/adj_red.webp" },
  { id: "adj_blue", topicId: "adjectives", che: P("сийна"), ru: "синий", emoji: "🔵", level: 1, source: "corpus", image: "/img/cards/adj_blue.webp" },
  { id: "adj_green", topicId: "adjectives", che: P("баьццара"), ru: "зелёный", emoji: "🟢", level: 1, source: "corpus", image: "/img/cards/adj_green.webp" },
  { id: "adj_yellow", topicId: "adjectives", che: P("можа"), ru: "жёлтый", emoji: "🟡", level: 1, source: "corpus", image: "/img/cards/adj_yellow.webp" },
  { id: "adj_white", topicId: "adjectives", che: P("к1айн"), ru: "белый", emoji: "⚪", level: 1, source: "corpus", image: "/img/cards/adj_white.webp" },
  { id: "adj_black", topicId: "adjectives", che: P("1аьржа"), ru: "чёрный", emoji: "⚫", level: 1, source: "corpus", image: "/img/cards/adj_black.webp" },
  { id: "adj_gray", topicId: "adjectives", che: P("сира"), ru: "серый", emoji: "🩶", level: 2, source: "corpus", image: "/img/cards/adj_gray.webp" },
  { id: "adj_brown", topicId: "adjectives", che: P("боьмаша"), ru: "коричневый", emoji: "🟤", level: 2, source: "corpus", image: "/img/cards/adj_brown.webp" },

  // Вкус
  { id: "adj_sweet", topicId: "adjectives", che: P("мерза"), ru: "сладкий", emoji: "🍭", level: 1, source: "corpus", image: "/img/cards/adj_sweet.webp" },
  { id: "adj_salty", topicId: "adjectives", che: P("дуьра"), ru: "солёный", emoji: "🧂", level: 2, source: "corpus", image: "/img/cards/adj_salty.webp" },
  { id: "adj_sour", topicId: "adjectives", che: P("муьста"), ru: "кислый", emoji: "🍋", level: 2, source: "corpus", image: "/img/cards/adj_sour.webp" },
  { id: "adj_bitter", topicId: "adjectives", che: P("къаьхьа"), ru: "горький", emoji: "☕", level: 2, source: "corpus", image: "/img/cards/adj_bitter.webp" },

  // Качество/состояние
  { id: "adj_good", topicId: "adjectives", che: P("дика"), ru: "хороший", emoji: "👍", level: 1, source: "corpus", image: "/img/cards/adj_good.webp" },
  { id: "adj_bad", topicId: "adjectives", che: P("вон"), ru: "плохой", emoji: "👎", level: 1, source: "corpus", image: "/img/cards/adj_bad.webp" },
  { id: "adj_beautiful", topicId: "adjectives", che: P("хаза"), ru: "красивый", emoji: "🌟", level: 1, source: "corpus", image: "/img/cards/adj_beautiful.webp" },
  { id: "adj_ugly", topicId: "adjectives", che: P("ирча"), ru: "некрасивый", emoji: "😖", level: 2, source: "corpus", image: "/img/cards/adj_ugly.webp" },
  { id: "adj_clean", topicId: "adjectives", che: P("ц1ена"), ru: "чистый", emoji: "🧼", level: 1, source: "corpus", image: "/img/cards/adj_clean.webp" },
  { id: "adj_dirty", topicId: "adjectives", che: P("боьха"), ru: "грязный", emoji: "💩", level: 1, source: "corpus", image: "/img/cards/adj_dirty.webp" },
  { id: "adj_light", topicId: "adjectives", che: P("дайн"), ru: "лёгкий (по весу)", emoji: "🪶", level: 1, source: "corpus", image: "/img/cards/adj_light.webp" },
  { id: "adj_heavy", topicId: "adjectives", che: P("деза"), ru: "тяжёлый", emoji: "🪨", level: 1, source: "corpus", image: "/img/cards/adj_heavy.webp" },
  { id: "adj_soft", topicId: "adjectives", che: P("к1еда"), ru: "мягкий", emoji: "🧸", level: 1, source: "corpus", image: "/img/cards/adj_soft.webp" },
  { id: "adj_hard", topicId: "adjectives", che: P("ч1ог1а"), ru: "твёрдый, крепкий", emoji: "💎", level: 2, source: "corpus", image: "/img/cards/adj_hard.webp" },

  // Эмоции и чувства
  { id: "adj_happy", topicId: "adjectives", che: P("самукъане"), ru: "весёлый, радостный", emoji: "😄", level: 1, source: "corpus", image: "/img/cards/adj_happy.webp" },
  { id: "adj_sad", topicId: "adjectives", che: P("г1айг1ане"), ru: "грустный", emoji: "😢", level: 1, source: "corpus", image: "/img/cards/adj_sad.webp" },
  { id: "adj_angry", topicId: "adjectives", che: P("оьг1азе"), ru: "злой, сердитый", emoji: "😠", level: 2, source: "corpus", image: "/img/cards/adj_angry.webp" },
  { id: "adj_scared", topicId: "adjectives", che: P("кхийрина"), ru: "испуганный", emoji: "😨", level: 2, source: "corpus", image: "/img/cards/adj_scared.webp" },
  { id: "adj_loving", topicId: "adjectives", che: P("деза"), ru: "любимый / дорогой", emoji: "🥰", level: 1, source: "corpus", image: "/img/cards/adj_loving.webp" },

  // Скорость
  { id: "adj_fast", topicId: "adjectives", che: P("сиха"), ru: "быстрый", emoji: "⚡", level: 1, source: "corpus", image: "/img/cards/adj_fast.webp" },
  { id: "adj_slow", topicId: "adjectives", che: P("меллаша"), ru: "медленный", emoji: "🐢", level: 1, source: "corpus", image: "/img/cards/adj_slow.webp" },

  // Возраст
  { id: "adj_new", topicId: "adjectives", che: P("керла"), ru: "новый", emoji: "🆕", level: 1, source: "corpus", image: "/img/cards/adj_new.webp" },
  { id: "adj_old", topicId: "adjectives", che: P("шира"), ru: "старый (вещь)", emoji: "🏚️", level: 1, source: "corpus", image: "/img/cards/adj_old.webp" },
  { id: "adj_young", topicId: "adjectives", che: P("къона"), ru: "молодой, юный", emoji: "👦", level: 1, source: "corpus", image: "/img/cards/adj_young.webp" },
  { id: "adj_old_age", topicId: "adjectives", che: P("къена"), ru: "старый (человек)", emoji: "👴", level: 2, source: "corpus", image: "/img/cards/adj_old_age.webp" },

  // Количество
  { id: "adj_many", topicId: "adjectives", che: P("дукха"), ru: "много", emoji: "👥", level: 1, source: "corpus", image: "/img/cards/adj_many.webp" },
  { id: "adj_few", topicId: "adjectives", che: P("к1еззиг"), ru: "мало", emoji: "👤", level: 1, source: "corpus", image: "/img/cards/adj_few.webp" },

  // Прочее
  { id: "adj_smart", topicId: "adjectives", che: P("хьекъале"), ru: "умный", emoji: "🧠", level: 1, source: "corpus", image: "/img/cards/adj_smart.webp" },
  { id: "adj_strong", topicId: "adjectives", che: P("ч1ог1а"), ru: "сильный, крепкий", emoji: "💪", level: 1, source: "corpus", image: "/img/cards/adj_strong.webp" },
  { id: "adj_kind", topicId: "adjectives", che: P("дика"), ru: "добрый", emoji: "😇", level: 1, source: "corpus", image: "/img/cards/adj_kind.webp" },
  { id: "adj_brave", topicId: "adjectives", che: P("майра"), ru: "храбрый", emoji: "🦁", level: 2, source: "corpus", image: "/img/cards/adj_brave.webp" },
  { id: "adj_lazy", topicId: "adjectives", che: P("малонча"), ru: "ленивый", emoji: "🦥", level: 2, source: "corpus", image: "/img/cards/adj_lazy.webp" },
  { id: "adj_funny", topicId: "adjectives", che: P("самукъане"), ru: "смешной, весёлый", emoji: "😂", level: 1, source: "corpus", image: "/img/cards/adj_funny.webp" },
  // Формы, осязание и свойства
  { id: "adj_sharp", topicId: "adjectives", che: P("ира"), ru: "острый", emoji: "🗡️", level: 1, source: "corpus", image: "/img/cards/adj_sharp.webp" },
  { id: "adj_thick", topicId: "adjectives", che: P("стомма"), ru: "толстый", emoji: "📚", level: 1, source: "corpus", image: "/img/cards/adj_thick.webp" },
  { id: "adj_thin", topicId: "adjectives", che: P("дуткъа"), ru: "тонкий", emoji: "📄", level: 1, source: "corpus", image: "/img/cards/adj_thin.webp" },
  { id: "adj_deep", topicId: "adjectives", che: P("к1орга"), ru: "глубокий", emoji: "🌊", level: 2, source: "corpus", image: "/img/cards/adj_deep.webp" },
  { id: "adj_round", topicId: "adjectives", che: P("горга"), ru: "круглый", emoji: "⭕", level: 1, source: "corpus", image: "/img/cards/adj_round.webp" },
  { id: "adj_smooth", topicId: "adjectives", che: P("шера"), ru: "гладкий, ровный", emoji: "🪞", level: 1, source: "corpus", image: "/img/cards/adj_smooth.webp" },
  { id: "adj_bright", topicId: "adjectives", che: P("сирла"), ru: "светлый, яркий", emoji: "💡", level: 1, source: "corpus", image: "/img/cards/adj_bright.webp" },
  { id: "adj_dark", topicId: "adjectives", che: P("бодане"), ru: "тёмный", emoji: "🌑", level: 1, source: "corpus", image: "/img/cards/adj_dark.webp" },
  { id: "adj_quiet", topicId: "adjectives", che: P("тийна"), ru: "тихий, спокойный", emoji: "🤫", level: 1, source: "corpus", image: "/img/cards/adj_quiet.webp" },
  { id: "adj_loud", topicId: "adjectives", che: P("г1овг1ане"), ru: "громкий, шумный", emoji: "📢", level: 1, source: "corpus", image: "/img/cards/adj_loud.webp" },
  { id: "adj_wet", topicId: "adjectives", che: P("т1уьна"), ru: "мокрый", emoji: "💦", level: 1, source: "corpus", image: "/img/cards/adj_wet.webp" },
  { id: "adj_dry", topicId: "adjectives", che: P("декъа"), ru: "сухой", emoji: "🏜️", level: 1, source: "corpus", image: "/img/cards/adj_dry.webp" },
  { id: "adj_tasty", topicId: "adjectives", che: P("чам болуш"), ru: "вкусный, аппетитный", emoji: "😋", level: 1, source: "corpus", image: "/img/cards/adj_tasty.webp" },
  { id: "adj_polite", topicId: "adjectives", che: P("эсала"), ru: "вежливый, скромный", emoji: "😇", level: 2, source: "corpus", image: "/img/cards/adj_polite.webp" },
  // Качества характера и свойства
  { id: "adj_straight", topicId: "adjectives", che: P("нийса"), ru: "прямой, правильный", emoji: "📏", level: 1, source: "corpus", image: "/img/cards/adj_straight.webp" },
  { id: "adj_crooked", topicId: "adjectives", che: P("гамма"), ru: "кривой, изогнутый", emoji: "〰️", level: 2, source: "corpus", image: "/img/cards/adj_crooked.webp" },
  { id: "adj_generous", topicId: "adjectives", che: P("комаьрша"), ru: "щедрый", emoji: "🎁", level: 2, source: "corpus", image: "/img/cards/adj_generous.webp" },
  { id: "adj_greedy", topicId: "adjectives", che: P("сутара"), ru: "жадный", emoji: "🤑", level: 2, source: "corpus", image: "/img/cards/adj_greedy.webp" },
  { id: "adj_honest", topicId: "adjectives", che: P("бакъ"), ru: "честный, правдивый", emoji: "⚖️", level: 1, source: "corpus", image: "/img/cards/adj_honest.webp" },
  { id: "adj_patient", topicId: "adjectives", che: P("собаре"), ru: "терпеливый", emoji: "🧘", level: 1, source: "corpus", image: "/img/cards/adj_patient.webp" },
  { id: "adj_safe", topicId: "adjectives", che: P("кхерам боцу"), ru: "безопасный", emoji: "🛡️", level: 2, source: "corpus", image: "/img/cards/adj_safe.webp" },
  { id: "adj_dangerous", topicId: "adjectives", che: P("кхераме"), ru: "опасный", emoji: "⚠️", level: 2, source: "corpus", image: "/img/cards/adj_dangerous.webp" },
  { id: "adj_useful", topicId: "adjectives", che: P("пайдане"), ru: "полезный", emoji: "🍎", level: 1, source: "corpus", image: "/img/cards/adj_useful.webp" },
  { id: "adj_pure", topicId: "adjectives", che: P("ц1ена"), ru: "чистый, искренний", emoji: "✨", level: 1, source: "corpus", image: "/img/cards/adj_pure.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "ad1", words: ["Ц1а", "доккха", "ду"], ru: "Дом большой.", emoji: "🏠" },
  { id: "ad2", words: ["Малх", "бовха", "бу"], ru: "Солнце горячее.", emoji: "☀️" },
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