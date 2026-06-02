// TODO: implement
// LC #724 — Find Pivot Index
//
// Given an array `nums`, return the leftmost index i such that the sum of
// elements to the LEFT of i equals the sum to the RIGHT of i. Return -1 if
// no such index exists. The pivot itself is NOT included in either sum.
//
// Example:
//   nums = [1,7,3,6,5,6]  → 3   (left = 1+7+3 = 11, right = 5+6 = 11)
//   nums = [1,2,3]        → -1
//   nums = [2,1,-1]       → 0   (left = 0, right = 1 + (-1) = 0)
//
// Approach (running-sum trick):
//   1. Compute total = sum(nums).
//   2. Walk left → right, tracking leftSum (sum of strictly-less-than-i).
//      At index i:  rightSum = total - leftSum - nums[i].
//      If leftSum === rightSum, return i.
//      Then leftSum += nums[i].
//   3. If no match, return -1.
//
// Why one pass works:
//   We rewrite "right sum" in terms of total and the running left sum, so we
//   never need a second loop or extra storage per index.
//
// Alternative: prefix-sum array — O(n) time, O(n) space. The running-sum
// trick is just the same idea with O(1) extra.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - First index is pivot (leftSum starts at 0)
//   - Last index is pivot (rightSum ends at 0)
//   - All zeros → 0 (every index works; return the leftmost)
//   - Single element → 0 (both sums are 0)
//   - Empty → -1

/**
 * @param {number[]} nums
 * @returns {number}
 */
const pivotIndex = (nums) => {
  // your code here
};

console.log('=== LC #724 Find Pivot Index ===\n');

console.log('Test 1 — classic:');
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// Expected: 3

console.log('\nTest 2 — none:');
console.log(pivotIndex([1, 2, 3]));
// Expected: -1

console.log('\nTest 3 — pivot at 0:');
console.log(pivotIndex([2, 1, -1]));
// Expected: 0

console.log('\nTest 4 — singleton:');
console.log(pivotIndex([0]));
// Expected: 0
