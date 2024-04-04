const c = [1,2,2];

const hIndex = function(citations) {
	let sortedCitations = citations.sort((a, b) => b - a);
	let hashMap = {};
	let counter = 0;
	let store = 0;
	for(let i = 0; i < sortedCitations.length; i++) {
		if(!(sortedCitations[i] in hashMap)) {
			hashMap[i] = sortedCitations[i];
		}

		if(i + 1 >= sortedCitations[i]) {
			store = sortedCitations[i];
			break;
		}
	}

	let len = Object.keys(hashMap).length;

	for(let number in hashMap) {
		if(hashMap[number] >= store && len <= hashMap[number]) {
			counter++;
		}
	}

	return counter;
};

console.log('citations', hIndex(c));
