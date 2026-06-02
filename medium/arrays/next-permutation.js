// TODO: implement
// LC #31 — Next Permutation
//
// Implement next-permutation: rearrange `nums` IN PLACE into the NEXT
// lexicographically greater permutation. If no such permutation exists
// (it's the largest), rearrange to the lowest (sorted ascending).
//
// Example:
//   [1,2,3]   → [1,3,2]
//   [3,2,1]   → [1,2,3]     (was largest → wrap to smallest)
//   [1,1,5]   → [1,5,1]
//
// Approach (the classic 3-step trick):
//   1. From the right, find the first index i where nums[i] < nums[i+1].
//      Call it the "pivot." If none exists, the array is descending →
//      reverse the whole array and return.
//   2. From the right, find the first index j > i where nums[j] > nums[i].
//   3. Swap nums[i] and nums[j].
//   4. Reverse the suffix nums[i+1 .. n-1].
//
// Why it works:
//   The suffix to the right of i is non-increasing (because i was the
//   first descent from the right). Swapping with the smallest value
//   greater than nums[i] picks the next "thousands digit." Reversing the
//   suffix (which is still non-increasing after the swap) makes it the
//   smallest possible — which is what "next permutation" wants.
//
// Time:  O(n)
// Space: O(1)
//
// Edge Cases:
//   - Strictly descending input (largest perm) → reverse to ascending
//   - Length 0 or 1                            → no-op
//   - Duplicates (e.g. [1,1,5])                → step 2 finds the LAST
//                                                 element strictly > pivot

/**
 * @param {number[]} nums
 * @returns {void}  (mutates in place)
 */
const nextPermutation = (nums) => {
  // your code here
};

console.log('=== LC #31 Next Permutation ===\n');

const a = [1, 2, 3];
nextPermutation(a);
console.log('Test 1:', a);
// Expected: [1,3,2]

const b = [3, 2, 1];
nextPermutation(b);
console.log('Test 2:', b);
// Expected: [1,2,3]

const c = [1, 1, 5];
nextPermutation(c);
console.log('Test 3:', c);
// Expected: [1,5,1]

const d = [1, 3, 2];
nextPermutation(d);
console.log('Test 4:', d);
// Expected: [2,1,3]
