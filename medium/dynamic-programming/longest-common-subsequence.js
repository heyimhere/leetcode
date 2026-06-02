// TODO: implement
// LC #1143 — Longest Common Subsequence
//
// Given two strings `text1` and `text2`, return the LENGTH of their longest
// common SUBSEQUENCE (not contiguous, but order-preserving).
//
// Example:
//   text1 = "abcde", text2 = "ace"   → 3   ("ace")
//   text1 = "abc",   text2 = "abc"   → 3
//   text1 = "abc",   text2 = "def"   → 0
//
// Approach (2D DP — classic LCS):
//   dp[i][j] = LCS length of text1[0..i-1] and text2[0..j-1]
//   Base: dp[0][*] = dp[*][0] = 0
//   Recurrence:
//     if text1[i-1] === text2[j-1]:
//       dp[i][j] = dp[i-1][j-1] + 1
//     else:
//       dp[i][j] = max(dp[i-1][j], dp[i][j-1])
//   Answer: dp[m][n]
//
// Why the recurrence:
//   - Matching chars at the ends extend the LCS by 1 over the LCS of the
//     prefixes shortened by one each.
//   - Mismatch: drop one of the last chars and take the best.
//
// Space-optimized to O(min(m, n)) with a 1D rolling array.
//
// Time:  O(m × n)
// Space: O(m × n), or O(min(m, n))
//
// Edge Cases:
//   - Either empty           → 0
//   - Equal strings          → length of either
//   - All distinct chars     → 0 if completely disjoint
//   - Many duplicates        → still correct

/**
 * @param {string} text1
 * @param {string} text2
 * @returns {number}
 */
const longestCommonSubsequence = (text1, text2) => {
  // your code here
};

console.log('=== LC #1143 Longest Common Subsequence ===\n');

console.log('Test 1:');
console.log(longestCommonSubsequence('abcde', 'ace'));
// Expected: 3

console.log('\nTest 2 — identical:');
console.log(longestCommonSubsequence('abc', 'abc'));
// Expected: 3

console.log('\nTest 3 — disjoint:');
console.log(longestCommonSubsequence('abc', 'def'));
// Expected: 0

console.log('\nTest 4 — empty:');
console.log(longestCommonSubsequence('', 'hi'));
// Expected: 0
