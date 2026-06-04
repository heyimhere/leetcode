// 14 — `as const` and ToUnion<T>
// Style: type-only puzzle  |  Difficulty: easy
//
// Concept: Without `as const`, the literal `['a', 'b', 'c']` widens to
// `string[]`. With `as const`, it stays as the narrow readonly tuple
// `readonly ['a', 'b', 'c']`. Once you have that tuple, indexed access
// with `T[number]` gives you the union of its elements — a common pattern
// for deriving a string-literal union from a declared list.
//
// Your task: implement `ToUnion<T>` returning the union of element types
// of a readonly tuple. Then use it on the sample `ROLES`.
//
// Run: npx tsc --noEmit basics/14-as-const-and-tounion.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type ToUnion<T extends readonly unknown[]> = any;

// `as const` is required — without it, `ROLES` would be `string[]` and
// `ToUnion<typeof ROLES>` would be just `string`.
const ROLES = ['admin', 'editor', 'viewer'] as const;
type Role = ToUnion<typeof ROLES>;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<Role, 'admin' | 'editor' | 'viewer'>>;
type Case2 = Expect<Equal<ToUnion<[1, 2, 3]>, 1 | 2 | 3>>;
type Case3 = Expect<Equal<ToUnion<[]>, never>>;
type Case4 = Expect<Equal<ToUnion<readonly ['x']>, 'x'>>;

export {};
