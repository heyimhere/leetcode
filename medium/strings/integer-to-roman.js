// TODO: implement
// LC #12 — Integer to Roman
//
// Given an integer in [1, 3999], convert it to its Roman numeral.
//
// Symbol Values:  I=1, V=5, X=10, L=50, C=100, D=500, M=1000.
// Subtractive forms: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900.
//
// Example:
//   3    → "III"
//   58   → "LVIII"
//   1994 → "MCMXCIV"
//
// Approach (greedy with a sorted value→symbol table):
//   pairs = [
//     [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],
//     [100,"C"],[90,"XC"],[50,"L"],[40,"XL"],
//     [10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]
//   ]
//
//   out = ''
//   for [v, sym] of pairs:
//     while num >= v: out += sym; num -= v
//   return out
//
// Why include the subtractive forms as table entries:
//   It makes the greedy strategy trivially correct. Without them you'd
//   have to handle 4, 9, 40, etc. as special cases.
//
// Why greedy works:
//   Roman numerals are constructed by always biting off the LARGEST
//   representable chunk first; the table is sorted descending, so the
//   greedy loop yields the canonical form.
//
// Time:  O(1)  (table is fixed; num is bounded by 3999)
// Space: O(1)
//
// Edge Cases:
//   - 1                → "I"
//   - 4, 9, 40, 90 etc → subtractive (covered by table)
//   - 3999             → "MMMCMXCIX" (max LC input)

/**
 * @param {number} num
 * @returns {string}
 */
const intToRoman = (num) => {
  // your code here
};

console.log('=== LC #12 Integer to Roman ===\n');

console.log('Test 1:');
console.log(intToRoman(3));
// Expected: 'III'

console.log('\nTest 2:');
console.log(intToRoman(58));
// Expected: 'LVIII'

console.log('\nTest 3:');
console.log(intToRoman(1994));
// Expected: 'MCMXCIV'

console.log('\nTest 4 — max:');
console.log(intToRoman(3999));
// Expected: 'MMMCMXCIX'
