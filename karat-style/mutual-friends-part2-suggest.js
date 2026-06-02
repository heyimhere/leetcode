// TODO: implement
// coding interview sample (Karat-style)

/**
 * Mutual Friends — Part 2 — Friend Suggestions
 *
 * Extends `mutual-friends.js`. Part 1 found the mutual friends between
 * two specific users. Part 2 is the classic Facebook/Instagram suggestion
 * problem: for a given user, return the TOP K NON-FRIENDS, ranked by
 * NUMBER OF MUTUAL FRIENDS (i.e., friends-of-friends sorted by count).
 * Ties broken alphabetically.
 *
 * Input:
 *   friendships: Array<[a, b]>     (undirected; either direction listed)
 *   user: string
 *   k: number
 * Output:
 *   Array<{ candidate: string, mutual: number }>  sorted by mutual desc, name asc
 *
 * Example:
 *   friendships = [
 *     ["alice","bob"],
 *     ["bob","carol"],
 *     ["bob","dan"],
 *     ["alice","eve"],
 *     ["eve","carol"],
 *   ]
 *   user = "alice", k = 2
 *   → [{ candidate: "carol", mutual: 2 }, { candidate: "dan", mutual: 1 }]
 *     (carol is mutual via bob and eve; dan is mutual via bob; bob and
 *      eve are direct friends; self excluded)
 *
 * Approach:
 *   1. Build adjacency: Map<user, Set<friends>>.
 *   2. friendsOfUser = adjacency.get(user) ?? new Set
 *   3. mutualCount: Map<candidate, count>
 *      For each f in friendsOfUser:
 *        For each fof in adjacency.get(f):
 *          if fof === user OR friendsOfUser.has(fof) → continue
 *          mutualCount.set(fof, (mutualCount.get(fof) ?? 0) + 1)
 *   4. Convert, sort (count desc, name asc), return first k.
 *
 * Why "non-friends only":
 *   Suggestions should bring NEW people into the user's network. Existing
 *   friends are by definition not a suggestion.
 *
 * Why "count by mutual friend":
 *   Higher mutual count = stronger social-graph signal. Standard heuristic
 *   for friend-suggestion systems.
 *
 * Time:  O(F × avg-friends-per-friend)
 * Space: O(C) where C = candidates
 *
 * Edge Cases:
 *   - User has no friends       → []
 *   - Every candidate has 1 mutual → alphabetical tie-break
 *   - k larger than candidate set → return all
 *   - User not in graph         → []
 */

/**
 * @param {[string, string][]} friendships
 * @param {string} user
 * @param {number} k
 * @returns {Array<{candidate: string, mutual: number}>}
 */
const suggestFriends = (friendships, user, k) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Mutual Friends — Part 2 (Suggestions) ===\n');

const friendships = [
  ['alice', 'bob'],
  ['bob', 'carol'],
  ['bob', 'dan'],
  ['alice', 'eve'],
  ['eve', 'carol'],
];

console.log('Test 1:');
console.log(suggestFriends(friendships, 'alice', 2));
// Expected: [{candidate:'carol',mutual:2},{candidate:'dan',mutual:1}]

console.log('\nTest 2 — k=10 (more than available):');
console.log(suggestFriends(friendships, 'alice', 10));
// Expected: 2 entries

console.log('\nTest 3 — user with no friends:');
console.log(suggestFriends(friendships, 'mallory', 3));
// Expected: []
