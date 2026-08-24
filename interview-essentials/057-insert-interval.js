// LC #57 — Insert Interval   [Medium]   Pattern: Intervals
//
// You are given an array of non-overlapping intervals sorted by start time,
// and a newInterval to insert.
//
// Insert it so the array stays sorted and non-overlapping, merging any
// intervals it touches. Return the resulting array.
//
// Example 1:
//   Input:  intervals = [[1,3],[6,9]], newInterval = [2,5]
//   Output: [[1,5],[6,9]]
// Example 2:
//   Input:  intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
//   Output: [[1,2],[3,10],[12,16]]
// Example 3:
//   Input:  intervals = [], newInterval = [5,7]
//   Output: [[5,7]]
//
// Constraints:
//   0 <= intervals.length <= 10^4
//   intervals[i].length === newInterval.length === 2
//   0 <= start <= end <= 10^5
//   intervals is sorted by start and has no overlaps.

const insert = (intervals, newInterval) => {

};

console.log(insert([[1, 3], [6, 9]], [2, 5]));                              // expected: [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));   // expected: [[1,2],[3,10],[12,16]]
console.log(insert([], [5, 7]));                                             // expected: [[5,7]]
