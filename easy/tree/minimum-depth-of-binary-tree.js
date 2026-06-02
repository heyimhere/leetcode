// TODO: implement
// LC #111 — Minimum Depth of Binary Tree
//
// Given the root of a binary tree, return its minimum depth: the number of
// nodes along the SHORTEST path from root to the NEAREST LEAF. A leaf is a
// node with no children.
//
// Example:
//       3
//      / \
//     9  20
//         / \
//        15  7    → 2  (root → 9 is the shortest leaf path)
//
//       2
//        \
//         3
//          \
//           4
//            \
//             5    → 5  (no left children — must go all the way down)
//
// Approach 1 (DFS — careful with the "leaf" definition):
//   minDepth(node):
//     if node null → 0
//     if both children null → 1   (this IS a leaf)
//     if left null  → 1 + minDepth(node.right)
//     if right null → 1 + minDepth(node.left)
//     else          → 1 + min(minDepth(node.left), minDepth(node.right))
//
//   The "one child null" case is the gotcha: you CAN'T take "min(0, k)" or
//   you'd report depth 1 at any half-child node, which isn't a leaf.
//
// Approach 2 (BFS — naturally minimum):
//   Level-order traverse. Return depth as soon as a node has no children.
//   Avoids the half-child gotcha because BFS finds the shallowest leaf
//   first by construction.
//
// Time:  O(n)
// Space: O(w) BFS (w = max width), O(h) DFS
//
// Edge Cases:
//   - Empty tree              → 0
//   - Single node             → 1
//   - Left-skewed chain       → length of chain (every node has exactly one child)
//   - Half-children all the way → must descend (Approach 1 gotcha)

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
const minDepth = (root) => {
  // your code here
};

console.log('=== LC #111 Minimum Depth of Binary Tree ===\n');

const t1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log('Test 1:');
console.log(minDepth(t1));
// Expected: 2

const skew = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5))));
console.log('\nTest 2 — right-skewed (no half-child trick):');
console.log(minDepth(skew));
// Expected: 4

console.log('\nTest 3 — empty:');
console.log(minDepth(null));
// Expected: 0

console.log('\nTest 4 — single node:');
console.log(minDepth(new TreeNode(7)));
// Expected: 1
