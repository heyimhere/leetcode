// 07 — MyOmit<T, K>
// Style: built-in deep dive  |  Difficulty: intermediate
//
// Concept: `Omit<T, K>` is the opposite of `Pick` — it removes the named keys.
// The standard-library implementation is built by composing `Pick` and
// `Exclude`: pick every key of T *except* the ones in K.
//
// Reference: `type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;`
//
// Your task: implement `MyOmit<T, K>`. You may use TypeScript's built-in
// `Exclude` (or define a local one — bonus points).
//
// Note: the lib types use `keyof any` (= `string | number | symbol`) for K
// rather than `keyof T`, so you can pre-declare keys to omit even if they
// don't exist on T. Match that looser constraint.
//
// Run: npx tsc --noEmit built-ins/07-my-omit.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type MyOmit<T, K extends keyof any> = any;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyOmit<Todo, 'description'>, { title: string; completed: boolean }>>;
type Case2 = Expect<Equal<MyOmit<Todo, 'description' | 'completed'>, { title: string }>>;
type Case3 = Expect<Equal<MyOmit<Todo, never>, Todo>>;
// Omitting a key that doesn't exist is a no-op (matches the std lib behavior)
type Case4 = Expect<Equal<MyOmit<Todo, 'not-a-real-key'>, Todo>>;

export {};
