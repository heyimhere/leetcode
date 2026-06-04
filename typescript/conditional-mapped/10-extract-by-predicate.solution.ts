// 10 — PickByValueType<T, V> (solution)
//
// Why it works:
//   - `as K extends ... ? K : never` is the key-remapping trick. When the
//     remap clause resolves to `never`, that key is omitted entirely from
//     the produced object type — exactly the "filter" operation we want.
//   - We compare `T[K] extends V` to test the value type. Properties whose
//     value satisfies V keep their key K; others get remapped to `never`
//     and disappear.
//   - Subtlety: the `extends V ? K : never` check is on the value side
//     (`T[K]`), but the remap is on the key side (`as`). This decoupling
//     is what enables value-based filtering.

import type { Expect, Equal } from '../_helpers/assert';

type PickByValueType<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

interface Mixed {
  id: number;
  name: string;
  age: number;
  active: boolean;
  tags: string[];
}

type Case1 = Expect<Equal<PickByValueType<Mixed, number>, { id: number; age: number }>>;
type Case2 = Expect<Equal<PickByValueType<Mixed, string>, { name: string }>>;
type Case3 = Expect<Equal<PickByValueType<Mixed, boolean>, { active: boolean }>>;
type Case4 = Expect<Equal<PickByValueType<Mixed, never>, {}>>;
type Case5 = Expect<Equal<PickByValueType<Mixed, string | number>, { id: number; name: string; age: number }>>;

export {};
