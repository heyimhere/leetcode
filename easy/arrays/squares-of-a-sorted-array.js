// TODO: implement
// LC #977 — Squares of a Sorted Array
//
// Given an integer array `nums` sorted in NON-DECREASING order, return an
// array of the squares of each number, also sorted non-decreasing.
//
// Example:
//   nums = [-4,-1,0,3,10]   → [0,1,9,16,100]
//   nums = [-7,-3,2,3,11]   → [4,9,9,49,121]
//
// Approach (two pointers from the ends):
//   The largest |value| sits at one of the two ends (because the array is
//   sorted but may contain negatives). Walk left and right toward each
//   other, comparing |nums[left]| vs |nums[right]|, and FILL the result
//   array from the END.
//
//   - If |nums[left]| > |nums[right]|: result[i--] = nums[left]², left++
//   - Else:                            result[i--] = nums[right]², right--
//
// Why this works:
//   After squaring, the value distribution becomes "V-shaped": small in the
//   middle, large at both ends. So squared maxima always live at an end.
//
// Alternative: square everything then sort. O(n log n) — simple but slower
// than the two-pointer linear solution.
//
// Time:  O(n)
// Space: O(n) for the output (no extra working memory)
//
// Edge Cases:
//   - All negatives                       → reverse the squared array
//   - All positives                       → just square each
//   - Mixed with zero                     → zero squared = 0
//   - Single element                      → [val²]

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const sortedSquares = (nums) => {
  // your code here
};

console.log('=== LC #977 Squares of a Sorted Array ===\n');

console.log('Test 1:');
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// Expected: [0,1,9,16,100]

console.log('\nTest 2:');
console.log(sortedSquares([-7, -3, 2, 3, 11]));
// Expected: [4,9,9,49,121]

console.log('\nTest 3 — all negative:');
console.log(sortedSquares([-5, -3, -2, -1]));
// Expected: [1,4,9,25]

console.log('\nTest 4 — singleton:');
console.log(sortedSquares([3]));
// Expected: [9]
