const w1 = 'ab';
const w2 = 'pqrs';

const mergeAlternately = (word1, word2) => {
	let res = '';
	let i = 0;
	let j = 0;
	while(i < word1.length || j < word2.length) {
		if(i < word1.length) {
			res += word1[i];
			i++;
		}

		if(j < word2.length) {
			res += word2[j];
			j++;
		}
	}

	console.log('res', res);
};

console.log('merge alternately', mergeAlternately(w1, w2));
