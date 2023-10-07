const randsome = "aa";
const note = "aab";
function canConstruct(ransomNote, magazine) {
	// code here
	let ransomehash = {};
	for(let i = 0; i < magazine.length; i++) {
		ransomehash[magazine[i]] ? ransomehash[magazine[i]] += 1: ransomehash[magazine[i]] = 1;
	}
	console.log('hashmap', ransomehash);
	for(let i = 0; i < ransomNote.length; i++) {
		if(!ransomehash[ransomNote[i]]) {
			return false;
		}
		if(ransomehash.hasOwnProperty(ransomNote[i])) {
			--ransomehash[ransomNote[i]];
		} 
	}
	return true;
}

console.log('can construct', canConstruct(randsome, note));
