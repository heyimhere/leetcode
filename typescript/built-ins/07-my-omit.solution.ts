// 07 — MyOmit<T, K> (solution)
//
// Why it works:
//   - `Exclude<keyof T, K>` filters T's keys, dropping any that appear in K.
//     Keys not in T are silently ignored (Case4) — that's why we use
//     `keyof any` as K's constraint, not `keyof T`.
//   - Feeding the surviving keys into `Pick<T, ...>` reconstructs an object
//     with everything else preserved.

import type { Expect, Equal } from '../_helpers/assert';

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Case1 = Expect<Equal<MyOmit<Todo, 'description'>, { title: string; completed: boolean }>>;
type Case2 = Expect<Equal<MyOmit<Todo, 'description' | 'completed'>, { title: string }>>;
type Case3 = Expect<Equal<MyOmit<Todo, never>, Todo>>;
type Case4 = Expect<Equal<MyOmit<Todo, 'not-a-real-key'>, Todo>>;

export {};
