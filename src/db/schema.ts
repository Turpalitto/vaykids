import {
  pgTable,
  text,
  integer,
  timestamp,
  jsonb,
  boolean,
  serial,
} from "drizzle-orm/pg-core";

/** Детские профили (синхронизируются с локальным хранилищем). */
export const profiles = pgTable("profiles", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  avatar: text("avatar").notNull().default("🦊"),
  ageGroup: text("age_group").notNull().default("small"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/** Снимок прогресса профиля (jsonb — чтобы менять структуру без миграций). */
export const progress = pgTable("progress", {
  profileId: text("profile_id").primaryKey(),
  data: jsonb("data").notNull(),
  stars: integer("stars").notNull().default(0),
  learnedCount: integer("learned_count").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/** Ручные правки карточек: слово, ударение, пример, картинка, аудио. */
export const cardOverrides = pgTable("card_overrides", {
  cardId: text("card_id").primaryKey(),
  che: text("che"),
  stress: text("stress"),
  exampleChe: text("example_che"),
  emoji: text("emoji"),
  image: text("image"),
  audio: text("audio"),
  hidden: boolean("hidden").notNull().default(false),
  note: text("note"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/** Внутренний список проверки носителем языка. */
export const reviewItems = pgTable("review_items", {
  id: serial("id").primaryKey(),
  cardId: text("card_id"),
  che: text("che").notNull(),
  ruInternal: text("ru_internal").notNull(),
  reason: text("reason").notNull(),
  status: text("status").notNull().default("pending"),
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
