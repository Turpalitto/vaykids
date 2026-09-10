"use client";

import { useEffect } from "react";

export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep the error boundary useful in production without exposing the error to children.
    console.error("Application error", { digest: error.digest });
  }, [error.digest]);

  return (
    <main className="grid min-h-dvh place-items-center bg-[var(--bg)] px-6 text-center">
      <div className="max-w-sm">
        <div className="text-7xl" aria-hidden>🌧️</div>
        <h1 className="mt-4 text-3xl font-black">Что-то пошло не так</h1>
        <p className="mt-3 text-lg font-bold text-[#8b7a64]">Прогресс сохранён. Попробуй перезапустить экран.</p>
        <button type="button" onClick={() => reset()} className="mt-6 min-h-[60px] rounded-3xl bg-[#2B6CB0] px-7 text-xl font-extrabold text-white shadow-lg">
          Повторить
        </button>
      </div>
    </main>
  );
}
