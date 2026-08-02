const isValid = (s) => {
  const pairs = { '}': '{', ']': '[', ')': '(' };
  const stack = [];

  for (const c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[c]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log('"()"      ->', isValid('()'));       // true
console.log('"()[]{}"  ->', isValid('()[]{}'));   // true
console.log('"(]"      ->', isValid('(]'));       // false
console.log('"([)]"    ->', isValid('([)]'));     // false
console.log('"([{}])"  ->', isValid('([{}])'));   // true
console.log('"("       ->', isValid('('));        // false
console.log('")"       ->', isValid(')'));        // false

