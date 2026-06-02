// TODO: implement
// LC #1046 — Last Stone Weight
//
// You're given an array `stones`. Each round:
//   1. Pick the TWO heaviest stones x ≤ y.
//   2. Smash them:
//        if x === y → both destroyed
//        else        → new stone of weight (y - x) replaces them
// Repeat until ≤ 1 stone remains. Return the last stone's weight (0 if all
// destroyed).
//
// Example:
//   [2,7,4,1,8,1]  → 1
//     8 ∧ 7 → 1; pile: [2,4,1,1,1]
//     4 ∧ 2 → 2; pile: [2,1,1,1]
//     2 ∧ 1 → 1; pile: [1,1,1]
//     1 ∧ 1 → 0; pile: [1]
//     final: 1
//
// Approach (max-heap simulation):
//   1. Build a max-heap of stones.
//   2. While heap.size >= 2:
//        y = heap.pop(); x = heap.pop()
//        if x !== y → heap.push(y - x)
//   3. Return heap.size ? heap.peek() : 0
//
// Why max-heap:
//   Always need the two HEAVIEST. Max-heap gives O(log n) pop + push;
//   total O(n log n) for n initial stones.
//
// Time:  O(n log n)
// Space: O(n) heap
//
// Edge Cases:
//   - Single stone        → its weight (no smashing)
//   - All equal stones    → 0 if count is even; one stone's value if odd
//   - Two stones          → |a - b|

/**
 * @param {number[]} stones
 * @returns {number}
 */
const lastStoneWeight = (stones) => {
  // your code here
};

console.log('=== LC #1046 Last Stone Weight ===\n');

console.log('Test 1:');
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
// Expected: 1

console.log('\nTest 2 — single:');
console.log(lastStoneWeight([5]));
// Expected: 5

console.log('\nTest 3 — all equal, even count:');
console.log(lastStoneWeight([3, 3, 3, 3]));
// Expected: 0

console.log('\nTest 4 — two stones:');
console.log(lastStoneWeight([10, 4]));
// Expected: 6
