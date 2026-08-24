// LC #283 — Move Zeroes   [Easy]   Pattern: Two Pointers
//
// Given an integer array nums, move all 0s to the end while keeping the
// relative order of the non-zero elements unchanged.
//
// You must do this IN PLACE — do not build and return a copy.
//
// Example 1:
//   Input:  nums = [0,1,0,3,12]
//   Output: [1,3,12,0,0]
// Example 2:
//   Input:  nums = [0]
//   Output: [0]
// Example 3:
//   Input:  nums = [1,0,1]
//   Output: [1,1,0]
//
// Constraints:
//   1 <= nums.length <= 10^4
//   -2^31 <= nums[i] <= 2^31 - 1
//
// Follow-up: minimize the total number of write operations.

const moveZeroes = (nums) => {

};

const a1 = [0, 1, 0, 3, 12];
moveZeroes(a1);
console.log(a1); // expected: [1,3,12,0,0]

const a2 = [0];
moveZeroes(a2);
console.log(a2); // expected: [0]

const a3 = [1, 0, 1];
moveZeroes(a3);
console.log(a3); // expected: [1,1,0]
