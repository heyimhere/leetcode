const string = 'anagram';
const tring = 'nagaram';
function isAnagram(s, t) {
	// code here
	let firstString = Array.from(s, String);
	let secondString = Array.from(t, String);
	let hashMap = {};
	if(firstString.length !== secondString.length) {
		return false;
	}
	for(let i = 0; i < firstString.length; i++) {
		hashMap[firstString[i]] ? hashMap[firstString[i]]++ : hashMap[firstString[i]] = 1;
	}
	for(let i = 0; i < secondString.length; i++) {
		if(hashMap[secondString[i]]) {
			hashMap[secondString[i]]--;
		}
	}
	return Object.values(hashMap).every(value => value === 0);  
};

console.log('is anagram', isAnagram(string, tring));
