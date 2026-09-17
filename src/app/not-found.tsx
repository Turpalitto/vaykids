import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[var(--bg)] px-6 text-center">
      <div>
        <div className="text-7xl" aria-hidden>🗺️</div>
        <h1 className="mt-4 text-3xl font-black">Такой страницы нет</h1>
        <Link href="/map" className="mt-6 inline-flex min-h-[60px] items-center justify-center rounded-3xl bg-[#F5A524] px-7 text-xl font-extrabold text-[#2a1f14] shadow-lg">
          Вернуться на карту
        </Link>
      </div>
    </main>
  );
}
