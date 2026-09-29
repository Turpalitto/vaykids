const { CARDS } = require('../src/data/words.ts');

const missing = CARDS.filter(c => !c.image);
console.log(`Осталось без картинок: ${missing.length}`);

// Возьмем первые 10 карточек
const next10 = missing.slice(0, 10);
console.log(JSON.stringify(next10.map(c => ({ id: c.id, topicId: c.topicId, che: c.che, ru: c.ru })), null, 2));
