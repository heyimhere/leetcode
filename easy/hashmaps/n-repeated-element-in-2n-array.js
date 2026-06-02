// TODO: implement
// LC #961 — N-Repeated Element in Size 2N Array
//
// You're given an integer array `nums` of size 2n with EXACTLY n+1 unique
// elements. One element is repeated n times; every other element appears
// once. Return that repeated element.
//
// Example:
//   [1,2,3,3]         → 3
//   [2,1,2,5,3,2]     → 2
//   [5,1,5,2,5,3,5,4] → 5
//
// Approach 1 (HashSet):
//   Walk the array, return the first element you've seen before.
//   Time: O(n), Space: O(n).
//
// Approach 2 (random sampling — O(1) space, expected O(1) time):
//   Pick two random indices. If nums[i] === nums[j], return it.
//   Repeat. Because half the array IS the repeated element (n out of 2n),
//   the expected number of samples before a hit is small (~2).
//
// Approach 3 (clever local check):
//   The repeated element must appear within any window of 4 consecutive
//   positions (pigeonhole: ≥n out of 2n means at most 3 "rest" between two
//   copies). Check each pair within sliding distance ≤3.
//
// Why HashSet is the safest interview answer:
//   It's clearly correct, linear, and easy to explain. Mention random
//   sampling as the O(1)-space follow-up if asked.
//
// Time:  O(n)
// Space: O(n) — set
//
// Edge Cases:
//   - n = 1 (array of length 2)  → both elements are the same; return either
//   - The repeated element appears in the first two positions
//   - The repeated element appears far apart

/**
 * @param {number[]} nums
 * @returns {number}
 */
const repeatedNTimes = (nums) => {
  // your code here
};

console.log('=== LC #961 N-Repeated Element in 2N Array ===\n');

console.log('Test 1:');
console.log(repeatedNTimes([1, 2, 3, 3]));
// Expected: 3

console.log('\nTest 2:');
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
// Expected: 2

console.log('\nTest 3:');
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));
// Expected: 5

console.log('\nTest 4 — minimum length:');
console.log(repeatedNTimes([7, 7]));
// Expected: 7
