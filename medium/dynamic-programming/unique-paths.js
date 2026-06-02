// TODO: implement
// LC #62 — Unique Paths
//
// A robot starts at the top-left of an m × n grid and wants to reach the
// bottom-right. It can move only RIGHT or DOWN. Return the number of
// unique paths.
//
// Example:
//   m = 3, n = 7   → 28
//   m = 3, n = 2   → 3
//   m = 1, n = 1   → 1
//
// Approach 1 (2D DP):
//   dp[i][j] = number of paths to reach (i, j).
//   dp[0][j] = dp[i][0] = 1.
//   dp[i][j] = dp[i-1][j] + dp[i][j-1].
//   Return dp[m-1][n-1].
//
// Approach 2 (1D rolling array):
//   Only the previous row's row matters → O(n) space.
//
// Approach 3 (combinatorics):
//   Any path consists of (m-1) downs and (n-1) rights in some order. The
//   count is C(m + n - 2, m - 1). O(min(m, n)) with a single product.
//
// Why the recurrence:
//   To stand on (i, j), the previous step was either from (i-1, j) (down)
//   or (i, j-1) (right). Add their counts.
//
// Time:  O(m × n) DP; O(min(m, n)) combinatorial
// Space: O(m × n) 2D; O(n) rolling; O(1) combinatorial
//
// Edge Cases:
//   - Single row (m = 1)  → 1   (one straight path right)
//   - Single column       → 1
//   - Both 1              → 1
//   - Very large m, n     → answer fits in number for LC's bounds

/**
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
const uniquePaths = (m, n) => {
  // your code here
};

console.log('=== LC #62 Unique Paths ===\n');

console.log('Test 1:');
console.log(uniquePaths(3, 7));
// Expected: 28

console.log('\nTest 2:');
console.log(uniquePaths(3, 2));
// Expected: 3

console.log('\nTest 3:');
console.log(uniquePaths(1, 1));
// Expected: 1

console.log('\nTest 4:');
console.log(uniquePaths(7, 3));
// Expected: 28
