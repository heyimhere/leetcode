// LC #127 — Word Ladder   [Hard]   Pattern: Graphs
//
// A transformation sequence from beginWord to endWord is a list of words
// where every adjacent pair differs by exactly ONE letter, and every word
// after beginWord appears in wordList.
//
// Given beginWord, endWord and wordList, return the number of WORDS in the
// shortest such sequence (counting both endpoints), or 0 if none exists.
//
// Note that beginWord itself does not need to be in wordList.
//
// Example 1:
//   Input:  beginWord = "hit", endWord = "cog",
//           wordList = ["hot","dot","dog","lot","log","cog"]
//   Output: 5        (hit -> hot -> dot -> dog -> cog)
// Example 2:
//   Input:  beginWord = "hit", endWord = "cog",
//           wordList = ["hot","dot","dog","lot","log"]
//   Output: 0        (endWord is not in wordList)
// Example 3:
//   Input:  beginWord = "a", endWord = "c", wordList = ["a","b","c"]
//   Output: 2
//
// Constraints:
//   1 <= beginWord.length <= 10
//   endWord.length === beginWord.length
//   1 <= wordList.length <= 5000
//   All words consist of lowercase English letters and are unique.

const ladderLength = (beginWord, endWord, wordList) => {

};

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // expected: 5
console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));        // expected: 0
console.log(ladderLength('a', 'c', ['a', 'b', 'c']));                                 // expected: 2
