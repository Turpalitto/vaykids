import { z } from "zod";

/** Группы возраста — как в клиентском сторе (src/lib/store.ts: AgeGroup). */
export const AGE_GROUPS = ["small", "middle", "big"] as const;

export const ProfileSchema = z.object({
  id: z.string().min(1, "ID профиля обязателен"),
  name: z.string().min(1, "Имя обязательно"),
  avatar: z.string().optional(),
  ageGroup: z.enum(AGE_GROUPS).optional(),
});

/** Полный снимок прогресса, который клиент шлёт в PUT /api/progress. */
export const ProgressDataSchema = z.looseObject({
  learned: z.array(z.string()).max(1000).optional(),
  favorites: z.array(z.string()).max(1000).optional(),
  stars: z.number().int().min(0).max(1_000_000).optional(),
  xp: z.number().int().min(0).max(10_000_000).optional(),
  medals: z.array(z.string()).max(100).optional(),
  streakCount: z.number().int().min(0).max(10_000).optional(),
  streakLast: z.string().max(10).nullable().optional(),
  giftDate: z.string().max(10).nullable().optional(),
  dailyDate: z.string().max(10).nullable().optional(),
  decor: z.array(z.string()).max(100).optional(),
  animals: z.array(z.string()).max(100).optional(),
  gamesPlayed: z.number().int().min(0).max(1_000_000).optional(),
  seen: z.record(z.string().min(1), z.number().int().min(0)).optional(),
});

export const ProgressUpdateSchema = z.object({
  profileId: z.string().min(1, "ID профиля обязателен"),
  profile: ProfileSchema.partial().optional(),
  data: ProgressDataSchema,
});

/** GET /api/progress?profileId=… — параметр запроса. */
export const ProfileIdParamSchema = z.object({
  profileId: z.string().min(1, "ID профиля обязателен"),
});

/** POST /api/profiles — создание профиля. */
export const ProfilePostSchema = z.object({
  id: z.string().min(1).max(64),
  name: z.string().min(1).max(40),
  avatar: z.string().max(24).optional(),
  ageGroup: z.enum(AGE_GROUPS).optional(),
});

/** PUT /api/overrides — ручная правка карточки. */
export const CardOverrideSchema = z.object({
  cardId: z.string().min(1).max(64),
  che: z.string().max(120).optional(),
  stress: z.string().max(120).optional(),
  exampleChe: z.string().max(400).optional(),
  emoji: z.string().max(24).optional(),
  image: z.string().max(200).optional(),
  audio: z.string().max(200).optional(),
  hidden: z.boolean().optional(),
  note: z.string().max(500).optional(),
});

/** POST /api/review — добавить элемент в список проверки. */
export const ReviewPostSchema = z.object({
  cardId: z.string().min(1).max(64).optional(),
  che: z.string().min(1).max(120),
  ruInternal: z.string().max(200).optional(),
  reason: z.string().min(1).max(300),
});

/** PATCH /api/review — сменить статус элемента проверки. */
export const ReviewPatchSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(["pending", "approved", "rejected", "fixed"]),
  comment: z.string().max(500).optional(),
});
