// 27 — Deep Get (solution)
//
// Why it works:
//   - Three generics: T (the object), K1 (first key), K2 (second key).
//   - `K1 extends keyof T` ensures the first key is valid. The trick is
//     that K2's constraint uses the just-inferred K1: `K2 extends keyof T[K1]`.
//     This *dependent generic* pattern lets each successive key narrow
//     based on the previous one's choice.
//   - Return type `T[K1][K2]` is straight indexed-access composition —
//     once both keys are known, looking up the value type is mechanical.
//   - Extending to N levels follows the same recipe (K1, K2, K3, ...). For
//     fully arbitrary depth you'd need a recursive type over a tuple of
//     keys — a fun follow-up.

import type { Expect, Equal } from '../_helpers/assert';

export function getDeep<T, K1 extends keyof T, K2 extends keyof T[K1]>(
  obj: T,
  k1: K1,
  k2: K2,
): T[K1][K2] {
  return obj[k1][k2];
}

const data = {
  user: { name: 'Ada', age: 30 },
  meta: { createdAt: '2024-01-01', version: 7 },
};

const name = getDeep(data, 'user', 'name');
const age = getDeep(data, 'user', 'age');
const version = getDeep(data, 'meta', 'version');

type Case1 = Expect<Equal<typeof name, string>>;
type Case2 = Expect<Equal<typeof age, number>>;
type Case3 = Expect<Equal<typeof version, number>>;

// @ts-expect-error — 'nope' is not a key of data
const e1 = getDeep(data, 'nope', 'name');
// @ts-expect-error — 'nope' is not a key of data.user
const e2 = getDeep(data, 'user', 'nope');

export {};
