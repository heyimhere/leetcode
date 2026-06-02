// TODO: implement
// coding interview sample (Karat-style)

/**
 * Find Ancestors (DAG) — Part 2 — Common Ancestors of Two Nodes
 *
 * Continues `find-ancestors-dag.js`. Part 1 finds (for each node) the set
 * of all ancestors in a DAG. Part 2 asks the LIVE follow-up: given the
 * same DAG and two specific nodes a and b, return their COMMON ancestors
 * — and (extension) the LOWEST common ancestor(s).
 *
 *   Note: in a general DAG, "lowest" can have MULTIPLE answers (a node
 *   is an LCA if it's an ancestor of both AND has no descendant who is
 *   also an ancestor of both).
 *
 * Input:
 *   edges: Array<[parent, child]>   (directed; DAG)
 *   a, b:  string                    (nodes)
 * Output:
 *   commonAncestors(a, b)  → string[]
 *   lowestCommonAncestors(a, b) → string[]
 *
 * Example:
 *   edges = [
 *     ["A","C"], ["B","C"], ["C","D"], ["B","D"], ["D","E"]
 *   ]
 *   commonAncestors("D", "E") → ["A","B","C","D"]   (D is its own ancestor)
 *     Actually: ancestors of D = {A,B,C}; ancestors of E = {A,B,C,D};
 *     intersection = {A,B,C}.
 *
 *   lowestCommonAncestors("D", "E") → ["C"]  or  ["C","B"]
 *     depending on which lowest defs the question wants.
 *
 * Approach:
 *   1. Build reverse graph (child → parents).
 *   2. ancestors(x) via BFS/DFS on the reverse graph; return set.
 *   3. common = ancestors(a) ∩ ancestors(b).
 *   4. For LCA: remove from `common` any node that has a descendant also
 *      in `common` (i.e. is dominated). Equivalent to: keep only the
 *      "leaves" of the induced subgraph of `common` under the descendant
 *      relation.
 *
 * Time:  O(V + E)
 * Space: O(V)
 *
 * Edge Cases:
 *   - No common ancestor          → []
 *   - a === b                     → ancestors of a
 *   - DAG vs tree                 → both supported
 *   - Cycles                      → not a DAG; spec disallows
 */

/**
 * @param {[string, string][]} edges
 * @param {string} a
 * @param {string} b
 * @returns {string[]}
 */
const commonAncestors = (edges, a, b) => {
  // your code here
};

/**
 * @param {[string, string][]} edges
 * @param {string} a
 * @param {string} b
 * @returns {string[]}
 */
const lowestCommonAncestors = (edges, a, b) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Find Ancestors (DAG) — Part 2 ===\n');

const edges = [
  ['A', 'C'],
  ['B', 'C'],
  ['C', 'D'],
  ['B', 'D'],
  ['D', 'E'],
];

console.log('Test 1 — common(D, E):');
console.log(commonAncestors(edges, 'D', 'E'));
// Expected: ['A','B','C'] (any order)

console.log('\nTest 2 — LCA(D, E):');
console.log(lowestCommonAncestors(edges, 'D', 'E'));
// Expected: ['C'] (or your spec's tie-break)

console.log('\nTest 3 — no common:');
console.log(commonAncestors([['A', 'B']], 'A', 'B'));
// Expected: []
