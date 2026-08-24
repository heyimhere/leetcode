// LC #54 — Spiral Matrix   [Medium]   Pattern: Matrix
//
// Given an m x n matrix, return all of its elements in spiral order —
// starting at the top-left and walking right, down, left and up, tightening
// inward until every cell has been visited.
//
// Example 1:
//   Input:  matrix = [[1,2,3],[4,5,6],[7,8,9]]
//   Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//   Input:  matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
//   Output: [1,2,3,4,8,12,11,10,9,5,6,7]
// Example 3:
//   Input:  matrix = [[7],[9],[6]]
//   Output: [7,9,6]
//
// Constraints:
//   m === matrix.length, n === matrix[i].length
//   1 <= m, n <= 10
//   -100 <= matrix[i][j] <= 100

const spiralOrder = (matrix) => {

};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// expected: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// expected: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[7], [9], [6]])); // expected: [7,9,6]
