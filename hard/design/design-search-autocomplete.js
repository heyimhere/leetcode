// TODO: implement
// LC #642 — Design Search Autocomplete System
//
// Design a search autocomplete:
//   constructor(sentences, times)  — initial historical sentences with
//                                     their use counts
//   input(c):
//     - if c !== '#': c is the next character typed; return the top 3
//       autocompleted sentences (those that BEGIN with the current input),
//       sorted by frequency DESC, ties broken by ASCII order (lex).
//     - if c === '#': commit the current input as a finished sentence (+1
//       to its frequency); return [].
//
// Example:
//   init(["i love you","island","ironman","i love leetcode"], [5,3,2,2])
//   input('i')  → ["i love you","island","i love leetcode"]
//   input(' ')  → ["i love you","i love leetcode"]
//   input('a')  → []
//   input('#')  → []   (now stored as "i a" with count 1)
//
// Approach (Trie + per-node top-k OR scan-all):
//   Trie node stores a Map<fullSentence, count> for sentences that pass
//   through it. On each `input(c)`:
//     1. Append c to a buffer `curr`.
//     2. Walk the trie following curr; if any letter missing, this prefix
//        has no matches.
//     3. From the node we land on, take the stored map and pick the top 3
//        by (count desc, sentence asc).
//   On '#':
//     - Update the trie: walk curr, incrementing the count at the final
//       node (and at intermediate nodes if you store top-k per node).
//     - Reset curr.
//
// Storage trade-offs:
//   - Per-node "Map<sentence, count>": simple; sort at query time.
//   - Per-node "top-K sorted list": faster query, harder update.
//   - Just a global Map<sentence, count> + prefix scan: simplest, slower.
//
// Time:
//   input (c !== '#'): O(P + S log S) where P = prefix length, S = matches
//   input ('#'): O(P)
// Space: O(total chars across sentences)
//
// Edge Cases:
//   - '#' before any chars typed      → finalize the empty sentence?
//                                         Spec usually disallows; ignore.
//   - Prefix matches none             → return []
//   - More than 3 matches             → return only the top 3
//   - Ties on count                   → break by lex (ASCII) order

class AutocompleteSystem {
  /**
   * @param {string[]} sentences
   * @param {number[]} times
   */
  constructor(sentences, times) {
    // your code here
  }

  /**
   * @param {string} c   - single character
   * @returns {string[]} - top 3 autocomplete suggestions, or [] on '#'
   */
  input(c) {
    // your code here
  }
}

console.log('=== LC #642 Design Search Autocomplete System ===\n');

const ac = new AutocompleteSystem(
  ['i love you', 'island', 'ironman', 'i love leetcode'],
  [5, 3, 2, 2],
);

console.log(ac.input('i'));  // Expected: ['i love you','island','i love leetcode']
console.log(ac.input(' '));  // Expected: ['i love you','i love leetcode']
console.log(ac.input('a'));  // Expected: []
console.log(ac.input('#'));  // Expected: []  (now stores "i a")
console.log(ac.input('i'));  // Expected: ['i love you','i love leetcode','i a'] (top 3)
