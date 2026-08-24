// LC #199 — Binary Tree Right Side View   [Medium]   Pattern: Trees
//
// Imagine standing to the RIGHT of a binary tree. Return the values of the
// nodes you can see, ordered from top to bottom — that is, the rightmost
// node of each level.
//
// Example 1:
//   Input:  root = [1,2,3,null,5,null,4]
//   Output: [1,3,4]
// Example 2:
//   Input:  root = [1,null,3]
//   Output: [1,3]
// Example 3:
//   Input:  root = [1,2,3,4]
//   Output: [1,3,4]
// Example 4:
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

const rightSideView = (root) => {

};

console.log(rightSideView(buildTree([1, 2, 3, null, 5, null, 4]))); // expected: [1,3,4]
console.log(rightSideView(buildTree([1, null, 3])));                 // expected: [1,3]
console.log(rightSideView(buildTree([1, 2, 3, 4])));                 // expected: [1,3,4]
console.log(rightSideView(buildTree([])));                            // expected: []
