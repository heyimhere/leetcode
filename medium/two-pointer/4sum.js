// TODO: implement
// LC #18 — 4Sum
//
// Given an array `nums` of n integers and a target, return ALL UNIQUE
// quadruples [a, b, c, d] such that a + b + c + d === target. Each
// quadruple must be a tuple of distinct INDICES into nums (but values
// may repeat).
//
// Example:
//   nums = [1,0,-1,0,-2,2], target = 0
//   → [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]
//
//   nums = [2,2,2,2,2], target = 8
//   → [[2,2,2,2]]
//
// Approach (sort + two outer loops + two-pointer inner):
//   1. Sort nums.
//   2. for i in 0..n-4:
//        skip duplicates of nums[i]
//        for j in i+1..n-3:
//          skip duplicates of nums[j]
//          // 2Sum on the remainder
//          lo = j+1; hi = n-1; need = target - nums[i] - nums[j]
//          while lo < hi:
//            s = nums[lo] + nums[hi]
//            if s === need:
//              push [nums[i], nums[j], nums[lo], nums[hi]]
//              lo++; hi--
//              skip duplicates from both ends
//            elif s < need → lo++
//            else          → hi--
//
// Why de-dup at each level:
//   Identical "leading" values would re-generate the same quadruples,
//   producing duplicates. Skipping consecutive equals after sort handles it
//   without a hash set.
//
// Time:  O(n³)
// Space: O(1) extra (output not counted), O(log n) for sort recursion
//
// Edge Cases:
//   - Length < 4                → []
//   - All same value (e.g. [2,2,2,2,2], target 8) → [[2,2,2,2]]
//   - Negative + positive mix
//   - Overflow on 32-bit systems → in JS, normal numbers cover ±2^53

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
const fourSum = (nums, target) => {
  // your code here
};

console.log('=== LC #18 4Sum ===\n');

console.log('Test 1:');
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]] (some order)

console.log('\nTest 2 — all same:');
console.log(fourSum([2, 2, 2, 2, 2], 8));
// Expected: [[2,2,2,2]]

console.log('\nTest 3 — too short:');
console.log(fourSum([1, 2, 3], 6));
// Expected: []
