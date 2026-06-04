// 27 — Deep Get
// Style: signature design  |  Difficulty: intermediate
//
// Concept: `getDeep(obj, 'a', 'b')` returns `obj['a']['b']`. The signature
// needs nested generic constraints: K1 must be a key of T; K2 must be a
// key of T[K1]. Each generic is constrained by the *previous* generic's
// chosen value.
//
// This is a real pattern you'll see in form-libraries, lens libraries,
// state selectors. It's what makes typed `_.get()` possible.
//
// Your task: write the signature for `getDeep` so all four key positions
// are constrained and the return type is the precisely-narrowed value.
//
// Run: npx tsc --noEmit signature-design/27-deep-get.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your typed signature. Implementation stays as-is.
export function getDeep(obj: any, k1: any, k2: any): any {
  return obj[k1][k2];
}

// ─── cases ─────────────────────────────────────────────────────────────
const data = {
  user: { name: 'Ada', age: 30 },
  meta: { createdAt: '2024-01-01', version: 7 },
};

const name = getDeep(data, 'user', 'name');
const age = getDeep(data, 'user', 'age');
const version = getDeep(data, 'meta', 'version');

type Case1 = Expect<Equal<typeof name, string>>;
type Case2 = Expect<Equal<typeof age, number>>;
type Case3 = Expect<Equal<typeof version, number>>;

// Should be TYPE ERRORS after solving
// @ts-expect-error — 'nope' is not a key of data
const e1 = getDeep(data, 'nope', 'name');
// @ts-expect-error — 'nope' is not a key of data.user
const e2 = getDeep(data, 'user', 'nope');

export {};
