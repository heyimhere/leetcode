// TODO: implement
// LC #239 — Sliding Window Maximum
//
// Given `nums` and a window size k, return an array of the MAX in each
// window of k consecutive elements as the window slides left → right.
//
// Example:
//   nums = [1,3,-1,-3,5,3,6,7], k = 3   → [3,3,5,5,6,7]
//   nums = [1],                k = 1    → [1]
//   nums = [9,11],             k = 2    → [11]
//
// Approach (monotonic deque of INDICES — the canonical O(n) solution):
//   deque holds INDICES, with their values in MONOTONICALLY DECREASING
//   order. Maintain two invariants on each step:
//     1. Pop from the BACK while nums[back] <= nums[i]   (kick weaker ones)
//     2. Pop from the FRONT while front <= i - k         (kick out-of-window)
//   Push i onto the back. If i >= k - 1, the FRONT holds the max for the
//   current window — record nums[front].
//
// Why monotonic decreasing:
//   Once a new value is larger than older ones in the window, those older
//   ones can never be the max again (they're shadowed AND will leave the
//   window sooner). Keeping the deque decreasing means the front is
//   always the current window's max.
//
// Alternatives:
//   - Max-heap of (value, index): O(n log k). Slightly easier to write but
//     slower asymptotically and requires lazy deletion.
//   - Recompute max each window: O(n × k). Brute force.
//
// Time:  O(n)   (each index enters/exits the deque at most once)
// Space: O(k)
//
// Edge Cases:
//   - k = 1                    → return nums unchanged
//   - k = n                    → return [max(nums)]
//   - Strictly increasing nums → front constantly rotates
//   - Strictly decreasing nums → push grows monotonically; pop on age

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  // your code here
};

console.log('=== LC #239 Sliding Window Maximum ===\n');

console.log('Test 1:');
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Expected: [3,3,5,5,6,7]

console.log('\nTest 2 — k=1:');
console.log(maxSlidingWindow([1, 5, 3], 1));
// Expected: [1,5,3]

console.log('\nTest 3 — k = n:');
console.log(maxSlidingWindow([4, 2, 12, 3], 4));
// Expected: [12]
