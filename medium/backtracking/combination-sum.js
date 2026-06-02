// TODO: implement
// LC #39 — Combination Sum
//
// Given a list of DISTINCT `candidates` and a target, return ALL UNIQUE
// combinations (any order) that sum to target. The same candidate may be
// chosen UNLIMITED times.
//
// Example:
//   candidates = [2,3,6,7], target = 7   → [[2,2,3],[7]]
//   candidates = [2,3,5],   target = 8   → [[2,2,2,2],[2,3,3],[3,5]]
//   candidates = [2],       target = 1   → []
//
// Approach (backtracking with a start cursor for "unlimited but ordered"):
//   backtrack(start, remaining, path):
//     if remaining === 0 → result.push(path.slice()); return
//     if remaining < 0   → return
//     for i in start..n-1:
//       path.push(candidates[i])
//       backtrack(i, remaining - candidates[i], path)   // i, not i+1: reuse allowed
//       path.pop()
//
//   Call backtrack(0, target, []).
//
// Why `i` (not `i + 1`):
//   Reuse of the same number is allowed (e.g. [2,2,3] for target 7). Using
//   `i` lets us pick the current candidate again. Using `start` prevents
//   re-ordering, which would create duplicates.
//
// Why `start` (instead of revisiting earlier candidates):
//   It enforces an ORDER on combinations, so [2,3] and [3,2] don't both
//   show up — only the canonical sorted form.
//
// Pruning: sort candidates ascending and break out of the loop as soon as
// candidates[i] > remaining. Big speedup on large inputs.
//
// Time:  Roughly O(N^(target / minCandidate))   (combinatorial)
// Space: O(target / minCandidate) recursion depth
//
// Edge Cases:
//   - Empty candidates    → []
//   - target = 0          → [[]]
//   - No solution         → []
//   - Single candidate = 1, target = N → [[1,1,...,1]]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @returns {number[][]}
 */
const combinationSum = (candidates, target) => {
  // your code here
};

console.log('=== LC #39 Combination Sum ===\n');

console.log('Test 1:');
console.log(combinationSum([2, 3, 6, 7], 7));
// Expected: [[2,2,3],[7]]

console.log('\nTest 2:');
console.log(combinationSum([2, 3, 5], 8));
// Expected: [[2,2,2,2],[2,3,3],[3,5]]

console.log('\nTest 3 — no solution:');
console.log(combinationSum([2], 1));
// Expected: []
