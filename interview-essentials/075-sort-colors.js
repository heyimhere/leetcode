// LC #75 — Sort Colors   [Medium]   Pattern: Two Pointers
//
// Given an array nums with n objects colored red, white or blue — encoded as
// the integers 0, 1 and 2 — sort them IN PLACE so that objects of the same
// color are adjacent, in the order 0, then 1, then 2.
//
// You must solve this without using a library sort function.
//
// Example 1:
//   Input:  nums = [2,0,2,1,1,0]
//   Output: [0,0,1,1,2,2]
// Example 2:
//   Input:  nums = [2,0,1]
//   Output: [0,1,2]
// Example 3:
//   Input:  nums = [0]
//   Output: [0]
//
// Constraints:
//   n === nums.length
//   1 <= n <= 300
//   nums[i] is 0, 1 or 2.
//
// Follow-up: can you do it in one pass with constant extra space?

const sortColors = (nums) => {

};

const c1 = [2, 0, 2, 1, 1, 0];
sortColors(c1);
console.log(c1); // expected: [0,0,1,1,2,2]

const c2 = [2, 0, 1];
sortColors(c2);
console.log(c2); // expected: [0,1,2]

const c3 = [0];
sortColors(c3);
console.log(c3); // expected: [0]
