# Нохчийн мотт — учим чеченский язык

Детское приложение для изучения чеченского языка: карточки, игры, карта локаций, награды и родительская зона. Построено на Next.js (App Router), Tailwind CSS 4, Zustand и Drizzle ORM + PostgreSQL.

## Быстрый старт

```bash
npm install
cp .env.example .env        # укажите DATABASE_URL (PostgreSQL)
npm run db:push             # создать таблицы в БД
npm run dev                 # http://127.0.0.1:3000
```

> Приложение работает и без БД: карточки встроены в код, а синхронизация прогресса, правки карточек и список проверки носителем просто отключаются с ошибкой 503 (клиент это переживает молча).

## Скрипты

| Команда | Что делает |
| --- | --- |
| `npm run dev` | Dev-сервер Next.js |
| `npm run build` | Продакшн-сборка (требует `DATABASE_URL`) |
| `npm run lint` | ESLint |
| `npm run typecheck` | Проверка типов TypeScript |
| `npm test` | Vitest: 13 тестов целостности данных |
| `npm run db:push` | Создать/обновить таблицы по `src/db/schema.ts` |
| `npm run db:generate` | Сгенерировать SQL-миграции в `drizzle/` |
| `npm run db:studio` | Drizzle Studio (GUI для БД) |

## Структура

```
src/
  app/                  страницы (App Router) и API-маршруты
    api/                progress · profiles · overrides · review · health
    play/[game]/        игры: memory · what · word · find · sentence · daily
  components/           UI-компоненты и механики игр (games.tsx)
  data/
    topics/             словарь: 26 тем, карточки, предложения, сцены
    ui.ts               строки интерфейса на чеченском
  db/                   схема Drizzle и подключение к PostgreSQL
  lib/
    store.ts            Zustand: профили, прогресс, медали, подарки
    useContent.ts       карточки с учётом правок из БД, перемешивание, графемы
    validation.ts       zod-схемы для API
    audio.ts            короткие WebAudio-сигналы (без TTS)
```

## Контент и проверка носителем

Слова, требующие подтверждения носителем чеченского, помечены полем `review:` в `src/data/topics/*.ts`. Автоматический чек-лист — **`review-checklist.md`** (58 карточек + 8 строк интерфейса). После подтверждения: правите `che` в файле темы и снимаете флаг `review`.

## Как вносить правки в данные

- Новое слово — карточка в `src/data/topics/<тема>.ts` (поля описаны в `src/data/types.ts`).
- Тесты целостности (`npm test`) ловят: обрезанные слова, числовые заглушки, дубли ID, дубли слов внутри темы, битые ссылки сцен.
- Чеченская буква `Ӏ` в коде может записываться как `1` — хелперы `P()` нормализуют её автоматически.
