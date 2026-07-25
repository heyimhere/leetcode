// LC #42 — Trapping Rain Water
//
// You are given an array `height` of length n where each element is the height
// of a bar of width 1. After it rains, water settles in the dips between bars.
// Return the total amount of water trapped.
//
// Examples:
//   height = [0,1,0,2,1,0,1,3,2,1,2,1]  -> 6
//   height = [4,2,0,3,2,5]              -> 9
//   height = [4,2,3]                    -> 1  (the single dip at i=1 holds 1)
//   height = [2,0,2]                    -> 2
//
// Intuition:
//   Water is trapped column by column, not in one big pool. So ask the local
//   question: how much water sits ON TOP of the bar at index i?
//
//   A single column i can only hold water up to the height of the shortest wall
//   standing guard on EITHER side of it. Look left of i and find the tallest
//   bar (leftMax); look right and find the tallest bar (rightMax). Water can
//   only rise as high as the shorter of those two walls — the taller wall does
//   not matter because water would spill over the shorter side first.
//
//     water[i] = min(leftMax, rightMax) - height[i]
//
//   (If that value is negative, i itself is a wall — it holds 0, not negative.)
//   Sum water[i] over every column and you have the answer.
//
//   The naive version recomputes leftMax/rightMax by scanning outward for each
//   i: O(n^2). The two-pointer trick removes that repeated work.
//
// The two-pointer insight:
//   Keep l at the far left, r at the far right, plus leftMax and rightMax seen
//   so far. The trick: we don't need the EXACT min(leftMax, rightMax) — we only
//   need to know which of the two is smaller, because that side is the binding
//   constraint. Whichever running max is smaller, that pointer's column is fully
//   determined RIGHT NOW.
//
//   Say leftMax < rightMax. Then for the bar at l, its true left wall is leftMax,
//   and its true right wall is AT LEAST rightMax (there's a bar that tall to the
//   right, and possibly taller ones we haven't reached). Since leftMax is already
//   the smaller of the two, the exact rightMax is irrelevant — the water at l is
//   capped by leftMax no matter what. So we can commit water[l] = leftMax -
//   height[l] and step l inward. Symmetric when rightMax <= leftMax.
//
// Approach (two pointers):
//   - l = 0, r = n - 1, leftMax = 0, rightMax = 0, total = 0
//   - while l < r:
//       if height[l] < height[r]:
//         height[l] >= leftMax ? leftMax = height[l] : total += leftMax - height[l]
//         l++
//       else:
//         height[r] >= rightMax ? rightMax = height[r] : total += rightMax - height[r]
//         r--
//   - return total
//   Time: O(n)   Space: O(1)
//
// Alternate approaches:
//   1) Brute force: for each i, scan left and right for the maxes.
//      Time: O(n^2)   Space: O(1). The baseline you improve on.
//   2) Precompute prefix leftMax[] and suffix rightMax[] arrays, then one pass
//      summing min(leftMax[i], rightMax[i]) - height[i].
//      Time: O(n)   Space: O(n). Easiest correct O(n) version to reason about;
//      two pointers is the same idea with the arrays collapsed to O(1).
//
// Complexity of the chosen solution:
//   Time:  O(n)  — l and r start n apart and each iteration advances exactly one
//                  of them inward, so at most n steps until they meet.
//   Space: O(1)  — four scalars (l, r, leftMax, rightMax) and a running total.

const trap = (height) => {
  let l = 0;
  let r = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let total = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      if (height[l] >= leftMax) {
        leftMax = height[l];
      } else {
        total += leftMax - height[l];
      }
      l++;
    } else {
      if (height[r] >= rightMax) {
        rightMax = height[r];
      } else {
        total += rightMax - height[r];
      }
      r--;
    }
  }

  return total;
};

console.log('[0,1,0,2,1,0,1,3,2,1,2,1] ->', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log('[4,2,0,3,2,5]             ->', trap([4, 2, 0, 3, 2, 5]));                     // 9
console.log('[4,2,3]                   ->', trap([4, 2, 3]));                              // 1
console.log('[2,0,2]                   ->', trap([2, 0, 2]));                              // 2
console.log('[]                        ->', trap([]));                                     // 0
