// TODO: implement
// coding interview sample (Karat-style)

/**
 * Calendar Busy Slots
 *
 * Problem Summary:
 *   Given each employee's calendar as a list of (start, end) intervals,
 *   compute the combined BUSY time across ALL employees. Overlapping
 *   slots merge into a single interval.
 *
 *   Part 2 (extension): given an additional "work day" range [dayStart,
 *   dayEnd], also return the FREE slots within that window where EVERYONE
 *   is available (see `calendar-free-slots.js`).
 *
 *   This is the classic Karat "merge intervals across employees" question.
 *   Tests interval merging plus careful multi-input handling.
 *
 * Input:
 *   calendars: Array<Array<[number, number]>>   (each employee's intervals)
 * Output:
 *   [number, number][]   merged busy ranges, sorted by start
 *
 * Example:
 *   calendars = [
 *     [[9,11], [13,14]],     // employee A
 *     [[10,12], [13,15]],    // employee B
 *     [[16,18]]              // employee C
 *   ]
 *   → [[9,12], [13,15], [16,18]]
 *
 * Approach (sort + sweep):
 *   1. Flatten all intervals into one list.
 *   2. Sort by START.
 *   3. Sweep: maintain a current [s, e]. For each next [ns, ne]:
 *        if ns <= e → e = max(e, ne)
 *        else → push current; start fresh
 *      Push the last current.
 *
 * Why this works:
 *   After sorting by start, any new interval that doesn't extend the
 *   current run must START a new run (nothing earlier overlaps it).
 *
 * Alternative (sweep-line events):
 *   Emit (start, +1), (end, -1) events; sort by time; slice when the
 *   "active count" returns to 0. Useful for variants that need "how many
 *   concurrent meetings" etc.
 *
 * Time:  O(N log N) where N = total intervals across all employees
 * Space: O(N)
 *
 * Edge Cases:
 *   - All calendars empty           → []
 *   - Single calendar               → merged copy of its intervals
 *   - Touching intervals [9,11],[11,12] → merge into [9,12]
 *   - Fully contained intervals     → outer survives
 */

/**
 * @param {Array<Array<[number, number]>>} calendars
 * @returns {Array<[number, number]>}
 */
const busySlots = (calendars) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Calendar Busy Slots ===\n');

console.log('Test 1:');
console.log(busySlots([
  [[9, 11], [13, 14]],
  [[10, 12], [13, 15]],
  [[16, 18]],
]));
// Expected: [[9,12],[13,15],[16,18]]

console.log('\nTest 2 — touching:');
console.log(busySlots([
  [[9, 11]],
  [[11, 12]],
]));
// Expected: [[9,12]]

console.log('\nTest 3 — empty:');
console.log(busySlots([]));
// Expected: []

console.log('\nTest 4 — one employee:');
console.log(busySlots([[[8, 9], [10, 11]]]));
// Expected: [[8,9],[10,11]]
