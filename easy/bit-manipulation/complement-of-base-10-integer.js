// TODO: implement
// LC #1009 — Complement of Base 10 Integer  (aka LC #476 — Number Complement)
//
// The "complement" of a non-negative integer is the number you get by
// flipping every bit of its binary representation (no leading zeros).
//
// Example:
//   n = 5   (binary: 101)  → 2   (binary: 010)
//   n = 7   (binary: 111)  → 0   (binary: 000)
//   n = 10  (binary: 1010) → 5   (binary: 0101)
//   n = 0   → 1   (special: 0's complement is 1)
//
// Approach (build a mask of the same width and XOR):
//   1. Find the bit-width of n: count how many bits until n >>= 1 hits 0.
//      Or: mask = 1; while (mask <= n) mask <<= 1; then mask -= 1.
//   2. Return n ^ mask.
//
//   The mask is a string of 1s as long as n's bit representation. XOR with
//   it flips exactly those bits and leaves the higher (zero) bits zero —
//   which is the no-leading-zeros complement.
//
// Why not just `~n`:
//   `~n` flips ALL 32 bits, leaving a sea of leading 1s. The problem wants
//   ONLY the bits that appear in the natural representation flipped.
//
// Alternative: walk bit by bit, flip into a result. Same idea, more code.
//
// Time:  O(log n)
// Space: O(1)
//
// Edge Cases:
//   - n = 0    → 1   (special — handle explicitly or via mask logic)
//   - n = 1    → 0
//   - powers of 2 (e.g. 8 = 1000) → all-zeros except for one bit (here 7 = 0111)

/**
 * @param {number} n
 * @returns {number}
 */
const bitwiseComplement = (n) => {
  // your code here
};

console.log('=== LC #1009 Complement of Base 10 Integer ===\n');

console.log('Test 1:');
console.log(bitwiseComplement(5));
// Expected: 2

console.log('\nTest 2:');
console.log(bitwiseComplement(7));
// Expected: 0

console.log('\nTest 3:');
console.log(bitwiseComplement(10));
// Expected: 5

console.log('\nTest 4 — zero:');
console.log(bitwiseComplement(0));
// Expected: 1
