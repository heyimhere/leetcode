// TODO: implement
// LC #124 — Binary Tree Maximum Path Sum
//
// A "path" is any sequence of nodes from one to another along
// parent-child edges (no repeats). Return the max SUM of node values on
// any path. The path does NOT need to pass through the root.
//
// Example:
//        1
//       / \
//      2   3        → 6  (path: 2 → 1 → 3)
//
//        -10
//        /  \
//       9   20
//           / \
//          15  7    → 42 (path: 15 → 20 → 7)
//
// Approach (post-order with side-effect on a max):
//   gain(node):
//     if node null → 0
//     left  = max(0, gain(node.left))   // ignore negative-gain subtrees
//     right = max(0, gain(node.right))
//     // path THROUGH node uses both arms:
//     best = max(best, left + node.val + right)
//     // path PASSING UP node uses one arm:
//     return node.val + max(left, right)
//
//   Run gain(root); return best (initialize to -Infinity).
//
// Why "max with 0":
//   If a child's contribution is negative, it's better to skip that subtree
//   entirely. Clamping at 0 means "we choose to not extend into that side."
//
// Why the "through node" vs "up" distinction:
//   When we return UP, only one arm can continue (the path must be linear
//   along ancestors). The "best" comparison at each node lets us consider
//   the path that turns at THIS node and uses both arms.
//
// Time:  O(n)
// Space: O(h)
//
// Edge Cases:
//   - Single node                 → node.val (possibly negative)
//   - All negative values         → the maximum (least-negative) node
//   - Wide tree with two strong arms → "through-root" path wins
//   - Long skewed chain           → linear path wins

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
const maxPathSum = (root) => {
  // your code here
};

console.log('=== LC #124 Binary Tree Maximum Path Sum ===\n');

const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log('Test 1:');
console.log(maxPathSum(t1));
// Expected: 6

const t2 = new TreeNode(-10,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log('\nTest 2:');
console.log(maxPathSum(t2));
// Expected: 42

console.log('\nTest 3 — single negative:');
console.log(maxPathSum(new TreeNode(-3)));
// Expected: -3
