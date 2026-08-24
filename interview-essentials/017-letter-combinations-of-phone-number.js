// LC #17 — Letter Combinations of a Phone Number   [Medium]   Pattern: Backtracking
//
// Given a string of digits from 2-9, return every letter combination the
// number could spell on an old telephone keypad. Return them in any order.
//
// The digit-to-letter mapping is the standard one:
//   2 -> abc    3 -> def    4 -> ghi    5 -> jkl
//   6 -> mno    7 -> pqrs   8 -> tuv    9 -> wxyz
//
// The digit 1 maps to no letters and does not appear in the input.
//
// Example 1:
//   Input:  digits = "23"
//   Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:
//   Input:  digits = ""
//   Output: []
// Example 3:
//   Input:  digits = "2"
//   Output: ["a","b","c"]
//
// Constraints:
//   0 <= digits.length <= 4
//   digits[i] is a digit in the range 2-9.

const letterCombinations = (digits) => {

};

console.log(letterCombinations('23'));
// expected: ["ad","ae","af","bd","be","bf","cd","ce","cf"] (any order)
console.log(letterCombinations(''));  // expected: []
console.log(letterCombinations('2')); // expected: ["a","b","c"]
