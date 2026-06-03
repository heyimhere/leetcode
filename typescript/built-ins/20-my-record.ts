// 20 — MyRecord<K, V>
// Style: built-in deep dive  |  Difficulty: easy
//
// Concept: `Record<K, V>` builds an object type where every key in K maps
// to a value of type V. It's how you express "dictionary keyed by union of
// literals" or "string-keyed map of T".
//
// Reference: `type Record<K extends keyof any, V> = { [P in K]: V };`
//
// `keyof any` resolves to `string | number | symbol` — the set of legal
// JS property key types. Constraining K to it lets callers pass a string
// literal union, a union of numbers, or `string`/`number`/`symbol`
// themselves.
//
// Your task: implement `MyRecord<K, V>`.
//
// Run: npx tsc --noEmit built-ins/20-my-record.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type MyRecord<K extends keyof any, V> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyRecord<'a' | 'b', number>, { a: number; b: number }>>;
type Case2 = Expect<Equal<MyRecord<string, boolean>, { [x: string]: boolean }>>;
type Case3 = Expect<Equal<MyRecord<never, number>, {}>>;
type Case4 = Expect<Equal<MyRecord<'x', { id: number }>, { x: { id: number } }>>;

export {};
