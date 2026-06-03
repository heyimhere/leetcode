// 15 — Callable with Properties (solution)
//
// Why it works:
//   - `F & { cache: ... }` is an intersection. The resulting type is
//     assignable to *both* sides — callers can invoke it as F and read
//     the cache property.
//   - Equivalent object-literal form: `{ (...a: Parameters<F>): ReturnType<F>;
//     cache: Map<unknown, unknown> }`. The intersection version composes
//     better with arbitrary F because it doesn't have to re-derive
//     parameters/return type by hand.

import type { Expect, Equal } from '../_helpers/assert';

type Memoized<F extends (...args: any[]) => any> = F & {
  cache: Map<unknown, unknown>;
};

type Add = (a: number, b: number) => number;
type MemoAdd = Memoized<Add>;

type Case1 = Expect<Equal<MemoAdd, Add & { cache: Map<unknown, unknown> }>>;

declare const m: MemoAdd;
type Case2 = Expect<Equal<ReturnType<typeof m>, number>>;
type Case3 = Expect<Equal<Parameters<typeof m>, [number, number]>>;
type Case4 = Expect<Equal<typeof m.cache, Map<unknown, unknown>>>;

export {};
