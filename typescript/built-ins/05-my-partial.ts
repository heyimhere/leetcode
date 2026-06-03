// 05 — MyPartial<T>
// Style: built-in deep dive  |  Difficulty: easy-intermediate
//
// Concept: TypeScript ships `Partial<T>` (in lib.es5.d.ts) which makes every
// property of an object type optional. Internally it's a one-line mapped type
// using the `?` modifier. Rebuild it from scratch.
//
// Reference: `type Partial<T> = { [P in keyof T]?: T[P] };`
//
// Your task: implement `MyPartial<T>` matching the built-in's behavior.
//
// Run: npx tsc --noEmit built-ins/05-my-partial.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type MyPartial<T> = T;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyPartial<{ a: 1; b: 2 }>, { a?: 1; b?: 2 }>>;
type Case2 = Expect<Equal<MyPartial<{}>, {}>>;
type Case3 = Expect<Equal<MyPartial<{ name: string; age: number }>, { name?: string; age?: number }>>;
type Case4 = Expect<Equal<MyPartial<{ a?: 1 }>, { a?: 1 }>>;

export {};
