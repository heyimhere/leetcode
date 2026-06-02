// TODO: implement
// LC #200 — Number of Islands
//
// Given an m × n grid of '1' (land) and '0' (water), return the number of
// ISLANDS. An island is a maximal group of 4-connected land cells.
//
// Example:
//   [['1','1','1','1','0'],
//    ['1','1','0','1','0'],
//    ['1','1','0','0','0'],
//    ['0','0','0','0','0']]   → 1
//
//   [['1','1','0','0','0'],
//    ['1','1','0','0','0'],
//    ['0','0','1','0','0'],
//    ['0','0','0','1','1']]   → 3
//
// Approach (DFS or BFS flood-fill):
//   For each cell (i, j):
//     if grid[i][j] === '1':
//       count++
//       flood-fill all 4-connected '1' cells, marking them visited
//       (overwrite with '0' or use a separate visited matrix)
//
// Why this counts each island once:
//   Each time we encounter an un-marked '1', we discover a brand-new
//   island. Flood-fill consumes the rest of that island so we don't
//   double-count.
//
// Why DFS/BFS interchangeable:
//   The grid is small enough that either works. DFS uses recursion stack
//   = O(m × n) worst case; BFS uses a queue of similar size.
//
// Union-Find alternative:
//   Treat each land cell as a node. Union 4-neighbor land cells. Count
//   distinct roots. Slightly more code, equivalent complexity.
//
// Time:  O(m × n)
// Space: O(m × n) recursion stack (DFS) or queue (BFS) in the worst case
//
// Edge Cases:
//   - Empty grid           → 0
//   - All water            → 0
//   - All land             → 1
//   - Diagonal '1' clusters → NOT connected (4-direction only)

/**
 * @param {string[][]} grid
 * @returns {number}
 */
const numIslands = (grid) => {
  // your code here
};

console.log('=== LC #200 Number of Islands ===\n');

console.log('Test 1:');
console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]));
// Expected: 1

console.log('\nTest 2:');
console.log(numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]));
// Expected: 3

console.log('\nTest 3 — all water:');
console.log(numIslands([['0', '0'], ['0', '0']]));
// Expected: 0

console.log('\nTest 4 — empty:');
console.log(numIslands([]));
// Expected: 0
