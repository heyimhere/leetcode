// TODO: implement
// LC #33 — Search in Rotated Sorted Array
//
// `nums` is a sorted ascending array that has been ROTATED at an unknown
// pivot index (e.g. [4,5,6,7,0,1,2] from [0,1,2,4,5,6,7]). Given target,
// return its index, or -1. All values are distinct. Solve in O(log n).
//
// Example:
//   nums = [4,5,6,7,0,1,2], target = 0  → 4
//   nums = [4,5,6,7,0,1,2], target = 3  → -1
//   nums = [1],             target = 0  → -1
//
// Approach (modified binary search):
//   At each step, mid divides the array into left = [lo..mid] and right =
//   [mid..hi]. AT LEAST ONE half is sorted. Identify it, check if target
//   lies within its range, and recurse into that half; otherwise go to the
//   other half.
//
//   lo = 0; hi = n - 1
//   while lo <= hi:
//     mid = (lo + hi) >>> 1
//     if nums[mid] === target → return mid
//     if nums[lo] <= nums[mid]:                 // left half sorted
//       if nums[lo] <= target < nums[mid] → hi = mid - 1
//       else → lo = mid + 1
//     else:                                     // right half sorted
//       if nums[mid] < target <= nums[hi] → lo = mid + 1
//       else → hi = mid - 1
//   return -1
//
// Why "at least one half is sorted":
//   The rotation introduces exactly ONE break in monotonicity. The mid
//   index falls on one side of the break, leaving the OTHER side fully
//   sorted.
//
// Time:  O(log n)
// Space: O(1)
//
// Edge Cases:
//   - No rotation (already sorted) → standard binary search
//   - Rotation = n (back to sorted) → same as above
//   - target equals a boundary value
//   - Single-element array
//   - target not in array         → -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const search = (nums, target) => {
  // your code here
};

console.log('=== LC #33 Search in Rotated Sorted Array ===\n');

console.log('Test 1:');
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// Expected: 4

console.log('\nTest 2 — not found:');
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// Expected: -1

console.log('\nTest 3 — singleton miss:');
console.log(search([1], 0));
// Expected: -1

console.log('\nTest 4 — no rotation:');
console.log(search([1, 2, 3, 4, 5], 4));
// Expected: 3
