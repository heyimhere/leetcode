// 02 — Narrow with `in` and `typeof` (solution)
//
// Why it works:
//   - `typeof value === 'string'` narrows the union from `Shape | string`
//     down to just `string` inside that branch — `.length` becomes legal.
//   - The remaining union `Circle | Rect` is a *discriminated union* sharing
//     the `kind` field; switching on `value.kind` lets TS pick the right
//     branch and expose the per-shape members.
//   - The alternative narrow is `'radius' in value` — also valid here.

import type { Expect, Equal } from '../_helpers/assert';

type Circle = { kind: 'circle'; radius: number };
type Rect = { kind: 'rect'; width: number; height: number };
type Shape = Circle | Rect;

export function area(value: Shape | string): number {
  if (typeof value === 'string') return value.length;
  if (value.kind === 'circle') return Math.PI * value.radius ** 2;
  return value.width * value.height;
}

type Case1 = Expect<Equal<ReturnType<typeof area>, number>>;
type Case2 = Expect<Equal<Parameters<typeof area>[0], Shape | string>>;

export {};
