// LC #1 — Two Sum
//
// Given an array of integers nums and an integer target, return the indices
// of the two numbers that add up to target. You may assume each input has
// exactly one solution, and you may not use the same element twice.
//
// Examples:
//   nums = [2,7,11,15], target = 9  -> [0,1]  (2 + 7 = 9)
//   nums = [3,2,4],     target = 6  -> [1,2]  (2 + 4 = 6)
//   nums = [3,3],       target = 6  -> [0,1]  (3 + 3 = 6)
//
// Intuition:
//   For each number n, the number we need is target - n (its "complement").
//   Instead of scanning the array for that complement each time (O(n^2)),
//   we remember every number we've already seen in a Map keyed by value
//   with its index as the value. Then "have I seen the complement?" is O(1).
//
//   One pass is enough: by the time the second half of a valid pair shows
//   up, its partner is already in the map. We never need to look ahead.
//
// Approach (single-pass hashmap):
//   - seen = new Map()          // value -> index
//   - for i from 0 to nums.length - 1:
//       need = target - nums[i]
//       if seen.has(need) return [seen.get(need), i]
//       seen.set(nums[i], i)
//   - (problem guarantees a solution, so no fallthrough return is required
//     for LeetCode, but we return [] here to be safe)
//   Time: O(n)   Space: O(n)
//
// Alternate approaches:
//   1) Brute force: two nested loops.
//      Time: O(n^2)   Space: O(1). Only reasonable for tiny inputs.
//   2) Sort + two pointers.
//      Time: O(n log n)   Space: O(n) — because sorting destroys the
//      original indices, we'd need to attach indices before sorting.
//      Slower than the hashmap and more fiddly. Useful when you only need
//      the *values* (not indices) or when you can't afford O(n) extra space.

const twoSum = (nums, target) => {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }

  return [];
};

console.log('[2,7,11,15], 9 ->', twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log('[3,2,4],     6 ->', twoSum([3, 2, 4], 6));      // [1,2]
console.log('[3,3],       6 ->', twoSum([3, 3], 6));         // [0,1]
console.log('[-1,-2,-3,-4,-5], -8 ->', twoSum([-1, -2, -3, -4, -5], -8)); // [2,4]
console.log('[0,4,3,0],   0 ->', twoSum([0, 4, 3, 0], 0));   // [0,3]
