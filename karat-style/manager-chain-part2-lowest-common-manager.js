// TODO: implement
// coding interview sample (Karat-style)

/**
 * Manager Chain — Part 2 — Lowest Common Manager
 *
 * Builds on `manager-chain.js`. After Part 1 (manager chain of one
 * employee), Part 2 asks for the LOWEST COMMON MANAGER (LCM, aka LCA in
 * the org tree) of TWO employees.
 *
 * Input:
 *   pairs: Array<[employee, manager]>   (employee → its manager;
 *                                        exactly one root: the CEO)
 *   a, b: string
 * Output:
 *   string | null     the LCM, or null if either isn't in the tree
 *
 * Example:
 *   pairs = [
 *     ["Alice","CEO"],
 *     ["Bob","Alice"],
 *     ["Carol","Bob"],
 *     ["Dan","Bob"],
 *     ["Eve","Alice"],
 *   ]
 *   lowestCommonManager("Carol", "Dan") → "Bob"
 *   lowestCommonManager("Carol", "Eve") → "Alice"
 *   lowestCommonManager("Carol", "Carol") → "Carol"  (same person — depends on spec)
 *   lowestCommonManager("Carol", "CEO")  → "CEO"
 *
 * Approach (path-to-root intersection):
 *   1. Build Map<employee, manager>.
 *   2. Walk from `a` up to the root, putting each employee in a Set `aChain`.
 *   3. Walk from `b` up. The first employee whose name is in aChain is
 *      the LCM.
 *
 *   Time: O(D) where D is the depth.
 *
 * Alternative (binary lifting):
 *   For repeated LCM queries on a fixed tree, precompute jump tables (see
 *   `kth-ancestor-of-employee.js` Part 2). O(N log N) preprocessing,
 *   O(log N) per query.
 *
 * Why "path intersection" is the natural Karat answer:
 *   It needs only the parent-pointer map; no recursion or tree traversal
 *   in the usual "binary tree LCA" sense. Very interview-friendly.
 *
 * Time:  O(D)
 * Space: O(D)
 *
 * Edge Cases:
 *   - One or both employees missing from the org → null
 *   - a === b                                     → that employee
 *   - One is an ancestor of the other              → the ancestor itself
 *   - Disjoint org components (shouldn't happen
 *     in a single-CEO tree)                       → null
 */

/**
 * @param {[string, string][]} pairs
 * @param {string} a
 * @param {string} b
 * @returns {string | null}
 */
const lowestCommonManager = (pairs, a, b) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Manager Chain — Part 2 (Lowest Common Manager) ===\n');

const pairs = [
  ['Alice', 'CEO'],
  ['Bob', 'Alice'],
  ['Carol', 'Bob'],
  ['Dan', 'Bob'],
  ['Eve', 'Alice'],
];

console.log('Test 1 — Carol & Dan:');
console.log(lowestCommonManager(pairs, 'Carol', 'Dan'));
// Expected: 'Bob'

console.log('\nTest 2 — Carol & Eve:');
console.log(lowestCommonManager(pairs, 'Carol', 'Eve'));
// Expected: 'Alice'

console.log('\nTest 3 — same employee:');
console.log(lowestCommonManager(pairs, 'Carol', 'Carol'));
// Expected: 'Carol' (or your spec's tie-break)

console.log('\nTest 4 — ancestor & descendant:');
console.log(lowestCommonManager(pairs, 'Carol', 'Alice'));
// Expected: 'Alice'

console.log('\nTest 5 — missing:');
console.log(lowestCommonManager(pairs, 'Carol', 'Mallory'));
// Expected: null
