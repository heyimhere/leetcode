const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

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
        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      }
    }
  }
  return res;
}

console.log('[-1,0,1,2,-1,-4] ->', threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log('[0,1,1]          ->', threeSum([0, 1, 1]));             // []
console.log('[0,0,0]          ->', threeSum([0, 0, 0]));             // [[0,0,0]]
console.log('[-2,0,0,2,2]     ->', threeSum([-2, 0, 0, 2, 2]));      // [[-2,0,2]]
console.log('[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] ->', threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
