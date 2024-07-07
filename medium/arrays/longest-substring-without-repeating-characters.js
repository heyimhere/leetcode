const string = 'abcabcbb';
const lengthOfLongestSubstring = (s) => {
	const seenMap = new Map();
	let start = 0;
	let maxLength = 0;

	for(let i = 0; i < s.length; i++) {
		if(seenMap.has(s[i])) start = Math.max(seenMap.get(s[i]) + 1, start);
		seenMap.set(s[i], i);
		maxLength = Math.max(i - start + 1, maxLength);
	};
	return maxLength;
};

// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
	
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(seenMap.get(s[i]) + 1, start);
// 		seenMap.set(s[i], i);
// 		maxlength = Math.max(i - start + 1, maxlength);
// 	};
// 	return maxLength;
// }

// coding interview sample

console.log('length of longest substring', lengthOfLongestSubstring(string));
