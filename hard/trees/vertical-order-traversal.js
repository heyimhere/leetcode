// TODO: implement
// LC #987 — Vertical Order Traversal of a Binary Tree
//
// Each node has an (x, y) position: root at (0, 0); left child shifts x by
// -1; right child shifts x by +1. y decreases by 1 going down.
//
// Return the values grouped by COLUMN (x), columns ordered left → right.
// Within a column, order by ROW (top to bottom). If two nodes are at the
// SAME (x, y), return them in VALUE-ASCENDING order.
//
// Example:
//        3
//       / \
//      9   20
//          / \
//         15  7
//   → [[9], [3,15], [20], [7]]
//
//        1
//       / \
//      2   3
//     / \ / \
//    4  5 6  7
//   → [[4], [2], [1,5,6], [3], [7]]
//     (5 and 6 are at same (x,y); ordered by val ascending)
//
// Approach (DFS or BFS collecting (x, y, val), then sort):
//   1. Walk the tree recording (x, y, val) for every node.
//   2. Sort by x ASC, then y DESC (y decreases going down — see definition),
//      then val ASC.
//   3. Group by x: output is a list of value lists.
//
//   Choice: in many implementations, y INCREASES with depth (row index)
//   and we sort by (x ASC, y ASC, val ASC). Either is fine — just stay
//   consistent.
//
// Why sort?
//   The tie-breaking rules require it. A naive level-order traversal won't
//   produce the value-ascending order at ties.
//
// Time:  O(n log n) due to sort
// Space: O(n) for tuples
//
// Edge Cases:
//   - Empty tree            → []
//   - Single node           → [[val]]
//   - Skewed tree (all left or right) → one node per column

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {number[][]}
 */
const verticalTraversal = (root) => {
  // your code here
};

console.log('=== LC #987 Vertical Order Traversal of a Binary Tree ===\n');

const t1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log('Test 1:');
console.log(verticalTraversal(t1));
// Expected: [[9],[3,15],[20],[7]]

const t2 = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7)),
);
console.log('\nTest 2:');
console.log(verticalTraversal(t2));
// Expected: [[4],[2],[1,5,6],[3],[7]]

console.log('\nTest 3 — empty:');
console.log(verticalTraversal(null));
// Expected: []
