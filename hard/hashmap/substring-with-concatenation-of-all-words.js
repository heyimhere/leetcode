const string = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
const w = ["fooo","barr","wing","ding","wing"];

// this works but description is garbage and it should say,
// match the total length of all the word strings.

const mapcheck = function(wordMap, wordArray) {
	let tempMap = {};

	wordArray.forEach(each => {
		tempMap[each] = (tempMap[each] || 0) + 1;
	});

	if(Object.keys(wordMap).length !== Object.keys(tempMap).length) {
		return false;
	}

	for(let [word, count] of Object.entries(wordMap)) {
		if(!tempMap[word] || tempMap[word] !== count) {
			return false;
		}

		return true;
	}
}

// come back here and finsih it
const findSubstring = function(s, words) {
	let hashMap = {};
	const len = words[0].length;
	const arrayLength = words.length;
	let j = 0;
	let k = 0;
	let ans = [];
	for(let i = 0; i < words.length; i++) {
		hashMap[words[i]] ? hashMap[words[i]]++ : hashMap[words[i]] = 1;
	}
	let tempIndexes = [];
	let eachWord = ""; 
	let tempWordCheck = [];
	let newIndexes = [];

	while(j < s.length) {
		eachWord = eachWord + s[k];
		if(eachWord.length === len) {
			if(eachWord in words) {
				tempWordCheck.push(eachWord);
				tempIndexes.push(j);
			} else {
				tempWordCheck = [];
				tempIndexes = [];
			}
			eachWord = "";
			j = j + len;
		}

		let everyCheck = false;
		if(tempWordCheck.length === arrayLength) {

			everyCheck = mapcheck(hashMap, tempWordCheck);
			console.log('everyCheck', everyCheck);
			// everyCheck = Object.keys(hashMap).every(element => tempWordCheck.includes(element));
			if(!everyCheck) {
				let tempCheck = tempWordCheck;
				let tempIndex = tempIndexes;
				tempWordCheck = [];
				tempIndexes = [];
				tempWordCheck.push(...tempCheck.slice(Math.floor(arrayLength / 2)));
				tempIndexes.push(tempIndex.slice(Math.floor(arrayLength / 2)));
			}
		}

		if(everyCheck) {
			ans.push(tempIndexes);
			newIndexes.push(k - (arrayLength * len) + 1);
			let tempCheck = tempWordCheck;
			let tempIndex = tempIndexes;
			tempWordCheck = [];
			tempIndexes = [];
			tempWordCheck.push(...tempCheck.slice(Math.floor(arrayLength / 2)));
			tempIndexes.push(tempIndex.slice(Math.floor(arrayLength / 2)));
		}

		k++;
	}

	return newIndexes;
};

console.log('find substring', findSubstring(string, w));
