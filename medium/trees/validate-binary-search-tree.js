// TODO: implement
// LC #98 — Validate Binary Search Tree
//
// Given the root of a binary tree, return true iff it is a valid BST:
//   - Every node's value is GREATER than ALL values in its left subtree.
//   - Every node's value is LESS than ALL values in its right subtree.
//   - Both subtrees must themselves be valid BSTs.
//
// Example:
//        2
//       / \
//      1   3            → true
//
//        5
//       / \
//      1   4
//          / \
//         3   6         → false (4 is in 5's right subtree but 3 < 5)
//
// Approach 1 (DFS with bounds):
//   helper(node, low, high):
//     if node null → true
//     if node.val <= low || node.val >= high → false
//     return helper(node.left, low, node.val)
//         && helper(node.right, node.val, high)
//   Call helper(root, -∞, +∞).
//
// Approach 2 (in-order traversal must be strictly increasing):
//   prev = -∞
//   inorder(node):
//     if node null → true
//     if !inorder(node.left) → false
//     if node.val <= prev → false
//     prev = node.val
//     return inorder(node.right)
//
// Why "checking left.val < node && right.val > node" alone is WRONG:
//   It only verifies adjacent nodes. A right-subtree leaf could still
//   violate the ROOT's invariant (e.g. root=5, root.right=6, root.right.left=3 — 3 < 5 but in root's right subtree).
//
// Time:  O(n)
// Space: O(h)
//
// Edge Cases:
//   - Empty tree                   → true
//   - Single node                  → true
//   - Equal values (e.g. 1, 1)     → false (strict BST)
//   - INT_MIN / INT_MAX values    → use ±Infinity bounds, or null sentinels

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
const isValidBST = (root) => {
  // your code here
};

console.log('=== LC #98 Validate Binary Search Tree ===\n');

const ok = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log('Test 1 — valid:');
console.log(isValidBST(ok));
// Expected: true

const bad = new TreeNode(5,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(3), new TreeNode(6)),
);
console.log('\nTest 2 — invalid (3 in 5\'s right subtree):');
console.log(isValidBST(bad));
// Expected: false

console.log('\nTest 3 — single node:');
console.log(isValidBST(new TreeNode(7)));
// Expected: true

console.log('\nTest 4 — empty:');
console.log(isValidBST(null));
// Expected: true
