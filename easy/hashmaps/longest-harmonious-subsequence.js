// TODO: implement
// LC #594 — Longest Harmonious Subsequence
//
// A "harmonious" array is one where max - min === 1 (exactly).
// Given an integer array `nums`, return the length of its LONGEST
// harmonious SUBSEQUENCE (elements need not be contiguous).
//
// Example:
//   [1,3,2,2,5,2,3,7]   → 5   (subsequence [3,2,2,2,3] uses 3s and 2s)
//   [1,2,3,4]           → 2   (any adjacent pair)
//   [1,1,1,1]           → 0   (only one distinct value)
//
// Approach (count map + scan adjacent keys):
//   1. counts: Map<num, frequency> over nums.
//   2. For each key k in counts:
//        if counts has (k + 1):
//          candidate = counts[k] + counts[k+1]
//          best = max(best, candidate)
//   3. Return best (0 if no such adjacent pair exists).
//
// Why subsequence ≡ count of {k, k+1} pairs:
//   The harmonious condition (max - min = 1) means the only two values that
//   can appear are k and k+1. The longest subsequence using just those is
//   ALL of them. So we scan each key's frequency plus its neighbor's.
//
// Alternative: sort, then sliding window for size (max - min == 1). O(n log n)
// time, O(1) extra. The HashMap approach is O(n) but uses O(n) space.
//
// Time:  O(n)
// Space: O(n)
//
// Edge Cases:
//   - All elements the same    → 0 (need two distinct adjacent values)
//   - Length < 2               → 0
//   - Mixed positives/negatives → still works; map handles any int
//   - Very wide gaps           → no harmonious pair → 0

/**
 * @param {number[]} nums
 * @returns {number}
 */
const findLHS = (nums) => {
  // your code here
};

console.log('=== LC #594 Longest Harmonious Subsequence ===\n');

console.log('Test 1:');
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// Expected: 5

console.log('\nTest 2:');
console.log(findLHS([1, 2, 3, 4]));
// Expected: 2

console.log('\nTest 3 — all same:');
console.log(findLHS([1, 1, 1, 1]));
// Expected: 0

console.log('\nTest 4 — negatives:');
console.log(findLHS([-1, -1, 0]));
// Expected: 3
