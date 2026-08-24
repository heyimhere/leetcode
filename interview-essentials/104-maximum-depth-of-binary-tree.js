// LC #104 — Maximum Depth of Binary Tree   [Easy]   Pattern: Trees
//
// Given the root of a binary tree, return its maximum depth — the number of
// nodes along the longest path from the root down to the farthest leaf.
//
// Example 1:
//   Input:  root = [3,9,20,null,null,15,7]
//   Output: 3
// Example 2:
//   Input:  root = [1,null,2]
//   Output: 2
// Example 3:
//   Input:  root = []
//   Output: 0
//
// Constraints:
//   The number of nodes is in the range [0, 10^4].
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

const maxDepth = (root) => {

};

console.log(maxDepth(buildTree([3, 9, 20, null, null, 15, 7]))); // expected: 3
console.log(maxDepth(buildTree([1, null, 2])));                   // expected: 2
console.log(maxDepth(buildTree([])));                              // expected: 0
