// LC #39 — Combination Sum   [Medium]   Pattern: Backtracking
//
// Given an array of DISTINCT integers candidates and a target integer,
// return every unique combination of candidates that sums to target.
//
// The SAME candidate may be chosen an unlimited number of times. Two
// combinations are the same if they use each number the same number of
// times, regardless of order.
//
// Example 1:
//   Input:  candidates = [2,3,6,7], target = 7
//   Output: [[2,2,3],[7]]
// Example 2:
//   Input:  candidates = [2,3,5], target = 8
//   Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:
//   Input:  candidates = [2], target = 1
//   Output: []
//
// Constraints:
//   1 <= candidates.length <= 30
//   2 <= candidates[i] <= 40
//   All elements of candidates are distinct.
//   1 <= target <= 40

const combinationSum = (candidates, target) => {

};

console.log(combinationSum([2, 3, 6, 7], 7)); // expected: [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8));    // expected: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1));          // expected: []
