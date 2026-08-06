// LC #150 — Evaluate Reverse Polish Notation
//
// You are given an array of tokens representing an arithmetic expression in
// Reverse Polish Notation (RPN), also called postfix notation. Return the
// expression's value.
//
// In RPN, an operator comes AFTER its two operands:
//   ["2", "1", "+", "3", "*"] -> (2 + 1) * 3 -> 9
//   ["4", "13", "5", "/", "+"] -> 4 + (13 / 5) -> 6
//
// Division truncates toward zero, so:
//   13 / 5   -> 2
//   -13 / 5  -> -2
//
// Intuition:
//   Scan from left to right and keep a stack of values waiting to be used.
//   Numbers are operands, so push them. An operator needs the two MOST RECENT
//   values, which are exactly the two values on top of the stack:
//
//     ["2", "1", "+"]
//        push 2 -> [2]
//        push 1 -> [2, 1]
//        '+'    -> pop right=1, pop left=2, push 2+1 -> [3]
//
//   The pop order matters for '-' and '/': the value popped first is the RIGHT
//   operand because it appeared later in the expression.
//
// Approach (stack):
//   - For each token:
//       - if it is a number, push it onto the stack
//       - otherwise pop right, then left; compute left <op> right; push result
//   - The single remaining stack value is the answer.
//
// Complexity:
//   Time:  O(n) — each token is processed once.
//   Space: O(n) — the stack can hold all operands in the worst case.

const evalRPN = (tokens) => {
  const stack = [];
  const operators = new Set(['+', '-', '*', '/']);

  for (const token of tokens) {
    if (!operators.has(token)) {
      stack.push(Number(token));
      continue;
    }

    const right = stack.pop();
    const left = stack.pop();

    if (token === '+') {
      stack.push(left + right);
    } else if (token === '-') {
      stack.push(left - right);
    } else if (token === '*') {
      stack.push(left * right);
    }
    // Math.trunc matches LeetCode's required "truncate toward zero" division.
    else {
      stack.push(Math.trunc(left / right));
    }
  }

  return stack[0];
};

console.log('["2","1","+","3","*"]       ->', evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log('["4","13","5","/","+"]          ->', evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log('["10","6","9","3","+","-11","*","/","*","17","+","5","+"] ->', evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22
console.log('["-13","5","/"]                ->', evalRPN(['-13', '5', '/'])); // -2
