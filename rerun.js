// LeetCode #242 — Valid Anagram
//
// Given two strings s and t, return true if t is an anagram of s, and false
// otherwise.
//
// An anagram is a word or phrase formed by rearranging the letters of a
// different word or phrase, typically using all the original letters exactly
// once.

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const need = new Map();
  for (let char of s) {
    need.set(char, (need.get(char) ?? 0) + 1);
  }

  for (let char of t) {
    if (need.has(char)) {
      need.set(char, need.get(char) - 1);
    }
  }

  for (let [char, count] of need) {
    if (count < 0 || count > 0) {
      return false;
    }
  }

  return true;
};

console.log('"anagram", "nagaram" ->', isAnagram('anagram', 'nagaram')); // true
console.log('"rat", "car"         ->', isAnagram('rat', 'car')); // false
console.log('"a", "ab"            ->', isAnagram('a', 'ab')); // false
console.log('"", ""               ->', isAnagram('', '')); // true
console.log('"aacc", "ccac"       ->', isAnagram('aacc', 'ccac')); // false
