// TODO: implement
// LC #94 — Binary Tree Inorder Traversal
//
// Given the root of a binary tree, return the inorder traversal of its
// node values. Inorder = Left, Root, Right.
//
// Example:
//        1
//         \
//          2
//         /
//        3
//   → [1, 3, 2]
//
//        1
//       / \
//      2   3
//   → [2, 1, 3]
//
// Approach 1 (recursive):
//   inorder(root, out):
//     if root is null → return
//     inorder(root.left, out)
//     out.push(root.val)
//     inorder(root.right, out)
//
// Approach 2 (iterative with stack — the classic interview follow-up):
//   stack = []; curr = root; out = []
//   while curr || stack.length:
//     while curr: stack.push(curr); curr = curr.left
//     curr = stack.pop(); out.push(curr.val); curr = curr.right
//   return out
//
// Approach 3 (Morris traversal — O(1) space, threaded tree):
//   Mutates the tree's right pointers temporarily to thread predecessors
//   back to ancestors. Restores afterward. Advanced; mention if asked.
//
// Time:  O(n)
// Space: O(h) recursive or iterative (h = tree height; n in the worst case
//             for skewed trees). O(1) with Morris.
//
// Edge Cases:
//   - Empty tree → []
//   - Single node → [val]
//   - Left-skewed tree → values in increasing-index order
//   - Right-skewed → same

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
const inorderTraversal = (root) => {
  // your code here
};

console.log('=== LC #94 Binary Tree Inorder Traversal ===\n');

// Tree:    1
//           \
//            2
//           /
//          3
const t1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log('Test 1:');
console.log(inorderTraversal(t1));
// Expected: [1,3,2]

console.log('\nTest 2 — empty:');
console.log(inorderTraversal(null));
// Expected: []

console.log('\nTest 3 — single node:');
console.log(inorderTraversal(new TreeNode(5)));
// Expected: [5]

// Tree:    1
//         / \
//        2   3
const t2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log('\nTest 4 — balanced:');
console.log(inorderTraversal(t2));
// Expected: [2,1,3]
