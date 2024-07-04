const str = "the sky is  blue";
const reverseWords = function(s) {
	const wordArray = s.split(' ');
	console.log('wordArray', wordArray);
	let temp = '';
	for(let i = wordArray.length - 1; i >= 0; i--) {
		console.log('wordArray[i]', wordArray[i]);
		if(wordArray[i]) {
			temp += (temp ? ' ' : '') + wordArray[i];
		}
	}
	return temp;
};

// coding interview sample

console.log('reverse words', reverseWords(str));
