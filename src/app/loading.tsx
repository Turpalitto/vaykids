export default function Loading() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[var(--bg)] px-6 text-center">
      <div role="status" aria-live="polite">
        <div className="text-6xl anim-float" aria-hidden>🦌</div>
        <p className="mt-4 text-xl font-extrabold text-[#8b7a64]">Собар де…</p>
      </div>
    </main>
  );
}
