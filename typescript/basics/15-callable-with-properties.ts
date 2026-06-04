// 15 — Callable with Properties
// Style: type-only puzzle  |  Difficulty: easy-intermediate
//
// Concept: A function in JavaScript is also an object — you can attach
// properties to it (`fn.cache = ...`). TypeScript can describe this using
// intersection: `F & { cache: Map<...> }` produces a value that's both
// callable as F AND has the extra property.
//
// (You can also write this with an object literal containing a call
// signature: `{ (args): R; cache: Map<...> }` — try that as a bonus.)
//
// Your task: implement `Memoized<F>` — a function with the same signature
// as F plus a `cache: Map<unknown, unknown>` property.
//
// Run: npx tsc --noEmit basics/15-callable-with-properties.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type Memoized<F extends (...args: any[]) => any> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Add = (a: number, b: number) => number;
type MemoAdd = Memoized<Add>;

type Case1 = Expect<Equal<MemoAdd, Add & { cache: Map<unknown, unknown> }>>;

// Should still be callable with the original signature
declare const m: MemoAdd;
type Case2 = Expect<Equal<ReturnType<typeof m>, number>>;
type Case3 = Expect<Equal<Parameters<typeof m>, [number, number]>>;

// And expose the cache property
type Case4 = Expect<Equal<typeof m.cache, Map<unknown, unknown>>>;

export {};
