const findAnagrams = (a, b) => {
  const need = new Map();

  for (let each of b) {
    need.set(each, (need.get(each) ?? 0) + 1);
  }

  let matches = 0;
  const window = new Map();
  const ans = [];
  let left = 0;

  for (let right = 0; right < a.length; right++) {
    const c = a[right];
    window.set(c, (window.get(c) ?? 0) + 1);

    if (need.has(c)) {
      if (window.get(c) === need.get(c)) matches++;
      else if (window.get(c) === need.get(c) + 1) matches--;
    }

    if (right - left + 1 > b.length) {
      const d = a[left];
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) matches--;
        else if (window.get(d) === need.get(d) + 1) matches++;
      }

      window.set(d, window.get(d) - 1);
      left++;
    }

    if (matches === need.size) ans.push(left);
  }
  return ans;
};

console.log('find anagrams', findAnagrams('cbaebabacd', 'abc'));
