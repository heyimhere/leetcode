class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

const printTree = (root) => {
  if (!root) return '[]';
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

const invertTree = (root) => {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

console.log('Before:', printTree(tree));  // [4, 2, 7, 1, 3, 6, 9]
console.log('After:', printTree(invertTree(tree)));  // [4, 7, 2, 9, 6, 3, 1]
