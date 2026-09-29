const { CARDS } = require('../src/data/words.ts');

const missing = CARDS.filter(c => !c.image);
console.log(`Всего карточек: ${CARDS.length}, с картинками: ${CARDS.length - missing.length}, без картинок: ${missing.length}`);

// Сгруппируем по темам
const byTopic = {};
for (const card of missing) {
  if (!byTopic[card.topicId]) byTopic[card.topicId] = [];
  byTopic[card.topicId].push(card);
}

for (const [topic, cards] of Object.entries(byTopic)) {
  console.log(`- ${topic}: ${cards.length} осталось`);
}
