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
};

const s = new MinStack();
s.push(-2);
s.push(0);
s.push(-3);
console.log('getMin ->', s.getMin()); // -3
s.pop();
console.log('top    ->', s.top());    // 0
console.log('getMin ->', s.getMin()); // -2
