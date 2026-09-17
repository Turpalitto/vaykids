"use client";
/* eslint-disable react-hooks/set-state-in-effect -- admin data is loaded from API effects. */

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Shell, Btn, Loading, ErrorState, Empty } from "@/components/ui";
import { RU } from "@/data/ui";
import { CARDS, TOPICS } from "@/data/words";
import { useStore, emptyProgress } from "@/lib/store";
import { sfx } from "@/lib/audio";
import type { Override } from "@/lib/useContent";

interface ReviewRow { id: number; cardId: string | null; che: string; ruInternal: string; reason: string; status: string; comment: string | null }
interface ParentChallenge { id: string; a: number; b: number }

/** Родительская зона (часть экрана настроек): русский язык допустим. */
export default function ParentsPage() {
  const router = useRouter();
  const [gate, setGate] = useState(false);
  const [challenge, setChallenge] = useState<ParentChallenge | null>(null);
  const [challengeError, setChallengeError] = useState(false);
  const [answer, setAnswer] = useState("");
  const [checking, setChecking] = useState(false);
  const [tab, setTab] = useState<"stats" | "content" | "review">("stats");

  const loadChallenge = () => {
    setChallengeError(false);
    setChallenge(null);
    fetch("/api/parents/challenge", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("challenge_failed")))
      .then((data: ParentChallenge) => setChallenge(data))
      .catch(() => setChallengeError(true));
  };

  useEffect(() => {
    if (!gate) loadChallenge();
  }, [gate]);

  const enterParents = async () => {
    if (!challenge || checking) return;
    setChecking(true);
    try {
      const response = await fetch("/api/parents/verify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: challenge.id, answer: Number(answer) }),
      });
      if (!response.ok) throw new Error("invalid_answer");
      setGate(true);
    } catch {
      sfx("error");
      setAnswer("");
      loadChallenge();
    } finally {
      setChecking(false);
    }
  };

  const profiles = useStore((s) => s.profiles);
  const activeId = useStore((s) => s.activeId);
  const progressAll = useStore((s) => s.progress);
  const p = (activeId && progressAll[activeId]) || emptyProgress();
  const me = profiles.find((x) => x.id === activeId);

  if (!gate) {
    return (
      <Shell nav={false} requireProfile={false}>
        <div className="px-5 pt-10 max-w-md mx-auto">
          <h1 className="text-3xl font-black">👨‍👩‍👧 {RU.parents}</h1>
          <p className="mt-2 text-lg text-[#8b7a64] font-bold">Чтобы продолжить, решите пример:</p>
          <div className="mt-6 soft rounded-[32px] bg-white p-6 text-center">
            {challenge && <p className="text-4xl font-black">{challenge.a} × {challenge.b} = ?</p>}
            {!challenge && !challengeError && <Loading text="Загрузка задания…" />}
            {challengeError && <ErrorState text="Не удалось загрузить задание" onRetry={loadChallenge} />}
            {challenge && (
              <>
                <input inputMode="numeric" value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") void enterParents(); }} className="mt-4 w-full rounded-2xl bg-[#f3ece0] px-5 py-4 text-3xl font-black text-center outline-none focus:ring-4 ring-[#F5A524]" aria-label="Ответ" autoFocus />
                <Btn className="mt-4 w-full" size="lg" disabled={checking} onClick={() => void enterParents()}>{checking ? "Проверка…" : "Войти"}</Btn>
              </>
            )}
            <button type="button" onClick={() => router.push("/settings")} className="mt-3 min-h-[48px] font-black text-[#8b7a64]">{RU.back}</button>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell nav={false} requireProfile={false}>
      <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-[var(--bg)]/85 backdrop-blur">
        <button type="button" onClick={() => router.push("/settings")} className="press soft grid place-items-center min-w-[60px] min-h-[60px] rounded-full bg-white text-3xl" aria-label={RU.back}>←</button>
        <h1 className="text-2xl font-black">👨‍👩‍👧 {RU.parents}</h1>
      </header>
      <div className="px-4 grid grid-cols-3 gap-2">
        {([["stats", "📊 Прогресс"], ["content", "✏️ Карточки"], ["review", "🧐 Проверка"]] as const).map(([id, l]) => (
          <button key={id} type="button" onClick={() => setTab(id)} className={`press rounded-2xl min-h-[52px] font-black text-sm sm:text-base ${tab === id ? "bg-[#2a1f14] text-white" : "bg-white soft"}`}>{l}</button>
        ))}
      </div>

      {tab === "stats" && (
        <div className="px-4 mt-4 pb-10">
          {!me ? <Empty text="Профиль ещё не создан" emoji="🙂" /> : (
            <>
              <div className="soft rounded-3xl bg-white p-5">
                <p className="text-2xl font-black">{me.avatar} {me.name}</p>
                <p className="text-[#8b7a64] font-bold">Возраст: {me.ageGroup === "small" ? "5–7" : me.ageGroup === "middle" ? "8–9" : "10–12"} · Серия: {p.streakCount} дн. · Игр сыграно: {p.gamesPlayed}</p>
                <p className="mt-2 text-lg font-black">Изучено слов: {p.learned.length} из {CARDS.length} · Звёзд: {p.stars}</p>
              </div>
              <h3 className="mt-5 text-xl font-black">По темам</h3>
              <div className="mt-2 flex flex-col gap-2">
                {TOPICS.map((t) => {
                  const all = CARDS.filter((c) => c.topicId === t.id);
                  const l = all.filter((c) => p.learned.includes(c.id)).length;
                  return (
                    <div key={t.id} className="soft rounded-2xl bg-white px-4 py-3 flex items-center gap-3">
                      <span className="text-2xl">{t.emoji}</span>
                      <span className="flex-1 font-bold">{t.ru} <span className="text-[#8b7a64]">({t.che})</span></span>
                      <span className="font-black">{l}/{all.length}</span>
                    </div>
                  );
                })}
              </div>
              <h3 className="mt-5 text-xl font-black">Сложные слова (много ошибок/повторов)</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(p.seen).sort((x, y) => y[1] - x[1]).slice(0, 12).map(([id, n]) => {
                  const c = CARDS.find((x) => x.id === id);
                  return c ? <span key={id} className="rounded-full bg-white soft px-3 py-2 font-bold">{c.emoji} {c.che} · {n}</span> : null;
                })}
                {Object.keys(p.seen).length === 0 && <span className="text-[#8b7a64] font-bold">Пока нет данных.</span>}
              </div>
            </>
          )}
        </div>
      )}

      {tab === "content" && <ContentEditor />}
      {tab === "review" && <ReviewList />}
    </Shell>
  );
}

/* ---------- Редактор карточек (ручные правки: слово, ударение, пример, картинка, аудио) ---------- */
function ContentEditor() {
  const [q, setQ] = useState("");
  const [overrides, setOverrides] = useState<Override[] | null>(null);
  const [err, setErr] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState<Override>({ cardId: "" });
  const [saving, setSaving] = useState(false);

  const load = () => {
    setErr(false);
    setOverrides(null);
    fetch("/api/overrides").then((r) => (r.ok ? r.json() : Promise.reject())).then(setOverrides).catch(() => { setErr(true); setOverrides([]); });
  };
  useEffect(load, []);

  const list = useMemo(() => CARDS.filter((c) => !q || c.che.includes(q.toLowerCase()) || c.ru.includes(q.toLowerCase())).slice(0, 40), [q]);
  const ov = (id: string) => overrides?.find((o) => o.cardId === id);

  const save = async () => {
    setSaving(true);
    try {
      const r = await fetch("/api/overrides", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      if (!r.ok) throw new Error();
      setEditing(null);
      load();
    } catch {
      setErr(true);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: string) => {
    await fetch(`/api/overrides?cardId=${id}`, { method: "DELETE" }).catch(() => {});
    setEditing(null);
    load();
  };

  return (
    <div className="px-4 mt-4 pb-10">
      <p className="text-[#8b7a64] font-bold text-sm">Правки сохраняются в базе и применяются поверх встроенного словаря. Перезагрузите приложение, чтобы увидеть изменения в детском режиме.</p>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Поиск слова…" className="mt-3 w-full rounded-2xl bg-white soft px-5 py-4 text-lg font-bold outline-none focus:ring-4 ring-[#F5A524]" />
      {overrides === null && !err && <Loading text="Загрузка…" />}
      {err && <ErrorState text="Сервер недоступен — показан встроенный словарь" onRetry={load} />}
      <div className="mt-3 flex flex-col gap-2">
        {list.map((c) => {
          const o = ov(c.id);
          return (
            <div key={c.id} className="soft rounded-2xl bg-white px-4 py-3">
              <button type="button" className="w-full flex items-center gap-3 text-left" onClick={() => { setEditing(editing === c.id ? null : c.id); setForm({ cardId: c.id, che: o?.che ?? "", stress: o?.stress ?? "", exampleChe: o?.exampleChe ?? "", emoji: o?.emoji ?? "", image: o?.image ?? "", audio: o?.audio ?? "", hidden: o?.hidden ?? false }); }}>
                <span className="text-3xl">{o?.emoji || c.emoji}</span>
                <span className="flex-1">
                  <span className="block font-black text-lg">{o?.che || c.che} {o && <span className="text-xs rounded-full bg-[#FFF1D6] px-2 py-0.5">изменено</span>}</span>
                  <span className="block text-sm text-[#8b7a64]">{c.ru} · {c.source === "corpus" ? "корпус" : "словарь"}{c.review ? " · ⚠️ на проверке" : ""}</span>
                </span>
                <span>{editing === c.id ? "▲" : "▼"}</span>
              </button>
              {editing === c.id && (
                <div className="mt-3 grid gap-2 anim-fadeUp">
                  {([["che", "Слово (чеченский)"], ["stress", "С ударением (напр. нáна)"], ["exampleChe", "Пример предложения"], ["emoji", "Эмодзи"], ["image", "Путь к картинке (/img/…)"], ["audio", "Путь к аудио (/audio/…)"]] as const).map(([k, l]) => (
                    <label key={k} className="text-sm font-bold text-[#8b7a64]">
                      {l}
                      <input value={(form[k] as string) ?? ""} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className="mt-1 w-full rounded-xl bg-[#f3ece0] px-3 py-2 text-base font-bold text-[#2a1f14] outline-none" />
                    </label>
                  ))}
                  <label className="flex items-center gap-2 font-bold"><input type="checkbox" checked={!!form.hidden} onChange={(e) => setForm({ ...form, hidden: e.target.checked })} className="w-6 h-6" /> Скрыть карточку из детского режима</label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <Btn color="meadow" onClick={save} disabled={saving}>💾 Сохранить</Btn>
                    <Btn color="white" onClick={() => remove(c.id)}>↩️ Сбросить</Btn>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Список проверки носителем ---------- */
function ReviewList() {
  const [rows, setRows] = useState<ReviewRow[] | null>(null);
  const [err, setErr] = useState(false);
  const load = () => {
    setErr(false);
    setRows(null);
    fetch("/api/review").then((r) => (r.ok ? r.json() : Promise.reject())).then(setRows).catch(() => { setErr(true); setRows([]); });
  };
  useEffect(load, []);

  const setStatus = async (id: number, status: string) => {
    await fetch("/api/review", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ id, status }) }).catch(() => {});
    load();
  };

  const dictWords = CARDS.filter((c) => c.source === "dictionary" && !c.review);

  return (
    <div className="px-4 mt-4 pb-10">
      <p className="text-[#8b7a64] font-bold text-sm">Слова, которые нужно подтвердить у носителя языка. Они помечены и не используются как единственный источник в интерфейсе, пока не подтверждены.</p>
      {rows === null && !err && <Loading text="Загрузка…" />}
      {err && <ErrorState text="Сервер недоступен" onRetry={load} />}
      {rows && rows.length === 0 && !err && <Empty text="Список пуст" emoji="✅" />}
      <div className="mt-3 flex flex-col gap-2">
        {rows?.map((r) => (
          <div key={r.id} className={`soft rounded-2xl px-4 py-3 ${r.status === "approved" ? "bg-[#E7F6E9]" : r.status === "rejected" ? "bg-[#FDE8E1]" : "bg-white"}`}>
            <p className="font-black text-lg">{r.che} <span className="text-[#8b7a64] font-bold text-base">— {r.ruInternal}</span></p>
            <p className="text-sm text-[#8b7a64]">{r.reason}</p>
            <div className="mt-2 flex gap-2">
              <button type="button" onClick={() => setStatus(r.id, "approved")} className="press rounded-full bg-[#3FA34D] text-white px-4 min-h-[44px] font-black">✔ Верно</button>
              <button type="button" onClick={() => setStatus(r.id, "rejected")} className="press rounded-full bg-[#D9633B] text-white px-4 min-h-[44px] font-black">✖ Исправить</button>
              <button type="button" onClick={() => setStatus(r.id, "pending")} className="press rounded-full bg-[#f3ece0] px-4 min-h-[44px] font-black">↺</button>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-6 text-lg font-black">Словарные слова без подтверждения в корпусе ({dictWords.length})</h3>
      <p className="text-sm text-[#8b7a64] font-bold">Стандартная лексика, отсутствующая в корпусе lingtrain (он преимущественно библейский). Рекомендуется выборочная проверка.</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {dictWords.map((c) => <span key={c.id} className="rounded-full bg-white soft px-3 py-2 font-bold">{c.emoji} {c.che} — {c.ru}</span>)}
      </div>
    </div>
  );
}
