const hay = "hello";
const nee = "ll";
function strStr(haystack, needle) {
  // code here
  for(let i = 0; i < haystack.length; i++) {
    let isMatch = true;
    for(let j = 0; j < needle.length; j++) {
      if(haystack[i + j] !== needle[j]) {
        isMatch = false;
        break;
      }
    }
   if(isMatch) return i; 
  }
  return -1;
}

console.log('strStr', strStr(hay, nee));