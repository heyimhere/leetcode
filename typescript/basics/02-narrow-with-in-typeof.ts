// 02 — Narrow with `in` and `typeof`
// Style: fix-the-types  |  Difficulty: easy
//
// Concept: When a value's type is a union, TypeScript narrows it inside
// branches that check structure. `typeof x === 'string'` narrows primitives;
// `'key' in x` narrows objects that may not share a property.
//
// Your task: the function below tries to compute a length but the types are
// wrong — `value.length` is flagged because `Circle` has no `length`. Add
// the right narrowing so the function compiles AND the case assertions pass.
// Do NOT change the input types or the return type.
//
// Run: npx tsc --noEmit basics/02-narrow-with-in-typeof.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

type Circle = { kind: 'circle'; radius: number };
type Rect = { kind: 'rect'; width: number; height: number };
type Shape = Circle | Rect;

// ↓ Fix the body. The signature must stay exactly as written.
export function area(value: Shape | string): number {
  // BUG: `value.length` doesn't exist on Circle/Rect
  // BUG: `value.radius` is only on Circle
  // BUG: `value.width` is only on Rect
  return value.length ?? Math.PI * value.radius ** 2 ?? value.width * value.height;
}

// ─── cases ─────────────────────────────────────────────────────────────
type Case1 = Expect<Equal<ReturnType<typeof area>, number>>;
type Case2 = Expect<Equal<Parameters<typeof area>[0], Shape | string>>;

export {};
