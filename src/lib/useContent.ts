"use client";
/* eslint-disable react-hooks/set-state-in-effect -- async server/cache hydration updates local state intentionally. */

import { useEffect, useState, useCallback } from "react";
import { CARDS, TOPICS } from "@/data/words";
import type { Card } from "@/data/types";

export interface Override {
  cardId: string;
  che?: string | null;
  stress?: string | null;
  exampleChe?: string | null;
  emoji?: string | null;
  image?: string | null;
  audio?: string | null;
  hidden?: boolean;
}

let cache: Card[] | null = null;
let cacheError = false;

function applyOverrides(list: Override[]): Card[] {
  const map = new Map(list.map((o) => [o.cardId, o]));
  return CARDS.filter((c) => !map.get(c.id)?.hidden).map((c) => {
    const o = map.get(c.id);
    if (!o) return c;
    return {
      ...c,
      che: o.che || c.che,
      stress: o.stress || c.stress,
      emoji: o.emoji || c.emoji,
      image: o.image || c.image,
      audio: o.audio || c.audio,
      example: o.exampleChe ? { che: o.exampleChe, ru: c.example?.ru ?? "" } : c.example,
    };
  });
}

/**
 * Карточки с учётом ручных правок из БД. Если сервер недоступен —
 * используем встроенный словарь (офлайн-режим), ошибка не блокирует игру.
 */
export function useContent() {
  const [cards, setCards] = useState<Card[]>(cache ?? CARDS);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState(false);
  const [tick, setTick] = useState(0);

  const retry = useCallback(() => {
    cache = null;
    cacheError = false;
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    if (cache) {
      setCards(cache);
      setLoading(false);
      setError(cacheError);
      return;
    }
    let alive = true;
    setLoading(true);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    fetch("/api/overrides", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad"))))
      .then((data: Override[]) => {
        cache = applyOverrides(Array.isArray(data) ? data : []);
        cacheError = false;
      })
      .catch(() => {
        cache = CARDS;
        cacheError = true;
      })
      .finally(() => {
        clearTimeout(timer);
        if (!alive) return;
        setCards(cache ?? CARDS);
        setError(cacheError);
        setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [tick]);

  return { cards, topics: TOPICS, loading, error, retry };
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Разбиение чеченского слова на графемы (аь, оь, уь, кх, къ, кӀ, хь, хӀ, гӀ, …). */
const DIGRAPHS = ["аь", "оь", "уь", "юь", "яь", "кх", "къ", "кӀ", "хь", "хӀ", "гӀ", "пӀ", "тӀ", "цӀ", "чӀ", "Ӏь"];
export function graphemes(word: string): string[] {
  const out: string[] = [];
  const w = word.toLowerCase();
  let i = 0;
  while (i < w.length) {
    const two = w.slice(i, i + 2);
    if (DIGRAPHS.includes(two)) {
      out.push(two);
      i += 2;
    } else {
      out.push(w[i]);
      i += 1;
    }
  }
  return out;
}
