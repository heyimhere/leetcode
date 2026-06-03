// 23 — TupleToObject<T> (solution)
//
// Why it works:
//   - `T[number]` collapses a tuple into the union of its element types.
//     For `['a', 'b']` that's `'a' | 'b'`.
//   - `{ [K in T[number]]: K }` then iterates that union as keys, using
//     each key's own value as the property value.
//   - Constraining T's elements to `string | number | symbol` keeps the
//     keys legal — TS will reject `TupleToObject<[boolean]>` at the call
//     site rather than producing a nonsensical result.

import type { Expect, Equal } from '../_helpers/assert';

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K;
};

const tuple = ['tesla', 'model 3', 'model x'] as const;

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
