# Полный аудит и production-hardening «Нохчийн мотт»

Дата аудита: **10 сентября 2026**

Статус после работ: **локальное детское приложение готово к следующему этапу; публичный multi-user запуск требует отдельной авторизации и контентного процесса**.

## Резюме

Проект уже имел сильную визуальную основу, локальный словарь и игровые сценарии. Основные риски были не в «косметике», а в эксплуатации на реальных устройствах: сборка требовала БД вопреки offline-сценарию, не хватало Zod в runtime-зависимостях, родительская зона доверяла client-only математической проверке, PWA/offline-поведение отсутствовало, а игра «Собери предложение» была объявлена в типах, но не отображалась.

Внесены изменения в фундамент приложения:

- БД стала **необязательной**: без `DATABASE_URL` сборка проходит, UI использует встроенный контент и локальный прогресс, API синхронизации отвечает понятным `503`.
- Добавлен `zod` как настоящая runtime-зависимость; входящие API-данные ограничены по ID, длинам, датам, счётчикам и локальным asset-путям.
- Обновлены Next.js до `16.3.4` и PostCSS до `8.5.28`; production-зависимости не имеют результатов `npm audit --omit=dev`.
- Добавлены security headers, `no-store` для API, Node runtime для PostgreSQL-маршрутов, серверная обработка ошибок и health-check без падения импорта.
- Родительский challenge теперь создаётся и проверяется на сервере, ответ одноразовый, доступ выдаёт подписанную `HttpOnly` cookie на 7 дней. Mutation API контента и список review закрыты этой сессией.
- Добавлены PWA manifest, offline service worker, локальный fallback `/offline`, глобальные loading/error/not-found экраны.
- Zustand получил миграцию версии 2, нормализацию повреждённого localStorage, локальный календарь для streak, статус синхронизации и удаление профиля на сервере.
- Исправлена Unicode-ошибка в `graphemes`: lowercasing превращал чеченскую `Ӏ` (U+04C0) в `ӏ` (U+04CF), из-за чего диграфы распадались на две плитки.
- Подключена игра `sentence` и добавлена в daily queue. Для отсутствующих фоновых сцен используется локальный fallback вместо битого изображения/пустой игры.
- Словарь получил поиск с нормализацией `Ӏ/1`, фильтры «изученные/любимые/на повторение», карточки стали ссылками на подробный экран и учитывают overrides.
- Улучшены доступность и мобильная эксплуатация: свободный zoom, `focus-visible`, `aria` у progress/loading/sync, safe-area, reduced motion, контрастные состояния.
- Добавлены unit-тесты для графем, миграции прогресса и API-схем, Vitest alias и GitHub Actions quality gate.

## Проверки

| Проверка | Результат |
| --- | --- |
| `npm run typecheck` | passed |
| `npm run lint` | passed |
| `npm test` | **18 passed** |
| `npm run build` без `DATABASE_URL` | passed |
| `npm audit --omit=dev` | **0 vulnerabilities** |
| `/api/health` без БД | liveness `200 { ok: true, database: false }`; readiness `/api/health?ready=1` — `503`, без падения приложения |
| прямой `/api/review` без parent session | `401 parent_auth_required` |
| локальный override fallback | встроенный словарь продолжает работать |

В dev-зависимостях остаются 4 moderate advisory из старой цепочки `drizzle-kit → @esbuild-kit → esbuild`. Они не попадают в production install; обновление потребовало бы несовместимого отката `drizzle-kit`, поэтому это оставлено отдельной задачей обновления toolchain.

## Матрица аудита

### P0 — исправлено

| Область | Проблема | Решение |
| --- | --- | --- |
| Build/reliability | `src/db/index.ts` бросал исключение при отсутствии БД | lazy/optional DB, явные 503 |
| Runtime dependencies | `validation.ts` импортировал отсутствующий `zod` | добавлен в dependencies и lockfile |
| Learning UX | `/play/sentence` имел компонент, но не рендерился | импортирован, подключён, добавлен в daily |
| Unicode/content | графемы `кӀ` ломались после lowercase | канонизация U+04CF → U+04C0 + тест |
| Privacy/admin | parent gate проверялся только в браузере | server challenge + signed HttpOnly cookie |
| Navigation safety | locked topic открывался прямым URL | серверный/клиентский экран locked в location и play |
| Assets | многие scene paths отсутствуют в текущем пакете | локальный fallback scene, больше нет broken game state |

### P1 — сделано в этой итерации

- offline-first shell и PWA installation metadata;
- сохранение прогресса до попытки sync, индикатор offline/syncing;
- persist migration и sanitizer для старых/повреждённых данных;
- local date keys для streak вместо UTC;
- headers: `nosniff`, `SAMEORIGIN`, strict referrer, Permissions Policy, CORP;
- API validation и cache policy;
- error/loading/not-found boundaries;
- CI: install → typecheck → lint → test → build;
- поиск/фильтры словаря, лёгкая очередь «повторить» по повторным просмотрам и переиспользование `useContent` cache.

### P1 — всё ещё требует product decision

1. **Anonymous sync identity.** Сейчас `profileId` генерируется на устройстве. Перед публичным облачным синком нужны аккаунт родителя, ownership check и version/conflict resolution. Валидация payload сама по себе не является авторизацией.
2. **Parent credential.** Math challenge защищает от случайного входа ребёнка и теперь проверяется сервером, но для настоящего кабинета нужен заданный родителем PIN/password/passkey и recovery flow.
3. **Content governance.** Нужен versioned content pack: статус проверки, автор, дата, источник, история правок, rollback и обязательная проверка носителем.
4. **Audio.** Не возвращать TTS как production pronunciation. Нужны лицензированные/проверенные записи носителей, waveform/preload policy, fallback и согласие на аудио.
5. **Observability.** Нужны privacy-safe error monitoring, uptime, DB metrics, sync failure rate и alerting без трекинга ребёнка.

### P2 — roadmap на 2–3 года

- версионируемый content registry и CMS для чеченского/русского/английского UI;
- spaced repetition с интервалами, recall quality и адаптивной сложностью по возрасту;
- родительский dashboard с weekly digest, экспортом/удалением данных и явным consent;
- audio packs, accessibility narration, offline downloads и управление размером пакета;
- e2e/visual regression на 390×844, 768×1024 и desktop; performance budget для LCP/JS/images;
- feature flags и remote content updates без пересборки клиента;
- безопасные server-side ownership rules для профилей, idempotency и optimistic concurrency;
- release pipeline: preview → smoke tests → staged production → rollback.

## Контентные замечания

- В проекте сохранены локальные изображения из `public/img`; четыре готовые сцены используются напрямую, остальные scene definitions обслуживаются fallback-фоном до поставки тематических иллюстраций.
- Сомнительные слова и UI-строки не следует считать окончательной лингвистической нормой: список `review-checklist.md` остаётся обязательным перед публичным релизом.
- Emoji — временная fallback-иллюстрация. Для топового продукта лучше постепенно заменить ключевые карточки на единый авторский визуальный pack с alt/лицензиями.

## Итоговая рекомендация

Текущее приложение уже можно использовать как качественный local/offline MVP и развивать поверх стабильного каркаса. Следующая большая инвестиция должна быть не в добавлении десятков экранов, а в **контентную валидацию, авторизацию родителя и spaced repetition**. Именно эти три слоя определят, станет ли продукт долгосрочным обучающим сервисом, а не просто набором игр.
