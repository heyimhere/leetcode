// LC #226 — Invert Binary Tree   [Easy]   Pattern: Trees
//
// Given the root of a binary tree, invert it — swap the left and right child
// of every node — and return the root.
//
// Example 1:
//   Input:  root = [4,2,7,1,3,6,9]
//   Output: [4,7,2,9,6,3,1]
// Example 2:
//   Input:  root = [2,1,3]
//   Output: [2,3,1]
// Example 3:
//   Input:  root = []
//   Output: []
//
// Constraints:
//   The number of nodes is in the range [0, 100].
//   -100 <= Node.val <= 100

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

const invertTree = (root) => {

};

console.log(treeToArray(invertTree(buildTree([4, 2, 7, 1, 3, 6, 9])))); // expected: [4,7,2,9,6,3,1]
console.log(treeToArray(invertTree(buildTree([2, 1, 3]))));             // expected: [2,3,1]
console.log(treeToArray(invertTree(buildTree([]))));                     // expected: []
