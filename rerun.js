// coding interview sample (Karat-style)

/**
 * Mutual Friends & Friends of Friends
 *
 * Problem Summary:
 * A social network is represented as a list of friendship pairs (undirected).
 * Build two utilities:
 *   1. mutualFriends(pairs, userA, userB)
 *      → return the list of users who are friends with BOTH userA and userB.
 *   2. friendsOfFriends(pairs, user)
 *      → return the list of users who are friends-of-friends (degree-2)
 *        but NOT already direct friends of `user`, and NOT `user` themselves.
 *        These are classic "People You May Know" recommendations.
 *
 * This is a Meta / LinkedIn / Karat staple.
 *
 * Input: Array of [userA, userB] friendship pairs. Friendship is symmetric:
 *        ["Alice", "Bob"] means Alice ↔ Bob.
 *
 * Example friendship graph:
 *   Alice  — Bob
 *   Alice  — Charlie
 *   Bob    — Charlie
 *   Bob    — Dana
 *   Charlie— Dana
 *   Dana   — Eve
 *
 *   mutualFriends(pairs, "Alice", "Dana")  → ["Bob", "Charlie"]
 *     (both are friends with Alice AND Dana)
 *
 *   friendsOfFriends(pairs, "Alice")       → ["Dana"]
 *     (Dana is reachable in 2 hops via Bob or Charlie, and isn't already
 *      Alice's direct friend. Eve is degree 3 — too far.)
 *
 * Approach:
 *   Step 1: Build an adjacency Map<string, Set<string>>.
 *           For each pair [a, b], add b to a's set AND a to b's set.
 *   Step 2 (mutualFriends):
 *           Take the intersection of friends(userA) and friends(userB).
 *           Iterate the smaller set, check membership in the larger.
 *   Step 3 (friendsOfFriends):
 *           For each direct friend F of `user`, walk F's friends.
 *           Add anyone who is NOT `user` and NOT already a direct friend.
 *           Dedup via a Set.
 *
 * Why Map<string, Set<string>>:
 *   - O(1) friendship lookup ("is X friends with Y?")
 *   - Set automatically dedups if a pair appears twice in input.
 *
 * Time:
 *   - Build graph:      O(P)  where P = number of pairs
 *   - mutualFriends:    O(min(|A|, |B|))
 *   - friendsOfFriends: O(F * Avg) where F = direct friends, Avg = avg friends per friend
 * Space: O(N + P) for the adjacency graph.
 *
 * Edge Cases:
 *   - User has no friends                → both functions return []
 *   - User doesn't exist in graph        → return []
 *   - Duplicate pairs in input           → Set dedups automatically
 *   - Self-loops ["A","A"]               → ignore (or include? keep simple: ignore)
 */

/**
 * Builds an undirected friendship graph.
 * @param {string[][]} pairs
 * @returns {Map<string, Set<string>>}
 */
const buildFriendshipGraph = (pairs) => {
  // your code here
  const map = new Map();

  for (const [userA, userB] of pairs) {
    if (!map.has(userA)) map.set(userA, new Set());
    if (!map.has(userB)) map.set(userB, new Set());
    map.get(userA).add(userB);
    map.get(userB).add(userA);
  }
  return map;
};

/**
 * Returns users who are friends with both userA and userB.
 * @param {string[][]} pairs
 * @param {string} userA
 * @param {string} userB
 * @returns {string[]}
 */
const mutualFriends = (pairs, userA, userB) => {
  // your code here
  const map = buildFriendshipGraph(pairs);
  if (!map.has(userA) || !map.has(userB)) return [];
  const setA = map.get(userA);
  const setB = map.get(userB);

  const [smaller, larger] = setA.size <= setB.size ? [setA, setB] : [setB, setA];

  const ans = [];

  for (const user of smaller) {
    if (larger.has(user)) ans.push(user);
  }

  return ans;
};

/**
 * Returns "People You May Know" — degree-2 connections, excluding
 * direct friends and the user themselves.
 * @param {string[][]} pairs
 * @param {string} user
 * @returns {string[]}
 */
const friendsOfFriends = (pairs, user) => {
  // your code here
  const graph = buildFriendshipGraph(pairs);
  if (!graph.has(user)) return [];
  const directs = graph.get(user);
  const result = new Set();

  for (const friend of directs) {
    for (const fof of graph.get(friend)) {
      if (fof !== user && !directs.has(fof)) {
        result.add(fof);
      }
    }
  }
  return Array.from(result);
};

// ============ Test Cases ============

const friendships = [
  ['Alice', 'Bob'],
  ['Alice', 'Charlie'],
  ['Bob', 'Charlie'],
  ['Bob', 'Dana'],
  ['Charlie', 'Dana'],
  ['Dana', 'Eve'],
];

console.log('=== Mutual Friends & FoF ===\n');

console.log('Test 1 — Mutual friends Alice & Dana:');
console.log(mutualFriends(friendships, 'Alice', 'Dana'));
// Expected: ['Bob', 'Charlie']  (order may vary)

console.log('\nTest 2 — Mutual friends Alice & Eve:');
console.log(mutualFriends(friendships, 'Alice', 'Eve'));
// Expected: []   (no overlap)

console.log('\nTest 3 — Friends-of-friends for Alice:');
console.log(friendsOfFriends(friendships, 'Alice'));
// Expected: ['Dana']   (Eve is too far; Bob/Charlie are direct)

console.log('\nTest 4 — Friends-of-friends for Eve:');
console.log(friendsOfFriends(friendships, 'Eve'));
// Expected: ['Bob', 'Charlie']  (reachable via Dana)

console.log('\nTest 5 — User with no friends:');
console.log(mutualFriends(friendships, 'Alice', 'Nobody'));
console.log(friendsOfFriends(friendships, 'Nobody'));
// Expected: [] and []
