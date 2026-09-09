import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { reviewItems } from "@/db/schema";
import { REVIEW_LIST } from "@/data/words";
import { UI_REVIEW } from "@/data/ui";
import { ReviewPostSchema, ReviewPatchSchema } from "@/lib/validation";

/** Список проверки носителем: встроенные сомнительные элементы + записи из БД. */
export async function GET() {
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
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "db_unavailable", fallback: REVIEW_LIST }, { status: 503 });
  }
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request", message: "Invalid JSON" }, { status: 400 });
  }
  const validated = ReviewPostSchema.safeParse(raw);
  if (!validated.success) {
    return NextResponse.json({ error: "validation_error", issues: validated.error.issues }, { status: 400 });
  }
  const b = validated.data;
  try {
    await db.insert(reviewItems).values({ cardId: b.cardId ?? null, che: b.che, ruInternal: b.ruInternal ?? "", reason: b.reason });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

export async function PATCH(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request", message: "Invalid JSON" }, { status: 400 });
  }
  const validated = ReviewPatchSchema.safeParse(raw);
  if (!validated.success) {
    return NextResponse.json({ error: "validation_error", issues: validated.error.issues }, { status: 400 });
  }
  const b = validated.data;
  try {
    await db.update(reviewItems).set({ status: b.status, comment: b.comment ?? null }).where(eq(reviewItems.id, b.id));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
