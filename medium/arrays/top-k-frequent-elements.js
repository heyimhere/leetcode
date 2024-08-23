const numbers = [1, 1, 1, 2, 2, 3];
const ta = 2;
// const topKFrequent = (nums, k) => {
// 	const hashmap = new Map();
// 	for(let each of nums) {
// 		if(hashmap.has(each)) {
// 			hashmap.set(each, hashmap.get(each) + 1);
// 		} else {
// 			hashmap.set(each, 1);
// 		}
// 	}
// 	let values = Array.from(hashmap).sort((a, b) => b[1] - a[1]);
// 	let ans = [];
// 	for(let i = 0; i < k; i++) {
// 		ans.push(values[i][0]);
// 	}
// 	return ans;
// };

// coding interview sample

const topKFrequent = (nums, k) => {
	const hashmap = new Map();

	for(let each of nums) {
		if(hashmap.has(each)) {
			hashmap.set(each, hashmap.get(each) + 1);
		} else {
			hashmap.set(each, 1);
		}
	}

	const values = Array.from(hashmap).sort((a, b) => b[1] - a[1]);
	let ans = [];
	for(let i = 0; i < k; i++) {
		ans.push(values[i][0]);
	}
	return ans;
}

console.log('top k frequent', topKFrequent(numbers, ta));
