// TODO: implement
// LC #312 — Burst Balloons
//
// You're given balloons with values `nums[i]`. Bursting balloon i earns
// nums[left] × nums[i] × nums[right] coins, where left/right are the
// CURRENT (post-previous-bursts) neighbors. Boundary "balloons" have
// value 1. Return the MAX coins you can collect by bursting all balloons.
//
// Example:
//   nums = [3,1,5,8]   → 167
//     Optimal order: 1 → 5 → 3 → 8
//   nums = [1,5]       → 10
//
// Approach (interval DP — think LAST balloon to burst):
//   Pad nums with 1 at both ends: a = [1, ...nums, 1] (length n + 2).
//   dp[i][j] = max coins from bursting all balloons STRICTLY between i and j
//   (open interval). i, j are indices into the padded array.
//
//   dp[i][j] = 0 when j - i <= 1
//   For each k in (i, j):
//     // k is the LAST balloon to burst in the open interval (i, j)
//     dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + a[i] * a[k] * a[j])
//
//   Answer: dp[0][n + 1].
//
// Why think LAST balloon (not first):
//   If k is bursted FIRST, neighbors get complicated (left/right depend on
//   future state). If k is LAST, neighbors at burst time are fixed (a[i]
//   and a[j], the padding/boundary survivors). That makes subproblems
//   independent.
//
// Time:  O(n³)
// Space: O(n²)
//
// Edge Cases:
//   - Empty input       → 0
//   - Single balloon    → 1 × val × 1 = val
//   - All zeros         → 0
//   - Large values       → DP value can be big; JS Number is safe for LC bounds

/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxCoins = (nums) => {
  // your code here
};

console.log('=== LC #312 Burst Balloons ===\n');

console.log('Test 1:');
console.log(maxCoins([3, 1, 5, 8]));
// Expected: 167

console.log('\nTest 2:');
console.log(maxCoins([1, 5]));
// Expected: 10

console.log('\nTest 3 — empty:');
console.log(maxCoins([]));
// Expected: 0

console.log('\nTest 4 — single:');
console.log(maxCoins([7]));
// Expected: 7
