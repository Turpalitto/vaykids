import { NextResponse } from "next/server";

/** Consistent, cache-safe responses for the small JSON API. */
export function apiJson<T>(data: T, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "cache-control": "no-store",
    },
  });
}

export function dbUnavailable() {
  return apiJson(
    {
      error: "db_unavailable",
      message: "Синхронизация временно недоступна. Локальный режим продолжает работать.",
    },
    503,
  );
}

export function badRequest(message = "Invalid request") {
  return apiJson({ error: "bad_request", message }, 400);
}
