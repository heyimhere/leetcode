const str = "IceCreAm";
const reverseVowels = (s) => {
	let i = 0;
	let j = s.length - 1;
	let vowels = new Set(["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]);
	let ans = [...s];

	while(i < j) {
		if(vowels.has(ans[i]) && vowels.has(ans[j])) {
			let temp = ans[i];
			ans[i] = ans[j];
			ans[j] = temp;
			i++;
			j--;
		}

		if(!vowels.has(ans[i])) {
			i++;
		}

		if(!vowels.has(ans[j])) {
			j--;
		}
	}

	return ans.join("");
};

console.log('reverse vowels', reverseVowels(str));
