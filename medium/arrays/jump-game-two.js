const n = [2,3,1,1,4];

const jump = function(nums) {
	let hop = 0;
	let prev = 0;
	let max = 0;
	for(let i = 0; i < nums.length - 1; i++) {
		max = Math.max(max, i + nums[i]);
		if(i === prev) {
			hop++;
			prev = max;
		}
	}
	return hop;
};

console.log('jump', jump(n));
