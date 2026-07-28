const lengthofLongestSubstring = (s) => {
  const seen = new Set();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    best = Math.max(best, right - left + 1);
  }
  return best;
}

console.log('"abcabcbb" ->', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('"bbbbb"    ->', lengthOfLongestSubstring('bbbbb'));    // 1
console.log('"pwwkew"   ->', lengthOfLongestSubstring('pwwkew'));   // 3
console.log('""         ->', lengthOfLongestSubstring(''));         // 0
console.log('"au"       ->', lengthOfLongestSubstring('au'));       // 2
console.log('"dvdf"     ->', lengthOfLongestSubstring('dvdf'));     // 3
