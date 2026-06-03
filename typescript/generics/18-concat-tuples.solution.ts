// 18 — Concat<A, B> (solution)
//
// Why it works:
//   - `[...A, ...B]` at the type level mirrors the JS array spread. TS
//     evaluates the spreads positionally, producing a fixed-length tuple
//     when both inputs are tuples.
//   - This unlocks a whole family of tuple algorithms (Push, Unshift, Tail,
//     Reverse, Flatten) — all built from `[...X, Y]` or `[X, ...Y]` shapes.

import type { Expect, Equal } from '../_helpers/assert';

type Concat<A extends readonly unknown[], B extends readonly unknown[]> = [...A, ...B];

type Case1 = Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>;
type Case2 = Expect<Equal<Concat<[], [1]>, [1]>>;
type Case3 = Expect<Equal<Concat<[1], []>, [1]>>;
type Case4 = Expect<Equal<Concat<['a'], ['b', 'c']>, ['a', 'b', 'c']>>;
type Case5 = Expect<Equal<Concat<[], []>, []>>;

export {};
