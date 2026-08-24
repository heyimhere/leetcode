// LC #139 — Word Break   [Medium]   Pattern: Dynamic Programming
//
// Given a string s and a dictionary of strings wordDict, return true if s
// can be segmented into a space-separated sequence of one or more dictionary
// words.
//
// The same dictionary word may be reused any number of times.
//
// Example 1:
//   Input:  s = "leetcode", wordDict = ["leet","code"]
//   Output: true
// Example 2:
//   Input:  s = "applepenapple", wordDict = ["apple","pen"]
//   Output: true     ("apple" is reused)
// Example 3:
//   Input:  s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
//   Output: false
//
// Constraints:
//   1 <= s.length <= 300
//   1 <= wordDict.length <= 1000
//   1 <= wordDict[i].length <= 20
//   s and wordDict[i] consist of lowercase English letters.
//   All strings in wordDict are unique.

const wordBreak = (s, wordDict) => {

};

console.log(wordBreak('leetcode', ['leet', 'code']));                              // expected: true
console.log(wordBreak('applepenapple', ['apple', 'pen']));                         // expected: true
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));        // expected: false
