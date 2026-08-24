// LC #15 — 3Sum   [Medium]   Pattern: Two Pointers
//
// Given an integer array nums, return all unique triplets
// [nums[i], nums[j], nums[k]] where i, j and k are three distinct indices
// and nums[i] + nums[j] + nums[k] === 0.
//
// The result must not contain duplicate triplets. Order does not matter.
//
// Example 1:
//   Input:  nums = [-1,0,1,2,-1,-4]
//   Output: [[-1,-1,2],[-1,0,1]]
// Example 2:
//   Input:  nums = [0,1,1]
//   Output: []
// Example 3:
//   Input:  nums = [0,0,0]
//   Output: [[0,0,0]]
//
// Constraints:
//   3 <= nums.length <= 3000
//   -10^5 <= nums[i] <= 10^5

const threeSum = (nums) => {

};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));             // expected: []
console.log(threeSum([0, 0, 0]));             // expected: [[0,0,0]]
