// TODO: implement
// LC #10 — Regular Expression Matching
//
// Implement regex matching with support for:
//   '.' — matches ANY single character
//   '*' — matches ZERO OR MORE of the PRECEDING element
//
// The match must cover the ENTIRE input string (not partial).
//
// Example:
//   s = "aa",   p = "a"      → false
//   s = "aa",   p = "a*"     → true
//   s = "ab",   p = ".*"     → true
//   s = "aab",  p = "c*a*b"  → true
//   s = "mississippi", p = "mis*is*p*."  → false
//
// Approach (2D DP, bottom-up):
//   dp[i][j] = does s[0..i-1] match p[0..j-1]?
//   Base: dp[0][0] = true.
//         dp[0][j] = true iff pattern can match empty string (only via
//         "x*" pairs zeroed out).
//
//   For i in 1..m, j in 1..n:
//     if p[j-1] === '*':
//       dp[i][j] = dp[i][j-2]                            // skip "x*" entirely
//                  || (matches(s[i-1], p[j-2]) && dp[i-1][j])  // consume one
//     else:
//       dp[i][j] = matches(s[i-1], p[j-1]) && dp[i-1][j-1]
//
//   matches(c, pc) = pc === '.' || pc === c.
//
//   Answer: dp[m][n].
//
// Why '*' has two cases:
//   "x*" can match ZERO instances (use dp[i][j-2]) or AT LEAST ONE — in
//   which case we "consume" the current s char and stay on the same
//   pattern position (dp[i-1][j]).
//
// Why dp[0][j] needs special initialization:
//   The empty string still matches patterns like "a*b*c*" — every starred
//   group zeroes out. Easiest: dp[0][j] = dp[0][j-2] when p[j-1] === '*'.
//
// Time:  O(m × n)
// Space: O(m × n)  (rolling possible)
//
// Edge Cases:
//   - p = ""                  → s must be ""
//   - s = ""                  → only patterns of "x*"... groups match
//   - Pattern starts with '*' → invalid; spec guarantees this won't happen
//   - "." inside "x*"-style   → ".*" matches anything (with care for greedy/lazy)

/**
 * @param {string} s
 * @param {string} p
 * @returns {boolean}
 */
const isMatch = (s, p) => {
  // your code here
};

console.log('=== LC #10 Regular Expression Matching ===\n');

console.log('Test 1:');
console.log(isMatch('aa', 'a'));
// Expected: false

console.log('\nTest 2:');
console.log(isMatch('aa', 'a*'));
// Expected: true

console.log('\nTest 3:');
console.log(isMatch('ab', '.*'));
// Expected: true

console.log('\nTest 4:');
console.log(isMatch('aab', 'c*a*b'));
// Expected: true

console.log('\nTest 5:');
console.log(isMatch('mississippi', 'mis*is*p*.'));
// Expected: false
