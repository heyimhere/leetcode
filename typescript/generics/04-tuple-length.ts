// 04 — Length<T>
// Style: type-only puzzle  |  Difficulty: easy
//
// Concept: Tuples carry their length as a literal number type on `['length']`.
// Plain arrays only know `number`. Constraining to `readonly unknown[]`
// lets the input be a tuple while accepting `readonly` ones too.
//
// Your task: implement `Length<T>` returning the tuple's length as a numeric
// literal. (Variadic / non-tuple arrays should resolve to `number`.)
//
// Run: npx tsc --noEmit generics/04-tuple-length.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type Length<T extends readonly unknown[]> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<Length<[]>, 0>>;
type Case2 = Expect<Equal<Length<[1]>, 1>>;
type Case3 = Expect<Equal<Length<['a', 'b', 'c', 'd']>, 4>>;
type Case4 = Expect<Equal<Length<readonly ['x', 'y']>, 2>>;
type Case5 = Expect<Equal<Length<string[]>, number>>;

export {};
