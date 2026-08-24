// LC #105 — Construct Binary Tree from Preorder and Inorder Traversal   [Medium]   Pattern: Trees
//
// Given two integer arrays preorder and inorder, where preorder is the
// preorder traversal of a binary tree and inorder is the inorder traversal
// of the SAME tree, reconstruct the tree and return its root.
//
// Example 1:
//   Input:  preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
//   Output: [3,9,20,null,null,15,7]
// Example 2:
//   Input:  preorder = [-1], inorder = [-1]
//   Output: [-1]
// Example 3:
//   Input:  preorder = [1,2], inorder = [2,1]
//   Output: [1,2]
//
// Constraints:
//   1 <= preorder.length <= 3000
//   inorder.length === preorder.length
//   -3000 <= preorder[i], inorder[i] <= 3000
//   preorder and inorder consist of UNIQUE values, and inorder is a
//   permutation of preorder. The input is guaranteed to describe a real tree.

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

// Named buildTreeFrom so it does not collide with the buildTree test helper.
const buildTreeFrom = (preorder, inorder) => {

};

console.log(treeToArray(buildTreeFrom([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
// expected: [3,9,20,null,null,15,7]
console.log(treeToArray(buildTreeFrom([-1], [-1])));      // expected: [-1]
console.log(treeToArray(buildTreeFrom([1, 2], [2, 1])));  // expected: [1,2]
