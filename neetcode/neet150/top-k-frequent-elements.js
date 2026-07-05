// LC #347 — Top K Frequent Elements
//
// Given an integer array nums and an integer k, return the k most frequent
// elements. You may return the answer in any order. The answer is guaranteed
// to be unique.
//
// Examples:
//   nums = [1,1,1,2,2,3], k = 2  ->  [1, 2]
//   nums = [1], k = 1             ->  [1]
//
// Intuition:
//   We need to rank elements by how often they appear, then grab the top k.
//   First count every element's frequency with a Map (O(n)), then figure out
//   the ranking. The most straightforward ranking strategy is to sort the
//   frequency entries descending — whoever has the highest count goes first.
//
// Approach (HashMap + sort):
//   - count = new Map()
//   - for each n in nums: count.set(n, (count.get(n) || 0) + 1)
//   - sort count entries by frequency descending
//   - return first k entries (the numbers only, not the counts)
//
// Alternate approaches:
//   1) Bucket sort: make an array of size n + 1 where index = frequency.
//      Each bucket holds the numbers that appear that many times. Scan from
//      the end (highest freq) and collect until we have k.
//      Time: O(n)  — no sort. Harder to recall because of the Array(n+1) trick.
//   2) Min-heap of size k: push all frequencies in, pop when size exceeds k.
//      Time: O(n log k). No built-in heap in JS — bring utils/MinHeap or implement inline.
//
// Complexity of the chosen solution:
//   Time:  O(n log n) — counting is O(n); sorting the map entries dominates.
//   Space: O(n)       — map holds at most n unique entries.

const topKFrequent = (nums, k) => {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) || 0) + 1);
  return Array.from(count).sort((a, b) => b[1] - a[1])
    .slice(0, k).map(([n]) => n);
};

console.log('[1,1,1,2,2,3] k=2 ->', topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log('[1] k=1         ->', topKFrequent([1], 1));                   // [1]
console.log('[1,2] k=2       ->', topKFrequent([1, 2], 2));                // [1, 2]
console.log('[4,4,4,3,3,2,1] k=2 ->', topKFrequent([4, 4, 4, 3, 3, 2, 1], 2)); // [4, 3]

// ---------------------------------------------------------------------------
// Reference: bucket sort (faster at scale)
//
// Preferred when you need true O(n) — avoids sorting entirely by using
// frequency as an array index. Max frequency can't exceed nums.length, so
// Array(nums.length + 1) is always a safe size. Scan right-to-left to hit
// highest frequencies first, stop once we have k elements.
// ---------------------------------------------------------------------------
const topKFrequentB = (nums, k) => {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) || 0) + 1);

  const buckets = Array(nums.length + 1).fill(null).map(() => []);
  for (const [n, freq] of count) buckets[freq].push(n);

  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    res.push(...buckets[i]);
  }
  return res;
};

// ---------------------------------------------------------------------------
// Reference: min-heap of size k — O(n log k)
//
// The "natural" heap solution — this is what interviewers think of when they
// say "use a heap". Slower than bucket sort but better than full sort when
// k << n. Key idea: maintain a min-heap capped at size k. Each time we push
// a new [freq, num] pair, if the heap exceeds k we pop — evicting the element
// with the LOWEST frequency. After processing all entries, the heap holds
// exactly the k most frequent elements.
//
// Uses utils/MinHeap with a custom comparator that orders pairs by frequency.
// ---------------------------------------------------------------------------
const MinHeap = require('../../utils/MinHeap');

const topKFrequentC = (nums, k) => {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) || 0) + 1);

  const heap = new MinHeap((a, b) => a[0] - b[0]); // order [freq, num] by freq
  for (const [n, freq] of count) {
    heap.push([freq, n]);
    if (heap.size > k) heap.pop(); // drop the lowest-freq element
  }

  const res = [];
  while (heap.size > 0) res.push(heap.pop()[1]);
  return res;
};
