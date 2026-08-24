// LC #435 — Non-overlapping Intervals   [Medium]   Pattern: Intervals
//
// Given an array of intervals, return the MINIMUM number of intervals you
// must remove so that the rest are all non-overlapping.
//
// Intervals that only touch at an endpoint — such as [1,2] and [2,3] — do
// NOT count as overlapping.
//
// Example 1:
//   Input:  intervals = [[1,2],[2,3],[3,4],[1,3]]
//   Output: 1        (remove [1,3])
// Example 2:
//   Input:  intervals = [[1,2],[1,2],[1,2]]
//   Output: 2
// Example 3:
//   Input:  intervals = [[1,2],[2,3]]
//   Output: 0
//
// Constraints:
//   1 <= intervals.length <= 10^5
//   intervals[i].length === 2
//   -5 * 10^4 <= start < end <= 5 * 10^4

const eraseOverlapIntervals = (intervals) => {

};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // expected: 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));          // expected: 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));                  // expected: 0
