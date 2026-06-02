// TODO: implement
// LC #91 — Decode Ways
//
// A → 1, B → 2, ..., Z → 26. Given a string of digits s, return the number
// of ways to DECODE it back into letters.
//
// Example:
//   "12"    → 2   ("AB"=[1,2] or "L"=[12])
//   "226"   → 3   ("BBF","BZ","VF")
//   "06"    → 0   ("06" can't decode: 0 alone isn't valid and "06" isn't 6)
//
// Approach (1D DP with two-step lookback):
//   dp[i] = number of ways to decode s[0..i-1].
//   Base: dp[0] = 1 (empty string has 1 way).
//   For i in 1..n:
//     one = s[i-1] (single digit)
//     two = s.slice(i-2, i) (two digits, if i >= 2)
//     dp[i] = 0
//     if "1" <= one <= "9": dp[i] += dp[i-1]
//     if i >= 2 and "10" <= two <= "26": dp[i] += dp[i-2]
//   return dp[n]
//
// Space-optimized: track only the last two dp values.
//
// Why two-step lookback:
//   The last character either decoded alone (depends on dp[i-1]) or paired
//   with the previous one (depends on dp[i-2]). Sum the valid options.
//
// Pitfalls:
//   - "0" alone is INVALID (no letter is 0).
//   - "10" and "20" are valid pair-decodes; "30", "40", ... are NOT.
//   - Leading "0" anywhere → entire string undecodable → return 0.
//
// Time:  O(n)
// Space: O(1) optimized
//
// Edge Cases:
//   - "0" → 0
//   - "" → 1 (by some conventions) or 0 — LC says 1
//   - Long all-1s string → Fibonacci-like growth in dp values
//   - "27" → 1 ("BG"; "27" not a letter)

/**
 * @param {string} s
 * @returns {number}
 */
const numDecodings = (s) => {
  // your code here
};

console.log('=== LC #91 Decode Ways ===\n');

console.log('Test 1:');
console.log(numDecodings('12'));
// Expected: 2

console.log('\nTest 2:');
console.log(numDecodings('226'));
// Expected: 3

console.log('\nTest 3:');
console.log(numDecodings('06'));
// Expected: 0

console.log('\nTest 4 — repeated:');
console.log(numDecodings('11106'));
// Expected: 2  ("AAJF" and "KJF" — both end "JF")
