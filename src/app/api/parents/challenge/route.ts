import { apiJson } from "@/lib/api";
import { createParentChallenge } from "@/lib/parent-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return apiJson(createParentChallenge());
}
