// TODO: implement
// LC #231 — Power of Two
//
// Given an integer n, return true if it is a power of two (1, 2, 4, 8, 16, ...).
//
// Example:
//   n = 1   → true   (2^0)
//   n = 16  → true   (2^4)
//   n = 3   → false
//   n = 0   → false  (0 has no exponent — not a power of two)
//   n = -2  → false  (negative numbers can't be powers of two)
//
// Approach 1 — bitwise one-liner (the elegant one):
//   A power of two has EXACTLY ONE set bit.
//   So:  n > 0  AND  (n & (n - 1)) === 0
//
//   Why `n & (n - 1) === 0` only when n has one set bit:
//     If n = 0b00010000, then n - 1 = 0b00001111, and n & (n-1) = 0.
//     If n has two or more set bits, subtracting 1 leaves at least one
//     set bit untouched (a higher one), so the AND is nonzero.
//     Example: n = 0b00010100, n-1 = 0b00010011, n & (n-1) = 0b00010000 ≠ 0.
//
// Approach 2 — count set bits and check === 1:
//   Use hammingWeight (see number-of-1-bits.js) and check it equals 1.
//   Works but slower than the one-liner.
//
// Approach 3 — repeated division by 2:
//   while n % 2 === 0: n /= 2
//   return n === 1
//   O(log n) — fine but verbose vs the bitwise trick.
//
// Time:  O(1)  for the bitwise approach
// Space: O(1)
//
// Edge Cases:
//   - n = 1                → true (2^0)
//   - n = 0                → false (the `n > 0` guard catches this)
//   - n < 0                → false (same guard)
//   - n = INT_MAX          → not a power of two, but watch for overflow
//                            (in JS, regular numbers are safe up to 2^53)

/**
 * @param {number} n
 * @returns {boolean}
 */
const isPowerOfTwo = (n) => {
  // your code here
};

console.log('=== LC #231 Power of Two ===\n');

console.log('Test 1 — n = 1:');
console.log(isPowerOfTwo(1));
// Expected: true

console.log('\nTest 2 — n = 16:');
console.log(isPowerOfTwo(16));
// Expected: true

console.log('\nTest 3 — n = 3:');
console.log(isPowerOfTwo(3));
// Expected: false

console.log('\nTest 4 — n = 0:');
console.log(isPowerOfTwo(0));
// Expected: false

console.log('\nTest 5 — n = -16:');
console.log(isPowerOfTwo(-16));
// Expected: false

console.log('\nTest 6 — n = 1073741824 (2^30):');
console.log(isPowerOfTwo(1073741824));
// Expected: true
