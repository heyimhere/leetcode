const n = [1, 2, 3, 4];
const kth = 5;

const maxOperations = (nums, k) => {
	let ans = 0;

	let sortedArray = nums.sort((a, b) => a - b);
	console.log('sortedArray', sortedArray);

	let i = 0;
	let j = nums.length - 1;

	while(i < j) {
		let sum = nums[i] + nums[j];
		if(sum === k) {
			ans++;
			i++;
			j--;
		} else if(sum > k) {
			j--;
		} else {
			i++;
		} 
	}

	return ans;
};

console.log('max operations', maxOperations(n, kth));
