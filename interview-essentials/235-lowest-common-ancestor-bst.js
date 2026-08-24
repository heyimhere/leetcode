// LC #235 — Lowest Common Ancestor of a BST   [Medium]   Pattern: Trees
//
// Given a binary SEARCH tree and two nodes p and q that both exist in it,
// return their lowest common ancestor.
//
// The LCA is the deepest node that has both p and q as descendants. A node
// is allowed to be a descendant of itself.
//
// Example 1:
//   Input:  root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
//   Output: 6
// Example 2:
//   Input:  root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
//   Output: 2        (a node can be its own descendant)
// Example 3:
//   Input:  root = [2,1], p = 2, q = 1
//   Output: 2
//
// Constraints:
//   The number of nodes is in the range [2, 10^5].
//   -10^9 <= Node.val <= 10^9
//   All Node.val are unique. p !== q, and both exist in the BST.

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

// Locates the node holding val, so tests can pass real node references.
const findNode = (root, val) => {
  if (!root) return null;
  if (root.val === val) return root;
  return findNode(root.left, val) || findNode(root.right, val);
};

const lowestCommonAncestor = (root, p, q) => {

};

const bst = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor(bst, findNode(bst, 2), findNode(bst, 8))?.val); // expected: 6
console.log(lowestCommonAncestor(bst, findNode(bst, 2), findNode(bst, 4))?.val); // expected: 2

const small = buildTree([2, 1]);
console.log(lowestCommonAncestor(small, findNode(small, 2), findNode(small, 1))?.val); // expected: 2
