// TODO: implement
// coding interview sample (Karat-style)

/**
 * Longest Prerequisite Chain
 *
 * Problem Summary:
 *   Same input as the previous course problem — (prereq, course) pairs
 *   forming a DAG. Return the LENGTH of the longest dependency chain
 *   (number of courses in the chain). This is the height of the DAG.
 *
 *   Part 2 (extension): return the CHAIN itself, not just its length.
 *
 *   This is the "okay, now make it harder" follow-up after topological
 *   sort.
 *
 * Input:
 *   prereqs: Array of [prereqCourse, course]
 * Output:
 *   number  (the length of the longest chain)
 *
 * Example:
 *   prereqs = [
 *     ["Intro to Algo","Algorithms"],
 *     ["Foundations of CS","Intro to Algo"],
 *     ["Algorithms","Advanced Algorithms"],
 *     ["Foundations of CS","Data Structures"],
 *   ]
 *   → 4   (Foundations of CS → Intro to Algo → Algorithms → Advanced Algorithms)
 *
 * Approach (Topological sort + DP on longest-path-to-node):
 *   1. Build graph + in-degree (Kahn's setup).
 *   2. depth[course] = 1 for sources (no prereqs).
 *   3. As Kahn's pops `u`, for each child `v`:
 *        depth[v] = max(depth[v], depth[u] + 1)
 *   4. Answer = max(depth).
 *
 *   Cycle detection: if Kahn's processes fewer than V nodes, there's a
 *   cycle — chain length is undefined.
 *
 * Why DP works on a DAG:
 *   By processing nodes in topological order, when we visit `v`, all of
 *   its prerequisites have known depths. The longest chain ending at v is
 *   one more than the longest chain ending at any of its prereqs.
 *
 * Alternative: memoized DFS from each node — same result, recursion stack.
 *
 * Time:  O(V + E)
 * Space: O(V + E)
 *
 * Edge Cases:
 *   - Empty prereqs → 0 (no courses) or 1 if a course is somehow named
 *   - Cycle present → conventionally return -1 or 0 (your call)
 *   - Multiple chains of equal length → return that length
 *   - Disconnected DAG → max across components
 */

/**
 * @param {[string, string][]} prereqs
 * @returns {number}
 */
const longestChain = (prereqs) => {
  // your code here
};

/**
 * Part 2 — return the chain itself (one of them if multiple are tied).
 * @param {[string, string][]} prereqs
 * @returns {string[]}
 */
const longestChainPath = (prereqs) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Longest Prerequisite Chain ===\n');

const prereqs = [
  ['Intro to Algo', 'Algorithms'],
  ['Foundations of CS', 'Intro to Algo'],
  ['Algorithms', 'Advanced Algorithms'],
  ['Foundations of CS', 'Data Structures'],
];

console.log('Test 1 — length:');
console.log(longestChain(prereqs));
// Expected: 4

console.log('\nTest 2 — path:');
console.log(longestChainPath(prereqs));
// Expected: ["Foundations of CS","Intro to Algo","Algorithms","Advanced Algorithms"]

console.log('\nTest 3 — two isolated chains:');
console.log(longestChain([['A', 'B'], ['B', 'C'], ['X', 'Y']]));
// Expected: 3
