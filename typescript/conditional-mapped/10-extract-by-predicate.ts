// 10 — PickByValueType<T, V>
// Style: type-only puzzle  |  Difficulty: advanced
//
// Concept: Mapped types support *key remapping* with `as` clauses. By emitting
// `never` for keys you want to drop, you can filter properties by *value type*
// rather than by name — something `Pick` can't express directly.
//
// Your task: implement `PickByValueType<T, V>` returning only the properties
// of T whose value type is assignable to V.
//
// Run: npx tsc --noEmit conditional-mapped/10-extract-by-predicate.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type PickByValueType<T, V> = any;

interface Mixed {
  id: number;
  name: string;
  age: number;
  active: boolean;
  tags: string[];
}

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<PickByValueType<Mixed, number>, { id: number; age: number }>>;
type Case2 = Expect<Equal<PickByValueType<Mixed, string>, { name: string }>>;
type Case3 = Expect<Equal<PickByValueType<Mixed, boolean>, { active: boolean }>>;
type Case4 = Expect<Equal<PickByValueType<Mixed, never>, {}>>;
type Case5 = Expect<Equal<PickByValueType<Mixed, string | number>, { id: number; name: string; age: number }>>;

export {};
