const str = 'abc';
const tsr = 'bac';

// const findPermutationDifference = (s, t) => {
// 	let total = 0;
// 	for(let i = 0; i < s.length; i++) {
// 		for(let j = 0; j < t.length; j++) {
// 			if(s[i] === t[j]) {
// 				let sub = Math.abs(i - j);
// 				total += sub;
// 			}
// 		}
// 	}
// 	return total;
// };


const findPermutationDifference = (s, t) => {
	let total = 0;
	for(let i = 0; i < s.length; i++) {
		for(let j = 0; j < t.length; j++) {
			if(s[i] === t[j]) {
				let sub = Math.abs(i - j);
				total += sub;
			}
		}
	}
	return total;
}

console.log('permutation difference', findPermutationDifference(str, tsr));
