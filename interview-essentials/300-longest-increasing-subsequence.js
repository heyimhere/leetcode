// LC #300 — Longest Increasing Subsequence   [Medium]   Pattern: Dynamic Programming
//
// Given an integer array nums, return the length of the longest strictly
// increasing SUBSEQUENCE.
//
// A subsequence is formed by deleting zero or more elements without changing
// the order of the ones that remain — it does not have to be contiguous.
//
// Example 1:
//   Input:  nums = [10,9,2,5,3,7,101,18]
//   Output: 4        ([2,3,7,101])
// Example 2:
//   Input:  nums = [0,1,0,3,2,3]
//   Output: 4
// Example 3:
//   Input:  nums = [7,7,7,7,7,7,7]
//   Output: 1        (strictly increasing, so equal values do not extend it)
//
// Constraints:
//   1 <= nums.length <= 2500
//   -10^4 <= nums[i] <= 10^4
//
// Follow-up: can you get below quadratic time?

const lengthOfLIS = (nums) => {

};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // expected: 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));            // expected: 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));         // expected: 1
