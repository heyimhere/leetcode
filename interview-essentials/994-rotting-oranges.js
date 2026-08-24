// LC #994 — Rotting Oranges   [Medium]   Pattern: Graphs
//
// You are given an m x n grid where each cell is one of:
//   0  an empty cell
//   1  a fresh orange
//   2  a rotten orange
//
// Every minute, any fresh orange that is 4-directionally adjacent to a
// rotten one becomes rotten. Return the minimum number of minutes until no
// fresh orange remains.
//
// If some fresh orange can never rot, return -1.
//
// Example 1:
//   Input:  grid = [[2,1,1],[1,1,0],[0,1,1]]
//   Output: 4
// Example 2:
//   Input:  grid = [[2,1,1],[0,1,1],[1,0,1]]
//   Output: -1       (the bottom-left orange is unreachable)
// Example 3:
//   Input:  grid = [[0,2]]
//   Output: 0        (no fresh oranges to begin with)
//
// Constraints:
//   m === grid.length, n === grid[i].length
//   1 <= m, n <= 10
//   grid[i][j] is 0, 1 or 2.

const orangesRotting = (grid) => {

};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // expected: 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])); // expected: -1
console.log(orangesRotting([[0, 2]]));                           // expected: 0
