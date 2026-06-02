// TODO: implement
// LC #211 — Design Add and Search Words Data Structure
//
// Design a data structure that supports:
//   addWord(word)              — store a word
//   search(word) → boolean     — does ANY stored word match? Here "." in
//                                the search is a single-character wildcard.
//
// Example:
//   addWord("bad"); addWord("dad"); addWord("mad");
//   search("pad") → false
//   search("bad") → true
//   search(".ad") → true
//   search("b..") → true
//
// Approach (Trie + DFS for wildcards):
//   Standard trie node = { children: Map<char, node>, isEnd: bool }
//
//   addWord:
//     Walk/create nodes for each char; mark isEnd at the last.
//
//   search(word):
//     dfs(node, i):
//       if i === word.length → node.isEnd
//       c = word[i]
//       if c === '.':
//         for each child of node: if dfs(child, i + 1) → true
//         return false
//       else:
//         return node.children.has(c) && dfs(node.children.get(c), i + 1)
//
// Why a trie:
//   Stored words share prefixes; trie collapses them. Search by exact
//   prefix is O(L). Wildcard search branches into all children for each
//   '.', cleanly via DFS.
//
// Time:
//   addWord: O(L)
//   search: O(L × 26^k) worst case, k = # of wildcards (in practice much faster)
// Space: O(total characters across all added words)
//
// Edge Cases:
//   - All wildcards (".....")     → matches any stored word of that length
//   - Search before any add       → false
//   - Empty word                  → depends on spec; usually count as inserted-empty
//   - Repeated addWord            → no-op (already inserted)

class WordDictionary {
  constructor() {
    // your code here
  }

  /**
   * @param {string} word
   * @returns {void}
   */
  addWord(word) {
    // your code here
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    // your code here
  }
}

console.log('=== LC #211 Add and Search Word ===\n');

const wd = new WordDictionary();
wd.addWord('bad'); wd.addWord('dad'); wd.addWord('mad');
console.log(wd.search('pad'));  // Expected: false
console.log(wd.search('bad'));  // Expected: true
console.log(wd.search('.ad'));  // Expected: true
console.log(wd.search('b..'));  // Expected: true
