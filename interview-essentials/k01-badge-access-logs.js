// Karat-style — Badge Access Logs   [Medium]   Pattern: Hashmap / State Tracking
//
// A secure office building requires employees to badge IN when they enter
// and badge OUT when they leave.
//
// Given a chronologically ordered list of [employeeId, action] events, where
// action is "enter" or "exit", return two lists:
//   stillInside  employees whose last badge was an enter with no matching exit
//   tailgaters   employees whose badge sequence is inconsistent — an exit with
//                no prior enter, or two enters in a row
//
// Assume nobody is inside the building before the log begins.
// Each list should contain an employee at most once.
//
// Example 1:
//   Input: [
//     ["Alice",   "enter"],
//     ["Bob",     "enter"],
//     ["Alice",   "exit"],
//     ["Charlie", "exit"],
//     ["Bob",     "exit"],
//     ["Dana",    "enter"]
//   ]
//   Output: { stillInside: ["Dana"], tailgaters: ["Charlie"] }
//
// Example 2:
//   Input: [["Eve","enter"], ["Eve","enter"], ["Eve","exit"]]
//   Output: { stillInside: [], tailgaters: ["Eve"] }
//
// Example 3:
//   Input: []
//   Output: { stillInside: [], tailgaters: [] }
//
// Follow-up the interviewer usually asks: what if the log is not sorted?

const badgeAccess = (events) => {

};

console.log(badgeAccess([
  ['Alice', 'enter'],
  ['Bob', 'enter'],
  ['Alice', 'exit'],
  ['Charlie', 'exit'],
  ['Bob', 'exit'],
  ['Dana', 'enter'],
])); // expected: { stillInside: ["Dana"], tailgaters: ["Charlie"] }

console.log(badgeAccess([['Eve', 'enter'], ['Eve', 'enter'], ['Eve', 'exit']]));
// expected: { stillInside: [], tailgaters: ["Eve"] }

console.log(badgeAccess([])); // expected: { stillInside: [], tailgaters: [] }
