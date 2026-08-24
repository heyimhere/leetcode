// LC #84 — Largest Rectangle in Histogram
//
// Given an array `heights` where each bar has width 1 and heights[i] is the
// height of the i-th bar, return the area of the largest rectangle that can be
// formed within the histogram.
//
// Example:
//   heights = [2,1,5,6,2,3]  -> 10   (bars at index 2 and 3, height 5, width 2)
//   heights = [2,4]          -> 4
//
// Intuition:
//   For any single bar, the biggest rectangle that uses THAT bar as its height
//   stretches left and right as far as bars are >= its height, then stops. So
//   the real question for each bar is: "how wide a run can I be the SHORTEST bar
//   of?" Width * my height = a candidate answer. The largest over all bars wins.
//
//   Brute force computes that width per bar in O(n) each -> O(n^2). The monotonic
//   stack gets it in O(n) by discovering each bar's boundaries exactly when they
//   are revealed:
//
//   Keep a stack of bars in strictly INCREASING height order, storing each bar's
//   height AND the index where its rectangle could START (its left boundary).
//   While the stack stays increasing, every bar's left reach is still open.
//
//   The moment we hit a bar SHORTER than the stack's top, that top bar can grow
//   no further right — the current position is its wall. So we POP it and finish
//   its rectangle: width = (current index - its start index), area = height*width.
//   We keep popping every bar taller than the current one, and each pop hands its
//   START index down to the current bar — because the current (shorter) bar can
//   extend left THROUGH all those taller bars it just knocked out.
//
//   Walkthrough (heights = [2,1,5,6,2,3]):
//     i=0 h=2  push (start0,h2)                  stack [(0,2)]
//     i=1 h=1  pop (0,2): 2*(1-0)=2              start=0, push (0,1)  stack [(0,1)]   max=2
//     i=2 h=5  push (2,5)                        stack [(0,1),(2,5)]
//     i=3 h=6  push (3,6)                        stack [(0,1),(2,5),(3,6)]
//     i=4 h=2  pop (3,6): 6*(4-3)=6              max=6
//              pop (2,5): 5*(4-2)=10             max=10, start=2, push (2,2)  stack [(0,1),(2,2)]
//     i=5 h=3  push (5,3)                        stack [(0,1),(2,2),(5,3)]
//     end — drain stack, each extends to the far right wall (n=6):
//              (0,1): 1*(6-0)=6
//              (2,2): 2*(6-2)=8
//              (5,3): 3*(6-5)=3
//     answer = 10
//
// Why store the START index, not just the current index:
//   When bar 5 (height 2 at i=4) knocked out the height-5 bar that began at
//   index 2, bar 5 inherits start=2 — it can stretch left across that whole
//   region because everything it popped was TALLER than it. That inherited left
//   boundary is what lets a short bar claim a wide rectangle.
//
// Why the leftover drain at the end:
//   Bars still on the stack never met a shorter bar to their right, so their
//   rectangle runs all the way to the end of the histogram: width = n - start.
//
// Approach (monotonic increasing stack of [startIndex, height]):
//   - For each bar i with height h:
//       start = i
//       while stack not empty and stack top height > h:
//         pop [idx, height]; area = height * (i - idx); update max; start = idx
//       push [start, h]
//   - After the loop, for each leftover [idx, height]:
//       area = height * (n - idx); update max
//   - Return max.
//
// Complexity:
//   Time:  O(n) — each bar is pushed once and popped at most once (amortized);
//                 total push/pop work is bounded by n. Same argument as #739.
//   Space: O(n) — the stack holds up to n bars (a strictly increasing histogram).

const largestRectangleArea = (heights) => {
  const stack = []; // pairs of [startIndex, height], heights strictly increasing
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const h = heights[i];
    let start = i;

    // Any taller bar on top can't extend past this shorter bar — close it out.
    while (stack.length > 0 && stack[stack.length - 1][1] > h) {
      const [idx, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - idx));
      // Current bar can reach back to where that taller bar began.
      start = idx;
    }

    stack.push([start, h]);
  }

  // Bars that never hit a shorter wall extend to the far right edge.
  const n = heights.length;
  for (const [idx, height] of stack) {
    maxArea = Math.max(maxArea, height * (n - idx));
  }

  return maxArea;
};

console.log('[2,1,5,6,2,3] ->', largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log('[2,4]         ->', largestRectangleArea([2, 4]));             // 4
console.log('[2,1,2]       ->', largestRectangleArea([2, 1, 2]));         // 3
console.log('[1,1,1,1]     ->', largestRectangleArea([1, 1, 1, 1]));      // 4
console.log('[5]           ->', largestRectangleArea([5]));               // 5
