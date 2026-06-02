// TODO: implement
// LC #199 — Binary Tree Right Side View
//
// Imagine standing on the RIGHT side of a binary tree. Return the values of
// the nodes you'd see, ordered from top to bottom.
//
// Example:
//        1
//       / \
//      2   3
//       \   \
//        5   4       → [1, 3, 4]
//
//        1
//        \
//         3
//         /
//        2          → [1, 3, 2]
//
// Approach (BFS, take the LAST node at each level):
//   queue = [root]; result = []
//   while queue not empty:
//     size = queue.length
//     for i in 0..size-1:
//       node = queue.shift()
//       if i === size - 1 → result.push(node.val)   // rightmost in level
//       if node.left  → queue.push(node.left)
//       if node.right → queue.push(node.right)
//   return result
//
// Why "last in BFS level" works:
//   At each level, the right-side observer sees only the rightmost node
//   that's present at that depth. BFS visits in level order, and the LAST
//   one popped per level is exactly the rightmost.
//
// Alternative (DFS, right-first, record first-seen at each depth):
//   helper(node, depth):
//     if node null → return
//     if depth === result.length → result.push(node.val)   // first hit at this depth
//     helper(node.right, depth + 1)
//     helper(node.left,  depth + 1)
//   Call helper(root, 0).
//
// Time:  O(n)
// Space: O(w)  width of widest level
//
// Edge Cases:
//   - Empty tree         → []
//   - Single node        → [val]
//   - Left-only chain    → all visible (none blocked by a right sibling)
//   - Right-only chain   → all visible

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
const rightSideView = (root) => {
  // your code here
};

console.log('=== LC #199 Binary Tree Right Side View ===\n');

const t1 = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4)),
);
console.log('Test 1:');
console.log(rightSideView(t1));
// Expected: [1,3,4]

const t2 = new TreeNode(1, null, new TreeNode(3, new TreeNode(2)));
console.log('\nTest 2:');
console.log(rightSideView(t2));
// Expected: [1,3,2]

console.log('\nTest 3 — empty:');
console.log(rightSideView(null));
// Expected: []
