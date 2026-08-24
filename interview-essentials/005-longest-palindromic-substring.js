// LC #5 — Longest Palindromic Substring   [Medium]   Pattern: Dynamic Programming
//
// Given a string s, return the longest substring of s that is a palindrome.
//
// A substring is contiguous. If several palindromes tie for longest, any one
// of them is accepted.
//
// Example 1:
//   Input:  s = "babad"
//   Output: "bab"    ("aba" is also valid)
// Example 2:
//   Input:  s = "cbbd"
//   Output: "bb"
// Example 3:
//   Input:  s = "a"
//   Output: "a"
//
// Constraints:
//   1 <= s.length <= 1000
//   s consists of digits and English letters.

const longestPalindrome = (s) => {

};

console.log(longestPalindrome('babad')); // expected: "bab" (or "aba")
console.log(longestPalindrome('cbbd'));  // expected: "bb"
console.log(longestPalindrome('a'));     // expected: "a"
