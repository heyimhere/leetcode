const s1 = 'ABCABC';
const s2 = 'ABC';
const gcOfStrings = (str1, str2) => {
	if(str1 + str2 !== str2 + str1) {
		return "";
	}

	let gcds = (x, y) => {
		if(!y) {
			return x;
		}
		return gcds(y, x % y);
	}

	let ans = gcds(str1.length, str2.length);
	return str1.slice(0, ans);
};

console.log('gc of strings', gcOfStrings(s1, s2));
