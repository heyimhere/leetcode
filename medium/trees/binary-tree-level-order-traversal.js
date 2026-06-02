// TODO: implement
// LC #102 — Binary Tree Level Order Traversal
//
// Given the root of a binary tree, return the level order traversal of its
// node values. That is, an array of arrays where each inner array holds the
// values at one depth, top to bottom, left to right.
//
// Example tree:
//             3
//           /   \
//          9     20
//               /  \
//              15   7
//
//   → [ [3], [9, 20], [15, 7] ]
//
// Empty tree → []
//
// Approach (classic BFS with a queue + "level size" trick):
//   BFS naturally visits nodes level by level, but we need to GROUP nodes
//   by level in the output. The trick:
//
//   - Initialize a queue with [root].
//   - While the queue isn't empty:
//       - levelSize = queue.length     ← snapshot BEFORE the inner loop
//       - level = []
//       - For i in 0..levelSize:
//           - node = queue.shift()
//           - level.push(node.val)
//           - if node.left:  queue.push(node.left)
//           - if node.right: queue.push(node.right)
//       - result.push(level)
//
//   Snapshotting `levelSize` is the whole game. After we enqueue children,
//   the queue grows, but we only iterate over the original count — so each
//   inner loop drains exactly one level.
//
// Why a queue (not a stack):
//   FIFO = first-in-first-out = "left siblings before right siblings before
//   any grandchildren," which is exactly what level order means.
//
// Alternative — recursive DFS with depth tracking:
//   dfs(node, depth):
//     if !node: return
//     if !result[depth]: result.push([])
//     result[depth].push(node.val)
//     dfs(node.left,  depth + 1)
//     dfs(node.right, depth + 1)
//
//   Works fine, O(n) time, O(h) recursion space. BFS is the canonical answer
//   though — and natural to extend to "zigzag" or "right side view" variants.
//
// Time:  O(n)        — each node visited once
// Space: O(n)        — queue/output; worst case the last level holds ~n/2 nodes
//
// Edge Cases:
//   - Empty root            → []
//   - Single node           → [[val]]
//   - Skewed tree (chain)   → each level has one node
//   - Perfect tree          → levels double in size each step

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode|null} root
 * @returns {number[][]}
 */
const levelOrder = (root) => {
  // your code here
};

// ============ Build the example tree ============
//             3
//           /   \
//          9     20
//               /  \
//              15   7
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

console.log('=== LC #102 Level Order Traversal ===\n');

console.log('Test 1 — Classic:');
console.log(levelOrder(root));
// Expected: [ [3], [9, 20], [15, 7] ]

console.log('\nTest 2 — Empty tree:');
console.log(levelOrder(null));
// Expected: []

console.log('\nTest 3 — Single node:');
console.log(levelOrder(new TreeNode(1)));
// Expected: [ [1] ]

console.log('\nTest 4 — Left-skewed chain 1→2→3:');
const skewed = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.log(levelOrder(skewed));
// Expected: [ [1], [2], [3] ]

console.log('\nTest 5 — Perfect tree of depth 3:');
//        1
//       / \
//      2   3
//     /\   /\
//    4 5  6 7
const perfect = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.log(levelOrder(perfect));
// Expected: [ [1], [2,3], [4,5,6,7] ]
