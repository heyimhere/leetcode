# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Solutions

No build system or package manager — all files run directly with Node.js:

```bash
node easy/arrays/two-sum.js
node medium/two-pointers/container-with-most-water.js
```

There is no test framework. Solutions use `console.log` for output and validation.

## Repository Structure

Problems are organized by difficulty then topic:

- `easy/` — arrays, hashmaps, strings, linked-lists, trees, bit-manipulation, dynamic-programming
- `medium/` — arrays, hashmap, two-pointers, strings, linked-lists, dynamic-programming, binary-search
- `hard/` — arrays, hashmap, linked-lists
- `neetcode/roadmap/` — NeetCode structured learning path (arrays-hashing, sliding-window, two-pointers, stacks)
- `article-practice/` — graph traversal (BFS/DFS), trees, linked lists
- `random/` — utility challenges (flatten objects, rotate matrices, prime numbers)
- `coderbyte/` — CodeByte string/algorithm challenges
- `practice-problems.md` — algorithm pattern templates with pseudocode and visual walkthroughs

## Solution Style

- Language: JavaScript (ES6+), exclusively
- Arrow functions preferred: `const fn = (args) => { ... }`
- `Map` and `Set` for hashmap problems
- Abbreviated variable names are common (`n`, `t`, `s`, `l`, `r`) — this is intentional
- Commented-out blocks show previous attempts; leave them unless cleaning up a specific file
- Include LeetCode problem number in the filename or as a comment (e.g., `// LC #1`)

## Data Structure Templates

**Linked List:**
```javascript
class ListNode {
  constructor(val = 0, next = null) { this.val = val; this.next = next; }
}
```

**Binary Tree:**
```javascript
class TreeNode {
  constructor(val = 0, left = null, right = null) { this.val = val; this.left = left; this.right = right; }
}
```

**Graph node:**
```javascript
class GraphNode {
  constructor(val = 0, neighbors = []) { this.val = val; this.neighbors = neighbors; }
}
```

## Problem-Solving Guidelines

- Explain the intuition before implementing — state the approach and pattern (sliding window, two pointers, etc.)
- Always analyze Big-O time and space complexity
- Prioritize O(n) time; identify trade-offs when not possible
- After completing a problem, note any better or alternate approaches
- For DSA problems, choose the right data structure first (HashMap for fast lookups, stack for bracket/LIFO problems, queue for BFS)
