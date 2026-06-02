// TODO: implement
// LC #253 — Meeting Rooms II
//
// Given an array `intervals` of meeting time intervals where
// intervals[i] = [start, end], return the MINIMUM number of conference
// rooms required.
//
// Example:
//   [[0,30],[5,10],[15,20]]   → 2
//   [[7,10],[2,4]]            → 1
//   [[1,5],[2,3],[4,6]]       → 2  ([1,5] runs the whole time; [2,3] and
//                                    [4,6] each need a room alongside)
//
// Approach 1 (min-heap of end times):
//   1. Sort by start time.
//   2. heap = min-heap of room end-times.
//   3. For each meeting [s, e]:
//        if heap not empty AND heap.peek() <= s:
//          heap.pop()                 // reuse that room
//        heap.push(e)
//   4. Return heap.size at the end.
//
// Approach 2 (sweep line — two sorted arrays):
//   starts = sorted starts; ends = sorted ends.
//   sPtr, ePtr = 0; rooms = 0; maxRooms = 0
//   while sPtr < n:
//     if starts[sPtr] < ends[ePtr]:
//       rooms++; sPtr++
//     else:
//       rooms--; ePtr++
//     maxRooms = max(maxRooms, rooms)
//   return maxRooms
//
//   Same as counting events at each "instant."
//
// Why these work:
//   The MAXIMUM number of CONCURRENT meetings at any moment IS the number
//   of rooms needed. Both approaches compute that max concurrency.
//
// Time:  O(n log n)
// Space: O(n)
//
// Edge Cases:
//   - Empty                 → 0
//   - Single meeting        → 1
//   - All meetings overlap  → n
//   - Back-to-back (end == next start) → no overlap → reuse room

/**
 * @param {number[][]} intervals
 * @returns {number}
 */
const minMeetingRooms = (intervals) => {
  // your code here
};

console.log('=== LC #253 Meeting Rooms II ===\n');

console.log('Test 1:');
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
// Expected: 2

console.log('\nTest 2:');
console.log(minMeetingRooms([[7, 10], [2, 4]]));
// Expected: 1

console.log('\nTest 3:');
console.log(minMeetingRooms([[1, 5], [2, 3], [4, 6]]));
// Expected: 2

console.log('\nTest 4 — empty:');
console.log(minMeetingRooms([]));
// Expected: 0
