// TODO: implement
// coding interview sample (Karat-style)

/**
 * Meeting Rooms — Part 2 — Minimum Conference Rooms
 *
 * Companion file to `meeting-rooms.js`. After Part 1 (can a single person
 * attend all meetings) the Karat follow-up almost always is: what's the
 * MINIMUM number of conference rooms required so EVERY meeting can run?
 * Equivalent to LC #253.
 *
 * Input:
 *   intervals: Array<[start, end]>
 * Output:
 *   number  (peak concurrency)
 *
 * Example:
 *   [[0,30],[5,10],[15,20]]   → 2
 *   [[7,10],[2,4]]             → 1
 *   [[1,5],[2,3],[4,6]]        → 2
 *
 * Approach 1 (min-heap of end times):
 *   1. Sort by start time.
 *   2. heap of "this room frees at time …".
 *   3. For each meeting [s, e]:
 *        if heap not empty AND heap.peek() <= s → heap.pop() (reuse room)
 *        heap.push(e)
 *   4. heap.size at the end = answer.
 *
 * Approach 2 (sweep line — sorted starts + ends):
 *   starts.sort(); ends.sort()
 *   rooms = 0; maxRooms = 0; sPtr, ePtr = 0
 *   while sPtr < n:
 *     if starts[sPtr] < ends[ePtr]:
 *       rooms++; sPtr++
 *     else:
 *       rooms--; ePtr++
 *     maxRooms = max(maxRooms, rooms)
 *   return maxRooms
 *
 * Why these work:
 *   The minimum number of rooms equals the MAX concurrency at any instant.
 *   Both approaches compute that maximum.
 *
 * Time:  O(N log N)
 * Space: O(N)
 *
 * Edge Cases:
 *   - Empty                  → 0
 *   - Touching back-to-back  → no overlap; can reuse
 *   - All same interval      → length N requires N rooms
 *   - Single meeting         → 1
 */

/**
 * @param {number[][]} intervals
 * @returns {number}
 */
const minMeetingRooms = (intervals) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Meeting Rooms — Part 2 (Min Rooms) ===\n');

console.log('Test 1:');
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
// Expected: 2

console.log('\nTest 2:');
console.log(minMeetingRooms([[7, 10], [2, 4]]));
// Expected: 1

console.log('\nTest 3 — touching reuse:');
console.log(minMeetingRooms([[1, 5], [5, 10]]));
// Expected: 1

console.log('\nTest 4 — all concurrent:');
console.log(minMeetingRooms([[1, 10], [1, 10], [1, 10]]));
// Expected: 3
