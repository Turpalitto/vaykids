import { describe, expect, it } from "vitest";
import { graphemes } from "@/lib/useContent";
import { levelFromXp, sanitizeProgress, sanitizeSettings } from "@/lib/store";
import { ParentChallengeSchema, ProgressUpdateSchema } from "@/lib/validation";
import { emojiToCode } from "@/components/ui";

describe("обучающий движок", () => {
  it("сохраняет чеченские диграфы одной плиткой", () => {
    expect(graphemes("кӀант")).toEqual(["кӀ", "а", "н", "т"]);
    expect(graphemes("хьоьга")).toEqual(["хь", "оь", "г", "а"]);
    expect(graphemes("чӀара")).toEqual(["чӀ", "а", "р", "а"]);
    expect(graphemes("гӀала")).toEqual(["гӀ", "а", "л", "а"]);
  });

  it("корректно канонизирует чеченскую палочку (U+04C0 и U+04CF)", () => {
    // В JS "Ӏ".toLowerCase() превращается в "ӏ" (\u04CF)
    const upper = "Ӏ";
    const lower = "Ӏ".toLowerCase();
    const canon = (s: string) => s.toLowerCase().replaceAll("ӏ", "Ӏ").trim();
    expect(canon("КӀАНТ")).toBe(canon("кӏант"));
    expect(canon(upper)).toBe("Ӏ");
    expect(canon(lower)).toBe("Ӏ");
  });

  it("безопасно восстанавливает повреждённый прогресс", () => {
    const progress = sanitizeProgress({ stars: -20, xp: "bad", learned: ["one", 2, "two"], seen: { one: 3, broken: -1 } });
    expect(progress.stars).toBe(0);
    expect(progress.xp).toBe(0);
    expect(progress.learned).toEqual(["one", "two"]);
    expect(progress.seen).toEqual({ one: 3 });
  });

  it("корректно валидирует настройки и режим погружения (immersive)", () => {
    const s1 = sanitizeSettings({ immersive: true, volume: 0.8 });
    expect(s1.immersive).toBe(true);
    expect(s1.volume).toBe(0.8);

    const s2 = sanitizeSettings({ immersive: "invalid", volume: 5 });
    expect(s2.immersive).toBe(false);
    expect(s2.volume).toBe(1);
  });

  it("уровень не уходит ниже первого", () => {
    expect(levelFromXp(-100)).toBe(1);
    expect(levelFromXp(25)).toBe(2);
  });

  it("корректно преобразует эмодзи в коды 3D-иллюстраций", () => {
    expect(emojiToCode("🍎")).toBe("1f34e");
    expect(emojiToCode("🐶")).toBe("1f436");
    expect(emojiToCode("✏️")).toBe("270f");
    expect(emojiToCode("🐺🌲")).toBeNull();
  });
});

describe("валидация API", () => {
  it("ограничивает parent challenge числом и id", () => {
    expect(ParentChallengeSchema.safeParse({ id: "challenge", answer: 20 }).success).toBe(true);
    expect(ParentChallengeSchema.safeParse({ id: "", answer: 20 }).success).toBe(false);
    expect(ParentChallengeSchema.safeParse({ id: "challenge", answer: "20" }).success).toBe(false);
  });

  it("не принимает прогресс без profileId", () => {
    expect(ProgressUpdateSchema.safeParse({ data: {} }).success).toBe(false);
    expect(ProgressUpdateSchema.safeParse({ profileId: "p1", data: { stars: 4 } }).success).toBe(true);
  });
});
