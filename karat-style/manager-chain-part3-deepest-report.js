// TODO: implement
// coding interview sample (Karat-style)

/**
 * Manager Chain — Part 3 — Deepest Report
 *
 * Continues the `manager-chain.js` line of follow-ups. After LCM (Part 2),
 * Part 3 asks: given the org chart, find the employee FURTHEST from the
 * CEO (max-depth node) and the LENGTH of that chain. Ties broken
 * alphabetically.
 *
 * Input:
 *   pairs: Array<[employee, manager]>
 * Output:
 *   { employee: string, depth: number }
 *
 * Example:
 *   pairs = [
 *     ["Alice","CEO"],
 *     ["Bob","Alice"],
 *     ["Carol","Bob"],
 *     ["Dan","Bob"],
 *     ["Eve","Alice"],
 *     ["Frank","Carol"]
 *   ]
 *   → { employee: "Frank", depth: 4 }    (CEO → Alice → Bob → Carol → Frank)
 *
 * Approach (BFS from CEO):
 *   1. Build adjacency list: manager → [direct reports].
 *      Find the root: the manager value that NEVER appears as an employee.
 *   2. BFS levels; track depth and the LAST level's nodes. The first node
 *      encountered at the max depth (alphabetically) is the answer.
 *
 * Alternative (post-order DFS with memoization):
 *   depth(node) = 1 + max(depth(child) for child of node) (0 if no kids).
 *   Find max depth and the corresponding leaf.
 *
 * Why this is a Karat-class problem:
 *   Forces you to either find the root or recognize that the deepest leaf
 *   can be derived by walking up from every employee (O(N²) naive vs O(N)
 *   smart). The single-pass BFS is the clean approach.
 *
 * Time:  O(N)
 * Space: O(N)
 *
 * Edge Cases:
 *   - Single-employee org              → that employee at depth 1
 *   - Multiple deepest employees       → alphabetical tie-break
 *   - Detached subtrees (data error)    → spec says won't happen
 *   - CEO never appears as a value     → fall back: try every name not in
 *                                          the "employee" column
 */

/**
 * @param {[string, string][]} pairs
 * @returns {{ employee: string, depth: number }}
 */
const deepestReport = (pairs) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Manager Chain — Part 3 (Deepest Report) ===\n');

const pairs = [
  ['Alice', 'CEO'],
  ['Bob', 'Alice'],
  ['Carol', 'Bob'],
  ['Dan', 'Bob'],
  ['Eve', 'Alice'],
  ['Frank', 'Carol'],
];

console.log('Test 1:');
console.log(deepestReport(pairs));
// Expected: { employee: 'Frank', depth: 4 }

console.log('\nTest 2 — single tier:');
console.log(deepestReport([['A', 'CEO']]));
// Expected: { employee: 'A', depth: 1 }

console.log('\nTest 3 — alphabetical tie:');
console.log(deepestReport([
  ['Charlie', 'CEO'],
  ['Alice', 'CEO'],
]));
// Expected: { employee: 'Alice', depth: 1 }
