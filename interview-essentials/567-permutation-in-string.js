// LC #567 — Permutation in String   [Medium]   Pattern: Sliding Window
//
// Given two strings s1 and s2, return true if s2 contains a permutation of
// s1 as a substring — that is, if some contiguous window of s2 uses exactly
// the same letters with the same counts as s1.
//
// Example 1:
//   Input:  s1 = "ab", s2 = "eidbaooo"
//   Output: true      (s2 contains "ba")
// Example 2:
//   Input:  s1 = "ab", s2 = "eidboaoo"
//   Output: false
// Example 3:
//   Input:  s1 = "adc", s2 = "dcda"
//   Output: true      (s2 contains "cda")
//
// Constraints:
//   1 <= s1.length, s2.length <= 10^4
//   s1 and s2 consist of lowercase English letters.

const checkInclusion = (s1, s2) => {

};

console.log(checkInclusion('ab', 'eidbaooo')); // expected: true
console.log(checkInclusion('ab', 'eidboaoo')); // expected: false
console.log(checkInclusion('adc', 'dcda'));    // expected: true
