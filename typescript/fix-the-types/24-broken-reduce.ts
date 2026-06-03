// 24 — Broken Reduce
// Style: fix-the-types  |  Difficulty: easy-intermediate
//
// Concept: `Array.prototype.reduce` infers its accumulator type from the
// initial value. Pass `{}` and TS infers `{}` — which has NO index
// signature, so `acc[k] = ...` is a type error. The fix is to tell reduce
// what the accumulator's type really is.
//
// Your task: fix `countBy` below so it compiles AND the cases pass. You
// may only change the body — keep the signature exactly as written.
//
// Run: npx tsc --noEmit fix-the-types/24-broken-reduce.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Fix this body. Do NOT change the signature.
export function countBy<T>(items: T[], key: (item: T) => string): Record<string, number> {
  return items.reduce((acc, item) => {
    const k = key(item);
    // BUG: TS infers `acc` as `{}` from the initial value, so `acc[k]`
    // and the assignment below both error. Give reduce a hint.
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
}

// ─── cases ─────────────────────────────────────────────────────────────
const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const counts = countBy(fruits, (f) => f);

type Case1 = Expect<Equal<typeof counts, Record<string, number>>>;
type Case2 = Expect<Equal<ReturnType<typeof countBy<string>>, Record<string, number>>>;

export {};
