// 06 — MyPick<T, K> (solution)
//
// Why it works:
//   - `K extends keyof T` enforces at the call site that every key in K is
//     a valid key of T. Pass `'nope'` and you get a precise compile error.
//   - `[P in K]: T[P]` iterates the requested key union and looks up each
//     value type via indexed access on T.

import type { Expect, Equal } from '../_helpers/assert';

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Case1 = Expect<Equal<MyPick<Todo, 'title'>, { title: string }>>;
type Case2 = Expect<Equal<MyPick<Todo, 'title' | 'completed'>, { title: string; completed: boolean }>>;
type Case3 = Expect<Equal<MyPick<Todo, never>, {}>>;

// @ts-expect-error — 'nope' is not a key of Todo
type Case4 = MyPick<Todo, 'nope'>;

export {};
