// LC #55 — Jump Game   [Medium]   Pattern: Greedy
//
// You are given an integer array nums. You start at index 0, and nums[i] is
// the MAXIMUM number of positions you can jump forward from index i.
//
// Return true if you can reach the last index.
//
// Example 1:
//   Input:  nums = [2,3,1,1,4]
//   Output: true     (jump 1 to index 1, then 3 to the last index)
// Example 2:
//   Input:  nums = [3,2,1,0,4]
//   Output: false    (every route stalls on the 0 at index 3)
// Example 3:
//   Input:  nums = [0]
//   Output: true     (already at the last index)
//
// Constraints:
//   1 <= nums.length <= 10^4
//   0 <= nums[i] <= 10^5

const canJump = (nums) => {

};

console.log(canJump([2, 3, 1, 1, 4])); // expected: true
console.log(canJump([3, 2, 1, 0, 4])); // expected: false
console.log(canJump([0]));              // expected: true
