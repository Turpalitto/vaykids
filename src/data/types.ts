/**
 * Контентная модель карточки.
 * Поле `ru` — только для внутренней проверки; в детском интерфейсе НЕ отображается.
 */
export type Level = 1 | 2 | 3;

export type CardSource = "corpus" | "dictionary";

export interface Card {
  id: string;
  topicId: string;
  /** Чеченское слово (чеченская кириллица, палочка Ӏ). */
  che: string;
  /** Внутренний русский эквивалент — НЕ показывать ребёнку. */
  ru: string;
  /** Крупная иллюстрация-заглушка (эмодзи), пока нет своих картинок. */
  emoji: string;
  /** Путь к иллюстрации — заменяется без изменения кода. */
  image?: string;
  /** Зарезервировано для будущих записей; текущий интерфейс работает без озвучки. */
  audio?: string;
  /** Ударение, например "нáна" (заполняется позже вручную). */
  stress?: string;
  level: Level;
  /** Откуда слово: подтверждено корпусом lingtrain/chechen-russian или словарное. */
  source: CardSource;
  /** Если задано — слово попадает во внутренний список проверки носителем. */
  review?: string;
  /** Пример простого предложения. */
  example?: { che: string; ru: string };
}

export interface Topic {
  id: string;
  /** Название темы на чеченском. */
  che: string;
  ru: string;
  emoji: string;
  /** Градиент локации (Tailwind-классы). */
  gradient: string;
  accent: string;
  image?: string;
  /** Сколько звёзд нужно, чтобы открыть локацию. */
  unlockStars: number;
  /** Позиция на карте, % от ширины/высоты. */
  map: { x: number; y: number };
}

export interface Sentence {
  id: string;
  words: string[];
  ru: string;
  emoji: string;
}

export interface SceneObject {
  cardId: string;
  x: number;
  y: number;
  size?: number;
}

export interface Scene {
  id: string;
  topicIds: string[];
  image: string;
  objects: SceneObject[];
}

export type GameId =
  | "memory"
  | "what"
  | "word"
  | "find"
  | "sentence"
  | "daily";
