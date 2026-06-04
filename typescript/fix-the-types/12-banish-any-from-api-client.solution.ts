// 12 — Banish `any` From the API Client (solution)
//
// Why it works:
//   - `<TResponse>` lets the caller declare what shape they expect back.
//     The function itself doesn't know — but the caller does — so we push
//     the responsibility to the call site and parametrize on it.
//   - `apiPost<TResponse, TBody>` adds a second generic for the request
//     body. Marking `body: TBody` makes it required AND statically checked.
//   - The internal `as TResponse` is a *boundary cast*: JSON from the wire
//     is genuinely `unknown` at runtime. The cast says "I trust the caller's
//     declared shape." This is the legitimate use of casts — at the seam
//     between typed-world and untyped-world.

import type { Expect, Equal } from '../_helpers/assert';

export async function apiGet<TResponse>(url: string): Promise<TResponse> {
  const res = await fetch(url);
  return (await res.json()) as TResponse;
}

export async function apiPost<TResponse, TBody>(url: string, body: TBody): Promise<TResponse> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  return (await res.json()) as TResponse;
}

type User = { id: number; name: string };
type CreateUserBody = { name: string };

type Case1 = Expect<Equal<Awaited<ReturnType<typeof apiGet<User>>>, User>>;
type Case2 = Expect<Equal<Parameters<typeof apiPost<User, CreateUserBody>>[1], CreateUserBody>>;
type Case3 = Expect<Equal<Awaited<ReturnType<typeof apiPost<User, CreateUserBody>>>, User>>;

export {};
