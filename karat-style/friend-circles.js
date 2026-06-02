// TODO: implement
// coding interview sample (Karat-style)

/**
 * Friend Circles
 *
 * Problem Summary:
 *   You're given a list of (userA, userB) friendship pairs. Friendship is
 *   symmetric and TRANSITIVE for the purpose of "circles" — if A↔B and
 *   B↔C, they're all in one circle. Return the NUMBER of distinct circles.
 *
 *   Part 2 (extension): return the actual member list for each circle.
 *
 *   Part 3 (extension): given a target user, return everyone in their
 *   circle.
 *
 *   This is a Karat / Wayfair / Asana classic. Tests union-find or BFS/DFS
 *   on an implicit graph from a relation list.
 *
 * Input:
 *   friendships: Array of [userA, userB]
 * Output:
 *   number  (count of connected components in the friendship graph)
 *
 * Example:
 *   friendships = [["a","b"],["b","c"],["d","e"],["f","f"]]
 *   → 3   ({a,b,c}, {d,e}, {f})
 *
 * Approach (Union-Find):
 *   1. Treat each distinct user as a node.
 *   2. For each pair, union the two users.
 *   3. Count distinct roots OR maintain a `components` counter that
 *      decrements on each successful merge.
 *
 * Why Union-Find:
 *   Each pair gives us a union; the number of connected components is the
 *   number of distinct roots at the end. Near-O(1) per op with path
 *   compression + union by rank.
 *
 * Alternative: build adjacency list; BFS/DFS counting components.
 *
 * Time:  O(F α(N))
 * Space: O(N)
 *
 * Edge Cases:
 *   - Empty friendships        → 0  OR  count of solo users if a user
 *                                  list is also given
 *   - Self-loop ("f","f")      → user f alone is still one circle
 *   - Duplicate pairs          → no double-counting (find returns same root)
 *   - Very large graph         → union-find essentially linear
 */

/**
 * @param {[string, string][]} friendships
 * @returns {number}
 */
const friendCircles = (friendships) => {
  // your code here
};

/**
 * Part 2 — return the actual circles.
 * @param {[string, string][]} friendships
 * @returns {string[][]}
 */
const friendCirclesGrouped = (friendships) => {
  // your code here
};

/**
 * Part 3 — find everyone in `user`'s circle.
 * @param {[string, string][]} friendships
 * @param {string} user
 * @returns {string[]}
 */
const circleOf = (friendships, user) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Friend Circles ===\n');

const F = [['a', 'b'], ['b', 'c'], ['d', 'e'], ['f', 'f']];

console.log('Test 1 — count:');
console.log(friendCircles(F));
// Expected: 3

console.log('\nTest 2 — grouped:');
console.log(friendCirclesGrouped(F));
// Expected: [['a','b','c'], ['d','e'], ['f']]  (groups in any order)

console.log('\nTest 3 — circleOf b:');
console.log(circleOf(F, 'b'));
// Expected: ['a','b','c'] (any order)

console.log('\nTest 4 — empty:');
console.log(friendCircles([]));
// Expected: 0
