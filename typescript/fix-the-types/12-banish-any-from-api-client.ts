// 12 — Banish `any` From the API Client
// Style: fix-the-types  |  Difficulty: intermediate
//
// Concept: `any` is a giant escape hatch — it silently disables checking
// in every direction. A well-typed wrapper around `fetch` should let callers
// declare the response shape they expect and get back a precisely-typed
// promise. No `any`. No `unknown` leaking to the caller.
//
// Your task: rewrite `apiGet` and `apiPost` so:
//   1. No `any` anywhere in the public signatures.
//   2. Callers express the expected response type via a generic parameter.
//   3. `apiPost`'s body parameter is required and statically typed by a
//      second generic parameter.
//
// You may keep the internal `await res.json()` cast — that's the legitimate
// boundary between "untyped JSON from the wire" and "typed value to caller."
//
// Run: npx tsc --noEmit fix-the-types/12-banish-any-from-api-client.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Fix these two signatures
export async function apiGet(url: string): Promise<any> {
  const res = await fetch(url);
  return res.json();
}

export async function apiPost(url: string, body: any): Promise<any> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.json();
}

// ─── cases (must hold after your fix) ─────────────────────────────────
type User = { id: number; name: string };
type CreateUserBody = { name: string };

type Case1 = Expect<Equal<Awaited<ReturnType<typeof apiGet<User>>>, User>>;
type Case2 = Expect<Equal<Parameters<typeof apiPost<User, CreateUserBody>>[1], CreateUserBody>>;
type Case3 = Expect<Equal<Awaited<ReturnType<typeof apiPost<User, CreateUserBody>>>, User>>;

export {};
