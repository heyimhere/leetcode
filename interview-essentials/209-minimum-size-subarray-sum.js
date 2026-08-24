// LC #209 — Minimum Size Subarray Sum   [Medium]   Pattern: Sliding Window
//
// Given an array of POSITIVE integers nums and a positive integer target,
// return the minimal length of a contiguous subarray whose sum is greater
// than or equal to target.
//
// If no such subarray exists, return 0.
//
// Example 1:
//   Input:  target = 7, nums = [2,3,1,2,4,3]
//   Output: 2        ([4,3] is the shortest subarray summing to >= 7)
// Example 2:
//   Input:  target = 4, nums = [1,4,4]
//   Output: 1
// Example 3:
//   Input:  target = 11, nums = [1,1,1,1,1,1,1,1]
//   Output: 0
//
// Constraints:
//   1 <= target <= 10^9
//   1 <= nums.length <= 10^5
//   1 <= nums[i] <= 10^4

const minSubArrayLen = (target, nums) => {

};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));           // expected: 2
console.log(minSubArrayLen(4, [1, 4, 4]));                     // expected: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));     // expected: 0
