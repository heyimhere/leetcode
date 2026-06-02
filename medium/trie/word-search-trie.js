// TODO: implement
// LC #212 — Word Search II  (medium-leaning practice — original is hard)
//
// Given an m × n board and an array of `words`, return all words present
// on the board via SEQUENTIALLY 4-adjacent cells with no cell reused.
//
// Example:
//   board = [['o','a','a','n'],
//            ['e','t','a','e'],
//            ['i','h','k','r'],
//            ['i','f','l','v']]
//   words = ["oath","pea","eat","rain"]
//   → ["oath","eat"]
//
// Approach (Trie + DFS — the canonical solution):
//   1. Build a trie from `words`. Each terminal node stores the FULL word.
//   2. For each cell (i, j) whose char is a root child, DFS:
//        dfs(i, j, node):
//          c = board[i][j]
//          if c === '#' OR node.children doesn't have c → return
//          child = node.children.get(c)
//          if child.word: result.push(child.word); child.word = null   // de-dup
//          board[i][j] = '#'                                            // visit
//          for each (di, dj) in directions: dfs(i+di, j+dj, child)
//          board[i][j] = c                                              // restore
//   3. Return result.
//
// Why trie + DFS beats "DFS per word":
//   With T trie traversal, ALL words share their common prefixes — so the
//   search tree is dramatically pruned. Naive per-word DFS is
//   O(W × m × n × 4^L); trie version is O(m × n × 4^L) for the trie depth
//   regardless of how many words exist.
//
// Tip: also prune empty children (set to null when fully consumed) so
//   subsequent searches skip dead subtrees.
//
// Time:  O(m × n × 4^L)   L = max word length
// Space: O(total chars across words) for the trie
//
// Edge Cases:
//   - Empty board or words           → []
//   - Words longer than mn           → can't fit; skipped
//   - Duplicate words in input       → return distinct found words

/**
 * @param {string[][]} board
 * @param {string[]} words
 * @returns {string[]}
 */
const findWords = (board, words) => {
  // your code here
};

console.log('=== LC #212 Word Search II (trie + DFS) ===\n');

console.log('Test 1:');
console.log(findWords([
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
], ['oath', 'pea', 'eat', 'rain']));
// Expected: ['oath','eat']  (any order)

console.log('\nTest 2 — no matches:');
console.log(findWords([['a']], ['b']));
// Expected: []

console.log('\nTest 3 — empty board:');
console.log(findWords([], ['hi']));
// Expected: []
