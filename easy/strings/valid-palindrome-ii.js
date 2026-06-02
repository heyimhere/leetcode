// TODO: implement
// LC #680 — Valid Palindrome II
//
// Given a string s, return true if s can be made a palindrome by deleting
// AT MOST ONE character.
//
// Example:
//   "aba"  → true   (already palindrome)
//   "abca" → true   (delete 'c' → "aba")
//   "abc"  → false
//
// Approach (two pointers with one allowed skip):
//   Walk left/right toward the middle. As soon as s[left] !== s[right],
//   try ONE of two options:
//     - skip the left char  → check isPalin(s, left+1, right)
//     - skip the right char → check isPalin(s, left, right-1)
//   If either works, return true. Otherwise false.
//
//   `isPalin(s, l, r)` is a tight two-pointer check with no skips allowed.
//
// Why try both skips:
//   At a mismatch we don't know which side has the offending char. Both
//   options are O(n) and we only ever take this branch once, so total work
//   is still linear.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Already palindrome                 → true (no deletion needed)
//   - Single char or empty               → true
//   - Two mismatches needed              → false ("abc")
//   - Mismatch resolves only on one side ("cbbcc" — left vs right skip differ)

/**
 * @param {string} s
 * @returns {boolean}
 */
const validPalindrome = (s) => {
  // your code here
};

console.log('=== LC #680 Valid Palindrome II ===\n');

console.log('Test 1 — already palindrome:');
console.log(validPalindrome('aba'));
// Expected: true

console.log('\nTest 2 — one deletion fixes:');
console.log(validPalindrome('abca'));
// Expected: true

console.log('\nTest 3 — irreparable:');
console.log(validPalindrome('abc'));
// Expected: false

console.log('\nTest 4 — empty:');
console.log(validPalindrome(''));
// Expected: true
