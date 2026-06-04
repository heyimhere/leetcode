// 04 — Length<T> (solution)
//
// Why it works:
//   - A *tuple* like `['a', 'b']` has `['length']` typed as the literal `2`.
//   - A *generic array* like `string[]` has `['length']` typed as `number`.
//   - TypeScript distinguishes these at the type level, so `T['length']`
//     gives a precise literal for tuples and `number` for unbounded arrays.

import type { Expect, Equal } from '../_helpers/assert';

type Length<T extends readonly unknown[]> = T['length'];

type Case1 = Expect<Equal<Length<[]>, 0>>;
type Case2 = Expect<Equal<Length<[1]>, 1>>;
type Case3 = Expect<Equal<Length<['a', 'b', 'c', 'd']>, 4>>;
type Case4 = Expect<Equal<Length<readonly ['x', 'y']>, 2>>;
type Case5 = Expect<Equal<Length<string[]>, number>>;

export {};
