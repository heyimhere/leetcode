// const numbers = [1, 2, 3, 4, 4, 3, 2, 1];
// let num = 4;
// const shuffle = function(nums, n) {
//   let temp;
//   let initialNumber = num;
//   for(let i = 1; i < nums.length; i++) {
//     if(i % 2 === 1) {
//       temp = nums[i];
//       nums[i] = nums[num];
//       num++;
//     } else {
//       if(nums[i] === initialNumber) {
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//         temp = initialNumber;
//       } else {
//         let swap = nums[i];
//         nums[i] = temp;
//         temp = swap;
//       }
//     }
//   } 
//   return nums;
// };

const numbers = [1, 2, 3, 4, 4, 3, 2, 1];
const num = 4;
const shuffle = function(nums, n) {
  let res = [];
  for(let i = 0; i < n; i++) {
    res.push(nums[i], nums[i + n]);
  }
  return res;
}

console.log('shuffle the array', shuffle(numbers, num));
