// TODO: implement
// LC #57 — Insert Interval
//
// You're given a list of non-overlapping `intervals` sorted by start time,
// and a `newInterval`. Insert it (merging if necessary) and return the
// resulting sorted, non-overlapping list.
//
// Example:
//   intervals = [[1,3],[6,9]],            newInterval = [2,5]
//     → [[1,5],[6,9]]
//   intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
//     → [[1,2],[3,10],[12,16]]
//   intervals = [],                       newInterval = [5,7]
//     → [[5,7]]
//
// Approach (single pass with three phases):
//   1. Append all intervals that END before newInterval starts.
//   2. While intervals overlap newInterval, merge:
//        newInterval = [min(start), max(end)]
//   3. Append the merged newInterval, then all intervals starting AFTER it.
//
// Why this works:
//   The input is sorted, so we can categorize each interval by where its
//   range falls relative to newInterval: strictly before, overlapping,
//   strictly after. No re-sorting needed.
//
// Time:  O(n)  — one pass
// Space: O(n)  — for the output array
//
// Edge Cases:
//   - intervals empty            → [newInterval]
//   - newInterval completely outside (before / after / disjoint between)
//   - newInterval covers everything → single merged interval

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @returns {number[][]}
 */
const insert = (intervals, newInterval) => {
  // your code here
};

console.log('=== LC #57 Insert Interval ===\n');

console.log('Test 1:');
console.log(insert([[1, 3], [6, 9]], [2, 5]));
// Expected: [[1,5],[6,9]]

console.log('\nTest 2:');
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));
// Expected: [[1,2],[3,10],[12,16]]

console.log('\nTest 3 — empty list:');
console.log(insert([], [5, 7]));
// Expected: [[5,7]]

console.log('\nTest 4 — before all:');
console.log(insert([[10, 20]], [1, 5]));
// Expected: [[1,5],[10,20]]
