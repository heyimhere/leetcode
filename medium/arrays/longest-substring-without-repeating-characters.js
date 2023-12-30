const string = 'abcabcbb';
const lengthOfLongestSubstring = (s) => {
	// code here
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

console.log('length of longest substring', lengthOfLongestSubstring(string));
