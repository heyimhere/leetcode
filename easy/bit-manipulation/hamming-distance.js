// TODO: implement
// LC #461 — Hamming Distance
//
// The Hamming distance between two integers is the number of BIT POSITIONS
// at which the corresponding bits are different. Return that count.
//
// Example:
//   x = 1 (0001), y = 4 (0100)   → 2   (bits 0 and 2 differ)
//   x = 3 (011),  y = 1 (001)    → 1
//
// Approach (XOR + popcount):
//   1. diff = x ^ y          // bits set where x and y differ
//   2. count the number of set bits in diff:
//        a. Brian Kernighan trick:
//             count = 0
//             while diff: diff &= (diff - 1); count++
//           Each step clears the lowest set bit.
//        b. Or: shift-and-mask (loop 32 times, count diff & 1, shift).
//
// Why XOR:
//   XOR has the property "bit set iff inputs differ." So x ^ y is literally
//   a bitmask of all positions of disagreement; popcount counts them.
//
// Time:  O(set-bit count) for Kernighan; O(B) for fixed-width loops (B = 32)
// Space: O(1)
//
// Edge Cases:
//   - Same values         → 0
//   - One value is 0      → popcount(other)
//   - Negative numbers    → JS uses 32-bit twos-complement under `^`
//   - Very large values   → fine within 32-bit; if you want full 64-bit,
//                            use BigInt

/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const hammingDistance = (x, y) => {
  // your code here
};

console.log('=== LC #461 Hamming Distance ===\n');

console.log('Test 1:');
console.log(hammingDistance(1, 4));
// Expected: 2

console.log('\nTest 2:');
console.log(hammingDistance(3, 1));
// Expected: 1

console.log('\nTest 3 — same values:');
console.log(hammingDistance(7, 7));
// Expected: 0

console.log('\nTest 4 — one is zero:');
console.log(hammingDistance(0, 255));
// Expected: 8
