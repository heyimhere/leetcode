// 01 — Literal Types & Unions
// Style: type-only puzzle  |  Difficulty: easy
//
// Concept: TypeScript can hold values narrower than `string` or `number` —
// the exact literal itself ('admin', 42). Combine them with `|` to form a
// union representing "one of these specific values."
//
// Your task: define a type `Role` that is exactly the union of three string
// literals: 'admin', 'editor', 'viewer'. Then define `RoleCount` as a type
// representing the tuple length of [Role, Role, Role] — should be `3`.
//
// Run: npx tsc --noEmit basics/01-literal-and-union.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace `any` with your answer
type Role = any;
type RoleCount = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<Role, 'admin' | 'editor' | 'viewer'>>;
type Case2 = Expect<Equal<RoleCount, 3>>;

// A `Role` should NOT be assignable from an arbitrary string
type Case3 = Expect<Equal<Extract<string, Role>, never>>;

export {};
