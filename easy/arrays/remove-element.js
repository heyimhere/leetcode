const numbers = [3,2,2,3];
const value = 3;
function removeElement(nums, val) {
  // code here
  let removeCount = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[removeCount++] = nums[i];
    }
  }
  return removeCount;
}

console.log('remove element', removeElement(numbers, value));