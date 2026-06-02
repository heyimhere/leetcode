// TODO: implement
// LC #300 — Longest Increasing Subsequence
//
// Given an array `nums`, return the LENGTH of the longest STRICTLY
// increasing subsequence (NOT necessarily contiguous).
//
// Example:
//   [10,9,2,5,3,7,101,18]   → 4   ([2,3,7,101] or similar)
//   [0,1,0,3,2,3]           → 4   ([0,1,2,3])
//   [7,7,7,7,7,7,7]         → 1
//
// Approach 1 — DP O(n²):
//   dp[i] = length of longest increasing subseq ENDING at i.
//   dp[i] = 1 + max(dp[j] for j < i if nums[j] < nums[i])
//   Answer = max(dp).
//
// Approach 2 — Patience sorting / binary search O(n log n):
//   tails = []
//   for x of nums:
//     idx = lowerBound(tails, x)   // first tail ≥ x
//     if idx === tails.length → tails.push(x)
//     else                    → tails[idx] = x
//   return tails.length
//
//   tails is NOT necessarily a real subsequence (it's a length record),
//   but its length is correct. Replacing extends or "improves" a tail of
//   the same length with a smaller candidate.
//
// Why patience sorting works:
//   Maintains the smallest possible tail value for each LIS length so far.
//   This invariant lets you greedily extend whenever possible.
//
// Time:  Approach 1: O(n²);  Approach 2: O(n log n)
// Space: O(n)
//
// Edge Cases:
//   - Empty array          → 0
//   - All equal            → 1
//   - Already increasing   → n
//   - Strictly decreasing  → 1

/**
 * @param {number[]} nums
 * @returns {number}
 */
const lengthOfLIS = (nums) => {
  // your code here
};

console.log('=== LC #300 Longest Increasing Subsequence ===\n');

console.log('Test 1:');
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// Expected: 4

console.log('\nTest 2:');
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
// Expected: 4

console.log('\nTest 3 — all equal:');
console.log(lengthOfLIS([7, 7, 7, 7]));
// Expected: 1

console.log('\nTest 4 — empty:');
console.log(lengthOfLIS([]));
// Expected: 0
