// TODO: implement
// LC #34 — Find First and Last Position of Element in Sorted Array
//
// Given a sorted (non-decreasing) array `nums` and a target, return the
// starting and ending indices of the target value. If the target is not
// found, return [-1, -1].
//
// You MUST do this in O(log n) time — so plain `nums.indexOf` won't cut it.
//
// Example:
//   nums = [5,7,7,8,8,10], target = 8  → [3, 4]
//   nums = [5,7,7,8,8,10], target = 6  → [-1, -1]
//   nums = [],             target = 0  → [-1, -1]
//
// Approach (two binary searches — leftmost and rightmost):
//   Standard binary search finds SOME index of the target. We want the
//   FIRST and LAST. So we modify the search to be "leftmost" and "rightmost":
//
//   leftmostIndex(nums, target):
//     lo = 0, hi = n
//     while lo < hi:
//       mid = (lo + hi) >> 1
//       if nums[mid] < target: lo = mid + 1
//       else: hi = mid
//     return lo   // first index where nums[lo] >= target
//
//   rightmostIndex(nums, target):
//     lo = 0, hi = n
//     while lo < hi:
//       mid = (lo + hi) >> 1
//       if nums[mid] <= target: lo = mid + 1
//       else: hi = mid
//     return lo - 1   // last index where nums[lo - 1] <= target
//
//   Then:
//     left = leftmostIndex(nums, target)
//     right = rightmostIndex(nums, target)
//     if left <= right AND nums[left] === target: return [left, right]
//     else: return [-1, -1]
//
// Why this works:
//   - The "leftmost" variant narrows toward the smallest index whose
//     value is ≥ target.
//   - The "rightmost" variant narrows toward the largest index whose
//     value is ≤ target.
//   - Their range is the contiguous block of `target` values. If the
//     block is empty (or the value isn't `target`), we return [-1, -1].
//
// Why `(lo + hi) >> 1` not `(lo + hi) / 2`:
//   - In JS, this avoids floating-point quirks and is integer-fast.
//
// Alternative: one binary search to land on any target, then linearly
//   walk left/right to find the bounds. O(n) worst case (think: array of
//   all the same value) — disqualified by the constraint.
//
// Time:  O(log n)
// Space: O(1)
//
// Edge Cases:
//   - Target not in array                 → [-1, -1]
//   - Target appears once                 → [i, i]
//   - Target is the entire array          → [0, n - 1]
//   - Empty array                         → [-1, -1]
//   - Target is smaller than all          → [-1, -1]
//   - Target is larger than all           → [-1, -1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const searchRange = (nums, target) => {
  // your code here
};

console.log('=== LC #34 First and Last Position ===\n');

console.log('Test 1 — Classic, target present:');
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// Expected: [3, 4]

console.log('\nTest 2 — Target absent:');
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// Expected: [-1, -1]

console.log('\nTest 3 — Empty array:');
console.log(searchRange([], 0));
// Expected: [-1, -1]

console.log('\nTest 4 — Single occurrence:');
console.log(searchRange([1, 2, 3, 4, 5], 3));
// Expected: [2, 2]

console.log('\nTest 5 — All same:');
console.log(searchRange([2, 2, 2, 2], 2));
// Expected: [0, 3]

console.log('\nTest 6 — Target smaller than all:');
console.log(searchRange([5, 6, 7], 1));
// Expected: [-1, -1]

console.log('\nTest 7 — Target larger than all:');
console.log(searchRange([5, 6, 7], 100));
// Expected: [-1, -1]
