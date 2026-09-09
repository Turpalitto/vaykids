"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Btn, Helper } from "@/components/ui";
import { T, HELPER_LINES } from "@/data/ui";
import { useStore, useHydrate } from "@/lib/store";

export default function Welcome() {
  const hydrated = useStore((s) => s.hydrated);
  const activeId = useStore((s) => s.activeId);
  const profiles = useStore((s) => s.profiles);
  const router = useRouter();
  useHydrate();

  useEffect(() => {
    if (hydrated && activeId && profiles.length) router.replace("/map");
  }, [hydrated, activeId, profiles.length, router]);

  return (
    <main className="relative min-h-dvh overflow-hidden">
      <Image src="/img/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fff8ec]" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-xl flex-col justify-end px-6 pb-10 pt-16">
        <div className="anim-fadeUp">
          <p className="inline-block rounded-full bg-white/80 px-4 py-1 text-sm font-black tracking-wider text-[#8b7a64] backdrop-blur">
            🏔️ {T.myWorld}
          </p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-black leading-[1.05] drop-shadow-sm text-[#2a1f14]">
            Нохчийн
            <br />
            <span className="text-[#D9633B]">мотт</span>
          </h1>
        </div>
        <div className="mt-6 anim-fadeUp" style={{ animationDelay: "0.15s" }}>
          <Helper text={HELPER_LINES.hello} size="lg" />
        </div>
        <div className="mt-8 flex flex-col gap-3 anim-fadeUp" style={{ animationDelay: "0.3s" }}>
          <Btn
            size="xl"
            href="/start"
            className="w-full"
          >
            ▶️ {T.start}
          </Btn>
          {profiles.length > 0 && (
            <Btn size="lg" color="white" href="/profile" className="w-full">
              🙂 {T.profile}
            </Btn>
          )}
          <button
            type="button"
            onClick={() => router.push("/settings")}
            className="mx-auto mt-2 min-h-[48px] rounded-full px-4 text-base font-extrabold text-[#8b7a64]"
          >
            ⚙️ {T.settings}
          </button>
        </div>
      </div>
    </main>
  );
}
