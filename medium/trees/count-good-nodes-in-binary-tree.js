// TODO: implement
// LC #1448 — Count Good Nodes in Binary Tree
//
// A node X in a binary tree is "good" if every node on the path from root
// to X has a value ≤ X.val. Return the number of good nodes.
//
// Example:
//        3
//       / \
//      1   4
//     /   / \
//    3   1   5      → 4   (good: 3 (root), 4, 5, second 3)
//
//        3
//       /
//      3
//     /
//    4 → wait, 4 > 3 (root), so root path is 3 → 3 → 4. The max on the path
//        before 4 is 3, and 4 ≥ 3, so 4 IS good.
//   Actually keeps it good: every node along the way is ≤ the current.
//
// Approach (DFS with running max):
//   dfs(node, maxSoFar):
//     if node null → 0
//     count = (node.val >= maxSoFar) ? 1 : 0
//     newMax = max(maxSoFar, node.val)
//     return count + dfs(node.left, newMax) + dfs(node.right, newMax)
//
//   Call dfs(root, -∞).
//
// Why DFS with a running max:
//   "Good" is defined relative to the maximum value seen along the path
//   from root. Carrying that max down to each node is O(1) extra work per
//   node and gives a single-pass answer.
//
// Time:  O(n)
// Space: O(h) recursion stack
//
// Edge Cases:
//   - Single node             → 1
//   - Strictly decreasing path → only the root is good
//   - All equal values         → every node is good (count = n)
//   - Negative values          → use -Infinity as initial max

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
const goodNodes = (root) => {
  // your code here
};

console.log('=== LC #1448 Count Good Nodes in Binary Tree ===\n');

const t1 = new TreeNode(3,
  new TreeNode(1, new TreeNode(3), null),
  new TreeNode(4, new TreeNode(1), new TreeNode(5)),
);
console.log('Test 1:');
console.log(goodNodes(t1));
// Expected: 4

const decreasing = new TreeNode(5, new TreeNode(4, new TreeNode(3, new TreeNode(2))));
console.log('\nTest 2 — decreasing chain:');
console.log(goodNodes(decreasing));
// Expected: 1

const allEqual = new TreeNode(3, new TreeNode(3), new TreeNode(3));
console.log('\nTest 3 — all equal:');
console.log(goodNodes(allEqual));
// Expected: 3
