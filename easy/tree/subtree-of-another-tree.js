// TODO: implement
// LC #572 — Subtree of Another Tree
//
// Given the roots of two binary trees `root` and `subRoot`, return true
// iff there is a subtree of `root` with the SAME STRUCTURE AND NODE VALUES
// as `subRoot`. A subtree consists of a node in `root` AND all of its
// descendants.
//
// Example:
//   root:          3                subRoot:    4
//                 / \                          / \
//                4   5                        1   2
//               / \
//              1   2                          → true
//
//   root:          3                subRoot:    4
//                 / \                          / \
//                4   5                        1   2
//               / \                              \
//              1   2                              0   → false
//                /
//               0
//
// Approach (DFS + same-tree check):
//   isSameTree(a, b):
//     if both null → true
//     if exactly one null → false
//     return a.val === b.val
//         && isSameTree(a.left, b.left)
//         && isSameTree(a.right, b.right)
//
//   isSubtree(root, subRoot):
//     if root null → false
//     if isSameTree(root, subRoot) → true
//     return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
//
// Why two recursions:
//   The outer one finds candidate roots; the inner verifies exact match.
//   Without the structure-match gate, similar values in scattered locations
//   would produce false positives.
//
// Alternative: serialize both trees (preorder with null markers) and check
//   substring containment via KMP. O(n + m) time. Watch for false matches —
//   you must include null markers to disambiguate.
//
// Time:  O(n × m) worst case (m = size of subRoot). KMP variant: O(n + m).
// Space: O(h)    recursion stack
//
// Edge Cases:
//   - subRoot is null         → typically considered true
//   - root is null            → false (unless subRoot is null too)
//   - subRoot equals root     → true
//   - Same value, diff shape  → false

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @returns {boolean}
 */
const isSubtree = (root, subRoot) => {
  // your code here
};

console.log('=== LC #572 Subtree of Another Tree ===\n');

const root1 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2)),
  new TreeNode(5),
);
const sub1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log('Test 1 — yes:');
console.log(isSubtree(root1, sub1));
// Expected: true

const root2 = new TreeNode(3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  new TreeNode(5),
);
console.log('\nTest 2 — no (extra node breaks the match):');
console.log(isSubtree(root2, sub1));
// Expected: false

console.log('\nTest 3 — subRoot at the root:');
console.log(isSubtree(sub1, sub1));
// Expected: true
