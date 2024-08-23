const a = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const num = 1;
// const flat = (arr, n) => {
// 	if(n === 0) return arr;
// 	const flattenArray = [];
// 	for(let i = 0; i < arr.length; i++) {
// 		if(Array.isArray(arr[i])) {
// 			flattenArray.push(...flat(arr[i], n - 1));
// 		} else {
// 			flattenArray.push(arr[i]);
// 		}
// 	}
// 	return flattenArray;
// }

const flat = (arr, n) => {
	if(n === 0) return arr;
	let flattenArray = [];
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			flattenArray.push(...flat(arr[i], n - 1));
		} else {
			flattenArray.push(arr[i]);
		}
	}
	return flattenArray;
}

// I like this problem.

console.log('flatten array', flat(a, num));
