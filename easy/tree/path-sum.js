// TODO: implement
// LC #112 — Path Sum
//
// Given the root of a binary tree and a targetSum, return true iff the tree
// has a ROOT-to-LEAF path whose node values sum to targetSum. A leaf is a
// node with no children.
//
// Example:
//   tree =
//        5
//       / \
//      4   8
//     /   / \
//    11  13  4
//   / \       \
//  7   2       1
//   targetSum = 22  → true   (5 → 4 → 11 → 2)
//   targetSum = 5   → false  (5 alone isn't a leaf path here)
//
// Approach (DFS with running sum):
//   hasPath(node, remaining):
//     if node is null → false
//     remaining -= node.val
//     if node is a leaf  → return remaining === 0
//     return hasPath(node.left, remaining) || hasPath(node.right, remaining)
//
// Why subtract:
//   Equivalent to "still need X more." When we hit a leaf, we check if X
//   landed exactly at 0. Either subtract-and-compare or accumulate-and-
//   compare works; subtract is one less parameter.
//
// Why the leaf check matters:
//   A non-leaf with the right cumulative sum is NOT a valid answer — the
//   problem asks specifically for root-to-leaf paths.
//
// Alternative: iterative BFS/DFS with a stack of (node, runningSum) pairs.
//
// Time:  O(n)
// Space: O(h) recursion stack
//
// Edge Cases:
//   - Empty tree                       → false
//   - Single leaf with val === target  → true
//   - Negative values along the path   → still works
//   - target is 0 on an empty tree     → false (no leaf exists)

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @param {number} targetSum
 * @returns {boolean}
 */
const hasPathSum = (root, targetSum) => {
  // your code here
};

console.log('=== LC #112 Path Sum ===\n');

const tree = new TreeNode(5,
  new TreeNode(4,
    new TreeNode(11, new TreeNode(7), new TreeNode(2)),
    null,
  ),
  new TreeNode(8,
    new TreeNode(13),
    new TreeNode(4, null, new TreeNode(1)),
  ),
);

console.log('Test 1 — target 22:');
console.log(hasPathSum(tree, 22));
// Expected: true (5 + 4 + 11 + 2)

console.log('\nTest 2 — target 5:');
console.log(hasPathSum(tree, 5));
// Expected: false (no root-to-leaf path sums to 5)

console.log('\nTest 3 — empty:');
console.log(hasPathSum(null, 0));
// Expected: false

console.log('\nTest 4 — single leaf:');
console.log(hasPathSum(new TreeNode(7), 7));
// Expected: true
