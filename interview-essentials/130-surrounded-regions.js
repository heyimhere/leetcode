// LC #130 — Surrounded Regions   [Medium]   Pattern: Graphs
//
// Given an m x n board containing 'X' and 'O', capture every region of 'O's
// that is completely surrounded by 'X's by flipping those 'O's to 'X'.
//
// A region is a group of 'O's connected 4-directionally. A region is only
// captured if NONE of its cells sits on the border of the board.
//
// Modify the board IN PLACE.
//
// Example 1:
//   Input:  board = [["X","X","X","X"],
//                    ["X","O","O","X"],
//                    ["X","X","O","X"],
//                    ["X","O","X","X"]]
//   Output: [["X","X","X","X"],
//            ["X","X","X","X"],
//            ["X","X","X","X"],
//            ["X","O","X","X"]]
//           (the bottom-left O touches the border, so it survives)
// Example 2:
//   Input:  board = [["X"]]
//   Output: [["X"]]
//
// Constraints:
//   m === board.length, n === board[i].length
//   1 <= m, n <= 200
//   board[i][j] is 'X' or 'O'.

const solve = (board) => {

};

const b1 = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];
solve(b1);
console.log(b1);
// expected: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

const b2 = [['X']];
solve(b2);
console.log(b2); // expected: [["X"]]
