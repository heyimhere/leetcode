// LC #78 — Subsets   [Medium]   Pattern: Backtracking
//
// Given an integer array nums of UNIQUE elements, return all possible
// subsets (the power set).
//
// The result must not contain duplicate subsets. Return them in any order.
//
// Example 1:
//   Input:  nums = [1,2,3]
//   Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:
//   Input:  nums = [0]
//   Output: [[],[0]]
//
// Constraints:
//   1 <= nums.length <= 10
//   -10 <= nums[i] <= 10
//   All numbers in nums are unique.

const subsets = (nums) => {

};

console.log(subsets([1, 2, 3]));
// expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] (any order)
console.log(subsets([0])); // expected: [[],[0]]
