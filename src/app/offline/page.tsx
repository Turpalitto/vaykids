import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[var(--bg)] px-6 text-center">
      <div className="max-w-sm">
        <div className="text-7xl" aria-hidden>🦌</div>
        <h1 className="mt-4 text-3xl font-black text-[var(--ink)]">Связи нет</h1>
        <p className="mt-3 text-lg font-bold text-[#8b7a64]">
          Попробуй открыть приложение ещё раз. Сохранённые карточки и прогресс останутся на устройстве.
        </p>
        <Link href="/" className="mt-6 inline-flex min-h-[60px] items-center justify-center rounded-3xl bg-[#F5A524] px-7 text-xl font-extrabold text-[#2a1f14] shadow-lg">
          Вернуться в приложение
        </Link>
      </div>
    </main>
  );
}
