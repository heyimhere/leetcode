// TODO: implement
// LC #105 — Construct Binary Tree from Preorder and Inorder Traversal
//
// Given two integer arrays `preorder` and `inorder` where preorder is the
// preorder traversal and inorder is the inorder traversal of the SAME tree
// (all unique values), reconstruct and return the tree.
//
// Example:
//   preorder = [3,9,20,15,7]
//   inorder  = [9,3,15,20,7]
//   → tree:
//        3
//       / \
//      9  20
//          / \
//         15  7
//
// Approach (recursive split with HashMap of inorder positions):
//   1. Build idxInOrder: Map<val, index in inorder>. (O(n))
//   2. Recurse over preorder using a global/closure-captured index:
//        build(left, right):
//          if left > right → null
//          rootVal = preorder[preIndex++]
//          mid = idxInOrder.get(rootVal)
//          node = new TreeNode(rootVal)
//          node.left  = build(left, mid - 1)   // MUST recurse left first
//          node.right = build(mid + 1, right)
//          return node
//   3. Call build(0, n - 1).
//
// Why pick root from preorder, slice by inorder:
//   Preorder visits root → left subtree → right subtree, so each call's
//   "next" preorder element is the current subtree's root. Inorder visits
//   left → root → right, so the root's index in inorder cleanly splits
//   the left and right subtree value sets.
//
// Why left BEFORE right (the gotcha):
//   The global preIndex must advance through the LEFT subtree first before
//   processing the right one, mirroring preorder.
//
// Time:  O(n)  (HashMap lookups O(1))
// Space: O(n)  for the map and the tree
//
// Edge Cases:
//   - Empty arrays              → null
//   - Single node               → just preorder[0]
//   - Left-skewed / right-skewed → still works
//   - Inputs of different lengths or non-corresponding traversals — spec
//     guarantees this won't happen

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @returns {TreeNode | null}
 */
const buildTree = (preorder, inorder) => {
  // your code here
};

console.log('=== LC #105 Construct Tree from Preorder + Inorder ===\n');

console.log('Test 1:');
console.log(JSON.stringify(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
// Expected: tree as above (root 3, left 9, right 20 with 15/7 kids)

console.log('\nTest 2 — single node:');
console.log(JSON.stringify(buildTree([1], [1])));
// Expected: {val:1,left:null,right:null}

console.log('\nTest 3 — empty:');
console.log(buildTree([], []));
// Expected: null
