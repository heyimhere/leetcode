// const numbers = [1,1,0,1,1,1];
// const numbers = [1,0,1,1,0,1]
const numbers = [1,1,0,1];

function findMaxConsecutiveOnes(nums) {
  // code here
  let max = 0, curr = 0;
  for (let k of nums) {
    max = Math.max(max, curr += k);
    if (!k) curr = 0;
  }
  return max;
}

console.log('find max consecutive ones', findMaxConsecutiveOnes(numbers));