// 26 — Typed Promise.all
// Style: signature design  |  Difficulty: advanced
//
// Concept: `Promise.all` should return a Promise of a TUPLE of resolved
// values — preserving each position's type. Most naive signatures collapse
// the tuple to a union or to `any[]`. The trick is forcing tuple inference
// on the input and then mapping each position through `Awaited`.
//
// The skeleton below uses `any` everywhere. Replace the signature so:
//   1. The input is treated as a tuple (not an array of unions).
//   2. The output preserves per-position resolved types.
//   3. Mixed plain values + promises both work — `[1, Promise.resolve(2)]`
//      should resolve to `[1, 2]`.
//
// Hint: parametrize on `<T extends readonly unknown[]>` and accept
// `readonly [...T]` to force tuple inference. Use the built-in `Awaited`
// inside a mapped type to unwrap each element.
//
// Run: npx tsc --noEmit signature-design/26-typed-promise-all.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace this signature. The runtime impl can stay as-is.
export function typedAll(promises: any): any {
  return Promise.all(promises as readonly unknown[]);
}

// ─── cases ─────────────────────────────────────────────────────────────
const p1 = typedAll([Promise.resolve(1), Promise.resolve('hi'), Promise.resolve(true)]);
type Case1 = Expect<Equal<typeof p1, Promise<[number, string, boolean]>>>;

// Mixed plain values + promises
const p2 = typedAll([1, Promise.resolve(2), 'three' as const]);
type Case2 = Expect<Equal<typeof p2, Promise<[number, number, 'three']>>>;

// Empty input
const p3 = typedAll([]);
type Case3 = Expect<Equal<typeof p3, Promise<[]>>>;

export {};
