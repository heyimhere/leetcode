// LC #20 — Valid Parentheses   [Easy]   Pattern: Stack
//
// Given a string s containing only the characters '(', ')', '{', '}', '['
// and ']', determine whether the string is valid.
//
// A string is valid when every open bracket is closed by the SAME type of
// bracket, and brackets are closed in the correct order. Every closing
// bracket must have a matching open bracket before it.
//
// Example 1:
//   Input:  s = "()"
//   Output: true
// Example 2:
//   Input:  s = "()[]{}"
//   Output: true
// Example 3:
//   Input:  s = "(]"
//   Output: false
// Example 4:
//   Input:  s = "([)]"
//   Output: false
// Example 5:
//   Input:  s = "{[]}"
//   Output: true
//
// Constraints:
//   1 <= s.length <= 10^4
//   s consists only of the six bracket characters listed above.

const isValid = (s) => {

};

console.log(isValid('()'));     // expected: true
console.log(isValid('()[]{}')); // expected: true
console.log(isValid('(]'));     // expected: false
console.log(isValid('([)]'));   // expected: false
console.log(isValid('{[]}'));   // expected: true
