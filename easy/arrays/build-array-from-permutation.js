const n = [0, 2, 1, 5, 3, 4];

function buildArray(nums) {
  const ans = [];
  for(let i = 0; i < nums.length; i++) {
    let temp = nums[nums[i]];
    ans.push(temp);
  }
  return ans;
};

console.log('build array', buildArray(n));
