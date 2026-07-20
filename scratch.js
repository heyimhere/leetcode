const isAlnum = (c) => /[a-z0-9]/i.test(c);

const validPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlnum(s[l])) l++;
    while (l < r && !isAlnum(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
}

console.log(validPalindrome("A man, a plan, a canal: Panama")); // true
console.log(validPalindrome("race a car"));                     // false
console.log(validPalindrome(" "));                              // true
console.log(validPalindrome("0P"));                             // false
console.log(validPalindrome("ab_a"));                           // true
