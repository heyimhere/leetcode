const ch = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];

const compress = (chars) => {
	// code here
	let i = 0;
	let index = 0;
	while(i < chars.length) {
		let j = i;
		let curr = chars[j];
		while(j < chars.length && chars[j] === chars[i]) {
			j++;
		}

		chars[index++] = chars[i];

		if(j - i > 1) {
			let count = j - i;
			for(let each of count.toString()) {
				chars[index++] = each;
			}
		}
		i = j;
	}
	console.log('chars', chars);
	return index;
};

console.log('compress', compress(ch));
