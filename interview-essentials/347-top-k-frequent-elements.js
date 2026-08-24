// LC #347 — Top K Frequent Elements   [Medium]   Pattern: Arrays & Hashing
//
// Given an integer array nums and an integer k, return the k most frequent
// elements. The answer may be returned in any order.
//
// Example 1:
//   Input:  nums = [1,1,1,2,2,3], k = 2
//   Output: [1,2]
// Example 2:
//   Input:  nums = [1], k = 1
//   Output: [1]
// Example 3:
//   Input:  nums = [4,1,-1,2,-1,2,3], k = 2
//   Output: [-1,2]
//
// Constraints:
//   1 <= nums.length <= 10^5
//   -10^4 <= nums[i] <= 10^4
//   k is in the range [1, number of distinct elements in nums]
//   The answer is guaranteed to be unique.
//
// Follow-up: can you do better than sorting the whole frequency table?

const topKFrequent = (nums, k) => {

};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));       // expected: [1,2]
console.log(topKFrequent([1], 1));                       // expected: [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));   // expected: [-1,2]
