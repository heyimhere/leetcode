// TODO: implement
// LC #459 — Repeated Substring Pattern
//
// Given a string s, return true iff s can be constructed by taking a
// non-empty substring of s and concatenating multiple (≥2) copies of it.
//
// Example:
//   "abab"      → true   (= "ab" + "ab")
//   "aba"       → false
//   "abcabcabc" → true   (= "abc" + "abc" + "abc")
//   "a"         → false  (must be ≥2 copies of a NON-EMPTY substring)
//
// Approach 1 (the (s + s)[1..-1].includes(s) trick):
//   Doubled = s + s.
//   If s is a k-times repeat of some pattern p, then s + s contains a copy
//   of s starting at some shift d in (0, len(s)). Stripping the very first
//   and very last char and searching for s reveals it.
//   return (s + s).slice(1, -1).includes(s)
//
//   Why it works: if s = p^k with k ≥ 2, shifting s by |p| positions inside
//   s+s reproduces s. Removing the boundary chars ensures we don't trivially
//   match the original copies at offset 0 and offset |s|.
//
// Approach 2 (try every divisor length):
//   For each d that divides len(s), check whether s repeats with period d.
//   O(n × σ(n)) — fine but slower than the trick above.
//
// Approach 3 (KMP failure function):
//   Build the LPS array. If LPS[n-1] > 0 and n % (n - LPS[n-1]) === 0,
//   return true. Classic interview gotcha.
//
// Time:  O(n) for the doubled-string trick (engine includes is linear or
//        near-linear amortized); O(n) for KMP.
// Space: O(n)
//
// Edge Cases:
//   - "a"               → false (only one copy possible)
//   - "aa"              → true
//   - "abcabc"          → true
//   - "abacababacab"    → tricky — check carefully

/**
 * @param {string} s
 * @returns {boolean}
 */
const repeatedSubstringPattern = (s) => {
  // your code here
};

console.log('=== LC #459 Repeated Substring Pattern ===\n');

console.log('Test 1:');
console.log(repeatedSubstringPattern('abab'));
// Expected: true

console.log('\nTest 2:');
console.log(repeatedSubstringPattern('aba'));
// Expected: false

console.log('\nTest 3:');
console.log(repeatedSubstringPattern('abcabcabcabc'));
// Expected: true

console.log('\nTest 4 — singleton:');
console.log(repeatedSubstringPattern('a'));
// Expected: false
