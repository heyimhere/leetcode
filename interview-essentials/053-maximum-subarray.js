// LC #53 — Maximum Subarray   [Medium]   Pattern: Dynamic Programming
//
// Given an integer array nums, find the contiguous subarray with the largest
// sum and return that sum.
//
// The subarray must contain at least one element, so an all-negative array
// still has an answer.
//
// Example 1:
//   Input:  nums = [-2,1,-3,4,-1,2,1,-5,4]
//   Output: 6        ([4,-1,2,1])
// Example 2:
//   Input:  nums = [1]
//   Output: 1
// Example 3:
//   Input:  nums = [5,4,-1,7,8]
//   Output: 23
// Example 4:
//   Input:  nums = [-3,-2,-5]
//   Output: -2
//
// Constraints:
//   1 <= nums.length <= 10^5
//   -10^4 <= nums[i] <= 10^4

const maxSubArray = (nums) => {

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // expected: 6
console.log(maxSubArray([1]));                              // expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                 // expected: 23
console.log(maxSubArray([-3, -2, -5]));                     // expected: -2
