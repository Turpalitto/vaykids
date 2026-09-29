import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "weather",
    che: P("Х1аваъ"),
    ru: "Погода",
    emoji: "🌤️",
    gradient: "from-sky-300 to-cyan-400",
    accent: "#38BDF8",
    unlockStars: 40,
    map: { x: 50, y: 48 },
  },
];

export const CARDS: Card[] = [
  // Погодные явления
  { id: "weather_malkh", topicId: "weather", che: P("малх"), ru: "солнце", emoji: "☀️", level: 1, source: "corpus", image: "/img/cards/weather_malkh.webp" },
  { id: "weather_butt", topicId: "weather", che: P("бутт"), ru: "луна", emoji: "🌙", level: 1, source: "corpus", image: "/img/cards/weather_butt.webp" },
  { id: "weather_seda", topicId: "weather", che: P("седа"), ru: "звезда", emoji: "⭐", level: 1, source: "corpus", image: "/img/cards/weather_seda.webp" },
  { id: "weather_stigal", topicId: "weather", che: P("стигал"), ru: "небо", emoji: "🌤️", level: 1, source: "corpus", image: "/img/cards/weather_stigal.webp" },
  { id: "weather_lo", topicId: "weather", che: P("ло"), ru: "снег", emoji: "❄️", level: 1, source: "corpus", image: "/img/cards/weather_lo.webp" },
  { id: "weather_dog1a", topicId: "weather", che: P("дог1а"), ru: "дождь", emoji: "🌧️", level: 1, source: "corpus", image: "/img/cards/weather_dog1a.webp" },
  { id: "weather_mokh", topicId: "weather", che: P("мох"), ru: "ветер", emoji: "🌬️", level: 2, source: "corpus", image: "/img/cards/weather_mokh.webp" },
  { id: "weather_markha", topicId: "weather", che: P("марха"), ru: "облако", emoji: "☁️", level: 1, source: "corpus", image: "/img/cards/weather_markha.webp" },
  { id: "weather_1in", topicId: "weather", che: P("дохк"), ru: "туман", emoji: "🌫️", level: 2, source: "dictionary", image: "/img/cards/weather_1in.webp" },
  { id: "weather_g1ar", topicId: "weather", che: P("къора"), ru: "град", emoji: "🌨️", level: 2, source: "dictionary", image: "/img/cards/weather_g1ar.webp" },
  { id: "weather_t1ul", topicId: "weather", che: P("сецакъ"), ru: "молния", emoji: "⚡", level: 2, source: "dictionary", image: "/img/cards/weather_t1ul.webp" },
  { id: "weather_mokhaza", topicId: "weather", che: P("ткъес"), ru: "гроза", emoji: "⛈️", level: 2, source: "dictionary", image: "/img/cards/weather_mokhaza.webp" },
  // Температура и состояния
  { id: "weather_shila", topicId: "weather", che: P("шийла"), ru: "холодный", emoji: "🥶", level: 1, source: "corpus", image: "/img/cards/weather_shila.webp" },
  { id: "weather_dova", topicId: "weather", che: P("довха"), ru: "тёплый", emoji: "🌡️", level: 1, source: "corpus", image: "/img/cards/weather_dova.webp" },
  { id: "weather_bekha", topicId: "weather", che: P("довха"), ru: "жаркий", emoji: "🔥", level: 2, source: "corpus", image: "/img/cards/weather_bekha.webp" },
  { id: "weather_sheena", topicId: "weather", che: P("салкхене"), ru: "прохладный", emoji: "😌", level: 2, source: "dictionary", image: "/img/cards/weather_sheena.webp" },
  // Времена года
  { id: "weather_bier", topicId: "weather", che: P("б1аьсте"), ru: "весна", emoji: "🌸", level: 1, source: "corpus", image: "/img/cards/weather_bier.webp" },
  { id: "weather_aekha", topicId: "weather", che: P("аьхке"), ru: "лето", emoji: "☀️", level: 1, source: "corpus", image: "/img/cards/weather_aekha.webp" },
  { id: "weather_guoy", topicId: "weather", che: P("гуьйре"), ru: "осень", emoji: "🍂", level: 1, source: "corpus", image: "/img/cards/weather_guoy.webp" },
  { id: "weather_1a", topicId: "weather", che: P("1а"), ru: "зима", emoji: "❄️", level: 1, source: "corpus", image: "/img/cards/weather_1a.webp" },
  // Месяцы
  { id: "weather_jan", topicId: "weather", che: P("январь"), ru: "январь", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_jan.webp" },
  { id: "weather_feb", topicId: "weather", che: P("февраль"), ru: "февраль", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_feb.webp" },
  { id: "weather_mar", topicId: "weather", che: P("март"), ru: "март", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_mar.webp" },
  { id: "weather_apr", topicId: "weather", che: P("апрель"), ru: "апрель", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_apr.webp" },
  { id: "weather_may", topicId: "weather", che: P("май"), ru: "май", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_may.webp" },
  { id: "weather_jun", topicId: "weather", che: P("июнь"), ru: "июнь", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_jun.webp" },
  { id: "weather_jul", topicId: "weather", che: P("июль"), ru: "июль", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_jul.webp" },
  { id: "weather_aug", topicId: "weather", che: P("август"), ru: "август", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_aug.webp" },
  { id: "weather_sep", topicId: "weather", che: P("сентябрь"), ru: "сентябрь", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_sep.webp" },
  { id: "weather_oct", topicId: "weather", che: P("октябрь"), ru: "октябрь", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_oct.webp" },
  { id: "weather_nov", topicId: "weather", che: P("ноябрь"), ru: "ноябрь", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_nov.webp" },
  { id: "weather_dec", topicId: "weather", che: P("декабрь"), ru: "декабрь", emoji: "📅", level: 2, source: "dictionary", image: "/img/cards/weather_dec.webp" },
  // Дни недели
  { id: "weather_mon", topicId: "weather", che: P("оршот"), ru: "понедельник", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_mon.webp" },
  { id: "weather_tue", topicId: "weather", che: P("шинара"), ru: "вторник", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_tue.webp" },
  { id: "weather_wed", topicId: "weather", che: P("кхаара"), ru: "среда", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_wed.webp" },
  { id: "weather_thu", topicId: "weather", che: P("еара"), ru: "четверг", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_thu.webp" },
  { id: "weather_fri", topicId: "weather", che: P("п1ераска"), ru: "пятница", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_fri.webp" },
  { id: "weather_sat", topicId: "weather", che: P("шота"), ru: "суббота", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_sat.webp" },
  { id: "weather_sun", topicId: "weather", che: P("к1иранде"), ru: "воскресенье", emoji: "📆", level: 2, source: "dictionary", image: "/img/cards/weather_sun.webp" },
  // Дополнительные погодные явления
  { id: "weather_blizzard", topicId: "weather", che: P("дарц"), ru: "метель, буран", emoji: "🌨️", level: 2, source: "corpus", image: "/img/cards/weather_blizzard.webp" },
  { id: "weather_frost", topicId: "weather", che: P("шело"), ru: "мороз, стужа", emoji: "🥶", level: 1, source: "corpus", image: "/img/cards/weather_frost.webp" },
  { id: "weather_heat", topicId: "weather", che: P("йовхо"), ru: "жара, зной", emoji: "🌡️", level: 1, source: "corpus", image: "/img/cards/weather_heat.webp" },
  { id: "weather_puddle", topicId: "weather", che: P("1аммаг1а"), ru: "лужа", emoji: "💧", level: 2, source: "corpus", image: "/img/cards/weather_puddle.webp" },
  { id: "weather_whirlwind", topicId: "weather", che: P("хьовзам"), ru: "вихрь, смерч", emoji: "🌪️", level: 2, source: "corpus", image: "/img/cards/weather_whirlwind.webp" },
  { id: "weather_breeze", topicId: "weather", che: P("салкхенан мох"), ru: "прохладный ветерок", emoji: "🍃", level: 1, source: "corpus", image: "/img/cards/weather_breeze.webp" },
  { id: "weather_icicle", topicId: "weather", che: P("шанан ч1урам"), ru: "сосулька", emoji: "🧊", level: 2, source: "corpus", image: "/img/cards/weather_icicle.webp" },
];

export const SENTENCES: Sentence[] = [
  { id: "ws1", words: ["Малх", "хаза", "бу"], ru: "Солнце красивое.", emoji: "☀️🌟" },
  { id: "ws2", words: ["Дог1а", "дог1уш", "ду"], ru: "Дождь идёт.", emoji: "🌧️💧" },
  { id: "ws3", words: ["Ло", "к1айн", "ду"], ru: "Снег белый.", emoji: "❄️⚪" },
  { id: "ws4", words: ["ХIинца", "аьхке", "ю"], ru: "Сейчас лето.", emoji: "☀️🌞" },
];

export const SCENES: Scene[] = [
  {
    id: "weather_scene",
    topicIds: ["weather"],
    image: "/img/scene-weather.jpg",
    objects: [
      { cardId: "weather_malkh", x: 85, y: 10 },
      { cardId: "weather_markha", x: 40, y: 20 },
      { cardId: "weather_stigal", x: 50, y: 5 },
      { cardId: "weather_lo", x: 30, y: 80 },
    ],
  },
];