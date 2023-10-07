const st = "foo";
const ts = "bar";
function isIsomorphic(s, t) {
	// code here
	let mapS = {};
	let mapT = {};
	for(let i = 0; i < s.length; i++) {
		if(!mapS[s[i]] && !mapT[t[i]]) {
			mapS[s[i]] = t[i];
			mapT[t[i]] = s[i];
		} else if(mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) {
			return false;
		}
	}
	return true;
}

console.log('is isomorphic', isIsomorphic(st, ts));
