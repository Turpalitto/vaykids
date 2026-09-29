import type { Topic, Card, Sentence, Scene } from '../types';

const P = (s: string) => s.replace(/1/g, "Ӏ");

export const TOPICS: Topic[] = [
  {
    id: "school",
    che: P("Дешар"),
    ru: "Школа и учеба",
    emoji: "🏫",
    gradient: "from-yellow-200 to-amber-300",
    accent: "#EAB308",
    unlockStars: 30,
    map: { x: 36, y: 56 },
  },
];

export const CARDS: Card[] = [
  { id: "shkola", topicId: "school", che: P("школа"), ru: "школа", emoji: "🏫", level: 1, source: "dictionary", image: "/img/cards/shkola.webp" },
  { id: "zhayna", topicId: "school", che: P("жайна"), ru: "книга", emoji: "📖", level: 1, source: "corpus", image: "/img/cards/zhayna.webp" },
  { id: "qolam", topicId: "school", che: P("къолам"), ru: "карандаш", emoji: "✏️", level: 1, source: "corpus", image: "/img/cards/qolam.webp" },
  { id: "kehat", topicId: "school", che: P("кехат"), ru: "бумага, письмо", emoji: "📄", level: 1, source: "corpus", image: "/img/cards/kehat.webp" },
  { id: "hekharkho", topicId: "school", che: P("хьехархо"), ru: "учитель", emoji: "👩‍🏫", level: 2, source: "corpus", image: "/img/cards/hekharkho.webp" },
  { id: "desharkho", topicId: "school", che: P("дешархо"), ru: "ученик", emoji: "🧑‍🎓", level: 2, source: "dictionary", image: "/img/cards/desharkho.webp" },
  { id: "deshar", topicId: "school", che: P("дешар"), ru: "учёба, чтение", emoji: "📚", level: 2, source: "corpus", image: "/img/cards/deshar.webp" },
  { id: "yoza", topicId: "school", che: P("йоза"), ru: "письмо (текст)", emoji: "✍️", level: 2, source: "corpus", image: "/img/cards/yoza.webp" },
  { id: "elp", topicId: "school", che: P("элп"), ru: "буква", emoji: "🔤", level: 1, source: "corpus", image: "/img/cards/elp.webp" },
  { id: "dosh", topicId: "school", che: P("дош"), ru: "слово", emoji: "💬", level: 1, source: "corpus", image: "/img/cards/dosh.webp" },
  { id: "terakh", topicId: "school", che: P("терахь"), ru: "число", emoji: "🔢", level: 2, source: "corpus", image: "/img/cards/terakh.webp" },
  { id: "surt", topicId: "school", che: P("сурт"), ru: "картинка", emoji: "🖼️", level: 1, source: "corpus", image: "/img/cards/surt.webp" },
  { id: "illi", topicId: "school", che: P("илли"), ru: "песня", emoji: "🎵", level: 1, source: "corpus", image: "/img/cards/illi.webp" },
  // Школьные принадлежности и уроки
  { id: "school_backpack", topicId: "school", che: P("т1оьрмиг"), ru: "портфель, рюкзак", emoji: "🎒", level: 1, source: "corpus", image: "/img/cards/school_backpack.webp" },
  { id: "school_notebook", topicId: "school", che: P("тефтар"), ru: "тетрадь", emoji: "📓", level: 1, source: "corpus", image: "/img/cards/school_notebook.webp" },
  { id: "school_pen", topicId: "school", che: P("ручка"), ru: "ручка", emoji: "🖊️", level: 1, source: "dictionary", image: "/img/cards/school_pen.webp" },
  { id: "school_ruler", topicId: "school", che: P("сизхьокхург"), ru: "линейка", emoji: "📏", level: 1, source: "corpus", image: "/img/cards/school_ruler.webp" },
  { id: "school_eraser", topicId: "school", che: P("д1адайъург"), ru: "ластик", emoji: "🧼", level: 1, source: "corpus", image: "/img/cards/school_eraser.webp" },
  { id: "school_scissors", topicId: "school", che: P("тукар"), ru: "ножницы", emoji: "✂️", level: 1, source: "corpus", image: "/img/cards/school_scissors.webp" },
  { id: "school_board", topicId: "school", che: P("ун"), ru: "классная доска", emoji: "📋", level: 2, source: "corpus", image: "/img/cards/school_board.webp" },
  { id: "school_chalk", topicId: "school", che: P("кир"), ru: "мел", emoji: "🖍️", level: 2, source: "corpus", image: "/img/cards/school_chalk.webp" },
  { id: "school_desk", topicId: "school", che: P("парта"), ru: "парта", emoji: "🪑", level: 1, source: "dictionary", image: "/img/cards/school_desk.webp" },
  { id: "school_bell", topicId: "school", che: P("горгали"), ru: "звонок", emoji: "🔔", level: 1, source: "corpus", image: "/img/cards/school_bell.webp" },
  { id: "school_lesson", topicId: "school", che: P("дарс"), ru: "урок", emoji: "🧑‍🏫", level: 1, source: "corpus", image: "/img/cards/school_lesson.webp" },
  { id: "school_globe", topicId: "school", che: P("глобус"), ru: "глобус", emoji: "🌐", level: 2, source: "dictionary", image: "/img/cards/school_globe.webp" },
  { id: "school_map", topicId: "school", che: P("карта"), ru: "карта", emoji: "🗺️", level: 2, source: "dictionary", image: "/img/cards/school_map.webp" },
  { id: "school_grade", topicId: "school", che: P("мах"), ru: "отметка, оценка", emoji: "💯", level: 2, source: "corpus", image: "/img/cards/school_grade.webp" },
  { id: "school_sharpener", topicId: "school", che: P("къолам-ирбийриг"), ru: "точилка для карандашей", emoji: "✏️", level: 2, source: "dictionary", image: "/img/cards/school_sharpener.webp" },
  // Творчество и учебный процесс
  { id: "school_paints", topicId: "school", che: P("басарш"), ru: "краски", emoji: "🎨", level: 1, source: "corpus", image: "/img/cards/school_paints.webp" },
  { id: "school_brush", topicId: "school", che: P("басархьокхург"), ru: "кисточка", emoji: "🖌️", level: 1, source: "corpus", image: "/img/cards/school_brush.webp" },
  { id: "school_clay", topicId: "school", che: P("саз-латта"), ru: "пластилин, глина", emoji: "🧱", level: 2, source: "corpus", image: "/img/cards/school_clay.webp" },
  { id: "school_alphabet", topicId: "school", che: P("абат"), ru: "азбука, букварь", emoji: "🔤", level: 1, source: "corpus", image: "/img/cards/school_alphabet.webp" },
  { id: "school_calculator", topicId: "school", che: P("калькулятор"), ru: "калькулятор", emoji: "🧮", level: 2, source: "dictionary", image: "/img/cards/school_calculator.webp" },
  { id: "school_homework", topicId: "school", che: P("ц1ера болх"), ru: "домашнее задание", emoji: "🏠", level: 1, source: "corpus", image: "/img/cards/school_homework.webp" },
  { id: "school_classroom", topicId: "school", che: P("дешаран чоь"), ru: "классный кабинет", emoji: "🏫", level: 1, source: "corpus", image: "/img/cards/school_classroom.webp" },
  { id: "school_question", topicId: "school", che: P("хаттар"), ru: "вопрос", emoji: "❓", level: 1, source: "corpus", image: "/img/cards/school_question.webp" },
  { id: "school_answer", topicId: "school", che: P("жоп"), ru: "ответ", emoji: "💬", level: 1, source: "corpus", image: "/img/cards/school_answer.webp" },
  { id: "school_folder", topicId: "school", che: P("папка"), ru: "папка для тетрадей", emoji: "📁", level: 2, source: "dictionary", image: "/img/cards/school_folder.webp" },
];

export const SENTENCES: Sentence[] = [];
export const SCENES: Scene[] = [];