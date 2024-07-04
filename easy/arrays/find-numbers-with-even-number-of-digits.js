const n = [12, 345, 2, 6, 7896];
const findNumbers = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    const calc = String(nums[i]).length % 2;
    if(calc === 0 && String(nums[i]).length !== 1) {
      count++
    }
  }
  return count;
};

console.log('find numbers', findNumbers(n));
