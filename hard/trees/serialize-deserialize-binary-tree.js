// TODO: implement
// LC #297 — Serialize and Deserialize Binary Tree
//
// Implement two functions:
//   serialize(root) → string
//   deserialize(s)  → TreeNode
// such that deserialize(serialize(root)) === root structurally.
//
// Example:
//        1
//       / \
//      2   3
//          / \
//         4   5
//   serialize → "1,2,#,#,3,4,#,#,5,#,#"   (preorder with null sentinels)
//   deserialize("1,2,#,#,3,4,#,#,5,#,#") → original tree
//
// Approach (preorder with NULL sentinels):
//   serialize(node):
//     if node null → "#,"
//     return node.val + "," + serialize(node.left) + serialize(node.right)
//
//   deserialize(s):
//     tokens = s.split(",")
//     idx = 0    // closure-shared cursor
//     helper():
//       t = tokens[idx++]
//       if t === "#" → return null
//       node = new TreeNode(+t)
//       node.left  = helper()
//       node.right = helper()
//       return node
//     return helper()
//
// Why preorder with "#" works:
//   The preorder traversal of the tree (with null markers) uniquely
//   determines the tree structure. The first token is always the root;
//   the next sequence recursively encodes the left subtree, then the
//   right. # sentinels mark "no child here."
//
// BFS/level-order alternative (the "LeetCode" string format):
//   Encode by level, using # for null. Decoder uses a queue. Same idea,
//   slightly different structure.
//
// Time:  O(n) both ways
// Space: O(n) for the string + recursion stack
//
// Edge Cases:
//   - Empty tree (null root)      → "#" or empty string
//   - Single node                 → "val,#,#"
//   - Skewed tree                 → still O(n) but stack depth = n
//   - Negative values             → fine; serialize as string

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {string}
 */
const serialize = (root) => {
  // your code here
};

/**
 * @param {string} data
 * @returns {TreeNode | null}
 */
const deserialize = (data) => {
  // your code here
};

console.log('=== LC #297 Serialize / Deserialize Binary Tree ===\n');

const tree = new TreeNode(1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5)),
);

const s = serialize(tree);
console.log('Serialized:', s);
const t = deserialize(s);
console.log('Round-trip root val:', t?.val);
console.log('Round-trip right.left val:', t?.right?.left?.val);

console.log('\nNull round-trip:');
console.log(deserialize(serialize(null)));
// Expected: null
