// TODO: implement
// LC #4 — Median of Two Sorted Arrays
//
// Given two sorted arrays `nums1` (size m) and `nums2` (size n), return the
// MEDIAN of the combined sorted array. The overall run time MUST be O(log(m+n)).
//
// Example:
//   nums1 = [1, 3], nums2 = [2]
//   merged = [1, 2, 3], median = 2.0
//
//   nums1 = [1, 2], nums2 = [3, 4]
//   merged = [1, 2, 3, 4], median = (2 + 3) / 2 = 2.5
//
// Naïve approach (NOT acceptable, but useful baseline):
//   Merge the two arrays like in merge-sort's merge step → O(m + n).
//   Then index the middle. Fails the time constraint but is a great sanity
//   check during development.
//
// Approach (binary search on partition — the canonical O(log min(m, n))):
//
//   Idea: we want to split the COMBINED arrays into a LEFT half (smaller
//   numbers) and a RIGHT half (larger numbers) such that:
//     - |LEFT| = |RIGHT|   (or |LEFT| = |RIGHT| + 1 if total is odd)
//     - max(LEFT) <= min(RIGHT)
//
//   Once we find such a split:
//     - Even total → median = (max(LEFT) + min(RIGHT)) / 2
//     - Odd  total → median = max(LEFT)
//
//   Pick the SMALLER array (call it A) and binary-search over its split point:
//     - Let i = partition index in A; then j = halfTotal - i in B.
//     - Compare A[i-1] vs B[j] and B[j-1] vs A[i].
//         - If A[i-1] > B[j]: i is too big, search left.
//         - If B[j-1] > A[i]: i is too small, search right.
//         - Else: found the partition.
//   Use ±Infinity sentinels when i or j is at array boundaries.
//
//   Searching only the smaller array keeps it O(log min(m, n)).
//
// Why partitioning works:
//   The median is defined entirely by "how many elements fall on each side."
//   You don't need to know the exact merged array — only where the dividing
//   line is. Binary search on the partition index in the smaller array
//   makes the algorithm logarithmic.
//
// Time:  O(log(min(m, n)))
// Space: O(1)
//
// Edge Cases:
//   - One array empty                       → median of the other
//   - Both arrays size 1                    → average them
//   - All of A is less than all of B        → partition lands at boundary
//   - Duplicates spanning the partition     → ±Infinity sentinels still work
//   - Different sizes                       → always binary-search the smaller

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  // your code here
};

console.log('=== LC #4 Median of Two Sorted Arrays ===\n');

console.log('Test 1 — Odd total:');
console.log(findMedianSortedArrays([1, 3], [2]));
// Expected: 2

console.log('\nTest 2 — Even total:');
console.log(findMedianSortedArrays([1, 2], [3, 4]));
// Expected: 2.5

console.log('\nTest 3 — One empty:');
console.log(findMedianSortedArrays([], [1]));
// Expected: 1

console.log('\nTest 4 — One empty, even:');
console.log(findMedianSortedArrays([], [1, 2]));
// Expected: 1.5

console.log('\nTest 5 — Disjoint:');
console.log(findMedianSortedArrays([1, 2, 3], [10, 11, 12]));
// Expected: (3 + 10) / 2 = 6.5

console.log('\nTest 6 — Identical:');
console.log(findMedianSortedArrays([1, 2, 3], [1, 2, 3]));
// Expected: 2

console.log('\nTest 7 — Different sizes, with negatives:');
console.log(findMedianSortedArrays([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]));
// Expected: 3   (sorted merged length 11, median is the 6th element)
