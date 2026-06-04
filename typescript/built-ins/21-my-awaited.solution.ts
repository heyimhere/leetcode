// 21 — MyAwaited<T> (solution)
//
// Why it works:
//   - The conditional `T extends Promise<infer U> ? ... : T` peels one
//     layer of Promise and binds the inner type to U.
//   - Recursing as `MyAwaited<U>` keeps peeling until U is no longer a
//     Promise — then the `: T` fallback returns the resolved value type.
//   - Plain non-promise types skip the conditional entirely and pass
//     through.
//   - The real `Awaited` in lib.es5.d.ts adds a wrinkle for "thenables"
//     (objects with a `then` method), but the core idea is identical.

import type { Expect, Equal } from '../_helpers/assert';

type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type Case1 = Expect<Equal<MyAwaited<Promise<string>>, string>>;
type Case2 = Expect<Equal<MyAwaited<Promise<Promise<number>>>, number>>;
type Case3 = Expect<Equal<MyAwaited<string>, string>>;
type Case4 = Expect<Equal<MyAwaited<Promise<Promise<Promise<boolean>>>>, boolean>>;
type Case5 = Expect<Equal<MyAwaited<Promise<{ id: number }>>, { id: number }>>;

export {};
