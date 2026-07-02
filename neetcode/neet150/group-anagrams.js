// LC #49 — Group Anagrams
//
// Given an array of strings, group the anagrams together. Return the groups
// in any order; strings inside each group may also appear in any order.
//
// Examples:
//   ["eat","tea","tan","ate","nat","bat"]
//     -> [["eat","tea","ate"], ["tan","nat"], ["bat"]]
//   [""]         -> [[""]]
//   ["a"]        -> [["a"]]
//
// Intuition:
//   Two strings are anagrams iff they contain the same letters. So if we
//   turn each string into a *canonical form* that all its anagrams share —
//   the same string, letter-for-letter — we can bucket by that canonical
//   form in a Map. The buckets are the groups.
//
//   The simplest canonical form is the string with its letters sorted:
//     "eat" -> "aet"    "tea" -> "aet"    "ate" -> "aet"
//   All anagrams collapse to the same sorted signature; non-anagrams don't.
//
// Approach (sort-signature grouping):
//   - groups = new Map()  // signature -> string[]
//   - for each s in strs:
//       key = sorted characters of s
//       if !groups.has(key): groups.set(key, [])
//       groups.get(key).push(s)
//   - return [...groups.values()]
//
// Alternate approaches:
//   1) Char-count signature: build a length-26 count array, join it as the
//      key. Time: O(n · k)  Space: O(n · k). Asymptotically faster (no log
//      factor) but relies on the alphabet being fixed-size (a-z) and uses
//      charCodeAt tricks — harder to write from memory under pressure.
//   2) Histogram Map serialized to a sorted "a:2,b:1" string. Works for any
//      alphabet. Same O(n · k log k) as sorting because you still have to
//      sort the keys to get a canonical order.
//
// Complexity of the chosen solution:
//   Time:  O(n · k log k)  — n strings, each split into a char array and
//                            sorted in O(k log k). Map has/set/get and
//                            push are amortized O(1).
//   Space: O(n · k)        — every input string is stored once across the
//                            buckets, plus one k-length signature key per
//                            bucket (at most n buckets).
//
// Reference variant (groupAnagramsB): count-signature version below. Kept
// for scale — it's O(n · k) instead of O(n · k log k), which matters when
// strings are long or inputs are huge. Same idea, just a different key.

const groupAnagrams = (strs) => {
  const groups = new Map();

  for (let s of strs) {
    const key = s.split('').sort().join('');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }

  return [...groups.values()];
};

console.log('["eat","tea","tan","ate","nat","bat"] ->', groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]
console.log('[""]  ->', groupAnagrams(['']));         // [[""]]
console.log('["a"] ->', groupAnagrams(['a']));        // [["a"]]
console.log('["abc","bca","xyz","zyx","cab"] ->', groupAnagrams(['abc', 'bca', 'xyz', 'zyx', 'cab']));
// [["abc","bca","cab"], ["xyz","zyx"]]

// ---------------------------------------------------------------------------
// Reference: char-count signature (faster at scale)
//
// Preferred when strings are long or n is huge — this is O(n · k) vs the
// sort-based O(n · k log k). The tradeoff is a fixed-alphabet assumption
// (lowercase a-z here) and the charCodeAt arithmetic for the index.
//
// Same shape as groupAnagrams: build a signature per string, bucket in a
// Map, return the buckets. Only the signature computation changes.
// ---------------------------------------------------------------------------
const groupAnagramsB = (strs) => {
  const groups = new Map();

  for (let s of strs) {
    const counts = new Array(26).fill(0);
    for (let c of s) counts[c.charCodeAt(0) - 97]++;
    const key = counts.join(',');  // ',' separator so [1,12] ≠ [11,2]
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }

  return [...groups.values()];
};
