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

## Conventions

- Strict mode, ES2022, `isolatedModules`. Each file is a module (ends with `export {}`).
- File numbering gives a suggested order, but topics are independent — jump in anywhere.
- Built-in deep dives prefix every reimplementation with `My` (`MyPartial`, `MyPick`) to avoid colliding with the standard lib.
