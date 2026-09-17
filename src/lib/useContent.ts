"use client";
/* eslint-disable react-hooks/set-state-in-effect -- async server/cache hydration updates local state intentionally. */

import { useCallback, useEffect, useState } from "react";
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
let pending: Promise<Card[]> | null = null;

const localAsset = (value?: string | null) => (value && value.startsWith("/") && !value.startsWith("//") ? value : undefined);

function applyOverrides(list: Override[]): Card[] {
  const map = new Map(list.map((o) => [o.cardId, o]));
  return CARDS.filter((c) => !map.get(c.id)?.hidden).map((c) => {
    const o = map.get(c.id);
    if (!o) return c;
    return {
      ...c,
      che: o.che?.trim() || c.che,
      stress: o.stress?.trim() || c.stress,
      emoji: o.emoji?.trim() || c.emoji,
      image: localAsset(o.image) || c.image,
      audio: localAsset(o.audio) || c.audio,
      example: o.exampleChe?.trim() ? { che: o.exampleChe.trim(), ru: c.example?.ru ?? "" } : c.example,
    };
  });
}

function loadContent() {
  if (cache) return Promise.resolve(cache);
  if (pending) return pending;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  pending = fetch("/api/overrides", { signal: controller.signal, cache: "no-store" })
    .then((response) => (response.ok ? response.json() : Promise.reject(new Error("content_unavailable"))))
    .then((data: unknown) => {
      cache = applyOverrides(Array.isArray(data) ? data as Override[] : []);
      cacheError = false;
      return cache;
    })
    .catch(() => {
      cache = CARDS;
      cacheError = true;
      return cache;
    })
    .finally(() => {
      clearTimeout(timer);
      pending = null;
    });
  return pending;
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
    let alive = true;
    if (cache) {
      setCards(cache);
      setLoading(false);
      setError(cacheError);
      return () => { alive = false; };
    }

    setLoading(true);
    void loadContent().then((next) => {
      if (!alive) return;
      setCards(next);
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
  // Unicode lowercasing turns capital palochka Ӏ (U+04C0) into ӏ (U+04CF).
  // Keep the canonical glyph so the digraph matcher remains stable.
  const w = word.toLowerCase().replaceAll("ӏ", "Ӏ");
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
