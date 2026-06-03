// 01 — Literal Types & Unions (solution)
//
// Why it works:
//   - `'admin' | 'editor' | 'viewer'` is a *union of string literal types*.
//     Each member is its own type that only accepts that exact string.
//   - A tuple's `['length']` property is a numeric literal, not just `number`,
//     so `[Role, Role, Role]['length']` resolves to the literal `3`.

import type { Expect, Equal } from '../_helpers/assert';

type Role = 'admin' | 'editor' | 'viewer';
type RoleCount = [Role, Role, Role]['length'];

type Case1 = Expect<Equal<Role, 'admin' | 'editor' | 'viewer'>>;
type Case2 = Expect<Equal<RoleCount, 3>>;
type Case3 = Expect<Equal<Extract<string, Role>, never>>;

export {};
