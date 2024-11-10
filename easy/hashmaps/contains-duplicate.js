const  n = [1, 2, 3, 1];

// hashtable
// const containsDuplicate = (nums) => {
// 	// code here
// 	const hashmap = new Map();
//
// 	for(let i = 0; i < nums.length; i++) {
// 		hashmap.has(nums[i]) ? hashmap.set(nums[i], hashmap.get(nums[i]) + 1) : hashmap.set(nums[i], 1);
// 	}
//
// 	let ans = false;
//
// 	hashmap.forEach((each) => {
// 		if(each > 1) {
// 			ans = true;
// 		}
// 	});
//
// 	return ans;
// }

const containsDuplicate = (nums) => {
	const hashmap = new Map();

	for(let n of nums) {
		if(hashmap.has(n)) {
			return true;
		}

		hashmap.set(n);
	}
	return false;
}

console.log('contains duplicates', containsDuplicate(n));
