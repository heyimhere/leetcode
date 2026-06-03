// 08 — MyReturnType<F>
// Style: built-in deep dive  |  Difficulty: intermediate
//
// Concept: `ReturnType<F>` extracts a function's return type. It's powered by
// a conditional type that uses `infer` to bind the return-type "slot" of a
// function signature to a fresh type variable.
//
// Reference:
//   `type ReturnType<T extends (...a: any) => any> =
//      T extends (...a: any) => infer R ? R : any;`
//
// Your task: implement `MyReturnType<F>`. Accept any callable.
//
// Run: npx tsc --noEmit built-ins/08-my-return-type.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type MyReturnType<F> = any;

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<MyReturnType<() => string>, string>>;
type Case2 = Expect<Equal<MyReturnType<(x: number) => number[]>, number[]>>;
type Case3 = Expect<Equal<MyReturnType<() => void>, void>>;

const fn = (x: number, y: number) => ({ sum: x + y });
type Case4 = Expect<Equal<MyReturnType<typeof fn>, { sum: number }>>;

// Async functions return a Promise — inference handles this naturally
type Case5 = Expect<Equal<MyReturnType<() => Promise<'ok'>>, Promise<'ok'>>>;

export {};
