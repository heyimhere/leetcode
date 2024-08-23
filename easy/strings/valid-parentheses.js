const string = '()[]{}';
// function isValid(s) {
//   let stack = [];
//   for(let i of s) {
//     if(i === '(' || i === '{' || i === '[') {
//       stack.push(i);
//     } else {
//       if(!stack.length ||
//         (i === ')' && stack[stack.length - 1] !== '(') ||
//         (i === '}' && stack[stack.length - 1] !== '{') || 
//         (i === ']' && stack[stack.length - 1] !== '[')) {
//           return false;
//         }
//         stack.pop();
//     }
//   }
//   return !stack.length;
// }
//
// coding interview sample

// const isValid = (s) => {
//   const stack = [];

//   for(let i of s) {
//     if(i === '(' || i === '{' || i === '[') {
//       stack.push(i);
//     } else {
//       if(!stack.length || 
//       (i === ')' && stack[stack.length - 1] !== '(') ||
//       (i === '}' && stack[stack.length - 1] !== '{') ||
//       (i === ']' && stack[stack.length - 1] !== '[')) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return !stack.length;
// }

// const isValid = (s) => {
//   const stack = [];

//   for(let i of s) {
//     if(i === '(' || i === '{' || i === '[') {
//       stack.push(i);
//     } else {
//       if(!stack.length || 
//       (i === ')' && stack[stack.length - 1] !== '(') ||
//       (i === '}' && stack[stack.length - 1] !== '{') ||
//       (i === ']' && stack[stack.length - 1] !== '[')) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return !stack.length;
// }

// const isValid = (s) => {
//   const stack = [];

//   for(let i of s) {
//     if(i === '(' || i === '{' || i === '[') {
//       stack.push(i);
//     } else {
//       if(!stack.length ||
//         (i === ')' && stack[stack.length - 1] !== '(') ||
//         (i === '}' && stack[stack.length - 1] !== '{') ||
//         (i === ']' && stack[stack.length - 1] !== '[')
//       ) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return !stack.length;
// }

const isValid = (s) => {
  const stack = [];

  for(let i of s) {
    if(i === '(' || i === '{' || i === '[') {
      stack.push(i);
    } else {
      if(!stack.length ||
      (i === ')' && stack[stack.length - 1] !== '(') ||
      (i === '}' && stack[stack.length - 1] !== '{') || 
      (i === ']' && stack[stack.length - 1] !== '[')) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
}

console.log('is valid', isValid(string));
