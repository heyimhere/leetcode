// TODO: implement
// LC #84 — Largest Rectangle in Histogram
//
// Given an array of non-negative `heights` (bars of width 1), return the
// AREA of the LARGEST rectangle that fits within the histogram.
//
// Example:
//   [2,1,5,6,2,3]     → 10   (rectangle of width 2, height 5: bars 2,3)
//   [2,4]             → 4    (width 1 × height 4)
//   [0]               → 0
//
// Approach (monotonic increasing stack of indices):
//   stack stores indices of bars with INCREASING heights.
//   For each bar i (and a sentinel 0 at the end):
//     while stack not empty AND heights[stack.top] >= heights[i]:
//       h = heights[stack.pop()]
//       w = stack empty ? i : (i - stack.top - 1)
//       best = max(best, h * w)
//     stack.push(i)
//
//   Sentinel trick: append a virtual 0-height bar at the end so the loop
//   drains the stack at the end.
//
// Why monotonic stack works:
//   When we pop index k, the rectangle of height heights[k] is bounded:
//     - LEFT by the bar that now sits on the stack top (next smaller on left).
//     - RIGHT by the current bar i (next smaller on right).
//   That gives the largest rectangle for which heights[k] is the SHORTEST
//   bar. Doing this for every k yields the overall max.
//
// Time:  O(n)   (each index pushed and popped once)
// Space: O(n)
//
// Edge Cases:
//   - Single bar         → its height × 1
//   - All same height    → height × n
//   - Strictly increasing → bar n's height × 1 is best (or wider, depending)
//   - Empty array        → 0

/**
 * @param {number[]} heights
 * @returns {number}
 */
const largestRectangleArea = (heights) => {
  // your code here
};

console.log('=== LC #84 Largest Rectangle in Histogram ===\n');

console.log('Test 1:');
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// Expected: 10

console.log('\nTest 2:');
console.log(largestRectangleArea([2, 4]));
// Expected: 4

console.log('\nTest 3 — zero:');
console.log(largestRectangleArea([0]));
// Expected: 0

console.log('\nTest 4 — increasing:');
console.log(largestRectangleArea([1, 2, 3, 4, 5]));
// Expected: 9   (rectangle [3,4,5] of width 3 × height 3)
