import { describe, expect, it } from "vitest";
import { graphemes } from "@/lib/useContent";
import { levelFromXp, sanitizeProgress } from "@/lib/store";
import { ParentChallengeSchema, ProgressUpdateSchema } from "@/lib/validation";

describe("обучающий движок", () => {
  it("сохраняет чеченские диграфы одной плиткой", () => {
    expect(graphemes("кӀант")).toEqual(["кӀ", "а", "н", "т"]);
    expect(graphemes("хьоьга")).toEqual(["хь", "оь", "г", "а"]);
  });

  it("безопасно восстанавливает повреждённый прогресс", () => {
    const progress = sanitizeProgress({ stars: -20, xp: "bad", learned: ["one", 2, "two"], seen: { one: 3, broken: -1 } });
    expect(progress.stars).toBe(0);
    expect(progress.xp).toBe(0);
    expect(progress.learned).toEqual(["one", "two"]);
    expect(progress.seen).toEqual({ one: 3 });
  });

  it("уровень не уходит ниже первого", () => {
    expect(levelFromXp(-100)).toBe(1);
    expect(levelFromXp(25)).toBe(2);
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
