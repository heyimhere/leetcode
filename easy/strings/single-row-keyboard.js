const key = 'abcdefghijklmnopqrstuvwxyz';
const wo = 'cba';
const calculateTime = (keyboard, word) => {
	const hashmap = new Map();

	for(let i = 0; i < keyboard.length; i++) {
		hashmap.set(keyboard[i] || 0, i);
	}

	let total = 0;
	let index = 0;

	for(let i = 0; i < word.length; i++) {
		let temp = Math.abs(hashmap.get(word[i]) - index);
		total += temp;
		index = hashmap.get(word[i]);
	}
	return total;
};

console.log('calculate time', calculateTime(key, wo));
