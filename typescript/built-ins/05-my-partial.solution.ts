// 05 — MyPartial<T> (solution)
//
// Why it works:
//   - `keyof T` produces a union of T's property names.
//   - `[P in keyof T]` iterates that union to construct a new object type.
//   - The `?` after `]` flags every produced property as optional.
//   - Already-optional properties stay optional (idempotent), which is why
//     Case4 holds.

import type { Expect, Equal } from '../_helpers/assert';

type MyPartial<T> = { [P in keyof T]?: T[P] };

type Case1 = Expect<Equal<MyPartial<{ a: 1; b: 2 }>, { a?: 1; b?: 2 }>>;
type Case2 = Expect<Equal<MyPartial<{}>, {}>>;
type Case3 = Expect<Equal<MyPartial<{ name: string; age: number }>, { name?: string; age?: number }>>;
type Case4 = Expect<Equal<MyPartial<{ a?: 1 }>, { a?: 1 }>>;

export {};
