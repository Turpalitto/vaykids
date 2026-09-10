import { eq } from "drizzle-orm";
import { db } from "@/db";
import { profiles, progress } from "@/db/schema";
import { ProgressUpdateSchema, ProfileIdParamSchema } from "@/lib/validation";
import { apiJson, badRequest, dbUnavailable } from "@/lib/api";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const profileId = url.searchParams.get("profileId");
  const validated = ProfileIdParamSchema.safeParse({ profileId });

  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!db) return dbUnavailable();

  try {
    const [row] = await db
      .select()
      .from(progress)
      .where(eq(progress.profileId, validated.data.profileId));

    return apiJson(row ?? null);
  } catch (error) {
    console.error("GET /api/progress error:", error);
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

  const validated = ProgressUpdateSchema.safeParse(raw);
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }
  if (!db) return dbUnavailable();

  const { profileId, profile: profileData, data } = validated.data;

  try {
    if (profileData) {
      await db
        .insert(profiles)
        .values({
          id: profileId,
          name: profileData.name ?? "Неизвестный",
          avatar: profileData.avatar ?? "👤",
          ageGroup: profileData.ageGroup ?? "small",
        })
        .onConflictDoNothing();
    }

    const stars = data.stars ?? 0;
    const learnedCount = Array.isArray(data.learned) ? data.learned.length : 0;

    await db
      .insert(progress)
      .values({
        profileId,
        data,
        stars,
        learnedCount,
      })
      .onConflictDoUpdate({
        target: progress.profileId,
        set: {
          data,
          stars,
          learnedCount,
          updatedAt: new Date(),
        },
      });

    return apiJson({ ok: true });
  } catch (error) {
    console.error("PUT /api/progress error:", error);
    return dbUnavailable();
  }
}
