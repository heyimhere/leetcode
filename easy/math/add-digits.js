// TODO: implement
// LC #258 — Add Digits
//
// Given an integer num, repeatedly add its digits until the result has only
// one digit. Return that single digit (the "digital root").
//
// Example:
//   num = 38 → 2     (3 + 8 = 11 → 1 + 1 = 2)
//   num = 0  → 0
//   num = 9  → 9
//
// Approach 1 (iterative loop):
//   while num >= 10:
//     sum = 0
//     while num > 0: sum += num % 10; num = Math.floor(num / 10)
//     num = sum
//   return num
//
// Approach 2 (digital root formula — O(1)):
//   if num === 0     → 0
//   if num % 9 === 0 → 9
//   else             → num % 9
//
//   Equivalent one-liner:
//     return 1 + ((num - 1) % 9)   for num > 0; handle 0 separately.
//
// Why the modular formula works:
//   The digital root of n equals n mod 9 (with 0 special-cased and
//   multiples of 9 returning 9 instead of 0). This is because each decimal
//   digit place k contributes 10^k ≡ 1 (mod 9), so the sum-of-digits is
//   congruent to the original number mod 9.
//
// Time:  Approach 1: O(log₁₀ num × digit-count). Approach 2: O(1).
// Space: O(1)
//
// Edge Cases:
//   - num = 0          → 0
//   - num is one digit → itself
//   - num is large (e.g. 1_000_000) → still O(1) with the modular trick
//   - multiples of 9 (e.g. 18, 27, 99) → 9

/**
 * @param {number} num
 * @returns {number}
 */
const addDigits = (num) => {
  // your code here
};

console.log('=== LC #258 Add Digits ===\n');

console.log('Test 1 — 38:');
console.log(addDigits(38));
// Expected: 2

console.log('\nTest 2 — 0:');
console.log(addDigits(0));
// Expected: 0

console.log('\nTest 3 — 9:');
console.log(addDigits(9));
// Expected: 9

console.log('\nTest 4 — 99:');
console.log(addDigits(99));
// Expected: 9
