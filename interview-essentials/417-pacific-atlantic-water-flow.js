// LC #417 — Pacific Atlantic Water Flow   [Medium]   Pattern: Graphs
//
// You are given an m x n grid heights representing the height of each cell
// on an island.
//
// The Pacific ocean touches the island's LEFT and TOP edges; the Atlantic
// touches the RIGHT and BOTTOM edges.
//
// Rain water flows from a cell to any 4-directionally adjacent cell whose
// height is LESS THAN OR EQUAL to the current cell's, and flows off the grid
// into the ocean at the edges.
//
// Return the coordinates [r, c] of every cell from which water can reach
// BOTH oceans. Any order is fine.
//
// Example 1:
//   Input:  heights = [[1,2,2,3,5],
//                      [3,2,3,4,4],
//                      [2,4,5,3,1],
//                      [6,7,1,4,5],
//                      [5,1,1,2,4]]
//   Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Example 2:
//   Input:  heights = [[1]]
//   Output: [[0,0]]
//
// Constraints:
//   m === heights.length, n === heights[i].length
//   1 <= m, n <= 200
//   0 <= heights[i][j] <= 10^5

const pacificAtlantic = (heights) => {

};

console.log(pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
])); // expected: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]] (any order)

console.log(pacificAtlantic([[1]])); // expected: [[0,0]]
