// TODO: implement
// LC #340 — Longest Substring with At Most K Distinct Characters
//
// Given a string s and an integer k, return the LENGTH of the longest
// substring containing AT MOST k DISTINCT characters.
//
// Example:
//   s = "eceba", k = 2   → 3   ("ece")
//   s = "aa",    k = 1   → 2
//   s = "abc",   k = 0   → 0
//
// Approach (sliding window with count map):
//   counts: Map<char, freq>; left = 0; best = 0
//
//   for right in 0..n-1:
//     counts.set(s[right], (counts.get(s[right]) ?? 0) + 1)
//     while counts.size > k:
//       counts.set(s[left], counts.get(s[left]) - 1)
//       if counts.get(s[left]) === 0 → counts.delete(s[left])
//       left++
//     best = max(best, right - left + 1)
//   return best
//
// Why a window:
//   Adding chars can only INCREASE distinct count. Once it exceeds k, we
//   must shrink from the left to recover validity. Each char enters and
//   leaves the window at most once → linear time.
//
// Time:  O(n)
// Space: O(k)  — distinct char map
//
// Edge Cases:
//   - k = 0           → 0
//   - All same char   → n (only 1 distinct)
//   - k >= |alphabet| → n
//   - Empty string    → 0

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
const lengthOfLongestSubstringKDistinct = (s, k) => {
  // your code here
};

console.log('=== LC #340 Longest Substring with At Most K Distinct ===\n');

console.log('Test 1:');
console.log(lengthOfLongestSubstringKDistinct('eceba', 2));
// Expected: 3

console.log('\nTest 2:');
console.log(lengthOfLongestSubstringKDistinct('aa', 1));
// Expected: 2

console.log('\nTest 3 — k=0:');
console.log(lengthOfLongestSubstringKDistinct('abc', 0));
// Expected: 0

console.log('\nTest 4 — k > distinct:');
console.log(lengthOfLongestSubstringKDistinct('abc', 10));
// Expected: 3
