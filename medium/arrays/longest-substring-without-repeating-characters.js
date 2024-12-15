const string = 'abcabcbb';
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(seenMap.get(s[i]) + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	};
// 	return maxLength;
// };

// practice 1
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(seenMap.get(s[i]) + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	};
// 	return maxLength;
// }

// practice 2
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(seenMap.get(s[i]) + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 3
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 4 
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 5
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 6
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 7 
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 8
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 9
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

// practice 10
// const lengthOfLongestSubstring = (s) => {
// 	const seenMap = new Map();
// 	let start = 0;
// 	let maxLength = 0;
//
// 	for(let i = 0; i < s.length; i++) {
// 		if(seenMap.has(s[i])) start = Math.max(s[i] + 1, start);
// 		seenMap.set(s[i], i);
// 		maxLength = Math.max(i - start + 1, maxLength);
// 	}
// 	return maxLength;
// }

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

const lengthOfLongestSubstring = (s) => {
	const seenMap = new Map();
	let left = 0;
	let maxLen = 0;

	for(let i = 0; i < s.length; i++) {
		if(seenMap.has(s[i])) {
			left = Math.max(seenMap.get(s[i]) + 1, left);
		}

		seenMap.set(s[i], i);
		maxLen = Math.max(i - left + 1, maxLen);
	}
	return maxLen;
};

// coding interview sample

console.log('length of longest substring', lengthOfLongestSubstring(string));
