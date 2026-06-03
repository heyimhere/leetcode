// 17 — Last<T>
// Style: type-only puzzle  |  Difficulty: easy-intermediate
//
// Concept: Mirror of First<T> from problem 03. Use a variadic tuple
// pattern `[...unknown[], infer L]` to bind the final element.
//
// Your task: implement `Last<T>` returning the last element of a tuple,
// or `never` if empty.
//
// Run: npx tsc --noEmit generics/17-last-of-array.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type Last<T extends readonly unknown[]> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<Last<[1, 2, 3]>, 3>>;
type Case2 = Expect<Equal<Last<['a', 'b']>, 'b'>>;
type Case3 = Expect<Equal<Last<[]>, never>>;
type Case4 = Expect<Equal<Last<[() => 1]>, () => 1>>;
type Case5 = Expect<Equal<Last<readonly ['x', 'y', 'z']>, 'z'>>;

export {};
