// LC #167 — Two Sum II (Input Array Is Sorted)
//
// Given a 1-indexed array of integers `numbers` that is already sorted in
// non-decreasing order, find two numbers that add up to `target`. Return the
// indices of the two numbers (1-indexed) as [index1, index2] where
// index1 < index2. There is exactly one solution and you may not use the same
// element twice. Must use only O(1) extra space.
//
// Examples:
//   numbers = [2,7,11,15], target = 9  -> [1,2]  (2 + 7 = 9)
//   numbers = [2,3,4],     target = 6  -> [1,3]  (2 + 4 = 6)
//   numbers = [-1,0],      target = -1 -> [1,2]  (-1 + 0 = -1)
//
// Intuition:
//   The array is SORTED — that's the whole trick. In the original Two Sum the
//   array was unordered, so a hashmap (O(n) space) was the play. Here we can
//   exploit the ordering to use two pointers and drop the extra space.
//
//   Put l at the smallest value (left) and r at the largest (right):
//     - sum < target -> we need it bigger. Only way to grow the sum is l++,
//                       because everything right of l is >= numbers[l].
//     - sum > target -> we need it smaller, so r--.
//     - sum === target -> done.
//   Each move provably discards a number that can't be part of any answer, so
//   we never backtrack. The two pointers sweep toward each other in one pass.
//
//   Gotcha: LeetCode wants 1-indexed positions, so return [l + 1, r + 1].
//
// Approach (two pointers):
//   - l = 0, r = numbers.length - 1
//   - while l < r:
//       sum = numbers[l] + numbers[r]
//       if sum === target return [l + 1, r + 1]
//       if sum < target   l++
//       else              r--
//   - return [] (problem guarantees a solution)
//   Time: O(n)   Space: O(1)
//
// Alternate approaches:
//   1) Hashmap (same as LC #1): works but wastes the sorted property.
//      Time: O(n)   Space: O(n). Strictly worse here — violates the O(1)
//      space requirement.
//   2) Binary search for the complement of each element.
//      Time: O(n log n)   Space: O(1). Slower than two pointers; only worth
//      knowing as a "the array is sorted, so I could binary search" instinct.
//
// Complexity of the chosen solution:
//   Time:  O(n)  — l and r start n apart and move one step toward each other
//                  per iteration, so at most n moves before they meet.
//   Space: O(1)  — just two integer pointers; no auxiliary structure.

const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) {
      l++;
    } else {
      r--;
    }
  }

  return [];
};

console.log('[2,7,11,15], 9 ->', twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log('[2,3,4],     6 ->', twoSum([2, 3, 4], 6));       // [1,3]
console.log('[-1,0],     -1 ->', twoSum([-1, 0], -1));        // [1,2]
console.log('[1,2,3,4,4,9,56,90], 8 ->', twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)); // [4,5]
console.log('[5,25,75], 100 ->', twoSum([5, 25, 75], 100));   // [2,3]
