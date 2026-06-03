// 11 — Broken Event Emitter
// Style: fix-the-types  |  Difficulty: intermediate
//
// Concept: A type-safe event emitter ties each event NAME to a specific
// PAYLOAD shape, so `emit('login', { userId })` is checked but
// `emit('login', { wrongShape: true })` is a compile error.
//
// The skeleton below uses `any` everywhere — losing all safety. Fix the
// generics so:
//   1. `on(name, handler)` only accepts valid event names from EventMap.
//   2. `handler`'s parameter type matches the payload declared in EventMap.
//   3. `emit(name, payload)` requires the payload to match the declared type.
//
// Do NOT change the EventMap or the test invocations — only the signatures
// of `on` and `emit`, and the internal `Handlers` shape.
//
// Run: npx tsc --noEmit fix-the-types/11-broken-event-emitter.ts ../_helpers/assert.ts

import type { Expect, Equal } from '../_helpers/assert';

type EventMap = {
  login: { userId: string };
  logout: { reason: 'manual' | 'timeout' };
  message: { from: string; text: string };
};

// ↓ Fix this so handlers per event are stored with their correct payload type
type Handlers = any;

export class TypedEmitter {
  private handlers: Handlers = {};

  // ↓ Fix this signature
  on(name: any, handler: any): void {
    (this.handlers[name] ??= []).push(handler);
  }

  // ↓ Fix this signature
  emit(name: any, payload: any): void {
    for (const h of this.handlers[name] ?? []) h(payload);
  }
}

// ─── cases (these must compile after your fix) ────────────────────────
const e = new TypedEmitter();

e.on('login', (p) => {
  // p should be { userId: string }
  type CheckPayload = Expect<Equal<typeof p, { userId: string }>>;
  return p.userId;
});

e.emit('logout', { reason: 'manual' });

// ─── cases (these must STAY type errors after your fix) ───────────────
// Uncomment these after solving; they should fail to compile.

// e.on('nope', (p) => p);              // 'nope' isn't an event
// e.emit('login', { wrongShape: 1 }); // payload doesn't match
// e.emit('logout', { reason: 'oops' }); // 'oops' not in the literal union

export {};
