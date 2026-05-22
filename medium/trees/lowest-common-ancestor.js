// LC #236 — Lowest Common Ancestor of a Binary Tree
//
// Given the root of a binary tree and two nodes `p` and `q`, return their
// lowest common ancestor (LCA). The LCA is the lowest node in the tree
// that has BOTH p and q as descendants (a node can be a descendant of itself).
//
// Example tree:
//             3
//           /   \
//          5     1
//         / \   / \
//        6   2 0   8
//           / \
//          7   4
//
//   LCA(5, 1) → 3
//   LCA(5, 4) → 5   (a node can be its own descendant)
//   LCA(6, 4) → 5
//   LCA(7, 8) → 3
//
// Approach (recursive DFS, the elegant version):
//   lca(node, p, q):
//     - If node is null, return null.
//     - If node is p or node is q, return node.
//       (We found one of the targets — bubble it up; the parent above
//        will decide if it's the LCA based on what comes back from the
//        other side.)
//     - Recurse left and right.
//     - If BOTH sides return non-null  → current node is the LCA.
//     - If only ONE side returns non-null → bubble that result up
//       (it's either p, q, or an LCA already found deeper).
//     - If both null → return null.
//
// Why this works:
//   The recursion answers "did you find p or q (or an LCA) in your subtree?"
//   The first node from which BOTH p and q are reachable in different subtrees
//   is by definition the lowest common ancestor.
//
// Alternative: build parent pointers + walk upward.
//   - DFS once to build a child→parent map.
//   - Walk p upward, collecting ancestors in a Set.
//   - Walk q upward — first ancestor in the Set is the LCA.
//   - Same big-O, more memory, less elegant.
//
// Time:  O(n)  — each node visited at most once
// Space: O(h)  — recursion depth = tree height (worst case n for a skewed tree)
//
// Edge Cases:
//   - p or q is the root          → root is the LCA
//   - p is an ancestor of q (or vice versa) → the ancestor IS the LCA
//   - Tree contains exactly one node → that's the LCA (if it matches)
//
// Note: problem guarantees both p and q exist in the tree, so we don't
// need to handle "not found" cases.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  // your code here
};

// ============ Build the example tree ============
//             3
//           /   \
//          5     1
//         / \   / \
//        6   2 0   8
//           / \
//          7   4

const n7 = new TreeNode(7);
const n4 = new TreeNode(4);
const n2 = new TreeNode(2, n7, n4);
const n6 = new TreeNode(6);
const n5 = new TreeNode(5, n6, n2);
const n0 = new TreeNode(0);
const n8 = new TreeNode(8);
const n1 = new TreeNode(1, n0, n8);
const root = new TreeNode(3, n5, n1);

console.log('=== LC #236 LCA of Binary Tree ===\n');

console.log('Test 1 — LCA(5, 1):',
  lowestCommonAncestor(root, n5, n1)?.val); // Expected: 3

console.log('Test 2 — LCA(5, 4) (5 is ancestor of 4):',
  lowestCommonAncestor(root, n5, n4)?.val); // Expected: 5

console.log('Test 3 — LCA(6, 4):',
  lowestCommonAncestor(root, n6, n4)?.val); // Expected: 5

console.log('Test 4 — LCA(7, 8) (deep, opposite subtrees):',
  lowestCommonAncestor(root, n7, n8)?.val); // Expected: 3

console.log('Test 5 — LCA(6, 2):',
  lowestCommonAncestor(root, n6, n2)?.val); // Expected: 5

console.log('Test 6 — LCA(0, 8) (siblings under 1):',
  lowestCommonAncestor(root, n0, n8)?.val); // Expected: 1
