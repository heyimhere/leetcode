// LC #496 - Next Greater Element I
// Difficulty: Easy | Pattern: Monotonic Stack + HashMap
//
// You have two arrays: nums1 is a subset of nums2.
// For each number in nums1, find the next greater number in nums2.
// The "next greater" means the first number to the RIGHT of that element in nums2 that is larger.
// If none exists, return -1 for that element.
//
// Example:
//   nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
//   - 4 → no greater element to its right in nums2 → -1
//   - 1 → next greater to the right is 3 → 3
//   - 2 → no greater element to its right in nums2 → -1
//   Output: [-1, 3, -1]
//
// HINT: Process nums2 with a monotonic stack to precompute next-greater for every element.
// Store results in a Map, then just look up each nums1 value.

const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  const need = new Map();
  const ans = [];

  for(let i = 0; i < nums2.length; i++) {
    while(nums2[i] > stack[stack.length - 1]) {
      let top = stack.pop();
      need.set(top, nums2[i]);
    }
    stack.push(nums2[i]);
  }

  for(let i = 0; i < nums1.length; i++) {
    if(need.has(nums1[i])) {
      ans.push(need.get(nums1[i]));
    } else {
      ans.push(-1);
    }
  }

  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));    // [3, -1]
console.log(nextGreaterElement([1], [1]));                  // [-1]
console.log(nextGreaterElement([3, 1], [3, 1, 2]));        // [-1, 2]
