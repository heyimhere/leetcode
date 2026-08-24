// Karat-style — Badge Access Part 2: Tailgating Detection   [Medium]   Pattern: Sorting / Sliding Pointer
//
// Follow-up to the badge access log problem. Now every event carries a
// timestamp and a flag saying whether the badge swipe was valid:
//
//   { employee, time, action, validBadge }
//
// where time is in seconds, action is "enter" or "exit", and validBadge is
// false when the person walked through without a working badge.
//
// Someone who enters WITHOUT a valid badge within windowSec seconds of a
// valid-badge enter is said to have tailgated that person.
//
// Return every such pairing as { tailgater, host, time }, where time is the
// tailgater's entry time. If more than one valid enter is in range, pair
// with the CLOSEST one in time. Events are not guaranteed to be sorted.
//
// Example 1:
//   Input: events = [
//     { employee: "Alice",   time: 100, action: "enter", validBadge: true  },
//     { employee: "Bob",     time: 100, action: "enter", validBadge: false },
//     { employee: "Charlie", time: 500, action: "enter", validBadge: false }
//   ], windowSec = 1
//   Output: [{ tailgater: "Bob", host: "Alice", time: 100 }]
//           (Charlie entered with no valid enter nearby)
//
// Example 2:
//   Input: events = [
//     { employee: "Dana", time: 10, action: "enter", validBadge: true },
//     { employee: "Eve",  time: 11, action: "enter", validBadge: false }
//   ], windowSec = 1
//   Output: [{ tailgater: "Eve", host: "Dana", time: 11 }]
//
// Example 3:
//   Input: events = [], windowSec = 1
//   Output: []
//
// Only "enter" events can produce a tailgating pair.

const findTailgaters = (events, windowSec = 1) => {

};

console.log(findTailgaters([
  { employee: 'Alice', time: 100, action: 'enter', validBadge: true },
  { employee: 'Bob', time: 100, action: 'enter', validBadge: false },
  { employee: 'Charlie', time: 500, action: 'enter', validBadge: false },
], 1)); // expected: [{ tailgater: "Bob", host: "Alice", time: 100 }]

console.log(findTailgaters([
  { employee: 'Dana', time: 10, action: 'enter', validBadge: true },
  { employee: 'Eve', time: 11, action: 'enter', validBadge: false },
], 1)); // expected: [{ tailgater: "Eve", host: "Dana", time: 11 }]

console.log(findTailgaters([], 1)); // expected: []
