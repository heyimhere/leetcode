// TODO: implement
// LC #502 — IPO
//
// You have initial capital `w` and can pick at most `k` projects in
// sequence. Each project i needs capital[i] to start and yields profits[i]
// when finished. After finishing, the profit is ADDED to your capital.
// Pick AT MOST k projects to maximize final capital.
//
// Example:
//   k = 2, w = 0
//   profits  = [1,2,3]
//   capital  = [0,1,1]
//   → 4   (start project 0 for 1; capital = 1; pick the best affordable
//          (project 2, profit 3); capital = 4)
//
//   k = 3, w = 0
//   profits  = [1,2,3]
//   capital  = [0,1,2]
//   → 6
//
// Approach (two heaps — affordable max-profit heap + min-capital heap):
//   1. Build minCap: min-heap of projects keyed by capital required.
//   2. Build maxProfit: max-heap of projects keyed by profit.
//   3. Repeat k times:
//        While minCap not empty AND minCap.top.capital <= w:
//          move project to maxProfit
//        If maxProfit empty → can't afford any project; stop early.
//        Pop best from maxProfit; w += its profit.
//   4. Return w.
//
// Why two heaps:
//   - minCap tells us which projects newly UNLOCK as w grows.
//   - maxProfit picks the best AFFORDABLE choice at each step.
//   Greedy "always take the most profitable affordable project" is optimal
//   because profit additions strictly grow w, never shrink it — so future
//   options only EXPAND.
//
// Why greedy is provably optimal:
//   Exchange argument. If your schedule didn't take the best-profit
//   affordable project at some step, swap it in; you never lose options
//   later and gain capital.
//
// Time:  O((n + k) log n)
// Space: O(n)
//
// Edge Cases:
//   - k = 0           → return w
//   - All projects priced above w → return w (can do nothing)
//   - More projects than capacity → only k chosen
//   - n = 0           → return w

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @returns {number}
 */
const findMaximizedCapital = (k, w, profits, capital) => {
  // your code here
};

console.log('=== LC #502 IPO ===\n');

console.log('Test 1:');
console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
// Expected: 4

console.log('\nTest 2:');
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]));
// Expected: 6

console.log('\nTest 3 — can\'t afford any:');
console.log(findMaximizedCapital(1, 0, [5], [10]));
// Expected: 0
