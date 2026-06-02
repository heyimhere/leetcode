// TODO: implement
// LC #78 — Subsets
//
// Given an array `nums` of UNIQUE integers, return ALL subsets (the power
// set). Any order is fine.
//
// Example:
//   [1,2,3]   → [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]   (one valid ordering)
//   []        → [[]]
//   [0]       → [[],[0]]
//
// Approach 1 (backtracking — "include or skip"):
//   backtrack(start, path):
//     result.push(path.slice())          // every prefix call adds a subset
//     for i in start..n-1:
//       path.push(nums[i])
//       backtrack(i + 1, path)
//       path.pop()
//   Call backtrack(0, []).
//
// Approach 2 (iterative — grow by one each step):
//   result = [[]]
//   for n of nums:
//     const old = result
//     for s of old: result.push([...s, n])
//   At the end result contains all 2^n subsets.
//
// Approach 3 (bitmask):
//   For each mask in 0..(1<<n)-1, include nums[i] iff (mask >> i) & 1.
//   Same O(n × 2^n) total work.
//
// Why power-set size is 2^n:
//   Each element is independently "in" or "out" — so 2 × 2 × ... × 2 = 2^n
//   combinations.
//
// Time:  O(n × 2^n)
// Space: O(n) recursion + O(n × 2^n) for the output
//
// Edge Cases:
//   - Empty input            → [[]]
//   - Single element         → [[], [x]]
//   - Output order            → not required to match LC's canonical order

/**
 * @param {number[]} nums
 * @returns {number[][]}
 */
const subsets = (nums) => {
  // your code here
};

console.log('=== LC #78 Subsets ===\n');

console.log('Test 1:');
console.log(subsets([1, 2, 3]));
// Expected: 8 subsets including [] and [1,2,3] (any order)

console.log('\nTest 2 — empty:');
console.log(subsets([]));
// Expected: [[]]

console.log('\nTest 3 — single:');
console.log(subsets([0]));
// Expected: [[], [0]]
