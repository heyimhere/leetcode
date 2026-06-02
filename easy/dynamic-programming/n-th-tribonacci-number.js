// TODO: implement
// LC #1137 — N-th Tribonacci Number
//
// T(0) = 0, T(1) = 1, T(2) = 1.
// T(n) = T(n-1) + T(n-2) + T(n-3) for n ≥ 3.
//
// Example:
//   n = 4   → 4    (T: 0, 1, 1, 2, 4)
//   n = 25  → 1389537
//
// Approach (rolling triple):
//   if n === 0 → 0
//   if n <= 2 → 1
//   a, b, c = 0, 1, 1
//   for i in 3..n:
//     next = a + b + c
//     a, b, c = b, c, next
//   return c
//
// Why constant space:
//   Each term depends only on the previous three — keep a sliding window
//   of three, no need to remember the whole history.
//
// Alternative: matrix exponentiation, O(log n) — overkill for ~37 max
// (constraints in the LC version).
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - n = 0          → 0
//   - n = 1 or 2     → 1
//   - n = 37 (max in LC) → 2082876103, still safe in JS Number

/**
 * @param {number} n
 * @returns {number}
 */
const tribonacci = (n) => {
  // your code here
};

console.log('=== LC #1137 N-th Tribonacci Number ===\n');

console.log('Test 1:');
console.log(tribonacci(4));
// Expected: 4

console.log('\nTest 2:');
console.log(tribonacci(25));
// Expected: 1389537

console.log('\nTest 3 — n=0:');
console.log(tribonacci(0));
// Expected: 0

console.log('\nTest 4 — n=2:');
console.log(tribonacci(2));
// Expected: 1
