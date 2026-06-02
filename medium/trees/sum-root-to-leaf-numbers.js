// TODO: implement
// LC #129 — Sum Root to Leaf Numbers
//
// Each ROOT-TO-LEAF path represents a number (digits concatenated in order).
// Return the SUM of all such numbers. All node values are digits 0-9.
//
// Example:
//        1
//       / \
//      2   3        → 12 + 13 = 25
//
//        4
//       / \
//      9   0
//     / \
//    5   1          → 495 + 491 + 40 = 1026
//
// Approach (DFS, passing the running number down):
//   dfs(node, currentNumber):
//     if node null → 0
//     currentNumber = currentNumber * 10 + node.val
//     if node is leaf → return currentNumber
//     return dfs(node.left, currentNumber) + dfs(node.right, currentNumber)
//
//   Answer: dfs(root, 0).
//
// Why pass the running value down:
//   It avoids re-building paths or doing extra work. Each subtree gets
//   exactly the "thousands prefix" that applies to its leaves.
//
// Alternative (iterative DFS with stack of (node, num) pairs):
//   Same idea, no recursion.
//
// Time:  O(n)
// Space: O(h)
//
// Edge Cases:
//   - Empty tree                  → 0
//   - Single node                 → that digit
//   - Path with leading non-zero only at root (e.g. root = 0 with kids) →
//     still works; concat math handles 0 correctly.

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
const sumNumbers = (root) => {
  // your code here
};

console.log('=== LC #129 Sum Root to Leaf Numbers ===\n');

const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log('Test 1:');
console.log(sumNumbers(t1));
// Expected: 25

const t2 = new TreeNode(4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0),
);
console.log('\nTest 2:');
console.log(sumNumbers(t2));
// Expected: 1026

console.log('\nTest 3 — empty:');
console.log(sumNumbers(null));
// Expected: 0

console.log('\nTest 4 — single node:');
console.log(sumNumbers(new TreeNode(7)));
// Expected: 7
