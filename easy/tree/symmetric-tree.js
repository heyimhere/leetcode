// TODO: implement
// LC #101 — Symmetric Tree
//
// Given the root of a binary tree, return true iff the tree is a MIRROR
// of itself (symmetric around its center).
//
// Example:
//        1
//       / \
//      2   2
//     / \ / \
//    3  4 4  3        → true
//
//        1
//       / \
//      2   2
//       \   \
//        3   3        → false
//
// Approach (recursive mirror check):
//   isMirror(a, b):
//     if both null         → true
//     if exactly one null  → false
//     return a.val === b.val
//         && isMirror(a.left, b.right)
//         && isMirror(a.right, b.left)
//
//   Answer: root === null || isMirror(root.left, root.right)
//
// Why two pointers (not just inorder == reversed inorder):
//   Inorder traversal can give the same sequence for non-mirror trees
//   (false positives with nulls). The structural recursion above is exact.
//
// Alternative (iterative with a queue):
//   Push root.left and root.right. Repeatedly pop two; compare; enqueue
//   their kids in mirror order: (a.left, b.right) and (a.right, b.left).
//   Same logic, no stack frames.
//
// Time:  O(n)
// Space: O(h) recursion stack; O(n) iterative queue in the worst case
//
// Edge Cases:
//   - Empty tree         → true (vacuously symmetric)
//   - Single node        → true
//   - One child only     → false (asymmetric structure)
//   - Same values but asymmetric structure → false

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
const isSymmetric = (root) => {
  // your code here
};

console.log('=== LC #101 Symmetric Tree ===\n');

const sym = new TreeNode(1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
);
console.log('Test 1 — symmetric:');
console.log(isSymmetric(sym));
// Expected: true

const asym = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3)),
);
console.log('\nTest 2 — asymmetric:');
console.log(isSymmetric(asym));
// Expected: false

console.log('\nTest 3 — empty:');
console.log(isSymmetric(null));
// Expected: true

console.log('\nTest 4 — single node:');
console.log(isSymmetric(new TreeNode(7)));
// Expected: true
