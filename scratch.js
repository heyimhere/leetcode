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
    } else {
      stack.push(Math.trunc(left / right));
    }
  }

  return stack[0];
};

console.log('["2","1","+","3","*"]       ->', evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log('["4","13","5","/","+"]          ->', evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log('["10","6","9","3","+","-11","*","/","*","17","+","5","+"] ->', evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22
console.log('["-13","5","/"]                ->', evalRPN(['-13', '5', '/'])); // -2
