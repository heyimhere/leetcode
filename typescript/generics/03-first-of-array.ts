// 03 — First<T>
// Style: type-only puzzle  |  Difficulty: easy
//
// Concept: A tuple type like `[1, 2, 3]` knows the type of each position.
// You can read position 0 with indexed access `T[0]`, OR you can pattern-match
// the tuple using `infer` inside a conditional type.
//
// Your task: implement `First<T>` returning the first element of a tuple,
// or `never` if the tuple is empty.
//
// Run: npx tsc --noEmit generics/03-first-of-array.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type First<T extends readonly unknown[]> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<First<[3, 2, 1]>, 3>>;
type Case2 = Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>;
type Case3 = Expect<Equal<First<[]>, never>>;
type Case4 = Expect<Equal<First<[undefined]>, undefined>>;

export {};
