// 25 — Broken Debounce
// Style: fix-the-types  |  Difficulty: intermediate
//
// Concept: A debounce wrapper takes a function and returns a new function
// with the same arguments. The skeleton below types both as `Function` —
// a built-in but nearly-useless type that erases all signature information.
// Callers lose argument checking, return types, and editor autocomplete.
//
// Your task: replace the `Function`-typed signature with a generic that
// preserves the original function's parameters. The returned wrapper
// should accept the same arguments and return `void` (debounced calls
// don't return synchronously).
//
// Run: npx tsc --noEmit fix-the-types/25-broken-debounce.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

// ↓ Fix this signature. The body can stay; the casts to `any` are only
//   there because the input type is so loose. They'll disappear once the
//   signature is properly typed.
export function debounce(fn: Function, ms: number): Function {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => (fn as any)(...args), ms);
  };
}

// ─── cases ─────────────────────────────────────────────────────────────
const log = (msg: string, level: 'info' | 'warn') => console.log(level, msg);
const debouncedLog = debounce(log, 100);

type Case1 = Expect<Equal<Parameters<typeof debouncedLog>, [string, 'info' | 'warn']>>;
type Case2 = Expect<Equal<ReturnType<typeof debouncedLog>, void>>;

// Should be a TYPE ERROR after fixing — wrong args, wrong literal
// @ts-expect-error
debouncedLog('hi', 'oops');
// @ts-expect-error
debouncedLog(42, 'info');

export {};
