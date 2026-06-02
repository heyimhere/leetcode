// TODO: implement
// LC #73 — Set Matrix Zeroes
//
// Given an m × n integer matrix, if an element is 0, set its ENTIRE row and
// column to 0. Do it IN PLACE.
//
// Example:
//   [[1,1,1],
//    [1,0,1],
//    [1,1,1]]  → [[1,0,1],
//                 [0,0,0],
//                 [1,0,1]]
//
//   [[0,1,2,0],
//    [3,4,5,2],
//    [1,3,1,5]] → [[0,0,0,0],
//                  [0,4,5,0],
//                  [0,3,1,0]]
//
// Approach (use the first row and first column as bookkeeping):
//   1. Check separately whether the first row contains a 0 (firstRowZero)
//      and whether the first column contains a 0 (firstColZero).
//   2. Walk cells (i, j) for i, j ≥ 1. If matrix[i][j] === 0, mark
//      matrix[i][0] = 0 and matrix[0][j] = 0.
//   3. Walk again for i, j ≥ 1. If matrix[i][0] === 0 OR matrix[0][j] === 0,
//      zero matrix[i][j].
//   4. Finally, zero the first row if firstRowZero, and the first column if
//      firstColZero.
//
// Why O(1) extra:
//   The first row and column are used as in-place flags, replacing the
//   sets/arrays a naive O(m + n) solution would use.
//
// Naive approaches:
//   - O(mn) extra: copy the matrix, write zeros to copy, return copy.
//   - O(m + n) extra: track zero rows and cols in two sets.
//   The in-place approach is the LC follow-up.
//
// Time:  O(m × n)
// Space: O(1) extra
//
// Edge Cases:
//   - No zeros at all          → unchanged
//   - All zeros                → unchanged (already all 0)
//   - Single row or column     → first-row/first-col flags handle it
//   - Zero in first row AND first col → flags catch both

/**
 * @param {number[][]} matrix
 * @returns {void}  (mutates in place)
 */
const setZeroes = (matrix) => {
  // your code here
};

console.log('=== LC #73 Set Matrix Zeroes ===\n');

const m1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(m1);
console.log('Test 1:', m1);
// Expected: [[1,0,1],[0,0,0],[1,0,1]]

const m2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(m2);
console.log('\nTest 2:', m2);
// Expected: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
