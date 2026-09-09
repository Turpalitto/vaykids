import type { Topic, Card, Sentence, Scene } from '../types';

// Импортируем все темы
import * as home from './home';
import * as family from './family';
import * as food from './food';
import * as animals from './animals';
import * as colors from './colors';
import * as body from './body';
import * as clothes from './clothes';
import * as school from './school';
import * as nature from './nature';
import * as transport from './transport';
import * as emotions from './emotions';
import * as traditions from './traditions';
import * as mountains from './mountains';

// Новые темы
import * as weather from './weather';
import * as time from './time';
import * as professions from './professions';
import * as city from './city';
import * as house from './house';
import * as shopping from './shopping';
import * as health from './health';
import * as sport from './sport';
import * as toys from './toys';
import * as holidays from './holidays';
import * as verbs from './verbs';
import * as adjectives from './adjectives';
import * as pronouns from './pronouns';

// Собираем все темы
export const TOPICS: Topic[] = [
  ...home.TOPICS,
  ...family.TOPICS,
  ...food.TOPICS,
  ...animals.TOPICS,
  ...colors.TOPICS,
  ...body.TOPICS,
  ...clothes.TOPICS,
  ...school.TOPICS,
  ...nature.TOPICS,
  ...transport.TOPICS,
  ...emotions.TOPICS,
  ...traditions.TOPICS,
  ...mountains.TOPICS,
  ...weather.TOPICS,
  ...time.TOPICS,
  ...professions.TOPICS,
  ...city.TOPICS,
  ...house.TOPICS,
  ...shopping.TOPICS,
  ...health.TOPICS,
  ...sport.TOPICS,
  ...toys.TOPICS,
  ...holidays.TOPICS,
  ...verbs.TOPICS,
  ...adjectives.TOPICS,
  ...pronouns.TOPICS,
];

// Собираем все карточки
export const CARDS: Card[] = [
  ...home.CARDS,
  ...family.CARDS,
  ...food.CARDS,
  ...animals.CARDS,
  ...colors.CARDS,
  ...body.CARDS,
  ...clothes.CARDS,
  ...school.CARDS,
  ...nature.CARDS,
  ...transport.CARDS,
  ...emotions.CARDS,
  ...traditions.CARDS,
  ...mountains.CARDS,
  ...weather.CARDS,
  ...time.CARDS,
  ...professions.CARDS,
  ...city.CARDS,
  ...house.CARDS,
  ...shopping.CARDS,
  ...health.CARDS,
  ...sport.CARDS,
  ...toys.CARDS,
  ...holidays.CARDS,
  ...verbs.CARDS,
  ...adjectives.CARDS,
  ...pronouns.CARDS,
];

// Собираем предложения (если есть)
export const SENTENCES: Sentence[] = [
  ...home.SENTENCES || [],
  ...family.SENTENCES || [],
  ...food.SENTENCES || [],
  ...animals.SENTENCES || [],
  ...colors.SENTENCES || [],
  ...body.SENTENCES || [],
  ...clothes.SENTENCES || [],
  ...school.SENTENCES || [],
  ...nature.SENTENCES || [],
  ...transport.SENTENCES || [],
  ...emotions.SENTENCES || [],
  ...traditions.SENTENCES || [],
  ...mountains.SENTENCES || [],
  ...weather.SENTENCES || [],
  ...time.SENTENCES || [],
  ...professions.SENTENCES || [],
  ...city.SENTENCES || [],
  ...house.SENTENCES || [],
  ...shopping.SENTENCES || [],
  ...health.SENTENCES || [],
  ...sport.SENTENCES || [],
  ...toys.SENTENCES || [],
  ...holidays.SENTENCES || [],
  ...verbs.SENTENCES || [],
  ...adjectives.SENTENCES || [],
  ...pronouns.SENTENCES || [],
];

// Сцены
export const SCENES: Scene[] = [
  ...home.SCENES || [],
  ...family.SCENES || [],
  ...food.SCENES || [],
  ...animals.SCENES || [],
  ...colors.SCENES || [],
  ...body.SCENES || [],
  ...clothes.SCENES || [],
  ...school.SCENES || [],
  ...nature.SCENES || [],
  ...transport.SCENES || [],
  ...emotions.SCENES || [],
  ...traditions.SCENES || [],
  ...mountains.SCENES || [],
  ...weather.SCENES || [],
  ...time.SCENES || [],
  ...professions.SCENES || [],
  ...city.SCENES || [],
  ...house.SCENES || [],
  ...shopping.SCENES || [],
  ...health.SCENES || [],
  ...sport.SCENES || [],
  ...toys.SCENES || [],
  ...holidays.SCENES || [],
  ...verbs.SCENES || [],
  ...adjectives.SCENES || [],
  ...pronouns.SCENES || [],
];

// Хелперы
export const cardById = (id: string) => CARDS.find((c) => c.id === id);
export const cardsByTopic = (topicId: string) => CARDS.filter((c) => c.topicId === topicId);
export const topicById = (id: string) => TOPICS.find((t) => t.id === id);

// Список для проверки
export const REVIEW_LIST = CARDS.filter((c) => c.review).map((c) => ({
  cardId: c.id,
  che: c.che,
  ru: c.ru,
  reason: c.review as string,
}));