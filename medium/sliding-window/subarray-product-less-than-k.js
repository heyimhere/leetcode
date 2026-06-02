// TODO: implement
// LC #713 — Subarray Product Less Than K
//
// Given an array of POSITIVE integers `nums` and an integer k, return the
// NUMBER of contiguous subarrays whose product is STRICTLY less than k.
//
// Example:
//   nums = [10,5,2,6], k = 100  → 8
//     Subarrays: [10],[5],[2],[6],[10,5],[5,2],[2,6],[5,2,6]
//   nums = [1,2,3],   k = 0     → 0
//
// Approach (sliding window with running product):
//   if k <= 1 → 0   (all products are ≥ 1, never < k)
//   left = 0; prod = 1; count = 0
//   for right in 0..n-1:
//     prod *= nums[right]
//     while prod >= k:
//       prod /= nums[left]; left++
//     count += right - left + 1   // all subarrays ending at `right`
//                                 // and starting in [left..right]
//   return count
//
// Why "right - left + 1" subarrays per right:
//   For each fixed right end with a valid window, the START can be anywhere
//   from left to right inclusive. That's (right - left + 1) new subarrays.
//
// Why positive numbers matter:
//   The "shrink-from-left when product too big" only works because every
//   number is ≥ 1 (so dividing always shrinks). With zeros or negatives,
//   the window doesn't behave monotonically.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - k <= 1            → 0
//   - All 1s, k = 2     → every single-element subarray counts: n
//   - Single value < k  → 1
//   - Empty array       → 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  // your code here
};

console.log('=== LC #713 Subarray Product Less Than K ===\n');

console.log('Test 1:');
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
// Expected: 8

console.log('\nTest 2 — k=0:');
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
// Expected: 0

console.log('\nTest 3 — all 1s, k=2:');
console.log(numSubarrayProductLessThanK([1, 1, 1, 1], 2));
// Expected: 10  (4 + 3 + 2 + 1 = 10 subarrays)

console.log('\nTest 4 — empty:');
console.log(numSubarrayProductLessThanK([], 5));
// Expected: 0
