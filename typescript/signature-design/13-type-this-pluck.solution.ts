// 13 — Type This `pluck` (solution)
//
// Why it works:
//   - `T` captures the element type of the array. `K extends keyof T`
//     constrains the key to a real property of that element — typos
//     fail at the call site.
//   - `T[K][]` is the return type: indexed access `T[K]` gives the value's
//     type, and the `[]` wraps it into an array. This propagates per-key
//     precision: `pluck(users, 'name')` → `string[]`, `'id'` → `number[]`.
//   - The `objects: T[]` parameter is what kicks off T inference. Without
//     it, TypeScript has nothing to infer T from.

import type { Expect, Equal } from '../_helpers/assert';

export function pluck<T, K extends keyof T>(objects: T[], key: K): T[K][] {
  return objects.map((o) => o[key]);
}

const users = [
  { id: 1, name: 'Ada', active: true },
  { id: 2, name: 'Linus', active: false },
];

const names = pluck(users, 'name');
const ids = pluck(users, 'id');
const flags = pluck(users, 'active');

type Case1 = Expect<Equal<typeof names, string[]>>;
type Case2 = Expect<Equal<typeof ids, number[]>>;
type Case3 = Expect<Equal<typeof flags, boolean[]>>;

// @ts-expect-error — 'nope' is not a key of the user object
const bad = pluck(users, 'nope');

export {};
