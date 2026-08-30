const twoSum = (nums, target) => {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (seen.has(diff)) {
      return [i, seen.get(diff)];
    }

    seen.set(nums[i], i);
  }

  return [];
};

console.log('[2,7,11,15], 9 ->', twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log('[3,2,4],     6 ->', twoSum([3, 2, 4], 6));      // [1,2]
console.log('[3,3],       6 ->', twoSum([3, 3], 6));         // [0,1]
console.log('[-1,-2,-3,-4,-5], -8 ->', twoSum([-1, -2, -3, -4, -5], -8)); // [2,4]
console.log('[0,4,3,0],   0 ->', twoSum([0, 4, 3, 0], 0));   // [0,3]
