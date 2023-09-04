const numbers = [0,0,1,1,1,2,2,3,3,4];
function removeDuplicates(nums) {
  // code here
  let seenmap = {};
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(!seenmap[nums[i]]) {
      nums[count++] = nums[i];
      seenmap[nums[i]] = 'seen';
    }
  }
  return count;
}

console.log('remove duplicates', removeDuplicates(numbers));