// 23 — TupleToObject<T>
// Style: type-only puzzle  |  Difficulty: intermediate
//
// Concept: A common "enum-like" pattern in JS is `const COLORS = ['red',
// 'green', 'blue'] as const` followed by an object form
// `{ red: 'red', green: 'green', blue: 'blue' }`. The type-level twin
// converts the tuple into that object shape.
//
// Your task: implement `TupleToObject<T>` so each element of the tuple
// becomes both a key and its own value in the result. Constrain T's
// elements to valid key types (`string | number | symbol`).
//
// Run: npx tsc --noEmit conditional-mapped/23-tuple-to-object.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type TupleToObject<T extends readonly (string | number | symbol)[]> = any;

const tuple = ['tesla', 'model 3', 'model x'] as const;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<
  TupleToObject<typeof tuple>,
  { tesla: 'tesla'; 'model 3': 'model 3'; 'model x': 'model x' }
>>;

type Case2 = Expect<Equal<
  TupleToObject<['a', 'b']>,
  { a: 'a'; b: 'b' }
>>;

type Case3 = Expect<Equal<
  TupleToObject<[1, 2, 3]>,
  { 1: 1; 2: 2; 3: 3 }
>>;

type Case4 = Expect<Equal<TupleToObject<[]>, {}>>;

export {};
