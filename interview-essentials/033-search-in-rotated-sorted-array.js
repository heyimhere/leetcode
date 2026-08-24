// LC #33 — Search in Rotated Sorted Array   [Medium]   Pattern: Binary Search
//
// An ascending-sorted array of DISTINCT integers has been rotated at some
// unknown pivot — [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2].
//
// Given the rotated array nums and an integer target, return the index of
// target, or -1 if it is not present.
//
// You must run in logarithmic time.
//
// Example 1:
//   Input:  nums = [4,5,6,7,0,1,2], target = 0
//   Output: 4
// Example 2:
//   Input:  nums = [4,5,6,7,0,1,2], target = 3
//   Output: -1
// Example 3:
//   Input:  nums = [1], target = 0
//   Output: -1
//
// Constraints:
//   1 <= nums.length <= 5000
//   -10^4 <= nums[i], target <= 10^4
//   All values in nums are unique.

const searchRotated = (nums, target) => {

};

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // expected: 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // expected: -1
console.log(searchRotated([1], 0));                    // expected: -1
