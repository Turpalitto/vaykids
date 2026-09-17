"use client";

import Link from "next/link";
import { useState } from "react";
import { Shell, TopBar, Helper } from "@/components/ui";
import { T, HELPER_LINES } from "@/data/ui";
import { TOPICS } from "@/data/words";
import { useStore, emptyProgress, isUnlocked, todayStr, MEDALS } from "@/lib/store";
import { sfx } from "@/lib/audio";

const GAMES = [
  { id: "daily", emoji: "🎯", label: T.daily, color: "from-[#F5A524] to-[#D9633B]", big: true },
  { id: "memory", emoji: "🧠", label: T.memory, color: "from-purple-400 to-fuchsia-500" },
  { id: "what", emoji: "❓", label: T.whatIsIt, color: "from-sky-400 to-blue-500" },
  { id: "word", emoji: "🔤", label: T.buildWord, color: "from-amber-400 to-orange-500" },
  { id: "sentence", emoji: "🧩", label: T.buildSentence, color: "from-rose-400 to-pink-500" },
  { id: "find", emoji: "🔎", label: T.findInWorld, color: "from-lime-400 to-green-500" },
];

export default function GamesPage() {
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const [topic, setTopic] = useState<string>("");
  const dailyDone = p.dailyDate === todayStr();
  const unlocked = TOPICS.filter((t) => isUnlocked(p, t.unlockStars));
  const totalStars = p.stars || 0;
  const nextThreshold = TOPICS.reduce((acc, t) => {
    if (t.unlockStars > totalStars && t.unlockStars < acc) return t.unlockStars;
    return acc;
  }, Infinity);
  const prevThreshold = TOPICS.filter((t) => t.unlockStars <= totalStars).reduce((acc, t) => Math.max(acc, t.unlockStars), 0);

  return (
    <Shell>
      <TopBar title={T.games} back={null} />
      <div className="px-4 mt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between bg-white/70 soft rounded-2xl p-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-black text-lg">{p.streakCount || 0} дней подряд</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-black text-lg">{totalStars}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/70 soft rounded-2xl p-3">
          <span className="text-2xl">📈</span>
          <div className="flex-1">
            <div className="flex justify-between text-sm font-black">
              <span>Прогресс к следующей теме</span>
              <span>{nextThreshold === Infinity ? "🔓 все" : `${nextThreshold} ⭐`}</span>
            </div>
            <div className="h-2 w-full bg-[#E5E0D8] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#F5A524] to-[#D9633B] transition-all duration-500"
                style={{ width: `${nextThreshold === Infinity ? 100 : Math.min(100, Math.max(0, ((totalStars - prevThreshold) / Math.max(1, nextThreshold - prevThreshold)) * 100))}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4"><Helper text={HELPER_LINES.daily} size="sm" /></div>

      <div className="px-4 mt-3 flex gap-2 overflow-x-auto no-scrollbar">
        <button type="button" onClick={() => { sfx("tap"); setTopic(""); }} className={`press shrink-0 rounded-full min-h-[48px] px-4 font-black ${topic === "" ? "bg-[#2a1f14] text-white" : "bg-white soft"}`}>🌍 {T.all}</button>
        {unlocked.map((t) => (
          <button key={t.id} type="button" onClick={() => { sfx("tap"); setTopic(t.id); }} className={`press shrink-0 rounded-full min-h-[48px] px-4 font-black ${topic === t.id ? "bg-[#2a1f14] text-white" : "bg-white soft"}`}>
            {t.emoji} {t.che}
          </button>
        ))}
      </div>

      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        {GAMES.map((g) => (
          <Link
            key={g.id}
            href={`/play/${g.id}${topic ? `?topic=${topic}` : ""}`}
            onClick={() => sfx("tap")}
            className={`press soft rounded-[28px] bg-gradient-to-br ${g.color} text-white p-5 flex flex-col gap-2 min-h-[150px] ${g.big ? "col-span-2 flex-row items-center" : ""}`}
          >
            <span className={`${g.big ? "text-7xl" : "text-5xl"} drop-shadow`}>{g.big && dailyDone ? "✅" : g.emoji}</span>
            <span className="font-black text-xl leading-tight">{g.label}</span>
            {g.big && <span className="ml-auto text-sm font-black bg-white/25 rounded-full px-3 py-1">3–5 минот</span>}
          </Link>
        ))}
        <Link
          href="/dictionary"
          onClick={() => sfx("tap")}
          className="col-span-2 press soft rounded-[28px] bg-gradient-to-br from-cyan-300 to-blue-400 text-white p-5 flex flex-row items-center gap-3 min-h-[80px]"
        >
          <span className="text-5xl">📖</span>
          <span className="font-black text-xl leading-tight">Словарь</span>
          <span className="ml-auto text-sm font-black bg-white/25 rounded-full px-3 py-1">все слова</span>
        </Link>
        <Link
          href="/cards?filter=practice"
          onClick={() => sfx("tap")}
          className="col-span-2 press soft rounded-[28px] bg-gradient-to-br from-violet-400 to-purple-500 text-white p-5 flex flex-row items-center gap-3 min-h-[80px]"
        >
          <span className="text-5xl">🔁</span>
          <span className="font-black text-xl leading-tight">{T.again}</span>
          <span className="ml-auto text-sm font-black bg-white/25 rounded-full px-3 py-1">{Object.values(p.seen).filter((count) => count >= 2).length}</span>
        </Link>
        <Link
          href="/achievements"
          onClick={() => sfx("tap")}
          className="col-span-2 press soft rounded-[28px] bg-gradient-to-br from-amber-300 to-orange-400 text-white p-5 flex flex-row items-center gap-3 min-h-[80px]"
        >
          <span className="text-5xl">🏅</span>
          <span className="font-black text-xl leading-tight">Достижения</span>
          <span className="ml-auto text-sm font-black bg-white/25 rounded-full px-3 py-1">{p.medals?.length || 0} / {MEDALS.length}</span>
        </Link>
      </div>
    </Shell>
  );
}
