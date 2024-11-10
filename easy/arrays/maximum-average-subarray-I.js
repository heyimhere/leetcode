const n = [1, 12, -5, -6, 50, 3];
const kay = 4;

const findMaxAverage = function(nums, k) {
  // code here
  let max = 0;
  let maxSum = 0;
  for(let i = 0; i < k; i++) {
    max += nums[i];
  }

  maxSum = max;

  for(let i = k; i < nums.length; i++) {
    max += nums[i] - nums[i - k];

    maxSum = Math.max(max, maxSum);
  }

  return maxSum / k;

};

console.log('find max average', findMaxAverage(n, kay));
