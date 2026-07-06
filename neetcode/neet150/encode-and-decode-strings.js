// LC #271 — Encode and Decode Strings
//
// Design an algorithm to serialize a list of strings into a single string and
// deserialize it back to the original list. Input strings may contain ANY
// characters — ASCII, Unicode, and whatever delimiter you were tempted to
// use — so the encoding must survive arbitrary payloads.
//
// Examples:
//   ["neet","code","love","you"]  -> encode -> "4#neet4#code4#love3#you"
//                                 -> decode -> ["neet","code","love","you"]
//   ["","hello"]                  -> encode -> "0#5#hello"
//                                 -> decode -> ["","hello"]
//   ["a#b","cd"]                  -> encode -> "3#a#b2#cd"
//                                 -> decode -> ["a#b","cd"]
//
// Intuition:
//   The naive move is to join with a delimiter and split on it. That breaks
//   the instant an input contains the delimiter. We need an encoding the
//   decoder can parse without ever *searching* for a special character inside
//   payload text.
//
//   Length-prefix framing: before each string, write its length in decimal,
//   then a marker (#), then the string bytes. The decoder reads digits until
//   it hits '#' — that tells it the length. Then it reads exactly that many
//   characters as the payload, no scanning. '#' can appear freely inside
//   payloads because the decoder never looks for '#' inside a payload — only
//   in the length header before each one.
//
// Approach (length-prefix framing):
//   encode:
//     - for each s in strs: append `${s.length}#${s}` to result
//     - return result
//   decode:
//     - i = 0
//     - while i < s.length:
//         - walk j from i until s[j] === '#'
//         - len = parseInt(s.slice(i, j))
//         - push s.slice(j + 1, j + 1 + len)
//         - i = j + 1 + len
//     - return result
//
// Alternate approaches:
//   1) Escape-based delimiting: pick a delimiter (e.g. ','), and inside each
//      string escape '\' as '\\' and ',' as '\,'. Decoder walks char-by-char,
//      unescaping. Time/Space: same O(N). Correct but escape-of-escape logic
//      is the classic tripwire under interview pressure.
//   2) Non-printable delimiter (e.g. String.fromCharCode(257)): only safe if
//      inputs are guaranteed ASCII. The problem does not guarantee that, so
//      it's fragile — good trivia, weak interview answer.
//
// Complexity of the chosen solution:
//   Time:  O(N) — N = total characters across all strings. Encode walks each
//                  character once to concatenate; decode walks each character
//                  once via slice. parseInt on the length header is O(log len)
//                  but amortizes into the linear walk.
//   Space: O(N) — encoded string is proportional to total input size (plus a
//                  small constant per string for the length header). Decoded
//                  output holds all original characters again.

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

// ---------------------------------------------------------------------------
// Reference: escape-based delimiting
//
// Classic CSV-style escaping. Pick a delimiter (','), and inside each string
// double up backslashes ('\' -> '\\') and escape commas (',' -> '\,'). Decoder
// walks char-by-char: on '\', take the NEXT char as literal; on ',' end the
// current string. No length header needed.
//
// Known ambiguity: [] and [''] both encode to '' — you have to pick one to
// return. LC constraints usually guarantee a non-empty list, so this is a
// note more than a real problem. Length-prefix has no such ambiguity, which
// is another reason it's the interview-safer default.
// ---------------------------------------------------------------------------
class SolutionB {
  encode(strs) {
    return strs.map((s) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,')).join(',');
  }

  decode(s) {
    if (s === '') return [];
    const res = [];
    let cur = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '\\') {
        cur += s[i + 1];
        i++;
      } else if (s[i] === ',') {
        res.push(cur);
        cur = '';
      } else {
        cur += s[i];
      }
    }
    res.push(cur);
    return res;
  }
}

const codecB = new SolutionB();
const roundTripB = (strs) => codecB.decode(codecB.encode(strs));

console.log('B ["neet","code","love","you"] ->', roundTripB(['neet', 'code', 'love', 'you']));
console.log('B ["a,b","c"]                  ->', roundTripB(['a,b', 'c']));
console.log('B ["a\\\\b","c"]               ->', roundTripB(['a\\b', 'c']));
console.log('B ["a","","b"]                 ->', roundTripB(['a', '', 'b']));
