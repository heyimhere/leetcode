// 09 — DeepReadonly<T>
// Style: type-only puzzle  |  Difficulty: intermediate-advanced
//
// Concept: The built-in `Readonly<T>` only freezes the top level. Nested
// objects remain mutable. `DeepReadonly` recurses into nested objects to
// produce a fully-immutable shape — useful for typing frozen config trees
// or Redux-style state.
//
// Your task: implement `DeepReadonly<T>` so every nested object/property
// becomes `readonly`. Leave primitives, functions, and tuples alone at the
// value level (functions are objects, but freezing their *call signature*
// makes no sense — handle by stopping recursion when there's nothing to map).
//
// Run: npx tsc --noEmit conditional-mapped/09-deep-readonly.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your answer
type DeepReadonly<T> = T;

// ─── cases ─────────────────────────────────────────────────────────────
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
