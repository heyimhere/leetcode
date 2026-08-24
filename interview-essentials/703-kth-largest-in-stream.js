// LC #703 — Kth Largest Element in a Stream   [Easy]   Pattern: Heap / Design
//
// Design a class that tracks the kth largest value in a stream of numbers.
// Note this is the kth largest in SORTED ORDER, not the kth distinct value.
//
// Implement the KthLargest class:
//   KthLargest(k, nums)  initializes the object with k and an initial stream
//   add(val)             appends val to the stream, then returns the element
//                        that is currently kth largest
//
// Example:
//   KthLargest(3, [4,5,8,2])
//   add(3)   -> 4
//   add(5)   -> 5
//   add(10)  -> 5
//   add(9)   -> 8
//   add(4)   -> 8
//
// Constraints:
//   1 <= k <= 10^4
//   0 <= nums.length <= 10^4
//   -10^4 <= nums[i], val <= 10^4
//   At most 10^4 calls will be made to add.
//   It is guaranteed there are at least k elements when add is called.

class KthLargest {
  constructor(k, nums) {

  }

  add(val) {

  }
}

const kl = new KthLargest(3, [4, 5, 8, 2]);
console.log(kl.add(3));  // expected: 4
console.log(kl.add(5));  // expected: 5
console.log(kl.add(10)); // expected: 5
console.log(kl.add(9));  // expected: 8
console.log(kl.add(4));  // expected: 8
