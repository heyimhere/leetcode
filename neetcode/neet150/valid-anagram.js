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
//
// Complexity of the chosen solution:
//   Time:  O(n)  — two linear passes (one over s, one over t), each doing
//                  O(1) Map ops per character. Length check is O(1).
//   Space: O(k)  — the Map holds at most k distinct characters, where k is
//                  the alphabet size. For lowercase English, k ≤ 26 → O(1)
//                  in practice; we say O(k) to stay honest about the general
//                  case (e.g. Unicode inputs).

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const counts = new Map();

  for (let c of s) {
    counts.set(c, (counts.get(c) ?? 0) + 1);
  }

  for (let c of t) {
    if (!counts.has(c) || counts.get(c) === 0) return false;
    counts.set(c, counts.get(c) - 1);
  }

  return true;
};

console.log('"anagram","nagaram" ->', isAnagram('anagram', 'nagaram')); // true
console.log('"rat","car"         ->', isAnagram('rat', 'car'));         // false
console.log('"a","ab"            ->', isAnagram('a', 'ab'));            // false
console.log('"",""               ->', isAnagram('', ''));               // true
console.log('"aacc","ccac"       ->', isAnagram('aacc', 'ccac'));       // false
console.log('"listen","silent"   ->', isAnagram('listen', 'silent'));   // true

// ---------------------------------------------------------------------------
// Reference: fixed-size array (faster in practice for lowercase a-z)
//
// Replaces the Map with a 26-slot int array — one slot per letter. Array
// indexing is faster than Map hashing, and the array size is always O(1).
// Tradeoff: only works for lowercase English letters (a-z). For Unicode or
// arbitrary char sets, the Map version handles it correctly.
// charCodeAt(0) - 97  maps 'a'→0, 'b'→1, … 'z'→25.
// ---------------------------------------------------------------------------
const isAnagramB = (s, t) => {
  if (s.length !== t.length) return false;
  const counts = new Array(26).fill(0);
  for (let c of s) counts[c.charCodeAt(0) - 97]++;
  for (let c of t) {
    if (--counts[c.charCodeAt(0) - 97] < 0) return false;
  }
  return true;
};
