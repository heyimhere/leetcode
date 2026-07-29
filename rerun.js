
const characterReplacement = (s, k) => {
  const count = new Map();
  let left = 0;
  let maxFreq = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    count.set(c, (count.get(c) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, count.get(c));

    if (right - left + 1 - maxFreq > k) {
      const leftChar = s[left];
      count.set(leftChar, count.get(leftChar) - 1);
      left++;
    }

    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log('"ABAB", 2    ->', characterReplacement('ABAB', 2));    // 4
console.log('"AABABBA", 1 ->', characterReplacement('AABABBA', 1)); // 4
console.log('"AAAA", 0    ->', characterReplacement('AAAA', 0));    // 4
console.log('"ABCDE", 1   ->', characterReplacement('ABCDE', 1));   // 2
console.log('"", 2        ->', characterReplacement('', 2));        // 0
