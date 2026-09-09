"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Btn, Helper, Shell } from "@/components/ui";
import { T, HELPER_LINES } from "@/data/ui";
import { useStore, type AgeGroup } from "@/lib/store";
import { sfx } from "@/lib/audio";

const AGES: { id: AgeGroup; label: string; emoji: string; desc: string }[] = [
  { id: "small", label: T.small, emoji: "🐣", desc: T.easy },
  { id: "middle", label: T.middle, emoji: "🦊", desc: T.medium },
  { id: "big", label: T.big, emoji: "🦅", desc: T.hard },
];

const AVATARS = ["🦊", "🐻", "🐰", "🦌", "🐺", "🦅", "🐱", "🐴", "🦁", "🐼", "🐸", "🦋"];

export default function Start() {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState<AgeGroup | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("🦊");
  const createProfile = useStore((s) => s.createProfile);
  const router = useRouter();

  const finish = () => {
    createProfile({ name: name.trim() || avatar, avatar, ageGroup: age ?? "small" });
    sfx("win");
    router.replace("/map");
  };

  return (
    <Shell nav={false} requireProfile={false}>
      <main className="px-5 pt-8 pb-10 flex flex-col min-h-dvh">
        <div className="flex items-center gap-2 mb-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-3 flex-1 rounded-full transition-all ${i <= step ? "bg-[#F5A524]" : "bg-[#efe4d0]"}`} />
          ))}
        </div>

        {step === 0 && (
          <section className="anim-fadeUp flex-1 flex flex-col">
            <Helper text={HELPER_LINES.pickAge} />
            <h2 className="mt-8 text-3xl font-black">{T.howOld}</h2>
            <div className="mt-5 grid gap-4">
              {AGES.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    sfx("tap");
                    setAge(a.id);
                  }}
                  className={`press soft flex items-center gap-5 rounded-3xl bg-white p-5 text-left border-4 ${age === a.id ? "border-[#F5A524]" : "border-transparent"}`}
                >
                  <span className="text-6xl">{a.emoji}</span>
                  <span>
                    <span className="block text-3xl font-black">{a.label}</span>
                    <span className="block text-lg font-bold text-[#8b7a64]">{a.desc}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <Btn size="xl" className="w-full" disabled={!age} onClick={() => setStep(1)}>
                {T.next} →
              </Btn>
            </div>
          </section>
        )}

        {step === 1 && (
          <section className="anim-fadeUp flex-1 flex flex-col">
            <Helper text={HELPER_LINES.pickName} />
            <h2 className="mt-8 text-3xl font-black">{T.yourName}</h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              autoFocus
              className="mt-5 w-full rounded-3xl bg-white soft px-6 py-5 text-3xl font-black outline-none focus:ring-4 ring-[#F5A524]"
              placeholder="…"
              aria-label={T.yourName}
            />
            <div className="mt-auto pt-6 flex gap-3">
              <Btn size="lg" color="white" onClick={() => setStep(0)}>
                ←
              </Btn>
              <Btn size="xl" className="flex-1" onClick={() => setStep(2)}>
                {T.next} →
              </Btn>
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="anim-fadeUp flex-1 flex flex-col">
            <Helper text={T.chooseFriend} mood="cheer" />
            <div className="mt-6 flex items-center gap-4 rounded-3xl bg-white soft p-4">
              <span className="text-6xl anim-bounceIn" key={avatar}>{avatar}</span>
              <span className="text-3xl font-black truncate">{name || "…"}</span>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    sfx("flip");
                    setAvatar(a);
                  }}
                  className={`press soft aspect-square rounded-3xl bg-white text-5xl grid place-items-center border-4 ${avatar === a ? "border-[#F5A524]" : "border-transparent"}`}
                  aria-label={a}
                >
                  {a}
                </button>
              ))}
            </div>
            <div className="mt-auto pt-6 flex gap-3">
              <Btn size="lg" color="white" onClick={() => setStep(1)}>
                ←
              </Btn>
              <Btn size="xl" color="meadow" className="flex-1" onClick={finish}>
                🚀 {T.play}
              </Btn>
            </div>
          </section>
        )}
      </main>
    </Shell>
  );
}
