const n = [2, 3, 1, 1, 4];
const canJump = function(nums) {
  // code here
  let max =  nums[0];
  for(let i = 0; i < nums.length; i++) {
    if(max < i) return false;
    max = Math.max(i + nums[i], max);
  }
  return true;
}

console.log('can jump', canJump(n));
