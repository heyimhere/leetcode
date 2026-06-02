// TODO: implement
// LC #622 — Design Circular Queue
//
// Implement a fixed-capacity circular queue:
//   MyCircularQueue(k)        — capacity k
//   enQueue(v) → boolean      — false if full
//   deQueue()  → boolean      — false if empty
//   Front()    → number       — -1 if empty
//   Rear()     → number       — -1 if empty
//   isEmpty()  → boolean
//   isFull()   → boolean
//
// Example (k = 3):
//   enQueue(1) → true
//   enQueue(2) → true
//   enQueue(3) → true
//   enQueue(4) → false        // full
//   Rear()     → 3
//   isFull()   → true
//   deQueue()  → true
//   enQueue(4) → true
//   Rear()     → 4
//
// Approach (fixed-size array + head/tail indices + size):
//   data: Array(k); head = 0; tail = -1; size = 0
//
//   enQueue(v):
//     if size === k → false
//     tail = (tail + 1) % k
//     data[tail] = v; size++
//     return true
//
//   deQueue():
//     if size === 0 → false
//     head = (head + 1) % k
//     size--
//     return true
//
//   Front(): size === 0 ? -1 : data[head]
//   Rear():  size === 0 ? -1 : data[tail]
//
// Why store size (not derive from head/tail):
//   With wrap-around, "full" and "empty" can look identical (head === tail).
//   Tracking size explicitly disambiguates.
//
// Time:  O(1) per op
// Space: O(k)
//
// Edge Cases:
//   - enQueue when full        → false; state unchanged
//   - deQueue when empty       → false; state unchanged
//   - Wrap-around              → mod arithmetic handles it
//   - k = 1                    → capacity-one queue still works

class MyCircularQueue {
  /**
   * @param {number} k
   */
  constructor(k) {
    // your code here
  }

  /**
   * @param {number} value
   * @returns {boolean}
   */
  enQueue(value) {
    // your code here
  }

  /**
   * @returns {boolean}
   */
  deQueue() {
    // your code here
  }

  /**
   * @returns {number}
   */
  Front() {
    // your code here
  }

  /**
   * @returns {number}
   */
  Rear() {
    // your code here
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    // your code here
  }

  /**
   * @returns {boolean}
   */
  isFull() {
    // your code here
  }
}

console.log('=== LC #622 Design Circular Queue ===\n');

const q = new MyCircularQueue(3);
console.log(q.enQueue(1)); // Expected: true
console.log(q.enQueue(2)); // Expected: true
console.log(q.enQueue(3)); // Expected: true
console.log(q.enQueue(4)); // Expected: false
console.log(q.Rear());     // Expected: 3
console.log(q.isFull());   // Expected: true
console.log(q.deQueue());  // Expected: true
console.log(q.enQueue(4)); // Expected: true
console.log(q.Rear());     // Expected: 4
