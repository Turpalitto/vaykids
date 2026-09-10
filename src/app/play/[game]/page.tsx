"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { Shell, IconBtn, Loading, Empty, Btn, Confetti, Helper } from "@/components/ui";
import { BuildSentence, BuildWord, FindInWorld, Memory, WhatIsIt, type GameResult } from "@/components/games";
import { T, HELPER_LINES } from "@/data/ui";
import { SCENES, SENTENCES, TOPICS, cardById } from "@/data/words";
import type { GameId } from "@/data/types";
import { useContent } from "@/lib/useContent";
import { useStore, emptyProgress, isUnlocked, MEDALS } from "@/lib/store";
import { sfx } from "@/lib/audio";

const TITLES: Record<GameId, string> = {
  memory: T.memory, what: T.whatIsIt, word: T.buildWord, find: T.findInWorld,
  sentence: T.buildSentence, daily: T.daily,
};

const DAILY_QUEUE: { game: GameId; rounds: number }[] = [
  { game: "what", rounds: 3 },
  { game: "word", rounds: 2 },
  { game: "sentence", rounds: 1 },
  { game: "memory", rounds: 1 },
];

// The initial content pack contains four illustrated backgrounds. Missing topic
// backgrounds use a local fallback instead of producing a broken game screen.
const AVAILABLE_SCENE_IMAGES = new Set(["/img/scene-home.jpg", "/img/scene-nature.jpg", "/img/scene-school.jpg", "/img/scene-village.jpg"]);
const FALLBACK_SCENE_IMAGE = "/img/scene-village.jpg";

function PlayInner() {
  const { game } = useParams<{ game: GameId }>();
  const sp = useSearchParams();
  const topicId = sp.get("topic");
  const router = useRouter();
  const { cards, loading } = useContent();
  const profile = useStore((s) => s.profiles.find((p) => p.id === s.activeId));
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();
  const finishGame = useStore((s) => s.finishGame);
  const lastResult = useStore((s) => s.lastResult);

  const [phase, setPhase] = useState<"play" | "result">("play");
  const [seed, setSeed] = useState(0);
  const [qi, setQi] = useState(0);
  const [acc, setAcc] = useState<GameResult>({ correct: 0, total: 0, cardIds: [] });

  const age = profile?.ageGroup ?? "small";
  const cfg = age === "small" ? { rounds: 4, options: 3, pairs: 4 } : age === "middle" ? { rounds: 6, options: 4, pairs: 6 } : { rounds: 8, options: 4, pairs: 8 };

  const unlockedTopics = TOPICS.filter((t) => isUnlocked(p, t.unlockStars)).map((t) => t.id);
  const unlockedKey = unlockedTopics.join(",");
  const pool = useMemo(() => cards.filter((c) => unlockedTopics.includes(c.topicId)), [cards, unlockedKey]); // eslint-disable-line react-hooks/exhaustive-deps
  const topicUnlocked = !topicId || unlockedTopics.includes(topicId);
  const topicCards = useMemo(() => (topicId && topicUnlocked ? cards.filter((c) => c.topicId === topicId) : topicId ? [] : pool), [cards, topicId, topicUnlocked, pool]);
  const distractors = topicCards.length >= 6 ? topicCards : pool;
  const scene = useMemo(() => SCENES.find((s) => topicId && s.topicIds.includes(topicId)) ?? SCENES[seed % SCENES.length], [topicId, seed]);

  const current: GameId = game === "daily" ? DAILY_QUEUE[qi]?.game ?? "what" : game;
  const rounds = game === "daily" ? DAILY_QUEUE[qi]?.rounds ?? 3 : cfg.rounds;

  const onFinish = (r: GameResult) => {
    const merged = { correct: acc.correct + r.correct, total: acc.total + r.total, cardIds: [...acc.cardIds, ...r.cardIds] };
    if (game === "daily" && qi + 1 < DAILY_QUEUE.length) {
      setAcc(merged);
      setQi(qi + 1);
      sfx("star");
      return;
    }
    finishGame({ game, ...merged });
    setPhase("result");
    sfx("win");
  };

  const again = () => {
    setAcc({ correct: 0, total: 0, cardIds: [] });
    setQi(0);
    setSeed((s) => s + 1);
    setPhase("play");
  };

  if (loading) return <Loading />;
  if (!TITLES[game]) return <Empty emoji="🎮" />;
  if (current === "sentence" && SENTENCES.length === 0) return <Empty emoji="🧩" text={T.error} />;
  if (topicCards.length < 3 && current !== "sentence") return <Empty emoji="🔒" text={topicId && !topicUnlocked ? T.needStars : T.empty} />;

  if (phase === "result" && lastResult) {
    const pct = lastResult.total ? lastResult.correct / lastResult.total : 1;
    const starsRow = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : 1;
    const newAnimal = lastResult.newAnimal ? cardById(lastResult.newAnimal) : undefined;
    return (
      <div className="px-5 pt-6 pb-10 flex flex-col items-center text-center">
        <Confetti count={starsRow * 20} />
        <Helper text={HELPER_LINES.result} mood="cheer" />
        <h2 className="mt-6 text-4xl font-black">{T.result}</h2>
        <div className="mt-4 flex gap-2 text-6xl">
          {[1, 2, 3].map((k) => (
            <span key={k} className={`anim-bounceIn ${k <= starsRow ? "" : "grayscale opacity-40"}`} style={{ animationDelay: `${k * 0.2}s` }}>⭐</span>
          ))}
        </div>
        <div className="mt-5 soft rounded-[32px] bg-white px-8 py-5 w-full">
          <p className="text-5xl font-black text-[#3FA34D]">+{lastResult.stars} ⭐</p>
          <p className="mt-1 text-xl font-black text-[#8b7a64]">{lastResult.correct} / {lastResult.total} ✅</p>
        </div>
        {newAnimal && (
          <div className="mt-4 soft rounded-[32px] bg-gradient-to-br from-lime-300 to-green-500 text-white px-6 py-4 w-full anim-pop flex items-center gap-4">
            <span className="text-6xl">{newAnimal.emoji}</span>
            <span className="text-left"><span className="block text-sm font-black opacity-80">{T.collected}</span><span className="block text-3xl font-black">{newAnimal.che}</span></span>
          </div>
        )}
        {lastResult.newMedals.map((m) => {
          const md = MEDALS.find((x) => x.id === m);
          return md ? (
            <div key={m} className="mt-3 soft rounded-[32px] bg-gradient-to-br from-[#F5A524] to-[#D9633B] text-white px-6 py-4 w-full anim-pop flex items-center gap-4">
              <span className="text-6xl">{md.emoji}</span>
              <span className="text-left"><span className="block text-sm font-black opacity-80">{T.medals}</span><span className="block text-3xl font-black">{md.che}</span></span>
            </div>
          ) : null;
        })}
        <div className="mt-8 grid grid-cols-2 gap-3 w-full">
          <Btn size="lg" color="white" onClick={again}>🔁 {T.again}</Btn>
          <Btn size="lg" color="meadow" onClick={() => router.push(topicId ? `/location/${topicId}` : "/map")}>🗺️ {T.toMap}</Btn>
        </div>
      </div>
    );
  }

  const common = { cards: topicCards, pool: distractors, rounds, options: cfg.options, onFinish };
  const key = `${current}-${seed}-${qi}`;
  const currentScene = current === "find" && scene
    ? AVAILABLE_SCENE_IMAGES.has(scene.image) ? scene : { ...scene, image: FALLBACK_SCENE_IMAGE }
    : scene;
  return (
    <>
      <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-[var(--bg)]/85 backdrop-blur">
        <IconBtn label={T.exit} onClick={() => router.push(topicId ? `/location/${topicId}` : "/games")}>✖️</IconBtn>
        <h1 className="flex-1 text-2xl font-black truncate">{TITLES[game]}{game === "daily" ? ` · ${qi + 1}/${DAILY_QUEUE.length}` : ""}</h1>
      </header>
      {current === "what" && <WhatIsIt key={key} {...common} />}
      {current === "memory" && <Memory key={key} {...common} rounds={cfg.pairs} />}
      {current === "word" && <BuildWord key={key} {...common} options={age === "big" ? 5 : 3} />}
      {current === "sentence" && <BuildSentence key={key} sentences={SENTENCES} rounds={Math.min(rounds, SENTENCES.length)} onFinish={onFinish} />}
      {current === "find" && (currentScene
        ? <FindInWorld key={key} {...common} cards={cards} rounds={Math.min(6, cfg.rounds + 1)} scene={currentScene} />
        : <Empty emoji="🖼️" text={T.error} />)}
    </>
  );
}

export default function PlayPage() {
  return (
    <Shell nav={false}>
      <Suspense fallback={<Loading />}>
        <PlayInner />
      </Suspense>
    </Shell>
  );
}
