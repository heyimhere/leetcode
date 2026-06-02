// TODO: implement
// LC #72 — Edit Distance (Levenshtein Distance)
//
// Given two strings word1 and word2, return the MINIMUM number of
// operations (insert, delete, or replace ONE character) to convert word1
// into word2.
//
// Example:
//   word1 = "horse",  word2 = "ros"     → 3
//     horse → rorse (replace h→r) → rose (remove r) → ros (remove e)
//   word1 = "intention", word2 = "execution"  → 5
//   word1 = "abc",      word2 = "abc"   → 0
//
// Approach (2D DP):
//   dp[i][j] = edit distance between word1[0..i-1] and word2[0..j-1].
//   Base:
//     dp[0][j] = j     (insert j chars)
//     dp[i][0] = i     (delete i chars)
//   Recurrence:
//     if word1[i-1] === word2[j-1]:
//       dp[i][j] = dp[i-1][j-1]                       (no op needed)
//     else:
//       dp[i][j] = 1 + min(dp[i-1][j-1],    // replace
//                          dp[i-1][j],      // delete from word1
//                          dp[i][j-1])      // insert into word1
//   Answer: dp[m][n]
//
// Why exactly three options:
//   - Equal last chars: no op; problem reduces to the prefix pair.
//   - Replace: cost 1; both lengths shrink by 1.
//   - Delete from word1: cost 1; word1 shrinks by 1.
//   - Insert into word1: cost 1; logically equivalent to deleting from
//     word2; word2's "remaining" shrinks by 1.
//
// Space-optimized to O(min(m, n)) with a rolling 1D array.
//
// Time:  O(m × n)
// Space: O(m × n) → O(min(m, n))
//
// Edge Cases:
//   - Both empty             → 0
//   - One empty              → length of the other
//   - Equal strings          → 0
//   - Completely disjoint    → max(m, n) (replace everything)

/**
 * @param {string} word1
 * @param {string} word2
 * @returns {number}
 */
const minDistance = (word1, word2) => {
  // your code here
};

console.log('=== LC #72 Edit Distance ===\n');

console.log('Test 1:');
console.log(minDistance('horse', 'ros'));
// Expected: 3

console.log('\nTest 2:');
console.log(minDistance('intention', 'execution'));
// Expected: 5

console.log('\nTest 3 — identical:');
console.log(minDistance('abc', 'abc'));
// Expected: 0

console.log('\nTest 4 — empty:');
console.log(minDistance('', 'hello'));
// Expected: 5
