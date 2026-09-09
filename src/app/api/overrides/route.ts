import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { cardOverrides } from "@/db/schema";
import { CardOverrideSchema } from "@/lib/validation";

export async function GET() {
  try {
    const rows = await db.select().from(cardOverrides);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

export async function PUT(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request", message: "Invalid JSON" }, { status: 400 });
  }
  const validated = CardOverrideSchema.safeParse(raw);
  if (!validated.success) {
    return NextResponse.json({ error: "validation_error", issues: validated.error.issues }, { status: 400 });
  }
  const b = validated.data;
  const clean = (v?: string) => (v && v.trim() ? v.trim() : null);
  const set = {
    che: clean(b.che), stress: clean(b.stress), exampleChe: clean(b.exampleChe), emoji: clean(b.emoji),
    image: clean(b.image), audio: clean(b.audio), hidden: !!b.hidden, note: clean(b.note), updatedAt: new Date(),
  };
  try {
    await db.insert(cardOverrides).values({ cardId: b.cardId, ...set }).onConflictDoUpdate({ target: cardOverrides.cardId, set });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

export async function DELETE(req: Request) {
  const id = new URL(req.url).searchParams.get("cardId");
  if (!id || id.length > 64) return NextResponse.json({ error: "bad_request" }, { status: 400 });
  try {
    await db.delete(cardOverrides).where(eq(cardOverrides.cardId, id));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
