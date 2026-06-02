// TODO: implement
// LC #207 — Course Schedule
//
// You're enrolled in `numCourses` (labeled 0..numCourses-1). Prerequisites
// are given as pairs [a, b] meaning "to take a, must first take b". Return
// true iff it's possible to finish all courses (i.e., the prerequisite
// graph is a DAG — no cycles).
//
// Example:
//   numCourses = 2, prereqs = [[1,0]]      → true   (take 0, then 1)
//   numCourses = 2, prereqs = [[1,0],[0,1]] → false (cycle)
//
// Approach (Kahn's algorithm — BFS topological sort):
//   1. Build adjacency list: graph[b] = [a, ...] (b is prereq of a).
//   2. Compute in-degree of each node.
//   3. Queue all 0-in-degree nodes.
//   4. While queue not empty:
//        Pop node, increment "taken" counter.
//        For each child, decrement its in-degree.
//        If child's in-degree hit 0, enqueue.
//   5. Return taken === numCourses.
//
// Why Kahn's:
//   Topological sort is possible iff the graph is a DAG. If we end up
//   visiting fewer than numCourses nodes, some node is stuck in a cycle.
//
// DFS alternative:
//   Color each node WHITE/GRAY/BLACK. A cycle is found if DFS revisits a
//   GRAY node. White → unvisited; Gray → on the current path; Black →
//   fully processed.
//
// Time:  O(V + E)
// Space: O(V + E)
//
// Edge Cases:
//   - No prerequisites          → true
//   - Self-loop ([i, i])        → false (trivially a cycle)
//   - Disconnected components   → fine; Kahn's processes each independently
//   - Multiple edges same pair  → still works; counts in-degree consistently

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  // your code here
};

console.log('=== LC #207 Course Schedule ===\n');

console.log('Test 1:');
console.log(canFinish(2, [[1, 0]]));
// Expected: true

console.log('\nTest 2 — cycle:');
console.log(canFinish(2, [[1, 0], [0, 1]]));
// Expected: false

console.log('\nTest 3 — no prereqs:');
console.log(canFinish(3, []));
// Expected: true

console.log('\nTest 4 — chain:');
console.log(canFinish(4, [[1, 0], [2, 1], [3, 2]]));
// Expected: true
