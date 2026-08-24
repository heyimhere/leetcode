// LC #56 — Merge Intervals   [Medium]   Pattern: Intervals
//
// Given an array of intervals where intervals[i] = [start, end], merge all
// overlapping intervals and return an array of non-overlapping intervals
// that covers exactly the same span.
//
// Intervals that merely touch at an endpoint count as overlapping.
//
// Example 1:
//   Input:  intervals = [[1,3],[2,6],[8,10],[15,18]]
//   Output: [[1,6],[8,10],[15,18]]
// Example 2:
//   Input:  intervals = [[1,4],[4,5]]
//   Output: [[1,5]]
// Example 3:
//   Input:  intervals = [[1,4],[0,4]]
//   Output: [[0,4]]
//
// Constraints:
//   1 <= intervals.length <= 10^4
//   intervals[i].length === 2
//   0 <= start <= end <= 10^4
//   The input is NOT guaranteed to be sorted.

const merge = (intervals) => {

};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]]));                     // expected: [[1,5]]
console.log(merge([[1, 4], [0, 4]]));                     // expected: [[0,4]]
