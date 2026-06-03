// 16 — Optional `?` vs `| undefined` (solution)
//
// Why it works:
//   - `age?: number` is shorthand for "the key may be missing." Under the
//     hood TS treats it as `age?: number | undefined`, but the *key
//     optionality* is the load-bearing part.
//   - `age: number | undefined` says the key must exist; its value can be
//     `undefined`. So `{ name: 'a' }` (no age) is rejected.
//   - `Required<T>` removes the `?` modifier but leaves `| undefined`
//     value-types alone — that's the asymmetry Case1 vs Case2 probe.

import type { Expect, Equal } from '../_helpers/assert';

type OptionalAge = { name: string; age?: number };
type AgeMaybePresent = { name: string; age: number | undefined };

type Case1 = Expect<Equal<Required<OptionalAge>, { name: string; age: number }>>;
type Case2 = Expect<Equal<Required<AgeMaybePresent>, { name: string; age: number | undefined }>>;

const ok: OptionalAge = { name: 'a' };
// @ts-expect-error
const bad: AgeMaybePresent = { name: 'a' };
const ok2: OptionalAge = { name: 'a', age: undefined };
const ok3: AgeMaybePresent = { name: 'a', age: undefined };

export {};
