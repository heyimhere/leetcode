
class Solution {
  encode(strs) {
    let res = '';
    for (const s of strs) res += `${s.length}#${s}`;
    return res;
  }

  decode(s) {
    const res = [];
    let i = 0;
    while (i < s.length) {
      let j = i;
      while (s[j] !== '#') j++;
      const len = parseInt(s.slice(i, j));
      res.push(s.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }
    return res;
  }
}

const codec = new Solution();
const roundTrip = (strs) => codec.decode(codec.encode(strs));

console.log('["neet","code","love","you"] ->', roundTrip(['neet', 'code', 'love', 'you'])); // ["neet","code","love","you"]
console.log('["","hello"]                 ->', roundTrip(['', 'hello']));                    // ["","hello"]
console.log('["a#b","cd"]                 ->', roundTrip(['a#b', 'cd']));                    // ["a#b","cd"]
console.log('[""]                         ->', roundTrip(['']));                             // [""]
console.log('[]                           ->', roundTrip([]));                               // []

