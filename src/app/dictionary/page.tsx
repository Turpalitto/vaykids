"use client";

import { useMemo, useState } from "react";
import { Shell, Loading, Btn } from "@/components/ui";
import { CARDS, TOPICS, cardById } from "@/data/words";
import { T } from "@/data/ui";
import { useRouter } from "next/navigation";

type Level = 1 | 2 | 3 | "all";

export default function DictionaryPage() {
  const router = useRouter();
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [levelFilter, setLevelFilter] = useState<Level>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = CARDS;
    if (topicFilter !== "all") {
      list = list.filter((c) => c.topicId === topicFilter);
    }
    if (levelFilter !== "all") {
      list = list.filter((c) => c.level === levelFilter);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((c) =>
        c.che.toLowerCase().includes(q) ||
        c.ru.toLowerCase().includes(q) ||
        c.emoji.includes(q)
      );
    }
    return list;
  }, [topicFilter, levelFilter, search]);

  const topicOptions = [{ id: "all", label: "Все темы" }, ...TOPICS.map((t) => ({ id: t.id, label: t.ru }))];
  const levelOptions: { id: Level; label: string }[] = [
    { id: "all", label: "Все уровни" },
    { id: 1, label: "⭐ 1" },
    { id: 2, label: "⭐⭐ 2" },
    { id: 3, label: "⭐⭐⭐ 3" },
  ];

  return (
    <Shell nav>
      <div className="px-5 pt-4 pb-12">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-black">📖 Словарь</h1>
          <Btn size="sm" color="white" onClick={() => router.push("/games")}>
            🎮 Игры
          </Btn>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <input
            type="text"
            placeholder="🔍 Найти слово..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[120px] rounded-2xl border border-[#E5E0D8] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A524]"
          />
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="rounded-2xl border border-[#E5E0D8] px-3 py-2 text-sm bg-white"
          >
            {topicOptions.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as Level)}
            className="rounded-2xl border border-[#E5E0D8] px-3 py-2 text-sm bg-white"
          >
            {levelOptions.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
        </div>

        <p className="text-sm text-[#8b7a64] mb-3">Найдено {filtered.length} слов</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filtered.map((card) => {
            const topic = TOPICS.find((t) => t.id === card.topicId);
            return (
              <div
                key={card.id}
                className="soft rounded-2xl bg-white p-3 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{card.emoji}</span>
                <span className="text-xl font-black mt-1">{card.che}</span>
                <span className="text-sm text-[#8b7a64]">{card.ru}</span>
                <span className="text-xs text-[#b0a898] mt-0.5">
                  {topic?.ru || card.topicId} · {"⭐".repeat(card.level)}
                </span>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="mt-10 text-center text-[#8b7a64]">
            <p className="text-3xl">🔍</p>
            <p>Ничего не найдено. Попробуйте изменить фильтры.</p>
          </div>
        )}
      </div>
    </Shell>
  );
}