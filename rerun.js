// TODO: implement
// LC #125 — Valid Palindrome
//
// Given a string `s`, return true if it is a palindrome after:
//   1. Removing all non-alphanumeric characters
//   2. Lowercasing the rest
// Otherwise return false.
//
// A palindrome reads the same forward and backward.
//
// Example:
//   "A man, a plan, a canal: Panama"  → true   (becomes "amanaplanacanalpanama")
//   "race a car"                       → false  (becomes "raceacar")
//   " "                                → true   (empty string is trivially a palindrome)
//   "0P"                               → false  ('0' vs 'p')
//
// Approach (two pointers — converging):
//   left = 0, right = s.length - 1
//   while left < right:
//     skip non-alphanumeric on left  (left++)
//     skip non-alphanumeric on right (right--)
//     if lowercased s[left] !== lowercased s[right] → return false
//     left++; right--
//   return true
//
// Why two pointers:
//   A palindrome's defining property is symmetry around the center.
//   Pointers walking inward from both ends compare mirrored characters
//   directly, so we never need extra space for a cleaned copy.
//
// Alternative (cleaner but more memory):
//   Build a filtered+lowercased string, then compare against its reverse.
//   O(n) time, O(n) space. The two-pointer version is O(1) space.
//
// Helper:
//   const isAlphaNum = (c) =>
//     (c >= 'a' && c <= 'z') ||
//     (c >= 'A' && c <= 'Z') ||
//     (c >= '0' && c <= '9');
//
//   Using regex (`/[a-z0-9]/i.test(c)`) works too but is slower in tight loops.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Empty string                  → true
//   - All non-alphanumeric (",,,") → true (becomes empty)
//   - Single character              → true
//   - Mixed case ("Aa")             → true
//   - Digits + letters ("0P")       → comparison is case-insensitive but
//                                     '0' and 'p' are still different chars

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome = (s) => {
  // your code here
  const isAlphaNum = (c) => {
    return /[a-z0-9]/i.test(c);
  }
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};

// ============ Test Cases ============

console.log('=== LC #125 Valid Palindrome ===\n');

console.log('Test 1:');
console.log(isPalindrome('A man, a plan, a canal: Panama'));
// Expected: true

console.log('\nTest 2:');
console.log(isPalindrome('race a car'));
// Expected: false

console.log('\nTest 3 — empty after stripping:');
console.log(isPalindrome(' '));
// Expected: true

console.log('\nTest 4 — digit vs letter:');
console.log(isPalindrome('0P'));
// Expected: false

console.log('\nTest 5 — single char:');
console.log(isPalindrome('a'));
// Expected: true

console.log('\nTest 6 — mixed alphanumerics:');
console.log(isPalindrome('1a2'));
// Expected: false
