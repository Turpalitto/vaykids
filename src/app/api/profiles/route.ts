import { eq } from "drizzle-orm";
import { db } from "@/db";
import { profiles, progress } from "@/db/schema";
import { ProfilePostSchema, ProfileIdParamSchema } from "@/lib/validation";
import { apiJson, badRequest, dbUnavailable } from "@/lib/api";
import { hasParentSession } from "@/lib/parent-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await hasParentSession())) return apiJson({ error: "parent_auth_required" }, 401);
  if (!db) return dbUnavailable();

  try {
    const rows = await db.select().from(profiles);
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
  const validated = ProfilePostSchema.safeParse(raw);
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!db) return dbUnavailable();

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
    return apiJson({ ok: true });
  } catch {
    return dbUnavailable();
  }
}

export async function DELETE(req: Request) {
  const profileId = new URL(req.url).searchParams.get("id");
  const validated = ProfileIdParamSchema.safeParse({ profileId });
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!db) return dbUnavailable();

  try {
    await db.delete(progress).where(eq(progress.profileId, validated.data.profileId));
    await db.delete(profiles).where(eq(profiles.id, validated.data.profileId));
    return apiJson({ ok: true });
  } catch {
    return dbUnavailable();
  }
}
