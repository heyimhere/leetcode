const n = [1, 0, 1, 1];
const t = 1;
function containsNearbyDuplicate(nums, k) {
	// code here
	let hashMap = new Map();
	for(let i = 0; i < nums.length; i++) {
		if(i - hashMap.get(nums[i]) <= k) {
			return true;
		}
		hashMap.set(nums[i], i);
	};
	return false;
}

console.log('contains duplicate', containsNearbyDuplicate(n, t));
