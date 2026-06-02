// TODO: implement
// LC #543 — Diameter of Binary Tree
//
// Given the root of a binary tree, return the LENGTH (in edges) of the
// longest path between any two nodes. This path may or may not pass through
// the root.
//
// Example:
//        1
//       / \
//      2   3
//     / \
//    4   5
//   → 3  (path 4 → 2 → 5 → 1 → 3 has 3 edges; or 4 → 2 → 5 also has 3 — wait,
//         that's 2 edges. The longest is 4–2–1–3 or 5–2–1–3 = 3 edges.)
//
// Approach (post-order with side-effect on a max):
//   height(node):
//     if node null → 0
//     L = height(node.left)
//     R = height(node.right)
//     diameter = max(diameter, L + R)   // path THROUGH this node uses both sides
//     return 1 + max(L, R)              // contribution to the path going UP
//
//   Run height(root); return diameter.
//
// Key insight:
//   For any node n, the longest path through n has length = left-height +
//   right-height (counted in edges). The global diameter is the max of
//   this over all nodes. We compute this during a single post-order walk.
//
// Watch the convention: this problem counts EDGES, not nodes. (height
// returns node-count, but the diameter formula L + R is edge-count
// because each child's height includes that node and the edges below.)
//
// Time:  O(n)
// Space: O(h)
//
// Edge Cases:
//   - Empty tree         → 0
//   - Single node        → 0 (no edges)
//   - Skewed tree of n   → n - 1
//   - Diameter NOT through root (e.g., long path inside a deep subtree)

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {number}
 */
const diameterOfBinaryTree = (root) => {
  // your code here
};

console.log('=== LC #543 Diameter of Binary Tree ===\n');

const t1 = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3),
);
console.log('Test 1:');
console.log(diameterOfBinaryTree(t1));
// Expected: 3

console.log('\nTest 2 — two nodes:');
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2))));
// Expected: 1

console.log('\nTest 3 — single node:');
console.log(diameterOfBinaryTree(new TreeNode(1)));
// Expected: 0

console.log('\nTest 4 — empty:');
console.log(diameterOfBinaryTree(null));
// Expected: 0
