// TODO: implement
// LC #567 — Permutation in String
//
// Given strings s1 and s2, return true iff s2 contains a PERMUTATION of s1
// as a substring (i.e., a window in s2 whose char frequencies match s1).
//
// Example:
//   s1 = "ab", s2 = "eidbaooo"  → true   ("ba" is a permutation of "ab")
//   s1 = "ab", s2 = "eidboaoo"  → false
//
// Approach (fixed-size sliding window of frequencies):
//   1. Build need[]: a 26-int array of s1's char counts.
//   2. Slide a window of size |s1| across s2, maintaining have[].
//   3. After each window update, compare have[] vs need[]. If equal → true.
//
//   Either:
//     a. Recompute "matches" delta on each char addition/removal (track
//        how many of the 26 buckets currently equal need); O(1) per step.
//     b. Or compare the two 26-int arrays each step: O(26) per step,
//        O(26n) overall — still linear.
//
// Why fixed-size:
//   A permutation of s1 has the SAME length as s1 (and same multiset of
//   chars). So the window size is always |s1|; we never need to grow or
//   shrink based on content.
//
// Time:  O(n + m × 26)  or  O(n × 26) — both effectively O(n)
// Space: O(1)            — two 26-element arrays
//
// Edge Cases:
//   - |s1| > |s2|        → false (no window fits)
//   - s1 === s2          → true (one permutation = itself)
//   - Identical chars (e.g. "aaa" in "aaaaaa") → true
//   - Disjoint alphabets → false

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
const checkInclusion = (s1, s2) => {
  // your code here
};

console.log('=== LC #567 Permutation in String ===\n');

console.log('Test 1:');
console.log(checkInclusion('ab', 'eidbaooo'));
// Expected: true

console.log('\nTest 2:');
console.log(checkInclusion('ab', 'eidboaoo'));
// Expected: false

console.log('\nTest 3 — s1 longer than s2:');
console.log(checkInclusion('abcd', 'abc'));
// Expected: false

console.log('\nTest 4 — exact match:');
console.log(checkInclusion('abc', 'cab'));
// Expected: true
