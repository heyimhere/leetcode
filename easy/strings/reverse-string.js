const str = ['h', 'e', 'l', 'l', 'o'];
const reverseString = function(s) {
	let i = 0;
	let j = s.length - 1;
	while(i < j) {
		temp = s[i];
		s[i] = s[j];
		s[j] = temp;
		i++;
		j--;
	}
	console.log('s', s);
};

// coding interview sample

console.log('reverse a string', reverseString(str));
