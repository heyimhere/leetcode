// TODO: implement
// coding interview sample (Karat-style)

/**
 * Calendar Free Slots (Common Availability)
 *
 * Problem Summary:
 *   Given each employee's busy intervals plus a shared work-day window
 *   [dayStart, dayEnd], return the FREE intervals during which EVERY
 *   employee is available.
 *
 *   Part 2 (extension): given a meeting duration D, return only the free
 *   slots of length ≥ D, or just the FIRST such slot. See
 *   `earliest-meeting-slot.js`.
 *
 *   Karat / Stripe / Doordash onsite classic. Same machinery as
 *   `calendar-busy-slots.js` plus an "invert against the work day" step.
 *
 * Input:
 *   calendars: Array<Array<[number, number]>>   (busy intervals per person)
 *   dayStart, dayEnd: number                    (the shared work day)
 * Output:
 *   [number, number][]   free intervals within [dayStart, dayEnd]
 *
 * Example:
 *   calendars = [
 *     [[9,10], [11,12]],
 *     [[10,11]],
 *     [[13,14]]
 *   ]
 *   dayStart = 9, dayEnd = 17
 *   → busy union: [[9,12],[13,14]]
 *   → free in [9,17]: [[12,13],[14,17]]
 *
 * Approach:
 *   1. Reuse busySlots(calendars) to get merged busy ranges.
 *   2. Walk those ranges and emit the GAPS within [dayStart, dayEnd]:
 *        prev = dayStart
 *        for each [s, e] in busy:
 *          if s > dayStart and s > prev → push [max(prev, dayStart), min(s, dayEnd)]
 *          prev = max(prev, e)
 *        if prev < dayEnd → push [prev, dayEnd]
 *
 * Why "invert against the work day":
 *   Free time is the complement of busy time inside the bounded work day.
 *   We clamp at dayStart / dayEnd to keep slots within the window.
 *
 * Time:  O(N log N)   N = total busy intervals
 * Space: O(N)
 *
 * Edge Cases:
 *   - No busy times                    → [[dayStart, dayEnd]]
 *   - Busy covers full day             → []
 *   - Busy starts before dayStart       → clip
 *   - Two adjacent busy ranges          → no free slot between (zero-length)
 *   - Empty work day (dayStart === dayEnd) → []
 */

/**
 * @param {Array<Array<[number, number]>>} calendars
 * @param {number} dayStart
 * @param {number} dayEnd
 * @returns {Array<[number, number]>}
 */
const freeSlots = (calendars, dayStart, dayEnd) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Calendar Free Slots ===\n');

console.log('Test 1:');
console.log(freeSlots([
  [[9, 10], [11, 12]],
  [[10, 11]],
  [[13, 14]],
], 9, 17));
// Expected: [[12,13],[14,17]]

console.log('\nTest 2 — no busy:');
console.log(freeSlots([], 9, 17));
// Expected: [[9,17]]

console.log('\nTest 3 — busy covers day:');
console.log(freeSlots([[[8, 18]]], 9, 17));
// Expected: []
