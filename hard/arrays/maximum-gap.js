// TODO: implement
// LC #164 — Maximum Gap
//
// Given an unsorted array `nums`, return the maximum difference between
// SUCCESSIVE elements in its SORTED form. Required: O(n) time and space.
//
// Example:
//   [3,6,9,1]   → 3   (sorted: 1,3,6,9; gaps: 2,3,3 → max 3)
//   [10]        → 0
//   [1,1,1,1]   → 0
//
// Approach (Bucket Sort / Pigeonhole):
//   n elements, range [min, max]. By pigeonhole, the max gap is AT LEAST
//   ceil((max - min) / (n - 1)). Pick bucket size = that lower bound.
//
//   1. Compute min, max. If n < 2 or min === max → return 0.
//   2. bucketSize = max(1, ceil((max - min) / (n - 1)))
//      bucketCount = floor((max - min) / bucketSize) + 1
//   3. Buckets store (min, max) of values inside; one element per bucket
//      minimum, max also tracked.
//   4. For each num: idx = floor((num - min) / bucketSize); update bucket.
//   5. Walk buckets left to right. The max gap is
//      max(currentBucket.min - prevBucket.max) across non-empty buckets.
//
// Why this works:
//   Since the max gap is at least bucketSize, two SUCCESSIVE sorted values
//   can't both be in the SAME bucket (a gap within one bucket is at most
//   bucketSize - 1 < bucketSize). So the answer is found at BUCKET
//   BOUNDARIES, not interiors.
//
// Time:  O(n)
// Space: O(n)
//
// Edge Cases:
//   - n < 2            → 0
//   - All equal        → 0
//   - Negative + positive mix → handled by min-shifting
//   - One small + many big  → big gap dominates

/**
 * @param {number[]} nums
 * @returns {number}
 */
const maximumGap = (nums) => {
  // your code here
};

console.log('=== LC #164 Maximum Gap ===\n');

console.log('Test 1:');
console.log(maximumGap([3, 6, 9, 1]));
// Expected: 3

console.log('\nTest 2 — single:');
console.log(maximumGap([10]));
// Expected: 0

console.log('\nTest 3 — all equal:');
console.log(maximumGap([1, 1, 1, 1]));
// Expected: 0

console.log('\nTest 4:');
console.log(maximumGap([100, 3, 2, 1]));
// Expected: 97
