// LC #150 — Evaluate Reverse Polish Notation   [Medium]   Pattern: Stack
//
// You are given an array of strings tokens representing an arithmetic
// expression in Reverse Polish Notation (operators come AFTER their two
// operands). Evaluate it and return the result as an integer.
//
// Rules:
//   - Valid operators are "+", "-", "*" and "/".
//   - Each operand is either an integer or another expression.
//   - Division between two integers TRUNCATES TOWARD ZERO (so -7/2 is -3).
//   - The input is always a valid expression; no division by zero occurs.
//
// Example 1:
//   Input:  tokens = ["2","1","+","3","*"]
//   Output: 9        ((2 + 1) * 3)
// Example 2:
//   Input:  tokens = ["4","13","5","/","+"]
//   Output: 6        (4 + (13 / 5) = 4 + 2)
// Example 3:
//   Input:  tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//   Output: 22
//
// Constraints:
//   1 <= tokens.length <= 10^4
//   Each token is an operator or an integer in [-200, 200].

const evalRPN = (tokens) => {

};

console.log(evalRPN(['2', '1', '+', '3', '*']));      // expected: 9
console.log(evalRPN(['4', '13', '5', '/', '+']));     // expected: 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
// expected: 22
