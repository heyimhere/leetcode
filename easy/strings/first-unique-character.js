// TODO: implement
// LC #387 — First Unique Character in a String
//
// Given a string s, return the INDEX of the first non-repeating character.
// If no such character exists, return -1.
//
// Example:
//   "leetcode"     → 0   ('l' is unique and appears first)
//   "loveleetcode" → 2   ('v' is the first unique)
//   "aabb"         → -1
//
// Approach (two-pass with HashMap of counts):
//   1. Pass 1: count frequencies in a Map (or 26-length int array).
//   2. Pass 2: walk s left→right, return the index where count is 1.
//
// Why two passes:
//   We need to know GLOBAL counts before we can identify uniqueness, so a
//   single pass would require a different data structure (e.g. a queue of
//   candidate indices plus a count map). Two passes is the clean answer.
//
// Alternative: fixed-size 26-int array (lowercase-only) — same time and
// strictly O(1) space. Use when the alphabet is bounded.
//
// Time:  O(n)
// Space: O(1) for lowercase a-z, O(k) for general alphabet of size k
//
// Edge Cases:
//   - Empty string      → -1
//   - All unique chars  → 0
//   - All duplicates    → -1
//   - Unicode chars     → use Map, not int array

/**
 * @param {string} s
 * @returns {number}
 */
const firstUniqChar = (s) => {
  // your code here
};

console.log('=== LC #387 First Unique Character ===\n');

console.log('Test 1:');
console.log(firstUniqChar('leetcode'));
// Expected: 0

console.log('\nTest 2:');
console.log(firstUniqChar('loveleetcode'));
// Expected: 2

console.log('\nTest 3 — none:');
console.log(firstUniqChar('aabb'));
// Expected: -1

console.log('\nTest 4 — single char:');
console.log(firstUniqChar('z'));
// Expected: 0
