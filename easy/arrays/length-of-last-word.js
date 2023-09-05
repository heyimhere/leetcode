const string = "   fly me   to   the moon  ";

function lengthOfLastWord(s) {
  // code here
  let breakingString = s.split(' ');
  breakingString = breakingString.filter(each => {
    if(each) {
      return each;
    }
  });
  const lastWord = breakingString[breakingString.length - 1];
  let count = 0;
  for(const each of lastWord) {
    count++;
  }
  return count;
}

console.log('length of last word', lengthOfLastWord(string));