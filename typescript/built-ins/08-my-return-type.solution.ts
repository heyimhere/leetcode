// 08 — MyReturnType<F> (solution)
//
// Why it works:
//   - `F extends (...args: any) => infer R` is a conditional type that
//     pattern-matches any callable. The `infer R` binds whatever sits in the
//     return slot to a fresh type variable R, which we then return.
//   - Using `any` (not `unknown`) for the parameter rest-tuple matches the
//     lib's permissiveness — `MyReturnType` doesn't care about parameters.
//   - The fallback `never` (rather than `any`) yields a louder error if you
//     ever pass a non-function.

import type { Expect, Equal } from '../_helpers/assert';

type MyReturnType<F> = F extends (...args: any) => infer R ? R : never;

type Case1 = Expect<Equal<MyReturnType<() => string>, string>>;
type Case2 = Expect<Equal<MyReturnType<(x: number) => number[]>, number[]>>;
type Case3 = Expect<Equal<MyReturnType<() => void>, void>>;

const fn = (x: number, y: number) => ({ sum: x + y });
type Case4 = Expect<Equal<MyReturnType<typeof fn>, { sum: number }>>;

type Case5 = Expect<Equal<MyReturnType<() => Promise<'ok'>>, Promise<'ok'>>>;

export {};
