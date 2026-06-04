// 22 — CapitalizeKeys<T>
// Style: type-only puzzle  |  Difficulty: intermediate
//
// Concept: TypeScript ships *string manipulation types* — `Uppercase`,
// `Lowercase`, `Capitalize`, `Uncapitalize` — that operate on string
// literal types. Combined with key remapping in a mapped type, you can
// transform every property name in an object type.
//
// Your task: implement `CapitalizeKeys<T>` so that each string key is
// capitalized (`'name'` → `'Name'`). Non-string keys pass through unchanged.
//
// Run: npx tsc --noEmit conditional-mapped/22-capitalize-keys.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type CapitalizeKeys<T> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<
  CapitalizeKeys<{ name: string; age: number }>,
  { Name: string; Age: number }
>>;

type Case2 = Expect<Equal<
  CapitalizeKeys<{ foo: 1; bar: 2; baz: 3 }>,
  { Foo: 1; Bar: 2; Baz: 3 }
>>;

type Case3 = Expect<Equal<CapitalizeKeys<{}>, {}>>;

// Already-capitalized keys stay capitalized
type Case4 = Expect<Equal<
  CapitalizeKeys<{ Already: 1; lower: 2 }>,
  { Already: 1; Lower: 2 }
>>;

export {};
