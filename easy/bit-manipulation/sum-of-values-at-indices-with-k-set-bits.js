const n = [5, 10, 1, 5, 2];
const kay = 1;

const sumIndecesWithKSetBits = function(nums, k) {
  let totalSum = 0;
  for(let i = 0; i < nums.length; i++) {
    let bits = i.toString(2);
    console.log('bits', bits);
    let sum = 0;
    for(let item of bits) {
      if(item === '1') {
        sum++;
      }
    }
    if(sum === k) {
      totalSum += nums[i];
    }
  }
  return totalSum;
};

console.log('sum indeces with k set bits', sumIndecesWithKSetBits(n, kay));
