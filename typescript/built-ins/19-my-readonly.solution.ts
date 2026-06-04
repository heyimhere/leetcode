// 19 — MyReadonly<T> (solution)
//
// Why it works:
//   - `{ readonly [P in keyof T]: T[P] }` walks every key of T and
//     prepends `readonly` to its declaration in the produced type.
//   - Symmetric to `MyPartial` (which uses `?`) — both are mapped types
//     applying a single modifier across all keys.
//   - The companion `-readonly` (strip) modifier is what `Mutable<T>`
//     would use: `{ -readonly [P in keyof T]: T[P] }`.

import type { Expect, Equal } from '../_helpers/assert';

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

interface Todo {
  title: string;
  description: string;
}

type Case1 = Expect<Equal<MyReadonly<Todo>, { readonly title: string; readonly description: string }>>;
type Case2 = Expect<Equal<MyReadonly<{}>, {}>>;
type Case3 = Expect<Equal<MyReadonly<{ a: 1; b: 2 }>, { readonly a: 1; readonly b: 2 }>>;
type Case4 = Expect<Equal<MyReadonly<{ readonly a: 1 }>, { readonly a: 1 }>>;

export {};
