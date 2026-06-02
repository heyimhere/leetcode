// TODO: implement
// LC #994 — Rotting Oranges
//
// You're given an m × n grid:
//   0 = empty
//   1 = fresh orange
//   2 = rotten orange
// Every minute, every fresh orange 4-adjacent to a rotten one becomes
// rotten. Return the minimum number of minutes until NO fresh orange
// remains, or -1 if it's impossible.
//
// Example:
//   [[2,1,1],
//    [1,1,0],
//    [0,1,1]]   → 4
//
//   [[2,1,1],
//    [0,1,1],
//    [1,0,1]]   → -1   (the bottom-left fresh orange is unreachable)
//
//   [[0,2]]    → 0    (no fresh oranges to rot)
//
// Approach (multi-source BFS, level-by-level):
//   1. Push all initial rotten oranges into the queue. Count fresh.
//   2. BFS by "minutes": each pass empties the queue, rots all freshly
//      reachable cells, decrements fresh count, and enqueues newly-rotten.
//   3. If queue not empty at end of a minute → minutes++.
//   4. After BFS: if fresh > 0 → return -1; else return minutes.
//
// Why level-by-level:
//   We need TIME to the last rotting event, not just "all rotten in some
//   step." Tracking the size of the queue at each minute gives us a clean
//   "this is one timestep" boundary.
//
// Why multi-source:
//   All initial rotten oranges expand simultaneously. Single-source BFS
//   from each one and taking min would over-count work.
//
// Time:  O(m × n)
// Space: O(m × n) queue in the worst case
//
// Edge Cases:
//   - No fresh oranges                → 0
//   - No rotten oranges, all fresh    → -1 if any fresh; 0 if none
//   - Fresh oranges disconnected      → -1
//   - Mixed at start                  → BFS handles it

/**
 * @param {number[][]} grid
 * @returns {number}
 */
const orangesRotting = (grid) => {
  // your code here
};

console.log('=== LC #994 Rotting Oranges ===\n');

console.log('Test 1:');
console.log(orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]));
// Expected: 4

console.log('\nTest 2 — impossible:');
console.log(orangesRotting([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
]));
// Expected: -1

console.log('\nTest 3 — no fresh:');
console.log(orangesRotting([[0, 2]]));
// Expected: 0

console.log('\nTest 4 — all fresh, no rot source:');
console.log(orangesRotting([[1, 1, 1]]));
// Expected: -1
