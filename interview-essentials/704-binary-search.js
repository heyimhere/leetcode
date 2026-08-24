// LC #704 — Binary Search   [Easy]   Pattern: Binary Search
//
// Given a sorted array of DISTINCT integers nums and an integer target,
// return the index of target if it exists in nums, otherwise return -1.
//
// Your solution must run in logarithmic time.
//
// Example 1:
//   Input:  nums = [-1,0,3,5,9,12], target = 9
//   Output: 4
// Example 2:
//   Input:  nums = [-1,0,3,5,9,12], target = 2
//   Output: -1
// Example 3:
//   Input:  nums = [5], target = 5
//   Output: 0
//
// Constraints:
//   1 <= nums.length <= 10^4
//   -10^4 < nums[i], target < 10^4
//   All integers in nums are unique and sorted in ascending order.

const search = (nums, target) => {

};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // expected: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // expected: -1
console.log(search([5], 5));                   // expected: 0
