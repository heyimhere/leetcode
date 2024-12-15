const t = 11;
const n = [1, 2, 3, 4, 5];

// const minSubArrayLen = function(target, nums) {
// 	let left = 0;
// 	let right = 0;
// 	let minValue = Infinity;
// 	let subArraySum = nums[0];
//
// 	while(left <= right && right < nums.length) {
// 		if(subArraySum >= target) {
// 			minValue = Math.min(minValue, right - left + 1);
// 			subArraySum -= nums[left];
// 			left++;
// 		} else {
// 			right++;
// 			subArraySum += nums[right];
// 		}
// 	}
//
// 	return minValue === Infinity ? 0 : minValue;
//
// };

const minSubArrayLen = (target, nums) => {
	let minLen = Infinity;
	let left = 0;
	let sum = 0;

	for(let i = 0; i < nums.length; i++) {
		sum += nums[i];

		while(sum >= target) {
			minLen = Math.min(i - left + 1, minLen);
			sum -= nums[left]
			left++;
		}
	}
	return minLen === Infinity ? 0 : minLen;
}

console.log('minimum sub array length', minSubArrayLen(t, n));
