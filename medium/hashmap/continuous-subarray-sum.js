// TODO: implement
// LC #523 — Continuous Subarray Sum
//
// Given an integer array `nums` and an integer k, return true iff `nums`
// has a continuous subarray of size AT LEAST 2 whose sum is a MULTIPLE
// of k.  (sum === n × k for some integer n; note 0 × k = 0 counts.)
//
// Example:
//   nums = [23,2,4,6,7], k = 6  → true   ([2,4] sums to 6)
//   nums = [23,2,6,4,7], k = 6  → true   ([23,2,6,4,7] sums to 42)
//   nums = [23,2,6,4,7], k = 13 → false
//
// Approach (prefix-sum mod k, HashMap of first-seen index):
//   seen = new Map([[0, -1]])   // empty prefix at index -1
//   running = 0
//   for i in 0..n-1:
//     running = (running + nums[i]) % k
//     if seen.has(running):
//       if i - seen.get(running) >= 2 → return true
//     else:
//       seen.set(running, i)
//   return false
//
// Why this works:
//   If two prefix sums have the same value mod k, the subarray between
//   them sums to a multiple of k. We store the EARLIEST index for each
//   remainder so the length check (≥ 2) has the best chance to pass.
//
// Gotchas:
//   - Length-2 requirement: a single matching remainder at the same index
//     doesn't count. The `i - seen.get(running) >= 2` check enforces it.
//   - k could be 0 (rare in LC variants) — in that case the sum must be 0
//     exactly. Add a guard if needed.
//   - Don't overwrite an existing seen entry — earlier index → longer window.
//
// Time:  O(n)
// Space: O(min(n, k))
//
// Edge Cases:
//   - nums shorter than 2 → false
//   - All zeros, k > 0    → true (subarray of two zeros sums to 0 = 0·k)
//   - Single negative number followed by a positive that "completes" k
//   - k = 1               → any two-element subarray works → true (if len ≥ 2)

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
const checkSubarraySum = (nums, k) => {
  // your code here
};

console.log('=== LC #523 Continuous Subarray Sum ===\n');

console.log('Test 1:');
console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
// Expected: true

console.log('\nTest 2:');
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
// Expected: true

console.log('\nTest 3:');
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
// Expected: false

console.log('\nTest 4 — zeros & k>0:');
console.log(checkSubarraySum([0, 0], 1));
// Expected: true
