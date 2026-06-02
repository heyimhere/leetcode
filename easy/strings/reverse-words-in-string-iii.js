// TODO: implement
// LC #557 — Reverse Words in a String III
//
// Given a string s, reverse the order of CHARACTERS in each word while
// preserving whitespace and the initial word order.
//
// Example:
//   "Let's take LeetCode contest" → "s'teL ekat edoCteeL tsetnoc"
//   "Mr Ding"                     → "rM gniD"
//
// Approach 1 (split, reverse each, join):
//   s.split(' ').map(w => w.split('').reverse().join('')).join(' ')
//   Concise but allocates intermediate arrays.
//
// Approach 2 (in-place two-pointer per word):
//   Walk s. When you hit a word boundary, two-pointer-reverse the chars
//   between the last boundary+1 and the current boundary-1. This is the
//   "interview" way — no extra allocation per word.
//
// Why this matters:
//   The problem is really about practicing word-boundary detection and
//   in-place reversal, which generalize to LC #151 (reverse-words-i, harder)
//   and Karat-style log-parsing.
//
// Time:  O(n)
// Space: O(n) for the output string (strings are immutable in JS, so an
//             in-place answer in the JVM/Cpp sense requires a char array)
//
// Edge Cases:
//   - Empty string                       → ""
//   - Single word                        → word reversed
//   - Multiple spaces between words      → problem guarantees single spaces
//   - Leading/trailing space             → guaranteed not to appear

/**
 * @param {string} s
 * @returns {string}
 */
const reverseWords = (s) => {
  // your code here
};

console.log('=== LC #557 Reverse Words in a String III ===\n');

console.log('Test 1:');
console.log(reverseWords("Let's take LeetCode contest"));
// Expected: "s'teL ekat edoCteeL tsetnoc"

console.log('\nTest 2:');
console.log(reverseWords('Mr Ding'));
// Expected: 'rM gniD'

console.log('\nTest 3 — single word:');
console.log(reverseWords('hello'));
// Expected: 'olleh'

console.log('\nTest 4 — empty:');
console.log(reverseWords(''));
// Expected: ''
