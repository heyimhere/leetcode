// TODO: implement
// LC #346 — Moving Average from Data Stream
//
// Design a class that computes the moving average of the last `size`
// integers in a stream.
//
// Operations:
//   constructor(size)
//   next(val) → returns the avg of the last min(size, count) values
//
// Example (size = 3):
//   next(1)  → 1            (just [1])
//   next(10) → 5.5          ([1,10] / 2)
//   next(3)  → 4.667        ([1,10,3] / 3)
//   next(5)  → 6            ([10,3,5] / 3)   ← 1 falls out of the window
//
// Approach (circular buffer or queue + running sum):
//   queue = []   (or a fixed-size circular array)
//   sum = 0
//   next(val):
//     if queue.length === size:
//       sum -= queue.shift()
//     queue.push(val)
//     sum += val
//     return sum / queue.length
//
// Why a running sum:
//   Recomputing the sum every call would be O(size). Maintaining a
//   running sum lets next() run in O(1).
//
// Circular buffer variant: pre-allocate a fixed-size array of length
// `size`, track a single index and a count. Same O(1) per op with no
// allocation churn.
//
// Time:  O(1) per next
// Space: O(size)
//
// Edge Cases:
//   - First `size` calls → divide by current count, not `size`
//   - size = 1            → always the latest value
//   - Repeated values    → still works; sum subtraction handles it

class MovingAverage {
  /**
   * @param {number} size
   */
  constructor(size) {
    // your code here
  }

  /**
   * @param {number} val
   * @returns {number}
   */
  next(val) {
    // your code here
  }
}

console.log('=== LC #346 Moving Average from Data Stream ===\n');

const m = new MovingAverage(3);
console.log(m.next(1));  // Expected: 1
console.log(m.next(10)); // Expected: 5.5
console.log(m.next(3));  // Expected: ~4.667
console.log(m.next(5));  // Expected: 6
