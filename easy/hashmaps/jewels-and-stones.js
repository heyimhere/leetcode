const j = "aA";
const s = "aAAbbbb";

const numJewelsInStones = function(jewels, stones) {
	// code here
	let hashmap = {};
	for(let i = 0; i < jewels.length; i++) {
		if(!(jewels[i] in hashmap)) {
			hashmap[jewels[i]] = true;
		}
	}

	let ans = 0;

	for(let j = 0; j < stones.length; j++) {
		if(stones[j] in hashmap) {
			ans++;
		};
	};
	return ans;
};

console.log('number of jewels in stones', numJewelsInStones(j, s));
