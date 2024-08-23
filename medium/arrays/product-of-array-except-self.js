const n = [1, 2, 3, 4];
// const productExceptSelf = function(nums) {
// 	let n = nums.length;
// 	let result = new Array(n).fill(1);

// 	let leftProduct = 1;
// 	for(let i = 0; i < n; i++) {
// 		result[i] = leftProduct;
// 		leftProduct *= nums[i];
// 	}
	
// 	let rightProduct = 1;
// 	for(let i = n - 1; i >= 0; i--) {
// 		result[i] *= rightProduct;
// 		rightProduct *= nums[i];
// 	}
// 	return result;
// }

// coding interview sample

const productExceptSelf = function(nums) {
	const len = nums.length;
	const result = new Array(len).fill(1);
	let leftProduct = 1;
	for(let i = 0; i < len; i++) {
		result[i] = leftProduct;
		leftProduct *= nums[i];
	}

	let rightProduct = 1;
	for(let i = len - 1; i >= 0; i--) {
		result[i] *= rightProduct;
		rightProduct *= nums[i];
	}

	return result;
}

console.log('product except self', productExceptSelf(n));
