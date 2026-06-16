const isPalindrome = (s) => {
  const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log('clean', clean);
  let i = 0;
  let j = clean.length - 1;

  while (i < j) {
    if (clean[i++] !== clean[j--]) {
      return false;
    }
  }
  return true;
};

const isPalindromeA = (s) => {
  const isAlphaNum = (c) => {
    return /[a-z0-9]/i.test(c);
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
}

console.log('is palindrome', isPalindrome("A man, a plan, a canal: Panama"));
console.log('is palindromeA', isPalindromeA("A man, a plan, a canal: Panama"));
