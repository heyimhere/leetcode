// TODO: implement
// LC #75 — Sort Colors (Dutch National Flag)
//
// Given an array `nums` with values in {0, 1, 2} representing colors
// (red, white, blue), sort them IN PLACE so colors of the same value are
// adjacent, in the order 0 → 1 → 2. Solve WITHOUT a library sort.
//
// Example:
//   [2,0,2,1,1,0]    → [0,0,1,1,2,2]
//   [2,0,1]          → [0,1,2]
//
// Approach (Dutch National Flag — three pointers):
//   low = 0     // boundary for 0s (everything left of low is 0)
//   mid = 0     // scanning pointer
//   high = n-1  // boundary for 2s (everything right of high is 2)
//
//   while mid <= high:
//     if nums[mid] === 0 → swap(low, mid); low++; mid++
//     elif nums[mid] === 2 → swap(mid, high); high--
//     else                 → mid++
//
//   Why not mid++ when swapping with high:
//     The swapped-in value is unknown — we still need to inspect it.
//
// Why one pass:
//   Each element is examined at most twice (once by mid, possibly once
//   after a swap with high). The three regions [0s | 1s | unknown | 2s]
//   are maintained as invariants.
//
// Alternative: counting sort (two passes — count 0s/1s/2s, overwrite).
// Simpler but two passes; the DNF version is the in-place single-pass
// classic.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Already sorted       → still O(n) but no swaps
//   - All same color       → trivial
//   - Length 0 or 1        → no work
//   - Reverse sorted [2,1,0] → typical worst case for naive approach;
//                              DNF handles it in one pass

/**
 * @param {number[]} nums
 * @returns {void}  (mutates in place)
 */
const sortColors = (nums) => {
  // your code here
};

console.log('=== LC #75 Sort Colors ===\n');

const a = [2, 0, 2, 1, 1, 0];
sortColors(a);
console.log('Test 1:', a);
// Expected: [0,0,1,1,2,2]

const b = [2, 0, 1];
sortColors(b);
console.log('Test 2:', b);
// Expected: [0,1,2]

const c = [0];
sortColors(c);
console.log('Test 3:', c);
// Expected: [0]

const d = [2, 2, 1, 1, 0, 0];
sortColors(d);
console.log('Test 4 — reverse sorted:', d);
// Expected: [0,0,1,1,2,2]
