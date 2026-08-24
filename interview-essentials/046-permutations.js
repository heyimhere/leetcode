// LC #46 — Permutations   [Medium]   Pattern: Backtracking
//
// Given an array nums of DISTINCT integers, return every possible
// permutation of it. The answer may be in any order.
//
// Example 1:
//   Input:  nums = [1,2,3]
//   Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
//   Input:  nums = [0,1]
//   Output: [[0,1],[1,0]]
// Example 3:
//   Input:  nums = [1]
//   Output: [[1]]
//
// Constraints:
//   1 <= nums.length <= 6
//   -10 <= nums[i] <= 10
//   All integers in nums are unique.

const permute = (nums) => {

};

console.log(permute([1, 2, 3]));
// expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] (any order)
console.log(permute([0, 1])); // expected: [[0,1],[1,0]]
console.log(permute([1]));    // expected: [[1]]
