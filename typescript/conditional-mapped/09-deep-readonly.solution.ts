// 09 — DeepReadonly<T> (solution)
//
// Why it works:
//   - Outer mapped type `{ readonly [K in keyof T]: ... }` applies `readonly`
//     at this level.
//   - The conditional `T[K] extends Record<string, unknown>` checks whether
//     the value is a "plain object" — true for objects, false for functions
//     and primitives. This stops the recursion at non-object leaves so we
//     don't try to deep-freeze a function's call signature.
//   - When it IS an object, we recurse via `DeepReadonly<T[K]>`. Otherwise
//     we pass `T[K]` through unchanged.

import type { Expect, Equal } from '../_helpers/assert';

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown>
    ? DeepReadonly<T[K]>
    : T[K];
};

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      f: { g: 1 };
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly f: { readonly g: 1 };
    };
  };
};

type Case1 = Expect<Equal<DeepReadonly<X>, Expected>>;
type Case2 = Expect<Equal<DeepReadonly<{ a: 1 }>, { readonly a: 1 }>>;
type Case3 = Expect<Equal<DeepReadonly<{}>, {}>>;

export {};
