// TODO: implement
// LC #230 — Kth Smallest Element in a BST
//
// Given the root of a BST and an integer k, return the kth SMALLEST value
// (1-indexed).
//
// Example:
//        3
//       / \
//      1   4
//       \
//        2     k = 1  → 1
//
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1            k = 3 → 3
//
// Approach 1 (iterative in-order with early stop):
//   In-order on a BST visits keys in ascending order. Pop the k-th popped
//   value:
//     stack = []; curr = root; count = 0
//     while curr || stack.length:
//       while curr: stack.push(curr); curr = curr.left
//       curr = stack.pop()
//       if ++count === k → return curr.val
//       curr = curr.right
//
// Approach 2 (recursive in-order with shared counter):
//   Same idea, recursive. Cleaner but uses call stack.
//
// Why iterative is preferred:
//   We can short-circuit as soon as the kth value is popped, avoiding
//   visiting the rest of the tree.
//
// Follow-up (often asked):
//   If the BST is frequently MUTATED and we need many kth-smallest
//   queries, augment each node with subtree size. O(log n) per query.
//
// Time:  O(h + k)  with early stop
// Space: O(h)     stack
//
// Edge Cases:
//   - k = 1                 → leftmost node
//   - k = n (tree size)     → rightmost node
//   - Unbalanced tree       → still works; h may be n in the worst case

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @param {number} k
 * @returns {number}
 */
const kthSmallest = (root, k) => {
  // your code here
};

console.log('=== LC #230 Kth Smallest Element in BST ===\n');

const t1 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log('Test 1 — k=1:');
console.log(kthSmallest(t1, 1));
// Expected: 1

const t2 = new TreeNode(5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6),
);
console.log('\nTest 2 — k=3:');
console.log(kthSmallest(t2, 3));
// Expected: 3

console.log('\nTest 3 — k=size:');
console.log(kthSmallest(t2, 6));
// Expected: 6
