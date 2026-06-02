// TODO: implement
// coding interview sample (Karat-style)

/**
 * Badge Access — Part 3 — Top K Visitors
 *
 * This continues the `badge-access-logs.js` family. After Part 1
 * (state checking) and Part 2 (tailgating detection), Part 3 swings into
 * aggregation: given chronological badge events, return the TOP K
 * employees by number of ENTER swipes. Ties broken alphabetically.
 *
 * Karat / Wayfair / Pinterest classic. Tests Map<string, count> +
 * top-k selection (sort or heap).
 *
 * Input:
 *   events: Array<[employeeId, action]>   (action ∈ {'enter','exit'})
 *   k: number
 * Output:
 *   Array<{ employee: string, enters: number }>   sorted by enters desc, name asc
 *
 * Example:
 *   events = [
 *     ["Alice","enter"], ["Alice","exit"], ["Alice","enter"],
 *     ["Bob","enter"],
 *     ["Carol","enter"], ["Carol","exit"], ["Carol","enter"], ["Carol","enter"],
 *   ]
 *   k = 2
 *   → [{ employee: "Carol", enters: 3 }, { employee: "Alice", enters: 2 }]
 *
 * Approach:
 *   1. counts: Map<emp, enters>   — increment only on 'enter' events.
 *   2. Convert to entries array.
 *   3. Sort by (enters desc, emp asc).
 *   4. Return first k.
 *
 *   For very large N with small K: min-heap of size K — O(N log K).
 *
 * Why filter on 'enter' specifically:
 *   "Visit" is about coming into the building. Counting exits would
 *   double-count or, worse, miss the still-inside tail.
 *
 * Time:  O(N + U log U)  full sort; or O(N log K) heap version
 * Space: O(U)
 *
 * Edge Cases:
 *   - k > distinct employees     → return all
 *   - k = 0                      → []
 *   - All counts identical       → alphabetical order
 *   - No 'enter' events at all    → []
 */

/**
 * @param {Array<[string, 'enter'|'exit']>} events
 * @param {number} k
 * @returns {Array<{employee: string, enters: number}>}
 */
const topKVisitors = (events, k) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Badge Access — Part 3 (Top K Visitors) ===\n');

console.log('Test 1:');
console.log(topKVisitors([
  ['Alice', 'enter'], ['Alice', 'exit'], ['Alice', 'enter'],
  ['Bob', 'enter'],
  ['Carol', 'enter'], ['Carol', 'exit'], ['Carol', 'enter'], ['Carol', 'enter'],
], 2));
// Expected: [{employee:'Carol',enters:3},{employee:'Alice',enters:2}]

console.log('\nTest 2 — k = 0:');
console.log(topKVisitors([['A', 'enter']], 0));
// Expected: []

console.log('\nTest 3 — alphabetical tie-break:');
console.log(topKVisitors([
  ['Bob', 'enter'], ['Alice', 'enter'], ['Carol', 'enter'],
], 2));
// Expected: [{employee:'Alice',enters:1},{employee:'Bob',enters:1}]
