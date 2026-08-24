// LC #560 — Subarray Sum Equals K   [Medium]   Pattern: Arrays & Hashing
//
// Given an array of integers nums and an integer k, return the total number
// of CONTIGUOUS subarrays whose elements sum to exactly k.
//
// Note that nums may contain negative numbers and zeros.
//
// Example 1:
//   Input:  nums = [1,1,1], k = 2
//   Output: 2        ([1,1] at indices 0-1 and 1-2)
// Example 2:
//   Input:  nums = [1,2,3], k = 3
//   Output: 2        ([1,2] and [3])
// Example 3:
//   Input:  nums = [1,-1,0], k = 0
//   Output: 3        ([1,-1], [1,-1,0], and [0])
//
// Constraints:
//   1 <= nums.length <= 2 * 10^4
//   -1000 <= nums[i] <= 1000
//   -10^7 <= k <= 10^7

const subarraySum = (nums, k) => {

};

console.log(subarraySum([1, 1, 1], 2));   // expected: 2
console.log(subarraySum([1, 2, 3], 3));   // expected: 2
console.log(subarraySum([1, -1, 0], 0));  // expected: 3
