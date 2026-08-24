// Karat-style — Manager Chain Part 2: Lowest Common Manager   [Medium]   Pattern: Trees / Hashmap
//
// You are given an org chart as a list of [employee, manager] pairs. Exactly
// one person has no manager — the CEO — and the structure forms a tree.
//
// Given two employees, return the LOWEST person in the chart who manages
// both of them, directly or indirectly. A person counts as managing
// themselves.
//
// Return null if either employee is not in the chart.
//
// Example:
//   pairs = [
//     ["Alice","CEO"],
//     ["Bob","Alice"],
//     ["Carol","Bob"],
//     ["Dan","Bob"],
//     ["Eve","Alice"]
//   ]
//
//   lowestCommonManager(pairs, "Carol", "Dan")   -> "Bob"
//   lowestCommonManager(pairs, "Carol", "Eve")   -> "Alice"
//   lowestCommonManager(pairs, "Carol", "Carol") -> "Carol"
//   lowestCommonManager(pairs, "Carol", "CEO")   -> "CEO"
//   lowestCommonManager(pairs, "Carol", "Zed")   -> null
//
// Follow-up: the interviewer may ask how you would handle thousands of
// repeated queries against the same org chart.

const lowestCommonManager = (pairs, a, b) => {

};

const org = [
  ['Alice', 'CEO'],
  ['Bob', 'Alice'],
  ['Carol', 'Bob'],
  ['Dan', 'Bob'],
  ['Eve', 'Alice'],
];

console.log(lowestCommonManager(org, 'Carol', 'Dan'));   // expected: "Bob"
console.log(lowestCommonManager(org, 'Carol', 'Eve'));   // expected: "Alice"
console.log(lowestCommonManager(org, 'Carol', 'Carol')); // expected: "Carol"
console.log(lowestCommonManager(org, 'Carol', 'CEO'));   // expected: "CEO"
console.log(lowestCommonManager(org, 'Carol', 'Zed'));   // expected: null
