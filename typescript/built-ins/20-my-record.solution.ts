// 20 — MyRecord<K, V> (solution)
//
// Why it works:
//   - `{ [P in K]: V }` iterates the union K once per member, producing one
//     property per member, each with value type V.
//   - When K is a literal union like `'a' | 'b'`, the result is a fixed
//     object shape `{ a: V; b: V }`.
//   - When K is `string` (or `number`), the result is an *index signature*
//     `{ [x: string]: V }` — TS automatically collapses the wide key type
//     into an index signature rather than enumerating every string.

import type { Expect, Equal } from '../_helpers/assert';

type MyRecord<K extends keyof any, V> = { [P in K]: V };

type Case1 = Expect<Equal<MyRecord<'a' | 'b', number>, { a: number; b: number }>>;
type Case2 = Expect<Equal<MyRecord<string, boolean>, { [x: string]: boolean }>>;
type Case3 = Expect<Equal<MyRecord<never, number>, {}>>;
type Case4 = Expect<Equal<MyRecord<'x', { id: number }>, { x: { id: number } }>>;

export {};
