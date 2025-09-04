
const subArraySum = (nums, k) => {
	const prefixCount = { 0: 1 };
	let count = 0;
	let sum = 0;

	for(let num of nums) {
		sum += num;
		if(prefixCount[sum - k]) {
			count += prefixCount[sum - k];
		}

		prefixCount[sum] = (prefixCount[sum] || 0) + 1;
	}

	return count;
};

console.log('sub array sum', subArraySum([1, 2, 3], 3));
