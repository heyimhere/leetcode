// LC #424 — Longest Repeating Character Replacement   [Medium]   Pattern: Sliding Window
//
// You are given a string s and an integer k. You may choose any character in
// s and change it to any other uppercase English letter — at most k times
// in total.
//
// Return the length of the longest substring containing the SAME letter that
// you can produce after doing those replacements.
//
// Example 1:
//   Input:  s = "ABAB", k = 2
//   Output: 4        (turn both A's into B's, or both B's into A's)
// Example 2:
//   Input:  s = "AABABBA", k = 1
//   Output: 4        ("AABA" -> "AAAA")
// Example 3:
//   Input:  s = "ABCDE", k = 0
//   Output: 1
//
// Constraints:
//   1 <= s.length <= 10^5
//   s consists of only uppercase English letters.
//   0 <= k <= s.length

const characterReplacement = (s, k) => {

};

console.log(characterReplacement('ABAB', 2));    // expected: 4
console.log(characterReplacement('AABABBA', 1)); // expected: 4
console.log(characterReplacement('ABCDE', 0));   // expected: 1
