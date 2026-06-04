// 06 — MyPick<T, K>
// Style: built-in deep dive  |  Difficulty: easy-intermediate
//
// Concept: `Pick<T, K>` keeps only the properties of T whose names are in K.
// `K` must be constrained to `keyof T` so callers can't pass garbage keys —
// this catches typos at compile time.
//
// Reference: `type Pick<T, K extends keyof T> = { [P in K]: T[P] };`
//
// Your task: implement `MyPick<T, K>`. Bonus: notice that `K extends keyof T`
// is what makes Case4 (passing 'nope') a compile error rather than silent.
//
// Run: npx tsc --noEmit built-ins/06-my-pick.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer. Don't forget the constraint on K.
type MyPick<T, K> = any;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyPick<Todo, 'title'>, { title: string }>>;
type Case2 = Expect<Equal<MyPick<Todo, 'title' | 'completed'>, { title: string; completed: boolean }>>;
type Case3 = Expect<Equal<MyPick<Todo, never>, {}>>;

// Case4: Uncomment after solving — should be a TYPE ERROR
// type Case4 = MyPick<Todo, 'nope'>;

export {};
