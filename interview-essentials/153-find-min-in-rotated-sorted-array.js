// LC #153 — Find Minimum in Rotated Sorted Array   [Medium]   Pattern: Binary Search
//
// An array of unique integers, originally sorted in ascending order, has been
// rotated between 1 and n times. For example [0,1,2,4,5,6,7] might become
// [4,5,6,7,0,1,2].
//
// Given such a rotated array nums, return its minimum element.
// You must run in logarithmic time.
//
// Example 1:
//   Input:  nums = [3,4,5,1,2]
//   Output: 1
// Example 2:
//   Input:  nums = [4,5,6,7,0,1,2]
//   Output: 0
// Example 3:
//   Input:  nums = [11,13,15,17]
//   Output: 11
//
// Constraints:
//   n === nums.length
//   1 <= n <= 5000
//   -5000 <= nums[i] <= 5000
//   All integers are unique. nums is a rotation of a sorted ascending array.

const findMin = (nums) => {

};

console.log(findMin([3, 4, 5, 1, 2]));       // expected: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // expected: 0
console.log(findMin([11, 13, 15, 17]));      // expected: 11
