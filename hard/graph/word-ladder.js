// TODO: implement
// LC #127 — Word Ladder
//
// Given two words beginWord, endWord and a wordList, return the LENGTH of
// the shortest transformation sequence from beginWord → endWord such that:
//   - Adjacent words differ by EXACTLY one letter.
//   - Every intermediate word must be in wordList.
// (The sequence length COUNTS both endpoints.)  Return 0 if impossible.
//
// Example:
//   beginWord = "hit", endWord = "cog"
//   wordList = ["hot","dot","dog","lot","log","cog"]
//   → 5    ("hit" → "hot" → "dot" → "dog" → "cog")
//
//   beginWord = "hit", endWord = "cog"
//   wordList = ["hot","dot","dog","lot","log"]
//   → 0    ("cog" not in list)
//
// Approach (BFS with wildcard pattern map):
//   1. Preprocess: for each word, generate "wildcard patterns" by
//      replacing each position with "*", e.g. "hot" → ["*ot","h*t","ho*"].
//      Build patternsToWords: Map<pattern, list of words>.
//
//   2. BFS from beginWord with depth 1.
//      For each word popped: generate its patterns. For each pattern, look
//      up its words. Each is a neighbor (one-letter substitution).
//
//   3. Visited set prevents revisits. Return depth when endWord found.
//
// Why patterns:
//   Comparing every word to every other word is O(N² L). The pattern map
//   reduces neighbor lookup to O(L) per node.
//
// Bidirectional BFS (further speedup):
//   Start from both ends and meet in the middle. Cuts the search radius
//   in half — exponential speedup in worst case.
//
// Time:  O(N × L²)
// Space: O(N × L)
//
// Edge Cases:
//   - endWord not in wordList            → 0
//   - beginWord === endWord              → spec usually says 1 or 0; check
//   - beginWord can't reach any word     → 0
//   - Duplicate words in wordList        → treat as one node

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @returns {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  // your code here
};

console.log('=== LC #127 Word Ladder ===\n');

console.log('Test 1:');
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
// Expected: 5

console.log('\nTest 2 — no path:');
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
// Expected: 0

console.log('\nTest 3 — direct neighbor:');
console.log(ladderLength('a', 'c', ['a', 'b', 'c']));
// Expected: 2
