"use client";

import { useStore } from "./store";

/**
 * Короткие сигналы интерфейса синтезируются WebAudio без внешних файлов.
 * Голосовые сценарии отключены: приложение не запускает TTS и не воспроизводит
 * аудиофайлы карточек.
 */

type AudioWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

export type Sfx = "tap" | "success" | "error" | "flip" | "win" | "star" | "unlock";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let lastTapAt = 0;

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const getCtx = () => {
  if (typeof window === "undefined") return null;
  try {
    const w = window as AudioWindow;
    const AudioCtor = w.AudioContext ?? w.webkitAudioContext;
    if (!AudioCtor) return null;

    ctx = ctx ?? new AudioCtor();
    if (ctx.state === "suspended") void ctx.resume();

    if (!master) {
      master = ctx.createGain();
      master.gain.value = 0.72;
      master.connect(ctx.destination);
    }

    return ctx;
  } catch {
    return null;
  }
};

const volume = () => {
  const s = useStore.getState().settings;
  return s.sounds ? clamp(s.volume, 0, 1) : 0;
};

const when = (c: AudioContext, start = 0) => c.currentTime + Math.max(0, start);

const shapeGain = (
  gain: GainNode,
  start: number,
  peak: number,
  attack: number,
  hold: number,
  release: number,
) => {
  const g = gain.gain;
  g.cancelScheduledValues(start);
  g.setValueAtTime(0.0001, start);
  g.exponentialRampToValueAtTime(Math.max(0.0001, peak), start + attack);
  g.setValueAtTime(Math.max(0.0001, peak), start + attack + hold);
  g.exponentialRampToValueAtTime(0.0001, start + attack + hold + release);
};

function tone({
  freq,
  start = 0,
  dur = 0.12,
  type = "sine",
  gain = 0.18,
  detune = 0,
  slideTo,
}: {
  freq: number;
  start?: number;
  dur?: number;
  type?: OscillatorType;
  gain?: number;
  detune?: number;
  slideTo?: number;
}) {
  const c = getCtx();
  const v = volume();
  if (!c || !master || v <= 0) return;

  const t = when(c, start);
  const o = c.createOscillator();
  const g = c.createGain();
  const filter = c.createBiquadFilter();

  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  o.detune.setValueAtTime(detune, t);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(5200, t);
  filter.Q.setValueAtTime(0.55, t);

  shapeGain(g, t, gain * v, 0.008, Math.max(0, dur * 0.24), Math.max(0.035, dur * 0.7));
  o.connect(filter).connect(g).connect(master);
  o.start(t);
  o.stop(t + dur + 0.12);
}

function chime(notes: number[], gap: number, gain = 0.13, type: OscillatorType = "triangle") {
  notes.forEach((freq, i) => {
    tone({ freq, start: i * gap, dur: gap * 1.8, gain, type });
    tone({ freq: freq * 2, start: i * gap + 0.012, dur: gap * 1.1, gain: gain * 0.28, type: "sine" });
  });
}

function noise({
  start = 0,
  dur = 0.08,
  gain = 0.08,
  filter = "bandpass",
  freq = 1400,
}: {
  start?: number;
  dur?: number;
  gain?: number;
  filter?: BiquadFilterType;
  freq?: number;
}) {
  const c = getCtx();
  const v = volume();
  if (!c || !master || v <= 0) return;

  const t = when(c, start);
  const length = Math.max(1, Math.floor(c.sampleRate * dur));
  const buffer = c.createBuffer(1, length, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    const fade = 1 - i / length;
    data[i] = (Math.random() * 2 - 1) * fade;
  }

  const source = c.createBufferSource();
  const g = c.createGain();
  const f = c.createBiquadFilter();

  source.buffer = buffer;
  f.type = filter;
  f.frequency.setValueAtTime(freq, t);
  f.Q.setValueAtTime(1.5, t);
  shapeGain(g, t, gain * v, 0.004, dur * 0.15, dur * 0.85);

  source.connect(f).connect(g).connect(master);
  source.start(t);
  source.stop(t + dur + 0.04);
}

function sparkle(start: number, base: number, count: number) {
  for (let i = 0; i < count; i += 1) {
    const jitter = Math.random() * 0.018;
    const freq = base * (1.5 + i * 0.28 + Math.random() * 0.08);
    tone({ freq, start: start + i * 0.035 + jitter, dur: 0.075, type: "sine", gain: 0.055 });
  }
}

export function sfx(kind: Sfx) {
  const c = getCtx();
  if (!c || volume() <= 0) return;

  if (kind === "tap") {
    const now = c.currentTime;
    if (now - lastTapAt < 0.035) return;
    lastTapAt = now;
  }

  switch (kind) {
    case "tap":
      noise({ dur: 0.035, gain: 0.035, filter: "highpass", freq: 1800 });
      tone({ freq: 720, dur: 0.055, type: "triangle", gain: 0.075, slideTo: 920 });
      break;
    case "flip":
      noise({ dur: 0.055, gain: 0.045, filter: "bandpass", freq: 1050 });
      tone({ freq: 390, dur: 0.075, type: "triangle", gain: 0.075, slideTo: 650 });
      tone({ freq: 820, start: 0.055, dur: 0.075, type: "sine", gain: 0.055, slideTo: 610 });
      break;
    case "success":
      chime([523.25, 659.25, 783.99], 0.085, 0.12);
      sparkle(0.18, 659.25, 3);
      break;
    case "error":
      noise({ dur: 0.11, gain: 0.04, filter: "lowpass", freq: 680 });
      tone({ freq: 246.94, dur: 0.16, type: "sine", gain: 0.105, slideTo: 220 });
      tone({ freq: 196, start: 0.11, dur: 0.18, type: "triangle", gain: 0.075, slideTo: 174.61 });
      break;
    case "star":
      sparkle(0, 587.33, 5);
      chime([880, 1174.66, 1567.98], 0.055, 0.09, "sine");
      break;
    case "unlock":
      noise({ dur: 0.06, gain: 0.035, filter: "highpass", freq: 2400 });
      chime([392, 493.88, 587.33, 783.99, 987.77], 0.075, 0.105);
      sparkle(0.25, 783.99, 4);
      break;
    case "win":
      noise({ dur: 0.1, gain: 0.045, filter: "highpass", freq: 2200 });
      chime([523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98], 0.085, 0.12);
      tone({ freq: 261.63, start: 0, dur: 0.55, type: "sine", gain: 0.045 });
      tone({ freq: 392, start: 0.08, dur: 0.5, type: "sine", gain: 0.04 });
      sparkle(0.38, 880, 6);
      break;
  }
}
