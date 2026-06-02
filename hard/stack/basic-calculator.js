// TODO: implement
// LC #224 — Basic Calculator
//
// Given a string s representing a math expression with +, -, parentheses,
// non-negative integers, and spaces, return its integer result. No * or /.
//
// Example:
//   "1 + 1"             → 2
//   " 2-1 + 2 "         → 3
//   "(1+(4+5+2)-3)+(6+8)" → 23
//   "- (3 + (4 + 5))"   → -12
//
// Approach (single-pass with a stack for sign-on-open-paren):
//   result = 0; sign = +1; i = 0
//   stack = []          // stores (resultSoFar, sign) at each '(' push
//
//   while i < n:
//     c = s[i]
//     if digit: parse the full integer; result += sign * num
//     elif '+': sign = +1
//     elif '-': sign = -1
//     elif '(':
//       stack.push(result); stack.push(sign)
//       result = 0; sign = +1
//     elif ')':
//       prevSign = stack.pop()
//       prevResult = stack.pop()
//       result = prevResult + prevSign * result
//     // skip spaces
//     i++
//   return result
//
// Why pushing (resultSoFar, sign) at '(' works:
//   Parenthesized expressions form a sub-problem with its OWN running
//   total. The CURRENT result is the OUTER prefix; the sign before '(' is
//   how the sub-problem's value combines with the outer when we close.
//
// Why no operator precedence needed:
//   Only + and -, and parens. Sign-tracking handles both. No * / means we
//   never break left-to-right addition order.
//
// Time:  O(n)
// Space: O(n) for the stack in deeply nested expressions
//
// Edge Cases:
//   - Leading '-' or '(-3)'     → handled by sign tracking
//   - Multi-digit numbers       → parse while digit
//   - Spaces anywhere           → skip
//   - Empty string              → 0

/**
 * @param {string} s
 * @returns {number}
 */
const calculate = (s) => {
  // your code here
};

console.log('=== LC #224 Basic Calculator ===\n');

console.log('Test 1:');
console.log(calculate('1 + 1'));
// Expected: 2

console.log('\nTest 2:');
console.log(calculate(' 2-1 + 2 '));
// Expected: 3

console.log('\nTest 3:');
console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
// Expected: 23

console.log('\nTest 4:');
console.log(calculate('- (3 + (4 + 5))'));
// Expected: -12
