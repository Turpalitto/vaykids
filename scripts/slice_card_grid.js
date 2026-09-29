#!/usr/bin/env node
/**
 * Скрипт нарезки спрайт-сеток (2x2, 5x2, etc.) на индивидуальные карточки WebP
 * и автоматической привязки поля image в файлах тем src/data/topics/*.ts.
 * Использование:
 * node scripts/slice_card_grid.js <imagePath> <cols> <rows> <cardId1> <cardId2> ...
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function updateTopicFiles(cardId) {
  const topicsDir = path.resolve(__dirname, '../src/data/topics');
  const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));
  const imagePath = `/img/cards/${cardId}.webp`;

  for (const file of files) {
    const fullPath = path.join(topicsDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // Проверяем, есть ли такой cardId в файле
    const cardIdRegex = new RegExp(`id:\\s*["']${cardId}["']`);
    if (cardIdRegex.test(content)) {
      // Проверяем, есть ли уже image
      const hasImageRegex = new RegExp(`id:\\s*["']${cardId}["'][^}]+?image:\\s*["'][^"']+["']`);
      if (!hasImageRegex.test(content)) {
        // Добавляем image: "/img/cards/<cardId>.webp"
        const replaceRegex = new RegExp(`(id:\\s*["']${cardId}["'],[\\s\\S]*?)(source:\\s*["'][^"']+["'])(.*?)(\\})`);
        if (replaceRegex.test(content)) {
          content = content.replace(replaceRegex, `$1$2, image: "${imagePath}"$3$4`);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`  + Привязано image к ${cardId} в ${file}`);
        } else {
          // Запасной вариант: добавить в конец объекта перед }
          const fallbackRegex = new RegExp(`(id:\\s*["']${cardId}["'][^}]+)(\\})`);
          content = content.replace(fallbackRegex, `$1, image: "${imagePath}"$2`);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`  + (fallback) Привязано image к ${cardId} в ${file}`);
        }
      }
      break;
    }
  }
}

async function sliceGrid() {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.error('Использование: node scripts/slice_card_grid.js <imagePath> <cols> <rows> <cardId1> <cardId2> ...');
    process.exit(1);
  }

  const [inputPath, colsStr, rowsStr, ...cardIds] = args;
  const cols = parseInt(colsStr, 10);
  const rows = parseInt(rowsStr, 10);

  if (!fs.existsSync(inputPath)) {
    console.error(`Файл не найден: ${inputPath}`);
    process.exit(1);
  }

  const outputDir = path.resolve(__dirname, '../public/img/cards');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const metadata = await sharp(inputPath).metadata();
  const { width, height } = metadata;

  console.log(`Обработка сетки: ${width}x${height}, колонок: ${cols}, строк: ${rows}, карточек: ${cardIds.length}`);

  const cellWidth = Math.floor(width / cols);
  const cellHeight = Math.floor(height / rows);

  // 4% отступ от границ ячейки
  const padX = Math.floor(cellWidth * 0.04);
  const padY = Math.floor(cellHeight * 0.04);

  const r0Top = process.env.R0_TOP ? parseInt(process.env.R0_TOP, 10) : padY;
  const r1Top = process.env.R1_TOP ? parseInt(process.env.R1_TOP, 10) : padY;
  const customSize = process.env.CROP_SIZE ? parseInt(process.env.CROP_SIZE, 10) : null;

  let idx = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (idx >= cardIds.length) break;
      const cardId = cardIds[idx];
      idx++;

      const left = c * cellWidth + padX;
      const top = r === 0 ? r0Top : (r * cellHeight + r1Top);
      const extractSize = customSize || Math.min(cellWidth - padX * 2, cellHeight - padY * 2);
      const extractWidth = extractSize;
      const extractHeight = extractSize;

      const outputPath = path.join(outputDir, `${cardId}.webp`);

      await sharp(inputPath)
        .extract({ left, top, width: extractWidth, height: extractHeight })
        .resize(512, 512, { fit: 'cover' })
        .webp({ quality: 88, effort: 4 })
        .toFile(outputPath);

      console.log(`✓ Карточка сохранена: ${cardId} -> ${outputPath}`);
      updateTopicFiles(cardId);
    }
  }

  console.log(`Успешно нарезано и привязано ${idx} карточек в ${outputDir}`);
}

sliceGrid().catch((err) => {
  console.error('Ошибка при нарезке:', err);
  process.exit(1);
});
