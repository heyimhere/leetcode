// TODO: implement
// LC #153 — Find Minimum in Rotated Sorted Array
//
// Given a sorted ascending array of unique values rotated by some unknown
// pivot, return the MINIMUM element. Must be O(log n).
//
// Example:
//   [3,4,5,1,2]       → 1
//   [4,5,6,7,0,1,2]   → 0
//   [11,13,15,17]     → 11  (no rotation; min is nums[0])
//
// Approach (binary search on the rotated condition):
//   lo = 0; hi = n - 1
//   while lo < hi:
//     mid = (lo + hi) >>> 1
//     if nums[mid] > nums[hi]: lo = mid + 1   // min is to the right
//     else:                    hi = mid       // min is mid or to the left
//   return nums[lo]
//
//   The comparison vs nums[hi] (NOT nums[lo]) is the crucial choice. It
//   tells us which side has the "wrap-around drop."
//
// Why mid vs hi (not mid vs lo):
//   - If nums[mid] > nums[hi], the right half contains the pivot drop and
//     therefore the minimum.
//   - If nums[mid] <= nums[hi], the right half is fully sorted, so the
//     min is at or before mid.
//   Comparing against nums[lo] doesn't work as cleanly because the left
//   half can also be sorted when there's no rotation.
//
// Time:  O(log n)
// Space: O(1)
//
// Edge Cases:
//   - No rotation at all                  → nums[0]
//   - Single element                      → that element
//   - Two elements                        → the smaller one
//   - Min at the end of the array         → handled (lo converges)

/**
 * @param {number[]} nums
 * @returns {number}
 */
const findMin = (nums) => {
  // your code here
};

console.log('=== LC #153 Find Minimum in Rotated Sorted Array ===\n');

console.log('Test 1:');
console.log(findMin([3, 4, 5, 1, 2]));
// Expected: 1

console.log('\nTest 2:');
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// Expected: 0

console.log('\nTest 3 — no rotation:');
console.log(findMin([11, 13, 15, 17]));
// Expected: 11

console.log('\nTest 4 — single:');
console.log(findMin([2]));
// Expected: 2
