// TODO: implement
// LC #191 — Number of 1 Bits (Hamming Weight)
//
// Given a positive integer n, return the number of set bits (1 bits) in its
// binary representation. Also known as Hamming weight or popcount.
//
// Example:
//   n = 11        → binary 1011        → 3 set bits
//   n = 128       → binary 10000000    → 1 set bit
//   n = 2147483645 → binary 1111...1101 → 30 set bits
//
// Approach 1 — bit-by-bit scan:
//   count = 0
//   while n > 0:
//     count += n & 1     // peek the low bit
//     n >>>= 1           // shift right, unsigned
//   return count
//
//   Note: in JS, use `>>>` (unsigned shift) not `>>` (signed) so we don't
//   sign-extend negative-looking numbers.
//
// Approach 2 — Brian Kernighan's trick (faster: O(set bits) not O(32)):
//   count = 0
//   while n !== 0:
//     n &= (n - 1)       // clear the LOWEST set bit
//     count++
//   return count
//
//   Why `n & (n - 1)` clears the lowest set bit:
//     Subtracting 1 flips the lowest 1 to 0 and turns every bit BELOW it
//     from 0 to 1. ANDing the original wipes the lowest 1 AND zeros out
//     all those new 1s below.
//     Example: n = 0b10100 (20), n - 1 = 0b10011 (19), n & (n-1) = 0b10000 (16).
//
// Approach 3 — built-in:
//   n.toString(2).split('').filter(c => c === '1').length
//   Quick and dirty; not what an interviewer wants but useful for sanity checks.
//
// Time:
//   - Approach 1: O(32) = O(1)
//   - Approach 2: O(k) where k = number of set bits
// Space: O(1)
//
// Edge Cases:
//   - n = 0                            → 0
//   - n = 1                            → 1
//   - n = 2^31 - 1 (all 31 bits set)   → 31
//   - JS gotcha: numbers are 32-bit when using bitwise ops; >>> ensures
//     we treat n as unsigned

/**
 * @param {number} n
 * @returns {number}
 */
const hammingWeight = (n) => {
  // your code here
};

console.log('=== LC #191 Number of 1 Bits ===\n');

console.log('Test 1 — n = 11 (0b1011):');
console.log(hammingWeight(11));
// Expected: 3

console.log('\nTest 2 — n = 128 (0b10000000):');
console.log(hammingWeight(128));
// Expected: 1

console.log('\nTest 3 — n = 0:');
console.log(hammingWeight(0));
// Expected: 0

console.log('\nTest 4 — n = 1:');
console.log(hammingWeight(1));
// Expected: 1

console.log('\nTest 5 — n = 2147483645 (30 set bits):');
console.log(hammingWeight(2147483645));
// Expected: 30
