"use client";

import { useStore } from "./store";

/**
 * Короткие сигналы интерфейса синтезируются WebAudio без внешних файлов.
 * Голосовые сценарии отключены: приложение не запускает TTS и не воспроизводит
 * аудиофайлы карточек.
 */

let ctx: AudioContext | null = null;
const getCtx = () => {
  if (typeof window === "undefined") return null;
  try {
    ctx = ctx ?? new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
};

const volume = () => {
  const s = useStore.getState().settings;
  return s.sounds ? s.volume : 0;
};

function tone(freq: number, start: number, dur: number, type: OscillatorType = "sine", gain = 0.2) {
  const c = getCtx();
  if (!c) return;
  const v = volume();
  if (v <= 0) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, c.currentTime + start);
  g.gain.setValueAtTime(0.0001, c.currentTime + start);
  g.gain.exponentialRampToValueAtTime(gain * v, c.currentTime + start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
  o.connect(g).connect(c.destination);
  o.start(c.currentTime + start);
  o.stop(c.currentTime + start + dur + 0.05);
}

export type Sfx = "tap" | "success" | "error" | "flip" | "win" | "star" | "unlock";

export function sfx(kind: Sfx) {
  switch (kind) {
    case "tap":
      tone(660, 0, 0.08, "triangle", 0.12);
      break;
    case "flip":
      tone(520, 0, 0.06, "triangle", 0.1);
      tone(780, 0.06, 0.08, "triangle", 0.1);
      break;
    case "success":
      tone(523, 0, 0.12);
      tone(659, 0.1, 0.12);
      tone(784, 0.2, 0.2);
      break;
    case "error":
      tone(330, 0, 0.18, "sine", 0.12);
      tone(280, 0.15, 0.22, "sine", 0.1);
      break;
    case "star":
      tone(880, 0, 0.08, "triangle", 0.15);
      tone(1175, 0.08, 0.14, "triangle", 0.15);
      break;
    case "unlock":
      tone(440, 0, 0.1);
      tone(554, 0.1, 0.1);
      tone(659, 0.2, 0.1);
      tone(880, 0.3, 0.3);
      break;
    case "win":
      [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.18, "triangle", 0.18));
      break;
  }
}
