// LC #76 — Minimum Window Substring   [Hard]   Pattern: Sliding Window
//
// Given two strings s and t, return the shortest substring of s that contains
// every character of t INCLUDING DUPLICATES. If no such substring exists,
// return the empty string "".
//
// The characters may appear in any order within the window.
// The answer is guaranteed to be unique.
//
// Example 1:
//   Input:  s = "ADOBECODEBANC", t = "ABC"
//   Output: "BANC"
// Example 2:
//   Input:  s = "a", t = "a"
//   Output: "a"
// Example 3:
//   Input:  s = "a", t = "aa"
//   Output: ""       (s has only one 'a', t needs two)
//
// Constraints:
//   1 <= s.length, t.length <= 10^5
//   s and t consist of uppercase and lowercase English letters.

const minWindow = (s, t) => {

};

console.log(minWindow('ADOBECODEBANC', 'ABC')); // expected: "BANC"
console.log(minWindow('a', 'a'));               // expected: "a"
console.log(minWindow('a', 'aa'));              // expected: ""
