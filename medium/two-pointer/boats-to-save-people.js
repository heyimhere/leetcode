// TODO: implement
// LC #881 — Boats to Save People
//
// Each `people[i]` weighs people[i]. Each boat carries AT MOST 2 people
// whose combined weight is AT MOST `limit`. Return the MINIMUM number of
// boats to carry everyone.
//
// Example:
//   people = [1,2], limit = 3          → 1   ([1,2] in one boat)
//   people = [3,2,2,1], limit = 3      → 3   ([1,2],[2],[3])
//   people = [3,5,3,4], limit = 5      → 4   (every person needs own boat)
//
// Approach (sort + greedy two pointers):
//   1. Sort people ascending.
//   2. lo = 0; hi = n - 1; boats = 0
//   3. While lo <= hi:
//        if people[lo] + people[hi] <= limit → lo++   (pair them)
//        hi--; boats++                                 (heaviest always goes)
//   4. Return boats.
//
// Why pair lightest-with-heaviest:
//   The heaviest person MUST take a boat (they can't be skipped). The best
//   companion for them is the lightest remaining person — if they don't
//   fit together, no one else does. If they do fit, we save a boat by
//   pairing. Greedy works because it never closes off a better option.
//
// Time:  O(n log n) for the sort
// Space: O(1)
//
// Edge Cases:
//   - Everyone weighs exactly limit         → n boats (no pairing possible)
//   - Everyone weighs 1, limit huge         → n / 2 boats (pair all)
//   - One person                            → 1 boat
//   - Pairing with 2 == limit edge case     → still <= limit, allowed

/**
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
const numRescueBoats = (people, limit) => {
  // your code here
};

console.log('=== LC #881 Boats to Save People ===\n');

console.log('Test 1:');
console.log(numRescueBoats([1, 2], 3));
// Expected: 1

console.log('\nTest 2:');
console.log(numRescueBoats([3, 2, 2, 1], 3));
// Expected: 3

console.log('\nTest 3 — no pairs possible:');
console.log(numRescueBoats([3, 5, 3, 4], 5));
// Expected: 4

console.log('\nTest 4 — single person:');
console.log(numRescueBoats([2], 5));
// Expected: 1
