"use client";
/* eslint-disable react-hooks/set-state-in-effect -- scoring transitions happen after delayed answer checks. */

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Card, Scene, Sentence } from "@/data/types";
import { T, HELPER_LINES } from "@/data/ui";
import { sfx } from "@/lib/audio";
import { graphemes, pick, shuffle } from "@/lib/useContent";
import { CardArt, Progress } from "@/components/ui";

export interface GameResult {
  correct: number;
  total: number;
  cardIds: string[];
}
export interface GameProps {
  cards: Card[];
  pool: Card[];
  rounds: number;
  options: number;
  onFinish: (r: GameResult) => void;
}

const rnd = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

/* ---------- Каркас игры: прогресс + реакция помощника ---------- */
export function Frame({ step, total, children, feedback, prompt }: { step: number; total: number; children: ReactNode; feedback: "ok" | "bad" | null; prompt?: ReactNode }) {
  return (
    <div className="px-4 pb-6">
      <div className="flex items-center gap-3 mt-1">
        <div className="flex-1"><Progress value={step} max={total} color="#3FA34D" /></div>
        <span className="font-black text-[#8b7a64]">{Math.min(step, total)}/{total}</span>
      </div>
      {prompt && <div className="mt-4">{prompt}</div>}
      <div className="mt-4">{children}</div>
      <div className={`fixed left-1/2 -translate-x-1/2 bottom-8 z-50 transition-all duration-300 ${feedback ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
        {feedback && (
          <div className={`soft flex items-center gap-3 rounded-full px-6 py-3 text-2xl font-black text-white anim-pop ${feedback === "ok" ? "bg-[#3FA34D]" : "bg-[#D9633B]"}`}>
            <Image src="/img/seda-deer.png" alt="" width={44} height={44} className="rounded-full bg-white" />
            {feedback === "ok" ? rnd(HELPER_LINES.good) : rnd(HELPER_LINES.bad)}
          </div>
        )}
      </div>
    </div>
  );
}

function useFeedback() {
  const [fb, setFb] = useState<"ok" | "bad" | null>(null);
  const show = useCallback((k: "ok" | "bad", ms = 900) => {
    setFb(k);
    sfx(k === "ok" ? "success" : "error");
    setTimeout(() => setFb(null), ms);
  }, []);
  return [fb, show] as const;
}

/* ---------- Опции-картинки / опции-слова ---------- */
function OptionGrid({ items, onPick, state, kind }: { items: Card[]; onPick: (c: Card) => void; state: Record<string, "ok" | "bad">; kind: "image" | "text" }) {
  return (
    <div className={`grid gap-3 ${items.length > 4 ? "grid-cols-3" : "grid-cols-2"}`}>
      {items.map((c) => {
        const s = state[c.id];
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => onPick(c)}
            className={`press soft rounded-3xl bg-white p-3 flex flex-col items-center justify-center min-h-[110px] border-4 transition-colors ${s === "ok" ? "border-[#3FA34D] bg-[#E7F6E9] anim-pop" : s === "bad" ? "border-[#D9633B] anim-shake" : "border-transparent"}`}
          >
            {kind === "image" ? (
              <CardArt card={c} className="w-full aspect-square rounded-2xl bg-[#FFF3DD]" emojiSize="text-6xl" />
            ) : (
              <span className="text-2xl sm:text-3xl font-black text-center leading-tight py-3">{c.che}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Что это? ---------- */
export function WhatIsIt({ cards, pool, rounds, options, onFinish }: GameProps) {
  const seq = useMemo(() => pick(cards, rounds), [cards, rounds]);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [state, setState] = useState<Record<string, "ok" | "bad">>({});
  const [tries, setTries] = useState(0);
  const [fb, show] = useFeedback();
  const [flash, setFlash] = useState<"ok" | "bad" | null>(null);
  const lock = useRef(false); // защита от двойного тапа во время анимации ответа
  const target = seq[i];
  const opts = useMemo(() => (target ? shuffle([target, ...pick(pool.filter((c) => c.id !== target.id && c.che !== target.che && c.emoji !== target.emoji), options - 1)]) : []), [target, pool, options]);

  const onPick = (c: Card) => {
    if (lock.current) return;
    if (c.id === target.id) {
      lock.current = true;
      setState({ [c.id]: "ok" });
      setFlash("ok");
      show("ok");
      if (tries === 0) setCorrect((x) => x + 1);
      setTimeout(() => {
        setFlash(null);
        if (i + 1 >= seq.length) onFinish({ correct: correct + (tries === 0 ? 1 : 0), total: seq.length, cardIds: seq.map((s) => s.id) });
        else { lock.current = false; setI(i + 1); setState({}); setTries(0); }
      }, 1100);
    } else {
      setState((s) => ({ ...s, [c.id]: "bad" }));
      setFlash("bad");
      setTries((t) => t + 1);
      show("bad");
      setTimeout(() => setFlash(null), 600);
    }
  };
  if (!target) return null;
  return (
    <Frame step={i} total={seq.length} feedback={fb}>
      <div key={target.id} className="soft rounded-[32px] bg-white p-4 anim-pop">
        <div className={`relative transition-all duration-300 ${flash === "ok" ? "ring-8 ring-[#3FA34D] shadow-[0_0_40px_rgba(63,163,77,0.5)]" : flash === "bad" ? "ring-8 ring-[#D9633B] shadow-[0_0_40px_rgba(217,99,59,0.5)]" : ""}`}>
          <CardArt card={target} className="w-full h-[200px] rounded-3xl bg-[#FFF3DD]" emojiSize="text-[7rem]" />
        </div>
        <p className="mt-3 text-center text-2xl font-black text-[#8b7a64]">{T.whatIsIt}</p>
      </div>
      <div className="mt-4"><OptionGrid items={opts} onPick={onPick} state={state} kind="text" /></div>
    </Frame>
  );
}

/* ---------- Запомни картинку (Memory) ---------- */
export function Memory({ cards, rounds, onFinish }: GameProps) {
  const pairs = useMemo(() => pick(cards, rounds), [cards, rounds]);
  const deck = useMemo(() => shuffle(pairs.flatMap((c) => [{ key: c.id + "a", c }, { key: c.id + "b", c }])), [pairs]);
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [misses, setMisses] = useState(0);
  const [fb, show] = useFeedback();
  const lock = useRef(false);

  const flip = (key: string) => {
    if (lock.current || open.includes(key) || matched.includes(key)) return;
    sfx("flip");
    const next = [...open, key];
    setOpen(next);
    if (next.length === 2) {
      lock.current = true;
      const [a, b] = next.map((k) => deck.find((d) => d.key === k)!);
      if (a.c.id === b.c.id) {
        show("ok", 700);
        setTimeout(() => {
          const m = [...matched, a.key, b.key];
          setMatched(m);
          setOpen([]);
          lock.current = false;
          if (m.length === deck.length) {
            const correct = Math.max(1, pairs.length - Math.floor(misses / 3));
            setTimeout(() => onFinish({ correct, total: pairs.length, cardIds: pairs.map((p) => p.id) }), 600);
          }
        }, 900);
      } else {
        setMisses((x) => x + 1);
        setTimeout(() => { setOpen([]); lock.current = false; }, 900);
      }
    }
  };

  const cols = deck.length <= 8 ? "grid-cols-2 sm:grid-cols-4" : deck.length <= 12 ? "grid-cols-3 sm:grid-cols-4" : "grid-cols-4";
  return (
    <Frame step={matched.length / 2} total={pairs.length} feedback={fb}>
      <p className="text-center text-2xl font-black text-[#8b7a64] mb-3">🧠 {T.memory}</p>
      <div className={`grid ${cols} gap-3`}>
        {deck.map((d, idx) => {
          const isOpen = open.includes(d.key) || matched.includes(d.key);
          return (
            <button key={d.key} type="button" onClick={() => flip(d.key)} className="flip-scene aspect-square" aria-label={isOpen ? d.c.che : "?"}>
              <div className={`flip-card w-full h-full ${isOpen ? "flipped" : ""}`}>
                <div className="flip-face soft rounded-3xl bg-gradient-to-br from-[#2B6CB0] to-[#6366F1] grid place-items-center text-4xl text-white ornament">
                  <span className="rounded-full bg-white/20 w-12 h-12 grid place-items-center">{(idx % 3) === 0 ? "🏔️" : (idx % 3) === 1 ? "⭐" : "🌸"}</span>
                </div>
                <div className={`flip-face flip-back soft rounded-3xl bg-white grid place-items-center ${matched.includes(d.key) ? "ring-4 ring-[#3FA34D]" : ""}`}>
                  <CardArt card={d.c} className="w-full h-full rounded-3xl" emojiSize="text-5xl sm:text-6xl" />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Frame>
  );
}

/* ---------- Собери слово ---------- */
export function BuildWord({ cards, rounds, options, onFinish }: GameProps) {
  const seq = useMemo(() => pick(cards.filter((c) => !c.che.includes(" ")), rounds), [cards, rounds]);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [placed, setPlaced] = useState<number[]>([]);
  const [wrong, setWrong] = useState(0);
  const [fb, show] = useFeedback();
  const target = seq[i];
  const parts = useMemo(() => (target ? graphemes(target.che) : []), [target]);
  const tiles = useMemo(() => {
    if (!target) return [];
    const extra = options >= 4 ? pick(["а", "о", "и", "у", "н", "м", "т", "ь", "хь", "кх"].filter((x) => !parts.includes(x)), options - 3) : [];
    return shuffle([...parts, ...extra].map((g, idx) => ({ g, idx })));
  }, [target, parts, options]);

  const answer = placed.map((idx) => tiles[idx].g).join("");
  const done = !!target && answer.length >= target.che.length;

  useEffect(() => {
    if (!target || !done) return;
    if (answer === target.che.toLowerCase()) {
      show("ok");
      const ok = wrong === 0;
      if (ok) setCorrect((x) => x + 1);
      setTimeout(() => {
        if (i + 1 >= seq.length) onFinish({ correct: ok ? correct + 1 : correct, total: seq.length, cardIds: seq.map((s) => s.id) });
        else { setI(i + 1); setPlaced([]); setWrong(0); }
      }, 1200);
    } else {
      show("bad");
      setWrong((w) => w + 1);
      setTimeout(() => setPlaced([]), 700);
    }
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!target) return null;
  const nextExpected = parts[placed.length];
  const hintIdx = wrong >= 1 ? tiles.findIndex((t, idx) => t.g === nextExpected && !placed.includes(idx)) : -1;

  return (
    <Frame step={i} total={seq.length} feedback={fb}>
      <div key={target.id} className="soft rounded-[32px] bg-white p-4 flex items-center gap-4 anim-pop">
        <CardArt card={target} className="w-28 h-28 rounded-3xl bg-[#FFF3DD] shrink-0" emojiSize="text-6xl" />
        <div className="flex-1">
          <p className="text-xl font-black text-[#8b7a64]">🔤 {T.buildWord}</p>
        </div>
      </div>
      {/* Слоты */}
      <div className="mt-5 flex flex-wrap justify-center gap-2 min-h-[64px]">
        {parts.map((_, k) => {
          const tileIdx = placed[k];
          return (
            <button
              key={k}
              type="button"
              onClick={() => { if (tileIdx !== undefined) { sfx("tap"); setPlaced((p) => p.slice(0, k)); } }}
              className={`grid place-items-center min-w-[56px] h-[64px] px-2 rounded-2xl text-3xl font-black border-4 border-dashed ${tileIdx !== undefined ? "bg-[#F5A524] border-[#F5A524] text-[#2a1f14] anim-pop" : "border-[#d9cbb3] bg-white/60"}`}
            >
              {tileIdx !== undefined ? tiles[tileIdx].g : ""}
            </button>
          );
        })}
      </div>
      {/* Плитки */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {tiles.map((t, idx) => {
          const used = placed.includes(idx);
          return (
            <button
              key={idx}
              type="button"
              disabled={used || done}
              onClick={() => { sfx("tap"); setPlaced((p) => [...p, idx]); }}
              className={`press soft grid place-items-center min-w-[64px] h-[72px] px-3 rounded-2xl text-3xl font-black bg-white ${used ? "opacity-0 pointer-events-none" : ""} ${hintIdx === idx ? "anim-pulse-ring ring-4 ring-[#F5A524]" : ""}`}
            >
              {t.g}
            </button>
          );
        })}
      </div>
    </Frame>
  );
}

/* ---------- Найди в мире ---------- */export function FindInWorld({ scene, cards, rounds, onFinish }: GameProps & { scene: Scene }) {
  const objects = useMemo(() => scene.objects.map((o) => ({ ...o, card: cards.find((c) => c.id === o.cardId) })).filter((o): o is typeof o & { card: Card } => !!o.card), [scene, cards]);
  const seq = useMemo(() => pick(objects, Math.min(rounds, objects.length)), [objects, rounds]);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState<string[]>([]);
  const [shakeId, setShakeId] = useState<string | null>(null);
  const [fb, show] = useFeedback();
  const lock = useRef(false); // защита от двойного тапа во время анимации ответа
  const target = seq[i];

  const tap = (o: (typeof objects)[number]) => {
    if (!target || lock.current) return;
    if (o.cardId === target.cardId) {
      lock.current = true;
      show("ok");
      setFound((f) => [...f, o.cardId]);
      if (tries === 0) setCorrect((x) => x + 1);
      setTimeout(() => {
        if (i + 1 >= seq.length) onFinish({ correct: correct + (tries === 0 ? 1 : 0), total: seq.length, cardIds: seq.map((s) => s.cardId) });
        else { lock.current = false; setI(i + 1); setTries(0); }
      }, 1100);
    } else {
      setShakeId(o.cardId);
      setTries((t) => t + 1);
      show("bad");
      setTimeout(() => setShakeId(null), 500);
    }
  };
  if (!target) return null;
  return (
    <Frame
      step={i}
      total={seq.length}
      feedback={fb}
      prompt={
        <div className="soft w-full rounded-3xl bg-white px-5 py-4 flex items-center gap-3">
          <Image src="/img/seda-deer.png" alt="" width={56} height={56} className="rounded-full" />
          <span className="text-2xl font-black">🔎 {T.findIt} <span className="text-[#D9633B]">{target.card.che}</span></span>
        </div>
      }
    >
      <div className="relative w-full rounded-[32px] overflow-hidden soft bg-[#FFF3DD]" style={{ aspectRatio: "4 / 3" }}>
        <Image src={scene.image} alt="" fill sizes="576px" className="object-cover" priority />
        {objects.map((o) => {
          const isFound = found.includes(o.cardId);
          return (
            <button
              key={o.cardId}
              type="button"
              onClick={() => tap(o)}
              aria-label={o.card.che}
              className={`absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[64px] h-[64px] rounded-full bg-white/85 backdrop-blur soft text-4xl press ${isFound ? "ring-4 ring-[#3FA34D] anim-pop" : "anim-float"} ${shakeId === o.cardId ? "anim-shake" : ""}`}
              style={{ left: `${o.x}%`, top: `${o.y}%`, animationDelay: `${(o.x + o.y) % 7 * 0.2}s` }}
            >
              {o.card.emoji}
            </button>
          );
        })}
      </div>
    </Frame>
  );
}

/* ---------- Собери предложение ---------- */
export function BuildSentence({ sentences, rounds, onFinish }: { sentences: Sentence[]; rounds: number; onFinish: (r: GameResult) => void }) {
  const seq = useMemo(() => pick(sentences, rounds), [sentences, rounds]);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [placed, setPlaced] = useState<number[]>([]);
  const [wrong, setWrong] = useState(0);
  const [fb, show] = useFeedback();
  const s = seq[i];
  const chips = useMemo(() => (s ? shuffle(s.words.map((w, idx) => ({ w, idx }))) : []), [s]);

  const done = s && placed.length === s.words.length;
  useEffect(() => {
    if (!s || !done) return;
    const ok = placed.every((ci, k) => chips[ci].w === s.words[k]);
    if (ok) {
      show("ok");
      const first = wrong === 0;
      if (first) setCorrect((x) => x + 1);
      setTimeout(() => {
        if (i + 1 >= seq.length) onFinish({ correct: correct + (first ? 1 : 0), total: seq.length, cardIds: [] });
        else { setI(i + 1); setPlaced([]); setWrong(0); }
      }, 1400);
    } else {
      show("bad");
      setWrong((w) => w + 1);
      setTimeout(() => setPlaced([]), 700);
    }
  }, [done]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!s) return null;
  const hintIdx = wrong >= 1 ? chips.findIndex((c, idx) => c.w === s.words[placed.length] && !placed.includes(idx)) : -1;
  return (
    <Frame step={i} total={seq.length} feedback={fb}>
      <div key={s.id} className="soft rounded-[32px] bg-white p-5 flex items-center gap-4 anim-pop">
        <span className="text-6xl">{s.emoji}</span>
        <div className="flex-1">
          <p className="text-xl font-black text-[#8b7a64]">🧩 {T.buildSentence}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2 min-h-[72px] rounded-3xl border-4 border-dashed border-[#d9cbb3] p-3">
        {placed.map((ci, k) => (
          <button key={k} type="button" onClick={() => { sfx("tap"); setPlaced((p) => p.slice(0, k)); }} className="press rounded-2xl bg-[#F5A524] px-4 min-h-[56px] text-2xl font-black anim-pop">
            {chips[ci].w}
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {chips.map((c, idx) => (
          <button
            key={idx}
            type="button"
            disabled={placed.includes(idx) || !!done}
            onClick={() => { sfx("tap"); setPlaced((p) => [...p, idx]); }}
            className={`press soft rounded-2xl bg-white px-5 min-h-[64px] text-2xl font-black ${placed.includes(idx) ? "opacity-0 pointer-events-none" : ""} ${hintIdx === idx ? "ring-4 ring-[#F5A524] anim-pulse-ring" : ""}`}
          >
            {c.w}
          </button>
        ))}
      </div>
    </Frame>
  );
}
