// LC #704 — Binary Search
//
// You are given an array of distinct integers `nums`, sorted in ascending
// order, and an integer `target`. Return the index of target if it exists in
// nums. Otherwise, return -1.
//
// The algorithm must run in O(log n) time.
//
// Examples:
//   nums = [-1,0,3,5,9,12], target = 9 -> 4
//   nums = [-1,0,3,5,9,12], target = 2 -> -1
//   nums = [5],              target = 5 -> 0
//
// Constraints:
//   1 <= nums.length <= 10^4
//   -10^4 < nums[i], target < 10^4
//   All values in nums are unique.
//   nums is sorted in ascending order.
//
// Intuition:
//   Because nums is sorted, comparing target with the middle value tells us
//   which half cannot contain the answer:
//     - nums[mid] < target -> discard the left half, including mid
//     - nums[mid] > target -> discard the right half, including mid
//     - nums[mid] === target -> return mid
//
//   Each comparison cuts the remaining search area roughly in half. That is
//   why binary search takes O(log n) time instead of scanning all n values.
//
//   Search-window invariant:
//     If target is still possible, it is somewhere inside the inclusive
//     window [l, r]. Since both endpoints belong to the window, keep searching
//     while l <= r. When l > r, the window is empty and target is not present.
//
// Approach (iterative binary search, inclusive bounds):
//   - Set l = 0 and r = nums.length - 1.
//   - While l <= r:
//       mid = l + floor((r - l) / 2)
//       if nums[mid] === target, return mid
//       if nums[mid] < target, set l = mid + 1
//       otherwise, set r = mid - 1
//   - Return -1 when the search window becomes empty.
//
// Common pitfalls:
//   - Use l <= r, not l < r, because a one-element window still needs to be
//     checked.
//   - Move past mid with mid + 1 or mid - 1. Keeping mid in the next window can
//     cause an infinite loop.
//   - Return the index, not the value.
//
// Complexity of the chosen solution:
//   Time:  O(log n) — every iteration discards about half of the search area.
//   Space: O(1)     — only three integer indices are stored.

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

console.log('[-1,0,3,5,9,12], 9  ->', search([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log('[-1,0,3,5,9,12], 2  ->', search([-1, 0, 3, 5, 9, 12], 2));  // -1
console.log('[5],              5  ->', search([5], 5));                    // 0
console.log('[2,4,6,8,10],     2  ->', search([2, 4, 6, 8, 10], 2));      // 0
console.log('[2,4,6,8,10],    10  ->', search([2, 4, 6, 8, 10], 10));     // 4

// ---------------------------------------------------------------------------
// Alternate: recursive binary search
//
// Uses the same search-window logic, but each recursive call stores a stack
// frame. It keeps O(log n) time but uses O(log n) space, so the iterative
// version above is generally preferred.
// ---------------------------------------------------------------------------
const searchRecursive = (nums, target) => {
  const find = (l, r) => {
    if (l > r) return -1;

    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return find(mid + 1, r);
    return find(l, mid - 1);
  };

  return find(0, nums.length - 1);
};
