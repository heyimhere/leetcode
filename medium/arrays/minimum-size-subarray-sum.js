const t = 7;
const n = [2, 3, 1, 2, 4, 3];

const minSubArrayLen = function(target, nums) {
	let left = 0;
	let right = 0;
	let minValue = Infinity;
	let subArraySum = nums[0];

	while(left <= right && right < nums.length) {
		if(subArraySum >= target) {
			minValue = Math.min(minValue, right - left + 1);
			subArraySum -= nums[left];
			left++;
		} else {
			right++;
			subArraySum += nums[right];
		}
	}

	return minValue === Infinity ? 0 : minValue;

};

console.log('minimum sub array length', minSubArrayLen(t, n));
