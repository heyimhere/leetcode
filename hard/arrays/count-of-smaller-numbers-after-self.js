// TODO: implement
// LC #315 — Count of Smaller Numbers After Self
//
// Given an integer array `nums`, return an array `counts` where counts[i]
// is the number of nums[j] (with j > i) that are STRICTLY LESS than nums[i].
//
// Example:
//   [5,2,6,1]   → [2,1,1,0]
//   [-1]        → [0]
//   [-1,-1]     → [0,0]
//
// Approach 1 (modified Merge Sort — the classic O(n log n) trick):
//   Sort indices instead of values to remember original positions.
//   During merge, every time we take from the right half BEFORE all of the
//   left's smaller values are exhausted, those left-half elements have
//   collected a "smaller-after-self" credit.
//
//   Wrap each value in (value, originalIndex). Sort by value while
//   accumulating into counts[origIdx].
//
// Approach 2 (Binary Indexed Tree / Fenwick on sorted ranks):
//   1. Compress: replace each value with its rank in the sorted distinct
//      order.
//   2. Iterate right-to-left. For each rank r:
//        counts[i] = BIT.query(r - 1)    // # of smaller seen so far
//        BIT.update(r, +1)
//
// Approach 3 (BST with subtree size):
//   Insert right-to-left into a self-balancing BST; each insert reports
//   the count of nodes with smaller value already there.
//
// Why merge sort works:
//   "How many elements to my right are smaller than me" maps cleanly onto
//   inversions counted in merge sort.
//
// Time:  O(n log n)
// Space: O(n)
//
// Edge Cases:
//   - Empty array        → []
//   - Single element     → [0]
//   - All equal          → all 0
//   - Sorted ascending   → all 0
//   - Sorted descending  → counts = [n-1, n-2, ..., 0]

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const countSmaller = (nums) => {
  // your code here
};

console.log('=== LC #315 Count of Smaller Numbers After Self ===\n');

console.log('Test 1:');
console.log(countSmaller([5, 2, 6, 1]));
// Expected: [2,1,1,0]

console.log('\nTest 2:');
console.log(countSmaller([-1]));
// Expected: [0]

console.log('\nTest 3:');
console.log(countSmaller([-1, -1]));
// Expected: [0,0]

console.log('\nTest 4 — sorted desc:');
console.log(countSmaller([4, 3, 2, 1]));
// Expected: [3,2,1,0]
