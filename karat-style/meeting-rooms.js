// TODO: implement
// coding interview sample (Karat-style)

/**
 * Meeting Rooms I & II
 *
 * Problem Summary:
 * You're given a list of meetings, each as [start, end] (end exclusive).
 * Build two utilities:
 *   1. canAttendAllMeetings(intervals)
 *      → return true if a single person can attend every meeting
 *        without conflict, false otherwise.
 *      (LeetCode #252)
 *   2. minMeetingRooms(intervals)
 *      → return the minimum number of conference rooms required
 *        to host all the meetings.
 *      (LeetCode #253)
 *
 * Example:
 *   intervals = [[0,30],[5,10],[15,20]]
 *   canAttendAllMeetings → false  (0–30 overlaps with both others)
 *   minMeetingRooms      → 2      (the [0,30] meeting needs its own room)
 *
 *   intervals = [[7,10],[2,4]]
 *   canAttendAllMeetings → true   (no overlap)
 *   minMeetingRooms      → 1
 *
 * Approach (canAttendAllMeetings):
 *   Sort by start time. Walk pairs and check whether the next meeting
 *   starts before the previous one ends. If any overlap → false.
 *
 * Approach (minMeetingRooms — two pointers / sweep line):
 *   Idea: at any moment, the number of rooms in use = number of meetings
 *   that have started but not yet ended.
 *
 *   - Build a sorted `starts[]` and sorted `ends[]`.
 *   - Two pointers, `s` (next-start) and `e` (next-end).
 *   - Walk all starts in order. For each start:
 *       - If it begins BEFORE the next end → need a new room (rooms++).
 *       - Else → an old meeting ended in time, reuse its room (e++).
 *   - Track the running max.
 *
 *   Alternative: min-heap of end times. Push each meeting's end. If the
 *   next start ≥ heap top, pop (reuse room). Heap size = rooms in use.
 *
 * Why sort:
 *   We need events in chronological order to "play" the timeline forward.
 *
 * Time:
 *   - canAttendAllMeetings: O(n log n) for sort
 *   - minMeetingRooms:      O(n log n) for sort (heap variant: O(n log n) too)
 * Space:
 *   - canAttendAllMeetings: O(1) extra
 *   - minMeetingRooms:      O(n) for starts/ends arrays (or heap)
 *
 * Edge Cases:
 *   - Empty list                          → true / 0
 *   - One meeting                         → true / 1
 *   - Adjacent meetings [1,5],[5,10]      → no conflict (end is exclusive)
 *   - All meetings same time              → all overlap; rooms = n
 */

/**
 * @param {number[][]} intervals  array of [start, end]
 * @returns {boolean}
 */
const canAttendAllMeetings = (intervals) => {
  // your code here
};

/**
 * @param {number[][]} intervals  array of [start, end]
 * @returns {number}
 */
const minMeetingRooms = (intervals) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Meeting Rooms I & II ===\n');

console.log('Test 1 — Conflicting meetings:');
console.log(canAttendAllMeetings([[0, 30], [5, 10], [15, 20]]));
// Expected: false

console.log('\nTest 2 — Non-conflicting:');
console.log(canAttendAllMeetings([[7, 10], [2, 4]]));
// Expected: true

console.log('\nTest 3 — Adjacent (end is exclusive):');
console.log(canAttendAllMeetings([[1, 5], [5, 10]]));
// Expected: true

console.log('\nTest 4 — minRooms classic:');
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
// Expected: 2

console.log('\nTest 5 — minRooms all parallel:');
console.log(minMeetingRooms([[1, 5], [1, 5], [1, 5]]));
// Expected: 3

console.log('\nTest 6 — minRooms perfectly chained:');
console.log(minMeetingRooms([[1, 5], [5, 10], [10, 15]]));
// Expected: 1

console.log('\nTest 7 — Empty:');
console.log(canAttendAllMeetings([]));
console.log(minMeetingRooms([]));
// Expected: true and 0
