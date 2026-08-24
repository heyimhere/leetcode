// LC #49 — Group Anagrams   [Medium]   Pattern: Arrays & Hashing
//
// Given an array of strings strs, group together the strings that are
// anagrams of each other. Return the groups in any order, and the strings
// within each group in any order.
//
// Example 1:
//   Input:  strs = ["eat","tea","tan","ate","nat","bat"]
//   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
//   Input:  strs = [""]
//   Output: [[""]]
// Example 3:
//   Input:  strs = ["a"]
//   Output: [["a"]]
//
// Constraints:
//   1 <= strs.length <= 10^4
//   0 <= strs[i].length <= 100
//   strs[i] consists of lowercase English letters.

const groupAnagrams = (strs) => {

};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// expected: [["bat"],["nat","tan"],["ate","eat","tea"]] (any order)
console.log(groupAnagrams([''])); // expected: [[""]]
console.log(groupAnagrams(['a'])); // expected: [["a"]]
