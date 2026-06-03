// 21 — MyAwaited<T>
// Style: built-in deep dive  |  Difficulty: intermediate
//
// Concept: `Awaited<T>` peels a Promise to get its resolved type. If T is
// `Promise<string>`, the result is `string`. If T is `Promise<Promise<X>>`,
// it recurses until there's no more Promise.
//
// Reference (simplified — the lib version handles thenables more carefully):
//   `type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;`
//
// Your task: implement `MyAwaited<T>` recursively. Non-promises pass through
// unchanged; nested promises fully unwrap.
//
// Run: npx tsc --noEmit built-ins/21-my-awaited.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type MyAwaited<T> = T;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyAwaited<Promise<string>>, string>>;
type Case2 = Expect<Equal<MyAwaited<Promise<Promise<number>>>, number>>;
type Case3 = Expect<Equal<MyAwaited<string>, string>>;
type Case4 = Expect<Equal<MyAwaited<Promise<Promise<Promise<boolean>>>>, boolean>>;
type Case5 = Expect<Equal<MyAwaited<Promise<{ id: number }>>, { id: number }>>;

export {};
