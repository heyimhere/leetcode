// TODO: implement
// LC #295 — Find Median from Data Stream
//
// Design a class supporting:
//   addNum(num)      — append a number from the stream
//   findMedian()     — return the median of all numbers seen so far
//
// Example:
//   addNum(1); addNum(2); findMedian() → 1.5
//   addNum(3); findMedian() → 2
//
// Approach (TWO heaps — small (max-heap) + large (min-heap)):
//   small holds the lower half (max on top).
//   large holds the upper half (min on top).
//
//   addNum(n):
//     1. Push to small (max-heap of lower halves).
//     2. Move small.top to large.   // ensure small[top] <= large[top]
//     3. If large.size > small.size + 1 (or rebalance rule):
//          move large.top back to small.
//
//   findMedian():
//     if small.size === large.size → (small.top + large.top) / 2
//     else                         → top of the bigger heap
//
//   Maintain the invariant that sizes differ by at most 1, with `small`
//   the larger (or equal) heap.
//
// Why two heaps:
//   We need O(1) median access — the two tops give it directly. Inserts
//   are O(log n).
//
// Alternative: sorted multiset / order-statistic tree. Same big-O, more
// machinery in languages without native ordered sets.
//
// Time:  addNum O(log n);  findMedian O(1)
// Space: O(n)
//
// Edge Cases:
//   - findMedian before any addNum   → spec usually says won't happen
//   - All same value                 → median equals that value
//   - Negative numbers               → heaps work the same way
//   - Even vs odd total count        → handled by size comparison

class MedianFinder {
  constructor() {
    // your code here
  }

  /**
   * @param {number} num
   * @returns {void}
   */
  addNum(num) {
    // your code here
  }

  /**
   * @returns {number}
   */
  findMedian() {
    // your code here
  }
}

console.log('=== LC #295 Find Median from Data Stream ===\n');

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected: 1.5
mf.addNum(3);
console.log(mf.findMedian()); // Expected: 2
mf.addNum(4);
console.log(mf.findMedian()); // Expected: 2.5
