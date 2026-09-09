import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "weather",
    che: P("Хазна х1уманаш"),
    ru: "Погода и время",
    emoji: "🌤️",
    gradient: "from-sky-300 to-cyan-400",
    accent: "#38BDF8",
    unlockStars: 0,
    map: { x: 55, y: 15 },
  },
];

export const CARDS: Card[] = [
  // Погодные явления
  { id: "weather_malkh", topicId: "weather", che: P("малх"), ru: "солнце", emoji: "☀️", level: 1, source: "corpus" },
  { id: "weather_butt", topicId: "weather", che: P("бутт"), ru: "луна", emoji: "🌙", level: 1, source: "corpus" },
  { id: "weather_seda", topicId: "weather", che: P("седа"), ru: "звезда", emoji: "⭐", level: 1, source: "corpus" },
  { id: "weather_stigal", topicId: "weather", che: P("стигал"), ru: "небо", emoji: "🌤️", level: 1, source: "corpus" },
  { id: "weather_lo", topicId: "weather", che: P("ло"), ru: "снег", emoji: "❄️", level: 1, source: "corpus" },
  { id: "weather_dog1a", topicId: "weather", che: P("дог1а"), ru: "дождь", emoji: "🌧️", level: 1, source: "corpus" },
  { id: "weather_mokh", topicId: "weather", che: P("мох"), ru: "ветер", emoji: "🌬️", level: 2, source: "corpus" },
  { id: "weather_markha", topicId: "weather", che: P("марха"), ru: "облако", emoji: "☁️", level: 1, source: "corpus" },
  { id: "weather_1in", topicId: "weather", che: P("1ин"), ru: "туман", emoji: "🌫️", level: 2, source: "dictionary" },
  { id: "weather_g1ar", topicId: "weather", che: P("г1ар"), ru: "град", emoji: "🌨️", level: 2, source: "dictionary" },
  { id: "weather_t1ul", topicId: "weather", che: P("т1ул"), ru: "молния", emoji: "⚡", level: 2, source: "dictionary" },
  { id: "weather_mokhaza", topicId: "weather", che: P("мох-аза"), ru: "гроза", emoji: "⛈️", level: 2, source: "dictionary" },
  // Температура и состояния
  { id: "weather_shila", topicId: "weather", che: P("шийла"), ru: "холодный", emoji: "🥶", level: 1, source: "corpus" },
  { id: "weather_dova", topicId: "weather", che: P("довха"), ru: "тёплый", emoji: "🌡️", level: 1, source: "corpus" },
  { id: "weather_bekha", topicId: "weather", che: P("беха"), ru: "жаркий", emoji: "🔥", level: 2, source: "corpus" },
  { id: "weather_sheena", topicId: "weather", che: P("шийна"), ru: "прохладный", emoji: "😌", level: 2, source: "dictionary" },
  // Времена года
  { id: "weather_bier", topicId: "weather", che: P("б1ер"), ru: "весна", emoji: "🌸", level: 1, source: "corpus" },
  { id: "weather_aekha", topicId: "weather", che: P("аьхке"), ru: "лето", emoji: "☀️", level: 1, source: "corpus" },
  { id: "weather_guoy", topicId: "weather", che: P("гуьйре"), ru: "осень", emoji: "🍂", level: 1, source: "corpus" },
  { id: "weather_1a", topicId: "weather", che: P("1а"), ru: "зима", emoji: "❄️", level: 1, source: "corpus" },
  // Месяцы
  { id: "weather_jan", topicId: "weather", che: P("январь"), ru: "январь", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_feb", topicId: "weather", che: P("февраль"), ru: "февраль", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_mar", topicId: "weather", che: P("март"), ru: "март", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_apr", topicId: "weather", che: P("апрель"), ru: "апрель", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_may", topicId: "weather", che: P("май"), ru: "май", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_jun", topicId: "weather", che: P("июнь"), ru: "июнь", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_jul", topicId: "weather", che: P("июль"), ru: "июль", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_aug", topicId: "weather", che: P("август"), ru: "август", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_sep", topicId: "weather", che: P("сентябрь"), ru: "сентябрь", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_oct", topicId: "weather", che: P("октябрь"), ru: "октябрь", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_nov", topicId: "weather", che: P("ноябрь"), ru: "ноябрь", emoji: "📅", level: 2, source: "dictionary" },
  { id: "weather_dec", topicId: "weather", che: P("декабрь"), ru: "декабрь", emoji: "📅", level: 2, source: "dictionary" },
  // Дни недели
  { id: "weather_mon", topicId: "weather", che: P("оршот"), ru: "понедельник", emoji: "📆", level: 2, source: "dictionary" },
  { id: "weather_tue", topicId: "weather", che: P("шинара"), ru: "вторник", emoji: "📆", level: 2, source: "dictionary" },
  { id: "weather_wed", topicId: "weather", che: P("кхаара"), ru: "среда", emoji: "📆", level: 2, source: "dictionary" },
  { id: "weather_thu", topicId: "weather", che: P("еара"), ru: "четверг", emoji: "📆", level: 2, source: "dictionary" },
  { id: "weather_fri", topicId: "weather", che: P("п1ераска"), ru: "пятница", emoji: "📆", level: 2, source: "dictionary" },
  { id: "weather_sat", topicId: "weather", che: P("шота"), ru: "суббота", emoji: "📆", level: 2, source: "dictionary" },
  { id: "weather_sun", topicId: "weather", che: P("к1иранде"), ru: "воскресенье", emoji: "📆", level: 2, source: "dictionary" },
];

export const SENTENCES: Sentence[] = [
  { id: "ws1", words: ["Малх", "хаза", "бу"], ru: "Солнце красивое.", emoji: "☀️🌟" },
  { id: "ws2", words: ["Дог1а", "не1а", "ду"], ru: "Дождь идёт.", emoji: "🌧️💧" },
  { id: "ws3", words: ["Ло", "к1айн", "ду"], ru: "Снег белый.", emoji: "❄️⚪" },
  { id: "ws4", words: ["ХIинца", "аьхке", "ду"], ru: "Сейчас лето.", emoji: "☀️🌞" },
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