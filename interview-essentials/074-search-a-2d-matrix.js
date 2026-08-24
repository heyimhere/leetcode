// LC #74 — Search a 2D Matrix   [Medium]   Pattern: Binary Search
//
// You are given an m x n integer matrix with two properties:
//   - Each row is sorted in non-decreasing order left to right.
//   - The first integer of each row is greater than the last integer of the
//     row above it.
//
// Given an integer target, return true if target is in the matrix.
// You must run in logarithmic time relative to m * n.
//
// Example 1:
//   Input:  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//   Output: true
// Example 2:
//   Input:  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
//   Output: false
// Example 3:
//   Input:  matrix = [[1]], target = 1
//   Output: true
//
// Constraints:
//   m === matrix.length, n === matrix[i].length
//   1 <= m, n <= 100
//   -10^4 <= matrix[i][j], target <= 10^4

const searchMatrix = (matrix, target) => {

};

const mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
console.log(searchMatrix(mat, 3));   // expected: true
console.log(searchMatrix(mat, 13));  // expected: false
console.log(searchMatrix([[1]], 1)); // expected: true
