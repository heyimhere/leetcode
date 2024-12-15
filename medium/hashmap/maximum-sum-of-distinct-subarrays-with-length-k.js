const n = [3, 5, 3, 4];
const kay = 2;
const maximumSubarraySum = (nums, k) => {
	let freqCount = new Map();
	let currentSum = 0;
	let maxsum = 0;
	let left = 0;

	for(let right = 0; right < nums.length; right++) {
		currentSum += nums[right];
		freqCount.set(nums[right], (freqCount.get(nums[right]) || 0) + 1);

		if(right - left + 1 === k) {
			if(freqCount.size === k) {
				maxsum = Math.max(maxsum, currentSum);
			}

			currentSum -= nums[left];
			freqCount.set(nums[left], freqCount.get(nums[left]) - 1);
			if(freqCount.get(nums[left]) === 0) {
				freqCount.delete(nums[left]);
			}

			left++;
		}
	}

	return maxsum;
};

console.log('maximum sub array sum', maximumSubarraySum(n, kay));
