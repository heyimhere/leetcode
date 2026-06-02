// TODO: implement
// LC #208 — Implement Trie (Prefix Tree)
//
// Implement:
//   insert(word)            — store a word
//   search(word)  → bool    — does the EXACT word exist?
//   startsWith(p) → bool    — does ANY stored word have prefix p?
//
// Example:
//   t.insert("apple")
//   t.search("apple")   → true
//   t.search("app")     → false
//   t.startsWith("app") → true
//   t.insert("app")
//   t.search("app")     → true
//
// Approach (children map + end flag):
//   Node = { children: Map<char, Node>, isEnd: bool }
//
//   insert: walk down (creating new nodes), set isEnd on the last node.
//   search: walk down; return false if any link missing; return isEnd of
//           the final node.
//   startsWith: same walk; just return true if reached the end of p.
//
// Why a trie:
//   Compared to a HashSet of words:
//     - startsWith / autocomplete is O(p) instead of O(n × p) scan.
//     - Common prefixes share storage → memory savings.
//
// Children representation trade-offs:
//   - Map<char, Node>: works for any alphabet (Unicode), slight overhead.
//   - Fixed array of length 26 (for lowercase a-z): cache-friendlier and
//     faster, less memory only for dense tries.
//
// Time:  O(L) per op
// Space: O(total characters across all inserted words)
//
// Edge Cases:
//   - search before any insert            → false
//   - startsWith with the exact stored word → true
//   - Empty string                         → typically isEnd of root

class Trie {
  constructor() {
    // your code here
  }

  /**
   * @param {string} word
   * @returns {void}
   */
  insert(word) {
    // your code here
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    // your code here
  }

  /**
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(prefix) {
    // your code here
  }
}

console.log('=== LC #208 Implement Trie ===\n');

const t = new Trie();
t.insert('apple');
console.log(t.search('apple'));     // Expected: true
console.log(t.search('app'));       // Expected: false
console.log(t.startsWith('app'));   // Expected: true
t.insert('app');
console.log(t.search('app'));       // Expected: true
