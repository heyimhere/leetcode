// LC #98 — Validate Binary Search Tree   [Medium]   Pattern: Trees
//
// Given the root of a binary tree, return true if it is a valid binary
// search tree.
//
// A valid BST requires that for EVERY node:
//   - every value in its left subtree is strictly less than the node's value
//   - every value in its right subtree is strictly greater
//   - both subtrees are themselves valid BSTs
//
// Note that the constraint applies to the whole subtree, not just the
// immediate children.
//
// Example 1:
//   Input:  root = [2,1,3]
//   Output: true
// Example 2:
//   Input:  root = [5,1,4,null,null,3,6]
//   Output: false    (4 sits in 5's right subtree but is less than 5)
// Example 3:
//   Input:  root = [5,4,6,null,null,3,7]
//   Output: false    (3 is in 5's right subtree)
//
// Constraints:
//   The number of nodes is in the range [1, 10^4].
//   -2^31 <= Node.val <= 2^31 - 1

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

const isValidBST = (root) => {

};

console.log(isValidBST(buildTree([2, 1, 3])));                        // expected: true
console.log(isValidBST(buildTree([5, 1, 4, null, null, 3, 6])));      // expected: false
console.log(isValidBST(buildTree([5, 4, 6, null, null, 3, 7])));      // expected: false
