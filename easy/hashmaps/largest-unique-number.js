
const largestUniqueNumber = function(nums) {
	let hashMap = {};
	for(let i = 0; i < nums.length; i++) {
		hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + 1 : hashMap[nums[i]] = 1;
	}

	console.log('hasmap', hashMap);
	let maxNumber = 0;
	for(let [key, value] of Object.entries(hashMap)) {
		console.log('key', key, 'value', value);
		if(value === 1) {
			maxNumber = Math.max(maxNumber, key);
		}
	}

	return maxNumber;

}

console.log('unique number', largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]));
