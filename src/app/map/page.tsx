"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Shell, TopBar, Helper, Btn, Confetti } from "@/components/ui";
import { T, HELPER_LINES } from "@/data/ui";
import { TOPICS, CARDS } from "@/data/words";
import { useStore, isUnlocked, todayStr, emptyProgress } from "@/lib/store";
import { sfx } from "@/lib/audio";

export default function MapPage() {
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const claimGift = useStore((s) => s.claimGift);
  const [gift, setGift] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const today = todayStr();
  const giftReady = p.giftDate !== today;
  const dailyDone = p.dailyDate === today;

  const onGift = () => {
    const n = claimGift();
    if (n > 0) {
      setGift(n);
      setShowConfetti(true);
      sfx("win");
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <Shell>
      <TopBar title={T.myWorld} back={null} />
      {showConfetti && <Confetti />}
      <div className="px-4 pt-1">
        <Helper text={HELPER_LINES.map} size="sm" />
      </div>

      {/* Ежедневное задание и подарок */}
      <div className="px-4 mt-3 grid grid-cols-2 gap-3">
        <Link
          href="/play/daily"
          onClick={() => sfx("tap")}
          className={`press soft rounded-3xl p-4 flex flex-col gap-1 ${dailyDone ? "bg-[#E7F6E9]" : "bg-gradient-to-br from-[#F5A524] to-[#D9633B] text-white"}`}
        >
          <span className="text-4xl">{dailyDone ? "✅" : "🎯"}</span>
          <span className="font-black text-lg leading-tight">{T.daily}</span>
          <span className="text-sm font-bold opacity-80">{dailyDone ? T.done : "3–5 минот"}</span>
        </Link>
        <button
          type="button"
          onClick={onGift}
          disabled={!giftReady}
          className={`press soft rounded-3xl p-4 flex flex-col gap-1 text-left ${giftReady ? "bg-gradient-to-br from-[#A855F7] to-[#EC4899] text-white anim-pulse-ring" : "bg-[#f3ece0]"}`}
        >
          <span className={`text-4xl ${giftReady ? "anim-wiggle" : ""}`}>{giftReady ? "🎁" : "📦"}</span>
          <span className="font-black text-lg leading-tight">{T.gift}</span>
          <span className="text-sm font-bold opacity-80">{gift ? `+${gift} ⭐` : giftReady ? T.today : T.done}</span>
        </button>
      </div>

      {/* Карта */}
      <div className="relative mx-4 mt-4 rounded-[32px] overflow-hidden soft" style={{ aspectRatio: "3 / 5" }}>
        <Image src="/img/map.jpg" alt="" fill sizes="(max-width: 640px) 100vw, 576px" className="object-cover" priority />
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points={TOPICS.map((t) => `${t.map.x},${t.map.y}`).join(" ")}
            fill="none"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
            strokeDasharray="2 2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {TOPICS.map((t, i) => {
          const unlocked = isUnlocked(p, t.unlockStars);
          const total = CARDS.filter((c) => c.topicId === t.id).length;
          const learned = CARDS.filter((c) => c.topicId === t.id && p.learned.includes(c.id)).length;
          const done = total > 0 && learned === total;
          const inner = (
            <>
              <span
                className={`grid place-items-center rounded-full text-3xl sm:text-4xl w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] border-4 border-white ${unlocked ? "bg-gradient-to-br " + t.gradient : "bg-[#cfc6b8]"} ${unlocked && !done ? "anim-float" : ""}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {unlocked ? t.emoji : "🔒"}
              </span>
              <span className="mt-1 rounded-full bg-white/95 px-2.5 py-0.5 text-[13px] sm:text-sm font-black leading-tight text-center max-w-[120px] soft">
                {unlocked ? t.che : `${t.unlockStars} ⭐`}
              </span>
              {unlocked && total > 0 && (
                <span className="mt-0.5 rounded-full bg-[#2a1f14]/70 text-white px-2 text-[11px] font-black">
                  {done ? "🏅" : `${learned}/${total}`}
                </span>
              )}
            </>
          );
          const cls = "press absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2";
          const style = { left: `${t.map.x}%`, top: `${t.map.y}%` };
          return unlocked ? (
            <Link key={t.id} href={`/location/${t.id}`} className={cls} style={style} onClick={() => sfx("tap")} aria-label={t.che}>
              {inner}
            </Link>
          ) : (
            <button
              key={t.id}
              type="button"
              className={cls}
              style={style}
              aria-label={T.locked}
              onClick={() => {
                sfx("error");
              }}
            >
              {inner}
            </button>
          );
        })}
      </div>

      <div className="px-4 mt-4">
        <Btn href="/games" color="sky" size="lg" className="w-full">
          🎮 {T.games}
        </Btn>
      </div>
    </Shell>
  );
}
