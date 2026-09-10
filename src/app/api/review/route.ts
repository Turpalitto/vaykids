import { eq } from "drizzle-orm";
import { db } from "@/db";
import { reviewItems } from "@/db/schema";
import { REVIEW_LIST } from "@/data/words";
import { UI_REVIEW } from "@/data/ui";
import { ReviewPostSchema, ReviewPatchSchema } from "@/lib/validation";
import { apiJson, badRequest, dbUnavailable } from "@/lib/api";
import { hasParentSession } from "@/lib/parent-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Список проверки носителем: встроенные сомнительные элементы + записи из БД. */
export async function GET() {
  if (!(await hasParentSession())) return apiJson({ error: "parent_auth_required" }, 401);
  if (!db) return dbUnavailable();

  try {
    const existing = await db.select().from(reviewItems);
    const known = new Set(existing.map((r) => r.cardId));
    const knownChe = new Set(existing.map((r) => r.che));
    const missing = REVIEW_LIST.filter((r) => !known.has(r.cardId));
    const missingUi = UI_REVIEW.filter((u) => !knownChe.has(u.che));
    const toInsert = [
      ...missing.map((m) => ({ cardId: m.cardId, che: m.che, ruInternal: m.ru, reason: m.reason })),
      ...missingUi.map((u) => ({ cardId: null, che: u.che, ruInternal: u.ru, reason: "UI: " + u.reason })),
    ];
    if (toInsert.length) await db.insert(reviewItems).values(toInsert);
    const rows = await db.select().from(reviewItems).orderBy(reviewItems.id);
    return apiJson(rows);
  } catch {
    return dbUnavailable();
  }
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return badRequest("Invalid JSON");
  }
  const validated = ReviewPostSchema.safeParse(raw);
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!(await hasParentSession())) return apiJson({ error: "parent_auth_required" }, 401);
  if (!db) return dbUnavailable();

  const b = validated.data;
  try {
    await db.insert(reviewItems).values({ cardId: b.cardId ?? null, che: b.che, ruInternal: b.ruInternal ?? "", reason: b.reason });
    return apiJson({ ok: true });
  } catch {
    return dbUnavailable();
  }
}

export async function PATCH(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return badRequest("Invalid JSON");
  }
  const validated = ReviewPatchSchema.safeParse(raw);
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!(await hasParentSession())) return apiJson({ error: "parent_auth_required" }, 401);
  if (!db) return dbUnavailable();

  const b = validated.data;
  try {
    await db.update(reviewItems).set({ status: b.status, comment: b.comment ?? null }).where(eq(reviewItems.id, b.id));
    return apiJson({ ok: true });
  } catch {
    return dbUnavailable();
  }
}
