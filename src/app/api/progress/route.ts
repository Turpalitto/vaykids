import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { profiles, progress } from "@/db/schema";
import { ProgressUpdateSchema, ProfileIdParamSchema } from "@/lib/validation";
import { ZodError } from "zod";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const profileId = url.searchParams.get("profileId");

    if (!profileId) {
      return NextResponse.json(
        { error: "bad_request", message: "profileId is required" },
        { status: 400 }
      );
    }

    const validated = ProfileIdParamSchema.safeParse({ profileId });
    if (!validated.success) {
      return NextResponse.json(
        { error: "validation_error", issues: validated.error.issues },
        { status: 400 }
      );
    }

    const [row] = await db
      .select()
      .from(progress)
      .where(eq(progress.profileId, profileId));

    return NextResponse.json(row ?? null);
  } catch (error) {
    console.error("GET /api/progress error:", error);
    return NextResponse.json(
      { error: "internal_server_error", message: "Database unavailable" },
      { status: 503 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    const validated = ProgressUpdateSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { error: "validation_error", issues: validated.error.issues },
        { status: 400 }
      );
    }

    const { profileId, profile: profileData, data } = validated.data;

    if (profileData) {
      await db
        .insert(profiles)
        .values({
          id: profileId,
          name: profileData.name ?? "Неизвестный",
          avatar: profileData.avatar ?? "👤",
          ageGroup: profileData.ageGroup ?? "7-9",
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "validation_error", issues: error.issues },
        { status: 400 }
      );
    }

    console.error("PUT /api/progress error:", error);
    return NextResponse.json(
      { error: "internal_server_error", message: "Database unavailable" },
      { status: 503 }
    );
  }
}