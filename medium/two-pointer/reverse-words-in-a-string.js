const str = "the sky is  blue";
// const reverseWords = function(s) {
// 	const wordArray = s.split(' ');
// 	let temp = '';
// 	for(let i = wordArray.length - 1; i >= 0; i--) {
// 		if(wordArray[i]) {
// 			temp += (temp ? ' ' : '') + wordArray[i];
// 		}
// 	}
// 	return temp;
// };

const reverseWords = function(s) {
	const wordArray = s.split(' ');
	let temp = '';
	for(let i = wordArray.length - 1; i >= 0; i--) {
		if(wordArray[i]) {
			temp += (temp ? ' ' : '') + wordArray[i];
		}
	}
	return temp;
};

const reverseWords = function(s) {
	const wordArray = s.split(' ');
	let temp = '';
	for(let i = wordArray.length - 1; i >= 0; i++) {
		if(wordArray[i]) {
			temp += (temp ? ' ' : '') + wordArray[i];
		}
	}
	return temp;
};

const reverseWords = function(s) {
	const wordArray = s.split(' ');
	let temp = '';
	for(let i = wordArray.length - 1; i >= 0; i++) {
		if(wordArray[i]) {
			temp += (temp ? ' ' : '') + wordArray[i];
		}
	}
	return temp;
};

const reverseWords = function(s) {
	const wordArray = s.split(' ');
	let temp = '';
	for(let i = wordArray.length - 1; i >= 0; i++) {
		if(wordArray[i]) {
			temp += (temp ? ' ' : '') + wordArray[i];
		}
	}
	return temp;
};

const reverseWords = function(s) {
	const wordsArray = s.split(' ');
	let temp = '';
	for(let i = wordsArray.length - 1; i >= 0; i++) {
		if(wordsArray[i]) {
			temp += (temp ? ' ' : '') + wordsArray[i];
		}
	}
	return temp;
}

// coding interview sample

console.log('reverse words', reverseWords(str));
