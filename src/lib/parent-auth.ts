import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const PARENT_COOKIE = "vaykids_parent_session";
const CHALLENGE_TTL_MS = 5 * 60 * 1000;
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const secret = process.env.PARENT_SESSION_SECRET || randomBytes(32).toString("hex");

type Challenge = { a: number; b: number; expiresAt: number; attempts: number };
const MAX_CHALLENGE_ATTEMPTS = 5;
const challenges = new Map<string, Challenge>();

function cleanup() {
  const now = Date.now();
  for (const [id, challenge] of challenges) {
    if (challenge.expiresAt <= now) challenges.delete(id);
  }
}

export function createParentChallenge() {
  cleanup();
  const id = randomBytes(18).toString("base64url");
  const challenge = {
    a: randomInt(3, 9),
    b: randomInt(2, 9),
    expiresAt: Date.now() + CHALLENGE_TTL_MS,
    attempts: 0,
  };
  challenges.set(id, challenge);
  return { id, a: challenge.a, b: challenge.b };
}

function sign(payload: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function issueParentSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = String(expiresAt);
  return `${payload}.${sign(payload)}`;
}

export function verifyParentChallenge(id: string, answer: number) {
  cleanup();
  const challenge = challenges.get(id);
  if (!challenge || challenge.expiresAt <= Date.now() || challenge.attempts >= MAX_CHALLENGE_ATTEMPTS) return null;
  challenge.attempts += 1;
  if (!Number.isSafeInteger(answer) || answer !== challenge.a * challenge.b) return null;
  challenges.delete(id);
  return issueParentSession();
}

export function isParentSessionValid(value: string | undefined) {
  if (!value) return false;
  const [payload, signature] = value.split(".");
  if (!payload || !signature || !/^\d+$/.test(payload)) return false;
  const expiresAt = Number(payload);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000)) return false;
  const expected = sign(payload);
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function hasParentSession() {
  const jar = await cookies();
  return isParentSessionValid(jar.get(PARENT_COOKIE)?.value);
}
