// 26 — Typed Promise.all (solution)
//
// Why it works:
//   - `<T extends readonly unknown[]>` declares T as a tuple-or-array
//     generic.
//   - `readonly [...T]` in the parameter position is the magic incantation
//     that forces TS to infer T as a *tuple* (preserving positions and
//     literals) rather than collapsing to a wide array type.
//   - The return type `Promise<{ [K in keyof T]: Awaited<T[K]> }>` maps
//     each tuple position through `Awaited` — peeling Promises where
//     present, passing plain values through unchanged.
//   - Because mapped types over tuples preserve the tuple shape, the
//     result is `Promise<[A, B, C]>` not `Promise<Array<A | B | C>>`.

import type { Expect, Equal } from '../_helpers/assert';

export function typedAll<T extends readonly unknown[]>(
  promises: readonly [...T],
): Promise<{ [K in keyof T]: Awaited<T[K]> }> {
  return Promise.all(promises) as Promise<{ [K in keyof T]: Awaited<T[K]> }>;
}

const p1 = typedAll([Promise.resolve(1), Promise.resolve('hi'), Promise.resolve(true)]);
type Case1 = Expect<Equal<typeof p1, Promise<[number, string, boolean]>>>;

const p2 = typedAll([1, Promise.resolve(2), 'three' as const]);
type Case2 = Expect<Equal<typeof p2, Promise<[number, number, 'three']>>>;

const p3 = typedAll([]);
type Case3 = Expect<Equal<typeof p3, Promise<[]>>>;

export {};
