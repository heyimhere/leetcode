// LC #136 — Single Number
//
// Given a non-empty array where every element appears twice except one,
// return the element that appears only once.
// Constraints: O(n) time, O(1) extra space.
//
// Approach: XOR every value into an accumulator.
//   - x ^ x = 0  (a number XOR'd with itself cancels to zero)
//   - x ^ 0 = x  (XOR with zero leaves a number unchanged)
//   - XOR is commutative + associative, so order doesn't matter
// Result: every duplicate pair cancels to 0, the lone element survives.
//
// Time:  O(n)  — single pass through the array
// Space: O(1)  — just the accumulator

const singleNumber = (nums) => {
  let acc = 0;

  for (let num of nums) {
    acc = acc ^ num;
  }

  return acc;
};

console.log('single number [2,2,1]            ->', singleNumber([2, 2, 1]));            // 1
console.log('single number [4,1,2,1,2]        ->', singleNumber([4, 1, 2, 1, 2]));      // 4
console.log('single number [1]                ->', singleNumber([1]));                  // 1
console.log('single number [7,3,7,3,9,5,5]    ->', singleNumber([7, 3, 7, 3, 9, 5, 5]));// 9
console.log('single number [-1,-1,-2]         ->', singleNumber([-1, -1, -2]));         // -2 (works on negatives too!)
console.log('single number [0,1,0]            ->', singleNumber([0, 1, 0]));            // 1
