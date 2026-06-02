// TODO: implement
// LC #214 — Shortest Palindrome
//
// You can transform any string s into a palindrome by adding characters
// at the FRONT. Return the SHORTEST palindrome you can build this way.
//
// Example:
//   "aacecaaa"   → "aaacecaaa"
//   "abcd"       → "dcbabcd"
//   "a"          → "a"
//   ""           → ""
//
// Approach (KMP failure function on s + "#" + reverse(s)):
//   Reformulation: find the LONGEST PALINDROMIC PREFIX of s, call its
//   length L. The answer is reverse(s[L..]) + s.
//
//   To find L:
//     1. Build t = s + "#" + reverse(s).  The "#" prevents the prefix and
//        suffix from straddling the middle (a separator that doesn't occur
//        in s would also work).
//     2. Compute the KMP failure (LPS) array of t.
//     3. L = lps[t.length - 1] is the length of the longest s-prefix that
//        equals an s-reversed-suffix — i.e., the longest palindromic prefix.
//
// Why this works:
//   reverse(s)'s suffix === s's prefix iff that prefix is a palindrome.
//   KMP's failure function gives the longest such common prefix-suffix
//   length in linear time.
//
// Alternative (brute force):
//   For lengths n, n-1, ..., 1, check if s[0..L-1] is a palindrome; first
//   match wins. O(n²) worst case.
//
// Time:  O(n)  with KMP
// Space: O(n)
//
// Edge Cases:
//   - Empty                  → ""
//   - Already a palindrome   → s itself
//   - No 2-char palindromic prefix → must prepend nearly all of reverse(s)

/**
 * @param {string} s
 * @returns {string}
 */
const shortestPalindrome = (s) => {
  // your code here
};

console.log('=== LC #214 Shortest Palindrome ===\n');

console.log('Test 1:');
console.log(shortestPalindrome('aacecaaa'));
// Expected: 'aaacecaaa'

console.log('\nTest 2:');
console.log(shortestPalindrome('abcd'));
// Expected: 'dcbabcd'

console.log('\nTest 3:');
console.log(shortestPalindrome('a'));
// Expected: 'a'

console.log('\nTest 4 — palindrome already:');
console.log(shortestPalindrome('aba'));
// Expected: 'aba'
