// TODO: implement
// LC #162 — Find Peak Element
//
// A "peak" is an element strictly GREATER than both neighbors. nums[-1] and
// nums[n] are treated as -∞. Given `nums` where no two adjacent values are
// equal, return ANY peak's INDEX. Must be O(log n).
//
// Example:
//   [1,2,3,1]       → 2   (nums[2] = 3 is the peak)
//   [1,2,1,3,5,6,4] → 1 or 5   (multiple peaks; either is fine)
//
// Approach (binary search on slope):
//   lo = 0; hi = n - 1
//   while lo < hi:
//     mid = (lo + hi) >>> 1
//     if nums[mid] > nums[mid + 1]:
//       hi = mid                 // descending after mid; a peak is at mid or to the left
//     else:
//       lo = mid + 1             // ascending; a peak is to the right
//   return lo
//
// Why "always a peak in the climbing half":
//   If we're on an ascending slope (nums[mid] < nums[mid+1]), we'll keep
//   climbing until either a true peak or the right edge — and the right
//   edge is itself ≥ a peak (since nums[n] = -∞).
//
//   Same idea on the descending side, mirrored.
//
// Why "no two adjacent equal" matters:
//   It guarantees a strict slope direction at every mid; otherwise the
//   "climbing vs descending" decision could be ambiguous.
//
// Time:  O(log n)
// Space: O(1)
//
// Edge Cases:
//   - Strictly ascending     → last element is the peak
//   - Strictly descending    → first element is the peak
//   - Single element         → index 0
//   - Multiple peaks         → any one is fine

/**
 * @param {number[]} nums
 * @returns {number}
 */
const findPeakElement = (nums) => {
  // your code here
};

console.log('=== LC #162 Find Peak Element ===\n');

console.log('Test 1:');
console.log(findPeakElement([1, 2, 3, 1]));
// Expected: 2

console.log('\nTest 2:');
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
// Expected: 1 or 5

console.log('\nTest 3 — strictly ascending:');
console.log(findPeakElement([1, 2, 3, 4, 5]));
// Expected: 4

console.log('\nTest 4 — singleton:');
console.log(findPeakElement([42]));
// Expected: 0
