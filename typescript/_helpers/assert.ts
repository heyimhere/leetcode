// Type-level assertion helpers used across every exercise.
// Pattern borrowed from type-challenges (github.com/type-challenges/type-challenges).
//
// Usage:
//   type Case1 = Expect<Equal<MyPartial<{ a: 1 }>, { a?: 1 }>>;
//
// If the inner Equal<...> resolves to `false`, `Expect<false>` fails to satisfy
// the `T extends true` constraint and TypeScript reports a compile error.

export type Expect<T extends true> = T;
export type ExpectTrue<T extends true> = T;
export type ExpectFalse<T extends false> = T;

// The classic "deep equality" trick: two generic function signatures are
// assignable to each other only when their parameter types are structurally
// identical at every position — including readonly modifiers and exact union
// shape. This is stricter than `T extends U & U extends T`.
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
