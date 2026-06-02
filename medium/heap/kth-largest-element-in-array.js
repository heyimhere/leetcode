// TODO: implement
// LC #215 — Kth Largest Element in an Array
//
// Given an integer array `nums` and an integer k, return the kth LARGEST
// element. Note: it's the kth largest in SORTED ORDER, NOT the kth distinct
// element.
//
// Example:
//   nums = [3,2,1,5,6,4], k = 2          → 5
//   nums = [3,2,3,1,2,4,5,5,6], k = 4    → 4
//
// Approach 1 (min-heap of size k):
//   for n of nums:
//     heap.push(n)
//     if heap.size > k → heap.pop()    // pop the smallest
//   return heap.peek()
//
//   Maintains the top-k seen so far. At the end the min of those IS the
//   kth largest overall.
//
// Approach 2 (Quickselect — average O(n)):
//   Partition around a pivot. If pivot's final index === n - k → return.
//   Else recurse into the side that contains the kth largest.
//
//   Worst case O(n²) with bad pivots; randomize for expected O(n).
//
// Approach 3 (Sort + index):
//   nums.sort((a, b) => a - b); return nums[n - k]
//   O(n log n) — simple but slower asymptotically than heap or quickselect.
//
// Time:
//   - Approach 1: O(n log k)
//   - Approach 2: O(n) average
//   - Approach 3: O(n log n)
// Space: O(k) heap; O(1) quickselect; O(1) sort
//
// Edge Cases:
//   - k = 1           → max element
//   - k = n           → min element
//   - Duplicates      → still counted by occurrence (NOT distinct-k)

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const findKthLargest = (nums, k) => {
  // your code here
};

console.log('=== LC #215 Kth Largest Element in Array ===\n');

console.log('Test 1:');
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// Expected: 5

console.log('\nTest 2 — duplicates count:');
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// Expected: 4

console.log('\nTest 3 — k=1:');
console.log(findKthLargest([1], 1));
// Expected: 1

console.log('\nTest 4 — k = n:');
console.log(findKthLargest([7, 6, 5, 4, 3, 2, 1], 7));
// Expected: 1
