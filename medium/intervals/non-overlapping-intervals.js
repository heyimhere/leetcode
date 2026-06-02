// TODO: implement
// LC #435 — Non-overlapping Intervals
//
// Given an array `intervals` where intervals[i] = [start, end], return the
// MINIMUM number of intervals to REMOVE so the rest are non-overlapping.
//
// Example:
//   [[1,2],[2,3],[3,4],[1,3]]   → 1   (remove [1,3])
//   [[1,2],[1,2],[1,2]]         → 2
//   [[1,2],[2,3]]               → 0   (touching is NOT overlap)
//
// Approach (greedy by END time):
//   1. Sort intervals ascending by END time.
//   2. Walk through, tracking the last KEPT interval's end.
//      For each interval [s, e]:
//        if s >= lastEnd → keep (lastEnd = e)
//        else            → drop (increment removed)
//   3. Return removed count.
//
// Why sort by END (not start):
//   Greedy "earliest deadline first" maximizes the number of compatible
//   intervals (Activity Selection theorem). Same problem framing: "max
//   non-overlapping" intervals; "removed" is just n minus that.
//
// Subtle point — `s >= lastEnd` (not >):
//   The problem treats touching as non-overlap. If the spec said "[1,2]
//   and [2,3] overlap," use `s > lastEnd` instead.
//
// Time:  O(n log n)
// Space: O(1) extra (sort in place)
//
// Edge Cases:
//   - Empty or single interval  → 0
//   - All identical intervals    → n - 1 removals
//   - Already non-overlapping    → 0
//   - Negative endpoints         → sort handles it fine

/**
 * @param {number[][]} intervals
 * @returns {number}
 */
const eraseOverlapIntervals = (intervals) => {
  // your code here
};

console.log('=== LC #435 Non-overlapping Intervals ===\n');

console.log('Test 1:');
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
// Expected: 1

console.log('\nTest 2:');
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
// Expected: 2

console.log('\nTest 3 — touching only:');
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));
// Expected: 0

console.log('\nTest 4 — empty:');
console.log(eraseOverlapIntervals([]));
// Expected: 0
