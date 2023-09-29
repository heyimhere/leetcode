const number = 121;
function isPalindrome(x) {
  // code here
  if(x < 0) return false;
  let rev = 0;
  for(let i = x; i >= 1; i = Math.floor(i/10)) {
    rev = rev * 10 + i % 10;
  }
  return rev === x;
}

console.log('is Palindrome number', isPalindrome(number));
