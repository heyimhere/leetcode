// LC #167 — Two Sum II (Input Array Is Sorted)   [Medium]   Pattern: Two Pointers
//
// Given a 1-INDEXED array of integers numbers already sorted in
// non-decreasing order, find two numbers that add up to target.
//
// Return their 1-based indices as [index1, index2] where index1 < index2.
//
// There is exactly one solution, you may not use the same element twice,
// and your solution must use only constant extra space.
//
// Example 1:
//   Input:  numbers = [2,7,11,15], target = 9
//   Output: [1,2]
// Example 2:
//   Input:  numbers = [2,3,4], target = 6
//   Output: [1,3]
// Example 3:
//   Input:  numbers = [-1,0], target = -1
//   Output: [1,2]
//
// Constraints:
//   2 <= numbers.length <= 3 * 10^4
//   -1000 <= numbers[i] <= 1000
//   numbers is sorted in non-decreasing order.
//   -1000 <= target <= 1000

const twoSumII = (numbers, target) => {

};

console.log(twoSumII([2, 7, 11, 15], 9)); // expected: [1,2]
console.log(twoSumII([2, 3, 4], 6));      // expected: [1,3]
console.log(twoSumII([-1, 0], -1));       // expected: [1,2]
