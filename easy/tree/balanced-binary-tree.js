// TODO: implement
// LC #110 — Balanced Binary Tree
//
// Given a binary tree, return true iff it is HEIGHT-BALANCED: for every
// node, the heights of its two subtrees differ by AT MOST 1.
//
// Example:
//        3
//       / \
//      9  20
//          / \
//         15  7      → true
//
//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4              → false (left subtree heights diverge)
//
// Approach (post-order with early-exit sentinel):
//   height(node):
//     if node null → 0
//     L = height(node.left)
//     if L === -1 → return -1
//     R = height(node.right)
//     if R === -1 || |L - R| > 1 → return -1
//     return 1 + max(L, R)
//
//   Answer: height(root) !== -1
//
// Why -1 as a sentinel:
//   We could return both height and a bool, but a single int does the job:
//   -1 means "unbalanced, propagate up." This avoids re-checking subtrees.
//
// Naive approach: for each node, compute heights of both children and check
//   the diff. O(n²) in the worst case. The post-order trick is O(n).
//
// Time:  O(n)
// Space: O(h) recursion stack
//
// Edge Cases:
//   - Empty tree                 → true
//   - Single node                → true
//   - Left-skewed chain          → false once depth diff exceeds 1
//   - Perfectly balanced         → true

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
const isBalanced = (root) => {
  // your code here
};

console.log('=== LC #110 Balanced Binary Tree ===\n');

const balanced = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log('Test 1 — balanced:');
console.log(isBalanced(balanced));
// Expected: true

const skewed = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4))));
console.log('\nTest 2 — left-skewed:');
console.log(isBalanced(skewed));
// Expected: false

console.log('\nTest 3 — empty:');
console.log(isBalanced(null));
// Expected: true

console.log('\nTest 4 — single node:');
console.log(isBalanced(new TreeNode(5)));
// Expected: true
