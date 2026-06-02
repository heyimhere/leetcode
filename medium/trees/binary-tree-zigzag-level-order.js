// TODO: implement
// LC #103 — Binary Tree Zigzag Level Order Traversal
//
// Given the root of a binary tree, return the zigzag level order traversal:
// left→right for the root level, right→left for the next, left→right again
// for the next, and so on.
//
// Example:
//        3
//       / \
//      9  20
//          / \
//         15  7
//   → [[3], [20,9], [15,7]]
//
// Approach (BFS with a per-level direction flag):
//   queue = [root]; result = []; leftToRight = true
//   while queue not empty:
//     size = queue.length
//     level = new Array(size)
//     for i in 0..size-1:
//       node = queue.shift()
//       idx = leftToRight ? i : (size - 1 - i)
//       level[idx] = node.val
//       if node.left  → queue.push(node.left)
//       if node.right → queue.push(node.right)
//     result.push(level)
//     leftToRight = !leftToRight
//   return result
//
// Why fill into a pre-sized array (not reverse afterward):
//   Reversing each level is also O(N) but allocates more. Index-from-end
//   while pushing avoids the extra array creation.
//
// Alternative: a deque (push to front on alternating levels). Either works.
//
// Time:  O(n)
// Space: O(w)  (widest level)
//
// Edge Cases:
//   - Empty tree         → []
//   - Single node        → [[val]]
//   - Skewed tree        → each level has 1 node; direction flip is invisible

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {number[][]}
 */
const zigzagLevelOrder = (root) => {
  // your code here
};

console.log('=== LC #103 Binary Tree Zigzag Level Order ===\n');

const t1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log('Test 1:');
console.log(zigzagLevelOrder(t1));
// Expected: [[3],[20,9],[15,7]]

console.log('\nTest 2 — single node:');
console.log(zigzagLevelOrder(new TreeNode(1)));
// Expected: [[1]]

console.log('\nTest 3 — empty:');
console.log(zigzagLevelOrder(null));
// Expected: []
