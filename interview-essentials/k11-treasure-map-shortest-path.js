// Karat-style — Treasure Map Shortest Path   [Medium]   Pattern: Graphs / BFS
//
// You are given a 2D grid where each cell is either passable (true) or
// blocked (false).
//
// Starting at the top-left cell (0, 0), return the length of the SHORTEST
// 4-directional path to the bottom-right cell (m - 1, n - 1), counted in
// EDGES — that is, the number of moves, not the number of cells.
//
// If no path exists, or if the start or end cell is blocked, return -1.
//
// Example 1:
//   Input: grid = [
//     [true,  true,  false, true ],
//     [false, true,  true,  true ],
//     [true,  false, false, true ],
//     [true,  true,  true,  true ]
//   ]
//   Output: 6
//
// Example 2:
//   Input: grid = [[true, false], [false, true]]
//   Output: -1
//
// Example 3:
//   Input: grid = [[true]]
//   Output: 0
//
// Follow-ups the interviewer usually asks: return the actual path, and then
// allow the path to break through up to k blocked cells.

const shortestPath = (grid) => {

};

const T = true;
const F = false;

console.log(shortestPath([
  [T, T, F, T],
  [F, T, T, T],
  [T, F, F, T],
  [T, T, T, T],
])); // expected: 6

console.log(shortestPath([[T, F], [F, T]])); // expected: -1
console.log(shortestPath([[T]]));            // expected: 0
