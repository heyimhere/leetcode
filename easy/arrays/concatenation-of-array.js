const n = [1, 2, 3];

const getConcatenation = function(nums) {
  const ans = new Array(nums.length * 2);
  const position = nums.length;
  for(let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + position] = nums[i];
  }
  return ans;
};

console.log('get concat', getConcatenation(n));
