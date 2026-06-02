// TODO: implement
// LC #130 — Surrounded Regions
//
// Given an m × n board of 'X' and 'O', CAPTURE all regions surrounded by
// 'X': any 'O' that is NOT connected (4-directionally) to a BORDER 'O'
// becomes 'X'. Mutate the board IN PLACE.
//
// Example:
//   [['X','X','X','X'],
//    ['X','O','O','X'],
//    ['X','X','O','X'],
//    ['X','O','X','X']]
//   →
//   [['X','X','X','X'],
//    ['X','X','X','X'],
//    ['X','X','X','X'],
//    ['X','O','X','X']]   // the bottom-left 'O' touches the edge
//
// Approach (mark-from-border, then sweep):
//   1. For each border cell that's 'O', DFS/BFS the 4-connected component
//      and mark every cell as 'S' (safe sentinel) — temporary character.
//   2. Walk the whole grid:
//        if cell === 'O'  → captured, becomes 'X'
//        if cell === 'S'  → safe, restore to 'O'
//
// Why "mark from border":
//   The set of un-capturable Os is exactly those reachable from a border O.
//   By processing border Os first, we identify all safe cells in O(mn),
//   then the rest are by definition surrounded.
//
// Direct flood-from-each-interior-O approach is O(mn × mn) worst case.
//
// Time:  O(m × n)
// Space: O(m × n) recursion in worst case
//
// Edge Cases:
//   - Empty grid                  → no-op
//   - All 'X'                     → no change
//   - All 'O'                     → no change (all touch border)
//   - Single row/col              → all border, no change
//   - 'O' islands fully interior  → all captured

/**
 * @param {string[][]} board
 * @returns {void}  (mutates in place)
 */
const solve = (board) => {
  // your code here
};

console.log('=== LC #130 Surrounded Regions ===\n');

const b = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
solve(b);
console.log('Test 1:', b);
// Expected:
// [['X','X','X','X'],
//  ['X','X','X','X'],
//  ['X','X','X','X'],
//  ['X','O','X','X']]
