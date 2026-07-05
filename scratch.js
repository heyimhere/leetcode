
const topKFrequent = (nums, k) => {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);
  return Array.from(count).sort((a, b) => b[1] - a[1])
    .slice(0, k).map(([n]) => n);
};

console.log('[1,1,1,2,2,3] k=2 ->', topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log('[1] k=1         ->', topKFrequent([1], 1));                   // [1]
console.log('[1,2] k=2       ->', topKFrequent([1, 2], 2));                // [1, 2]
console.log('[4,4,4,3,3,2,1] k=2 ->', topKFrequent([4, 4, 4, 3, 3, 2, 1], 2)); // [4, 3]

const topKFrequentB = (nums, k) => {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);

  const buckets = Array(nums.length + 1).fill(null).map(() => []);
  for (const [n, freq] of count) buckets[freq].push(n);

  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    res.push(...buckets[i]);
  }
  return res;
};

const MinHeap = requre('../../utils/Minheap');

const topKFrequentC = (nums, k) => {
  const count = new Map();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);

  const heap = new MinHeap((a, b) => a[0] - b[0]);
  for (const [n, freq] of count) {
    heap.push([freq, n]);
    if (heap.size > k) heap.pop();
  }

  const res = [];
  while (head.size > 0) res.push(heap.pop()[1]);
  return res;
}
