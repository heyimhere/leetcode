// LC #3 — Longest Substring Without Repeating Characters   [Medium]   Pattern: Sliding Window
//
// Given a string s, return the length of the longest SUBSTRING that contains
// no repeated characters.
//
// A substring is a contiguous run of characters — "pwke" is a subsequence of
// "pwwkew", not a substring.
//
// Example 1:
//   Input:  s = "abcabcbb"
//   Output: 3        ("abc")
// Example 2:
//   Input:  s = "bbbbb"
//   Output: 1        ("b")
// Example 3:
//   Input:  s = "pwwkew"
//   Output: 3        ("wke")
// Example 4:
//   Input:  s = ""
//   Output: 0
//
// Constraints:
//   0 <= s.length <= 5 * 10^4
//   s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s) => {

};

console.log(lengthOfLongestSubstring('abcabcbb')); // expected: 3
console.log(lengthOfLongestSubstring('bbbbb'));    // expected: 1
console.log(lengthOfLongestSubstring('pwwkew'));   // expected: 3
console.log(lengthOfLongestSubstring(''));         // expected: 0
