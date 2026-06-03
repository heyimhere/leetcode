// 13 — Type This `pluck`
// Style: signature design  |  Difficulty: intermediate
//
// Concept: `pluck(objects, key)` returns the array of `objects[i][key]`
// for some `key`. The trick is making TypeScript *infer* the precise element
// type of the result based on which key is chosen — without losing the
// per-property type.
//
// The implementation is provided. Write the most precise signature you can.
//   - The `key` argument must be restricted to keys of the array element.
//   - The return type must be an array of the corresponding value type.
//
// Do NOT change the implementation. Only edit the signature line.
//
// Run: npx tsc --noEmit signature-design/13-type-this-pluck.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Replace with your typed signature. Add generics, constraints, and a
//   precise return type. (Implementation stays as-is.)
export function pluck(objects: any, key: any): any {
  return objects.map((o: any) => o[key]);
}

// ─── cases (must hold after your signature change) ────────────────────
const users = [
  { id: 1, name: 'Ada', active: true },
  { id: 2, name: 'Linus', active: false },
];

const names = pluck(users, 'name');
const ids = pluck(users, 'id');
const flags = pluck(users, 'active');

type Case1 = Expect<Equal<typeof names, string[]>>;
type Case2 = Expect<Equal<typeof ids, number[]>>;
type Case3 = Expect<Equal<typeof flags, boolean[]>>;

// Case4: Uncomment after solving — should be a TYPE ERROR
// const bad = pluck(users, 'nope');

export {};
