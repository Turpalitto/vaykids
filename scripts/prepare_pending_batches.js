const fs = require('fs');
const path = require('path');
const { CARDS } = require('../src/data/words.ts');

const OUTPUT_DIR = path.resolve(__dirname, '../public/img/cards');
const pending = CARDS.filter(card => {
  const filePath = path.join(OUTPUT_DIR, `${card.id}.webp`);
  return !fs.existsSync(filePath);
});

console.log(`Всего карточек осталось: ${pending.length}`);

// Разобьем на пакеты по 10 штук
const batches = [];
for (let i = 0; i < pending.length; i += 10) {
  const chunk = pending.slice(i, i + 10);
  batches.push({
    batchIndex: Math.floor(i / 10) + 1,
    cards: chunk.map(c => ({ id: c.id, topicId: c.topicId, che: c.che, ru: c.ru })),
    cardIds: chunk.map(c => c.id),
  });
}

fs.writeFileSync(
  path.resolve(__dirname, 'pending_batches.json'),
  JSON.stringify(batches, null, 2),
  'utf8'
);

console.log(`Создано ${batches.length} пакетов по 10 штук в scripts/pending_batches.json`);
