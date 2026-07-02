// LC #242 — Valid Anagram
//
// Given two strings s and t, return true if t is an anagram of s, and false
// otherwise. An anagram is a rearrangement of the letters — same characters,
// same counts, possibly different order.
//
// Examples:
//   s = "anagram", t = "nagaram" -> true
//   s = "rat",     t = "car"     -> false
//   s = "a",       t = "ab"      -> false
//
// Intuition:
//   Two strings are anagrams iff they have identical character-count
//   histograms. So: count the letters of s, then walk t and decrement.
//   If we ever try to decrement a letter that isn't there (or is already
//   at zero), t has a letter s doesn't — not an anagram.
//
//   Length shortcut: if lengths differ, they can't be anagrams. Bail early.
//
// Approach (single Map, two passes):
//   - if s.length !== t.length return false
//   - counts = new Map()
//   - for each c in s: counts.set(c, (counts.get(c) ?? 0) + 1)
//   - for each c in t:
//       if !counts.has(c) or counts.get(c) === 0 return false
//       counts.set(c, counts.get(c) - 1)
//   - return true
//   Time: O(n)   Space: O(k) where k = size of the alphabet
//
// Alternate approaches:
//   1) Sort both strings and compare.
//      Time: O(n log n)   Space: O(n) (JS sort on arrays).
//      One-liner-ish, but slower.
//   2) Fixed-size int array of length 26 (lowercase-only inputs).
//      Same O(n)/O(1) — the array replaces the Map and is a bit faster
//      because array indexing beats Map hashing.

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const count = new Map();

  for (let c of s) {
    count.set(c, (count.get(c) ?? 0) + 1);
  }

  for (let c of t) {
    if (!count.has(c) || count.get(c) === 0) return false;
    count.set(c, count.get(c) - 1);
  }

  return true;
}

console.log('"anagram","nagaram" ->', isAnagram('anagram', 'nagaram')); // true
console.log('"rat","car"         ->', isAnagram('rat', 'car'));         // false
console.log('"a","ab"            ->', isAnagram('a', 'ab'));            // false
console.log('"",""               ->', isAnagram('', ''));               // true
console.log('"aacc","ccac"       ->', isAnagram('aacc', 'ccac'));       // false
console.log('"listen","silent"   ->', isAnagram('listen', 'silent'));   // true
