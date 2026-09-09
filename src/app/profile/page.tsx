"use client";

import { useRouter } from "next/navigation";
import { Shell, TopBar, Btn, Progress } from "@/components/ui";
import { T } from "@/data/ui";
import { CARDS, TOPICS } from "@/data/words";
import { useStore, emptyProgress, levelFromXp } from "@/lib/store";
import { sfx } from "@/lib/audio";

export default function ProfilePage() {
  const profiles = useStore((s) => s.profiles);
  const activeId = useStore((s) => s.activeId);
  const setActive = useStore((s) => s.setActive);
  const deleteProfile = useStore((s) => s.deleteProfile);
  const progressAll = useStore((s) => s.progress);
  const router = useRouter();
  const me = profiles.find((x) => x.id === activeId);
  const p = (activeId && progressAll[activeId]) || emptyProgress();

  const stats = [
    { e: "⭐", v: p.stars, l: T.stars },
    { e: "📚", v: p.learned.length, l: T.learned },
    { e: "🔥", v: p.streakCount, l: T.streak },
    { e: "🏅", v: p.medals.length, l: T.medals },
  ];

  return (
    <Shell>
      <TopBar title={T.profile} back={null} />
      {me && (
        <div className="mx-4 soft rounded-[32px] bg-gradient-to-br from-[#2B6CB0] to-[#6366F1] text-white p-6 flex items-center gap-5">
          <span className="grid place-items-center w-24 h-24 rounded-full bg-white text-6xl anim-float">{me.avatar}</span>
          <div>
            <p className="text-3xl font-black">{me.name}</p>
            <p className="font-black opacity-80">{T.level} {levelFromXp(p.xp)} · {me.ageGroup === "small" ? T.small : me.ageGroup === "middle" ? T.middle : T.big}</p>
          </div>
        </div>
      )}

      <div className="px-4 mt-4 grid grid-cols-4 gap-2">
        {stats.map((s) => (
          <div key={s.l} className="soft rounded-3xl bg-white p-3 flex flex-col items-center">
            <span className="text-3xl">{s.e}</span>
            <span className="text-2xl font-black">{s.v}</span>
            <span className="text-xs font-black text-[#8b7a64] text-center">{s.l}</span>
          </div>
        ))}
      </div>

      {/* Альбом по темам */}
      <div className="px-4 mt-5">
        <h3 className="text-2xl font-black mb-3">{T.topics}</h3>
        <div className="flex flex-col gap-2">
          {TOPICS.map((t) => {
            const all = CARDS.filter((c) => c.topicId === t.id).length;
            const l = CARDS.filter((c) => c.topicId === t.id && p.learned.includes(c.id)).length;
            return (
              <button key={t.id} type="button" onClick={() => { sfx("tap"); router.push(`/location/${t.id}`); }} className="press soft rounded-3xl bg-white p-3 flex items-center gap-3 text-left">
                <span className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} text-3xl`}>{t.emoji}</span>
                <div className="flex-1">
                  <p className="font-black text-lg leading-tight">{t.che}</p>
                  <Progress value={l} max={all} color={t.accent} />
                </div>
                <span className="font-black text-[#8b7a64]">{l}/{all}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Профили */}
      <div className="px-4 mt-6">
        <div className="flex flex-wrap gap-2">
          {profiles.map((pr) => (
            <button key={pr.id} type="button" onClick={() => { sfx("tap"); setActive(pr.id); }} className={`press soft rounded-full min-h-[56px] pl-2 pr-4 flex items-center gap-2 font-black ${pr.id === activeId ? "bg-[#F5A524]" : "bg-white"}`}>
              <span className="text-3xl">{pr.avatar}</span>{pr.name}
            </button>
          ))}
          <Btn color="white" href="/start">➕ {T.addProfile}</Btn>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Btn color="sky" href="/parents">👨‍👩‍👧 {T.parents}</Btn>
          <Btn color="white" href="/settings">⚙️ {T.settings}</Btn>
        </div>
        {me && profiles.length > 1 && (
          <button type="button" onClick={() => { sfx("tap"); deleteProfile(me.id); }} className="mt-4 w-full min-h-[48px] font-black text-[#8b7a64]">🗑️ {T.deleteProfile}</button>
        )}
      </div>
    </Shell>
  );
}
