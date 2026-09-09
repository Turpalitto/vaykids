"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Shell, TopBar, CardArt, IconBtn, Empty, Loading, Confetti } from "@/components/ui";
import { T } from "@/data/ui";
import { topicById } from "@/data/words";
import { useContent, graphemes } from "@/lib/useContent";
import { useStore, emptyProgress } from "@/lib/store";
import { sfx } from "@/lib/audio";

export default function CardPage() {
  const { id } = useParams<{ id: string }>();
  const { cards, loading } = useContent();
  const card = cards.find((c) => c.id === id);
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const markLearned = useStore((s) => s.markLearned);
  const toggleFavorite = useStore((s) => s.toggleFavorite);
  const markSeen = useStore((s) => s.markSeen);
  const [flipped, setFlipped] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (card) {
      markSeen(card.id);
    }
  }, [card?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading && !card) return <Shell><TopBar /><Loading /></Shell>;
  if (!card) return <Shell><TopBar /><Empty emoji="🃏" /></Shell>;

  const topic = topicById(card.topicId);
  const isLearned = p.learned.includes(card.id);
  const isFav = p.favorites.includes(card.id);
  const siblings = cards.filter((c) => c.topicId === card.topicId);
  const idx = siblings.findIndex((c) => c.id === card.id);
  const prev = siblings[(idx - 1 + siblings.length) % siblings.length];
  const next = siblings[(idx + 1) % siblings.length];

  const learn = () => {
    if (!isLearned) {
      sfx("star");
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 2500);
    }
    markLearned(card.id);
  };

  return (
    <Shell>
      <TopBar title={topic?.che} back={`/location/${card.topicId}`} />
      {celebrate && <Confetti count={30} />}

      <div className="px-4">
        {/* Переворачиваемая карточка */}
        <div className="flip-scene">
          <button
            type="button"
            aria-label={card.che}
            onClick={() => {
              sfx("flip");
              setFlipped((f) => !f);
            }}
            className={`flip-card w-full aspect-[4/5] ${flipped ? "flipped" : ""}`}
          >
            {/* Лицо */}
            <div className={`flip-face soft rounded-[36px] bg-white overflow-hidden flex flex-col`}>
              <div className={`flex-1 bg-gradient-to-br ${topic?.gradient ?? "from-amber-200 to-orange-300"} relative`}>
                <div className="absolute inset-0 ornament opacity-30" />
                <div className="absolute inset-0 grid place-items-center anim-pop">
                  <CardArt card={card} className="w-[70%] aspect-square rounded-[32px] bg-white/60 backdrop-blur" emojiSize="text-[7rem] sm:text-[9rem]" />
                </div>
              </div>
              <div className="p-5 text-center">
                <p className="text-4xl sm:text-5xl font-black leading-tight">{card.stress || card.che}</p>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#8b7a64]">{card.ru}</p>
                <p className="mt-1 text-[#8b7a64] font-bold">🔄</p>
              </div>
            </div>
            {/* Оборот: буквы и пример */}
            <div className="flip-face flip-back soft rounded-[36px] bg-[#2a1f14] text-white p-6 flex flex-col items-center justify-center gap-5">
              <div className="flex flex-wrap justify-center gap-2">
                {graphemes(card.che).map((g, i) => (
                  <span key={i} className="grid place-items-center min-w-[52px] h-[60px] px-2 rounded-2xl bg-white text-[#2a1f14] text-3xl font-black anim-pop" style={{ animationDelay: `${i * 0.05}s` }}>
                    {g}
                  </span>
                ))}
              </div>
              <span className="text-7xl">{card.emoji}</span>
              {card.example && (
                <div className="rounded-3xl bg-white/15 px-5 py-3 text-center text-xl font-black">
                  <p>{card.example.che}</p>
                  <p className="mt-1 text-white/70">{card.example.ru}</p>
                </div>
              )}
              <span className="text-white/60 font-bold">{"●".repeat(card.level)} · {topic?.che}</span>
            </div>
          </button>
        </div>

        {/* Действия */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <IconBtn label={T.favorite} onClick={() => { toggleFavorite(card.id); sfx(isFav ? "tap" : "star"); }} active={isFav}>
            {isFav ? "💛" : "🤍"}
          </IconBtn>
          <IconBtn label={T.learned} onClick={learn} active={isLearned}>
            {isLearned ? "✅" : "☑️"}
          </IconBtn>
        </div>

        {/* Навигация по теме */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <Link href={`/cards/${prev.id}`} onClick={() => setFlipped(false)} className="press soft rounded-3xl bg-white px-5 min-h-[60px] flex items-center gap-2 font-black text-xl" aria-label={prev.che}>
            ← <span className="text-3xl">{prev.emoji}</span>
          </Link>
          <span className="font-black text-[#8b7a64]">{idx + 1}/{siblings.length}</span>
          <Link href={`/cards/${next.id}`} onClick={() => setFlipped(false)} className="press soft rounded-3xl bg-white px-5 min-h-[60px] flex items-center gap-2 font-black text-xl" aria-label={next.che}>
            <span className="text-3xl">{next.emoji}</span> →
          </Link>
        </div>
      </div>
    </Shell>
  );
}
