"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Shell, TopBar, CardArt, Progress, Loading, ErrorState, Empty, Helper } from "@/components/ui";
import { T, HELPER_LINES } from "@/data/ui";
import { topicById, SCENES } from "@/data/words";
import { useContent } from "@/lib/useContent";
import { useStore, emptyProgress } from "@/lib/store";
import { sfx } from "@/lib/audio";

const GAMES: { id: string; emoji: string; label: string; color: string }[] = [
  { id: "memory", emoji: "🧠", label: T.memory, color: "from-purple-400 to-fuchsia-500" },
  { id: "what", emoji: "❓", label: T.whatIsIt, color: "from-sky-400 to-blue-500" },
  { id: "word", emoji: "🔤", label: T.buildWord, color: "from-amber-400 to-orange-500" },
  { id: "find", emoji: "🔎", label: T.findInWorld, color: "from-lime-400 to-green-500" },
];

export default function LocationPage() {
  const { id } = useParams<{ id: string }>();
  const topic = topicById(id);
  const { cards, loading, error, retry } = useContent();
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const markSeen = useStore((s) => s.markSeen);

  if (!topic) return <Shell><TopBar /><Empty emoji="🗺️" /></Shell>;

  const list = cards.filter((c) => c.topicId === topic.id);
  const learned = list.filter((c) => p.learned.includes(c.id)).length;
  const hasScene = SCENES.some((s) => s.topicIds.includes(topic.id));

  return (
    <Shell>
      <TopBar title={topic.che} />
      <section className={`relative mx-4 rounded-[32px] overflow-hidden soft bg-gradient-to-br ${topic.gradient} min-h-[190px]`}>
        {topic.image && <Image src={topic.image} alt="" fill sizes="576px" className="object-cover" priority />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative p-5 flex flex-col justify-end min-h-[190px] text-white">
          <span className="text-6xl drop-shadow">{topic.emoji}</span>
          <h2 className="text-3xl font-black drop-shadow">{topic.che}</h2>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1"><Progress value={learned} max={list.length} color="#fff" /></div>
            <span className="font-black">{learned}/{list.length}</span>
          </div>
        </div>
      </section>

      <div className="px-4 mt-4">
        <Helper text={HELPER_LINES.cards} size="sm" />
      </div>

      {/* Игры для этой темы */}
      <div className="mt-4 px-4 flex gap-3 overflow-x-auto no-scrollbar snap-x">
        {GAMES.filter((g) => g.id !== "find" || hasScene).map((g) => (
          <Link
            key={g.id}
            href={`/play/${g.id}?topic=${topic.id}`}
            onClick={() => sfx("tap")}
            className={`press soft snap-start shrink-0 w-[132px] rounded-3xl bg-gradient-to-br ${g.color} text-white p-4 flex flex-col gap-1`}
          >
            <span className="text-4xl">{g.emoji}</span>
            <span className="font-black leading-tight">{g.label}</span>
          </Link>
        ))}
      </div>

      {/* Карточки темы */}
      <div className="px-4 mt-5">
        <h3 className="text-2xl font-black mb-3">{T.words}</h3>
        {loading && <Loading />}
        {!loading && error && list.length === 0 && <ErrorState onRetry={retry} />}
        {!loading && list.length === 0 && !error && <Empty />}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {list.map((c, i) => {
            const isLearned = p.learned.includes(c.id);
            return (
              <Link
                key={c.id}
                href={`/cards/${c.id}`}
                onClick={() => {
                  sfx("flip");
                  markSeen(c.id);
                }}
                className="press soft relative rounded-3xl bg-white p-3 flex flex-col items-center anim-fadeUp"
                style={{ animationDelay: `${Math.min(i, 12) * 0.04}s` }}
              >
                <CardArt card={c} className="w-full aspect-square rounded-2xl bg-[#FFF3DD]" emojiSize="text-6xl" />
                <span className="mt-2 text-lg font-black text-center leading-tight">{c.che}</span>
                <span className="mt-1 text-sm font-extrabold text-[#8b7a64] text-center leading-tight">{c.ru}</span>
                {isLearned && <span className="absolute top-2 right-2 text-2xl">✅</span>}
                {p.favorites.includes(c.id) && <span className="absolute top-2 left-2 text-2xl">💛</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
