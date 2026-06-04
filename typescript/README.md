# TypeScript Exercises

LeetCode-style practice for TypeScript itself — generics, utility types, conditional/mapped types, narrowing, inference. Wrong answers fail to compile.

## Setup

```bash
cd typescript
npm install
```

## Running

**Run a single exercise** (recommended while practicing):

```bash
npx tsc --noEmit basics/01-literal-and-union.ts _helpers/assert.ts
```

**Run everything** — expected to fail on un-solved exercises, that's the signal:

```bash
npm run check
```

**Verify all reference solutions compile** — should always pass:

```bash
npm run check:solutions
```

## How it works

Each problem ships as a pair:

- `NN-name.ts` — the exercise. Stub at the top, `Expect<Equal<...>>` cases below. Edit the stub until `tsc` is silent.
- `NN-name.solution.ts` — reference answer with a short "why it works" note. Peek only after you've tried.

The `_helpers/assert.ts` file provides `Expect`, `Equal`, `NotEqual`, and the truthy variants — same pattern as [type-challenges](https://github.com/type-challenges/type-challenges).

## Curriculum

| # | Path | Style | Concept |
|---|------|-------|---------|
| 01 | `basics/01-literal-and-union` | type-only puzzle | literal types, unions, `as const` |
| 02 | `basics/02-narrow-with-in-typeof` | fix-the-types | discriminated unions via `in` / `typeof` |
| 03 | `generics/03-first-of-array` | type-only puzzle | tuple inference with `infer` |
| 04 | `generics/04-tuple-length` | type-only puzzle | reading `['length']` from a tuple |
| 05 | `built-ins/05-my-partial` | built-in deep dive | mapped types + `?` modifier |
| 06 | `built-ins/06-my-pick` | built-in deep dive | `K extends keyof T` constraints |
| 07 | `built-ins/07-my-omit` | built-in deep dive | `Exclude` + composition |
| 08 | `built-ins/08-my-return-type` | built-in deep dive | `infer R` in conditional types |
| 09 | `conditional-mapped/09-deep-readonly` | type-only puzzle | recursive mapped type |
| 10 | `conditional-mapped/10-extract-by-predicate` | type-only puzzle | `as` key remapping + filtering |
| 11 | `fix-the-types/11-broken-event-emitter` | fix-the-types | generic event map via `keyof` |
| 12 | `fix-the-types/12-banish-any-from-api-client` | fix-the-types | replace `any` with constrained generics |
| 13 | `signature-design/13-type-this-pluck` | signature design | generic key narrowing + return inference |
| 14 | `basics/14-as-const-and-tounion` | type-only puzzle | `as const`, `typeof`, `T[number]` |
| 15 | `basics/15-callable-with-properties` | type-only puzzle | intersections of function & object types |
| 16 | `basics/16-optional-vs-undefined` | fix-the-types | `?` key optionality vs `\| undefined` value optionality |
| 17 | `generics/17-last-of-array` | type-only puzzle | variadic tuple infer at the tail |
| 18 | `generics/18-concat-tuples` | type-only puzzle | tuple spread `[...A, ...B]` |
| 19 | `built-ins/19-my-readonly` | built-in deep dive | `readonly` modifier in mapped types |
| 20 | `built-ins/20-my-record` | built-in deep dive | `Record<K, V>` and `keyof any` |
| 21 | `built-ins/21-my-awaited` | built-in deep dive | recursive Promise unwrapping |
| 22 | `conditional-mapped/22-capitalize-keys` | type-only puzzle | string-manipulation types in key remapping |
| 23 | `conditional-mapped/23-tuple-to-object` | type-only puzzle | `T[number]` + mapped type over a union |
| 24 | `fix-the-types/24-broken-reduce` | fix-the-types | giving `reduce` an accumulator type hint |
| 25 | `fix-the-types/25-broken-debounce` | fix-the-types | preserving a function's signature through a wrapper |
| 26 | `signature-design/26-typed-promise-all` | signature design | tuple inference + mapped `Awaited` |
| 27 | `signature-design/27-deep-get` | signature design | dependent generics (`K2 extends keyof T[K1]`) |

## Conventions

- Strict mode, ES2022, `isolatedModules`. Each file is a module (ends with `export {}`).
- File numbering gives a suggested order, but topics are independent — jump in anywhere.
- Built-in deep dives prefix every reimplementation with `My` (`MyPartial`, `MyPick`) to avoid colliding with the standard lib.
