// TODO: implement
// LC #846 — Hand of Straights
//
// Given an integer array `hand` representing cards and an integer
// `groupSize`, return true iff `hand` can be partitioned into groups of
// `groupSize` consecutive cards each.
//
// Example:
//   hand = [1,2,3,6,2,3,4,7,8], groupSize = 3   → true
//     groups: [1,2,3], [2,3,4], [6,7,8]
//   hand = [1,2,3,4,5], groupSize = 4           → false
//
// Approach (sorted multiset + greedy):
//   if hand.length % groupSize !== 0 → false (uneven leftover)
//
//   counts: Map<card, frequency>
//   sortedCards = unique cards ascending
//
//   for card of sortedCards:
//     c = counts.get(card)
//     if c > 0:
//       for k in 0..groupSize-1:
//         need = card + k
//         if counts.get(need) < c → false
//         counts.set(need, counts.get(need) - c)
//   return true
//
// Why "smallest available card must start a group":
//   The smallest card can only appear in a group that STARTS at it (no
//   smaller cards exist to precede it). So whatever multiplicity the
//   smallest card has, that many groups starting there exist; subtract
//   the corresponding counts for card+1, ..., card + groupSize - 1.
//
// Alternative (heap-based):
//   Use a min-heap. Peek the smallest; for each of groupSize consecutive
//   values, decrement counts. Same idea, different bookkeeping.
//
// Time:  O(n log n)
// Space: O(n)
//
// Edge Cases:
//   - groupSize = 1            → always true
//   - groupSize > hand.length  → false
//   - hand size not divisible  → false
//   - Duplicates within a group → impossible; consecutive means distinct

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @returns {boolean}
 */
const isNStraightHand = (hand, groupSize) => {
  // your code here
};

console.log('=== LC #846 Hand of Straights ===\n');

console.log('Test 1:');
console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
// Expected: true

console.log('\nTest 2:');
console.log(isNStraightHand([1, 2, 3, 4, 5], 4));
// Expected: false

console.log('\nTest 3 — groupSize 1:');
console.log(isNStraightHand([5, 7, 9], 1));
// Expected: true

console.log('\nTest 4 — uneven:');
console.log(isNStraightHand([1, 2, 3, 4], 3));
// Expected: false
