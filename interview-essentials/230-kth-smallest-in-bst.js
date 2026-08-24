// LC #230 — Kth Smallest Element in a BST   [Medium]   Pattern: Trees
//
// Given the root of a binary search tree and an integer k, return the kth
// SMALLEST value in the tree (1-indexed).
//
// Example 1:
//   Input:  root = [3,1,4,null,2], k = 1
//   Output: 1
// Example 2:
//   Input:  root = [5,3,6,2,4,null,null,1], k = 3
//   Output: 3
// Example 3:
//   Input:  root = [3,1,4,null,2], k = 4
//   Output: 4
//
// Constraints:
//   The number of nodes is n, with 1 <= k <= n <= 10^4.
//   0 <= Node.val <= 10^4
//
// Follow-up: if the BST is modified often and you need the kth smallest
// frequently, how would you change your design?

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}

// Builds a tree from a LeetCode level-order array, using null for gaps.
const buildTree = (arr) => {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (i < arr.length) {
      const v = arr[i++];
      if (v !== null) { node.left = new TreeNode(v); queue.push(node.left); }
    }
    if (i < arr.length) {
      const v = arr[i++];
      if (v !== null) { node.right = new TreeNode(v); queue.push(node.right); }
    }
  }
  return root;
};

// Serializes back to level-order array form, trailing nulls trimmed.
const treeToArray = (root) => {
  if (!root) return [];
  const out = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) { out.push(null); continue; }
    out.push(node.val);
    queue.push(node.left, node.right);
  }
  while (out.length > 0 && out[out.length - 1] === null) out.pop();
  return out;
};

const kthSmallest = (root, k) => {

};

console.log(kthSmallest(buildTree([3, 1, 4, null, 2]), 1));                 // expected: 1
console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 3));     // expected: 3
console.log(kthSmallest(buildTree([3, 1, 4, null, 2]), 4));                 // expected: 4
