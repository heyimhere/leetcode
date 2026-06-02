// TODO: implement
// LC #139 — Word Break
//
// Given a string s and a dictionary `wordDict`, return true iff s can be
// segmented into a SPACE-SEPARATED sequence of one or more dictionary
// words. The same word may be reused.
//
// Example:
//   s = "leetcode", wordDict = ["leet","code"]            → true
//   s = "applepenapple", wordDict = ["apple","pen"]       → true
//   s = "catsandog", wordDict = ["cats","dog","sand","and","cat"] → false
//
// Approach (DP):
//   dictSet = new Set(wordDict)
//   dp[i] = true iff s[0..i-1] is segmentable.
//   Base: dp[0] = true (empty prefix is segmentable).
//   dp[i] = exists j < i: dp[j] AND s[j..i-1] in dictSet.
//   Answer: dp[n].
//
//   Speed-up: for each i, loop j from (i - maxWordLen) to (i - 1) to skip
//   substrings longer than any word in the dict.
//
// Why DP works:
//   "Can I reach position i?" depends only on "can I reach some j < i AND
//   is the chunk between a word?" — classic optimal substructure.
//
// Memoized recursion alternative:
//   canBreak(s, idx, memo): same recurrence, top-down.
//
// Time:  O(n × maxWordLen) lookups, each O(W) for substring hashing — overall
//        roughly O(n × maxWordLen × W) in the worst case. With the
//        max-word-length optimization, much faster than n³.
// Space: O(n) dp + O(words) set
//
// Edge Cases:
//   - s in dict          → true
//   - Empty s            → true (vacuously)
//   - No matching prefix → false
//   - Repeated words     → dictionary reuse is allowed by spec

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @returns {boolean}
 */
const wordBreak = (s, wordDict) => {
  // your code here
};

console.log('=== LC #139 Word Break ===\n');

console.log('Test 1:');
console.log(wordBreak('leetcode', ['leet', 'code']));
// Expected: true

console.log('\nTest 2:');
console.log(wordBreak('applepenapple', ['apple', 'pen']));
// Expected: true

console.log('\nTest 3:');
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
// Expected: false

console.log('\nTest 4 — empty string:');
console.log(wordBreak('', ['abc']));
// Expected: true
