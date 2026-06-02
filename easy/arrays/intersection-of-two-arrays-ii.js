// TODO: implement
// LC #350 — Intersection of Two Arrays II
//
// Given two arrays `nums1` and `nums2`, return their intersection. Each
// element in the result should appear AS MANY TIMES as it shows in BOTH
// arrays (i.e. take the multiplicity-wise min). Result order doesn't matter.
//
// Example:
//   nums1 = [1,2,2,1], nums2 = [2,2]      → [2,2]
//   nums1 = [4,9,5],   nums2 = [9,4,9,8,4]→ [4,9]
//
// Approach (HashMap of counts):
//   1. Build a Map of counts for the SMALLER array (memory win).
//   2. Walk the larger array. For each element, if its count in the map > 0,
//      push it to the result and decrement the count.
//
// Why decrement:
//   Ensures we don't over-pick. Two 2s in nums1 ∩ two 2s in nums2 → two 2s
//   in output. Two 2s in nums1 ∩ one 2 in nums2 → one 2.
//
// Alternative: sort both, then two-pointer merge. O((n+m) log) time but
// O(1) extra space (if you can mutate). Good follow-up for sorted/streaming.
//
// Time:  O(n + m)
// Space: O(min(n, m))
//
// Edge Cases:
//   - No common elements         → []
//   - One array empty            → []
//   - Identical arrays           → return a copy of either
//   - Duplicates only in one     → don't include them

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
const intersect = (nums1, nums2) => {
  // your code here
};

console.log('=== LC #350 Intersection of Two Arrays II ===\n');

console.log('Test 1:');
console.log(intersect([1, 2, 2, 1], [2, 2]));
// Expected: [2,2]

console.log('\nTest 2:');
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// Expected: [4,9] (any order)

console.log('\nTest 3 — disjoint:');
console.log(intersect([1, 2, 3], [4, 5, 6]));
// Expected: []

console.log('\nTest 4 — empty:');
console.log(intersect([], [1, 2, 3]));
// Expected: []
