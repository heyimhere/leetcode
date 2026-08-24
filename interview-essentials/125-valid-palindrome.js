// LC #125 — Valid Palindrome   [Easy]   Pattern: Two Pointers
//
// A phrase is a palindrome if, after lowercasing all letters and removing
// every character that is not a letter or digit, it reads the same forward
// and backward.
//
// Given a string s, return true if it is a palindrome.
//
// Example 1:
//   Input:  s = "A man, a plan, a canal: Panama"
//   Output: true        ("amanaplanacanalpanama")
// Example 2:
//   Input:  s = "race a car"
//   Output: false       ("raceacar")
// Example 3:
//   Input:  s = " "
//   Output: true        (empty string after cleaning)
//
// Constraints:
//   1 <= s.length <= 2 * 10^5
//   s consists of printable ASCII characters.

const isPalindrome = (s) => {

};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // expected: true
console.log(isPalindrome('race a car'));                      // expected: false
console.log(isPalindrome(' '));                               // expected: true
