// TODO: implement
// LC #53 — Maximum Subarray
//
// Given an integer array `nums`, find the contiguous SUBARRAY (length ≥ 1)
// with the LARGEST SUM, and return its sum.
//
// Example:
//   [-2,1,-3,4,-1,2,1,-5,4]   → 6   ([4,-1,2,1])
//   [1]                       → 1
//   [5,4,-1,7,8]              → 23
//
// Approach (Kadane's algorithm):
//   currMax = nums[0]
//   best   = nums[0]
//   for i in 1..n-1:
//     currMax = max(nums[i], currMax + nums[i])
//     best    = max(best, currMax)
//   return best
//
// Why Kadane works:
//   At each index, the best subarray ENDING here is either
//   (a) just nums[i] alone (start fresh) or
//   (b) extend the best subarray ending at i-1.
//   Tracking that running max and the global best gives O(n).
//
// Divide-and-conquer (LC follow-up): O(n log n) merge-style.
//   For any split, the answer is max(leftBest, rightBest, crossMid).
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - All negative           → the single largest (least negative) element
//   - Single element         → that element
//   - All positive           → sum of all
//   - Many zeros             → still works

/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxSubArray = (nums) => {
  // your code here
};

console.log('=== LC #53 Maximum Subarray ===\n');

console.log('Test 1:');
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Expected: 6

console.log('\nTest 2:');
console.log(maxSubArray([1]));
// Expected: 1

console.log('\nTest 3 — all negative:');
console.log(maxSubArray([-3, -1, -2]));
// Expected: -1

console.log('\nTest 4:');
console.log(maxSubArray([5, 4, -1, 7, 8]));
// Expected: 23
