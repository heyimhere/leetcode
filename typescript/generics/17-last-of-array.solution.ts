// 17 — Last<T> (solution)
//
// Why it works:
//   - `[...unknown[], infer L]` matches any tuple with at least one element
//     and binds the LAST element to L. The leading `...unknown[]` swallows
//     everything before it.
//   - Empty tuples don't match the pattern, so they fall through to `never`
//     — the same edge case as First<[]>.
//   - `T[T['length']]` looks tempting but typically resolves to `undefined`
//     for fixed-length tuples; the infer-based pattern is the canonical
//     answer.

import type { Expect, Equal } from '../_helpers/assert';

type Last<T extends readonly unknown[]> =
  T extends readonly [...unknown[], infer L] ? L : never;

type Case1 = Expect<Equal<Last<[1, 2, 3]>, 3>>;
type Case2 = Expect<Equal<Last<['a', 'b']>, 'b'>>;
type Case3 = Expect<Equal<Last<[]>, never>>;
type Case4 = Expect<Equal<Last<[() => 1]>, () => 1>>;
type Case5 = Expect<Equal<Last<readonly ['x', 'y', 'z']>, 'z'>>;

export {};
