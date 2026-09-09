"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Shell, TopBar, CardArt, Loading, ErrorState, Empty } from "@/components/ui";
import { T } from "@/data/ui";
import { TOPICS } from "@/data/words";
import { useContent } from "@/lib/useContent";
import { useStore, emptyProgress, isUnlocked } from "@/lib/store";
import { sfx } from "@/lib/audio";

type Filter = "all" | "fav" | "learned" | "new";

export default function CardsPage() {
  const { cards, loading, error, retry } = useContent();
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const [topic, setTopic] = useState<string>("all");
  const [level, setLevel] = useState<0 | 1 | 2 | 3>(0);
  const [filter, setFilter] = useState<Filter>("all");

  const list = useMemo(
    () =>
      cards.filter((c) => {
        if (topic !== "all" && c.topicId !== topic) return false;
        if (level && c.level !== level) return false;
        if (filter === "fav" && !p.favorites.includes(c.id)) return false;
        if (filter === "learned" && !p.learned.includes(c.id)) return false;
        if (filter === "new" && p.learned.includes(c.id)) return false;
        return true;
      }),
    [cards, topic, level, filter, p.favorites, p.learned],
  );

  const chip = (active: boolean, extra = "") =>
    `press shrink-0 rounded-full min-h-[48px] px-4 font-black text-base flex items-center gap-1 ${active ? "bg-[#2a1f14] text-white" : "bg-white soft"} ${extra}`;

  return (
    <Shell>
      <TopBar title={T.cards} back={null} />

      {/* Фильтр: состояние */}
      <div className="px-4 flex gap-2 overflow-x-auto no-scrollbar">
        {(
          [
            ["all", "🃏", T.all],
            ["fav", "💛", T.favorite],
            ["learned", "✅", T.learned],
            ["new", "✨", T.words],
          ] as [Filter, string, string][]
        ).map(([f, e, l]) => (
          <button key={f} type="button" className={chip(filter === f)} onClick={() => { sfx("tap"); setFilter(f); }}>
            {e} {l}
          </button>
        ))}
      </div>

      {/* Фильтр: уровень */}
      <div className="px-4 mt-2 flex gap-2 overflow-x-auto no-scrollbar">
        {([0, 1, 2, 3] as const).map((lv) => (
          <button key={lv} type="button" className={chip(level === lv)} onClick={() => { sfx("tap"); setLevel(lv); }}>
            {lv === 0 ? T.all : lv === 1 ? `🐣 ${T.easy}` : lv === 2 ? `🦊 ${T.medium}` : `🦅 ${T.hard}`}
          </button>
        ))}
      </div>

      {/* Фильтр: тема */}
      <div className="px-4 mt-2 flex gap-2 overflow-x-auto no-scrollbar">
        <button type="button" className={chip(topic === "all")} onClick={() => { sfx("tap"); setTopic("all"); }}>🌍 {T.topics}</button>
        {TOPICS.filter((t) => isUnlocked(p, t.unlockStars)).map((t) => (
          <button key={t.id} type="button" className={chip(topic === t.id)} onClick={() => { sfx("tap"); setTopic(t.id); }}>
            {t.emoji} {t.che}
          </button>
        ))}
      </div>

      <div className="px-4 mt-4">
        {loading && <Loading />}
        {!loading && error && cards.length === 0 && <ErrorState onRetry={retry} />}
        {!loading && list.length === 0 && <Empty emoji={filter === "fav" ? "💛" : "🌱"} />}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {list.map((c) => (
            <Link
              key={c.id}
              href={`/cards/${c.id}`}
            onClick={() => sfx("flip")}
              className="press soft relative rounded-3xl bg-white p-3 flex flex-col items-center"
            >
              <CardArt card={c} className="w-full aspect-square rounded-2xl bg-[#FFF3DD]" emojiSize="text-6xl" />
              <span className="mt-2 text-lg font-black text-center leading-tight">{c.che}</span>
              <span className="mt-1 text-sm font-extrabold text-[#8b7a64] text-center leading-tight">{c.ru}</span>
              {p.learned.includes(c.id) && <span className="absolute top-2 right-2 text-2xl">✅</span>}
              {p.favorites.includes(c.id) && <span className="absolute top-2 left-2 text-2xl">💛</span>}
              <span className="absolute bottom-2 right-3 text-sm font-black text-[#c9b79c]">{"●".repeat(c.level)}</span>
            </Link>
          ))}
        </div>
        {!loading && (
          <p className="mt-4 text-center text-[#8b7a64] font-bold">{list.length} {T.words.toLowerCase()}</p>
        )}
      </div>
    </Shell>
  );
}
