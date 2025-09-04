const isPalindrome = (s) => {
  const clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log('clean', clean);
  let i = 0;
  let j = clean.length - 1;

  while(i < j) {
    if(clean[i++] !== clean[j--]) {
      return false;
    } 
  }
  return true;
};

console.log('is palindrome', isPalindrome("A man, a plan, a canal: Panama"));
