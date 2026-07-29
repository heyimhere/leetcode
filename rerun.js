const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const need = new Map();

  for (const c of s1) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  const window = new Map();
  const k = s1.length;

  const matches = () => {
    for (const [c, cnt] of need) {
      if ((window.get(c) ?? 0) !== cnt) return false;
    }
    return true;
  }

  for (let right = 0; right < s2.length; right++) {
    const cIn = s2[right];
    window.set(cIn, (window.get(cIn) ?? 0) + 1);

    if (right >= k) {
      const cOut = s2[right - k];
      window.set(cOut, window.get(cOut) - 1);
    }

    if (right >= k - 1 && matches()) {
      return true;
    }
  }

  return false;

}

console.log('"ab","eidbaooo"  ->', checkInclusion('ab', 'eidbaooo')); // true
console.log('"ab","eidboaoo"  ->', checkInclusion('ab', 'eidboaoo')); // false
console.log('"a","ab"         ->', checkInclusion('a', 'ab'));        // true
console.log('"adc","dcda"     ->', checkInclusion('adc', 'dcda'));    // true
console.log('"abc","ab"       ->', checkInclusion('abc', 'ab'));      // false
