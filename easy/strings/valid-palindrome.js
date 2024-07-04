const string = 'A man, a plan, a canal: Panama';
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  for(let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if(s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

// coding interview sample

console.log('is palindrome', isPalindrome(string));
