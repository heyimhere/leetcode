// 24 — Broken Reduce (solution)
//
// Why it works:
//   - `reduce` is overloaded. The single-arg form infers the accumulator
//     from the array element type. The two-arg form infers from the
//     initial value. With `{}` as initial value, TS picks `{}` as the
//     accumulator type — which lacks an index signature.
//   - Two equally good fixes:
//     1. Cast the initial value: `{} as Record<string, number>`.
//     2. Pass a generic to reduce: `.reduce<Record<string, number>>(...)`.
//   - The generic form is slightly more discoverable in editor hovers and
//     avoids reading like an assertion.

import type { Expect, Equal } from '../_helpers/assert';

export function countBy<T>(items: T[], key: (item: T) => string): Record<string, number> {
  return items.reduce<Record<string, number>>((acc, item) => {
    const k = key(item);
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
}

const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const counts = countBy(fruits, (f) => f);

type Case1 = Expect<Equal<typeof counts, Record<string, number>>>;
type Case2 = Expect<Equal<ReturnType<typeof countBy<string>>, Record<string, number>>>;

export {};
