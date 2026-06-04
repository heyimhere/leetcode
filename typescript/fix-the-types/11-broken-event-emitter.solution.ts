// 11 — Broken Event Emitter (solution)
//
// Why it works:
//   - `K extends keyof EventMap` constrains the event name to declared events.
//     Pass an unknown name and TS rejects it at the call site.
//   - `(payload: EventMap[K]) => void` ties the handler's parameter to the
//     payload type for that specific K — different K values get different
//     handler signatures.
//   - The `Handlers` storage uses a mapped type: for each event name, an
//     array of handlers expecting that event's payload. The `?` makes each
//     slot optional so we can lazily initialize.
//
// Note: inside the class we still use a mild cast (`as any[]`) because TS
// can't prove the runtime invariant that `handlers[name]` only stores
// handlers for that specific name — that's an *implementation* detail
// invisible to callers, which is the right place for an internal cast.

import type { Expect, Equal } from '../_helpers/assert';

type EventMap = {
  login: { userId: string };
  logout: { reason: 'manual' | 'timeout' };
  message: { from: string; text: string };
};

type Handlers = {
  [K in keyof EventMap]?: Array<(payload: EventMap[K]) => void>;
};

export class TypedEmitter {
  private handlers: Handlers = {};

  on<K extends keyof EventMap>(name: K, handler: (payload: EventMap[K]) => void): void {
    (this.handlers[name] ??= [] as any[]).push(handler as any);
  }

  emit<K extends keyof EventMap>(name: K, payload: EventMap[K]): void {
    for (const h of this.handlers[name] ?? []) h(payload);
  }
}

const e = new TypedEmitter();

e.on('login', (p) => {
  type CheckPayload = Expect<Equal<typeof p, { userId: string }>>;
  return p.userId;
});

e.emit('logout', { reason: 'manual' });

// @ts-expect-error — 'nope' isn't a key of EventMap
e.on('nope', (p) => p);
// @ts-expect-error — payload shape doesn't match { userId: string }
e.emit('login', { wrongShape: 1 });
// @ts-expect-error — 'oops' isn't in the reason union
e.emit('logout', { reason: 'oops' });

export {};
