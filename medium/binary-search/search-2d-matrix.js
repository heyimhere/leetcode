// TODO: implement
// LC #74 — Search a 2D Matrix
//
// You're given an m × n matrix with two properties:
//   - Each row is sorted left-to-right.
//   - The first element of each row is greater than the LAST of the row above.
// (Equivalent to: row-major-flattened matrix is sorted.)
// Return true iff `target` is in the matrix. Required: O(log(m × n)).
//
// Example:
//   matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3   → true
//   matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13  → false
//
// Approach (binary search on a virtual flat array):
//   lo = 0; hi = m * n - 1
//   while lo <= hi:
//     mid = (lo + hi) >>> 1
//     row = Math.floor(mid / n); col = mid % n
//     v = matrix[row][col]
//     if v === target → return true
//     if v <  target → lo = mid + 1
//     else           → hi = mid - 1
//   return false
//
// Why "virtual flat":
//   The two properties give us a strictly increasing sequence when read
//   row-major. Standard binary search on the index, decoding (row, col)
//   from mid, runs in O(log(mn)) with O(1) space.
//
// LC #240 (variant) — Search a 2D Matrix II: rows sorted left-right and
// columns sorted top-down, but NOT the row-major chain. Solve with the
// staircase technique starting from top-right.
//
// Time:  O(log(m × n))
// Space: O(1)
//
// Edge Cases:
//   - Empty matrix or empty rows  → false
//   - Single cell                 → comparison only
//   - target smaller than all     → false
//   - target larger than all      → false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
const searchMatrix = (matrix, target) => {
  // your code here
};

console.log('=== LC #74 Search a 2D Matrix ===\n');

const m = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];

console.log('Test 1:');
console.log(searchMatrix(m, 3));
// Expected: true

console.log('\nTest 2:');
console.log(searchMatrix(m, 13));
// Expected: false

console.log('\nTest 3 — empty:');
console.log(searchMatrix([], 1));
// Expected: false

console.log('\nTest 4 — single cell hit:');
console.log(searchMatrix([[5]], 5));
// Expected: true
