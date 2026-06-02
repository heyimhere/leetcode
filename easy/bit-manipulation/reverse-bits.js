// TODO: implement
// LC #190 — Reverse Bits
//
// Reverse the bits of a given 32-bit unsigned integer.
//
// Example:
//   n = 43261596 (0000 0010 1001 0100 0001 1110 1001 1100)
//   → 964176192 (0011 1001 0111 1000 0010 1001 0100 0000)
//   n = 4294967293 (1111...1111 1101)
//   → 3221225471 (1011 1111 ... 1111 1111)
//
// Approach 1 (shift-out / shift-in loop):
//   result = 0
//   for i in 0..31:
//     result = (result << 1) | (n & 1)
//     n >>>= 1
//   return result >>> 0   // unsigned 32-bit
//
//   We peel the lowest bit of n and graft it onto the bottom of result;
//   after 32 iterations, result is n reversed.
//
// Approach 2 (divide & conquer mask swap — O(log B)):
//   Swap adjacent bits, then 2-bit groups, 4-bit, 8-bit, 16-bit using
//   bit-magic masks (0x55555555, 0x33333333, 0x0F0F0F0F, ...).
//   Fastest in fixed-width words; classic interview impress.
//
// Why `>>> 0` at the end:
//   JS bitwise ops are SIGNED 32-bit. `>>> 0` reinterprets as unsigned so
//   the returned number matches the expected unsigned representation.
//
// Time:  O(B)  (B = 32). O(log B) for the mask-swap variant.
// Space: O(1)
//
// Edge Cases:
//   - n = 0                → 0
//   - n = all 1s (0xFFFFFFFF) → still 0xFFFFFFFF
//   - High bit set (negative when signed) → use unsigned shift

/**
 * @param {number} n  - treat as 32-bit unsigned
 * @returns {number}  - 32-bit unsigned reverse
 */
const reverseBits = (n) => {
  // your code here
};

console.log('=== LC #190 Reverse Bits ===\n');

console.log('Test 1:');
console.log(reverseBits(43261596));
// Expected: 964176192

console.log('\nTest 2:');
console.log(reverseBits(4294967293));
// Expected: 3221225471

console.log('\nTest 3 — zero:');
console.log(reverseBits(0));
// Expected: 0

console.log('\nTest 4 — all ones:');
console.log(reverseBits(0xFFFFFFFF));
// Expected: 4294967295  (still all ones)
