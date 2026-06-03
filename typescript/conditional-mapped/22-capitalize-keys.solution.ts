// 22 — CapitalizeKeys<T> (solution)
//
// Why it works:
//   - `as Capitalize<K & string>` is key remapping powered by a string
//     literal type transform. `Capitalize<S>` is a built-in intrinsic
//     that uppercases the first character of a string literal type.
//   - The `K & string` narrows K to its string portion — guarding against
//     `number`/`symbol` keys that `Capitalize` can't handle. Non-string
//     keys (if any) would need a separate branch; for typical object types
//     this is enough.

import type { Expect, Equal } from '../_helpers/assert';

type CapitalizeKeys<T> = {
  [K in keyof T as Capitalize<K & string>]: T[K];
};

type Case1 = Expect<Equal<
  CapitalizeKeys<{ name: string; age: number }>,
  { Name: string; Age: number }
>>;

type Case2 = Expect<Equal<
  CapitalizeKeys<{ foo: 1; bar: 2; baz: 3 }>,
  { Foo: 1; Bar: 2; Baz: 3 }
>>;

type Case3 = Expect<Equal<CapitalizeKeys<{}>, {}>>;

type Case4 = Expect<Equal<
  CapitalizeKeys<{ Already: 1; lower: 2 }>,
  { Already: 1; Lower: 2 }
>>;

export {};
