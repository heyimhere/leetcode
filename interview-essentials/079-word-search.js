// LC #79 — Word Search   [Medium]   Pattern: Backtracking
//
// Given an m x n grid of characters board and a string word, return true if
// word can be spelled out by walking the grid.
//
// The letters must be sequentially adjacent — horizontally or vertically
// neighbouring cells only (no diagonals) — and the SAME cell may not be
// reused within one word.
//
// Example 1:
//   Input:  board = [["A","B","C","E"],
//                    ["S","F","C","S"],
//                    ["A","D","E","E"]], word = "ABCCED"
//   Output: true
// Example 2:
//   Input:  same board, word = "SEE"
//   Output: true
// Example 3:
//   Input:  same board, word = "ABCB"
//   Output: false    (would have to reuse the first B)
//
// Constraints:
//   m === board.length, n === board[i].length
//   1 <= m, n <= 6
//   1 <= word.length <= 15
//   board and word consist of lowercase and uppercase English letters.

const exist = (board, word) => {

};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

console.log(exist(board, 'ABCCED')); // expected: true
console.log(exist(board, 'SEE'));    // expected: true
console.log(exist(board, 'ABCB'));   // expected: false
