// LC #11 — Container With Most Water
//
// You are given an array `height` of length n. Each element represents a
// vertical line drawn at that x-position, from (i, 0) to (i, height[i]).
// Pick two lines that, together with the x-axis, form a container. Return the
// maximum amount of water it can store. You may not slant the container.
//
// Examples:
//   height = [1,8,6,2,5,4,8,3,7]  -> 49  (lines at i=1 and i=8: min(8,7)=7, width 7)
//   height = [1,1]                -> 1   (min(1,1)=1, width 1)
//   height = [4,3,2,1,4]          -> 16  (ends: min(4,4)=4, width 4)
//   height = [1,2,1]              -> 2   (i=0 and i=2: min(1,1)=1, width 2)
//
// Intuition:
//   The water a pair (i, j) holds is a rectangle:
//     area = width * height = (j - i) * min(height[i], height[j])
//   The shorter of the two walls caps the height — water spills over the lower
//   wall — and the horizontal gap is the width.
//
//   Brute force checks every pair: O(n^2). To do better, start as WIDE as
//   possible (l = 0, r = n - 1) and shrink inward. Starting wide means we lock
//   in the largest possible width first, then only trade width away when we
//   have a real shot at more height.
//
//   The key move: at each step move the pointer at the SHORTER wall inward.
//   Why is that always safe? The area is bounded by the shorter wall. If we
//   moved the taller wall inward instead, the width shrinks AND the height is
//   still capped by that same shorter wall — so the area can only stay the same
//   or shrink. Every such pair is provably no better than what we already have.
//   The only chance at a bigger area is to abandon the shorter wall and hope
//   for a taller one. So we discard the shorter wall with a clear conscience.
//
//   (Ties: if the two walls are equal, moving either is fine — any pair using
//   the one we drop is capped by this same height but narrower, so no loss.)
//
// Approach (two pointers, converging):
//   - l = 0, r = height.length - 1, best = 0
//   - while l < r:
//       area = (r - l) * min(height[l], height[r])
//       best = max(best, area)
//       if height[l] < height[r] l++ else r--
//   - return best
//   Time: O(n)   Space: O(1)
//
// Alternate approaches:
//   1) Brute force every pair (i, j).
//      Time: O(n^2)   Space: O(1). Correct but too slow for large n; only
//      useful as the "obvious" baseline you mention then improve on.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — l and r start n apart and move one step toward each other
//                  each iteration, so at most n steps before they meet.
//   Space: O(1)  — two pointers and a running max; no auxiliary structure.

const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let best = 0;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    best = Math.max(best, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return best;
};

console.log('[1,8,6,2,5,4,8,3,7] ->', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log('[1,1]               ->', maxArea([1, 1]));                       // 1
console.log('[4,3,2,1,4]         ->', maxArea([4, 3, 2, 1, 4]));              // 16
console.log('[1,2,1]             ->', maxArea([1, 2, 1]));                    // 2
console.log('[2,3,4,5,18,17,6]   ->', maxArea([2, 3, 4, 5, 18, 17, 6]));      // 17
