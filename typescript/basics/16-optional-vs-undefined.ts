// 16 — Optional `?` vs `| undefined`
// Style: fix-the-types  |  Difficulty: easy-intermediate
//
// Concept: `{ a?: number }` and `{ a: number | undefined }` look similar
// but mean different things:
//   - `?` makes the KEY optional — you can omit it entirely.
//   - `| undefined` makes the VALUE optionally undefined — but the key
//     must still be present.
//
// This matters for `keyof`, for `Required<T>`, and for the
// `exactOptionalPropertyTypes` compiler flag.
//
// Your task: define two types so the cases below pass. Then study the
// difference in how the two variants are used.
//
// Run: npx tsc --noEmit basics/16-optional-vs-undefined.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Define so `{ name: 'x' }` is valid (age may be omitted)
type OptionalAge = any;

// ↓ Define so `{ name: 'x' }` is NOT valid — age key must be present
type AgeMaybePresent = any;

// ─── cases ─────────────────────────────────────────────────────────────
// `Required<T>` strips `?` modifiers but does NOT strip `| undefined`.
type Case1 = Expect<Equal<Required<OptionalAge>, { name: string; age: number }>>;
type Case2 = Expect<Equal<Required<AgeMaybePresent>, { name: string; age: number | undefined }>>;

// Omitting age:
const ok: OptionalAge = { name: 'a' };
// @ts-expect-error — age key is required even if it can be undefined
const bad: AgeMaybePresent = { name: 'a' };

// Explicit undefined is fine for both
const ok2: OptionalAge = { name: 'a', age: undefined };
const ok3: AgeMaybePresent = { name: 'a', age: undefined };

export {};
