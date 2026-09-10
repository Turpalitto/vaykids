import { z } from "zod";

/** Группы возраста — как в клиентском сторе (src/lib/store.ts: AgeGroup). */
export const AGE_GROUPS = ["small", "middle", "big"] as const;

const IdSchema = z.string().trim().min(1, "ID обязателен").max(64, "ID слишком длинный");
const DateKeySchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Ожидается дата YYYY-MM-DD");
const LocalAssetSchema = z.string().max(200).refine((value) => !value || (value.startsWith("/") && !value.startsWith("//")), "Используйте локальный путь /…");

export const ProfileSchema = z.object({
  id: IdSchema,
  name: z.string().trim().min(1, "Имя обязательно").max(40, "Имя слишком длинное"),
  avatar: z.string().max(24).optional(),
  ageGroup: z.enum(AGE_GROUPS).optional(),
});

/** Полный снимок прогресса, который клиент шлёт в PUT /api/progress. */
export const ProgressDataSchema = z.looseObject({
  learned: z.array(IdSchema).max(1000).optional(),
  favorites: z.array(IdSchema).max(1000).optional(),
  stars: z.number().int().min(0).max(1_000_000).optional(),
  xp: z.number().int().min(0).max(10_000_000).optional(),
  medals: z.array(IdSchema).max(100).optional(),
  streakCount: z.number().int().min(0).max(10_000).optional(),
  streakLast: DateKeySchema.nullable().optional(),
  giftDate: DateKeySchema.nullable().optional(),
  dailyDate: DateKeySchema.nullable().optional(),
  decor: z.array(IdSchema).max(100).optional(),
  animals: z.array(IdSchema).max(100).optional(),
  gamesPlayed: z.number().int().min(0).max(1_000_000).optional(),
  seen: z.record(IdSchema, z.number().int().min(0).max(1_000_000)).optional(),
});

export const ProgressUpdateSchema = z.object({
  profileId: IdSchema,
  profile: ProfileSchema.partial().optional(),
  data: ProgressDataSchema,
});

/** GET /api/progress?profileId=… — параметр запроса. */
export const ProfileIdParamSchema = z.object({
  profileId: IdSchema,
});

/** POST /api/profiles — создание профиля. */
export const ProfilePostSchema = z.object({
  id: IdSchema,
  name: z.string().trim().min(1).max(40),
  avatar: z.string().max(24).optional(),
  ageGroup: z.enum(AGE_GROUPS).optional(),
});

/** PUT /api/overrides — ручная правка карточки. */
export const CardOverrideSchema = z.object({
  cardId: IdSchema,
  che: z.string().max(120).optional(),
  stress: z.string().max(120).optional(),
  exampleChe: z.string().max(400).optional(),
  emoji: z.string().max(24).optional(),
  image: LocalAssetSchema.optional(),
  audio: LocalAssetSchema.optional(),
  hidden: z.boolean().optional(),
  note: z.string().max(500).optional(),
});

/** Родительская зона: короткоживущий challenge не хранит ответ в браузере. */
export const ParentChallengeSchema = z.object({
  id: z.string().min(1).max(128),
  answer: z.number().int().min(0).max(100),
});

/** POST /api/review — добавить элемент в список проверки. */
export const ReviewPostSchema = z.object({
  cardId: IdSchema.optional(),
  che: z.string().trim().min(1).max(120),
  ruInternal: z.string().max(200).optional(),
  reason: z.string().trim().min(1).max(300),
});

/** PATCH /api/review — сменить статус элемента проверки. */
export const ReviewPatchSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(["pending", "approved", "rejected", "fixed"]),
  comment: z.string().max(500).optional(),
});
