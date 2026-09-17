import { eq } from "drizzle-orm";
import { db } from "@/db";
import { cardOverrides } from "@/db/schema";
import { CardOverrideSchema } from "@/lib/validation";
import { apiJson, badRequest, dbUnavailable } from "@/lib/api";
import { hasParentSession } from "@/lib/parent-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!db) return dbUnavailable();

  try {
    const rows = await db.select().from(cardOverrides);
    return apiJson(rows);
  } catch {
    return dbUnavailable();
  }
}

export async function PUT(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return badRequest("Invalid JSON");
  }
  const validated = CardOverrideSchema.safeParse(raw);
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!(await hasParentSession())) return apiJson({ error: "parent_auth_required" }, 401);
  if (!db) return dbUnavailable();

  const b = validated.data;
  const clean = (v?: string) => (v && v.trim() ? v.trim() : null);
  const set = {
    che: clean(b.che),
    stress: clean(b.stress),
    exampleChe: clean(b.exampleChe),
    emoji: clean(b.emoji),
    image: clean(b.image),
    audio: clean(b.audio),
    hidden: !!b.hidden,
    note: clean(b.note),
    updatedAt: new Date(),
  };
  try {
    await db
      .insert(cardOverrides)
      .values({ cardId: b.cardId, ...set })
      .onConflictDoUpdate({ target: cardOverrides.cardId, set });
    return apiJson({ ok: true });
  } catch {
    return dbUnavailable();
  }
}

export async function DELETE(req: Request) {
  const id = new URL(req.url).searchParams.get("cardId");
  if (!id || id.length > 64) return badRequest("cardId is required");
  if (!(await hasParentSession())) return apiJson({ error: "parent_auth_required" }, 401);
  if (!db) return dbUnavailable();

  try {
    await db.delete(cardOverrides).where(eq(cardOverrides.cardId, id));
    return apiJson({ ok: true });
  } catch {
    return dbUnavailable();
  }
}
