// TODO: implement
// coding interview sample (Karat-style)

/**
 * Earliest Meeting Slot
 *
 * Problem Summary:
 *   Given each employee's busy intervals, a work day [dayStart, dayEnd],
 *   and a required meeting DURATION D, return the EARLIEST free interval
 *   of length ≥ D that fits within the work day and is free for everyone.
 *   Return null if no such slot exists.
 *
 *   Part 2 (extension): return ALL such slots (≥ D), or the K earliest.
 *
 *   This is the natural follow-up after `calendar-free-slots.js` — the
 *   "now schedule a meeting" twist. Common at Karat-administered onsites
 *   (Roblox, Robinhood, etc.).
 *
 * Input:
 *   calendars: Array<Array<[number, number]>>
 *   dayStart, dayEnd: number
 *   duration: number   (minutes; same unit as calendar values)
 * Output:
 *   [number, number] | null   the start/end of the earliest fit
 *
 * Example:
 *   calendars = [
 *     [[9,10],[11,12]],
 *     [[10,11]],
 *     [[13,14]]
 *   ]
 *   dayStart = 9, dayEnd = 17, duration = 2
 *   → [14, 16]   (the first ≥ 2-hour free window starts at 14)
 *
 * Approach:
 *   1. Reuse freeSlots(...) from `calendar-free-slots.js`.
 *   2. Walk free slots in order; first one with (end - start) >= duration:
 *        return [start, start + duration].
 *   3. None? → null.
 *
 * Why "start + duration" (not the whole slot):
 *   The meeting need only RESERVE `duration` minutes, even if the slot is
 *   bigger. Returning the precise window is more useful than the loose one.
 *
 * Time:  O(N log N + S)   S = number of free slots
 * Space: O(S)
 *
 * Edge Cases:
 *   - Duration > work day length        → null
 *   - No free slots at all              → null
 *   - Multiple free slots of right size → return the earliest
 *   - Duration === slot length          → fits exactly
 */

/**
 * @param {Array<Array<[number, number]>>} calendars
 * @param {number} dayStart
 * @param {number} dayEnd
 * @param {number} duration
 * @returns {[number, number] | null}
 */
const earliestSlot = (calendars, dayStart, dayEnd, duration) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Earliest Meeting Slot ===\n');

console.log('Test 1 — duration 2:');
console.log(earliestSlot([
  [[9, 10], [11, 12]],
  [[10, 11]],
  [[13, 14]],
], 9, 17, 2));
// Expected: [14, 16]

console.log('\nTest 2 — duration too long:');
console.log(earliestSlot([
  [[9, 17]],
], 9, 17, 1));
// Expected: null

console.log('\nTest 3 — duration fits early:');
console.log(earliestSlot([], 9, 17, 3));
// Expected: [9, 12]
