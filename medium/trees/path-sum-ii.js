// TODO: implement
// LC #113 — Path Sum II
//
// Given the root of a binary tree and an integer targetSum, return ALL
// ROOT-TO-LEAF paths whose node values sum to targetSum. Each path is an
// array of values in order.
//
// Example:
//   tree:
//        5
//       / \
//      4   8
//     /   / \
//    11  13  4
//   / \      / \
//  7   2    5   1
//   targetSum = 22
//   → [[5,4,11,2], [5,8,4,5]]
//
// Approach (DFS with a path stack and backtracking):
//   helper(node, remaining, path, result):
//     if node null → return
//     path.push(node.val)
//     remaining -= node.val
//     if node is leaf && remaining === 0 → result.push(path.slice())
//     else:
//       helper(node.left,  remaining, path, result)
//       helper(node.right, remaining, path, result)
//     path.pop()     // backtrack
//
//   Call helper(root, targetSum, [], result); return result.
//
// Why we slice on push:
//   `path` is shared across the recursion. We need a snapshot at the
//   leaf, not a reference (which would mutate later).
//
// Why backtrack:
//   Removing the current node before returning keeps path consistent for
//   the parent's other branch.
//
// Time:  O(n²)  worst case (n leaves × O(n) copy)
// Space: O(n)   recursion + result paths
//
// Edge Cases:
//   - Empty tree            → []
//   - No matching path      → []
//   - Negative values       → still works; path doesn't need monotone sum
//   - Single matching leaf  → [[that leaf's value path]]

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
 * @returns {number[][]}
 */
const pathSum = (root, targetSum) => {
  // your code here
};

console.log('=== LC #113 Path Sum II ===\n');

const tree = new TreeNode(5,
  new TreeNode(4,
    new TreeNode(11, new TreeNode(7), new TreeNode(2)),
    null,
  ),
  new TreeNode(8,
    new TreeNode(13),
    new TreeNode(4, new TreeNode(5), new TreeNode(1)),
  ),
);
console.log('Test 1:');
console.log(pathSum(tree, 22));
// Expected: [[5,4,11,2],[5,8,4,5]]

console.log('\nTest 2 — empty:');
console.log(pathSum(null, 0));
// Expected: []

console.log('\nTest 3 — single leaf:');
console.log(pathSum(new TreeNode(7), 7));
// Expected: [[7]]
