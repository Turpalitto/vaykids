"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shell, Btn } from "@/components/ui";
import { RU } from "@/data/ui";
import { useStore, type TextSize } from "@/lib/store";
import { sfx } from "@/lib/audio";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="soft rounded-3xl bg-white px-5 py-4 flex items-center gap-4 min-h-[68px]">
      <span className="flex-1 text-lg font-extrabold">{label}</span>
      {children}
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => { sfx("tap"); onChange(!on); }}
      className={`relative w-[72px] h-[40px] rounded-full transition-colors ${on ? "bg-[#3FA34D]" : "bg-[#d9cbb3]"}`}
    >
      <span className={`absolute top-1 w-8 h-8 rounded-full bg-white shadow transition-all ${on ? "left-[36px]" : "left-1"}`} />
      <span className="sr-only">{on ? RU.on : RU.off}</span>
    </button>
  );
}

export default function SettingsPage() {
  const settings = useStore((s) => s.settings);
  const setSettings = useStore((s) => s.setSettings);
  const resetProgress = useStore((s) => s.resetProgress);
  const activeId = useStore((s) => s.activeId);
  const [modal, setModal] = useState<null | "reset" | "privacy" | "about">(null);
  const router = useRouter();

  return (
    <Shell nav={false} requireProfile={false}>
      <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-[var(--bg)]/85 backdrop-blur">
        <button type="button" onClick={() => { sfx("tap"); router.back(); }} className="press soft grid place-items-center min-w-[60px] min-h-[60px] rounded-full bg-white text-3xl" aria-label={RU.back}>←</button>
        <h1 className="text-2xl font-black">⚙️ {RU.settings}</h1>
      </header>

      <div className="px-4 flex flex-col gap-3 pb-10">
        <Row label={`${RU.volume}: ${Math.round(settings.volume * 100)}%`}>
          <input
            type="range" min={0} max={1} step={0.1} value={settings.volume}
            onChange={(e) => setSettings({ volume: Number(e.target.value) })}
            className="w-36 accent-[#F5A524] h-10"
            aria-label={RU.volume}
          />
        </Row>
        <Row label={RU.music}><Toggle on={settings.music} onChange={(v) => setSettings({ music: v })} /></Row>
        <Row label={RU.sounds}><Toggle on={settings.sounds} onChange={(v) => setSettings({ sounds: v })} /></Row>
        <Row label={RU.notifications}><Toggle on={settings.notifications} onChange={(v) => setSettings({ notifications: v })} /></Row>

        <div className="soft rounded-3xl bg-white px-5 py-4">
          <p className="text-lg font-extrabold mb-3">{RU.textSize}</p>
          <div className="grid grid-cols-3 gap-2">
            {(["md", "lg", "xl"] as TextSize[]).map((s) => (
              <button key={s} type="button" onClick={() => { sfx("tap"); setSettings({ textSize: s }); }} className={`press rounded-2xl min-h-[56px] font-black ${settings.textSize === s ? "bg-[#2a1f14] text-white" : "bg-[#f3ece0]"}`}>
                {s === "md" ? RU.small : s === "lg" ? RU.large : RU.xl}
              </button>
            ))}
          </div>
        </div>
        <Row label={RU.contrast}><Toggle on={settings.contrast} onChange={(v) => setSettings({ contrast: v })} /></Row>

        <Btn color="sky" size="lg" href="/settings/parents" className="mt-2">👨‍👩‍👧 {RU.parents}</Btn>

        <button type="button" onClick={() => setModal("privacy")} className="press soft rounded-3xl bg-white px-5 min-h-[64px] text-left text-lg font-extrabold">🔒 {RU.privacy}</button>
        <button type="button" onClick={() => setModal("about")} className="press soft rounded-3xl bg-white px-5 min-h-[64px] text-left text-lg font-extrabold">ℹ️ {RU.about}</button>
        <button type="button" disabled={!activeId} onClick={() => setModal("reset")} className="press soft rounded-3xl bg-[#FDE8E1] text-[#a8482a] px-5 min-h-[64px] text-left text-lg font-extrabold disabled:opacity-50">🗑️ {RU.reset}</button>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4" onClick={() => setModal(null)}>
          <div className="w-full max-w-md rounded-[32px] bg-white p-6 anim-pop" onClick={(e) => e.stopPropagation()}>
            {modal === "reset" && (
              <>
                <h2 className="text-2xl font-black">{RU.reset}</h2>
                <p className="mt-2 text-lg">{RU.resetConfirm}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Btn color="white" onClick={() => setModal(null)}>{RU.back}</Btn>
                  <Btn color="terra" onClick={() => { resetProgress(); setModal(null); }}>{RU.reset}</Btn>
                </div>
              </>
            )}
            {modal === "privacy" && (
              <>
                <h2 className="text-2xl font-black">{RU.privacy}</h2>
                <div className="mt-3 text-base leading-relaxed space-y-2 max-h-[50vh] overflow-auto">
                  <p>Приложение создано для детей и не показывает рекламу, внешние ссылки и покупки в детском режиме.</p>
                  <p>Прогресс хранится локально на устройстве. Имя профиля и игровая статистика могут синхронизироваться с сервером приложения только для восстановления прогресса; никакие персональные данные третьим лицам не передаются.</p>
                  <p>Голосовые функции отключены. Приложение использует только короткие звуки интерфейса, которые можно выключить выше.</p>
                  <p>Родитель может удалить все данные кнопкой «Сбросить прогресс».</p>
                </div>
                <Btn className="mt-5 w-full" onClick={() => setModal(null)}>{RU.back}</Btn>
              </>
            )}
            {modal === "about" && (
              <>
                <h2 className="text-2xl font-black">{RU.about}</h2>
                <div className="mt-3 text-base leading-relaxed space-y-2">
                  <p><b>Нохчийн мотт</b> — игровое приложение для изучения чеченского языка детьми 5–12 лет.</p>
                  <p>Лексика проверена по параллельному корпусу <i>lingtrain/chechen-russian</i>; слова, требующие подтверждения носителем, вынесены в отдельный список в родительской зоне.</p>
                  <p>Карточки содержат чеченское слово и русский перевод; голосовые сценарии отключены до подключения проверенных записей носителей.</p>
                  <p>{RU.version}: 1.0.0 · Прототип</p>
                </div>
                <Btn className="mt-5 w-full" onClick={() => setModal(null)}>{RU.back}</Btn>
              </>
            )}
          </div>
        </div>
      )}
    </Shell>
  );
}
