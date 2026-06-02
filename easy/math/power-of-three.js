// TODO: implement
// LC #326 — Power of Three
//
// Given an integer n, return true iff n is a power of three (1, 3, 9, 27, ...).
//
// Example:
//   n = 27   → true   (3^3)
//   n = 0    → false
//   n = 9    → true
//   n = 45   → false
//
// Approach 1 (repeated division — the obvious one):
//   if n <= 0 → false
//   while n % 3 === 0: n /= 3
//   return n === 1
//
// Approach 2 (modular trick using max-32-bit power of 3):
//   The largest power of 3 representable in a 32-bit signed int is
//   3^19 = 1162261467. Any other power of 3 must divide it exactly.
//   return n > 0 && 1162261467 % n === 0
//   O(1) — slick interview answer.
//
// Approach 3 (log base 3 with tolerance):
//   const k = Math.log(n) / Math.log(3)
//   return n > 0 && Math.abs(k - Math.round(k)) < 1e-10
//   Use a tolerance because of floating-point imprecision. Risky in
//   interviews — prefer 1 or 2.
//
// Why Approach 2 works:
//   If n = 3^k for some 0 ≤ k ≤ 19, then 3^19 / 3^k = 3^(19-k), an integer.
//   If n is NOT a power of 3 (and n > 0), the division yields a remainder.
//
// Time:  O(log₃ n) for Approach 1; O(1) for Approach 2
// Space: O(1)
//
// Edge Cases:
//   - n = 1      → true (3^0)
//   - n = 0      → false
//   - n < 0      → false (powers of three are positive)
//   - n = INT_MAX → not a power of 3, but no overflow risk in JS

/**
 * @param {number} n
 * @returns {boolean}
 */
const isPowerOfThree = (n) => {
  // your code here
};

console.log('=== LC #326 Power of Three ===\n');

console.log('Test 1 — 27:');
console.log(isPowerOfThree(27));
// Expected: true

console.log('\nTest 2 — 0:');
console.log(isPowerOfThree(0));
// Expected: false

console.log('\nTest 3 — 45:');
console.log(isPowerOfThree(45));
// Expected: false

console.log('\nTest 4 — 1:');
console.log(isPowerOfThree(1));
// Expected: true

console.log('\nTest 5 — large power (3^19):');
console.log(isPowerOfThree(1162261467));
// Expected: true
