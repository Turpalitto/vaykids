# Design QA

Viewport: 393 × 852 CSS px, local preview at `http://127.0.0.1:3000`.

Reference: `/Users/turpal/Downloads/Screenshot_2026-09-04-11-06-05-53_40deb401b9ffe8e1df2f1cc5ba480b12.jpg`.

Verified states:

- welcome composition keeps the cream/mountain/deer/orange-CTA hierarchy from the reference;
- generated Arena images are served locally from `public/img`;
- card detail shows the Russian translation below the Chechen word;
- card list also shows Russian translations below each Chechen label;
- `стол` renders a table-related icon rather than a wood log;
- games screen no longer exposes voice or microphone modes;
- no source references remain to TTS, `SpeechRecognition`, `speak`, `speakCard`, or `stopSpeech`.

Final result: passed
