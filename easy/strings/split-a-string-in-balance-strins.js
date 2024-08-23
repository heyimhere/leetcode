const str = "RLRRLLRLRL";
const balanceStringSplit = (s) => {
	let counter = 0;
	let total = 0;

	for(let i = 1; i < s.length; i++) {
		if(s[i] === 'L') {
			total += 1;
		} else {
			total -= 1;
		}
		if(total === 0) {
			counter++;
		}
	}
	return counter;
};

console.log('balance strings', balanceStringSplit(str));
