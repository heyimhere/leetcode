// TODO: implement
// LC #637 — Average of Levels in Binary Tree
//
// Given the root of a binary tree, return an array of averages of the
// node values at each LEVEL. Use floating-point.
//
// Example:
//        3
//       / \
//      9  20
//          / \
//         15  7
//   → [3.00000, 14.50000, 11.00000]
//
// Approach (level-order BFS):
//   1. queue = [root]
//   2. While queue not empty:
//        Take the current level's size N.
//        Sum N nodes (pop, sum, push children).
//        Push avg = sum / N to result.
//   3. Return result.
//
// Why BFS:
//   Levels are exactly what BFS yields. Tracking "how many nodes were in
//   THIS level" (the size snapshot at the start of each iteration) is the
//   key trick.
//
// Alternative (DFS with parallel arrays):
//   Maintain two arrays: sums[level], counts[level]. Pre-order traverse,
//   accumulate. Compute averages at the end. Same O(n).
//
// Time:  O(n)
// Space: O(w)  width of widest level (queue size at peak)
//
// Edge Cases:
//   - Empty tree                → []
//   - Single node               → [val]
//   - Skewed tree               → each level has one node, averages are
//                                  the node values themselves
//   - Beware integer overflow on JVM/C++; in JS, doubles handle it

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @returns {number[]}
 */
const averageOfLevels = (root) => {
  // your code here
};

console.log('=== LC #637 Average of Levels in Binary Tree ===\n');

const t1 = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);
console.log('Test 1:');
console.log(averageOfLevels(t1));
// Expected: [3, 14.5, 11]

console.log('\nTest 2 — single node:');
console.log(averageOfLevels(new TreeNode(5)));
// Expected: [5]

console.log('\nTest 3 — empty:');
console.log(averageOfLevels(null));
// Expected: []

const skew = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.log('\nTest 4 — left-skewed:');
console.log(averageOfLevels(skew));
// Expected: [1, 2, 3]
