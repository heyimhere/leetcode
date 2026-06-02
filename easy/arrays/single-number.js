// TODO: implement
// LC #136 — Single Number
//
// Every element in `nums` appears twice except one. Find the one that
// appears once. Must be O(n) time and O(1) extra space.
//
// Example:
//   [2,2,1]       → 1
//   [4,1,2,1,2]   → 4
//   [1]           → 1
//
// Approach (XOR fold):
//   XOR has two key properties:
//     - x ^ x = 0
//     - x ^ 0 = x
//     - XOR is commutative and associative
//   So XORing every number together cancels every pair, leaving only the
//   unique one.
//
// Why XOR beats HashMap here:
//   A HashMap solution is also O(n), but uses O(n) space. The XOR trick is
//   O(1) space — that's what the constraints are asking for.
//
// Alternative: sort and pick the lone element. O(n log n) — slower.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Single-element array → that element is the answer
//   - Unique element is 0  → still works (0 ^ pair ^ pair = 0)
//   - Negative numbers     → XOR still works on 2's-complement bits

/**
 * @param {number[]} nums
 * @returns {number}
 */
const singleNumber = (nums) => {
  // your code here
};

console.log('=== LC #136 Single Number ===\n');

console.log('Test 1:');
console.log(singleNumber([2, 2, 1]));
// Expected: 1

console.log('\nTest 2:');
console.log(singleNumber([4, 1, 2, 1, 2]));
// Expected: 4

console.log('\nTest 3 — singleton:');
console.log(singleNumber([1]));
// Expected: 1

console.log('\nTest 4 — unique is zero:');
console.log(singleNumber([0, 1, 1]));
// Expected: 0
