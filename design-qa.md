# Design QA

Дата повторной проверки: **2026-09-10**

## Проверено

- welcome composition keeps the cream/mountain/deer/orange-CTA hierarchy from the reference;
- generated Arena images are served locally from `public/img`;
- card detail and dictionary show the Russian translation below the Chechen word;
- `стол` renders a table-related icon rather than a wood log;
- games screen has no voice/microphone modes and now exposes sentence building;
- `/play/sentence` renders a working game instead of a blank state;
- missing scene backgrounds use a local fallback and do not request known-broken files;
- direct access to a locked location/game shows a locked state;
- settings can be used with browser zoom and `maximumScale` is not restricted;
- keyboard focus rings and reduced-motion fallback are present;
- install metadata, square PWA icons and offline fallback are served locally;
- parent challenge is server-created and mutation content APIs reject requests without the HttpOnly session;
- no source references remain to TTS, `SpeechRecognition`, `speak`, `speakCard`, or `stopSpeech`.

## Automated gate

- `npm run typecheck` — passed;
- `npm run lint` — passed;
- `npm test` — 18 tests passed;
- `npm run build` without `DATABASE_URL` — passed.

## Remaining visual/product QA

- replace fallback scene backgrounds with a complete licensed illustration pack;
- test 390×844, 768×1024 and desktop with real touch/keyboard devices;
- run Lighthouse/axe and visual regression in CI after a browser runner is selected.

Final result: **passed for the current offline MVP; production content and auth QA remain before public launch.**
