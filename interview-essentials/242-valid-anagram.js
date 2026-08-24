// LC #242 — Valid Anagram   [Easy]   Pattern: Arrays & Hashing
//
// Given two strings s and t, return true if t is an anagram of s.
// An anagram uses exactly the same characters with the same counts,
// just rearranged.
//
// Example 1:
//   Input:  s = "anagram", t = "nagaram"
//   Output: true
// Example 2:
//   Input:  s = "rat", t = "car"
//   Output: false
// Example 3:
//   Input:  s = "a", t = "ab"
//   Output: false
//
// Constraints:
//   1 <= s.length, t.length <= 5 * 10^4
//   s and t consist of lowercase English letters.
//
// Follow-up: what changes if the inputs contain unicode characters?

const isAnagram = (s, t) => {

};

console.log(isAnagram('anagram', 'nagaram')); // expected: true
console.log(isAnagram('rat', 'car'));         // expected: false
console.log(isAnagram('a', 'ab'));            // expected: false
