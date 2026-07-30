const minWindow = (s, t) => {
  if (t.length === 0 || s.length < t.length) return '';

  const need = new Map();
  for (const c of t) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  const window = new Map();
  const required = need.size;
  let formed = 0;
  let left = 0;

  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const cIn = s[right];
    window.set(cIn, (window.get(cIn) ?? 0) + 1);

    if (need.has(cIn) && window.get(cIn) === need.get(cIn)) {
      formed++;
    }

    while (formed === required) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }

      const cOut = s[left];
      window.set(cOut, window.get(cOut) - 1);

      if (need.has(cOut) && window.get(cOut) < need.get(cOut)) {
        formed--;
      }

      left++;
    }
  }

  return bestLen === Infinity ? '' : s.slice(bestStart, bestStart + bestLen);
}

console.log('"ADOBECODEBANC","ABC" ->', minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log('"a","a"               ->', minWindow('a', 'a'));               // "a"
console.log('"a","aa"              ->', minWindow('a', 'aa'));              // ""
console.log('"a","b"               ->', minWindow('a', 'b'));               // ""
console.log('"ab","b"              ->', minWindow('ab', 'b'));              // "b"
