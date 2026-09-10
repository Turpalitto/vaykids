"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Shell, Loading, Btn, CardArt } from "@/components/ui";
import { TOPICS } from "@/data/words";
import { useContent } from "@/lib/useContent";
import { emptyProgress, useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { sfx } from "@/lib/audio";

type Level = 1 | 2 | 3 | "all";
type Status = "all" | "learned" | "favorites" | "practice";

const normalize = (value: string) => value.toLocaleLowerCase("ru-RU").replaceAll("1", "Ӏ").trim();

export default function DictionaryPage() {
  const router = useRouter();
  const { cards, loading, error } = useContent();
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<Level>("all");
  const [status, setStatus] = useState<Status>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(search);
    return cards.filter((c) => {
      if (topicFilter !== "all" && c.topicId !== topicFilter) return false;
      if (levelFilter !== "all" && c.level !== levelFilter) return false;
      if (status === "learned" && !p.learned.includes(c.id)) return false;
      if (status === "favorites" && !p.favorites.includes(c.id)) return false;
      if (status === "practice" && (p.seen[c.id] ?? 0) < 2) return false;
      if (!q) return true;
      return [c.che, c.ru, c.emoji].some((value) => normalize(value).includes(q));
    });
  }, [cards, levelFilter, p.favorites, p.learned, p.seen, search, status, topicFilter]);

  const chip = (active: boolean) => `press min-h-[46px] shrink-0 rounded-full px-4 text-sm font-black ${active ? "bg-[#2a1f14] text-white" : "bg-white soft"}`;
  const topicOptions = [{ id: "all", label: "Все темы" }, ...TOPICS.map((t) => ({ id: t.id, label: `${t.emoji} ${t.ru}` }))];
  const levelOptions: { id: Level; label: string }[] = [
    { id: "all", label: "Все уровни" },
    { id: 1, label: "⭐ 1" },
    { id: 2, label: "⭐⭐ 2" },
    { id: 3, label: "⭐⭐⭐ 3" },
  ];
  const statusOptions: [Status, string][] = [
    ["all", "Все"],
    ["learned", "✅ Изученные"],
    ["favorites", "💛 Любимые"],
    ["practice", "🔁 На повторение"],
  ];

  return (
    <Shell>
      <div className="px-5 pt-4 pb-12">
        <div className="flex items-center justify-between mb-3 gap-3">
          <h1 className="text-3xl font-black">📖 Словарь</h1>
          <Btn size="sm" color="white" onClick={() => router.push("/games")}>🎮 Игры</Btn>
        </div>

        <label className="block">
          <span className="sr-only">Поиск слова</span>
          <input
            type="search"
            placeholder="🔍 Найти слово…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-[#E5E0D8] bg-white px-4 py-3 text-base font-bold outline-none focus:ring-2 focus:ring-[#F5A524]"
          />
        </label>

        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar" aria-label="Состояние карточек">
          {statusOptions.map(([id, label]) => (
            <button key={id} type="button" className={chip(status === id)} onClick={() => { sfx("tap"); setStatus(id); }}>{label}</button>
          ))}
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
          {levelOptions.map((option) => (
            <button key={option.id} type="button" className={chip(levelFilter === option.id)} onClick={() => { sfx("tap"); setLevelFilter(option.id); }}>{option.label}</button>
          ))}
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto no-scrollbar">
          {topicOptions.map((option) => (
            <button key={option.id} type="button" className={chip(topicFilter === option.id)} onClick={() => { sfx("tap"); setTopicFilter(option.id); }}>{option.label}</button>
          ))}
        </div>

        {loading && <Loading />}
        {!loading && error && <p className="mt-3 rounded-2xl bg-[#FFF1D6] px-4 py-3 text-sm font-bold text-[#8b7a64]">Офлайн-режим: показываем встроенный словарь.</p>}
        <p className="mt-4 text-sm font-bold text-[#8b7a64]">Найдено {filtered.length} слов</p>

        {!loading && (
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {filtered.map((card) => {
              const topic = TOPICS.find((t) => t.id === card.topicId);
              return (
                <Link
                  key={card.id}
                  href={`/cards/${card.id}`}
                  onClick={() => sfx("flip")}
                  className="press soft relative rounded-2xl bg-white p-3 text-center"
                >
                  <CardArt card={card} className="mx-auto w-full aspect-square rounded-2xl bg-[#FFF3DD]" emojiSize="text-5xl" />
                  <span className="mt-1 block text-xl font-black leading-tight">{card.che}</span>
                  <span className="mt-1 block text-sm font-extrabold text-[#8b7a64]">{card.ru}</span>
                  <span className="mt-1 block text-xs text-[#b0a898]">{topic?.ru || card.topicId} · {"⭐".repeat(card.level)}</span>
                  {p.learned.includes(card.id) && <span className="absolute right-2 top-2 text-xl" aria-label="Изучено">✅</span>}
                  {p.favorites.includes(card.id) && <span className="absolute left-2 top-2 text-xl" aria-label="В избранном">💛</span>}
                </Link>
              );
            })}
          </div>
        )}
        {!loading && filtered.length === 0 && (
          <div className="mt-10 text-center text-[#8b7a64]">
            <p className="text-3xl" aria-hidden>🔍</p>
            <p>Ничего не найдено. Попробуйте изменить фильтры.</p>
          </div>
        )}
        <p className="mt-6 text-center text-xs font-bold text-[#b0a898]">{cards.length} карточек в текущем словаре</p>
      </div>
    </Shell>
  );
}
