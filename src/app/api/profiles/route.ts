import { NextResponse } from "next/server";
import { db } from "@/db";
import { profiles } from "@/db/schema";
import { ProfilePostSchema } from "@/lib/validation";

export async function GET() {
  try {
    const rows = await db.select().from(profiles);
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request", message: "Invalid JSON" }, { status: 400 });
  }
  const validated = ProfilePostSchema.safeParse(raw);
  if (!validated.success) {
    return NextResponse.json({ error: "validation_error", issues: validated.error.issues }, { status: 400 });
  }
  const { id, name, avatar, ageGroup } = validated.data;
  const row = {
    id,
    name,
    avatar: avatar ?? "🦊",
    ageGroup: ageGroup ?? "small",
  };
  try {
    await db
      .insert(profiles)
      .values(row)
      .onConflictDoUpdate({ target: profiles.id, set: { name: row.name, avatar: row.avatar, ageGroup: row.ageGroup } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
