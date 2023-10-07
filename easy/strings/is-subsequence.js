const string = "abc";
const stringtwo = "ahbgdc";
function isSubsequence(s, t) {
  // code here
  if(s.length > t.length) {
    return false;
  }
  let j = 0;
  for(let i = 0; i < t.length; i++) {
    if(s[j] === t[i]) {
      j++;
    }
  }
  return j === s.length;
}

console.log('is subsequence', isSubsequence(string, stringtwo));
