
const bracketMatcher = (str) => {
  const stack = [];

  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      stack.push(str[i]);
    } else if(str[i] === ')') {
      if(stack.length === 0) return 0;
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
};

console.log('bracket matcher', bracketMatcher('(hello (world))'));
