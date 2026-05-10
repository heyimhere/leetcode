// LC #424 - Longest Repeating Character Replacement
// Difficulty: Medium | Pattern: Sliding Window
//
// Given a string s and int k, you may replace at most k characters.
// Return the length of the longest substring containing all the same letter
// you can get after those replacements.
//
// KEY INSIGHT: A window is valid when:
//   (window size) - (count of most frequent char in window) <= k
// If that condition breaks, shrink from the left.

const characterReplacement = (s, k) => {
  let left = 0;
  let maxFreq = 0;
  const currWindow = new Map();
  let max = 0;
  let currLen = 0;

  for(let right = 0; right < s.length; right++) {
    currWindow.set(s[right], (currWindow.get(s[right]) || 0) + 1);

    maxFreq = Math.max(...currWindow.values());
    currLen = right - left + 1;

    if(currLen - maxFreq > k) {
      currWindow.set(s[left], currWindow.get(s[left]) - 1);
      left++;
      currLen--;
    }

    max = Math.max(max, currLen);
  }

  return max;
}

console.log(characterReplacement("ABAB", 2));    // expected: 4
console.log(characterReplacement("AABABBA", 1)); // expected: 4
console.log(characterReplacement("AAAA", 2));    // expected: 4 (no replacements needed)
console.log(characterReplacement("ABCD", 1));    // expected: 2
