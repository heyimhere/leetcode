const n = [-1, 0, 1, 2, -1, -4];

const threeSum = function(nums) {
	let target = 0;
	let ans = [];
	nums = nums.sort((a, b) => a - b);
	for(let i = 0; i < nums.length - 2; i++) {
		let j = i + 1;
		let k = nums.length - 1;
		while(j < k) {
			partialSum = nums[i] + nums[j] + nums[k];
			if(partialSum === target) {
				ans.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
			} else if(partialSum > target) {
				k -= 1;
			} else {
				j += 1;
			}
		}
	}
	const uniqueSet = new Set(ans.map(each => JSON.stringify(each)));
	const uniqueArrays = Array.from(uniqueSet).map(each => JSON.parse(each));
	console.log('ans', ans);
	return uniqueArrays;
};

console.log('three sum', threeSum(n));
