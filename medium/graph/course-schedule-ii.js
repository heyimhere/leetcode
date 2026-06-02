// TODO: implement
// LC #210 — Course Schedule II
//
// Same setup as LC #207, but instead of yes/no return ANY VALID order in
// which all courses can be taken. If impossible (cycle), return [].
//
// Example:
//   numCourses = 4, prereqs = [[1,0],[2,0],[3,1],[3,2]]
//   → [0, 1, 2, 3]  or  [0, 2, 1, 3]
//
//   numCourses = 2, prereqs = [[1,0]]   → [0, 1]
//   numCourses = 2, prereqs = [[1,0],[0,1]] → []
//
// Approach (Kahn's BFS — same as #207, capturing the order):
//   1. Build adjacency list and in-degree.
//   2. Push all 0-in-degree courses into the queue.
//   3. Pop courses, append to `order`. For each child, decrement in-degree;
//      if it hits 0, enqueue.
//   4. If order.length === numCourses → return order; else [].
//
// Why this gives a valid order:
//   A topological order is exactly "remove a source, repeat" — which is
//   what Kahn's does. The order of removal is one such ordering.
//
// DFS variant (post-order reversal):
//   Recursively visit all descendants, then push the node onto a stack on
//   "post-order finish." Reverse the stack for the topological order.
//
// Time:  O(V + E)
// Space: O(V + E)
//
// Edge Cases:
//   - 0 courses, 0 prereqs        → []
//   - Single course, no prereqs   → [0]
//   - Cycle                       → []
//   - Multiple valid orders       → any one is acceptable

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @returns {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  // your code here
};

console.log('=== LC #210 Course Schedule II ===\n');

console.log('Test 1:');
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
// Expected: [0,1,2,3] (or any valid topo)

console.log('\nTest 2:');
console.log(findOrder(2, [[1, 0]]));
// Expected: [0,1]

console.log('\nTest 3 — cycle:');
console.log(findOrder(2, [[1, 0], [0, 1]]));
// Expected: []

console.log('\nTest 4 — no prereqs:');
console.log(findOrder(1, []));
// Expected: [0]
