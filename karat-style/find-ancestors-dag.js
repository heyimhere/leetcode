// TODO: implement
// coding interview sample (Karat-style)

/**
 * Find All Ancestors of a Node in a DAG
 *
 * Problem Summary:
 * You're given a directed acyclic graph (DAG) with `n` nodes (0..n-1) and
 * a list of directed edges where edges[i] = [from, to].
 *
 * Build two utilities:
 *   1. getAncestors(n, edges)
 *      → return a list where result[i] is the SORTED list of all ancestors
 *        of node i. (An ancestor of i is any node that can reach i via a
 *        directed path.)
 *      (LeetCode #2192)
 *
 *   2. hasCommonAncestor(n, edges, a, b)
 *      → return true if nodes a and b share at least one ancestor.
 *        (Useful for "are these two users derived from the same source?"
 *        in Karat-style data-lineage / family-tree questions.)
 *
 * Example:
 *   n = 5
 *   edges = [[0,1],[0,2],[1,3],[2,3],[3,4]]
 *
 *   Visual:
 *           0
 *          / \
 *         v   v
 *         1   2
 *          \ /
 *           v
 *           3
 *           |
 *           v
 *           4
 *
 *   ancestors of 0 → []
 *   ancestors of 1 → [0]
 *   ancestors of 2 → [0]
 *   ancestors of 3 → [0,1,2]
 *   ancestors of 4 → [0,1,2,3]
 *
 *   hasCommonAncestor(1, 2) → true (both descend from 0)
 *   hasCommonAncestor(0, 4) → false (0 has no ancestors)
 *
 * Approach 1 (reverse-graph DFS, per-node):
 *   Build a REVERSE adjacency list: for each edge u→v, record v→u.
 *   Then for each node i, DFS through reverse edges; everything you visit
 *   (except i itself) is an ancestor.
 *
 *   Time:  O(n * (V + E))   — DFS per node
 *
 * Approach 2 (forward-graph DFS, propagate from sources):
 *   For each "source" s (any node), DFS through FORWARD edges. Every node
 *   you reach has s as an ancestor — add s to that node's ancestor set.
 *
 *   Time:  O(n * (V + E))   — same big-O, but iteration order matters less
 *
 * Approach 3 (topological sort + propagation):
 *   - Topologically order the DAG.
 *   - For each node in order, its ancestor set =
 *       union of (parent ∪ parent's-ancestors) for each parent.
 *   - Set-union per edge.
 *
 *   Cleanest for "answer for every node" type questions.
 *
 * Why a Set per node:
 *   - Multiple paths may lead to the same ancestor (the diamond above —
 *     0 reaches 3 via both 1 and 2). Set dedupes automatically.
 *
 * Time / Space:
 *   - O(n * (V + E)) time, O(n²) space worst case for the answer itself.
 *
 * Edge Cases:
 *   - Node with no incoming edges → empty ancestor list
 *   - Disconnected components     → just compute each independently
 *   - Self-loop                   → problem says DAG, so don't worry
 *                                   (but if you did, exclude self)
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number[][]}
 */
const getAncestors = (n, edges) => {
  // your code here
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
const hasCommonAncestor = (n, edges, a, b) => {
  // your code here
};

// ============ Test Cases ============

const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]];

console.log('=== Find Ancestors in DAG ===\n');

console.log('Test 1 — getAncestors:');
console.log(getAncestors(5, edges));
// Expected:
// [ [], [0], [0], [0,1,2], [0,1,2,3] ]

console.log('\nTest 2 — hasCommonAncestor(1, 2):');
console.log(hasCommonAncestor(5, edges, 1, 2));
// Expected: true

console.log('\nTest 3 — hasCommonAncestor(0, 4):');
console.log(hasCommonAncestor(5, edges, 0, 4));
// Expected: false   (0 has no ancestors)

console.log('\nTest 4 — Linear chain 0→1→2→3:');
console.log(getAncestors(4, [[0, 1], [1, 2], [2, 3]]));
// Expected: [ [], [0], [0,1], [0,1,2] ]

console.log('\nTest 5 — Disconnected pair of edges:');
console.log(getAncestors(4, [[0, 1], [2, 3]]));
// Expected: [ [], [0], [], [2] ]

console.log('\nTest 6 — No edges:');
console.log(getAncestors(3, []));
// Expected: [ [], [], [] ]
