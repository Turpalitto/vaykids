import { NextResponse } from "next/server";
import { apiJson, badRequest } from "@/lib/api";
import { PARENT_COOKIE, verifyParentChallenge } from "@/lib/parent-auth";
import { ParentChallengeSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return badRequest("Invalid JSON");
  }
  const validated = ParentChallengeSchema.safeParse(raw);
  if (!validated.success) {
    return apiJson({ error: "validation_error", issues: validated.error.issues }, 400);
  }

  const session = verifyParentChallenge(validated.data.id, validated.data.answer);
  if (!session) return apiJson({ error: "invalid_challenge" }, 401);

  const response = NextResponse.json({ ok: true }, { headers: { "cache-control": "no-store" } });
  response.cookies.set(PARENT_COOKIE, session, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
