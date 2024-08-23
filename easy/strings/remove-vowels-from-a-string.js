const str = 'leetcodeisacommunityforcoders';

const hashmap = {
	'a': true,
	'e': true,
	'i': true,
	'o': true,
	'u': true
}

// const removeVowels = (s) => {
// 	let safeString = '';
// 	for(let i = 0; i < s.length; i++) {
// 		if(!hashmap[s[i]]) {
// 			safeString += s[i];
// 		}
// 	}

// 	return safeString;
// };

// const removeVowels = (s) => {
// 	let safeString = '';

// 	for(let i = 0; i < s.length; i++) {
// 		if(!hashmap[s[i]]) {
// 			safeString += s[i];
// 		}
// 	}
// 	return safeString;
// }

const removeVowels = (s) => {
	const vow = ['a', 'e', 'i', 'o', 'u'];

	const result = s.split('').filter(each => !vow.includes(each)).join('');
	return result;
}

console.log('remove vowels', removeVowels(str));

