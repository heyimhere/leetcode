// TODO: implement
// LC #77 — Combinations
//
// Given two integers n and k, return all possible combinations of k numbers
// chosen from the range [1..n]. Any order.
//
// Example:
//   n = 4, k = 2  → [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
//   n = 1, k = 1  → [[1]]
//
// Approach (backtracking with a start cursor — avoids duplicates):
//   backtrack(start, path):
//     if path.length === k → result.push(path.slice())
//     for i in start..n:
//       path.push(i)
//       backtrack(i + 1, path)
//       path.pop()
//   Call backtrack(1, []).
//
// Why `start`:
//   By restricting choices to values ≥ the last chosen, we enumerate each
//   combination once in INCREASING order. Without it we'd produce all
//   permutations (k! duplicates per combination).
//
// Optimization (pruning):
//   We can terminate the loop early when too few elements remain to fill
//   the path: `for i in start..(n - (k - path.length) + 1)`.
//
// Time:  O(C(n, k) × k)   for materializing each combination
// Space: O(k)             recursion + path
//
// Edge Cases:
//   - k = 0           → [[]]
//   - k > n           → []
//   - k = n           → [[1, 2, ..., n]]

/**
 * @param {number} n
 * @param {number} k
 * @returns {number[][]}
 */
const combine = (n, k) => {
  // your code here
};

console.log('=== LC #77 Combinations ===\n');

console.log('Test 1:');
console.log(combine(4, 2));
// Expected: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

console.log('\nTest 2:');
console.log(combine(1, 1));
// Expected: [[1]]

console.log('\nTest 3 — k=0:');
console.log(combine(5, 0));
// Expected: [[]]

console.log('\nTest 4 — k>n:');
console.log(combine(3, 5));
// Expected: []
