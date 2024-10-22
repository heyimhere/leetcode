const n = [0, 1, 0, 3, 12];

const moveZeroes = (nums) => {
  // code here
  let j = 0;
  let start = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};

console.log('move zeroes', moveZeroes(n));
