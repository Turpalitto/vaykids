import { sql } from "drizzle-orm";
import { db, databaseConfigured } from "@/db";
import { apiJson } from "@/lib/api";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Liveness is green in local/offline mode; add ?ready=1 to require PostgreSQL. */
export async function GET(req: Request) {
  const ready = new URL(req.url).searchParams.get("ready") === "1";
  if (!db) return apiJson({ ok: !ready, database: false }, ready ? 503 : 200);

  try {
    await db.execute(sql`select 1`);
    return apiJson({ ok: true, database: databaseConfigured });
  } catch {
    return apiJson({ ok: !ready, database: true }, ready ? 503 : 200);
  }
}
