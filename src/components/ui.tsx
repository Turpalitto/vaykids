"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, type ReactNode, type CSSProperties } from "react";
import { T, HELPER_LINES } from "@/data/ui";
import { sfx } from "@/lib/audio";
import { useStore, useHydrate } from "@/lib/store";
import type { Card } from "@/data/types";

/* ---------- Кнопки ---------- */
type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  color?: "sun" | "sky" | "meadow" | "terra" | "white" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  style?: CSSProperties;
};

const colors: Record<NonNullable<BtnProps["color"]>, string> = {
  sun: "bg-[#F5A524] text-[#2a1f14] border-b-4 border-[#c9821a]",
  sky: "bg-[#2B6CB0] text-white border-b-4 border-[#1f4f82]",
  meadow: "bg-[#3FA34D] text-white border-b-4 border-[#2c7a37]",
  terra: "bg-[#D9633B] text-white border-b-4 border-[#a8482a]",
  white: "bg-white text-[#2a1f14] border-b-4 border-[#e7dcc8]",
  ghost: "bg-white/70 text-[#2a1f14] backdrop-blur border-b-4 border-transparent",
};
const sizes = { sm: "min-h-[44px] px-4 text-base", md: "min-h-[56px] px-5 text-lg", lg: "min-h-[64px] px-7 text-xl", xl: "min-h-[76px] px-9 text-2xl" };

export function Btn({ children, onClick, href, color = "sun", size = "md", className = "", disabled, ariaLabel, style }: BtnProps) {
  const cls = `press soft inline-flex items-center justify-center gap-2 rounded-3xl font-extrabold select-none ${colors[color]} ${sizes[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;
  const handle = () => {
    sfx("tap");
    onClick?.();
  };
  if (href) {
    return (
      <Link href={href} onClick={handle} className={cls} aria-label={ariaLabel} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={handle} className={cls} disabled={disabled} aria-label={ariaLabel} style={style}>
      {children}
    </button>
  );
}

/* ---------- Иконка-кнопка (крупная зона нажатия) ---------- */
export function IconBtn({ children, onClick, href, label, className = "", active }: { children: ReactNode; onClick?: () => void; href?: string; label: string; className?: string; active?: boolean }) {
  const cls = `press soft grid place-items-center min-w-[60px] min-h-[60px] rounded-full text-3xl ${active ? "bg-[#F5A524]" : "bg-white"} ${className}`;
  const handle = () => {
    sfx("tap");
    onClick?.();
  };
  if (href) return <Link href={href} aria-label={label} title={label} className={cls} onClick={handle}>{children}</Link>;
  return <button type="button" aria-label={label} title={label} onClick={handle} className={cls}>{children}</button>;
}

/* ---------- Верхняя панель ---------- */
export function TopBar({ title, back = "/map", right }: { title?: string; back?: string | null; right?: ReactNode }) {
  const p = useStore((s) => (s.activeId ? s.progress[s.activeId] : undefined));
  const syncStatus = useStore((s) => s.syncStatus);
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-[var(--bg)]/85 backdrop-blur">
      {back !== null && <IconBtn href={back} label={T.back}>←</IconBtn>}
      <h1 className="flex-1 text-2xl font-black truncate">{title ?? ""}</h1>
      {right}
      {syncStatus === "offline" && (
        <span className="grid min-h-[48px] min-w-[48px] place-items-center rounded-full bg-[#FDE8E1] text-xl" title="Синхронизация недоступна — прогресс сохранён на устройстве" aria-label="Синхронизация недоступна">
          ☁️
        </span>
      )}
      {syncStatus === "syncing" && (
        <span className="grid min-h-[48px] min-w-[48px] place-items-center rounded-full bg-white text-xl" title="Синхронизация…" aria-label="Синхронизация…">
          ↻
        </span>
      )}
      <div className="flex items-center gap-1 bg-white soft rounded-full px-4 min-h-[48px] font-black text-lg" aria-label={T.stars}>
        <span aria-hidden>⭐</span>
        <span>{p?.stars ?? 0}</span>
      </div>
    </header>
  );
}

/* ---------- Нижняя навигация ---------- */
const NAV = [
  { href: "/map", emoji: "🗺️", label: T.myWorld },
  { href: "/cards", emoji: "🃏", label: T.cards },
  { href: "/games", emoji: "🎮", label: T.games },
  { href: "/rewards", emoji: "🏆", label: T.rewards },
  { href: "/profile", emoji: "🙂", label: T.me },
];

export function BottomNav() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 px-3 pb-[max(env(safe-area-inset-bottom),10px)] pt-2 bg-white/90 backdrop-blur border-t border-[#efe4d0]">
      <ul className="mx-auto max-w-xl grid grid-cols-5 gap-1">
        {NAV.map((n) => {
          const active = path === n.href || path.startsWith(n.href + "/");
          return (
            <li key={n.href}>
              <Link
                href={n.href}
                onClick={() => sfx("tap")}
                aria-label={n.label}
                className={`press flex flex-col items-center justify-center rounded-2xl min-h-[60px] gap-0.5 ${active ? "bg-[#FFF1D6]" : ""}`}
              >
                <span className={`text-3xl ${active ? "anim-pop" : ""}`}>{n.emoji}</span>
                <span className={`text-xs font-extrabold ${active ? "text-[#c9821a]" : "text-[#8b7a64]"}`}>{n.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/* ---------- Помощник Седа ---------- */
export function Helper({ text, size = "md", mood = "happy" }: { text?: string; size?: "sm" | "md" | "lg"; mood?: "happy" | "think" | "cheer" }) {
  const px = size === "lg" ? 180 : size === "md" ? 120 : 80;
  return (
    <div className="flex items-end gap-3">
      <div className={`relative shrink-0 ${mood === "cheer" ? "anim-wiggle" : "anim-float"}`} style={{ width: px, height: px }}>
        <Image src="/img/seda-deer.png" alt={T.helperName} fill sizes={`${px}px`} className="object-contain drop-shadow-xl rounded-full" />
        {mood === "think" && <span className="absolute -top-1 -right-1 text-3xl">💭</span>}
        {mood === "cheer" && <span className="absolute -top-1 -right-1 text-3xl anim-bounceIn">🎉</span>}
      </div>
      {text && (
        <div className="relative bg-white soft rounded-3xl rounded-bl-md px-5 py-4 text-xl font-extrabold leading-snug anim-pop max-w-[70vw]">
          {text}
        </div>
      )}
    </div>
  );
}

/* ---------- Иллюстрация карточки ---------- */
export function CardArt({ card, className = "", emojiSize = "text-7xl" }: { card: Pick<Card, "emoji" | "image" | "che">; className?: string; emojiSize?: string }) {
  if (card.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={card.image} alt={card.che} fill sizes="(max-width: 640px) 50vw, 300px" className="object-cover" />
      </div>
    );
  }
  return (
    <div className={`grid place-items-center ${className}`} aria-hidden>
      <span className={`${emojiSize} leading-none drop-shadow-sm select-none`}>{card.emoji}</span>
    </div>
  );
}

/* ---------- Состояния ---------- */
export function Loading({ text = T.loading }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center" role="status" aria-live="polite">
      <div className="text-6xl anim-float" aria-hidden>🦌</div>
      <div className="h-3 w-40 rounded-full shimmer" aria-hidden />
      <p className="text-xl font-extrabold text-[#8b7a64]">{text}</p>
    </div>
  );
}

export function Empty({ text = T.empty, emoji = "🌱" }: { text?: string; emoji?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="text-7xl">{emoji}</div>
      <p className="text-xl font-extrabold text-[#8b7a64]">{text}</p>
    </div>
  );
}

export function ErrorState({ onRetry, text = T.error }: { onRetry?: () => void; text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <div className="text-7xl">🌧️</div>
      <p className="text-xl font-extrabold text-[#8b7a64]">{text}</p>
      {onRetry && <Btn onClick={onRetry} color="sky">🔄 {T.retry}</Btn>}
    </div>
  );
}

/* ---------- Конфетти ---------- */
export function Confetti({ count = 40 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37 + count * 11) % 100,
        delay: ((i * 17 + count * 3) % 80) / 100,
        color: ["#F5A524", "#2B6CB0", "#3FA34D", "#D9633B", "#EC4899", "#A855F7"][i % 6],
        dur: 2 + ((i * 23 + count * 7) % 150) / 100,
      })),
    [count],
  );
  return (
    <>
      {pieces.map((p, i) => (
        <span key={i} className="confetti-piece" style={{ left: `${p.left}%`, background: p.color, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />
      ))}
    </>
  );
}

/* ---------- Прогресс-бар ---------- */
export function Progress({ value, max, color = "#F5A524", label }: { value: number; max: number; color?: string; label?: string }) {
  const safeMax = Math.max(1, max);
  const safeValue = Math.min(safeMax, Math.max(0, value));
  const pct = Math.min(100, Math.round((safeValue / safeMax) * 100));
  return (
    <div className="h-4 w-full rounded-full bg-[#efe4d0] overflow-hidden" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuenow={safeValue} aria-valuemax={safeMax}>
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

/* ---------- Оболочка страницы: гидратация, профиль, доступность ---------- */
export function Shell({ children, nav = true, requireProfile = true, className = "" }: { children: ReactNode; nav?: boolean; requireProfile?: boolean; className?: string }) {
  const hydrated = useStore((s) => s.hydrated);
  const activeId = useStore((s) => s.activeId);
  const router = useRouter();
  useHydrate();

  useEffect(() => {
    if (!hydrated) return;
    if (requireProfile && !activeId) {
      router.replace("/start");
      return;
    }
  }, [hydrated, activeId, requireProfile, router]);

  if (!hydrated || (requireProfile && !activeId)) return <Loading />;
  return (
    <div className={`mx-auto max-w-xl min-h-dvh ${nav ? "pb-28" : ""} ${className}`}>
      {children}
      {nav && <BottomNav />}
    </div>
  );
}

export { HELPER_LINES };
