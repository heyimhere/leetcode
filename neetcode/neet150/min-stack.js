// LC #155 — Min Stack
//
// Design a stack that supports push, pop, top, and retrieving the minimum
// element — and every one of those operations must run in O(1) time.
//
//   MinStack()      initialize the object
//   push(val)       push val onto the stack
//   pop()           remove the element on top of the stack
//   top()           return the element on top of the stack
//   getMin()        return the minimum element currently in the stack
//
// Example:
//   push(-2), push(0), push(-3)
//   getMin() -> -3
//   pop()
//   top()    -> 0
//   getMin() -> -2
//
// Intuition:
//   A normal stack already gives O(1) push / pop / top. The ONLY hard part is
//   getMin() in O(1) — scanning the whole stack for the smallest value would be
//   O(n), which the problem forbids.
//
//   Observation: the current minimum can ONLY change at a push or a pop. So
//   instead of recomputing it, we CARRY it. Keep a second "min stack" that runs
//   in lockstep with the main stack. At each level it stores the minimum of
//   everything at or below that level:
//
//     push -2 ->  main [-2]        min [-2]
//     push  0 ->  main [-2, 0]     min [-2, -2]   // 0 didn't beat -2
//     push -3 ->  main [-2, 0, -3] min [-2, -2, -3]
//     getMin  ->  min top = -3
//     pop     ->  main [-2, 0]     min [-2, -2]   // -3 gone, old min restored
//     top     ->  0
//     getMin  ->  min top = -2
//
//   Because the min stack pops in lockstep, popping the current minimum
//   automatically re-exposes the PREVIOUS minimum underneath it — no rescan.
//   The value we push onto the min stack is Math.min(val, currentMin), so the
//   top of the min stack is always the answer to getMin().
//
// Approach (two parallel stacks):
//   - push(val): push val to main. Push min(val, minStack top) to minStack
//                (if minStack is empty, just push val).
//   - pop():     pop both stacks together.
//   - top():     return main stack top.
//   - getMin():  return minStack top.
//
// Alternate approaches:
//   1) Store PAIRS on one stack: push [val, minSoFar] instead of two arrays.
//      Same idea, one structure — a common variant. Included as MinStackB below.
//   2) Single stack + a separate min variable: works until you pop the current
//      min, at which point you've lost the previous min and can't restore it in
//      O(1). Fails — which is exactly why the second stack (or pairs) is needed.
//
// Complexity:
//   Time:  O(1) for every operation — each is a constant push/pop/read.
//   Space: O(n) — the min stack doubles the storage, one entry per element.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    }
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Alternate: a single stack of [value, minSoFar] pairs.
class MinStackB {
  constructor() {
    this.stack = [];
  }

  push(val) {
    const min = this.stack.length === 0
      ? val
      : Math.min(val, this.stack[this.stack.length - 1][1]);
    this.stack.push([val, min]);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1][0];
  }

  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}

const s = new MinStack();
s.push(-2);
s.push(0);
s.push(-3);
console.log('getMin ->', s.getMin()); // -3
s.pop();
console.log('top    ->', s.top());    // 0
console.log('getMin ->', s.getMin()); // -2
