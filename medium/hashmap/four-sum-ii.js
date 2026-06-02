// TODO: implement
// LC #454 — 4Sum II
//
// Given four integer arrays A, B, C, D each of length n, return the number
// of tuples (i, j, k, l) such that A[i] + B[j] + C[k] + D[l] === 0.
//
// Example:
//   A = [1,2], B = [-2,-1], C = [-1,2], D = [0,2]   → 2
//     Tuples: (0,0,0,1) and (1,1,0,0)
//
// Approach (split-and-meet with HashMap):
//   1. Count sums of every (a, b) pair: ab[a+b] = count.
//   2. For every (c, d) pair, look up ab[-(c+d)] and add its count to the
//      answer.
//
//   Total complexity: O(n²) time and O(n²) space — much better than O(n^4)
//   brute force.
//
// Why split-and-meet:
//   With 4 sequences, the equation A[i] + B[j] === -(C[k] + D[l]) lets
//   us treat each side as a 2-sum-style lookup. The HashMap stores the
//   counts of all left-side sums so the right side can match in O(1).
//
// Compare to 4Sum (LC #18):
//   That problem requires choosing 4 elements from one array (unique
//   quadruples). This problem is about COUNTING tuples across separate
//   arrays, which makes it strictly a counting / hashing problem.
//
// Time:  O(n²)
// Space: O(n²)
//
// Edge Cases:
//   - Empty arrays    → 0
//   - Many ways to sum to 0  → counts multiply correctly
//   - Sum collisions across different (a,b) pairs handled via counts

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @returns {number}
 */
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  // your code here
};

console.log('=== LC #454 4Sum II ===\n');

console.log('Test 1:');
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
// Expected: 2

console.log('\nTest 2 — all zeros:');
console.log(fourSumCount([0], [0], [0], [0]));
// Expected: 1

console.log('\nTest 3 — no solutions:');
console.log(fourSumCount([1], [1], [1], [1]));
// Expected: 0
