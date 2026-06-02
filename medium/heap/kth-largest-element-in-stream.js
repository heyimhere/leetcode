// TODO: implement
// LC #703 — Kth Largest Element in a Stream
//
// Design a class that returns the kth largest element seen so far at every
// `add(val)` call.
//
//   constructor(k, nums)   — initialize with k and an initial array
//   add(val) → number       — append val, return the kth largest so far
//
// Example (k = 3):
//   init [4,5,8,2]
//   add(3)  → 4
//   add(5)  → 5
//   add(10) → 5
//   add(9)  → 8
//   add(4)  → 8
//
// Approach (min-heap of size k):
//   - Initialize heap with the initial nums; pop until size === k.
//   - add(val):
//       heap.push(val)
//       if heap.size > k → heap.pop()
//       return heap.peek()
//
// Why min-heap (not max):
//   The TOP of a size-k min-heap is the kth largest overall — exactly the
//   value we need to return. Popping the smallest keeps only the top-k.
//
// Why O(log k) per add:
//   Heap operations are O(log k). For large streams with small k this is
//   optimal — much better than re-sorting on every add.
//
// Time:  init O(n log k);  add O(log k)
// Space: O(k)
//
// Edge Cases:
//   - Initial array shorter than k       → heap grows until size === k
//   - val smaller than current top       → top unchanged; just discard
//   - Many adds equal to current kth     → top unchanged

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    // your code here
  }

  /**
   * @param {number} val
   * @returns {number}
   */
  add(val) {
    // your code here
  }
}

console.log('=== LC #703 Kth Largest Element in a Stream ===\n');

const kl = new KthLargest(3, [4, 5, 8, 2]);
console.log(kl.add(3));  // Expected: 4
console.log(kl.add(5));  // Expected: 5
console.log(kl.add(10)); // Expected: 5
console.log(kl.add(9));  // Expected: 8
console.log(kl.add(4));  // Expected: 8
