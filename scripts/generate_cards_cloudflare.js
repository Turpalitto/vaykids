#!/usr/bin/env node
/**
 * Скрипт массовой высокоскоростной генерации карточек через Cloudflare Workers AI (FLUX.1 Schnell)
 * с учётом чеченских национальных и культурных нюансов.
 * Использование:
 * node scripts/generate_cards_cloudflare.js [--concurrency <C>] [--limit <N>]
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { CARDS } = require('../src/data/words.ts');

// Credentials are read from environment variables (never commit real tokens):
//   CF_ACCOUNT_ID_1..4 and CF_API_TOKEN_1..4
const ACCOUNTS = [1, 2, 3, 4].map((n) => ({
  name: `Account ${n}`,
  accountId: process.env[`CF_ACCOUNT_ID_${n}`] || '',
  apiToken: process.env[`CF_API_TOKEN_${n}`] || '',
  exhausted: false,
}));

let currentAccountIndex = 0;
function getActiveAccount() {
  for (let i = 0; i < ACCOUNTS.length; i++) {
    const idx = (currentAccountIndex + i) % ACCOUNTS.length;
    if (!ACCOUNTS[idx].exhausted) {
      currentAccountIndex = idx;
      return ACCOUNTS[idx];
    }
  }
  return null;
}

const OUTPUT_DIR = path.resolve(__dirname, '../public/img/cards');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Специализированные аутентичные промпты для национально-культурных слов
const CULTURAL_PROMPTS = {
  // Традиции и исторические предметы
  "b1av": "A medieval Chechen stone defense tower with stepped pyramidal roof in green Caucasus mountains, 3D claymorphic style, cute rounded shapes, clear blue sky",
  "pondar": "Traditional Chechen three-string wooden folk dechig-pondar lute instrument, 3D claymorphic style, smooth wood, warm pastel background",
  "vota": "Traditional Caucasian double-headed drum vota with wooden rim and sticks, 3D claymorphic, cute pastel background",
  "istang": "Traditional Chechen felt rug carpet istang with authentic colorful Caucasian geometric ornament, 3D claymorphic",
  "verta": "Traditional Caucasian black wool burka cloak verta, 3D claymorphic, cute rounded soft shape",
  "k1udal": "Traditional elegant Chechen engraved copper water pitcher jug with curved handle, 3D claymorphic",
  "khaba": "Traditional Caucasian clay pitcher khaba, 3D claymorphic",
  "choa": "Traditional North Caucasian men cherkeska chokha coat with gazyri cartridge holders on chest, 3D claymorphic",
  "trad_papakha": "Authentic fluffy black Caucasian sheepskin wool papakha hat, 3D claymorphic, soft curly wool texture",
  "trad_shield": "Medieval Caucasian round engraved bronze shield with steel boss, 3D claymorphic",
  "trad_hearth": "Traditional stone home hearth with warm burning fire and stones, 3D claymorphic",
  "trad_chain": "Traditional antique iron hearth chain ze, 3D claymorphic",
  "trad_cradle": "Traditional Chechen wooden baby rocking cradle aga with carved wood, 3D claymorphic, cozy baby quilt",
  "trad_belt": "Traditional North Caucasian engraved silver belt with filigree buckle, 3D claymorphic",
  "trad_bow": "Traditional wooden recurve archery bow, 3D claymorphic",
  "trad_horn": "Traditional engraved Caucasian drinking horn drinking cup with silver trim, 3D claymorphic",
  "trad_saddle": "Traditional Caucasian horse leather saddle nuyr, 3D claymorphic",
  "trad_mill": "Traditional stone water mill in mountain village, 3D claymorphic",
  "trad_horseshoe": "Shiny iron horseshoe nala, 3D claymorphic",
  "shaelta": "Traditional Caucasian dagger kindzhal with engraved silver scabbard, 3D claymorphic",
  "trad_scythe": "Traditional farming scythe for mowing grass, 3D claymorphic",
  "trad_chest": "Antique carved wooden chest torkaz with brass handles, 3D claymorphic",
  "trad_plow": "Traditional wooden farm plow nokh, 3D claymorphic",

  // Национальные чеченские блюда
  "food_plov": "Traditional Chechen national dish zhizhig-galnash: boiled dough dumplings with tender beef meat and garlic sauce bowl, 3D claymorphic food, appetizing, clean background",
  "food_pancake": "Traditional Chechen chepalgash: thin round buttered flatbreads stuffed with cottage cheese, 3D claymorphic food, appetizing",
  "food_siscal": "Traditional golden Chechen cornbread siskal cake, 3D claymorphic, appetizing, clean background",
  "food_khingalsh": "Traditional Chechen khingalsh half-moon pumpkin flatbreads with melted butter, 3D claymorphic food",
  "food_toberam": "Traditional Chechen to-beram: creamy cottage cheese with sour cream in a clay bowl, 3D claymorphic",
  "food_kotamgalnash": "Traditional Chechen chicken with boiled flour dumplings kotam-galnash, 3D claymorphic food",
  "food_hokham": "Traditional round golden flatbread khokham, 3D claymorphic food",
  "food_meatpie": "Traditional Chechen ba1arsh meat dish, 3D claymorphic, appetizing",
  "food_shashlik": "Grilled shashlik halal meat skewers with onions and herbs, 3D claymorphic food",
  "food_kald": "Fresh white cottage cheese kald in clay bowl, 3D claymorphic",
  "food_sourcream": "Clay bowl with thick fresh village sour cream, 3D claymorphic",
  "food_butter_white": "Fresh golden farm butter block, 3D claymorphic",

  // Одежда и аксессуары
  "yovlakh": "An elegant modest silk Caucasian women headscarf yovlakh, 3D claymorphic",
  "g1abali": "An authentic Chechen national festive women dress ghabali with ornate silver belt and embroidery, 3D claymorphic",
  "maehsi": "Traditional soft leather Caucasian boots maehsi, 3D claymorphic",
  "doehka": "Traditional engraved leather belt with silver buckle, 3D claymorphic",

  // Семья и уважительные кавказские образы (скромная, достойная одежда)
  "nana": "A kind warm smiling mother in modest Caucasian dress and neat headscarf, 3D clay figurine",
  "da": "A kind smiling Caucasian father in neat shirt and vest, 3D clay figurine",
  "deda": "A wise elderly grandfather with white beard and traditional papakha hat, 3D clay figurine",
  "nenana": "A gentle loving grandmother in traditional floral headscarf smiling, 3D clay figurine",
  "family_denana": "A loving grandmother in modest headscarf, 3D clay figurine",
  "family_vokkhostag": "A respected Caucasian village elder with white beard, papakha and walking staff, 3D clay figurine",
  "family_yokkhazuda": "A respected elderly Caucasian woman with kind smile and headscarf, 3D clay figurine",
  "family_nus": "A modest graceful young bride daughter-in-law with white silk headscarf, 3D clay figurine",
  "family_nevca": "A polite young son-in-law in neat vest, 3D clay figurine",
  "family_neyisha": "A kind smiling maternal aunt in modest dress with flower bouquet, 3D clay figurine",
  "family_deyisha": "A kind smiling paternal aunt in modest dress, 3D clay figurine",
  "family_devasha": "A friendly Caucasian uncle waving hello, 3D clay figurine",
  "family_nevasha": "A friendly Caucasian uncle in neat vest, 3D clay figurine",
  "family_lulaho": "A friendly Caucasian neighbor waving over a wooden fence, 3D clay figurine",
  "family_dottagh": "Two friendly Caucasian boys giving high five together, 3D clay figurine",
  "family_hesha": "A welcome guest arriving with a polite smile, 3D clay figurine",
  "k1ant": "A lively cheerful Caucasian boy in neat cap, 3D clay figurine",
  "yo1": "A sweet cheerful Caucasian girl with braided pigtails in a modest dress, 3D clay figurine",

  // Горы, природа и город
  "lam": "Majestic snow-capped Caucasus mountain peaks under bright blue sky, 3D claymorphic landscape",
  "mount_waterfall": "A rushing crystal clear mountain waterfall among green rocks, 3D claymorphic",
  "mount_peak": "A sharp rocky mountain peak in Caucasus, 3D claymorphic",
  "mount_snowpeak": "A snow-covered alpine mountain summit, 3D claymorphic",
  "mount_cliff": "A steep stone mountain cliff, 3D claymorphic",
  "mount_canyon": "A dramatic mountain gorge canyon with a river below, 3D claymorphic",
  "mount_pass": "A high scenic mountain trail pass, 3D claymorphic",
  "mount_moss": "Soft green alpine moss on mountain rocks, 3D claymorphic",
  "mount_trail": "A winding mountain stone path trail, 3D claymorphic",
  "nature_rainbow": "A vibrant rainbow over green rolling Caucasus hills, 3D claymorphic",
  "nature_spring": "A fresh pure mountain spring fountain shovda bubbling with clear water, 3D claymorphic",
  "city_mosque": "A beautiful white stone mosque with elegant minarets and golden dome, 3D claymorphic",
  "yurt": "A peaceful Chechen mountain village aul with stone towers, 3D claymorphic",
  "g1ala": "A clean modern city with towers and parks, 3D claymorphic",
};

const CARD_PROMPTS = fs.existsSync(path.resolve(__dirname, 'card_prompts.json'))
  ? require('./card_prompts.json')
  : {};

function buildPrompt(card) {
  const basePrompt = CARD_PROMPTS[card.id] || CULTURAL_PROMPTS[card.id];
  if (basePrompt) {
    return `${basePrompt}, cute 3D claymorphic children educational icon, vibrant soft pastel solid background, 3D clay figurine render, cute rounded shapes, centered single object, soft studio lighting, high resolution, absolutely no text, no letters, no typography, no watermarks`;
  }

  const ru = card.ru.toLowerCase().replace(/[\(\),]/g, ' ').trim();
  return `A cute 3D claymorphic children educational icon of ${ru}, vibrant soft pastel solid background, 3D clay figurine render, cute rounded shapes, centered single object, soft studio lighting, high resolution, absolutely no text, no letters, no typography, no watermarks`;
}

async function generateSingleImage(card, retries = 6) {
  const prompt = buildPrompt(card);
  const backoffs = [2000, 4000, 7000, 10000, 15000, 20000];

  for (let attempt = 1; attempt <= retries; attempt++) {
    const account = getActiveAccount();
    if (!account) {
      console.error('❌ Все аккаунты Cloudflare исчерпали дневной лимит.');
      return false;
    }

    const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${account.accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${account.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          steps: 4,
        }),
      });

      if (res.status === 429) {
        const errText = await res.text();
        if (errText.includes('daily free allocation') || errText.includes('used up your daily')) {
          console.warn(`⚠️ [Квота дня] ${account.name} исчерпал 10,000 нейронов. Ротация аккаунта...`);
          account.exhausted = true;
          continue;
        }

        const waitMs = backoffs[attempt - 1] || 10000;
        console.warn(`[429 Всплеск] ${account.name} пауза ${waitMs / 1000}с (попытка ${attempt}/${retries})...`);
        await new Promise(r => setTimeout(r, waitMs));
        continue;
      }

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`HTTP ${res.status}: ${errText.slice(0, 150)}`);
      }

      const data = await res.json();
      if (!data.result || !data.result.image) {
        throw new Error('Пустой результат от Cloudflare');
      }

      const buffer = Buffer.from(data.result.image, 'base64');
      const outputPath = path.join(OUTPUT_DIR, `${card.id}.webp`);

      await sharp(buffer)
        .resize(512, 512, { fit: 'cover' })
        .webp({ quality: 88, effort: 3 })
        .toFile(outputPath);

      return true;
    } catch (err) {
      if (attempt === retries) {
        console.error(`❌ Ошибка [${card.id}]:`, err.message);
        return false;
      }
      const waitMs = backoffs[attempt - 1] || 4000;
      await new Promise(r => setTimeout(r, waitMs));
    }
  }
  return false;
}

function syncAllTopicFiles() {
  const topicsDir = path.resolve(__dirname, '../src/data/topics');
  const files = fs.readdirSync(topicsDir).filter(f => f.endsWith('.ts'));
  let linked = 0;

  for (const file of files) {
    const fullPath = path.join(topicsDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    for (const card of CARDS) {
      const cardFile = path.join(OUTPUT_DIR, `${card.id}.webp`);
      if (!fs.existsSync(cardFile)) continue;

      const cardIdRegex = new RegExp(`id:\\s*["']${card.id}["']`);
      if (!cardIdRegex.test(content)) continue;

      const hasImageRegex = new RegExp(`id:\\s*["']${card.id}["'][^}]+?image:\\s*["'][^"']+["']`);
      if (hasImageRegex.test(content)) continue;

      const imagePath = `/img/cards/${card.id}.webp`;
      const replaceRegex = new RegExp(`(id:\\s*["']${card.id}["'],[\\s\\S]*?)(source:\\s*["'][^"']+["'])(.*?)(\\})`);
      if (replaceRegex.test(content)) {
        content = content.replace(replaceRegex, `$1$2, image: "${imagePath}"$3$4`);
        modified = true;
        linked++;
      } else {
        const fallbackRegex = new RegExp(`(id:\\s*["']${card.id}["'][^}]+)(\\})`);
        content = content.replace(fallbackRegex, `$1, image: "${imagePath}"$2`);
        modified = true;
        linked++;
      }
    }

    if (modified) {
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }

  console.log(`✓ Синхронизировано связей с темами: ${linked}`);
}

async function main() {
  const args = process.argv.slice(2);
  let limit = Infinity;
  let concurrency = 2;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && args[i + 1]) {
      limit = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--concurrency' && args[i + 1]) {
      concurrency = parseInt(args[i + 1], 10);
      i++;
    }
  }

  const pending = CARDS.filter(card => {
    const filePath = path.join(OUTPUT_DIR, `${card.id}.webp`);
    return !fs.existsSync(filePath);
  }).slice(0, limit);

  console.log(`====================================================`);
  console.log(`Запуск Cloudflare Workers AI (FLUX.1 Schnell)`);
  console.log(`Всего в словаре: ${CARDS.length}`);
  console.log(`Уже готово на диске: ${CARDS.length - pending.length}`);
  console.log(`Осталось сгенерировать: ${pending.length}`);
  console.log(`Параллельность: ${concurrency} потока (с авто-задержкой от 429)`);
  console.log(`Культурных кастомных промптов: ${Object.keys(CULTURAL_PROMPTS).length}`);
  console.log(`====================================================`);

  if (pending.length === 0) {
    console.log('🎉 Все карточки уже сгенерированы!');
    syncAllTopicFiles();
    return;
  }

  let completed = 0;
  let successCount = 0;
  let failedCount = 0;
  let queueIndex = 0;

  async function worker(workerId) {
    while (queueIndex < pending.length) {
      const card = pending[queueIndex++];
      if (!card) break;

      const ok = await generateSingleImage(card);
      completed++;
      if (ok) {
        successCount++;
        const pct = ((completed / pending.length) * 100).toFixed(1);
        console.log(`[${completed}/${pending.length} - ${pct}%] (W${workerId}) ✓ ${card.id} [${card.topicId}]: ${card.che} — ${card.ru}`);
      } else {
        failedCount++;
      }

      // Небольшая щадящая пауза 800мс между запросами для предотвращения всплесков
      await new Promise(r => setTimeout(r, 800));
    }
  }

  const startTime = Date.now();
  const workers = Array.from({ length: concurrency }, (_, i) => worker(i + 1));
  await Promise.all(workers);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n🎉 Генерация завершена за ${elapsed}s!`);
  console.log(`Успешно создано: ${successCount}, Ошибок: ${failedCount}`);

  console.log(`\nПривязка изображений в файлы тем...`);
  syncAllTopicFiles();
}

main().catch(console.error);
