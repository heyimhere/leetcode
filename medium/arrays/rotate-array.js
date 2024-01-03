const n = [1, 2, 3, 4, 5, 6, 7];
const t = 3;
// function rotate(nums, k) {
// 	let count = 0;
// 	let nCount = 0;
// 	let newArray = [];
// 	let newCount = 0;
//   for(let i = k; i > 0; i--) {
// 		let first = nums[count];
// 		let random = nums[k + nCount];
// 		nums[count] = nums[(nums.length) - i];
// 		nums[k + nCount] = first;
// 		if(random + newCount !== nums[count]) {
// 			 newArray.push(random);
// 			 newCount++;
// 		}
// 		count++;
// 		nCount++;
// 	}	

// 	let otherCount = 0;
// 	for(let i = (k * 2); i < nums.length; i++) {
// 		nums[i] = newArray[otherCount];
// 	}

// 	return nums;
// }

function rotate(nums, k) {
  k %= nums.length;
  let reservse = function(i, j) {
    while(i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }
  reservse(0, nums.length - 1);
  reservse(0, k - 1);
  reservse(k, nums.length - 1);
  console.log('nums', nums);
}

console.log('rotate array', rotate(n, t));
