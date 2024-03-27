const n = [-6,2,5,-2,-7,-1,3];
const t = -2;

const countPairs = function(nums, target) {
  let i = 0;
  let j = 1;
  let sum = 0;
  while(i < nums.length - 1) {
    if(i < j && ((nums[i] + nums[j]) < target)) {
      console.log('sum', nums[i] + nums[j]);
      sum++;
    }
    if(j >= nums.length - 1) {
      i++;
      j = i;
    }
    j++;
  }
  return sum;
};

console.log('count pairs', countPairs(n, t));
