import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

/**
 * The app is deliberately usable without PostgreSQL: the vocabulary and the
 * local progress store are the primary experience. API routes can still be
 * deployed next to a database and will return a clear 503 until it is set up.
 */
const databaseUrl = process.env.DATABASE_URL?.trim();

type DbPool = Pool | null;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

const configuredPool: DbPool = databaseUrl
  ? globalForDb.__arenaNextJsPostgresqlPool ?? new Pool({
      connectionString: databaseUrl,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    })
  : null;

if (configuredPool && process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlPool = configuredPool;
}

export const pool = configuredPool;
export const db = pool ? drizzle(pool) : null;
export const databaseConfigured = Boolean(databaseUrl);
