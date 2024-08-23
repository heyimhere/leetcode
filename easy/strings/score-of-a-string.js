const str = 'hello';
// const scoreOfString  (s) => {
// 	let total = 0;
// 	for(let i = 1; i < s.length; i++) {
// 		let sub = Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));	
// 		total += sub;
// 	}
// 	return total;
// };

// const scoreOfString = (s) => {
// 	let total = 0;
// 	for(let i = 1; i < s.length; i++) {
// 		let sub = Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
// 		total += sub;
// 	}
// 	return total;
// };

const scoreOfString = (s) => {
	let total = 0;
	for(let i = 1; i < s.length; i++) {
		let sub = Math.abs(s.charCodeAt(i - 1) - s.charCodeAt(i));
		total += sub;
	}
	
	return total;
}

console.log('score of string', scoreOfString(str));
