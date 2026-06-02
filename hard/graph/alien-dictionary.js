// TODO: implement
// LC #269 — Alien Dictionary
//
// You're given a list of `words` from an alien language, sorted
// lexicographically by that language's unknown alphabet ordering. Return
// any valid character order, or "" if no consistent order exists.
//
// Example:
//   words = ["wrt","wrf","er","ett","rftt"]
//   → "wertf"
//
//   words = ["z","x"]
//   → "zx"
//
//   words = ["z","x","z"]
//   → ""   (contradicts itself)
//
// Approach (build a directed graph of letter precedence, then topo-sort):
//   1. For each adjacent pair (a, b):
//        Find the FIRST differing letter; add edge a[i] → b[i].
//        Edge case: if b is a STRICT prefix of a (e.g. ["abc","ab"]),
//        return "" — impossible.
//   2. Run Kahn's algorithm on the graph.
//   3. If output has all letters → return it; else "" (cycle).
//
// Why "first differing letter" suffices:
//   The lex comparison stops at the first different letter. That single
//   letter pair is the only constraint imposed by this adjacency.
//
// Why the prefix check matters:
//   ["abc","ab"] would normally be a valid sort, but since "ab" is a prefix
//   of "abc" yet listed AFTER, the dictionary contradicts itself.
//
// Time:  O(C)  C = total characters across all words
// Space: O(1)  alphabet bounded (26 in the test cases)
//
// Edge Cases:
//   - Single word                  → just its distinct chars in any order
//   - All same letter              → that letter
//   - Cycle (a→b→a)                → ""
//   - Conflicting prefix scenario  → ""

/**
 * @param {string[]} words
 * @returns {string}
 */
const alienOrder = (words) => {
  // your code here
};

console.log('=== LC #269 Alien Dictionary ===\n');

console.log('Test 1:');
console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
// Expected: 'wertf' (or another valid topo)

console.log('\nTest 2:');
console.log(alienOrder(['z', 'x']));
// Expected: 'zx'

console.log('\nTest 3 — contradiction:');
console.log(alienOrder(['z', 'x', 'z']));
// Expected: ''

console.log('\nTest 4 — single word:');
console.log(alienOrder(['abc']));
// Expected: 'abc' (any order is fine)
