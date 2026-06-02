// TODO: implement
// coding interview sample (Karat-style)

/**
 * Sparse Vector — Part 2 — Sparse Matrix Multiplication
 *
 * Builds on `sparse-vector-dot-product.js`. After the 1D dot product,
 * Part 2 generalizes to multiplying two SPARSE MATRICES. Equivalent to
 * LC #311 — Sparse Matrix Multiplication.
 *
 * Input / Output:
 *   A, B are 2D arrays (dense reps with lots of zeros). Multiply such
 *   that C = A × B and return C as a dense 2D array (or as a sparse map,
 *   depending on the spec).
 *
 * Example:
 *   A = [[1, 0, 0],
 *        [-1, 0, 3]]
 *   B = [[7, 0, 0],
 *        [0, 0, 0],
 *        [0, 0, 1]]
 *   → C = [[7, 0, 0],
 *           [-7, 0, 3]]
 *
 * Approach (skip zeros in A, accumulate into C):
 *   m = A.rows; k = A.cols (= B.rows); n = B.cols
 *   C = m x n zero matrix
 *   for i in 0..m-1:
 *     for j in 0..k-1:
 *       if A[i][j] !== 0:                  // skip the zero pivot
 *         for l in 0..n-1:
 *           if B[j][l] !== 0:
 *             C[i][l] += A[i][j] * B[j][l]
 *   return C
 *
 *   For VERY sparse matrices, pre-extract non-zero entries:
 *     Aentries: Array<[i, j, val]>
 *     Bentries: Array<[j, l, val]>
 *   For each (i, j, va) ∈ A, and each (j, l, vb) ∈ B sharing j, accumulate
 *   into C[i][l].
 *
 *   Use a row-indexed map of B's non-zero entries for fast lookup.
 *
 * Why "skip zero pivot":
 *   When A[i][j] === 0, the entire l-loop contributes nothing — pure
 *   constant-factor savings.
 *
 * Time:  O(m × k × n) dense; much smaller when sparse
 * Space: O(m × n) for the result
 *
 * Edge Cases:
 *   - Empty matrices         → spec edge; return appropriate shape
 *   - Incompatible dims      → throw or return null
 *   - All zeros              → all-zero result
 *   - Identity multiplied    → returns the other matrix
 */

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @returns {number[][]}
 */
const sparseMatrixMultiply = (A, B) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Sparse Vector — Part 2 (Sparse Matrix Multiply) ===\n');

console.log('Test 1:');
console.log(sparseMatrixMultiply(
  [[1, 0, 0], [-1, 0, 3]],
  [[7, 0, 0], [0, 0, 0], [0, 0, 1]],
));
// Expected: [[7,0,0],[-7,0,3]]

console.log('\nTest 2 — identity:');
console.log(sparseMatrixMultiply(
  [[1, 2], [3, 4]],
  [[1, 0], [0, 1]],
));
// Expected: [[1,2],[3,4]]

console.log('\nTest 3 — all zeros:');
console.log(sparseMatrixMultiply(
  [[0, 0], [0, 0]],
  [[0, 0], [0, 0]],
));
// Expected: [[0,0],[0,0]]
