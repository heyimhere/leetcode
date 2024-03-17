const n1 = [1, 2, 3];
const n2 = [2, 4];
const getCommon = function(nums1, nums2) {
	// code here
	let common = Infinity;
	let i = 0, j = 0;
	while(i < nums1.length && j < nums2.length) {
		if(nums1[i] === nums2[j]) {
			common = nums1[i];
			break;
		} else if(nums1[i] < nums2[j]) {
			i++;
		} else {
			j++;
		}
	}
	return common !== Infinity ? common : -1;
};

console.log('get common', getCommon(n1, n2));
