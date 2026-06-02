// TODO: implement
// LC #46 — Permutations
//
// Given an array `nums` of UNIQUE integers, return ALL possible
// permutations. Any order is fine.
//
// Example:
//   [1,2,3]   → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//   [0,1]     → [[0,1],[1,0]]
//   [1]       → [[1]]
//
// Approach 1 (backtracking with a used-set):
//   backtrack(path, used):
//     if path.length === n → result.push(path.slice())
//     for i in 0..n-1:
//       if used[i] → continue
//       used[i] = true; path.push(nums[i])
//       backtrack(path, used)
//       path.pop(); used[i] = false
//   Call backtrack([], new Array(n).fill(false)).
//
// Approach 2 (swap-based, no extra used array):
//   permute(start):
//     if start === n → result.push(nums.slice())
//     for i in start..n-1:
//       swap(nums, start, i)
//       permute(start + 1)
//       swap(nums, start, i)
//   Call permute(0).
//
// Why these work:
//   At each recursion depth we fix one position with each remaining
//   choice. Every full path corresponds to one of the n! permutations,
//   and we never repeat a choice in a single path.
//
// Time:  O(n × n!)   (n! leaves, each path copied at O(n))
// Space: O(n)        recursion stack
//
// Edge Cases:
//   - Empty input      → [[]]
//   - Single element   → [[x]]
//   - All same value   → spec says unique; if not, would need dedup (LC #47)

/**
 * @param {number[]} nums
 * @returns {number[][]}
 */
const permute = (nums) => {
  // your code here
};

console.log('=== LC #46 Permutations ===\n');

console.log('Test 1:');
console.log(permute([1, 2, 3]));
// Expected: 6 permutations

console.log('\nTest 2:');
console.log(permute([0, 1]));
// Expected: [[0,1],[1,0]]

console.log('\nTest 3 — singleton:');
console.log(permute([7]));
// Expected: [[7]]
