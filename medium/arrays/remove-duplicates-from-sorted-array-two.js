const numbers = [1,1,1,2,2,3];
function removeDuplicates(nums) {
  // code here
  if(nums.length < 2) {
    return nums.length;
  }
  let count = 2;
  for(let i = 2; i < nums.length; i++) {
    if(nums[i] !== nums[count - 2] || nums[i] !== nums[count - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

console.log('remove duplicates', removeDuplicates(numbers));