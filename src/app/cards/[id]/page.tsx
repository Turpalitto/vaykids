"use client";

import Link from "next/link";
import Image from "next/image";
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
  const immersive = useStore((s) => s.settings.immersive);
  const markLearned = useStore((s) => s.markLearned);
  const toggleFavorite = useStore((s) => s.toggleFavorite);
  const markSeen = useStore((s) => s.markSeen);
  const [flipped, setFlipped] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

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
        <div className="flip-scene max-w-[390px] mx-auto">
          <button
            type="button"
            aria-label={card.che}
            onClick={() => {
              sfx("flip");
              setFlipped((f) => !f);
            }}
            className={`flip-card w-full ${flipped ? "flipped" : ""}`}
            style={{ aspectRatio: "3 / 4.35" }}
          >
            {/* Лицо (Front) */}
            <div className="flip-face soft rounded-[38px] bg-[#FFFDF8] p-4 flex flex-col justify-between shadow-[0_22px_50px_-10px_rgba(245,165,36,0.22),0_4px_16px_rgba(0,0,0,0.06)] border-[4px] border-[#FED98B]">
              {/* Окно иллюстрации */}
              <div className="relative w-full aspect-square rounded-[28px] overflow-hidden shadow-[0_8px_24px_-4px_rgba(100,60,20,0.12),inset_0_2px_8px_rgba(0,0,0,0.04)] bg-gradient-to-b from-amber-50/60 to-orange-50/40 shrink-0 border border-amber-100/80">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.che}
                    fill
                    sizes="(max-width: 640px) 90vw, 400px"
                    className="object-cover select-none"
                    priority
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${topic?.gradient ?? "from-amber-200 to-orange-300"} relative grid place-items-center p-6`}>
                    <div className="absolute inset-0 ornament opacity-15" />
                    <CardArt card={card} className="w-full h-full" emojiSize="text-[7rem] sm:text-[9rem]" />
                  </div>
                )}
                {/* Мягкий глянцевый блик */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent pointer-events-none rounded-[28px]" />

                {/* Интерактивная кнопка звука в левом углу */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    sfx("tap");
                  }}
                  className="absolute top-3 left-3 flex items-center justify-center w-9 h-9 bg-white/90 backdrop-blur-md rounded-full text-base shadow-sm border border-white/80 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  title="Аудио"
                >
                  🔊
                </div>

                {/* Звёздочки уровня в правом углу */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-black text-[#876241] shadow-sm border border-white/80">
                  <span>⭐</span>
                  <span className="text-[11px] font-black">{card.level}</span>
                </div>

                {/* Эмодзи карточки в левом нижнем углу */}
                <div className="absolute bottom-2.5 left-3 text-2xl drop-shadow-sm select-none">
                  {card.emoji}
                </div>
              </div>

              {/* Плашка со словом */}
              <div className="flex-1 w-full flex flex-col items-center justify-center py-2 text-center">
                <p className="text-4xl sm:text-5xl font-black leading-tight text-[#241408] tracking-tight">{card.stress || card.che}</p>
                {immersive ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      sfx("tap");
                      setShowMeaning((v) => !v);
                    }}
                    className="mt-1.5 text-sm font-black text-[#876241] bg-amber-50 px-4 py-1 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    {showMeaning ? card.ru : "👁️ Таржам гайта"}
                  </button>
                ) : (
                  <p className="mt-1 text-2xl font-extrabold text-[#966332]">{card.ru}</p>
                )}
                <div className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#F5A524] to-[#FF8C00] text-white font-black text-xs sm:text-sm shadow-[0_4px_14px_rgba(245,165,36,0.38),0_2px_0_#D47A0E] hover:brightness-105 active:translate-y-0.5 active:shadow-[0_2px_6px_rgba(245,165,36,0.38)] transition-all select-none">
                  <span className="text-sm">🔄</span> <span>Оборот гайта</span>
                </div>
              </div>
            </div>

            {/* Оборот (Back) — 100% совпадение со словом */}
            <div className="flip-face flip-back soft rounded-[38px] bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EE] to-[#FFF4E4] border-[4px] border-[#FED98B] p-4 sm:p-5 flex flex-col justify-between shadow-[0_22px_50px_-10px_rgba(245,165,36,0.22)] text-[#2B1810]">
              {/* Заголовок оборота: точное слово и перевод */}
              <div className="w-full text-center">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-black uppercase tracking-wider mb-1">
                  📖 Оборот: дешан маьӀна
                </span>
                <p className="text-3xl sm:text-4xl font-black text-[#241408] tracking-tight">{card.stress || card.che}</p>
                <p className="text-lg sm:text-xl font-extrabold text-[#966332]">«{card.ru}»</p>
              </div>

              {/* Буквы слова (Алипба) */}
              <div className="w-full text-center my-1">
                <p className="text-[11px] font-black text-[#A67E52] uppercase tracking-wider mb-1.5">🔤 Дешан букваш:</p>
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {graphemes(card.che).map((g, i) => (
                    <span
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        sfx("tap");
                      }}
                      className="grid place-items-center min-w-[44px] h-[50px] px-2.5 rounded-2xl bg-white text-[#241408] text-2xl sm:text-3xl font-black shadow-[0_4px_0_#E8CFA6,0_6px_12px_rgba(0,0,0,0.06)] border border-[#F2E1C4] active:translate-y-1 active:shadow-[0_1px_0_#E8CFA6] transition-all cursor-pointer select-none"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* Мини-иллюстрация в золотом кольце */}
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.12),0_0_0_3px_#F5A524] bg-white shrink-0 my-1 grid place-items-center">
                {card.image ? (
                  <Image src={card.image} alt={card.che} fill sizes="80px" className="object-cover" />
                ) : (
                  <span className="text-4xl">{card.emoji}</span>
                )}
              </div>

              {/* Пример предложения к ЭТОМУ слову */}
              <div className="w-full rounded-2xl bg-white/85 p-3 text-center border border-[#F0DFCA] shadow-xs">
                {card.example ? (
                  <>
                    <p className="text-base font-black text-[#241408]">{card.example.che}</p>
                    {(!immersive || showMeaning) && <p className="mt-0.5 text-xs sm:text-sm text-[#966332] font-semibold">{card.example.ru}</p>}
                  </>
                ) : (
                  <>
                    <p className="text-base font-black text-[#241408]">
                      ХӀара <span className="text-[#D47A0E] font-black">{card.che}</span> ду.
                    </p>
                    <p className="mt-0.5 text-xs text-[#966332] font-semibold">
                      Это {card.ru}.
                    </p>
                  </>
                )}
              </div>

              {/* Нижняя информационная полоска */}
              <div className="flex items-center justify-between px-2 text-xs font-extrabold text-[#A67E52]">
                <span>📁 Тема: {topic?.che}</span>
                <span className="text-[#D47A0E]">🔄 Юхадерза</span>
                <span>{"⭐".repeat(card.level)}</span>
              </div>
            </div>
          </button>
        </div>

        {/* Действия */}
        <div className="mt-4 grid grid-cols-2 gap-3 max-w-[390px] mx-auto">
          <IconBtn label={T.favorite} onClick={() => { toggleFavorite(card.id); sfx(isFav ? "tap" : "star"); }} active={isFav}>
            {isFav ? "💛" : "🤍"}
          </IconBtn>
          <IconBtn label={T.learned} onClick={learn} active={isLearned}>
            {isLearned ? "✅" : "☑️"}
          </IconBtn>
        </div>

        {/* Навигация по теме */}
        <div className="mt-4 flex items-center justify-between gap-3 max-w-[390px] mx-auto">
          <Link href={`/cards/${prev.id}`} onClick={() => setFlipped(false)} className="press soft rounded-3xl bg-white px-5 min-h-[56px] flex items-center gap-2 font-black text-xl" aria-label={prev.che}>
            ← <span className="text-3xl">{prev.emoji}</span>
          </Link>
          <span className="font-black text-[#8b7a64]">{idx + 1}/{siblings.length}</span>
          <Link href={`/cards/${next.id}`} onClick={() => setFlipped(false)} className="press soft rounded-3xl bg-white px-5 min-h-[56px] flex items-center gap-2 font-black text-xl" aria-label={next.che}>
            <span className="text-3xl">{next.emoji}</span> →
          </Link>
        </div>
      </div>
    </Shell>
  );
}
