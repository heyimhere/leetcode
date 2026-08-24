// LC #338 — Counting Bits   [Easy]   Pattern: Bit Manipulation
//
// Given an integer n, return an array ans of length n + 1 where, for each i
// from 0 to n, ans[i] is the number of 1s in the binary representation of i.
//
// Example 1:
//   Input:  n = 2
//   Output: [0,1,1]        (0, 1, 10)
// Example 2:
//   Input:  n = 5
//   Output: [0,1,1,2,1,2]  (0, 1, 10, 11, 100, 101)
// Example 3:
//   Input:  n = 0
//   Output: [0]
//
// Constraints:
//   0 <= n <= 10^5
//
// Follow-up: can you fill the array in a single pass without counting the
// bits of each number from scratch?

const countBits = (n) => {

};

console.log(countBits(2)); // expected: [0,1,1]
console.log(countBits(5)); // expected: [0,1,1,2,1,2]
console.log(countBits(0)); // expected: [0]
