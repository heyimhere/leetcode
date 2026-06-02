// TODO: implement
// LC #171 — Excel Sheet Column Number
//
// Given a string columnTitle that represents an Excel column heading,
// return its corresponding column number.
//
// Example:
//   "A"   → 1
//   "B"   → 2
//   "Z"   → 26
//   "AB"  → 28      (A * 26 + B = 1 * 26 + 2)
//   "ZY"  → 701
//
// Approach (base-26 conversion, but 1-indexed):
//   result = 0
//   for each char c in columnTitle:
//     digit = c.charCodeAt(0) - 'A'.charCodeAt(0) + 1     // 1..26
//     result = result * 26 + digit
//   return result
//
// Why "+ 1":
//   Excel uses 1-indexed digits (no zero). So A=1, ..., Z=26, then AA=27,
//   not 26. This off-by-one is the only twist vs. standard base conversion.
//
// Time:  O(L) where L = title length
// Space: O(1)
//
// Edge Cases:
//   - Single char        → 1..26
//   - "AAA"              → 703 (= 26² + 26 + 1)
//   - Long title (e.g. "FXSHRXW" for 2147483647) → still fast and within
//                                                    JS Number range
//   - Lowercase input    → spec says uppercase; you may want to defensively
//                          .toUpperCase()

/**
 * @param {string} columnTitle
 * @returns {number}
 */
const titleToNumber = (columnTitle) => {
  // your code here
};

console.log('=== LC #171 Excel Sheet Column Number ===\n');

console.log('Test 1 — A:');
console.log(titleToNumber('A'));
// Expected: 1

console.log('\nTest 2 — AB:');
console.log(titleToNumber('AB'));
// Expected: 28

console.log('\nTest 3 — ZY:');
console.log(titleToNumber('ZY'));
// Expected: 701

console.log('\nTest 4 — AAA:');
console.log(titleToNumber('AAA'));
// Expected: 703
