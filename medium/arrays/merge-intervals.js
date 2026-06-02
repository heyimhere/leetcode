// TODO: implement
// LC #56 — Merge Intervals
//
// Given an array of intervals where intervals[i] = [start, end], merge all
// overlapping intervals and return the resulting array of non-overlapping
// intervals covering all the input intervals.
//
// Example:
//   intervals = [[1,3],[2,6],[8,10],[15,18]]
//   → [[1,6],[8,10],[15,18]]   (1-3 and 2-6 overlap → merged to 1-6)
//
//   intervals = [[1,4],[4,5]]
//   → [[1,5]]   (touching counts as overlap)
//
// Approach (sort + sweep):
//   1. Sort intervals by start time.
//   2. Initialize result with the first interval.
//   3. For each subsequent interval [s, e]:
//        - Compare with the last interval in result, [ls, le].
//        - If s <= le → they overlap → extend the last: le = max(le, e).
//        - Else → no overlap → push [s, e] as a new entry.
//
// Why sorting works:
//   After sorting by start, any interval that overlaps the current "merge in
//   progress" must start before its end. Intervals further down that DON'T
//   overlap can't overlap anything earlier either (because starts are
//   non-decreasing). So a single pass suffices.
//
// Why touching counts as overlap:
//   [1,4] and [4,5] share the boundary 4. The problem treats this as an
//   overlap (use `<=`, not `<`). If the problem said "end exclusive," touching
//   would NOT be overlap — read carefully.
//
// Alternative: build an "events" timeline:
//   For each interval, emit a +1 event at start and a -1 event at end.
//   Sort by time, sweep, and slice on every zero-crossing. More machinery,
//   useful for variants like "min meeting rooms."
//
// Time:  O(n log n)   — dominated by the sort
// Space: O(n)         — result array; O(log n) extra for the sort
//
// Edge Cases:
//   - Empty input                          → []
//   - One interval                         → return it as-is
//   - All intervals overlap                → one big merged interval
//   - No intervals overlap                 → return sorted input as-is
//   - Touching intervals [1,4],[4,7]       → merge into [1,7]
//   - Fully contained [1,10],[2,3]         → result is [1,10]

/**
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
const merge = (intervals) => {
  // your code here
};

console.log('=== LC #56 Merge Intervals ===\n');

console.log('Test 1 — Classic:');
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Expected: [[1,6],[8,10],[15,18]]

console.log('\nTest 2 — Touching boundary:');
console.log(merge([[1, 4], [4, 5]]));
// Expected: [[1,5]]

console.log('\nTest 3 — Fully contained:');
console.log(merge([[1, 10], [2, 3], [4, 8]]));
// Expected: [[1,10]]

console.log('\nTest 4 — No overlaps:');
console.log(merge([[1, 2], [3, 4], [5, 6]]));
// Expected: [[1,2],[3,4],[5,6]]

console.log('\nTest 5 — Unsorted input:');
console.log(merge([[15, 18], [1, 3], [8, 10], [2, 6]]));
// Expected: [[1,6],[8,10],[15,18]]

console.log('\nTest 6 — Single interval:');
console.log(merge([[5, 7]]));
// Expected: [[5,7]]
