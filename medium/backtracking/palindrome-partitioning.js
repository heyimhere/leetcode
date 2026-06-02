// TODO: implement
// LC #131 — Palindrome Partitioning
//
// Given a string s, partition s such that EVERY substring of the partition
// is a palindrome. Return ALL such partitions.
//
// Example:
//   s = "aab"   → [["a","a","b"], ["aa","b"]]
//   s = "a"     → [["a"]]
//
// Approach (backtracking with prefix palindrome check):
//   backtrack(start, path):
//     if start === s.length → result.push(path.slice())
//     for end in start..s.length-1:
//       if isPalindrome(s, start, end):
//         path.push(s.slice(start, end + 1))
//         backtrack(end + 1, path)
//         path.pop()
//
//   isPalindrome(s, l, r):
//     two-pointer compare; return bool.
//
//   Call backtrack(0, []).
//
// Optimization (memoize palindrome table):
//   Precompute dp[l][r] = is s[l..r] a palindrome. Avoids redundant
//   isPalindrome calls. O(n²) time & space.
//
// Why backtracking + start cursor:
//   Each call decides the next prefix to "cut off" as a palindrome and
//   recurses on the rest. The cursor enforces left-to-right partitioning,
//   so no duplicates.
//
// Time:  O(n × 2^n)   (up to 2^(n-1) partitions, each path O(n) to copy)
// Space: O(n)         recursion + path
//
// Edge Cases:
//   - Empty string         → [[]] (one empty partition)
//   - All same char        → 2^(n-1) partitions
//   - No palindromes > 1   → only the singleton-letters partition

/**
 * @param {string} s
 * @returns {string[][]}
 */
const partition = (s) => {
  // your code here
};

console.log('=== LC #131 Palindrome Partitioning ===\n');

console.log('Test 1:');
console.log(partition('aab'));
// Expected: [['a','a','b'], ['aa','b']]

console.log('\nTest 2 — single:');
console.log(partition('a'));
// Expected: [['a']]

console.log('\nTest 3 — all same:');
console.log(partition('aaa'));
// Expected: [['a','a','a'],['a','aa'],['aa','a'],['aaa']]
