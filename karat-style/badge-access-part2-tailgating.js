// TODO: implement
// coding interview sample (Karat-style)

/**
 * Badge Access — Part 2 — Tailgating Detection
 *
 * This extends `badge-access-logs.js` (the Part 1 problem of finding
 * still-inside and unmatched tailgaters). Part 2 swaps a chronological log
 * of (employeeId, timestamp, action) for a timestamped log and asks a
 * subtler question: WHO tailgated WHOM?
 *
 * Definition for Part 2:
 *   "X tailgated Y" means X entered or exited WITHOUT badging, and slipped
 *   in DURING Y's badged event within a small window (e.g. ≤ 1 second).
 *   In log terms, X's badge swipe is MISSING but X appears physically
 *   adjacent to Y's swipe.
 *
 *   The simplified Karat variant: given timestamped (employee, action)
 *   events, return all (tailgater, host, time) tuples where two ENTER
 *   events fire within `windowSec` AND only one had a valid badge prior.
 *
 *   For the purpose of this stub we model it as: given events with a
 *   `validBadge` boolean per event, group enters that fall within
 *   `windowSec` of a previous valid-badge enter, and report the invalid
 *   one as the tailgater.
 *
 * Input:
 *   events: Array<{ employee: string, time: number, action: 'enter'|'exit', validBadge: boolean }>
 *   windowSec: number   default 1
 * Output:
 *   Array<{ tailgater: string, host: string, time: number }>
 *
 * Approach (sort + sliding pointer):
 *   1. Sort events by time.
 *   2. For each invalid-badge enter at time t, find the closest valid-badge
 *      enter within `windowSec`. Report that pair.
 *
 *   Alternative: keep a small queue of recent valid enters; for each new
 *   invalid enter, look at the back of the queue.
 *
 * Why this matters:
 *   The original part 1 only flagged people whose state was inconsistent
 *   (entered twice, exited without entering). Part 2 zooms in on the
 *   intent: piggybacking through a door that opens for someone else.
 *
 * Time:  O(N log N)
 * Space: O(N)
 *
 * Edge Cases:
 *   - No invalid entries           → []
 *   - Invalid enter with NO recent valid enter → list with host = null
 *   - Multiple tailgaters per host  → all listed
 *   - Tailgater also valid later   → no retroactive forgiveness
 */

/**
 * @param {Array<{employee: string, time: number, action: 'enter'|'exit', validBadge: boolean}>} events
 * @param {number} windowSec
 * @returns {Array<{tailgater: string, host: string | null, time: number}>}
 */
const detectTailgaters = (events, windowSec = 1) => {
  // your code here
};

// ============ Test Cases ============

console.log('=== Badge Access — Part 2 (Tailgating) ===\n');

const events = [
  { employee: 'Alice', time: 10.0, action: 'enter', validBadge: true },
  { employee: 'Mallory', time: 10.5, action: 'enter', validBadge: false },
  { employee: 'Bob', time: 60.0, action: 'enter', validBadge: true },
  { employee: 'Eve', time: 60.8, action: 'enter', validBadge: false },
  { employee: 'Eve', time: 120.0, action: 'enter', validBadge: false },
];

console.log('Test 1:');
console.log(detectTailgaters(events, 1));
// Expected:
// [
//   { tailgater: 'Mallory', host: 'Alice', time: 10.5 },
//   { tailgater: 'Eve',     host: 'Bob',   time: 60.8 },
//   { tailgater: 'Eve',     host: null,    time: 120.0 }   // no recent valid enter
// ]

console.log('\nTest 2 — no tailgaters:');
console.log(detectTailgaters([
  { employee: 'A', time: 1, action: 'enter', validBadge: true },
]));
// Expected: []
