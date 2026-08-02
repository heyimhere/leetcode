// LC #239 — Sliding Window Maximum   (HARD)
//
// Given an array nums and a window size k, the window slides left-to-right one
// step at a time. Return an array of the MAXIMUM value in each window position.
//
// Examples:
//   nums = [1,3,-1,-3,5,3,6,7], k = 3  -> [3,3,5,5,6,7]
//       [1  3 -1] -3  5  3  6  7   -> 3
//        1 [3 -1 -3] 5  3  6  7    -> 3
//        1  3[-1 -3  5] 3  6  7    -> 5
//        1  3 -1[-3  5  3] 6  7    -> 5
//        1  3 -1 -3 [5  3  6] 7    -> 6
//        1  3 -1 -3  5 [3  6  7]   -> 7
//   nums = [1], k = 1                  -> [1]
//   nums = [9,11], k = 2               -> [11]
//   nums = [4,-2], k = 2               -> [4]
//
// Intuition:
//   Brute force re-scans all k elements of every window: O(n·k). The waste is that
//   neighboring windows overlap by k-1 elements — we keep re-deriving the same max.
//
//   The key insight: within the current window, some elements can NEVER be the max
//   again. If nums[j] sits to the LEFT of nums[i] (j < i, so j leaves the window
//   first) AND nums[j] <= nums[i], then j is useless — i is both bigger-or-equal
//   and outlives it. So j should be discarded the moment i arrives.
//
//   Keep only the "still could be a max" candidates, and they naturally stay in
//   DECREASING order of value. That's a MONOTONIC DECREASING DEQUE of INDICES:
//     - front  = index of the current window's maximum (biggest value, oldest)
//     - back   = smallest recent value still in the running
//
//   Three moves per step i:
//     1) EXPIRE the front if it has slid out of the window (front <= i - k).
//     2) EVICT from the back while nums[back] <= nums[i] — those are the now-useless
//        smaller-and-older elements described above.
//     3) PUSH i onto the back.
//   Once the first full window is formed (i >= k-1), nums[front] is its answer.
//
//   We store INDICES, not values, so "is the front still inside the window?" is a
//   simple index comparison. Every index is pushed once and popped once -> O(n).
//
// Approach (monotonic decreasing deque of indices):
//   - dq = [] (holds indices, values non-increasing front->back); res = []
//   - for i in nums:
//       if dq[0] <= i - k: dq.shift()            // front expired
//       while dq nonempty and nums[dq.last] <= nums[i]: dq.pop()   // evict smaller
//       dq.push(i)
//       if i >= k - 1: res.push(nums[dq[0]])     // window is full -> record max
//   - return res
//   Time: O(n)   Space: O(k)
//
// Alternate approaches:
//   1) Max-heap of [value, index] with lazy deletion: push each element; before
//      reading the top, pop entries whose index has left the window. O(n log n)
//      time, O(n) space. Simpler to reason about, slower than the deque.
//   2) Block/dynamic-programming (left-max & right-max over k-sized blocks): two
//      O(n) passes, O(n) space. Clever but harder to recall than the deque.
//
// Complexity of the chosen solution:
//   Time  — O(n): each index enters and leaves the deque at most once, so the
//           inner while-loop does O(n) total work across the whole run, not O(n·k).
//   Space — O(k): the deque never holds more than one full window of candidates
//           (excluding the output array).

const maxSlidingWindow = (nums, k) => {
  const dq = [];  // indices, nums[dq[0]] is the window max (values decrease back)
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    // 1) Drop the front index if it has slid out of the window.
    if (dq.length && dq[0] <= i - k) {
      dq.shift();
    }

    // 2) Evict smaller-or-equal values from the back — they can't be a future max.
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) {
      dq.pop();
    }

    // 3) Add the current index; it's the newest candidate.
    dq.push(i);

    // Window is full once i reaches index k-1; front holds its maximum.
    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }

  return res;
};

console.log('[1,3,-1,-3,5,3,6,7], k=3 ->', maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log('[1], k=1                 ->', maxSlidingWindow([1], 1));        // [1]
console.log('[9,11], k=2              ->', maxSlidingWindow([9, 11], 2));    // [11]
console.log('[4,-2], k=2              ->', maxSlidingWindow([4, -2], 2));    // [4]
