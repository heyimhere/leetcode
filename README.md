# DSA Practice

A personal collection of LeetCode and algorithm problems worked through in JavaScript, paired with an interactive study site for reviewing patterns, hints, and Big-O analysis.

## Structure

```
easy/          arrays, strings, hashmaps, linked-lists, trees, dp, bit-manipulation
medium/        arrays, strings, two-pointer, hashmap, linked-list, dp, binary-search, sliding-window
hard/          arrays, hashmap, linked-lists
neetcode/      NeetCode roadmap problems organized by pattern
article-practice/  graph traversal, linked lists, trees
random/        utility challenges (flatten objects, rotate matrices, etc.)
coderbyte/     CodeByte string/algorithm challenges
site/          Next.js interactive study site (see below)
```

Reference docs:
- `practice-problems.md` — algorithm pattern templates with pseudocode and walkthroughs
- `study.md` — personal study notes
- `rerun.js` — current problem in progress (blank slate to practice from)

## Running a Problem

No build system — all files run directly with Node.js:

```bash
node easy/arrays/two-sum.js
node medium/arrays/group-anagrams.js
node rerun.js
```

## Adding a New Problem

1. Drop a `.js` file in the right `difficulty/topic/` folder.
2. Name it after the problem in kebab-case: `longest-common-subsequence.js`.
3. Add a test input at the top and a `console.log` at the bottom.
4. If it has a LeetCode number, note it in a comment: `// LC #1143`.
5. To add it to the study site, see below.

## Study Site

A Next.js app lives in `site/` with a sidebar, problem pages, hints, boilerplate starters, and Big-O breakdowns — no solutions shown.

```bash
cd site
npm run dev     # http://localhost:3000
npm run build   # production build
```

### Adding a problem to the site

**Step 1** — Register it in `site/lib/manifest.ts` under the right section and topic:

```ts
p('My Problem Title', 'my-problem-slug', 'medium', 'arrays', {
  lcNumber: 123,
  pattern: 'Sliding Window',
  tc: 'O(n)',
  sc: 'O(1)',
  hasContent: false,   // flip to true once you write the MDX
}),
```

**Step 2** — Create `site/content/[difficulty]/[topic]/my-problem-slug.mdx` with this structure:

```
## Problem
What needs to be solved.

## How to Think About It
The key insight and pattern — no full solution.

## Boilerplate
A blank function signature with test cases.

## Big-O Breakdown
Time and space table with reasoning.
```

Set `hasContent: true` in the manifest once the MDX file exists.

## Language & Style

- JavaScript (ES6+), arrow functions preferred
- `Map` and `Set` for hashmap problems
- Abbreviated variable names (`n`, `t`, `l`, `r`) are intentional
- Commented-out blocks show previous attempts — leave them
