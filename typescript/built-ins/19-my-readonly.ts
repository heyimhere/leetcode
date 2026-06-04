// 19 — MyReadonly<T>
// Style: built-in deep dive  |  Difficulty: easy
//
// Concept: `Readonly<T>` marks every property of T as `readonly` — they
// can be read but not reassigned. One-line mapped type with the `readonly`
// modifier.
//
// Reference: `type Readonly<T> = { readonly [P in keyof T]: T[P] };`
//
// Your task: implement `MyReadonly<T>`.
//
// Run: npx tsc --noEmit built-ins/19-my-readonly.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type MyReadonly<T> = T;

interface Todo {
  title: string;
  description: string;
}

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyReadonly<Todo>, { readonly title: string; readonly description: string }>>;
type Case2 = Expect<Equal<MyReadonly<{}>, {}>>;
type Case3 = Expect<Equal<MyReadonly<{ a: 1; b: 2 }>, { readonly a: 1; readonly b: 2 }>>;
// Already-readonly properties stay readonly (idempotent)
type Case4 = Expect<Equal<MyReadonly<{ readonly a: 1 }>, { readonly a: 1 }>>;

export {};
