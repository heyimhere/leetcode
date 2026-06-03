// 18 — Concat<A, B>
// Style: type-only puzzle  |  Difficulty: easy-intermediate
//
// Concept: Variadic tuple types let you spread one tuple into another at
// the type level — `[...A, ...B]` produces a new tuple by concatenation,
// preserving every element type in order.
//
// Your task: implement `Concat<A, B>` for two tuples.
//
// Run: npx tsc --noEmit generics/18-concat-tuples.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type Concat<A extends readonly unknown[], B extends readonly unknown[]> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>;
type Case2 = Expect<Equal<Concat<[], [1]>, [1]>>;
type Case3 = Expect<Equal<Concat<[1], []>, [1]>>;
type Case4 = Expect<Equal<Concat<['a'], ['b', 'c']>, ['a', 'b', 'c']>>;
type Case5 = Expect<Equal<Concat<[], []>, []>>;

export {};
