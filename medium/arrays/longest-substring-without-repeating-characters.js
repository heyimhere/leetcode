// study course
const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let best = 0;
  const last = new Map();

  for (let right = 0; right < s.length; right++) {
    const chr = s[right];

    if (last.has(chr) && last.get(chr) >= left) {
      left = last.get(chr) + 1;
    }

    last.set(chr, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
};

console.log(
  "length of longest substring",
  lengthOfLongestSubstring("abcabcbb"),
);

const lengthOfLongestSubstringWord = (str) => {
  let left = 0;
  let bestlen = 0;
  let bestStart = 0;
  const last = new Map();

  for (let right = 0; right < str.lenth; right++) {
    const chr = str[right];

    if (last.has(chr) && last.get(chr) >= left) {
      left = last.get(chr) + 1;
    }

    last.set(chr, right);

    let diff = right - left + 1;

    if (diff > bestlen) {
      bestlen = diff;
      bestStart = left;
    }
  }

  return str.slice(bestStart, bestStart + bestlen);
};

console.log("best length word", lengthOfLongestSubstringWord("abciabcbb"));
