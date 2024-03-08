const first = 1;
const second = 20;
const numberCount = function(a, b) {
	let ans = 0;
	for(let i = a; i <= b; i++) {
		if(isUnique(i)) {
			ans++;
		}
	}
	return ans;
};

const isUnique = function(n) {
	let str = String(n);
	let hashmap = {};
	for(let i = 0; i < str.length; i++) {
		if(str[i] in hashmap) {
			return false;
		};
		hashmap[str[i]] = true;
	}
	return true;
};

console.log('number count', numberCount(first, second));
