const numbers = [2,2,1,1,1,2,2];
function majorityElement(nums) {
  // code here
  let max = 0;
  let seenmap = {};
  for(let i = 0; i < nums.length; i++) {
    seenmap[nums[i]] ? seenmap[nums[i]]++ : seenmap[nums[i]] = 1;
    if(seenmap[nums[i]] > nums.length / 2) {
      max = nums[i];
    }
  }
  return max;

    // Boyer-Moore mayority vote algorithm
    // let solution;
    // let count = 0;
    // for(const n of nums) {
    //   if(count === 0) {
    //     solution = n;
    //   }
    //   count += (n === solution) ? 1 : -1;
    // }
    // return solution;
}

console.log('majority element', majorityElement(numbers));