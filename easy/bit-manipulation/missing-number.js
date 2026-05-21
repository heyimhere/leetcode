// LC #268 — Missing Number
//
// Given an array `nums` containing n distinct numbers in the range [0, n],
// return the one number that is missing from the range.
// Constraints: O(n) time, O(1) extra space (for the slick version).
//
// Example:
//   nums = [3, 0, 1]      -> 2   (length is 3, so range is [0..3], missing 2)
//   nums = [0, 1]         -> 2   (length is 2, so range is [0..2], missing 2)
//   nums = [9,6,4,2,3,5,7,0,1] -> 8
//
// Approach (XOR trick — follow-on from LC #136):
//   The full range [0..n] has n+1 numbers. The array has n of them.
//   If we XOR every index i in [0..n] together with every value in nums,
//   each number that *is* present cancels with its matching index (x ^ x = 0).
//   The one index whose value is missing has nothing to cancel against,
//   so it survives in the accumulator.
//
//   Why this works:
//     - x ^ x = 0           (a number XOR'd with itself cancels)
//     - x ^ 0 = x           (XOR with zero is identity)
//     - XOR is commutative + associative, so we can mix indices and values freely
//
// Alternate approach (Gauss sum):
//   Sum of [0..n] is n*(n+1)/2. Subtract sum(nums) to get the missing one.
//   Same O(n) / O(1), but risks overflow on very large n in other languages.
//
// Time:  O(n)  — single pass
// Space: O(1)  — just the accumulator

const missingNumber = (nums) => {
  let acc = nums.length;

  for (let i = 0; i < nums.length; i++) {
    acc = acc ^ i ^ nums[i];
  }

  return acc;
}

console.log('missing number [3,0,1]               ->', missingNumber([3, 0, 1]));               // 2
console.log('missing number [0,1]                 ->', missingNumber([0, 1]));                  // 2
console.log('missing number [9,6,4,2,3,5,7,0,1]   ->', missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log('missing number [0]                   ->', missingNumber([0]));                     // 1
console.log('missing number [1]                   ->', missingNumber([1]));                     // 0
console.log('missing number [0,1,2,3,4,5]         ->', missingNumber([0, 1, 2, 3, 4, 5]));      // 6
