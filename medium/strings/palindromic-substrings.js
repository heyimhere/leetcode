// TODO: implement
// LC #647 — Palindromic Substrings
//
// Given a string s, return the NUMBER of palindromic SUBSTRINGS (each
// occurrence counted separately, even if the same string appears twice).
//
// Example:
//   "abc"   → 3   ("a","b","c")
//   "aaa"   → 6   ("a","a","a","aa","aa","aaa")
//
// Approach (expand around each center):
//   There are 2n - 1 centers: n single-char centers and n - 1 between-char
//   centers (for even-length palindromes).
//
//   countAt(left, right):
//     count = 0
//     while left >= 0 && right < n && s[left] === s[right]:
//       count++; left--; right++
//     return count
//
//   total = 0
//   for i in 0..n-1:
//     total += countAt(i, i)       // odd length
//     total += countAt(i, i+1)     // even length
//   return total
//
// Why this works:
//   Every palindrome has a unique center (single index for odd length;
//   between two indices for even). Expanding outward enumerates every
//   palindrome anchored at each center exactly once.
//
// Alternative: DP table dp[i][j] = is s[i..j] palindrome. O(n²) time and
// space. Same asymptotics but heavier memory.
//
// Approach 3: Manacher's algorithm — O(n). Mention if asked.
//
// Time:  O(n²)
// Space: O(1) (expand) or O(n²) (DP)
//
// Edge Cases:
//   - Empty string         → 0
//   - All same char        → n*(n+1)/2 palindromes
//   - All distinct chars   → n (only single-char palindromes)

/**
 * @param {string} s
 * @returns {number}
 */
const countSubstrings = (s) => {
  // your code here
};

console.log('=== LC #647 Palindromic Substrings ===\n');

console.log('Test 1:');
console.log(countSubstrings('abc'));
// Expected: 3

console.log('\nTest 2:');
console.log(countSubstrings('aaa'));
// Expected: 6

console.log('\nTest 3:');
console.log(countSubstrings('abba'));
// Expected: 6  ('a','b','b','a','bb','abba')

console.log('\nTest 4 — single:');
console.log(countSubstrings('z'));
// Expected: 1
