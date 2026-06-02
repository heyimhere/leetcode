// TODO: implement
// LC #79 — Word Search
//
// Given an m × n character `board` and a string `word`, return true iff the
// word can be constructed by SEQUENTIALLY adjacent (4-directional) cells.
// The same cell may NOT be used more than once.
//
// Example:
//   board = [['A','B','C','E'],
//            ['S','F','C','S'],
//            ['A','D','E','E']]
//   word = "ABCCED"   → true
//   word = "SEE"      → true
//   word = "ABCB"     → false
//
// Approach (DFS + backtracking, marking visited in place):
//   dfs(i, j, idx):
//     if idx === word.length → true
//     if out of bounds or board[i][j] !== word[idx] → false
//     temp = board[i][j]; board[i][j] = '#'    // mark visited
//     found = dfs(i±1, j, idx+1) || dfs(i, j±1, idx+1) (all 4)
//     board[i][j] = temp                      // restore
//     return found
//
//   For each starting cell whose char matches word[0], run dfs(i, j, 0).
//
// Why mark in place:
//   "Same cell may not be used more than once" — we need a visited set.
//   Overwriting the board with a sentinel and restoring on backtrack is
//   O(1) extra space (vs an mn-sized visited matrix).
//
// Time:  O(m × n × 4^L)   L = len(word)
// Space: O(L)             recursion depth
//
// Edge Cases:
//   - Empty board                  → false
//   - Empty word                   → debatable; many spec versions return true
//   - Word longer than mn          → can't fit; false
//   - Single cell match            → true if word is one char

/**
 * @param {string[][]} board
 * @param {string} word
 * @returns {boolean}
 */
const exist = (board, word) => {
  // your code here
};

console.log('=== LC #79 Word Search ===\n');

const b = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

console.log('Test 1:');
console.log(exist(b, 'ABCCED'));
// Expected: true

console.log('\nTest 2:');
console.log(exist(b, 'SEE'));
// Expected: true

console.log('\nTest 3:');
console.log(exist(b, 'ABCB'));
// Expected: false
