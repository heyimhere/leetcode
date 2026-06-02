// TODO: implement
// coding interview sample (Karat-style)

/**
 * Kth Ancestor of an Employee
 *
 * Problem Summary:
 *   You're given (employee, manager) pairs forming an org chart (tree;
 *   exactly one root: the CEO has no manager). Given an employee and an
 *   integer k, return the kth ancestor of that employee, or null if they
 *   don't have one.
 *
 *   Part 2 (extension): batch queries on a CONSTANT tree — speed
 *   individual queries to O(log k) using BINARY LIFTING.
 *
 *   Karat / Robinhood / Pinterest interview classic. Tests parent-pointer
 *   traversal and (for Part 2) a doubling trick.
 *
 * Input:
 *   pairs: Array of [employee, manager]
 *   employee: string
 *   k: number  (k=0 is the employee themselves; some specs use k=1 = direct manager)
 * Output:
 *   string | null
 *
 * Example:
 *   pairs = [
 *     ["Alice","CEO"],
 *     ["Bob","Alice"],
 *     ["Carol","Bob"],
 *     ["Dan","Bob"]
 *   ]
 *   kthAncestor(pairs, "Carol", 1) → "Bob"
 *   kthAncestor(pairs, "Carol", 2) → "Alice"
 *   kthAncestor(pairs, "Carol", 5) → null
 *
 * Approach (Part 1 — linear walk):
 *   1. Build Map<employee, manager>.
 *   2. Walk up k times. If we hit null before k steps, return null.
 *
 * Approach (Part 2 — binary lifting):
 *   Precompute jump[v][i] = the 2^i-th ancestor of v for i in 0..log2(N).
 *   Each query decomposes k into its binary representation and follows
 *   the corresponding jumps. O(log k) per query.
 *
 * Why binary lifting:
 *   If queries are FREQUENT and k can be large, walking up O(k) per query
 *   is too slow. Lifting gives near-instant answers with one-time O(N log N)
 *   preprocessing.
 *
 * Time:
 *   Part 1: O(k) per query, no preprocessing.
 *   Part 2: O(N log N) preprocessing, O(log k) per query.
 * Space: O(N) Part 1; O(N log N) Part 2
 *
 * Edge Cases:
 *   - Employee not in map        → null (or throw — your choice)
 *   - k = 0                      → the employee themselves
 *   - k larger than tree depth   → null
 *   - CEO (no manager)           → null for any k ≥ 1
 */

/**
 * @param {[string, string][]} pairs
 * @param {string} employee
 * @param {number} k
 * @returns {string | null}
 */
const kthAncestor = (pairs, employee, k) => {
  // your code here
};

/**
 * Part 2 — supports many queries. Build once via constructor.
 */
class AncestorLookup {
  /**
   * @param {[string, string][]} pairs
   */
  constructor(pairs) {
    // your code here
  }

  /**
   * @param {string} employee
   * @param {number} k
   * @returns {string | null}
   */
  query(employee, k) {
    // your code here
  }
}

// ============ Test Cases ============

console.log('=== Kth Ancestor of an Employee ===\n');

const pairs = [
  ['Alice', 'CEO'],
  ['Bob', 'Alice'],
  ['Carol', 'Bob'],
  ['Dan', 'Bob'],
];

console.log('Test 1 — Carol, k=1:');
console.log(kthAncestor(pairs, 'Carol', 1));
// Expected: 'Bob'

console.log('\nTest 2 — Carol, k=2:');
console.log(kthAncestor(pairs, 'Carol', 2));
// Expected: 'Alice'

console.log('\nTest 3 — Carol, k=5:');
console.log(kthAncestor(pairs, 'Carol', 5));
// Expected: null

console.log('\nTest 4 — Part 2 batch:');
const lookup = new AncestorLookup(pairs);
console.log(lookup.query('Dan', 1));
// Expected: 'Bob'
console.log(lookup.query('Dan', 3));
// Expected: 'CEO'
