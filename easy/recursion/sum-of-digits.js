// TODO: implement
// Sum of Digits  (recursion warm-up)
//
// Given a non-negative integer n, return the sum of its decimal digits.
// (Equivalent to LC #258 "Add Digits" but stopping after one pass — Add
// Digits asks you to fold repeatedly until a single digit remains.)
//
// Example:
//   38      → 11   (3 + 8)
//   12345   → 15
//   0       → 0
//   100     → 1
//
// Approach (recursion on n / 10):
//   sumDigits(n):
//     if n === 0 → 0
//     return (n % 10) + sumDigits(Math.floor(n / 10))
//
// Why it terminates:
//   Every recursive call reduces n by at least a factor of 10. After at
//   most ⌈log10(n)⌉ + 1 calls we hit 0 and unwind.
//
// Alternative (iterative):
//   sum = 0; while n > 0: sum += n % 10; n = Math.floor(n / 10);
//   return sum.
//
// Time:  O(log n)  (number of digits)
// Space: O(log n) recursive; O(1) iterative
//
// Edge Cases:
//   - 0           → 0
//   - Single digit (e.g. 7) → that digit
//   - Trailing zeros (e.g. 100) → leading digit only
//   - Negative n  → spec depends; this stub assumes non-negative

/**
 * @param {number} n
 * @returns {number}
 */
const sumDigits = (n) => {
  // your code here
};

console.log('=== Sum of Digits (recursion warm-up) ===\n');

console.log('Test 1 — 38:');
console.log(sumDigits(38));
// Expected: 11

console.log('\nTest 2 — 12345:');
console.log(sumDigits(12345));
// Expected: 15

console.log('\nTest 3 — 0:');
console.log(sumDigits(0));
// Expected: 0

console.log('\nTest 4 — 100:');
console.log(sumDigits(100));
// Expected: 1
