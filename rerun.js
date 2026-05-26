// coding interview sample (Karat-style)

/**
 * Badge Access Logs
 *
 * Problem Summary:
 * A secure office building requires employees to badge in when they enter
 * and badge out when they leave. Given a list of badge events, find:
 *   1. Employees currently INSIDE the building (entered but never exited,
 *      or whose last action was an enter without a matching exit).
 *   2. TAILGATERS — employees who exited without ever entering, or whose
 *      sequence of badges is mismatched (e.g. two exits in a row).
 *
 * This is a classic Karat / Roblox / Asana onsite question. It tests how
 * cleanly you can model state with a HashMap and reason about real-world
 * edge cases (someone forgot to badge out, double-tap, etc.).
 *
 * Input: Array of [employeeId, action] pairs, where action ∈ {"enter", "exit"}.
 *        Events are in chronological order.
 * Output:
 *   - { stillInside: string[], tailgaters: string[] }
 *
 * Example:
 *   Input: [
 *     ["Alice", "enter"],
 *     ["Bob",   "enter"],
 *     ["Alice", "exit"],
 *     ["Charlie","exit"],   // Charlie never entered — tailgater
 *     ["Bob",   "exit"],
 *     ["Dana",  "enter"]    // Dana entered, never exited — still inside
 *   ]
 *   Output: { stillInside: ["Dana"], tailgaters: ["Charlie"] }
 *
 * Approach:
 *   Track each employee's current state in a Map: employeeId → "in" | "out".
 *   - Default state is "out" (we assume no one is inside before the log starts).
 *   - On "enter":
 *       if already "in"   → mismatched (tailgate-style, double enter)
 *       else              → set to "in"
 *   - On "exit":
 *       if state is "out" → tailgater (exited without entering)
 *       else              → set to "out"
 *   At the end, anyone whose state is "in" is still inside the building.
 *
 * Why a Map:
 *   - O(1) lookup and update per event.
 *   - Lets us track each employee independently regardless of event order.
 *
 * Time:  O(E)  — single pass through events
 * Space: O(N)  — one entry per unique employee
 *
 * Edge Cases:
 *   - Employee enters twice in a row without exiting → flag as mismatch
 *   - Employee exits without ever entering          → tailgater
 *   - Empty input                                   → both lists empty
 *   - Same employee appears many times              → final state is what matters
 */

/**
 * Audits a list of badge events and returns who's still inside and who tailgated.
 * @param {[string, "enter" | "exit"][]} events
 * @returns {{ stillInside: string[], tailgaters: string[] }}
 */
const auditBadgeLogs = (events) => {
  // state: employeeId -> 'in' | 'out'
  // We use semantic state values ('in'/'out') instead of the raw action
  // strings ('enter'/'exit'). It's a small thing, but it makes the
  // branching read as "is this person currently inside?" rather than
  // "what was their last action?" — same data, clearer intent.
  const state = new Map();

  // Set, not array — if the same person tailgates twice we still only
  // want to report them once. (Judgment call; you could keep duplicates
  // if you wanted every incident.)
  const tailgaters = new Set();

  for (const [worker, action] of events) {
    // ?? 'out' — if we've never seen this worker, treat them as outside.
    // This is what makes "Charlie exits without ever entering" detectable:
    // current = 'out', action = 'exit' → tailgate.
    const current = state.get(worker) ?? 'out';

    // Two tailgate conditions, mirrored:
    //   already inside + tries to enter   → double-enter
    //   already outside + tries to exit   → ghost exit
    if (action === 'enter' && current === 'in')  tailgaters.add(worker);
    if (action === 'exit'  && current === 'out') tailgaters.add(worker);

    // Update state regardless — the badge event happened, log reflects it.
    // (A real badge reader still records the swipe even if the door beeps.)
    state.set(worker, action === 'enter' ? 'in' : 'out');
  }

  // Final sweep: whoever ended in 'in' state is still in the building.
  const stillInside = [];
  for (const [worker, s] of state) {
    if (s === 'in') stillInside.push(worker);
  }

  return { stillInside, tailgaters: [...tailgaters] };
};

// ============ Test Cases ============

console.log('=== Badge Access Logs ===\n');

console.log('Test 1 — Mixed normal + edge cases:');
console.log(auditBadgeLogs([
  ['Alice', 'enter'],
  ['Bob', 'enter'],
  ['Alice', 'exit'],
  ['Charlie', 'exit'],   // tailgater
  ['Bob', 'exit'],
  ['Dana', 'enter'],     // still inside
]));
// Expected: { stillInside: ['Dana'], tailgaters: ['Charlie'] }

console.log('\nTest 2 — Everyone properly badged out:');
console.log(auditBadgeLogs([
  ['A', 'enter'], ['A', 'exit'],
  ['B', 'enter'], ['B', 'exit'],
]));
// Expected: { stillInside: [], tailgaters: [] }

console.log('\nTest 3 — Double enter (mismatch):');
console.log(auditBadgeLogs([
  ['A', 'enter'],
  ['A', 'enter'],   // already inside — flag as tailgater/mismatch
  ['A', 'exit'],
]));
// Expected: A flagged as a mismatch (your choice how to surface it)

console.log('\nTest 4 — Empty log:');
console.log(auditBadgeLogs([]));
// Expected: { stillInside: [], tailgaters: [] }

console.log('\nTest 5 — Only tailgaters:');
console.log(auditBadgeLogs([
  ['X', 'exit'],
  ['Y', 'exit'],
]));
// Expected: { stillInside: [], tailgaters: ['X', 'Y'] }
