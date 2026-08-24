// LC #215 — Kth Largest Element in an Array   [Medium]   Pattern: Heap
//
// Given an integer array nums and an integer k, return the kth largest
// element in the array.
//
// This is the kth largest in SORTED ORDER, not the kth distinct element —
// duplicates each occupy their own rank.
//
// Example 1:
//   Input:  nums = [3,2,1,5,6,4], k = 2
//   Output: 5
// Example 2:
//   Input:  nums = [3,2,3,1,2,4,5,5,6], k = 4
//   Output: 4
// Example 3:
//   Input:  nums = [1], k = 1
//   Output: 1
//
// Constraints:
//   1 <= k <= nums.length <= 10^5
//   -10^4 <= nums[i] <= 10^4
//
// Follow-up: can you avoid sorting the entire array?

const findKthLargest = (nums, k) => {

};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));              // expected: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));     // expected: 4
console.log(findKthLargest([1], 1));                              // expected: 1
