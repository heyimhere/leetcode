const string = "()[]{}";

const isValid = (s) => {
  const stack = [];

  for (let i of s) {
    if (i === "(" || i === "{" || i === "[") {
      stack.push(i);
    } else {
      if (
        !stack.length ||
        (i === ")" && stack[stack.length - 1] !== "(") ||
        (i === "{" && stack[stack.length - 1] !== "}") ||
        (i === "[" && stack[stack.length - 1] !== "]")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};

console.log("is valid", isValid(string));

const isValidMapping = (str) => {
  const stack = [];

  const mapping = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let single of str) {
    if (single === "(" || single === "{" || single === "[") {
      stack.push(single);
    } else {
      if (stack.pop() !== mapping[single]) {
        return false;
      }
    }
  }

  return !stack.length;
};

console.log("is valid mapping", isValidMapping(string));
