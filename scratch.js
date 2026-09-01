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

