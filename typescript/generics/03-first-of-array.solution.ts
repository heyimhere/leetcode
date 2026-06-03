// 03 — First<T> (solution)
//
// Why it works:
//   - `T extends [infer F, ...unknown[]]` matches any non-empty tuple
//     and binds `F` to the first element. Empty tuples don't match,
//     so they fall through to `never`.
//   - The simpler `T[0]` works for non-empty tuples but yields
//     `undefined` for `[]` — not `never` — so it fails Case3.

import type { Expect, Equal } from '../_helpers/assert';

type First<T extends readonly unknown[]> =
  T extends readonly [infer F, ...unknown[]] ? F : never;

type Case1 = Expect<Equal<First<[3, 2, 1]>, 3>>;
type Case2 = Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>;
type Case3 = Expect<Equal<First<[]>, never>>;
type Case4 = Expect<Equal<First<[undefined]>, undefined>>;

export {};
