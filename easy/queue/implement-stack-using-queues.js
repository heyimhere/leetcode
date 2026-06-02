// TODO: implement
// LC #225 — Implement Stack Using Queues
//
// Implement a LIFO stack with only the queue primitives push (to back),
// peek (front), pop (from front), and size/empty.
//
// Operations:
//   push(x)  → push x to the stack
//   pop()    → remove and return the top
//   top()    → return the top
//   empty()  → boolean
//
// Approach 1 (single queue, push is O(n)):
//   On push(x):
//     n = queue.size
//     queue.enqueue(x)
//     rotate: for i in 0..n-1 do queue.enqueue(queue.dequeue())
//   This puts x at the FRONT of the queue, so dequeue acts like pop.
//
//   push: O(n), pop: O(1), top: O(1).
//
// Approach 2 (two queues):
//   On push(x): enqueue to q2, then drain q1 into q2; swap q1, q2.
//   Same asymptotics, more bookkeeping.
//
// Why single-queue is fine:
//   The two-queue version doesn't beat it asymptotically, and one queue
//   is simpler. Worth knowing both for follow-up questions.
//
// Time:  push O(n), pop/top/empty O(1)
// Space: O(n)
//
// Edge Cases:
//   - pop / top on empty                → undefined behavior (LC says won't
//                                          be called when empty)
//   - Many pushes then many pops        → reverse insertion order

class MyStack {
  constructor() {
    // your code here
  }

  /**
   * @param {number} x
   * @returns {void}
   */
  push(x) {
    // your code here
  }

  /**
   * @returns {number}
   */
  pop() {
    // your code here
  }

  /**
   * @returns {number}
   */
  top() {
    // your code here
  }

  /**
   * @returns {boolean}
   */
  empty() {
    // your code here
  }
}

console.log('=== LC #225 Implement Stack Using Queues ===\n');

const s = new MyStack();
s.push(1);
s.push(2);
console.log('top:', s.top()); // Expected: 2
console.log('pop:', s.pop()); // Expected: 2
console.log('empty:', s.empty()); // Expected: false
console.log('pop:', s.pop()); // Expected: 1
console.log('empty:', s.empty()); // Expected: true
