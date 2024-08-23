const string = 'babad';
const longestPalindrome = (s) => {
  if(s.length < 2) return s;

  let start = 0, maxLength = 1;

  // helper function to expand around center
  function expandAroundCenter(left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    if(maxLength < right - left - 1) {
      start = left + 1;
      maxLength = right - left - 1;
    }
  }

  for(let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

const longestPalindrome = (s) => {
  if(s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    if(maxLength < right - left - 1) {
      start = left + 1;
      maxLength = right - left - 1;
    }
  }

  for(let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}

console.log('longest palindrome', longestPalindrome(string));
