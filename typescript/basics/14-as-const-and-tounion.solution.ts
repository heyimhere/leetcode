// 14 — `as const` and ToUnion<T> (solution)
//
// Why it works:
//   - For any tuple `T`, `T[number]` gives a union of all element types
//     (because `number` indexes every position). For `[1, 2, 3]` it's
//     `1 | 2 | 3`; for an empty tuple `[]` it's `never`.
//   - The `readonly` modifier and `as const` are the bridge from
//     "JS values" to "narrow literal types" — without them you'd lose
//     the literal information before this type ever sees the tuple.

import type { Expect, Equal } from '../_helpers/assert';

type ToUnion<T extends readonly unknown[]> = T[number];

const ROLES = ['admin', 'editor', 'viewer'] as const;
type Role = ToUnion<typeof ROLES>;

type Case1 = Expect<Equal<Role, 'admin' | 'editor' | 'viewer'>>;
type Case2 = Expect<Equal<ToUnion<[1, 2, 3]>, 1 | 2 | 3>>;
type Case3 = Expect<Equal<ToUnion<[]>, never>>;
type Case4 = Expect<Equal<ToUnion<readonly ['x']>, 'x'>>;

export {};
