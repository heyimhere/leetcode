class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

const maxDepth = (root) => {
  if (root === null) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
};

console.log('max: ', maxDepth(tree1));

