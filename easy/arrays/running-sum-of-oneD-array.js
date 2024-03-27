const n = [1, 2, 3, 4];

const runningSum = function(nums) {
  let count = 0;
  let ans = [];
  for(let i = 0; i < nums.length; i++) {
    count += nums[i];
    ans.push(count);
  }
  return ans;
};

console.log('running sum', runningSum(n));
