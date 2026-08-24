// LC #238 — Product of Array Except Self   [Medium]   Pattern: Arrays & Hashing
//
// Given an integer array nums, return an array answer where answer[i] is the
// product of every element of nums except nums[i].
//
// You must write the solution WITHOUT using the division operator, and it
// should run in linear time.
//
// Every prefix and suffix product is guaranteed to fit in a 32-bit integer.
//
// Example 1:
//   Input:  nums = [1,2,3,4]
//   Output: [24,12,8,6]
// Example 2:
//   Input:  nums = [-1,1,0,-3,3]
//   Output: [0,0,9,0,0]
//
// Constraints:
//   2 <= nums.length <= 10^5
//   -30 <= nums[i] <= 30
//
// Follow-up: can you do it using only constant extra space?
// (The output array does not count toward the space total.)

const productExceptSelf = (nums) => {

};

console.log(productExceptSelf([1, 2, 3, 4]));         // expected: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));    // expected: [0,0,9,0,0]
