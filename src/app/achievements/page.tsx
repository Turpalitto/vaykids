"use client";

import { Shell, Btn } from "@/components/ui";
import { MEDALS } from "@/lib/store";
import { useStore, emptyProgress } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function AchievementsPage() {
  const router = useRouter();
  const profile = useStore((s) => s.profiles.find((p) => p.id === s.activeId));
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined)) ?? emptyProgress();

  const earned = new Set(p.medals || []);

  return (
    <Shell nav>
      <div className="px-5 pt-4 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-black">🏅 Достижения</h1>
          <Btn size="sm" color="white" onClick={() => router.push("/games")}>🎮 Игры</Btn>
        </div>

        <p className="text-sm text-[#8b7a64] mb-4">
          {profile?.name || "Игрок"} · получено {earned.size} из {MEDALS.length} медалей
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MEDALS.map((m) => {
            const unlocked = earned.has(m.id);
            return (
              <div
                key={m.id}
                className={`soft rounded-2xl bg-white p-4 flex flex-col items-center text-center transition-all ${
                  unlocked ? "opacity-100 scale-100" : "opacity-40 grayscale scale-95"
                }`}
              >
                <span className="text-5xl">{m.emoji}</span>
                <span className="text-base font-black mt-1">{m.che}</span>
                <span className="text-xs text-[#8b7a64]">{m.ru}</span>
                {unlocked && (
                  <span className="mt-1 text-xs font-bold text-[#3FA34D]">✅ получено</span>
                )}
              </div>
            );
          })}
        </div>
        {earned.size === 0 && (
          <div className="mt-8 text-center text-[#8b7a64]">
            <p className="text-3xl">🎯</p>
            <p>Пока нет медалей. Играй и зарабатывай их!</p>
          </div>
        )}
      </div>
    </Shell>
  );
}