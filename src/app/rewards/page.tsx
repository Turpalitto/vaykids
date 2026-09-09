"use client";

import Image from "next/image";
import { useState } from "react";
import { Shell, TopBar, Confetti, Progress } from "@/components/ui";
import { T } from "@/data/ui";
import { cardById } from "@/data/words";
import { useStore, emptyProgress, MEDALS, ANIMAL_IDS, DECOR_ITEMS, levelFromXp, xpForLevel } from "@/lib/store";
import { sfx } from "@/lib/audio";

type Tab = "garden" | "animals" | "medals";

export default function RewardsPage() {
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const buyDecor = useStore((s) => s.buyDecor);
  const [tab, setTab] = useState<Tab>("garden");
  const [boom, setBoom] = useState(false);
  const lvl = levelFromXp(p.xp);

  const buy = (id: string) => {
    if (buyDecor(id)) {
      sfx("unlock");
      setBoom(true);
      setTimeout(() => setBoom(false), 2500);
    } else {
      sfx("error");
    }
  };

  const tabs: [Tab, string, string][] = [
    ["garden", "🌷", T.myGarden],
    ["animals", "🦊", T.animals],
    ["medals", "🏅", T.medals],
  ];

  return (
    <Shell>
      <TopBar title={T.rewards} back={null} />
      {boom && <Confetti />}

      {/* Уровень */}
      <div className="mx-4 soft rounded-3xl bg-white p-4 flex items-center gap-4">
        <span className="grid place-items-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F5A524] to-[#D9633B] text-white text-2xl font-black">{lvl}</span>
        <div className="flex-1">
          <p className="font-black text-lg">{T.level} {lvl}</p>
          <Progress value={p.xp - xpForLevel(lvl)} max={xpForLevel(lvl + 1) - xpForLevel(lvl)} />
        </div>
        <span className="text-2xl font-black">🔥{p.streakCount}</span>
      </div>

      <div className="px-4 mt-4 grid grid-cols-3 gap-2">
        {tabs.map(([id, e, l]) => (
          <button key={id} type="button" onClick={() => { sfx("tap"); setTab(id); }} className={`press rounded-3xl min-h-[60px] font-black text-base flex flex-col items-center justify-center ${tab === id ? "bg-[#2a1f14] text-white" : "bg-white soft"}`}>
            <span className="text-2xl">{e}</span>{l}
          </button>
        ))}
      </div>

      {tab === "garden" && (
        <div className="px-4 mt-4">
          <div className="relative rounded-[32px] overflow-hidden soft" style={{ aspectRatio: "4 / 3" }}>
            <Image src="/img/garden.jpg" alt="" fill sizes="576px" className="object-cover" />
            {DECOR_ITEMS.filter((d) => p.decor.includes(d.id)).map((d) => (
              <span key={d.id} className="absolute -translate-x-1/2 -translate-y-1/2 text-5xl anim-bounceIn drop-shadow" style={{ left: `${d.x}%`, top: `${d.y}%` }}>{d.emoji}</span>
            ))}
          </div>
          <h3 className="mt-4 text-2xl font-black">{T.decorate}</h3>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {DECOR_ITEMS.map((d) => {
              const owned = p.decor.includes(d.id);
              const can = p.stars >= d.cost;
              return (
                <button key={d.id} type="button" disabled={owned} onClick={() => buy(d.id)} className={`press soft rounded-3xl p-3 flex flex-col items-center min-h-[120px] ${owned ? "bg-[#E7F6E9]" : can ? "bg-white" : "bg-white/60 opacity-70"}`}>
                  <span className="text-5xl">{d.emoji}</span>
                  <span className="font-black text-base mt-1">{d.che}</span>
                  <span className={`mt-1 rounded-full px-2 text-sm font-black ${owned ? "text-[#3FA34D]" : "bg-[#FFF1D6]"}`}>{owned ? "✅" : `${d.cost} ⭐`}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {tab === "animals" && (
        <div className="px-4 mt-4">
          <p className="font-black text-[#8b7a64] mb-3">{T.collected}: {p.animals.length}/{ANIMAL_IDS.length}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {ANIMAL_IDS.map((id) => {
              const c = cardById(id);
              const has = p.animals.includes(id);
              if (!c) return null;
              return (
                <button key={id} type="button" onClick={() => { if (has) { sfx("tap"); } else { sfx("error"); } }} className={`press soft rounded-3xl p-3 flex flex-col items-center min-h-[110px] ${has ? "bg-white" : "bg-[#efe6d6]"}`}>
                  <span className={`text-5xl ${has ? "" : "grayscale opacity-40"}`}>{has ? c.emoji : "❔"}</span>
                  <span className="font-black mt-1 text-center leading-tight">{has ? c.che : "…"}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {tab === "medals" && (
        <div className="px-4 mt-4 grid grid-cols-3 gap-3">
          {MEDALS.map((m) => {
            const has = p.medals.includes(m.id);
            return (
              <div key={m.id} className={`soft rounded-3xl p-3 flex flex-col items-center min-h-[120px] text-center ${has ? "bg-gradient-to-br from-[#FFF1D6] to-white" : "bg-[#efe6d6]"}`}>
                <span className={`text-5xl ${has ? "anim-float" : "grayscale opacity-40"}`}>{m.emoji}</span>
                <span className="font-black mt-1 leading-tight">{m.che}</span>
              </div>
            );
          })}
        </div>
      )}
    </Shell>
  );
}
