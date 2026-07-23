// LC #15 — 3Sum
//
// Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]]
// such that i != j != k and nums[i] + nums[j] + nums[k] === 0. The solution
// set must NOT contain duplicate triplets. Order of triplets (and order within
// a triplet) does not matter.
//
// Examples:
//   nums = [-1,0,1,2,-1,-4]  -> [[-1,-1,2],[-1,0,1]]
//   nums = [0,1,1]           -> []            (no triplet sums to 0)
//   nums = [0,0,0]           -> [[0,0,0]]     (one triplet, not many)
//
// Intuition:
//   3Sum is really "for each number, solve Two Sum II on the rest." Fix one
//   number nums[i]; now we need two more numbers that sum to -nums[i]. That
//   inner search is exactly the sorted two-pointer sweep from LC #167.
//
//   So the plan: SORT the array first. Sorting does two jobs at once —
//     1) it enables the O(n) two-pointer sweep for the inner Two Sum, and
//     2) it puts duplicates next to each other, which is how we skip repeats
//        cheaply (no Set of stringified triplets needed).
//
//   Then for each i, run l = i+1, r = end, moving pointers based on the sum
//   just like Two Sum II, but the target is -nums[i].
//
//   Dedupe rules (both matter):
//     - Outer: if nums[i] === nums[i-1], skip — we already did every triplet
//       starting with that value.
//     - Inner: after recording a hit, advance l past any equal values (and r
//       past equal values) so we don't emit the same triplet twice.
//
//   Early exit: once nums[i] > 0, the smallest possible triplet sum is
//   positive (array is sorted), so no triplet from here can reach 0 — break.
//
// Approach (sort + fixed pointer + two pointers):
//   - sort nums ascending
//   - res = []
//   - for i from 0 to n-1:
//       if nums[i] > 0 break
//       if i > 0 and nums[i] === nums[i-1] continue     // skip dup anchor
//       l = i + 1, r = n - 1
//       while l < r:
//         sum = nums[i] + nums[l] + nums[r]
//         if sum < 0        l++
//         else if sum > 0   r--
//         else:
//           push [nums[i], nums[l], nums[r]]
//           l++; r--
//           while l < r and nums[l] === nums[l-1] l++    // skip dup l
//           while l < r and nums[r] === nums[r+1] r--    // skip dup r
//   - return res
//
// Alternate approaches:
//   1) Brute force: three nested loops + a Set to dedupe.
//      Time: O(n^3)   Space: O(n). Simple but too slow for the constraints.
//   2) Fix i, then hashmap Two Sum on the rest (instead of two pointers).
//      Time: O(n^2)   Space: O(n). Same time class, but sorting + two
//      pointers gives O(1) extra space for the inner loop and makes dedupe
//      trivial via adjacency, so it's the cleaner choice here.
//
// Complexity of the chosen solution:
//   Time:  O(n^2) — sort is O(n log n); the outer loop runs n times and each
//                   inner two-pointer sweep is O(n), so O(n^2) dominates.
//   Space: O(1)   — ignoring the output list, only pointers/indices. (The
//                   sort may use O(log n)..O(n) depending on the engine; the
//                   algorithm itself allocates nothing extra.)

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;                         // rest are all positive
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate anchor

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) l++; // skip duplicate l
        while (l < r && nums[r] === nums[r + 1]) r--; // skip duplicate r
      }
    }
  }

  return res;
};

console.log('[-1,0,1,2,-1,-4] ->', threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log('[0,1,1]          ->', threeSum([0, 1, 1]));             // []
console.log('[0,0,0]          ->', threeSum([0, 0, 0]));             // [[0,0,0]]
console.log('[-2,0,0,2,2]     ->', threeSum([-2, 0, 0, 2, 2]));      // [[-2,0,2]]
console.log('[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] ->', threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
