// LC #155 — Min Stack   [Medium]   Pattern: Stack / Design
//
// Design a stack that supports push, pop, top, and retrieving the minimum
// element — every operation in constant time.
//
// Implement the MinStack class:
//   MinStack()      initializes the stack
//   push(val)       pushes val onto the stack
//   pop()           removes the element on top
//   top()           returns the element on top
//   getMin()        returns the minimum element currently in the stack
//
// Methods pop, top and getMin are always called on a non-empty stack.
//
// Example:
//   Input:  ["MinStack","push","push","push","getMin","pop","top","getMin"]
//           [[],[-2],[0],[-3],[],[],[],[]]
//   Output: [null,null,null,null,-3,null,0,-2]
//
// Constraints:
//   -2^31 <= val <= 2^31 - 1
//   At most 3 * 10^4 calls will be made in total.

class MinStack {
  constructor() {

  }

  push(val) {

  }

  pop() {

  }

  top() {

  }

  getMin() {

  }
}

const ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
console.log(ms.getMin()); // expected: -3
ms.pop();
console.log(ms.top());    // expected: 0
console.log(ms.getMin()); // expected: -2
