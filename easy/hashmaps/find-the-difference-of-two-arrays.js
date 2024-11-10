const n1 = [1, 2, 3];
const n2 = [2, 4, 6];

const findDifference = (nums1, nums2) => {
	// code here
	let s1 = new Set(nums1);
	let s2 = new Set(nums2);

	let ans = [[], []];

	for(let each of s1) {
		if(!s2.has(each)) {
			ans[0].push(each);
		}
	}
	for(let each of s2) {
		if(!s1.has(each)) {
			ans[1].push(each);
		}
	}

	console.log('ans', ans);
};

console.log('find the difference', findDifference(n1, n2));
