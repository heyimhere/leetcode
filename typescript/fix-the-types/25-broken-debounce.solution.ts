// 25 — Broken Debounce (solution)
//
// Why it works:
//   - `F extends (...args: any[]) => any` lets the generic F capture ANY
//     callable while keeping its full signature on hand.
//   - `Parameters<F>` extracts F's parameter tuple. The wrapper takes
//     `(...args: Parameters<F>)`, so callers get the same argument
//     checking they'd get on F itself.
//   - Return type is `void` — debounce delays execution, so there's no
//     synchronous return value worth typing.
//   - `Function` (capital F) is the type to AVOID. It's basically `any`
//     for callables: assignable to/from everything, no inference, no
//     arg checking.

import type { Expect, Equal } from '../_helpers/assert';

export function debounce<F extends (...args: any[]) => any>(
  fn: F,
  ms: number,
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}

const log = (msg: string, level: 'info' | 'warn') => console.log(level, msg);
const debouncedLog = debounce(log, 100);

type Case1 = Expect<Equal<Parameters<typeof debouncedLog>, [string, 'info' | 'warn']>>;
type Case2 = Expect<Equal<ReturnType<typeof debouncedLog>, void>>;

// @ts-expect-error — 'oops' is not in the 'info' | 'warn' union
debouncedLog('hi', 'oops');
// @ts-expect-error — first arg should be string, not number
debouncedLog(42, 'info');

export {};
