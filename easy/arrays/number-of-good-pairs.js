const n = [1,2,3,1,1,3];
const numIdenticalPairs = (nums) => {
  // code here
  let sum = 0;
  let left = 0;
  let right = 1;
  while(left <= nums.length - 2) {
    if(nums[left] === nums[right] && left < right) {
      sum++;
    }
    if(right === nums.length - 1 || right > nums.length - 1) {
      right = left++;
    }
    right++;
  }
  return sum;
};

console.log('number of identical pairs', numIdenticalPairs(n));
