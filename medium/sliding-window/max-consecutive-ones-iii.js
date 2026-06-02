// TODO: implement
// LC #1004 — Max Consecutive Ones III
//
// Given a binary array `nums` and an integer k, return the maximum number
// of consecutive 1s you can obtain by FLIPPING at most k 0s.
//
// Example:
//   nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2  → 6
//     ([1,1,1,0,0,1,1,1,1,1,1] after flipping the two 0s in positions 3 and 4)
//   nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3  → 10
//
// Approach (sliding window, "at most k zeros"):
//   left = 0; zeros = 0; best = 0
//   for right in 0..n-1:
//     if nums[right] === 0 → zeros++
//     while zeros > k:           // too many zeros → shrink
//       if nums[left] === 0 → zeros--
//       left++
//     best = max(best, right - left + 1)
//   return best
//
// Why "at most k":
//   Re-frame: find the longest window with at most k zeros. Each zero in
//   that window can be flipped. The window length IS the answer.
//
// Why a sliding window:
//   The optimum window for a given right end either equals or extends the
//   one from the previous step. Shrinking from the left only when
//   constraint breaks gives O(n).
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - k >= total zeros          → entire array length
//   - k = 0                     → longest run of consecutive 1s
//   - All zeros, k flips        → min(k, n)
//   - Empty array               → 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
const longestOnes = (nums, k) => {
  // your code here
};

console.log('=== LC #1004 Max Consecutive Ones III ===\n');

console.log('Test 1:');
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// Expected: 6

console.log('\nTest 2:');
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));
// Expected: 10

console.log('\nTest 3 — k=0:');
console.log(longestOnes([1, 1, 0, 1, 1], 0));
// Expected: 2

console.log('\nTest 4 — all zeros:');
console.log(longestOnes([0, 0, 0, 0], 2));
// Expected: 2
